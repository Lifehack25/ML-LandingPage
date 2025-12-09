<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import heroImage from '$lib/assets/hero-image.png';
	import backgroundImage from '$lib/assets/background.png';

	let showSurprise = false;
</script>

<section class="relative overflow-hidden py-16 md:py-32 isolate">
	<!-- Background Elements -->
	<div class="absolute inset-0 z-0">
		<img src={backgroundImage} alt="" class="w-full h-full object-cover" />
		<div
			class="absolute inset-0 bg-gradient-to-r from-[#FFD9DD] via-[#FFD9DD]/70 to-transparent"
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
					Join the waitlist for our Kickstarter launch in May 2026. Be among the first couples to
					tell their story.
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
					<button
						type="submit"
						class="bg-brand-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 hover:bg-brand-600 whitespace-nowrap"
					>
						Join Waitlist
					</button>
				</form>

				<div class="mt-4 h-6">
					{#if showSurprise}
						<p in:fade class="text-sm text-brand-600 font-medium italic">
							A special surprise awaits our earliest customers!
						</p>
					{:else}
						<button
							on:click={() => (showSurprise = true)}
							class="text-sm text-gray-400 hover:text-brand-500 transition-colors cursor-pointer italic"
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
				<img
					src={heroImage}
					alt="Memory Lock Product"
					class="w-full h-auto drop-shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
				/>
			</div>
		</div>
	</div>
</section>
