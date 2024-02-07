var timeline = document.getElementById("timeline")
var sectionDiv = document.querySelectorAll("section *")

var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6
}

var callback = (entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.transition = "all 0.5s"
            entry.target.style.opacity = 1

        } else {
            entry.target.style.opacity = 0
        }
    })
}

var observer = new IntersectionObserver(callback, options)

sectionDiv.forEach(function(element) {
    observer.observe(element)
})