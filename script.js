const container = document.getElementById("container");


function makeGrid(size) {
    for (j = 0; j < size; j++) {
        for (i = 0; i < size; i++) {
            let div = document.createElement("div");
            div.style.height = "20px";
            div.style.width = "20px";
            div.style.background = "red";
            div.style.display = "grid";
            div.style.gridTemplateColumns = "repeat(size, 20px";
            div.style.gridTemplateRows = "repeat(size, 20px";

            document.getElementById("container").style.gridTemplateColumns = `repeat(${size}, 20px)`;
            document.getElementById("container").style.gridTemplateRows = `repeat(${size}, 20px)`

            document.getElementById("container").appendChild(div);
        }
    } 
}

let gridSize = document.getElementById("grid-size").value
console.log(gridSize);
// If the number the user types isn't typeof === number then show error pop up if possible.