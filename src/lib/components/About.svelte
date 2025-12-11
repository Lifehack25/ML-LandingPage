<script>
	import viewport from '$lib/actions/viewport';
</script>

<section id="concept" class="py-24 px-4 relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute inset-0 bg-brand-50/50 -z-20"></div>
	<div
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-100/30 rounded-full blur-3xl -z-10 animate-pulse"
	></div>

	<div class="max-w-3xl mx-auto">
		<div
			use:viewport
			class="reveal-scale-up relative bg-white p-12 md:p-16 rounded-[2rem] shadow-2xl shadow-brand-200/50 text-center transform hover:rotate-1 transition-transform duration-500 border border-brand-100"
		>
			<!-- Decorative seal -->
			<div
				class="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6 text-white"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</div>

			<div class="space-y-8 relative">
				<h2
					use:viewport
					class="reveal-on-scroll reveal-delay-200 text-4xl md:text-5xl font-serif text-brand-500 italic relative z-10"
				>
					"We keep your memories safe."
				</h2>

				<div class="space-y-6 text-xl text-gray-700 leading-relaxed font-light relative z-10">
					<p
						use:viewport
						class="reveal-on-scroll reveal-delay-300 font-serif italic text-2xl text-brand-400"
					>
						A love note to the future.
					</p>
					<p use:viewport class="reveal-on-scroll reveal-delay-400">
						The moments you seal will stay safe for 50 years or more, unless you choose to let them
						go. Revisit the lock years from when you sealed it, or let someone you love unlock your
						story when the time is right.
					</p>
				</div>

				<div class="pt-8 flex justify-center">
					<div class="w-16 h-1 bg-brand-200 rounded-full"></div>
				</div>
			</div>
		</div>
	</div>
</section>
