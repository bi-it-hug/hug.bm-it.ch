var aboutSection = document.getElementById("aboutSection")
var aboutSectionText = aboutSection.children[1]
var timeline = document.getElementById("timeline")

var skillsSection = document.getElementById("skillsSection")
var skillsSectionText = skillsSection.firstElementChild
var skillsSectionHeader = skillsSection.children[1]
var skillsHeading = document.getElementById("skillsHeading")
var skills = document.getElementById("skills")

var contactSection = document.getElementById("contactSection")
var mailForm = document.getElementsByTagName("form")[0]
var socials = document.getElementById("socials")

window.addEventListener("resize", () => {
    var windowWidth = window.innerWidth

    if (windowWidth < 1000) {

        aboutSectionText.style.gridColumn = 1
        aboutSectionText.style.gridRow = 2
        timeline.style.gridColumn = 1
        timeline.style.gridRow = 3

        skillsHeading.style.gridRow = 3
        skillsSectionHeader.style.gridColumn = 1
        skillsSectionText.style.gridRow = 2
        skills.style.gridRow = 4

        contactSection.style.gridTemplateColumns = "1fr"
        mailForm.style.gridRow = "3 / 5"
        mailForm.style.gridColumn = 1
        socials.style.gridRow = 5

    } else {

        aboutSectionText.style.gridColumn = 2
        aboutSectionText.style.gridRow = 1
        timeline.style.gridColumn = "1 / 3"
        timeline.style.gridRow = 2

        skillsSectionHeader.style.gridColumn = 2
        skillsSectionText.style.gridRow = 1
        skills.style.gridRow = 3
        skillsHeading.style.gridRow = 2

        contactSection.style.gridTemplateColumns = "2fr 1fr"
        mailForm.style.gridRow = "1 / 3"
        mailForm.style.gridColumn = 2
        socials.style.gridRow = 3

    }

})