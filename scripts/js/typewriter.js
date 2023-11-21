document.addEventListener('DOMContentLoaded', function () {

    var dataText = [
        "Ziegelstein",
        "Blauwal",
        "Ketchup",
        "Regenschirm"
    ];

    var currentIndex = 0;
  
    function typeWriter(text, index, callback) {
      if (index < text.length) {
        document.querySelector("h2").innerHTML = text.substring(0, index + 1) + '<span aria-hidden="true"></span>';
        setTimeout(function () {
          typeWriter(text, index + 1, callback);
        }, 100);
      } else if (typeof callback == 'function') {
        setTimeout(callback, 700);
      }
    }
  
    function startTextAnimation() {
      if (currentIndex == dataText.length) {
        currentIndex = 0;
      }
  
      typeWriter(dataText[currentIndex], 0, function () {
        setTimeout(function () {
          startTextAnimation();
        }, 1000);
      });
  
      currentIndex++;
    }
  
    startTextAnimation();
  
  });