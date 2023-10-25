// Get the elements with class "column"
var elements = document.getElementsByClassName("gallery-column");

// Full-width images
function showOneColumn() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.flex = "100%"; 
    }
}

// Two images side by side
function showTwoColumns() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.flex = "40%"; 
    }
}

// Three images side by side
function showThreeColumns() {
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.flex = "25%"; 
    }
}
