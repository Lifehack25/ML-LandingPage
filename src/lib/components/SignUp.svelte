<script lang="ts">
	let email = $state('');
	let reservationEmail = $state('');
</script>

<section id="signup" class="py-24 px-4 md:px-8 max-w-7xl mx-auto">
	<div class="text-center mb-16 space-y-4">
		<h2 class="text-4xl md:text-5xl font-bold text-gray-900 font-serif">Join the Waitlist</h2>
		<p class="text-xl text-gray-600 font-light">Be the first to lock your memories.</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
		<!-- Free Tier -->
		<div
			class="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-xl hover:shadow-2xl transition-all flex flex-col"
		>
			<div class="mb-8">
				<h3 class="text-2xl font-bold text-gray-900 font-serif">Free Access</h3>
				<p class="text-brand-500 font-medium mt-2">Get notified when we launch</p>
			</div>
			<ul class="space-y-4 mb-8 text-gray-600 flex-grow">
				<li class="flex items-center gap-3">
					<span class="text-green-500 bg-green-50 rounded-full p-1">✓</span> Launch notification
				</li>
				<li class="flex items-center gap-3">
					<span class="text-green-500 bg-green-50 rounded-full p-1">✓</span> Monthly newsletter
				</li>
				<li class="flex items-center gap-3 opacity-50">
					<span class="text-gray-300 bg-gray-50 rounded-full p-1">×</span> Early bird discount
				</li>
			</ul>
			<form class="space-y-4" onsubmit={(e) => e.preventDefault()}>
				<input
					type="email"
					bind:value={email}
					placeholder="Enter your email"
					class="w-full px-6 py-4 rounded-xl border border-gray-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all bg-gray-50 focus:bg-white"
				/>
				<button
					class="w-full bg-gray-900 text-white font-semibold py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
				>
					Join Waitlist
				</button>
			</form>
		</div>

		<!-- Reservation Tier -->
		<div
			class="bg-gradient-to-br from-white via-brand-50/30 to-white p-8 md:p-10 rounded-[2rem] border-2 border-brand-200 shadow-2xl shadow-brand-100/50 relative overflow-hidden group transform hover:-translate-y-1 transition-all duration-300"
		>
			<div
				class="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl shadow-md"
			>
				RECOMMENDED
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
					<span class="font-semibold">40% Discount</span> on launch
				</li>
				<li class="flex items-center gap-3">
					<span class="bg-brand-100 text-brand-600 rounded-full p-1 text-xs">✓</span>
					Priority Early Access
				</li>
				<li class="flex items-center gap-3">
					<span class="bg-brand-100 text-brand-600 rounded-full p-1 text-xs">✓</span>
					Exclusive Founder's Badge
				</li>
			</ul>
			<form class="space-y-4 relative" onsubmit={(e) => e.preventDefault()}>
				<input
					type="email"
					bind:value={reservationEmail}
					placeholder="Enter your email"
					class="w-full px-6 py-4 rounded-xl border border-brand-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 outline-none transition-all bg-white shadow-sm"
				/>
				<button
					class="w-full bg-brand-500 text-white font-semibold py-4 rounded-xl hover:bg-brand-600 shadow-lg hover:shadow-brand-200/50 transition-all transform active:scale-[0.98]"
				>
					Reserve for €1
				</button>
			</form>
			<p class="text-xs text-center text-gray-400 mt-6 relative">
				Fully refundable deposit. Secure payment via Stripe.
			</p>
		</div>
	</div>
</section>
