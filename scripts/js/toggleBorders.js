var borderButton = document.getElementById("borderButton")
var div = document.getElementsByTagName("div")
var toggle = false

borderButton.addEventListener("click", function() {
    toggle = !toggle

    if (toggle) {
        for (var x = 0; x < div.length; x++) {
            div[x].style.border = "1px solid red"
        }

    } else {
        for (var x = 0; x < div.length; x++) {
            div[x].style.border = "0"
        }
    }
})