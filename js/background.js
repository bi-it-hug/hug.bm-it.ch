var backgroundGif = document.getElementById("backgroundGif")
var speed = 0.1

window.addEventListener("scroll", () => {
    var scrollPosition = window.scrollY
    backgroundGif.style.transform = "translateY(-" + scrollPosition * speed + "px)"
})