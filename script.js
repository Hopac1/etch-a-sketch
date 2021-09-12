const container = document.getElementById("container");
const gridSizeSlider = document.getElementById("range");
const gridSizeLabel = document.getElementById("range-label");
const clearScreen = document.getElementById("clear");
let activeClass = document.getElementsByClassName("active");

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
        // makeGrid();
    }
}

function showGridSizeValue() {
    gridSizeLabel.textContent = `${gridSizeSlider.value}`;
}


// <--Event Listeners-->
gridSizeSlider.addEventListener("input", makeGrid);


// Clear button
clearScreen.addEventListener("click", clearGrid);

makeGrid();

// If the number the user types isn't typeof === number then show error pop up if possible.