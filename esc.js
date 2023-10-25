document.addEventListener("keydown", function() {
    const key = event.key;

    if (key === "Escape") {
        window.location.assign("index.html");
    }
    else if (key === "0") {
        window.location.assign("index.html");
    }
    else if (key === "1") {
        window.location.assign("about%20me.html");
    }
    console.log("key pressed: ", key);
});