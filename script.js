const container = document.getElementById("container");
const gridSizeSlider = document.getElementById("range");
const gridSizeLabel = document.getElementById("range-label");

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
        }
    } 
    // ".grid-square".width(650/gridSizeSlider.value)
    // ".grid-square".height(650/gridSizeSlider.value)
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
makeGrid();

// If the number the user types isn't typeof === number then show error pop up if possible.