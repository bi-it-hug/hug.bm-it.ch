var switchColorScheme = document.getElementById("switchColorScheme");
var borderButton = document.getElementById("borderButton");
var toggle = false;

switchColorScheme.addEventListener("click", function() {
    toggle = !toggle;

    if (toggle) {
        switchColorScheme.src = "images/moon.svg";
        borderButton.src = "images/wind-black.svg";
        document.documentElement.style.setProperty("--box-bg-color", "rgb(240, 240, 240)");
        document.documentElement.style.setProperty("--text-color", "rgb(20, 20 ,20)");

    } else {
        switchColorScheme.src = "images/sun.svg";
        borderButton.src = "images/wind.svg";
        document.documentElement.style.setProperty("--box-bg-color", "rgb(20, 20, 20)");
        document.documentElement.style.setProperty("--text-color", "rgb(240, 240, 240)");
    }
});