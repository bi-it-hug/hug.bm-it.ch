var home = document.getElementById("home");
var aboutMe = document.getElementById("aboutMe");
var mySkills = document.getElementById("mySkills");
var contact = document.getElementById("contact");

var item = document.getElementsByClassName("navbar-item");
var stripeBox = document.getElementById("stripeBox");
var toggle = false;

home.style.display = "none";
aboutMe.style.display = "none";
mySkills.style.display = "none";
contact.style.display = "none";

function toggleNavbar() {

    // expand
    if (!toggle) {

        setTimeout(function() {
            home.classList.remove("home");
            aboutMe.classList.remove("aboutMe");
            mySkills.classList.remove("mySkills");
            contact.classList.remove("contact");
        }, 10);

        stripeBox.style.transform = "rotate(90deg)";
        toggle = true;

        home.style.display = "initial";
        aboutMe.style.display = "initial";
        mySkills.style.display = "initial";
        contact.style.display = "initial";

    // collapse
    } else {

        home.classList.add("home");
        aboutMe.classList.add("aboutMe");
        mySkills.classList.add("mySkills");
        contact.classList.add("contact");

        stripeBox.style.transform = "rotate(0)";
        toggle = false;

        setTimeout(function() {
            home.style.display = "none";
            aboutMe.style.display = "none";
            mySkills.style.display = "none";
            contact.style.display = "none";
        }, 400);
    }
    console.log("navbar expanded:", toggle);
}
