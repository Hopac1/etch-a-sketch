const container = document.getElementById("container");
const gridSizeButton = document.getElementById("grid-size-btn");
const clearScreen = document.getElementById("clear");
const rainbowMode = document.getElementById("rainbow-mode");
const blackMode = document.getElementById("black-mode");
const colourPicker = document.getElementById("colour-picker");
const modeButtons = document.querySelectorAll(".mode-selection")
let activeClass = document.getElementsByClassName("active");

let DEFAULT_COLOUR = "black";
let DEFAULT_MODE = "black"

let currentColour = DEFAULT_COLOUR;
let currentMode = DEFAULT_MODE;


function makeGrid(size) {
    for (j = 0; j < size; j++) {
        for (i = 0; i < size; i++) {
            let div = document.createElement("div");
            div.className = "grid-square";
            div.style.backgroundColor = "transparent";

            container.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // try putting at first line of function
            container.style.gridTemplateRows = `repeat(${size}, 1fr)`; // try putting at first line of function
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
        e.target.style.backgroundColor = "rgb(" + Math.floor(Math.random() * (255 - 0 + 1) + 0)
         + ", " + Math.floor(Math.random() * (255 - 0 + 1) + 0) + ", " +
          Math.floor(Math.random() * (255 - 0 + 1) + 0) + ")";
    }
}

function setDivColour(newColour) {
    currentColour = newColour;
}

function blackSquareOnMouseOver(currentDiv) {
    currentDiv.addEventListener("mousemove", () => {
        currentDiv.style.backgroundColor = currentColour;
    });
}

function changeColour(event) {
    switch (event.target.dataset.colour) {
        case "rainbow":
            currentColour = "rainbow";
            break;
    
        default:
            currentColour = "black";
            break;
    }
}



// ----- CHANGE NAME TO getRandomColour ----- // 
function randomColourOnMouseOver(currentDiv) {
    currentDiv.addEventListener("mouseover", () => {

            let red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            let green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            let blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
            currentDiv.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
            
            // let randomColour = "rgb(" + red + ", " + green + ", " + blue + ")";
            // return randomColour;
    });
}

function addMoreBlackColour(r, g, b) {
    r *= 0.1;
    g *= 0.1;
    b *= 0.1;
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

// Clear button
clearScreen.addEventListener("click", clearGrid);

// Grid Size button
gridSizeButton.addEventListener("click", gridSizePrompt);

colourPicker.onchange = () => {
    currentColour = colourPicker.value;
}

// modeButtons.forEach(modeButton => {modeButton.addEventListener("click", changeColour)});


blackMode.addEventListener("click", () => {
    currentColour = "black";
})

rainbowMode.addEventListener("click", () => {
    currentColour = "rainbow";
})





// rainbowMode.addEventListener("click", () => setCurrentMode("rainbow"))


// rainbowMode.addEventListener("click", () => {
//     rainbowFalseBlackTrue = "false";
// })

// blackMode.addEventListener("click", () => {
//     color = "black"
// })

// Call makeGrid(16) so grid doesn't show up empty on load
makeGrid(16);