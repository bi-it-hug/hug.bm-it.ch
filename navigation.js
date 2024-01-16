var wel = document.getElementById("wel");
var abo = document.getElementById("abo");
var ski = document.getElementById("ski");
var con = document.getElementById("con");

var welPos = wel.getBoundingClientRect().x;
var aboPos = abo.getBoundingClientRect().x;
var skiPos = ski.getBoundingClientRect().x;
var conPos = con.getBoundingClientRect().x;

var navBut = document.getElementById("navButton");
var navButPos = navBut.getBoundingClientRect().x;
var toggle = false;

navBut.addEventListener("mouseenter", function() {
    toggle = !toggle

    if (!toggle) {
        wel.classList.add("welContracted");
        abo.classList.add("aboContracted");
        ski.classList.add("skiContracted");
        con.classList.add("conContracted");

    } else {
        wel.classList.remove("welContracted");
        abo.classList.remove("aboContracted");
        ski.classList.remove("skiContracted");
        con.classList.remove("conContracted");
    }
});