var switchColorScheme = document.getElementById("switchColorScheme")
var borderButton = document.getElementById("borderButton")
var videoBackground = document.getElementById("videoBackground")
var toggle = false

switchColorScheme.addEventListener("click", function() {

    if (!toggle) {
        switchColorScheme.src = "images/header/moon.svg"
        borderButton.src = "images/header/wind-black.svg"
        videoBackground.src = "images/bg/Sequence 02.mp4"
        videoBackground.style.opacity = 1
        document.documentElement.style.setProperty("--box-bg-color", "rgb(240, 240, 240)")
        document.documentElement.style.setProperty("--text-color", "rgb(20, 20 ,20)")

    } else {
        switchColorScheme.src = "images/header/sun.svg"
        borderButton.src = "images/header/wind.svg"
        videoBackground.src = "images/bg/Sequence 01.mp4"
        videoBackground.style.opacity = 0.6
        document.documentElement.style.setProperty("--box-bg-color", "rgb(20, 20, 20)")
        document.documentElement.style.setProperty("--text-color", "rgb(240, 240, 240)")
    }

    toggle = !toggle
})