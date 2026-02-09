<script lang="ts">
	/**
	 * @component
	 * Features a visual representation of locks on a map.
	 * Highlights the global connectivity aspect of the product.
	 */
	import viewport from '$lib/actions/viewport';
</script>

<section class="py-24 px-4 md:px-8 bg-white w-full">
	<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
		<div use:viewport class="reveal-scale-up order-2 md:order-1 relative group">
			<div
				class="absolute inset-0 bg-brand-200 rounded-full blur-3xl opacity-30 -z-10 transform -translate-x-10"
			></div>
			<div class="relative p-4">
				<img
					src="https://imagedelivery.net/Fh6D8c3CvE0G8hv20vsbkw/be15dfe6-d60d-41b7-c7b1-7cba0522b400/standard"
					alt="Map Detail"
					class="w-full max-w-lg lg:max-w-md mx-auto h-auto drop-shadow-2xl rounded-xl relative z-10 transform transition-transform hover:scale-105 duration-500"
				/>
			</div>
		</div>
		<div class="order-1 md:order-2 space-y-8">
			<h2
				use:viewport
				class="reveal-on-scroll text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight"
			>
				Leave a piece of <span class="text-brand-500 italic">you</span> in every corner of the world.
			</h2>
			<div class="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
				<p use:viewport class="reveal-on-scroll reveal-delay-200">
					Create a beautiful trail of Memory Locks on the map. See exactly where they reside and
					smile knowing that people all around the world are viewing your story.
				</p>
			</div>
		</div>
	</div>
</section>
