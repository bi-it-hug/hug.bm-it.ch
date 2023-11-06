var htmlElement = document.documentElement; // Select the HTML element
var isFontToggled = false;

document.addEventListener("keydown", function(event) {
    if (event.key === "i" && event.ctrlKey) {
        if (isFontToggled) {
            // If the font is already toggled, revert to the normal font
            htmlElement.style.fontFamily = "initial";
            console.log("Font reverted to normal");
        } else {
            // Toggle to the custom font
            htmlElement.style.fontFamily = "Press Start 2P !important";
            console.log("Font changed to Press Start 2P");
        }
        isFontToggled = !isFontToggled; // Toggle the font state
    }
});