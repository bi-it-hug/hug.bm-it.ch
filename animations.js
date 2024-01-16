var greeting = document.getElementById("greeting");

for (var letter = 0; letter < greeting.innerHTML.length; letter++) {
    var currentLetter = greeting.innerHTML[letter]
    console.log(currentLetter);

    setTimeout(function() {
        currentLetter.style.transform = "translateY(100px)";
    }, 100);

}