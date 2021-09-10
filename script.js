const container = document.getElementById("container");
const gridSizeSlider = document.getElementById("range");
const gridSizeLabel = document.getElementById("range-label");
const gridSquare = document.querySelector("grid-square");
const clearScreen = document.getElementById("clear-screen");

function makeGrid() {
    clearCurrentGrid()
    showGridSizeValue()
    for (j = 0; j < gridSizeSlider.value; j++) {
        for (i = 0; i < gridSizeSlider.value; i++) {
            let div = document.createElement("div");
            div.className = "grid-square";

            container.style.gridTemplateColumns = `repeat(${gridSizeSlider.value}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${gridSizeSlider.value}, 1fr)`;
            container.appendChild(div);

            blackSquareOnMouseOver(div);
        }
    } 
}

// Change the current hovered square colour to black
function blackSquareOnMouseOver(currentDiv) {
    currentDiv.addEventListener("mouseover", () => {
        currentDiv.style.backgroundColor = "black";
    });
}

// Remove all div squares to minimize lag when resizing the grid
function clearCurrentGrid() {
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}


function showGridSizeValue() {
    gridSizeLabel.textContent = `${gridSizeSlider.value}`;
}

// Event Listeners
gridSizeSlider.addEventListener("input", makeGrid);
clearScreen.addEventListener("click", clearCurrentGrid);

// gridSquare.addEventListener("mouseover", divSquareToBlack)

makeGrid();

// If the number the user types isn't typeof === number then show error pop up if possible.