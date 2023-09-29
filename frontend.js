//create grid
const rows = 16;
const columns = 16;
let gridSize = 40*rows;
const body = document.querySelector('body');
const container = document.querySelector('.container');
const gridBox = document.createElement('div');
const resetButton = document.querySelector('#reset');

resetButton.textContent="Clear the grid";
resetButton.addEventListener('click',()=>{ location.href = "index.html";});
gridBox.classList.add('gridBox');

function createGrid(){
    // for(let i = 0; i<(rows);i++){
    //     console.log(i)
    //     const div = document.createElement('div');
    //     div.textContent = 'suck it';
    //     div.classList.add('gridRow');
    //     container.appendChild(div);
    // }
    for(let i = 0; i<(rows*columns);i++){
        const div = document.createElement('div');
        div.classList.add('gridButton');
        div.addEventListener('mouseover', () =>{div.style.backgroundColor='black';});
        container.appendChild(div);
    }
}



body.appendChild(container);

// for (let i = 1; i < rows; i++){
//     const div = document.createElement('div');
//     div.classList.add('gridRow');
//     container.appendChild(div);

// }

createGrid();