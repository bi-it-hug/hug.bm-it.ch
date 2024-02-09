var codingLevel = document.querySelectorAll(".coding-level")
var language = document.querySelectorAll(".language")
var partingLine = document.querySelectorAll(".parting-line")
var progressionBar = document.querySelectorAll(".progression-bar")

var codingLevelPos = 3
var languagePos = 3
var partingLinePos = 2

codingLevel.forEach((element) => {
    element.style.gridColumn = codingLevelPos
    codingLevelPos += 2
})

language.forEach((languageElement, index) => {
    var progressionBarElement = progressionBar[index]
    languageElement.style.gridRow = languagePos
    progressionBarElement.style.gridRow = languagePos
    languagePos++
})

partingLine.forEach((element) => {
    element.style.gridColumn = partingLinePos
    partingLinePos += 2
})