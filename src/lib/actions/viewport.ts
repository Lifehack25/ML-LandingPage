// Singleton IntersectionObserver to minimize memory usage
let intersectionObserver: IntersectionObserver;

/**
 * Initializes the singleton IntersectionObserver if it hasn't been created yet.
 * The observer listens for 'isIntersecting' changes and dispatches custom events.
 * It also handles the 'intersected' class for CSS animations and cleans up after itself.
 */
function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	intersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const eventName = entry.isIntersecting ? 'viewportEnter' : 'viewportLeave';
				entry.target.dispatchEvent(new CustomEvent(eventName));

				if (entry.isIntersecting) {
					// Add class to trigger CSS animations
					entry.target.classList.add('intersected');

					// CLEANUP: Remove delay classes after animation completes.
					// This is crucial because `transition-delay` can interfere with hover states/interactions
					// even after the transition has visually finished.
					setTimeout(() => {
						const classesToRemove = Array.from(entry.target.classList).filter((c) =>
							c.startsWith('reveal-delay-')
						);
						entry.target.classList.remove(...classesToRemove);
					}, 2000); // 2s buffer serves most animations

					// Stop observing once triggered (one-time animation)
					intersectionObserver.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.1 // Trigger when 10% of the element is visible
		}
	);
}

/**
 * Svelte Action: Viewport
 *
 * Uses the Intersection Observer API to detect when an element enters the viewport.
 * Useful for triggering scroll-based animations (scroll-reveal).
 *
 * Usage: <div use:viewport on:viewportEnter={...}>
 *
 * @param element - The DOM element to observe
 */
export default function viewport(element: HTMLElement) {
	ensureIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	};
}
