document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling when clicking on navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Adjust the duration to control the total scroll time (in milliseconds)
                const scrollDuration = 500; // ms
                const startPosition = window.scrollY;
                const targetPosition = targetElement.getBoundingClientRect().top + startPosition;
                const distance = targetPosition - startPosition;
                const startTime = performance.now();

                function cubicBezierEase(t) {
                    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
                }

                function scrollStep(timestamp) {
                    const currentTime = timestamp - startTime;
                    const progress = Math.min(currentTime / scrollDuration, 1);
                    const easedProgress = cubicBezierEase(progress);
                    window.scrollTo(0, startPosition + distance * easedProgress);

                    if (progress < 1) {
                        requestAnimationFrame(scrollStep);
                    }
                }

                requestAnimationFrame(scrollStep);
            }
        });
    });
});