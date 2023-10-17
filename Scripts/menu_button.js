document.addEventListener('DOMContentLoaded', function () {
    // JavaScript function to toggle the navigation menu
    function toggleMenu() {
        var nav = document.querySelector('nav ul');
        nav.classList.toggle('show-menu');
    }

    function hideMenu() {
        var nav = document.querySelector('nav ul');
        nav.classList.remove('show-menu');
    }

    // Add an event listener to the button
    var menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleMenu);
    }

    // Add event listeners to each menu item to hide the menu when a selection is made
    var menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', hideMenu);
    });
});
