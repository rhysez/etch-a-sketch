const container = document.querySelector("#container");
const buttonSize = document.querySelector("#gridsize");
const buttonRainbow = document.querySelector("#rainbow");
let cell = document.querySelectorAll('.cell');
let cellAmount = 16;
window.onload = createGrid(cellAmount);
cell.onmouseover = mouseOver();

// creates a 16x16 grid
function createGrid(e){
    container.style.gridTemplateColumns = `repeat(${e},1fr)`
    for (let i = 0; i < e*e; i++){
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

// changes cell colors to random RGB value
// UNFINISHED
function mouseOverRainbow(){
    let cell = document.querySelectorAll('.cell');
    let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))
                 + ',' + (Math.floor(Math.random() * 256)) + ')';
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = color;
        })
    })
}

// resizes the grid and resets sketch
buttonSize.addEventListener('click', () => {
    for (i = 0; i < cell.length; i++){
        cell[i].style.removeProperty("black")
    } 
        let userAmount = prompt("Select your pixel size (Default: 16)");
        if (userAmount == ""){
            userAmount == 16;
        }
        while (parseInt(userAmount) < 4 || parseInt(userAmount) > 100){
            userAmount = prompt("Sorry, please enter a number between 4 and 100.");
        }
        cellAmount = parseInt(userAmount);
        while (container.hasChildNodes()){
            container.removeChild(container.firstChild);
        }
        createGrid(cellAmount);
        mouseOver();
});

buttonRainbow.addEventListener('click', () => {
    cell.onmouseover = mouseOverRainbow();
});

