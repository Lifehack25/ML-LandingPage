let intersectionObserver: IntersectionObserver;

function ensureIntersectionObserver() {
    if (intersectionObserver) return;

    intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const eventName = entry.isIntersecting ? 'viewportEnter' : 'viewportLeave';
            entry.target.dispatchEvent(new CustomEvent(eventName));

            if (entry.isIntersecting) {
                entry.target.classList.add('intersected');

                // Remove delay classes after animation completes to fix hover responsiveness
                setTimeout(() => {
                    const classesToRemove = Array.from(entry.target.classList)
                        .filter(c => c.startsWith('reveal-delay-'));
                    entry.target.classList.remove(...classesToRemove);
                }, 2000);

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
