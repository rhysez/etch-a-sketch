// creates 256 divs (grid)
for(i = 0; i < 256; i++){
    const container = document.querySelector('#container');
    const div = document.createElement('div');
    div.classList.add("cell");
    container.appendChild(div);
    console.log(i);
}

