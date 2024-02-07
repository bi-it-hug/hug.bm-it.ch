var stages = document.getElementsByClassName("stages")
var lang = document.getElementsByClassName("lang")
var partingLine = document.getElementsByClassName("parting-line")
var progressionBar = document.getElementsByClassName("progression-bar")

var stagePos = 2
var langPos = 2
var linePos = 3

for (var x = 0; x < stages.length; x++) {
    stages[x].style.gridColumn = stagePos
    stagePos += 2
}

for (var y = 0; y < lang.length; y++) {
    lang[y].style.gridRow = langPos
    progressionBar[y].style.gridRow = langPos

    langPos++
}

for (var z = 0; z < partingLine.length; z++) {
    partingLine[z].style.gridColumn = linePos
    linePos += 2
}