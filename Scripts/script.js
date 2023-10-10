document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling when clicking on navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Adjust the duration to control the total scroll time (in milliseconds)
                const scrollDuration = 400; // 1 second
                const startPosition = window.scrollY;
                const targetPosition = targetElement.offsetTop;
                const distance = targetPosition - startPosition;
                const startTime = performance.now();

                function cubicBezierEase(t, b, c, d) {
                    const p0 = 0;
                    const p1 = 0.42; // Adjust these control points as needed
                    const p2 = 0.58; // Adjust these control points as needed
                    const p3 = 1;
                
                    const t2 = t * t;
                    const t3 = t2 * t;
                
                    return b + c * (p0 * (1 - t3) + 3 * p1 * t2 * (1 - t) + 3 * p2 * t * t2 + p3 * t3);
                }

                function scrollStep(timestamp) {
                    const currentTime = timestamp - startTime;
                    const progress = Math.min(currentTime / scrollDuration, 1);
                    const easedProgress = cubicBezierEase(progress, 0, 1, 1);
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