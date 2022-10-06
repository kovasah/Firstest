function handleRandomizeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + red + "," + green + "," + blue + ")";
    document.body.style.background = bgColor;
}

document.getElementById("btn").addEventListener('click', handleRandomizeColor)