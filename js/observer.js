var sectionDiv = document.querySelectorAll("section *")

var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6
}

var callback = (entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = 1
3
        } else {
            entry.target.style.opacity = 0
        }
    })
}

var observer = new IntersectionObserver(callback, options)

sectionDiv.forEach(element => {
    observer.observe(element)
})

/*
window.addEventListener("scroll", () => {
    var scrollPosY = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
    var aboutSectionTop = aboutSection.offsetTop
    var aboutSectionBottom = aboutSection.offsetTop + aboutSection.offsetHeight

    /*console.clear()
    console.log(`ScrollPos: ${scrollPosY}\nAboutTop: ${aboutSectionTop}\nAboutBottom: ${aboutSectionBottom}`)*//*

    if (scrollPosY >= aboutSectionTop && scrollPosY < aboutSectionBottom) {
        console.log("Within About Section")

    } else {
        console.clear()
    }
})
*/