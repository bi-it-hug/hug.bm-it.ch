var everything = document.querySelectorAll("*")

window.addEventListener("resize", () => {
    everything.forEach(function(element) {
        element.style.transition = "none"
    })
})