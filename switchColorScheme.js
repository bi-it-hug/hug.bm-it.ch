var switchColorScheme = document.getElementById("switchColorScheme");
var wind = document.getElementById("wind");
var toggle = false;

switchColorScheme.addEventListener("click", function() {
    toggle = !toggle;

    if (toggle) {
        switchColorScheme.src = "images/moon.svg";
        wind.src = "images/wind-black.svg";
        document.documentElement.style.setProperty("--bg-01", "rgb(240, 240, 240)");
        document.documentElement.style.setProperty("--text", "rgb(20, 20 ,20)");

    } else {
        switchColorScheme.src = "images/sun.svg";
        wind.src = "images/wind.svg";
        document.documentElement.style.setProperty("--bg-01", "rgb(20, 20, 20)");
        document.documentElement.style.setProperty("--text", "rgb(240, 240, 240)");
    }
});