const container = document.getElementById("container");
const gridSizeSlider = document.getElementById("range");
const gridSizeLabel = document.getElementById("range-label");

function makeGrid() {
    clearCurrentGrid()
    showGridSizeValue()
    for (j = 0; j < gridSizeSlider.value; j++) {
        for (i = 0; i < gridSizeSlider.value; i++) {
            let div = document.createElement("div");
            // div.style.height = "30px";
            // div.style.width = "30px";
            div.style.background = "red";
            div.style.display = "grid";
            // div.style.gridTemplateColumns = "repeat(size, 20px";
            // div.style.gridTemplateRows = "repeat(size, 20px";

            document.getElementById("container").style.gridTemplateColumns = `repeat(${gridSizeSlider.value}, 10px)`;  // Swap px and .value 
            document.getElementById("container").style.gridTemplateRows = `repeat(${gridSizeSlider.value}, 10px)`;
            document.getElementById("container").appendChild(div);
        }
    } 
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