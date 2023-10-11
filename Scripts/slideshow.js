document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = 0; // Hide all images by default
        }

        slideIndex++;

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.opacity = 1; // Show the current slide with fade

        setTimeout(showSlides, 10000); // Change slide every 3 seconds (adjust as needed)
    }
});
