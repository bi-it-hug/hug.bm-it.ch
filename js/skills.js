var codingLevel = document.querySelectorAll(".coding-level")
var language = document.querySelectorAll(".language")
var partingLineVert = document.querySelectorAll(".parting-line-vert")
var progressionBar = document.querySelectorAll(".progression-bar")

var codingLevelPos = 3
var languagePos = 3
var partingLineVertPos = 1

window.addEventListener("scroll", () => {
    skillsOpacity = window.getComputedStyle(skills).opacity

    if (skillsOpacity >= 1) {
        var delay = 0

        progressionBar.forEach((element) => {
            var currentLanguageValue = parseInt(element.children[0].innerHTML)

            setTimeout(() => {
                element.style.width = `${currentLanguageValue}%`
                element.style.setProperty("opacity", "1", "important")
            }, delay);
            
            delay += 200
        })

    } else {
        var delay = 0

        progressionBar.forEach((element) => {

            setTimeout(() => {
                element.style.width = 0
                element.style.setProperty("opacity", "0", "important")
            }, delay);
            
            delay += 200
        })

    }
})


codingLevel.forEach((element) => {
    element.style.gridColumn = codingLevelPos
    codingLevelPos += 2
})

partingLineVert.forEach((element) => {
    element.style.gridColumn = partingLineVertPos
    partingLineVertPos += 2
})

language.forEach((languageElement, index) => {
    var progressionBarElement = progressionBar[index]
    languageElement.style.gridRow = languagePos
    progressionBarElement.style.gridRow = languagePos
    languagePos++
})