var home = document.getElementById("home");
var aboutMe = document.getElementById("aboutMe");
var mySkills = document.getElementById("mySkills");
var contact = document.getElementById("contact");

navbarList = [home, aboutMe, mySkills, contact];

var item = document.getElementsByClassName("navbar-item");
var stripeBox = document.getElementById("stripeBox");
var toggle = false;

function toggleNavbar() {

    // expand
    if (!toggle) {

        setTimeout(()=> {
            home.classList.remove("home");
            aboutMe.classList.remove("aboutMe");
            mySkills.classList.remove("mySkills");
            contact.classList.remove("contact");
        },10);

        stripeBox.style.transform = "rotate(90deg)";
        
        navbarList.forEach(element => {
            element.style.display = "initial";
        });

    // collapse
    } else {

        home.classList.add("home");
        aboutMe.classList.add("aboutMe");
        mySkills.classList.add("mySkills");
        contact.classList.add("contact");

        stripeBox.style.transform = "rotate(0)";

        setTimeout(()=> {
            navbarList.forEach(element => {
                element.style.display = "none";
            });
        }, 400);
    }

    toggle = !toggle;
    console.log("navbar expanded:", toggle);
}