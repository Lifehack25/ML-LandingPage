<script lang="ts">
	/**
	 * @component
	 * A FAQ section with toggleable accordions.
	 * Handles different types of answers (text vs dimensions).
	 */
	import viewport from '$lib/actions/viewport';
	import { slide } from 'svelte/transition';

	let questions = [
		{
			id: 1,
			question: 'What is a Memory Lock?',
			isOpen: false,
			answer:
				'A Memory Lock is a unique padlock featuring a laser-engraved QR code. When scanned, it opens a public digital album containing both images and videos, where your most cherished memories are permanently stored for the world to see.',
			type: 'text'
		},
		{
			id: 2,
			question: "What are the Memory Lock's dimensions?",
			isOpen: false,
			type: 'dimensions'
		},
		{
			id: 3,
			question: 'Can you remove the media once the lock is sealed?',
			isOpen: false,
			answer:
				'Yes. You always maintain full control to remove your media from the lock. However, after you have sealed the love lock, you cannot upload new media to it unless you explicitly choose to unseal it.',
			type: 'text'
		},
		{
			id: 4,
			question: 'Do you need an app to scan the lock and view the album?',
			isOpen: false,
			answer:
				'No, that is one of the main concepts of Memory Locks. Anyone with a smartphone can scan the love lock and the album will open in their internet browser.',
			type: 'text'
		}
	];

	function toggle(id: number) {
		questions = questions.map((q) => {
			if (q.id === id) {
				return { ...q, isOpen: !q.isOpen };
			}
			return q;
		});
	}
</script>

<section class="py-24 relative overflow-visible bg-white">
	<!-- Creative Wave Divider -->
	<div class="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10 -translate-y-[99%]">
		<svg
			class="relative block w-full h-16 md:h-24"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1440 320"
			preserveAspectRatio="none"
		>
			<path
				fill="#FFFFFF"
				fill-opacity="1"
				d="M0,128C480,220,960,30,1440,128L1440,320L0,320Z"
				class="md:hidden"
			></path>
			<path
				fill="#FFFFFF"
				fill-opacity="1"
				d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				class="hidden md:block"
			></path>
		</svg>
	</div>

	<!-- Ambient Background (Subtle variation from HowItWorks) -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div
			class="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-brand-200/20 rounded-full blur-[100px] -translate-y-1/2"
		></div>
		<div
			class="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-sky-200/20 rounded-full blur-[100px]"
		></div>
	</div>

	<div class="max-w-3xl mx-auto px-4 relative z-10">
		<div class="text-center mb-12">
			<h2
				use:viewport
				class="reveal-on-scroll text-3xl md:text-5xl font-serif text-gray-900 mb-4 leading-tight"
			>
				Questions & Answers
			</h2>
			<p use:viewport class="reveal-on-scroll reveal-delay-200 text-gray-600 font-light text-lg">
				Everything you need to know about your Memory Lock.
			</p>
		</div>

		<div class="space-y-4">
			{#each questions as q (q.id)}
				<div use:viewport class="reveal-on-scroll">
					<div
						class="bg-white/90 rounded-2xl border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
					>
						<button
							class="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
							on:click={() => toggle(q.id)}
						>
							<h3 class="text-lg md:text-xl font-serif text-gray-900">{q.question}</h3>
							<div
								class="flex-shrink-0 w-8 h-8 rounded-full bg-white/50 flex items-center justify-center transition-transform duration-300 {q.isOpen
									? 'rotate-180'
									: ''}"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5 text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</div>
						</button>

						{#if q.isOpen}
							<div transition:slide|local={{ duration: 300 }}>
								<div class="px-6 pb-6 pt-0">
									{#if q.type === 'text'}
										<p class="text-gray-700 font-light leading-relaxed">
											{q.answer}
										</p>
									{:else if q.type === 'dimensions'}
										<div class="grid grid-cols-3 gap-4 text-center max-w-sm">
											<div class="bg-white/50 rounded-lg p-3">
												<span class="block text-xs text-gray-500 uppercase tracking-wider mb-1"
													>Width</span
												>
												<span class="font-serif text-gray-900">4.5 cm</span>
											</div>
											<div class="bg-white/50 rounded-lg p-3">
												<span class="block text-xs text-gray-500 uppercase tracking-wider mb-1"
													>Height</span
												>
												<span class="font-serif text-gray-900">6.0 cm</span>
											</div>
											<div class="bg-white/50 rounded-lg p-3">
												<span class="block text-xs text-gray-500 uppercase tracking-wider mb-1"
													>Thickness</span
												>
												<span class="font-serif text-gray-900">0.9 cm</span>
											</div>
										</div>
									{/if}
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
