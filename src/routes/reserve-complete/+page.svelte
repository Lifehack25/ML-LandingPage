<script lang="ts">
	let { data } = $props();
</script>

<div
	class="min-h-screen bg-gradient-to-br from-brand-50 to-white flex items-center justify-center p-4"
>
	<div
		class="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl max-w-lg w-full text-center border border-gray-100"
	>
		{#if data.status === 'success'}
			<div class="mb-6 flex justify-center">
				<div class="bg-green-100 p-4 rounded-full">
					<svg
						class="w-12 h-12 text-green-500"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
			</div>

			<h1 class="text-3xl font-serif font-bold text-gray-900 mb-4">Reservation Confirmed!</h1>

			<p class="text-gray-600 mb-8 text-lg">
				Thank you{#if data.customerName}, {data.customerName}{/if}! Your spot has been reserved for
				<strong>{data.email}</strong>.
			</p>

			<div class="bg-brand-50 rounded-xl p-6 mb-8 border border-brand-100">
				<p class="text-brand-800 font-medium mb-2">Check your inbox</p>
				<p class="text-brand-600 text-sm">
					We've sent a confirmation email with all the details about your reservation.
				</p>
			</div>

			<a
				href="/"
				class="inline-block w-full bg-brand-500 text-white font-semibold py-4 rounded-xl hover:bg-brand-600 transition-colors shadow-lg hover:shadow-brand-200/50"
			>
				Back to Home
			</a>
		{:else}
			<div class="mb-6 flex justify-center">
				<div class="bg-red-100 p-4 rounded-full">
					<svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
			</div>

			<h1 class="text-2xl font-serif font-bold text-gray-900 mb-4">Something went wrong</h1>

			<p class="text-gray-600 mb-8">
				{data.message || "We couldn't verify your reservation."}
			</p>

			<a
				href="/#reserve-signup"
				class="inline-block w-full bg-gray-900 text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors"
			>
				Try Again
			</a>
		{/if}
	</div>
</div>
