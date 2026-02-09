<script lang="ts">
	/**
	 * @component
	 * A reusable button component with creative hover effects (shadows, gradients).
	 * Supports both anchor links (href) and button actions (onClick).
	 */
	export let href: string | undefined = undefined; // If provided, renders an <a> tag
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let onClick: ((e: MouseEvent) => void) | undefined = undefined;
	export let className: string = ''; // Additional CSS classes
	export let disabled: boolean = false;

	function handleClick(e: MouseEvent) {
		if (onClick) onClick(e);
	}
</script>

{#if href}
	<a
		{href}
		on:click={handleClick}
		class="cursor-pointer relative group inline-flex items-center justify-center overflow-hidden rounded-full
        bg-brand-500 text-white font-semibold transition-all duration-300 ease-out
        shadow-lg shadow-brand-500/20
        hover:shadow-2xl hover:shadow-brand-500/50 hover:-translate-y-1 hover:scale-[1.02]
        active:scale-95 active:shadow-sm active:translate-y-0
        {className}"
	>
		<!-- Subtle Gradient Overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
		></div>

		<!-- Content -->
		<div class="relative z-10">
			<slot />
		</div>
	</a>
{:else}
	<button
		{type}
		on:click={handleClick}
		{disabled}
		class="cursor-pointer relative group inline-flex items-center justify-center overflow-hidden rounded-full
        bg-brand-500 text-white font-semibold transition-all duration-300 ease-out
        shadow-lg shadow-brand-500/20
        hover:shadow-2xl hover:shadow-brand-500/50 hover:-translate-y-1 hover:scale-[1.02]
        active:scale-95 active:shadow-sm active:translate-y-0
        {className}"
	>
		<!-- Subtle Gradient Overlay -->
		<div
			class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
		></div>

		<!-- Content -->
		<div class="relative z-10">
			<slot />
		</div>
	</button>
{/if}
