let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
    if (intersectionObserver) return;

    intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const eventName = entry.isIntersecting ? 'viewportEnter' : 'viewportLeave';
            entry.target.dispatchEvent(new CustomEvent(eventName));

            if (entry.isIntersecting) {
                entry.target.classList.add('intersected');
                // We want to keep observing to potentially support re-animations or just leave logic simple
                // If "once" behavior is strictly desired everywhere, we can unobserve. 
                // For now, let's keep it observed but typical usage is "animate-once" via CSS.
                // Actually, standard entrance animations usually only happen once.
                // Let's make it consistent: add 'intersected', keep it there.

                // If we want it to ONLY animate once per page load, we don't remove 'intersected' on leave.
                // If we want it to replay, we remove it.
                // Let's stick to "add only" for now to avoid scrolling up/down triggering it constantly.
                intersectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% visible
    });
}

export default function viewport(element: HTMLElement) {
    ensureIntersectionObserver();

    intersectionObserver.observe(element);

    return {
        destroy() {
            intersectionObserver.unobserve(element);
        }
    };
}
