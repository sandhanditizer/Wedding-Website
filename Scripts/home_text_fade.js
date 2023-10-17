window.addEventListener('load', function () {
    // After a delay, add classes to trigger the animation
    setTimeout(function() {
        document.getElementById('home').classList.add('h1-visible');
    }, 0); // Delay

    setTimeout(function() {
        document.getElementById('home').classList.add('h2-visible');
    }, 1000); // Delay
});
