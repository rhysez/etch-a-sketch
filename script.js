const container = document.querySelector("#container");
const buttonSize = document.querySelector("#gridsize");
const buttonRandom = document.querySelector("#random");

const red = document.querySelector('#red');
const blue = document.querySelector('#blue');
const green = document.querySelector('#green');
const yellow = document.querySelector('#yellow');
const orange = document.querySelector('#orange');
const purple = document.querySelector('#purple');
const pink = document.querySelector('#pink');
const white = document.querySelector('#white');

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

function mouseOverRandom(){
    let cell = document.querySelectorAll('.cell');
    let color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256))
                 + ',' + (Math.floor(Math.random() * 256)) + ')';
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = color;
        })
    })
}

function mouseOverRed(){
    let cell = document.querySelectorAll('.cell');
    let colorRed = 'red';
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = colorRed;
        })
    })
}

function mouseOverBlue(){
    let cell = document.querySelectorAll('.cell');
    let colorBlue = 'blue';
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = colorBlue;
        })
    })
}

function mouseOverGreen(){
    let cell = document.querySelectorAll('.cell');
    let colorGreen = 'green';
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = colorGreen;
        })
    })
}

function mouseOverYellow(){
    let cell = document.querySelectorAll('.cell');
    let colorYellow = 'yellow';
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = colorYellow;
        })
    })
}

function mouseOverOrange(){
    let cell = document.querySelectorAll('.cell');
    let colorOrange = 'orange';
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = colorOrange;
        })
    })
}

function mouseOverPurple(){
    let cell = document.querySelectorAll('.cell');
    let colorPurple = 'purple';
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = colorPurple;
        })
    })
}

function mouseOverPink(){
    let cell = document.querySelectorAll('.cell');
    let colorPink = 'pink';
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = colorPink;
        })
    })
}

function mouseOverWhite(){
    let cell = document.querySelectorAll('.cell');
    let colorWhite = 'white';
    cell.forEach((cell) => {
        cell.addEventListener('mouseover', function(){
            cell.style.background = colorWhite;
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

buttonRandom.addEventListener('click', () => {
    cell.onmouseover = mouseOverRandom();
});

red.addEventListener('click', () => {
    cell.onmouseover = mouseOverRed();
});

blue.addEventListener('click', () => {
    cell.onmouseover = mouseOverBlue();
});

green.addEventListener('click', () => {
    cell.onmouseover = mouseOverGreen();
});

yellow.addEventListener('click', () => {
    cell.onmouseover = mouseOverYellow();
});

orange.addEventListener('click', () => {
    cell.onmouseover = mouseOverOrange();
});

purple.addEventListener('click', () => {
    cell.onmouseover = mouseOverPurple();
});

pink.addEventListener('click', () => {
    cell.onmouseover = mouseOverPink();
});

white.addEventListener('click', () => {
    cell.onmouseover = mouseOverWhite();
});

