/*
var placeholders = document.getElementsByClassName("placeholderSection")
var tests = document.querySelectorAll(".test")

for (var y = 0; y < placeholders.length; y++) {
    var placeholder = placeholders[y]
    for (var x = 0; x < 80; x++) {
        var test = document.createElement("p")
        test.classList.add("test")
        test.innerHTML = "⋅"
        placeholder.appendChild(test)
    }
}

tests.forEach((element, index) => {
    setInterval(() => {
        setTimeout(() => {
            element.classList.add("up")

            setTimeout(() => {
                element.classList.remove("up")
            }, 400)
        }, index * 20)
    },800)
})
*/