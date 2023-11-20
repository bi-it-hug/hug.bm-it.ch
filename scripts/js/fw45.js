//Aufgabe 2
function getDate() {
    let getDate = document.getElementById("get-date");
    getDate.innerHTML = Date();
}

//Aufgabe 4
document.addEventListener("DOMContentLoaded", function() {

    //num 1 & 2
    let num1Input = document.getElementById("num-1");
    let num2Input = document.getElementById("num-2");

    //operators
    let addButton = document.getElementById("add");
    let subtractButton = document.getElementById("subtract");
    let multiplyButton = document.getElementById("multiply");
    let divideButton = document.getElementById("divide");

    //result
    let resultOutput = document.getElementById("result");
    

    //adding a click function to each operator
    addButton.addEventListener("click", function() {
        calculateResult("add");
    });

    subtractButton.addEventListener("click", function() {
        calculateResult("subtract");
    });

    multiplyButton.addEventListener("click", function() {
        calculateResult("multiply");
    });

    divideButton.addEventListener("click", function() {
        calculateResult("divide");
    });

    //calculating the result
    function calculateResult(operation) {
        let num1 = parseFloat(num1Input.value);
        let num2 = parseFloat(num2Input.value);

        if (isNaN(num1) || isNaN(num2)) {
            resultOutput.textContent = "Ungültige Eingabe";
            return;
        }

        switch (operation) {
            case "add":
                resultOutput.textContent = num1 + num2;
                break;

            case "subtract":
                resultOutput.textContent = num1 - num2;
                break;

            case "multiply":
                resultOutput.textContent = num1 * num2;
                break;

            case "divide":
                if (num2 != 0) {
                    resultOutput.textContent = num1 / num2;
                    
                } else {
                    resultOutput.textContent = "Ungültige Division durch 0";
                }
                break;

            default:
                resultOutput.textContent = "Ungültige Operation";
        }
    }
});

//Aufgabe 5
function countdown() {
    let count = 10;
    let timerDisplay = document.getElementById("timer-display");

    let timer = setInterval(function() {
        timerDisplay.innerHTML = count;

        if (count < 0) {
            let growScore = document.getElementById("score");
            growScore.style.fontSize = "70px";

            clearInterval(timer);
            timerDisplay.innerHTML = "Time's up!";

            var allBoxes = document.querySelectorAll('input[type="checkbox"]');
            allBoxes.forEach(function(checkbox) {
                checkbox.checked = false;
            });
        }

        count--;
        console.log("time remaining:", count);

    }, 1000);
}

let firstLoop = 1
let score = 0;

function game() {

    if (!firstLoop <= 0) {
        countdown();
        firstLoop--;
    }

    let activeBox = Math.floor(Math.random() * 25) + 1;
    let dot = document.getElementById(activeBox.toString());
    let scoreBox = document.getElementById("score");

    dot.checked = true;
    console.log("active button:", activeBox);

    score++;
    scoreBox.innerHTML = score;

    dot.addEventListener("change", function() {
        if (!dot.checked) {
            console.log(activeBox, "has been unchecked");
        }
    });
}

// test
var item = document.getElementsByClassName("navbar-item");
var stripeBox = document.getElementById("stripeBox");

var toggle = false;

function expand() {

    if (!toggle) {

        for (var x = 0; x < item.length; x++) {
            item[x].classList.add("expand");
            item[x].classList.remove("collapse");
        }

        stripeBox.style.transform = "rotate(90deg)";
        toggle = true;

    } else {

        for (var x = 0; x < item.length; x++) {
            item[x].classList.add("collapse");
            item[x].classList.remove("expand");
        }

        stripeBox.style.transform = "rotate(0deg)";
        toggle = false;
    }
    console.log("nav toggle:", toggle);
}


// test
function tet() {
    stripeBox.addEventListener("mouseenter", function () {
        console.log("lol");
    });
}