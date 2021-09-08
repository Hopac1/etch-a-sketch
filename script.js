
const container = document.getElementById("container");
const gridSizeSlider = document.getElementById("grid-size");
// const gridSizeValue = document.getElementById("grid-size").value;

function makeGrid() {
    // clearCurrentGrid()
    for (j = 0; j < document.getElementById("grid-size").value; j++) {
        for (i = 0; i < document.getElementById("grid-size").value; i++) {
            let div = document.createElement("div");
            div.style.height = "20px";
            div.style.width = "20px";
            div.style.background = "red";
            div.style.display = "grid";
            // div.style.gridTemplateColumns = "repeat(size, 20px";
            // div.style.gridTemplateRows = "repeat(size, 20px";

            document.getElementById("container").style.gridTemplateColumns = `repeat(${document.getElementById("grid-size").value}, 20px)`;
            document.getElementById("container").style.gridTemplateRows = `repeat(${document.getElementById("grid-size").value}, 20px)`;
            document.getElementById("container").appendChild(div);
        }
    } 
}

// Event Listeners
document.getElementById("grid-size").addEventListener("click", makeGrid);

// If the number the user types isn't typeof === number then show error pop up if possible.