var lang = document.getElementsByClassName("lang");

for (var x = 0; x < lang.length; x++) {
    lang[x].addEventListener("mouseenter", function() {
        console.log(this.clientWidth);
    });
}