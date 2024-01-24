var videoBackground = document.getElementById("videoBackground")
var speed = 0.1

window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY
    videoBackground.style.transform = "translateY(-" + scrollPosition * speed + "px)"
})