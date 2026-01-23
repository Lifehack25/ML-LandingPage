<script lang="ts">
	import './layout.css';
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#key $page.url.pathname}
	<div
		class="grid-stack"
		in:fly={{
			x: $page.url.pathname === '/legal' ? 1000 : -1000,
			duration: 600,
			easing: cubicOut,
			opacity: 0
		}}
		out:fly={{
			x: $page.url.pathname === '/legal' ? -1000 : 1000,
			duration: 600,
			easing: cubicOut,
			opacity: 0
		}}
	>
		{@render children()}
	</div>
{/key}

<style>
	/* Stack pages on top of each other for transitions */
	:global(body) {
		overflow-x: hidden;
	}
	.grid-stack {
		display: grid;
		grid-template-areas: 'stack';
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>
