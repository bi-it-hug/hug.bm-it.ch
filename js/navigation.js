let title = document.getElementsByTagName("title")[0]
let header = document.getElementsByTagName("header")[0]
let headerHeight = header.offsetHeight

let welcomeButton = document.getElementById("welcomeButton")
let aboutButton = document.getElementById("aboutButton")
let skillsButton = document.getElementById("skillsButton")
let contactButton = document.getElementById("contactButton")

let welcomeSection = document.getElementById("welcomeSection")
let aboutSection = document.getElementById("aboutSection")
let skillsSection = document.getElementById("skillsSection")
let contactSection = document.getElementById("contactSection")

let hoverOpacity = 0.75

function updateTitle(section) {
    if (section == welcomeSection) {
        welcomeButton.style.opacity = hoverOpacity
        aboutButton.style.opacity = 1
        skillsButton.style.opacity = 1
        contactButton.style.opacity = 1
        title.innerHTML = "hug.bm-it.ch | welcome"

    } else if (section == aboutSection) {
        welcomeButton.style.opacity = 1
        aboutButton.style.opacity = hoverOpacity
        skillsButton.style.opacity = 1
        contactButton.style.opacity = 1
        title.innerHTML = "hug.bm-it.ch | about"

    } else if (section == skillsSection) {
        welcomeButton.style.opacity = 1
        aboutButton.style.opacity = 1
        skillsButton.style.opacity = hoverOpacity
        contactButton.style.opacity = 1
        title.innerHTML = "hug.bm-it.ch | skills"

    } else if (section == contactSection) {
        welcomeButton.style.opacity = 1
        aboutButton.style.opacity = 1
        skillsButton.style.opacity = 1
        contactButton.style.opacity = hoverOpacity
        title.innerHTML = "hug.bm-it.ch | contact"
    }
}

setTimeout(() => {
    welcomeButton.classList.remove("fadeInDown")
    aboutButton.classList.remove("fadeInDown")
    skillsButton.classList.remove("fadeInDown")
    contactButton.classList.remove("fadeInDown")
}, 700)

function checkCurrentSection() {
    let sections = [welcomeSection, aboutSection, skillsSection, contactSection]
    let scrollPos = window.scrollY + headerHeight

    for (let x = 0; x < sections.length; x++) {
        let section = sections[x]
        let rect = section.getBoundingClientRect()

        if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
            updateTitle(section)
            break
        }
    }
}

window.addEventListener("scroll", checkCurrentSection)

welcomeButton.addEventListener("click", () => {
    window.scrollTo({
        top: welcomeSection.offsetTop - headerHeight,
        behavior: "smooth"
    })
})

aboutButton.addEventListener("click", () => {
    window.scrollTo({
        top: aboutSection.offsetTop - headerHeight + 1,
        behavior: "smooth"
    })
})

skillsButton.addEventListener("click", () => {
    window.scrollTo({
        top: skillsSection.offsetTop - headerHeight + 1,
        behavior: "smooth"
    })
})

contactButton.addEventListener("click", () => {
    window.scrollTo({
        top: contactSection.offsetTop - headerHeight + 1,
        behavior: "smooth"
    })
})

checkCurrentSection()