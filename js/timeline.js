const allTimelineFrames = document.querySelectorAll(".timeline-frame")
const timeline = allTimelineFrames[0].parentNode

let gridRowPos = 1
let gridColPos = 2
let index = 1
let framePadding = "10px 10px 0"

let timelineHorBorder = document.createElement("div")

timelineHorBorder.classList.add("timeline-hor-border")
timelineHorBorder.style.gridRow = 2
timelineHorBorder.style.gridColumn = "1 / 12"

timeline.appendChild(timelineHorBorder)

allTimelineFrames.forEach(frame => {
    let timelineVertBorder = document.createElement("div")

    timelineVertBorder.classList.add("timeline-vert-border")
    timelineVertBorder.style.gridRow = gridRowPos
    timelineVertBorder.style.gridColumn = gridColPos

    timeline.appendChild(timelineVertBorder)

    gridRowPos = (gridRowPos == 1) ? 3 : 1
    gridColPos += 2

    framePadding = (framePadding == "0 10px 10px") ? "10px 10px 0" : "0 10px 10px"
    frame.style.padding = framePadding

    index++

    //console.log(`Element ${index}:\nRow: ${gridRowPos}\nColumn: ${gridColPos}\n\n`);
})