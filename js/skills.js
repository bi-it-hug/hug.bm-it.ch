const codingLevel = document.querySelectorAll(".coding-level")
const language = document.querySelectorAll(".language")
const progressionBar = document.querySelectorAll(".progression-bar")
const skills = language[0].parentNode
let columnPos = 2

codingLevel.forEach((element, index) => {

    if (index <= language.length) {

        //console.log("-------------------------------------------")

        let skillsVertBorder = document.createElement("div")
        skillsVertBorder.style.gridColumn = columnPos
        skillsVertBorder.classList.add("skills-vert-border")
        skills.appendChild(skillsVertBorder)
    }
    //console.log(element)
    columnPos += 2
})

let codingLevelPos = 3
let languagePos = 3
let partingLineVertPos = 1

window.addEventListener("scroll", () => {
    skillsOpacity = window.getComputedStyle(skills).opacity

    if (skillsOpacity >= 1) {
        let delay = 0

        progressionBar.forEach(element => {
            let currentLanguageValue = parseInt(element.children[0].innerHTML)

            setTimeout(() => {
                element.style.width = `${currentLanguageValue}%`
                element.style.setProperty("opacity", "1", "important")
            }, delay);
            
            delay += 200
        })

    } else {
        let delay = 0

        progressionBar.forEach(element => {

            setTimeout(() => {
                element.style.width = 0
                element.style.setProperty("opacity", "0", "important")
            }, delay);
            
            delay += 200
        })
    }
})


codingLevel.forEach(element => {
    element.style.gridColumn = codingLevelPos
    codingLevelPos += 2
})

/*
partingLineVert.forEach(element => {
    element.style.gridColumn = partingLineVertPos
    partingLineVertPos += 2
})
*/

language.forEach((languageElement, index) => {
    let progressionBarElement = progressionBar[index]
    languageElement.style.gridRow = languagePos
    progressionBarElement.style.gridRow = languagePos
    languagePos++
})