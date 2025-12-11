<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import heroImage from '$lib/assets/hero-image.png';
	import backgroundImage from '$lib/assets/background1.jpg';
	import CreativeButton from '$lib/components/ui/CreativeButton.svelte';

	let showSurprise = false;

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
		<img src={backgroundImage} alt="" class="w-full h-full object-cover" />
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
			<div class="space-y-8 animate-fade-in-up text-left">
				<h1
					class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] font-serif"
				>
					Share your <span class="text-brand-500 italic">story</span> with the world.
				</h1>
				<p class="text-xl text-gray-600 max-w-lg leading-relaxed font-light">
					A physical lock with a digital soul. Upload your memories, seal them in a lock, and let
					the world discover your story.
				</p>
				<p class="text-lg text-gray-600 mb-6 max-w-lg leading-relaxed">
					Join the waitlist and get notified when we launch.
				</p>

				<form
					class="flex flex-col sm:flex-row gap-4 pt-4 max-w-lg relative"
					on:submit|preventDefault
				>
					<input
						type="email"
						placeholder="Enter your email address"
						class="flex-1 px-6 py-4 rounded-full bg-white border border-gray-200 shadow-md focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200 transition-all font-light text-gray-600 placeholder:text-gray-500"
					/>
					<CreativeButton
						type="submit"
						className="px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl hover:shadow-brand-500/30 whitespace-nowrap"
					>
						Join Waitlist
					</CreativeButton>
				</form>

				<div class="mt-4 h-6">
					{#if showSurprise}
						<p
							in:fly={{ y: 20, duration: 800 }}
							class="text-base text-brand-600 font-medium italic"
						>
							A special surprise awaits our earliest customers! 🎉
						</p>
					{:else}
						<button
							on:click={triggerSurprise}
							class="text-sm text-gray-600 hover:text-brand-500 transition-colors cursor-pointer italic"
						>
							Psst...
						</button>
					{/if}
				</div>
			</div>
			<div class="relative">
				<div
					class="absolute inset-0 bg-brand-300 rounded-full blur-[100px] opacity-20 -z-10 transform translate-x-10 translate-y-10"
				></div>
				<img src={heroImage} alt="Memory Lock Product" class="w-full h-auto drop-shadow-2xl" />
			</div>
		</div>
	</div>
</section>
