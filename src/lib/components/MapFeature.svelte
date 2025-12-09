<script lang="ts">
	import mapImage from '$lib/assets/app-map.png';
</script>

<section class="py-24 px-4 md:px-8 max-w-7xl mx-auto">
	<div class="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
		<div class="order-2 md:order-1 relative group">
			<div
				class="absolute inset-0 bg-brand-200 rounded-full blur-3xl opacity-30 -z-10 transform -translate-x-10 group-hover:opacity-50 transition-opacity duration-500"
			></div>
			<div
				class="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 transform transition-transform duration-500 hover:scale-[1.01]"
			>
				<div
					class="absolute inset-0 bg-gradient-to-tr from-brand-500/10 to-transparent pointer-events-none"
				></div>
				<img src={mapImage} alt="Map of Memory Locks" class="w-full h-auto" />
			</div>
		</div>
		<div class="order-1 md:order-2 space-y-8">
			<h2 class="text-4xl md:text-6xl font-bold text-gray-900 font-serif leading-tight">
				Leave a piece of <span class="text-brand-500 italic">you</span> in every corner of the world.
			</h2>
			<div class="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
				<p>
					We mark the spots of your locks on the map. So that you can easily track where you
					attached them. As they are now pieces of your story.
				</p>
				<p>You can also see the number of visitors your locks receive.</p>
			</div>
			<div class="pt-4">
				<div
					class="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-brand-100 text-brand-600 text-sm font-medium"
				>
					<span class="relative flex h-3 w-3">
						<span
							class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"
						></span>
						<span class="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
					</span>
					Live Location Tracking
				</div>
			</div>
		</div>
	</div>
</section>
