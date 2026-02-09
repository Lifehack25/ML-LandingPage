<script lang="ts">
	/**
	 * @component
	 * A modal component that handles the Stripe payment flow.
	 * Mounts Stripe Elements for valid card entry and confirms the payment.
	 */
	import { onMount } from 'svelte';
	import { loadStripe } from '@stripe/stripe-js';
	import { fade, scale } from 'svelte/transition';
	import type { Stripe, StripeElements, StripePaymentElement } from '@stripe/stripe-js';

	// Props
	/**
	 * @typedef {Object} Props
	 * @property {string} email - The user's email address, used to initialize the PaymentIntent.
	 * @property {() => void} onClose - Callback fired when the user closes the modal.
	 * @property {() => void} onSuccess - Callback fired after successful payment (though usually redirects).
	 */

	/** @type {Props} */
	let { email, onClose, onSuccess } = $props<{
		email: string;
		onClose: () => void;
		onSuccess: () => void;
	}>();

	// Reactive State
	let stripe: Stripe | null = $state(null);
	let elements: StripeElements | null = $state(null);
	let paymentElement: StripePaymentElement | null = $state(null);
	let isLoading = $state(true);
	let isProcessing = $state(false);
	let errorMessage = $state('');

	// Stripe Publishable Key (Safe to expose on client-side)
	// References the account specific to this project
	const PUBLIC_STRIPE_KEY =
		'pk_live_51Rht4kKvwl83EQ5FoOxvIXqKxApaSsbH9yAdAnzdYPSfPI7ENF9qRz3ohYzLA3CXBVoedc0JE4yJ0yQgmSL3kfC700is3wgv6b';

	onMount(async () => {
		// 1. Initialize Stripe.js
		// Asynchronously load the library to not block the main threat
		stripe = await loadStripe(PUBLIC_STRIPE_KEY);

		if (!stripe) {
			errorMessage = 'Failed to load payment system.';
			isLoading = false;
			return;
		}

		// 2. Fetch Client Secret from Backend
		try {
			const res = await fetch('/api/payment-intent', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email })
			});

			const data = await res.json();

			if (!res.ok) {
				throw new Error(data.message || 'Payment initialization failed.');
			}

			const { clientSecret } = data;

			if (!clientSecret) {
				throw new Error('Missing payment information from server.');
			}

			// 3. Mount Stripe Elements
			// We customize the appearance to seamlessly blend with our UI
			elements = stripe.elements({
				clientSecret,
				appearance: {
					theme: 'stripe',
					variables: {
						colorPrimary: '#0f172a', // Matching Tailwind gray-900 (Brand Dark)
						colorBackground: '#ffffff',
						colorText: '#374151', // gray-700
						colorDanger: '#ef4444', // red-500
						fontFamily: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif', // Consistent serif usage
						spacingUnit: '4px',
						borderRadius: '8px'
					}
				}
			});

			const paymentElementContainer = document.getElementById('payment-element');
			if (paymentElementContainer) {
				paymentElement = elements.create('payment');
				paymentElement.mount(paymentElementContainer);

				// Ensure spinner stays until UI is fully ready to prevent layout shift
				paymentElement.on('ready', () => {
					isLoading = false;
				});
			}
		} catch (e: any) {
			errorMessage = e.message || 'Failed to initialize payment.';
			isLoading = false;
		}
	});

	async function handleSubmit() {
		if (!stripe || !elements) return;

		isProcessing = true;
		errorMessage = '';

		// Confirm the payment using Stripe.js
		const { error } = await stripe.confirmPayment({
			elements,
			confirmParams: {
				return_url: `${window.location.origin}/reserve-complete?email=${encodeURIComponent(email)}`,
				payment_method_data: {
					billing_details: {
						email: email
					}
				}
			}
		});

		// Error Handling:
		// If execution reaches here, it means the redirection did not happen
		// usually due to a card error (insufficient funds) or validation error.
		if (error.type === 'card_error' || error.type === 'validation_error') {
			errorMessage = error.message || 'An unexpected error occurred.';
		} else {
			errorMessage = 'An unexpected error occurred.';
		}

		isProcessing = false;
	}
</script>

<div
	class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
	transition:fade={{ duration: 200 }}
>
	<!-- Backdrop -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
		onclick={onClose}
	></div>

	<!-- Modal -->
	<div
		class="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-8 shadow-2xl ring-1 ring-gray-900/5 sm:p-10"
		transition:scale={{ start: 0.95, duration: 200 }}
	>
		<!-- Close Button -->
		<button
			onclick={onClose}
			class="absolute right-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 transition-colors"
		>
			<span class="sr-only">Close</span>
			<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<div class="mb-8 text-center">
			<h3 class="text-2xl font-bold font-serif text-gray-900">Complete Reservation</h3>
			<p class="mt-2 text-gray-500">
				Secure your spot for just <span class="text-gray-900 font-medium">€1.00</span>
			</p>
		</div>

		<!-- Loading State -->
		{#if isLoading}
			<div
				class="absolute inset-0 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm z-10 rounded-2xl"
			>
				<svg
					class="animate-spin h-10 w-10 text-brand-500"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
					></circle>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					></path>
				</svg>
				<p class="text-sm text-gray-500 animate-pulse mt-4">Loading secure payment...</p>
			</div>
		{/if}

		<!-- Payment Form -->
		<form
			onsubmit={(e) => {
				e.preventDefault();
				handleSubmit();
			}}
			class:invisible={isLoading}
			class="transition-opacity duration-300"
		>
			<div id="payment-element" class="mb-6 min-h-[250px]">
				<!-- Stripe Elements will inject the UI here -->
			</div>

			{#if errorMessage}
				<div class="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-700" role="alert">
					{errorMessage}
				</div>
			{/if}

			<button
				type="submit"
				disabled={isProcessing || isLoading || !stripe || !elements}
				class="w-full rounded-xl bg-gray-900 py-4 text-base font-semibold text-white shadow-lg shadow-gray-900/10 hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform active:scale-[0.98]"
			>
				{#if isProcessing}
					<span class="flex items-center justify-center">
						<svg
							class="animate-spin -ml-1 mr-3 h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						Processing...
					</span>
				{:else}
					Pay €1.00 & Reserve
				{/if}
			</button>

			<div class="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
				<svg
					class="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
					/>
				</svg>
				Encrypted and secure payment by
				<img
					src="https://imagedelivery.net/Fh6D8c3CvE0G8hv20vsbkw/e3f53f64-de47-4135-be28-6495e8308800/icon"
					alt="Stripe"
					class="h-5 opacity-60 grayscale"
				/>
			</div>
		</form>
	</div>
</div>
```
