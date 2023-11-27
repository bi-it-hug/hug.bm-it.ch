var div = document.getElementsByTagName("*");
var toggle = false;

function toggleBorder() {
    for (var x = 0; x < div.length; x++) {

        if (!toggle) {
            div[x].style.border = "var(--wip-border)";

        } else {
            div[x].style.border = "none";
        }    
    }
    toggle = !toggle;
    console.log("border toggle:", toggle);
}