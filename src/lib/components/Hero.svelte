<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import CreativeButton from '$lib/components/ui/CreativeButton.svelte';
	import viewport from '$lib/actions/viewport';
	import { userState } from '$lib/state/user.svelte';

	let email = $state('');
	let showSurprise = $state(false);

	async function triggerSurprise(event: MouseEvent) {
		const target = event.currentTarget as HTMLElement;
		const rect = target.getBoundingClientRect();
		const x = (rect.left + rect.width / 2) / window.innerWidth;
		const y = (rect.top + rect.height / 2) / window.innerHeight;

		// Dynamically import confetti to avoid SSR issues
		const confetti = (await import('canvas-confetti')).default;

		showSurprise = true;
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { x, y }
		});
	}
</script>

<section class="relative overflow-hidden pt-32 pb-16 md:py-32 isolate">
	<!-- Background Elements -->
	<div class="absolute inset-0 z-0">
		<picture>
			<source
				media="(max-width: 767px)"
				srcset="https://imagedelivery.net/Fh6D8c3CvE0G8hv20vsbkw/5256f418-a509-4bc4-f24a-fdd07c12d500/heromobile"
			/>
			<img
				src="https://imagedelivery.net/Fh6D8c3CvE0G8hv20vsbkw/5256f418-a509-4bc4-f24a-fdd07c12d500/hero"
				alt=""
				class="w-full h-full object-cover"
			/>
		</picture>
		<div
			class="absolute inset-0 bg-gradient-to-r from-[#FFEBEE] via-[#FFEBEE]/70 to-transparent"
		></div>
	</div>
	<!-- Decorative Blob -->
	<div
		class="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-brand-100 rounded-full blur-3xl opacity-20 z-0 pointer-events-none"
	></div>

	<div class="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
		<div class="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
			<div class="space-y-8 text-left">
				<h1
					use:viewport
					class="reveal-on-scroll text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] font-serif"
				>
					Share your <span class="text-brand-500 italic">story</span> with the world.
				</h1>
				<p
					use:viewport
					class="reveal-on-scroll reveal-delay-200 text-xl text-gray-600 max-w-lg leading-relaxed font-light"
				>
					A physical lock with a digital soul. Upload your memories, seal them in a lock, and let
					the world discover your story.
				</p>
				<p
					use:viewport
					class="reveal-on-scroll reveal-delay-300 text-lg text-gray-600 mb-6 max-w-lg leading-relaxed"
				>
					Join the waitlist and get notified when we launch.
				</p>

				{#if userState.standardSuccess}
					<div
						use:viewport
						class="reveal-on-scroll reveal-delay-400 p-6 bg-green-50 border border-green-100 rounded-2xl max-w-lg mt-4 shadow-sm"
					>
						<div class="flex items-center gap-3 text-green-700">
							<div class="bg-green-100 p-2 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
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
							<div>
								<p class="font-semibold">You're on the waitlist!</p>
								<p class="text-sm opacity-90">Keep an eye on your inbox for updates.</p>
							</div>
						</div>
					</div>
				{:else}
					<form
						use:viewport
						class="reveal-on-scroll reveal-delay-400 flex flex-col sm:flex-row gap-4 pt-4 max-w-lg relative"
						onsubmit={(e) => {
							e.preventDefault();
							userState.handleStandardSignup(email);
						}}
					>
						<input
							type="email"
							bind:value={email}
							placeholder="Enter your email address"
							disabled={userState.isStandardLoading}
							class="flex-1 px-6 py-4 rounded-full bg-white border border-gray-200 shadow-md focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all font-light text-gray-600 placeholder:text-gray-500 disabled:opacity-60"
						/>
						<CreativeButton
							type="submit"
							className="px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-brand-500/30 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
							disabled={userState.isStandardLoading}
						>
							{#if userState.isStandardLoading}
								Joining...
							{:else}
								Join Waitlist
							{/if}
						</CreativeButton>

						{#if userState.standardError}
							<div class="absolute -bottom-8 left-6 text-red-500 text-sm">
								{userState.standardError}
							</div>
						{/if}
					</form>
				{/if}

				<div class="mt-4 h-6">
					{#if showSurprise}
						<p
							in:fly={{ y: 20, duration: 800 }}
							class="text-sm text-brand-600 font-medium italic bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-brand-100 inline-block"
						>
							A special surprise awaits our earliest customers! 🎉
						</p>
					{:else}
						<div class="reveal-on-scroll reveal-delay-500" use:viewport>
							<button
								onclick={triggerSurprise}
								class="text-sm text-gray-600 hover:text-brand-500 transition-colors cursor-pointer italic"
							>
								Psst...
							</button>
						</div>
					{/if}
				</div>
			</div>
			<div class="relative reveal-scale-up" use:viewport>
				<div
					class="absolute inset-0 bg-brand-300 rounded-full blur-[100px] opacity-20 -z-10 transform translate-x-10 translate-y-10"
				></div>
				<img
					src="https://imagedelivery.net/Fh6D8c3CvE0G8hv20vsbkw/b48d34e1-07d0-4db2-552a-80fa2d8e3600/standard"
					alt="Memory Lock Product"
					class="w-full h-full object-contain drop-shadow-2xl"
				/>
			</div>
		</div>
	</div>
	<div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-5">
		<svg
			data-name="Layer 1"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0.8667 1 0.1333"
			preserveAspectRatio="none"
			class="relative block w-full h-[60px] md:h-[100px]"
		>
			<path d="M0,0.8667 C0.2,0.9444 0.8,0.9444 1,0.8667 V1 H0 Z" fill="#FFEBEE"></path>
		</svg>
	</div>
</section>
