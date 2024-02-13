const parallax = document.querySelector(".parallax");
const popupWindow = document.getElementById("popupWindow");
const closePopup = document.getElementById("closePopup");

const mailMsg = document.getElementById("mailMessage");
const htmlCer = document.getElementById("htmlCertificate");
const pyCer = document.getElementById("pythonCertificate");

const targets = [pyCer, htmlCer, mailMsg];

function fillPopup(elementID) {
    popupWindow.style.display = "flex";
    parallax.style.filter = "blur(10px)";

    targets.forEach((target, index) => {

        if (index === elementID - 1) {
            target.style.display = "flex";

        } else {
            target.style.display = "none";
        }
    });

    console.log(elementID);
}

closePopup.addEventListener("click", () => {
    targets.forEach((target) => {
        target.style.display = "none";
    });
    popupWindow.style.display = "none";
    parallax.style.filter = "none";
});
