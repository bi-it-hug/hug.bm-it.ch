function addMouseEnterLeaveListenersToLinks() {
    const links = document.querySelectorAll("a, div");
    const pb = document.getElementById("pb");

    links.forEach(function(link) {
        link.addEventListener("mouseenter", function() {
            link.style.transition = "all 0.2s ease";
            console.log("Link Hover: true");
        });

        link.addEventListener("mouseout", function() {
            link.style.transition = "all 0.2s ease";
            console.log("Link Hover: false");
        });
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