<script lang="ts">
	import appIcon from '$lib/assets/app-icon.png';
	import uploadIcon from '$lib/assets/upload.png';
	import doneIcon from '$lib/assets/done.png';
</script>

<section class="py-32 px-4 relative overflow-hidden bg-[#FFEBEE]">
	<!-- Ambient Background -->
	<div class="absolute inset-0 overflow-hidden pointer-events-none">
		<div
			class="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-200/20 rounded-full blur-[100px] -translate-y-1/2"
		></div>
		<div
			class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-200/20 rounded-full blur-[100px]"
		></div>
	</div>

	<div class="max-w-7xl mx-auto relative z-10">
		<div class="text-center mb-24 max-w-2xl mx-auto">
			<h2 class="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">How it works</h2>
		</div>

		<div class="relative grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
			<!-- Connecting Line (Desktop) -->
			<div
				class="hidden md:block absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 z-0 pointer-events-none overflow-visible"
			>
				<svg class="w-full h-32 -mt-16 overflow-visible" preserveAspectRatio="none">
					<defs>
						<linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stop-color="#e7e5e4" stop-opacity="0" />
							<stop offset="15%" stop-color="#e7e5e4" />
							<stop offset="85%" stop-color="#e7e5e4" />
							<stop offset="100%" stop-color="#e7e5e4" stop-opacity="0" />
						</linearGradient>
					</defs>
					<path
						d="M 100 64 C 300 64, 300 24, 500 64 C 700 104, 700 64, 900 64"
						stroke="url(#lineGradient)"
						stroke-width="1.5"
						fill="none"
					/>
				</svg>
			</div>

			<!-- Step 1 -->
			<div class="group relative z-10">
				<div
					class="relative bg-white backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl shadow-brand-100/50 hover:shadow-2xl hover:shadow-brand-200/50 hover:-translate-y-2 transition-all duration-500"
				>
					<img
						src={appIcon}
						alt="Connect"
						class="w-16 h-16 object-contain mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500"
					/>
					<h3 class="text-xl font-serif text-gray-900 mb-3">1. Connect</h3>
					<p class="text-gray-600 font-light leading-relaxed">
						Download the app and connect the lock to your account.
					</p>
				</div>
			</div>

			<!-- Step 2 -->
			<div class="group relative z-10 md:mt-12">
				<div
					class="relative bg-white backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl shadow-brand-100/50 hover:shadow-2xl hover:shadow-brand-200/50 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
				>
					<img
						src={uploadIcon}
						alt="Upload"
						class="w-16 h-16 object-contain mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500"
					/>
					<h3 class="text-xl font-serif text-gray-900 mb-3">2. Upload</h3>
					<p class="text-gray-600 font-light leading-relaxed">
						Choose your most cherished moments and upload them.
					</p>
					<p class="text-sm text-gray-400 mt-auto pt-2">Both images and videos work.</p>
				</div>
			</div>

			<!-- Step 3 -->
			<div class="group relative z-10">
				<div
					class="relative bg-white backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl shadow-brand-100/50 hover:shadow-2xl hover:shadow-brand-200/50 hover:-translate-y-2 transition-all duration-500"
				>
					<img
						src={doneIcon}
						alt="Seal"
						class="w-16 h-16 object-contain mb-6 opacity-90 group-hover:scale-110 transition-transform duration-500"
					/>
					<h3 class="text-xl font-serif text-gray-900 mb-3">3. Publish</h3>
					<p class="text-gray-600 font-light leading-relaxed">
						Hit the publish button and seal your lock. It will now be visible for the world to see.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
