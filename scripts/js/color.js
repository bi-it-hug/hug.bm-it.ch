const randomColorBox = document.getElementById("px1");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(${r}, ${g}, ${b})";
}

randomColorBox.style.backgroundColor = getRandomColor();