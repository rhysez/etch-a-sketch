const container = document.querySelector("#container");
let cell = document.querySelectorAll('.cell');
window.onload = createGrid();

//creates a 16x16 grid
function createGrid(){
    for (let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.classList.add("cell");
        container.appendChild(div);
    }
}

// changes cell colors to black on mouseover
function mouseOver(){
    let cell = document.querySelectorAll('.cell');
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = "black";
        })
    })
}

cell.onmouseover = mouseOver();





