const container = document.getElementById("container");
const gridSizeButton = document.getElementById("grid-size-btn");
const clearScreen = document.getElementById("clear");
const rainbowMode = document.getElementById("rainbow-mode");
const blackMode = document.getElementById("black-mode");
const colourPicker = document.getElementById("colour-picker");

let DEFAULT_COLOUR = "black";
let currentColour = DEFAULT_COLOUR;

function makeGrid(size) {
    for (j = 0; j < size; j++) {
        for (i = 0; i < size; i++) {
            let div = document.createElement("div");
            div.className = "grid-square";
            div.style.backgroundColor = "transparent";

            container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
            container.appendChild(div);

            div.addEventListener("mouseover", colourGrid);
        }
    } 
}

function colourGrid(e) {
    if (currentColour === colourPicker.value) {
        e.target.style.backgroundColor = colourPicker.value;
    }
     else if (currentColour === "black") {
        e.target.style.backgroundColor = "black";
    }
     else if (currentColour === "rainbow") {
        e.target.style.backgroundColor = getRandomColour();
    }
}

function getRandomColour() {
    let red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
    let blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);

    let randomColour = "rgb(" + red + ", " + green + ", " + blue + ")";
    return randomColour;
}

function clearGrid() {
    document.querySelectorAll(".grid-square").forEach(square => {
        square.style.backgroundColor = "transparent";
    })
}

function gridSizePrompt() {
    let gridSize = parseInt(prompt("Please enter a value between 1-50", "16"));
    console.log(typeof gridSize)
    if (typeof gridSize === "number") {
        if (gridSize > 50 || gridSize < 1) {
            alert(`${gridSize} isn't between 1-50, defaulting to 16x16.`);
            clearGrid();
            makeGrid(16);
        } else {
            clearGrid();
            makeGrid(gridSize);
        }
        
    } else {
        return;
    }
}

// <--Event Listeners-->
clearScreen.addEventListener("click", clearGrid);

gridSizeButton.addEventListener("click", gridSizePrompt);

colourPicker.onchange = () => {
    currentColour = colourPicker.value;
}

blackMode.addEventListener("click", () => {
    currentColour = "black";
})

rainbowMode.addEventListener("click", () => {
    currentColour = "rainbow";
})

makeGrid(16);