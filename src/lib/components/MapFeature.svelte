<script lang="ts">
	import mapImage from '$lib/assets/app-map.png';
</script>

<section class="py-24 px-4 md:px-8 bg-white w-full">
	<div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
		<div class="order-2 md:order-1 relative group">
			<div
				class="absolute inset-0 bg-brand-200 rounded-full blur-3xl opacity-30 -z-10 transform -translate-x-10"
			></div>
			<img
				src={mapImage}
				alt="Map of Memory Locks"
				class="w-full h-auto drop-shadow-2xl relative z-10"
			/>
		</div>
		<div class="order-1 md:order-2 space-y-8">
			<h2 class="text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight">
				Leave a piece of <span class="text-brand-500 italic">you</span> in every corner of the world.
			</h2>
			<div class="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
				<p>
					Create a beautiful trail of your memories on the map. See exactly where your locks live
					and smile knowing how many people have viewed your story.
				</p>
			</div>
		</div>
	</div>
</section>
