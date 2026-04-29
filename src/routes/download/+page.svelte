<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CreativeButton from '$lib/components/ui/CreativeButton.svelte';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let { data } = $props();

	let mounted = $state(false);
	onMount(() => {
		mounted = true;
	});
</script>

<svelte:head>
	<title>Download Memory Locks</title>
	<meta name="description" content="Download the Memory Locks app on the App Store or Google Play." />
</svelte:head>

<div
	class="min-h-screen bg-brand-50 font-sans text-gray-900 selection:bg-brand-200 selection:text-brand-900"
>
	<Header />
	<main class="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
		{#key mounted}
			<div class="max-w-md mx-auto text-center space-y-10">
				<div>
					<h1
						in:fly={{ y: 20, duration: 800, delay: 300 }}
						class="text-4xl font-bold tracking-tight text-gray-900 mb-4"
					>
						Download Memory Locks
					</h1>
					<p in:fly={{ y: 20, duration: 800, delay: 380 }} class="text-lg text-gray-500">
						Choose your platform to get started
					</p>
				</div>

				<div
					in:fly={{ y: 20, duration: 800, delay: 460 }}
					class="flex flex-col items-center gap-4"
				>
					<CreativeButton href={data.appStoreUrl} className="w-64 py-4 text-lg">
						App Store
					</CreativeButton>

					<div
						class="w-64 py-4 text-base rounded-full bg-gray-200 text-gray-400 font-semibold cursor-not-allowed"
					>
						Google Play · Coming Soon
					</div>
				</div>

				<div in:fly={{ y: 20, duration: 800, delay: 540 }} class="flex justify-center pt-4">
					<CreativeButton
						href="/"
						className="px-8 py-3 shadow-lg hover:shadow-xl hover:shadow-brand-500/30"
					>
						Back to Landing Page
					</CreativeButton>
				</div>
			</div>
		{/key}
	</main>
	<Footer />
</div>
