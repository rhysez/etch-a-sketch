const container = document.querySelector("#container");
let cell = document.querySelectorAll('.cell')
window.onload = createGrid();

function createGrid(){
    for (let i = 0; i < 256; i++){
        const div = document.createElement("div");
        div.classList.add("cell");
        container.appendChild(div);
    }
}

console.log(container);





