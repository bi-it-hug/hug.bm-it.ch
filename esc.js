document.addEventListener("keydown", function() {
    const key = event.key;

    if (key === "Escape") {
        window.location.assign("index.html");
    }
}); 