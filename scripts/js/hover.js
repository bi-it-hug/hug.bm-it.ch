var navButton = document.getElementById("navButton");
var stripes = document.getElementsByClassName("stripes");

navButton.addEventListener("mouseenter", function () {
    for (var x = 0; x < stripes.length; x++) {
        stripes[x].style.backgroundColor = "var(--dark-white)";
    }
});

navButton.addEventListener("mouseleave", function () {
    for (var x = 0; x < stripes.length; x++) {
        stripes[x].style.backgroundColor = "var(--font-color)";
    }
});