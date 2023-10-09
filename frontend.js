//create grid
const rows = 18;
const columns = 18;
let boxHeight;
let boxWidth;
let gridSize = 40*rows;
const body = document.querySelector('.body');
const container = document.querySelector('.container');
const gridBox = document.createElement('div');
const resetButton = document.querySelector('#reset');
const clearBox = document.querySelector('#clearBox');
const leftSide = document.querySelector('.left');

resetButton.textContent="Reset grid";
resetButton.addEventListener('click',()=>{ location.href = "index.html";});
gridBox.classList.add('gridBox');

clearBox.textContent='Delete gridboxes'
clearBox.addEventListener('click',()=>{ clear();});

function clear() {
    const containerChild = document.querySelector('.gridButton');
    console.log('clear box function running');
    // container.removeChild(containerChild);
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

}

///TEST BUTTON FOR Reszing EACH BOX
const addBox = document.createElement('button');
addBox.classList.add('createBox');
addBox.textContent = '20x20';
addBox.addEventListener('click',() => resizeGrid());
leftSide.appendChild(addBox);

function resizeGrid() {
    clear()
    console.log('cleared box');
    createGrid(20,20,36,36);
}


function createGrid(rows = 18, columns = 18,boxWidth = 40,boxHeight = 40){

    for(let i = 0; i<(rows**2);i++){
        const div = document.createElement('div');
        div.classList.add('gridButton');
        div.addEventListener('mouseover', () =>{div.style.backgroundColor='black';});
        container.appendChild(div);
    }
    let gridCell = document.querySelectorAll('.gridButton');
    gridCell.forEach(cell => {
        cell.style.height=boxHeight+'px';
        cell.style.width=boxWidth+'px';
    });

}
body.appendChild(container);

// for (let i = 1; i < rows; i++){
//     const div = document.createElement('div');
//     div.classList.add('gridRow');
//     container.appendChild(div);

// }

createGrid();