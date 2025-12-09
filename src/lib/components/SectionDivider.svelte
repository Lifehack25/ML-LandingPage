<script>
	import { onMount } from 'svelte';

	let pathElement;
	let drawPathElement;
	let iconElement;

	onMount(() => {
		const updateAnimation = () => {
			if (!pathElement || !iconElement || !drawPathElement) return;

			const rect = pathElement.getBoundingClientRect();
			const viewportHeight = window.innerHeight;

			// Calculate progress based on scroll position relative to the element
			// Start animating when element enters viewport
			const start = viewportHeight;
			const end = -rect.height;
			const totalDistance = start - end;
			const currentPos = viewportHeight - rect.top;

			let progress = currentPos / totalDistance;
			progress = Math.max(0, Math.min(1, progress));

			// Get point on path
			const pathLength = pathElement.getTotalLength();
			const point = pathElement.getPointAtLength(pathLength * progress);

			// Calculate rotation angle
			// Get a point slightly ahead to calculate tangent
			const lookAhead = 0.01;
			const p2 = pathElement.getPointAtLength(
				Math.min(pathLength, pathLength * (progress + lookAhead))
			);
			const angle = (Math.atan2(p2.y - point.y, p2.x - point.x) * 180) / Math.PI;

			iconElement.style.transform = `translate(${point.x}px, ${point.y}px) rotate(${angle + 90}deg)`;

			// Draw effect: Update stroke-dashoffset of the drawing path
			drawPathElement.style.strokeDasharray = pathLength;
			drawPathElement.style.strokeDashoffset = pathLength * (1 - progress);
		};

		window.addEventListener('scroll', updateAnimation);
		// Initial setup
		if (pathElement) {
			const len = pathElement.getTotalLength();
			drawPathElement.style.strokeDasharray = len;
			drawPathElement.style.strokeDashoffset = len;
		}

		updateAnimation();

		return () => {
			window.removeEventListener('scroll', updateAnimation);
		};
	});
</script>

<div class="w-full relative h-48 overflow-hidden bg-brand-50" aria-hidden="true">
	<svg viewBox="0 0 1440 160" preserveAspectRatio="none" class="absolute bottom-0 w-full h-full">
		<defs>
			<linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
				<stop offset="0%" stop-color="#D13F48" stop-opacity="0.4" />
				<stop offset="50%" stop-color="#D13F48" />
				<stop offset="100%" stop-color="#D13F48" stop-opacity="0.4" />
			</linearGradient>
			<filter id="glow">
				<feGaussianBlur stdDeviation="2" result="coloredBlur" />
				<feMerge>
					<feMergeNode in="coloredBlur" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>

		<!-- Background decorative wave (static) -->
		<path d="M0,80 Q 360,130 720,80 T 1440,80 V160 H0 Z" fill="#FFD9DD" fill-opacity="0.3" />

		<!-- Base Guide Path (faint dashed line) -->
		<path
			bind:this={pathElement}
			d="M0,80 Q 360,130 720,80 T 1440,80"
			fill="none"
			stroke="#D13F48"
			stroke-width="1"
			stroke-dasharray="4 6"
			stroke-opacity="0.2"
		/>

		<!-- Drawing "Thread" Path -->
		<path
			bind:this={drawPathElement}
			d="M0,80 Q 360,130 720,80 T 1440,80"
			fill="none"
			stroke="url(#threadGradient)"
			stroke-width="3"
			stroke-linecap="round"
			filter="url(#glow)"
			class="transition-opacity duration-300"
		/>
	</svg>

	<!-- Floating Heart Icon -->
	<div
		bind:this={iconElement}
		class="absolute top-0 left-0 -ml-4 -mt-4 text-brand-500 will-change-transform z-10"
		style="transform: translate(-100px, -100px);"
	>
		<div class="relative transition-transform duration-300 hover:scale-125">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8 fill-white stroke-brand-500 stroke-2 drop-shadow-lg"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
				/>
			</svg>
		</div>
	</div>
</div>
