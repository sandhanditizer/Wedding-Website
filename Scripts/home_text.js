window.addEventListener('load', function () {
    setTimeout(function() {
        document.getElementById('home').classList.add('h1-visible'); // After any delay, show text
    }, 0); // Delay
});

// Set the date we're counting down to
const countDownDate = new Date("Aug 23, 2024 17:30:00").getTime();
const x = setInterval(function() {
    const now = new Date().getTime(); // Get the current date and time

    const distance = countDownDate - now; // Calculate the remaining time

    // Calculate days, hours, minutes, and seconds
    const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(3, '0');
    const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

    // Display the countdown
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000); // Update the countdown every 1 second