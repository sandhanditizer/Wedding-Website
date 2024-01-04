document.addEventListener('DOMContentLoaded', function () {
    // JavaScript function to toggle the navigation menu
    function toggleMenu() {
        var nav = document.querySelector('nav ul');
        nav.classList.toggle('show-menu');

        // Adjust the z-index when the menu is toggled
        var hotelsButtons = document.querySelectorAll('#info .hotels-button');
        hotelsButtons.forEach(function (button) {
            button.style.zIndex = '0';
        });

        var giftButtons = document.querySelectorAll('#registry .registry-button');
        giftButtons.forEach(function (button) {
            button.style.zIndex = '0';
        });

        var iframeMap = document.querySelector('#info iframe');
        iframeMap.style.zIndex = '0';

        var iframeForm = document.querySelector('#rsvp iframe');
        iframeForm.style.zIndex = '0';
    }

    function hideMenu() {
        var nav = document.querySelector('nav ul');
        nav.classList.remove('show-menu');

        // Reset the z-index when the menu is hidden
        var hotelsButtons = document.querySelectorAll('#info .hotels-button');
        hotelsButtons.forEach(function (button) {
            button.style.zIndex = '100';
        });

        var giftButtons = document.querySelectorAll('#registry .registry-button');
        giftButtons.forEach(function (button) {
            button.style.zIndex = '100';
        });

        var iframeMap = document.querySelector('#info iframe');
        iframeMap.style.zIndex = '100';

        var iframeForm = document.querySelector('#rsvp iframe');
        iframeForm.style.zIndex = '100';
    }

    // Add an event listener to the button
    var menuButton = document.getElementById('menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', function () {
            if (document.querySelector('nav ul').classList.contains('show-menu')) {
                hideMenu();
            } else {
                toggleMenu();
            }
        });
    }

    // Add event listeners to each menu item to hide the menu when a selection is made
    var menuItems = document.querySelectorAll('nav ul li a');
    menuItems.forEach(function (item) {
        item.addEventListener('click', hideMenu);
    });
});