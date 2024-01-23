function updateAge() {
    
    var birthdate = new Date("2003-11-03")
    var currentDate = new Date()

    var age = currentDate.getFullYear() - birthdate.getFullYear()

    if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById("age").textContent = age;
}

updateAge()
setInterval(updateAge, 24 * 60 * 60 * 1000)