const elements = {
    body: document.body,
    headerContent: document.querySelector('header'),
    mainContent: document.querySelector('main'),
    footerContent: document.querySelector('footer'),
    popupWindow: document.getElementById('popupWindow'),
    closePopup: document.getElementById('closePopup'),
    mailMsg: document.getElementById('mailMessage'),
    htmlCer: document.getElementById('htmlCertificate'),
    pyCer: document.getElementById('pythonCertificate'),
    primTrans: document.getElementById('primaryTranscript'),
    realTrans: document.getElementById('realTranscript'),
    ifautoTrans: document.getElementById('ifautoTranscript'),
    espasTrans: document.getElementById('espasTranscript'),
    impressum: document.getElementById('impressum'),
    inputs: document.querySelectorAll('input'),
    textareas: document.querySelectorAll('textarea'),
    backgroundGif: document.getElementById('backgroundGif'),
    overlay: document.getElementById('overlay'),
    lernTrans: document.getElementById('lernTranscript')
}

function fillPopup(elementID) {

    const { popupWindow, body, mailMsg, htmlCer, pyCer, primTrans, realTrans, ifautoTrans, lernTrans, espasTrans, impressum } = elements
    
    overlay.classList.add('toggle-overlay')
    setTimeout(() => {
        overlay.style.opacity = 0.5
    })
    
    popupWindow.style.display = 'flex'
    const targets = [primTrans, realTrans, ifautoTrans, lernTrans, espasTrans, pyCer, htmlCer, mailMsg, impressum]

    targets.forEach((target, index) => {
        if (index === elementID) {

            //console.info(`Index called from HTML: ${elementID}\nCurrent Iteration`)

            target.style.display = 'flex'
            target.style.alignSelf = 'center'
            target.style.justifySelf = 'center'

            if ([realTrans, ifautoTrans, espasTrans].includes(target)) {
                popupWindow.style.width = '60%'
                popupWindow.style.height = '80%'

            } else {
                popupWindow.style.width = 'fit-content'
                popupWindow.style.height = 'fit-content'
            }
        } else {
            target.style.display = 'none'
        }
    })
}

function clearInput() {
    const { inputs, textareas } = elements;
    [...inputs, ...textareas].forEach(el => el.value = '');
}

elements.closePopup.addEventListener('click', () => {
    const { popupWindow, body } = elements

    overlay.style.opacity = 0
    setTimeout(() => {
        overlay.classList.remove('toggle-overlay')
    }, 400)

    popupWindow.setAttribute('style', 'display: none position: fixed top: 0')
})