var body = document.body
var header = document.getElementById("header")
var headerHeight = parseFloat(window.getComputedStyle(header).height)

var welcomeButton = document.getElementById("welcomeButton")
var aboutButton = document.getElementById("aboutButton")
var skillsButton = document.getElementById("skillsButton")
var contactButton = document.getElementById("contactButton")

var welcomeSection = document.getElementById("welcomeSection")
var aboutSection = document.getElementById("aboutSection")
var skillsSection = document.getElementById("skillsSection")
var contactSection = document.getElementById("contactSection")

var welcomeSectionPos = welcomeSection.getBoundingClientRect().y
var aboutSectionPos = aboutSection.getBoundingClientRect().y
var skillsSectionPos = skillsSection.getBoundingClientRect().y
var contactSectionPos = contactSection.getBoundingClientRect().y

window.addEventListener("scroll", () => {
    getBodyPos()
})

function getBodyPos() {
    var bodyPos = body.getBoundingClientRect().y
    return bodyPos
}

welcomeButton.addEventListener("click", () => {

    var headerHeight = parseFloat(window.getComputedStyle(header).height)
    var welcomeSectionPos = welcomeSection.getBoundingClientRect().y
    var bodyPos = getBodyPos()
    title.innerHTML = "hug.bm-it.ch | welcome"

    window.scrollTo({
        top: welcomeSectionPos - headerHeight - bodyPos,
        behavior: "smooth"
    })
})

aboutButton.addEventListener("click", () => {

    var headerHeight = parseFloat(window.getComputedStyle(header).height)
    var aboutSectionPos = aboutSection.getBoundingClientRect().y
    var bodyPos = getBodyPos()
    title.innerHTML = "hug.bm-it.ch | about"

    window.scrollTo({
        top: aboutSectionPos - headerHeight - bodyPos,
        behavior: "smooth"
    })
})

skillsButton.addEventListener("click", () => {

    var headerHeight = parseFloat(window.getComputedStyle(header).height)
    var skillsSectionPos = skillsSection.getBoundingClientRect().y
    var bodyPos = getBodyPos()
    title.innerHTML = "hug.bm-it.ch | skills"
    
    window.scrollTo({
        top: skillsSectionPos - headerHeight - bodyPos,
        behavior: "smooth"
    })
})

contactButton.addEventListener("click", () => {
    var headerHeight = parseFloat(window.getComputedStyle(header).height)
    var contactSectionPos = contactSection.getBoundingClientRect().y
    var bodyPos = getBodyPos()
    title.innerHTML = "hug.bm-it.ch | contact"

    window.scrollTo({
        top: contactSectionPos - headerHeight - bodyPos,
        behavior: "smooth"
    })
})