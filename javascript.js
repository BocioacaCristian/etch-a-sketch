function makeGrids(size) {
    let screen = document.querySelector(".sketch-screen");
    screen.innerHTML = "";
    
    for (let i = 0; i < size ; i++) {
        let column = document.createElement("div");
        column.classList.add("column");

        for (let j = 1; j <= size; j++) {
            let row = document.createElement("div");
            row.classList.add("row");

            row.addEventListener("mouseover", function(){
                row.style.backgroundColor = "black";
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