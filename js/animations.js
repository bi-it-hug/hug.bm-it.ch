var borderButton = document.getElementById("borderButton")
var duration = 1000

borderButton.addEventListener("click", () => {
    borderButton.classList.remove("fadeInDown")
    borderButton.classList.add("headShake")

    setTimeout(() => {
        borderButton.classList.remove("headShake")
        borderButton.classList.add("fadeInDown")

    }, duration)
})