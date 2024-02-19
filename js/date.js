const age = document.getElementById("age")
const birthday = new Date('2003-11-03')
const currentDate = new Date()

let currentAge = currentDate.getFullYear() - birthday.getFullYear()

if (
    currentDate.getMonth() < birthday.getMonth() ||
    (currentDate.getMonth() === birthday.getMonth() &&
        currentDate.getDate() < birthday.getDate())
) {
    currentAge--
}

age.innerHTML = currentAge