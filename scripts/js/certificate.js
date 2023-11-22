var ctfc = document.getElementsByClassName("img-ctfc");

for (var x = 0; x < ctfc.length; x++) {
    ctfc[x].addEventListener("mouseenter", function() {
        ctfc[x].setAttribute('src', '/media/jpgs/certificates/html.png');
    });

    ctfc[x].addEventListener("mouseleave", function() {
        ctfc[x].setAttribute('src', '/media/pngs/PythonPNG.png');
    });
}