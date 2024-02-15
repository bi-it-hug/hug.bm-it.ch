var body = document.body

const headerContent = document.querySelector("header")
const mainContent = document.querySelector("main")
const footerContent = document.querySelector("footer")

const popupWindow = document.getElementById("popupWindow")
const closePopup = document.getElementById("closePopup")

const mailMsg = document.getElementById("mailMessage")
const htmlCer = document.getElementById("htmlCertificate")
const pyCer = document.getElementById("pythonCertificate")
const primTrans = document.getElementById("primaryTranscript")

const inputs = document.querySelectorAll("input")
const textareas = document.querySelectorAll("textarea")

const targets = [pyCer, htmlCer, mailMsg, primTrans]

function fillPopup(elementID) {
    popupWindow.style.display = "flex"
    headerContent.style.filter = "blur(10px)"
    mainContent.style.filter = "blur(10px)"
    footerContent.style.filter = "blur(10px)"
    backgroundGif.style.filter = "blur(10px) opacity(0.3)"

    targets.forEach((target, index) => {

        if (index === elementID - 1) {
            target.style.display = "flex"

        } else {
            target.style.display = "none"
        }
    })
    body.style.overflowY = "hidden"
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
    headerContent.style.filter = "none"
    mainContent.style.filter = "none"
    footerContent.style.filter = "none"
    backgroundGif.style.filter = "opacity(0.3)"

   body.style.overflowY = "scroll"

    clearInput()
})