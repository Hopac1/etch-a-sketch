const container = document.getElementById("container");
// const gridSizeSlider = document.getElementById("range");
const gridSizeButton = document.getElementById("grid-size-btn");
// const gridSizeLabel = document.getElementById("range-label");
const clearScreen = document.getElementById("clear");
let activeClass = document.getElementsByClassName("active");

function makeGrid(size) {
    // clearCurrentGrid()
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
    })
}

// Replace "active" class with "grid-square" with all elements
function clearGrid() {
    while (activeClass[0]) {
        activeClass[0].classList.replace("active", "grid-square");
    }
}

// Remove all div squares to minimize lag when resizing the grid
function clearCurrentGrid() {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
        gridSizePrompt();
    }
}

function gridSizePrompt() {
    let gridSize = parseInt(prompt("Please enter a value between 1-50", "16"));
    console.log(typeof gridSize)
    if (typeof gridSize === "number") {
        if (gridSize > 50) {
            alert(`${gridSize} is too big, defaulting to 16x16.`);
            clearGrid();
            makeGrid(16);
        } else {
            clearGrid();
            makeGrid(gridSize);
        }
        
    } 
}

// <--Event Listeners-->

// Clear button
clearScreen.addEventListener("click", clearGrid);

// Grid Size button
gridSizeButton.addEventListener("click", gridSizePrompt);


// Call makeGrid(16) so grid doesn't show up empty on load
makeGrid(16);