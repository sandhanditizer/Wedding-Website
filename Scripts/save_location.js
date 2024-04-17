// Function to save scroll position
function saveScrollPosition() {
    var scrollPosition = window.scrollY;
    sessionStorage.setItem('scrollPosition', scrollPosition);
}

// Function to restore scroll position
function restoreScrollPosition() {
    var scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, scrollPosition);
    }
}

// Event listener for page hide/unload to save scroll position
window.addEventListener('pagehide', saveScrollPosition);

// Event listener for page load to restore scroll position
window.addEventListener('load', restoreScrollPosition);

// Debounce function to prevent excessive saving of scroll position
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// Debounced function to save scroll position
const debouncedSaveScrollPosition = debounce(saveScrollPosition, 200);

// Event listener for scroll to save scroll position
window.addEventListener('scroll', debouncedSaveScrollPosition);
