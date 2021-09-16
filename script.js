const container = document.getElementById("container");
const gridSizeButton = document.getElementById("grid-size-btn");
const clearScreen = document.getElementById("clear");
let activeClass = document.getElementsByClassName("active");



function makeGrid(size) {
    for (j = 0; j < size; j++) {
        for (i = 0; i < size; i++) {
            let div = document.createElement("div");
            div.className = "grid-square";

            container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
            container.appendChild(div);

            blackSquareOnMouseOver(div);

        }
    } 
}

function blackSquareOnMouseOver(currentDiv) {
    currentDiv.addEventListener("mouseover", () => {
        currentDiv.className = "active";
    });
}

// Change hovered div to random colour with each successive hover adding
// 10% more black.
function randomColourOnMouseOver(currentDiv) {
    currentDiv.addEventListener("mouseover", () => {
            // currentDiv.className = "coloured";
            let red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            let green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            let blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            currentDiv.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    });
}

function addMoreBlackColour(r, g, b) {
    r *= 0.1;
    g *= 0.1;
    b *= 0.1;
}

// Replace "active" class with "grid-square" for all elements
function clearGrid() {
    while (activeClass[0]) {
        activeClass[0].classList.replace("active", "grid-square");
        // activeClass[0].backgroundColor = "none";
    }
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

// Clear button
clearScreen.addEventListener("click", clearGrid);

// Grid Size button
gridSizeButton.addEventListener("click", gridSizePrompt);


// Call makeGrid(16) so grid doesn't show up empty on load
makeGrid(16);