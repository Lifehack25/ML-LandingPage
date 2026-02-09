<script lang="ts">
	/**
	 * @component
	 * The main signup section featuring two tiers: Free and Reservation (€1).
	 * Handles the reservation flow including triggering the Checkout modal.
	 */
	import viewport from '$lib/actions/viewport';
	import Checkout from './Checkout.svelte';
	let email = $state('');
	let reservationEmail = $state('');
	import { userState } from '$lib/state/user.svelte';

	// State for reservation signup
	let isReservationLoading = $state(false);
	let reservationError = $state('');
	let showCheckout = $state(false);

	function handleReservationSignup() {
		if (!reservationEmail) return;
		showCheckout = true;
	}
</script>

{#if showCheckout}
	<Checkout
		email={reservationEmail}
		onClose={() => (showCheckout = false)}
		onSuccess={() => {
			showCheckout = false;
			// Optional: Show success state here or redirect handled by Checkout
		}}
	/>
{/if}

<section id="signup" class="relative pt-24 pb-48 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
	<!-- Background Decoration -->
	<div
		class="absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/20 to-transparent pointer-events-none"
	></div>

	<div class="relative z-10 text-center mb-12 px-4">
		<h2
			use:viewport
			class="reveal-on-scroll text-4xl md:text-5xl font-bold text-gray-900 font-serif mb-4"
		>
			Join the Waitlist!
		</h2>
		<p use:viewport class="reveal-on-scroll reveal-delay-100 text-xl text-gray-600 font-light">
			Be among the first to share their story.
		</p>
	</div>

	<div class="relative z-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
		<!-- Free Tier -->
		<div
			use:viewport
			class="reveal-on-scroll reveal-delay-200 bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-200 ease-out flex flex-col"
		>
			<div class="mb-8">
				<h3 class="text-2xl font-bold text-gray-900 font-serif">Get notified when we launch</h3>
			</div>
			<ul class="space-y-4 mb-8 text-gray-600 flex-grow">
				<li class="flex items-center gap-3">
					<span class="text-green-500 bg-green-50 rounded-full p-1">✓</span> Launch Notification
				</li>
				<li class="flex items-center gap-3">
					<span class="text-green-500 bg-green-50 rounded-full p-1">✓</span> 30% Discount on Launch
				</li>
			</ul>

			<form
				class="space-y-4"
				onsubmit={(e) => {
					e.preventDefault();
					userState.handleStandardSignup(email);
				}}
			>
				{#if userState.standardSuccess}
					<div
						class="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-3xl p-8 text-center relative overflow-hidden group"
					>
						<!-- Decorative Background -->
						<div
							class="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30"
						></div>
						<div
							class="absolute bottom-0 left-0 -mb-8 -ml-8 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-30"
						></div>

						<!-- Success Icon Animation -->
						<div class="relative z-10 mb-6 flex justify-center">
							<div
								class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg shadow-green-100 animate-[bounce_1s_ease-out]"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-8 w-8 text-green-500"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>

						<h4 class="text-2xl font-bold text-gray-900 font-serif mb-2 relative z-10">
							Welcome Aboard!
						</h4>
						<p class="text-gray-600 relative z-10">
							You're officially on the list. We'll be in touch soon.
						</p>
					</div>
				{:else}
					<input
						type="email"
						required
						bind:value={email}
						placeholder="Enter your email"
						disabled={userState.isStandardLoading}
						class="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all bg-gray-50 focus:bg-white disabled:opacity-50"
					/>
					{#if userState.standardError}
						<p class="text-red-500 text-sm ml-2">{userState.standardError}</p>
					{/if}
					<button
						type="submit"
						disabled={userState.isStandardLoading}
						class="cursor-pointer w-full bg-gray-900 text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-all duration-200 ease-out shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center transform hover:-translate-y-0.5"
					>
						{#if userState.isStandardLoading}
							<svg
								class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
							Joining...
						{:else}
							Join Waitlist
						{/if}
					</button>
				{/if}
			</form>
		</div>

		<!-- Reservation Tier -->
		<div
			id="reserve-signup"
			use:viewport
			class="reveal-on-scroll reveal-delay-300 bg-gradient-to-br from-white via-brand-50/30 to-white p-8 md:p-10 rounded-[2rem] border-2 border-brand-200 shadow-2xl shadow-brand-100/50 relative overflow-hidden group transform hover:-translate-y-1 transition-all duration-200 ease-out"
		>
			<div
				class="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-md z-10"
			>
				MOST VALUE
			</div>
			<!-- Shimmer effect -->
			<div
				class="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"
			></div>

			<div class="mb-8 relative">
				<h3 class="text-2xl font-bold text-gray-900 font-serif">Reserve Your Spot</h3>
				<div class="flex items-baseline gap-2 mt-2">
					<span class="text-4xl font-bold text-brand-500">€1</span>
					<span class="text-gray-500">deposit</span>
				</div>
			</div>
			<ul class="space-y-4 mb-8 text-gray-700 relative">
				<li class="flex items-center gap-3">
					<span class="bg-brand-100 text-brand-600 rounded-full p-1 text-xs">✓</span>
					<span><span class="font-semibold">40% Discount</span> on Launch</span>
				</li>
				<li class="flex items-center gap-3">
					<span class="bg-brand-100 text-brand-600 rounded-full p-1 text-xs">✓</span>
					Exclusive Early Access
				</li>
				<li class="flex items-center gap-3">
					<span class="bg-brand-100 text-brand-600 rounded-full p-1 text-xs">✓</span>
					Launch Notification
				</li>
			</ul>
			<form
				class="space-y-4 relative"
				onsubmit={(e) => {
					e.preventDefault();
					handleReservationSignup();
				}}
			>
				<input
					type="email"
					required
					bind:value={reservationEmail}
					placeholder="Enter your email"
					disabled={isReservationLoading}
					class="w-full px-6 py-4 rounded-xl border border-brand-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all bg-white shadow-sm disabled:opacity-50"
				/>
				{#if reservationError}
					<p class="text-red-500 text-sm ml-2">{reservationError}</p>
				{/if}
				<button
					type="submit"
					disabled={isReservationLoading}
					class="cursor-pointer w-full bg-brand-500 text-white font-semibold py-4 rounded-xl hover:bg-brand-600 shadow-lg hover:shadow-brand-200/50 transition-all duration-200 ease-out transform active:scale-[0.98] disabled:opacity-70 disabled:transform-none flex items-center justify-center"
				>
					{#if isReservationLoading}
						<svg
							class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
						Redirecting...
					{:else}
						Reserve for €1
					{/if}
				</button>
			</form>
			<p
				class="text-sm text-center text-gray-400 mt-6 relative flex items-center justify-center gap-1"
			>
				Secure payment with<img
					src="https://imagedelivery.net/Fh6D8c3CvE0G8hv20vsbkw/e3f53f64-de47-4135-be28-6495e8308800/icon"
					alt="Stripe"
					class="h-5 opacity-60 grayscale"
				/>
			</p>
		</div>
	</div>
</section>
