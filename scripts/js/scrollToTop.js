var title = document.getElementById("title")

var wel = document.getElementById("wel")
var abo = document.getElementById("abo")
var ski = document.getElementById("ski")
var con = document.getElementById("con")

wel.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    title.innerHTML = "hug.bm-it.ch | welcome"
})

abo.addEventListener("click", function() {
    title.innerHTML = "hug.bm-it.ch | about"
})

ski.addEventListener("click", function() {
    title.innerHTML = "hug.bm-it.ch | skills"
})

con.addEventListener("click", function() {
    title.innerHTML = "hug.bm-it.ch | contact"
})