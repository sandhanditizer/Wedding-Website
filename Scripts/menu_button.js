// JavaScript function to toggle the navigation menu
document.addEventListener('DOMContentLoaded', function () {
    // JavaScript function to toggle the navigation menu
    function toggleMenu() {
        var nav = document.querySelector('nav ul');
        nav.classList.toggle('show-menu');
    }

    // Add an event listener to the button
    var menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }
});
