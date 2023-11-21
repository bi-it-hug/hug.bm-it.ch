var home = document.getElementById("home");
var aboutMe = document.getElementById("aboutMe");
var mySkills = document.getElementById("mySkills");
var contact = document.getElementById("contact");

var item = document.getElementsByClassName("navbar-item");
var stripeBox = document.getElementById("stripeBox");
var toggle = false;

function toggleNavbar() {

    // expand
    if (!toggle) {

        home.classList.remove("home");
        aboutMe.classList.remove("aboutMe");
        mySkills.classList.remove("mySkills");
        contact.classList.remove("contact");

        stripeBox.style.transform = "rotate(90deg)";
        toggle = true;
    
    // collapse
    } else {

        home.classList.add("home");
        aboutMe.classList.add("aboutMe");
        mySkills.classList.add("mySkills");
        contact.classList.add("contact");

        stripeBox.style.transform = "rotate(0)";
        toggle = false;
    }
    console.log("navbar expanded:", toggle);
}
