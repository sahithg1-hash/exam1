
function changeColor() {
    var colors = ["blue", "red", "green", "yellow", "orange", "purple", "pink"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
 
    console.log("Attempting to change the color, current color is " +
        document.getElementById("elementToChange").style.color);
 
    document.getElementById("elementToChange").style.color = randomColor;
 
    console.log("Successfully changed color to: " +
        document.getElementById("elementToChange").style.color);
}
