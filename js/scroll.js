var title = document.getElementsByTagName("title")[0]
var header = document.getElementsByTagName("header")[0]
var headerHeight = header.offsetHeight

var welcomeButton = document.getElementById("welcomeButton")
var aboutButton = document.getElementById("aboutButton")
var skillsButton = document.getElementById("skillsButton")
var contactButton = document.getElementById("contactButton")

var welcomeSection = document.getElementById("welcomeSection")
var aboutSection = document.getElementById("aboutSection")
var skillsSection = document.getElementById("skillsSection")
var contactSection = document.getElementById("contactSection")

function updateTitle(section) {
    if (section == welcomeSection) {
        title.innerHTML = "hug.bm-it.ch | welcome"

    } else if (section == aboutSection) {
        title.innerHTML = "hug.bm-it.ch | about"

    } else if (section == skillsSection) {
        title.innerHTML = "hug.bm-it.ch | skills"

    } else if (section == contactSection) {
        title.innerHTML = "hug.bm-it.ch | contact"
    }
}

function checkCurrentSection() {
    var sections = [welcomeSection, aboutSection, skillsSection, contactSection]
    var scrollPos = window.scrollY + headerHeight

    for (var x = 0; x < sections.length; x++) {
        var section = sections[x]
        var rect = section.getBoundingClientRect()

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
        top: aboutSection.offsetTop - headerHeight,
        behavior: "smooth"
    })
})

skillsButton.addEventListener("click", () => {
    window.scrollTo({
        top: skillsSection.offsetTop - headerHeight,
        behavior: "smooth"
    })
})

contactButton.addEventListener("click", () => {
    window.scrollTo({
        top: contactSection.offsetTop - headerHeight,
        behavior: "smooth"
    })
})

checkCurrentSection()