var pythonC = document.getElementById("pythonC");
var htmlC = document.getElementById("htmlC");

pythonC.addEventListener("mouseenter", function() {
    pythonC.src = "/media/images/certificates/python.png";
});

pythonC.addEventListener("mouseleave", function() {
    pythonC.src = "/media/pngs/PythonPNG.png";
});

htmlC.addEventListener("mouseenter", function() {
    htmlC.src = "/media/images/certificates/html.png";
});

htmlC.addEventListener("mouseleave", function() {
    htmlC.src = "/media/pngs/htmlPNG.png";
});
