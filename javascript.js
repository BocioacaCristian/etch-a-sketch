// Function to get a random color
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


function makeGrids(size) {
    let screen = document.querySelector(".sketch-screen");
    screen.innerHTML = "";
    
    for (let i = 0; i < size ; i++) {
        let column = document.createElement("div");
        column.classList.add("column");

        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");

            // Initializing opacity to 0 so the logic works from the first hover 
            row.style.opacity = "0";

            row.addEventListener("mouseover", function() {
                let randomColor = getRandomColor();
                row.style.backgroundColor = randomColor;

                // Turn the number from string to math number;
                let currentOpacity = Number(row.style.opacity);

                // We only increase if it is not yet fully black / opaque
                if (currentOpacity < 1){
                    row.style.opacity = currentOpacity + 0.1;
                }

            });

            column.appendChild(row);
        }
        screen.appendChild(column);
    }
}

let btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    // Prompt the user and store their answer in a variable
    let size = prompt ("Enter size of grid (1-100):");

    // Convert the input to a number
    size = parseInt(size);
    
    if (size > 0 && size <= 100) {
        makeGrids(size);
    } else {
        alert("Please enter a number between 1 and 100!");
    }
})
makeGrids(16);