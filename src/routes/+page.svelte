<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import SectionDivider from '$lib/components/SectionDivider.svelte';
	import MapFeature from '$lib/components/MapFeature.svelte';
	import SignUp from '$lib/components/SignUp.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

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
	</main>
	<Footer />
</div>
