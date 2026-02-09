<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import SectionDivider from '$lib/components/SectionDivider.svelte';
	import MapFeature from '$lib/components/MapFeature.svelte';
	import SignUp from '$lib/components/SignUp.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import QA from '$lib/components/QA.svelte';
</script>

<svelte:head>
	<title>Memory Locks - Love locks with a digital media albums.</title>
	<link rel="canonical" href="https://memorylocks.com/" />
	<meta
		name="description"
		content="A physical lock with a digital soul. Upload your memories, seal them in a lock, and let the world discover your story."
	/>
	<meta name="robots" content="index, follow" />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Memory Locks - Love locks with a digital media albums." />
	<meta property="og:url" content="https://memorylocks.com/" />
	<meta property="og:site_name" content="Memory Locks" />
	<meta
		property="og:description"
		content="A physical lock with a digital soul. Upload your memories, seal them in a lock, and let the world discover your story."
	/>
	<meta
		property="og:image"
		content="https://imagedelivery.net/Fh6D8c3CvE0G8hv20vsbkw/64e3210e-2be0-43c9-a89e-21c6ca007900/standard"
	/>

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Memory Locks - Love locks with a digital media albums." />
	<meta
		name="twitter:description"
		content="A physical lock with a digital soul. Upload your memories, seal them in a lock, and let the world discover your story."
	/>
	<meta
		name="twitter:image"
		content="https://imagedelivery.net/Fh6D8c3CvE0G8hv20vsbkw/64e3210e-2be0-43c9-a89e-21c6ca007900/standard"
	/>
</svelte:head>

<div
	class="min-h-screen bg-brand-50 font-sans text-gray-900 selection:bg-brand-200 selection:text-brand-900"
>
	<Header />
	<main>
		<Hero />
		<HowItWorks />
		<SectionDivider />
		<About />
		<MapFeature />
		<SignUp />
		<QA />
	</main>
	<Footer />
</div>
