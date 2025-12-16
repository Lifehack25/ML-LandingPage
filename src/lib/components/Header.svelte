<script lang="ts">
	import { onMount } from 'svelte';
	import CreativeButton from '$lib/components/ui/CreativeButton.svelte';
</script>

<header
	class="absolute top-0 left-0 right-0 z-50 w-full py-6 px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto"
>
	<div class="flex items-center">
		<img
			src="https://imagedelivery.net/Fh6D8c3CvE0G8hv20vsbkw/43379da0-d88a-42ea-fec6-7b345c7e2800/thumb"
			alt="Memory Locks Logo"
			class="h-16 w-auto animate-fade-in-up"
			style="animation-delay: 0.1s;"
		/>
	</div>
	<nav>
		<CreativeButton
			href="#reserve-signup"
			onClick={(e) => {
				e.preventDefault();
				const signupSection = document.getElementById('reserve-signup');
				if (signupSection) {
					signupSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
				}
			}}
			className="px-6 py-2 shadow-lg hover:shadow-xl hover:shadow-brand-500/30 animate-fade-in-up"
		>
			Reserve Your Spot
		</CreativeButton>
	</nav>
</header>
