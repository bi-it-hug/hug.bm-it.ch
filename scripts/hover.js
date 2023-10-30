/*
const hover = document.getElementsByClassName("custom-hover-link");

hover.addEventListener("mouseenter", () => {
    hover.style.transition = "transform 0.2s";
    hover.style.color = "rgb(170, 170, 170)";
});

hover.addEventListener("mouseleave", () => {
    hover.style.transition = "transform 0.2s";
    hover.style.color = "rgb(255, 255, 255)";
});
*/



//////!!OLD CODE!!//////

/*
function addMouseEnterLeaveListenersToLinks() {
    var currentPage = window.location.href;
    const links = document.querySelectorAll("a");
    const pb = document.getElementById("pb");

    links.forEach(function(link) {
        if (currentPage.endsWith("index.html")) {
            link.addEventListener("mouseenter", function() {
                link.style.transition = "all 0.2s ease";
                console.log("home | Link Hover: true");
            });

            link.addEventListener("mouseout", function() {
                link.style.transition = "all 0.2s ease";
                console.log("home | Link Hover: false");
            });
        }
        else if (currentPage.endsWith("about%20me.html")) {
            link.addEventListener("mouseenter", function() {
                link.style.transition = "all 0.2s ease";
                console.log("about me | Link Hover: true");
            });

            link.addEventListener("mouseout", function() {
                link.style.transition = "all 0.2s ease";
                console.log("about me | Link Hover: false");
            });
        }
    });

    pb.addEventListener("mouseenter", function() {
        pb.style.transition = "0.2s ease";
        pb.style.transform = "scale(1.1)";
    });

    pb.addEventListener("mouseleave", function() {
        pb.style.transition = "0.2s ease";
        pb.style.transform = "scale(1)";
    });
}

addMouseEnterLeaveListenersToLinks();
*/