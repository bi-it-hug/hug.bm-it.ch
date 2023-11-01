const mainHeadID = document.getElementById("mainHeadID");
const subHeadID = document.getElementById("subHeadID");

const mainHeadText = "Hi there! I am Lorenzo";
const subHeadText = "and I am a first-year application developer at ESPAS Zürich";
const typingSpeed = 80

let mainCharIndex = 0;
let subCharIndex = 0;



function typeHead() {
    if (mainCharIndex < mainHeadText.length) {
        mainHeadID.textContent += mainHeadText.charAt(mainCharIndex);
        mainCharIndex++;
        setTimeout(typeHead, typingSpeed);
    }

    else if (subCharIndex < subHeadText.length) {
        subHeadID.textContent += subHeadText.charAt(subCharIndex);
        subCharIndex++;
        setTimeout(typeHead, typingSpeed);
    }

    else {
        console.log("head written");
    }
}

typeHead();