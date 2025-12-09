<script lang="ts">
	import logo from '$lib/assets/logo.png';
	import CreativeButton from '$lib/components/ui/CreativeButton.svelte';
</script>

<header class="w-full py-6 px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto">
	<div class="flex items-center">
		<img src={logo} alt="Memory Locks Logo" class="h-16 w-auto" />
	</div>
	<nav>
		<CreativeButton
			href="#signup"
			onClick={(e) => {
				e.preventDefault();
				const signupSection = document.getElementById('signup');
				if (signupSection) {
					signupSection.scrollIntoView({ behavior: 'smooth' });
				}
			}}
			className="px-6 py-2 shadow-lg hover:shadow-xl hover:shadow-brand-500/30"
		>
			Join Waitlist
		</CreativeButton>
	</nav>
</header>
