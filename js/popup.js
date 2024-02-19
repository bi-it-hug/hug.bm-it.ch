const htmlBody = document.body

const headerContent = document.querySelector("header")
const mainContent = document.querySelector("main")
const footerContent = document.querySelector("footer")

const popupWindow = document.getElementById("popupWindow")
const closePopup = document.getElementById("closePopup")
const circle = document.querySelector("circle")

const mailMsg = document.getElementById("mailMessage")
const htmlCer = document.getElementById("htmlCertificate")
const pyCer = document.getElementById("pythonCertificate")

const primTrans = document.getElementById("primaryTranscript")
const realTrans = document.getElementById("realTranscript")
const ifautoTrans = document.getElementById("ifautoTranscript")
const espasTrans = document.getElementById("espasTranscript")

const inputs = document.querySelectorAll("input")
const textareas = document.querySelectorAll("textarea")

const targets = [pyCer, htmlCer, mailMsg, primTrans, realTrans, ifautoTrans, espasTrans]

function fillPopup(elementID) {
    popupWindow.style.display = "flex"
    headerContent.style.filter = "blur(10px)"
    mainContent.style.filter = "blur(10px)"
    footerContent.style.filter = "blur(10px)"
    backgroundGif.style.filter = "blur(10px) opacity(0.3)"

    targets.forEach((target, index) => {
        if (index == elementID) {
            target.style.display = "grid"
            
            if (target.id == realTrans.id || target.id == ifautoTrans.id || target.id == espasTrans.id) {
                popupWindow.style.position = "absolute"
                popupWindow.style.top = "2100px"
                htmlBody.style.overflowY = "scroll"

            } else {
                htmlBody.style.overflowY = "hidden"
            }

        } else {
            target.style.display = "none"
        }
    })
}

function clearInput() {
    inputs.forEach(input => {
        input.value = ""
    })

    textareas.forEach(textarea => {
        textarea.value = ""
    })
}

closePopup.addEventListener("click", () => {
    targets.forEach(target => {
        target.style.display = "none"
    })

    popupWindow.style.display = "none"
    popupWindow.style.position = "fixed"
    popupWindow.style.top = 0
    headerContent.style.filter = "none"
    mainContent.style.filter = "none"
    footerContent.style.filter = "none"
    backgroundGif.style.filter = "opacity(0.3)"

    htmlBody.style.overflowY = "scroll"

    clearInput()
})