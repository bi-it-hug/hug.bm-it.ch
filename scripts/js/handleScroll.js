let body = document.body
let title = document.getElementById("title")
let header = document.getElementById("header")
let headerHeight = parseFloat(window.getComputedStyle(header).height)

let welcomeButton = document.getElementById("welcomeButton")
let aboutButton = document.getElementById("aboutButton")
let skillsButton = document.getElementById("skillsButton")
let contactButton = document.getElementById("contactButton")

let welcomeSection = document.getElementById("welcomeSection")
let aboutSection = document.getElementById("aboutSection")
let skillsSection = document.getElementById("skillsSection")
let contactSection = document.getElementById("contactSection")

let welcomeSectionPos = welcomeSection.getBoundingClientRect().y
let aboutSectionPos = aboutSection.getBoundingClientRect().y
let skillsSectionPos = skillsSection.getBoundingClientRect().y
let contactSectionPos = contactSection.getBoundingClientRect().y

function getBodyPos() {
    let bodyPos = body.getBoundingClientRect().y
    return bodyPos
}

welcomeButton.addEventListener("click", function() {

    let headerHeight = parseFloat(window.getComputedStyle(header).height)
    let welcomeSectionPos = welcomeSection.getBoundingClientRect().y
    let bodyPos = getBodyPos()
    title.innerHTML = "hug.bm-it.ch | welcome"

    window.scrollTo({
        top: welcomeSectionPos - headerHeight - bodyPos,
        behavior: "smooth"
    })
})

aboutButton.addEventListener("click", function() {

    let headerHeight = parseFloat(window.getComputedStyle(header).height)
    let aboutSectionPos = aboutSection.getBoundingClientRect().y
    let bodyPos = getBodyPos()
    title.innerHTML = "hug.bm-it.ch | about"

    window.scrollTo({
        top: aboutSectionPos - headerHeight - bodyPos,
        behavior: "smooth"
    })
})

skillsButton.addEventListener("click", function() {

    let headerHeight = parseFloat(window.getComputedStyle(header).height)
    let skillsSectionPos = skillsSection.getBoundingClientRect().y
    let bodyPos = getBodyPos()
    title.innerHTML = "hug.bm-it.ch | skills"
    
    window.scrollTo({
        top: skillsSectionPos - headerHeight - bodyPos,
        behavior: "smooth"
    })
})

contactButton.addEventListener("click", function() {
    let headerHeight = parseFloat(window.getComputedStyle(header).height)
    let contactSectionPos = contactSection.getBoundingClientRect().y
    let bodyPos = getBodyPos()
    title.innerHTML = "hug.bm-it.ch | contact"

    window.scrollTo({
        top: contactSectionPos - headerHeight - bodyPos,
        behavior: "smooth"
    })
})