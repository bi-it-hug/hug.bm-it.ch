var vertBorder = document.querySelectorAll(".vert-border")
var gridRowPos = 1
var gridColumnPos = 2
var counter = 1

vertBorder.forEach((currentElement) => {

    //console.log(`Element ${counter}:\nRow: ${gridRowPos}\nColumn: ${gridColumnPos}\n\n`)

    currentElement.style.gridRow = gridRowPos
    currentElement.style.gridColumn = gridColumnPos

    gridRowPos = (gridRowPos == 1) ? 3 : 1
    gridColumnPos += 2
    counter++
})