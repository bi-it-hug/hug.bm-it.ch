const age = document.getElementById("age")
const birthday = new Date('2003-11-03');
const currentDate = new Date();

// Calculate the difference in years
let currentAge = currentDate.getFullYear() - birthday.getFullYear();

// Check if the birthday has occurred this year
// If the current date is before the birthday in the current year,
// subtract 1 from the age
if (
    currentDate.getMonth() < birthday.getMonth() ||
    (currentDate.getMonth() === birthday.getMonth() &&
        currentDate.getDate() < birthday.getDate())
) {
    currentAge--;
}

age.innerHTML = currentAge