function changeGrid() {
    container.style.setProperty('--num-columns', `${numColumns}`);
    container.style.setProperty('--column-width', `1fr`);
    container.style.setProperty('--num-rows', `${numRows}`);
    container.style.setProperty('--row-width', `1fr`);
    container.innerHTML = ''; // clear the container
    for (let i = 0; i < numColumns * numRows; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cells');
    cell.addEventListener('mouseover', () => {
        if(eraserOn) {
            cell.style.backgroundColor = '#000000';
        } else {
            cell.style.backgroundColor = `${color.value}`;
        }
    });
    container.appendChild(cell);
    }
}

function clearButton() {
    container.innerHTML = '';
    for (let i = 0; i < numColumns * numRows; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cells');
    cell.addEventListener('mouseover', () => {
        if(eraserOn) {
            cell.style.backgroundColor = '#000000';
        } else {
            cell.style.backgroundColor = `${color.value}`;
        }
    });
    container.appendChild(cell);
    }
}

const mainContainer = document.getElementById('main-container');

//The container for configurations
const confs = document.createElement('div');
confs.classList.add('confs');
mainContainer.appendChild(confs);

const color = document.createElement('input');
color.classList.add('color-input');
color.value = '#ABABAB';
color.setAttribute('type', 'color');
confs.appendChild(color);

const colorMode = document.createElement('input');
colorMode.classList.add('color-mode-btn');
colorMode.setAttribute('value', 'Color Mode');
colorMode.setAttribute('type', 'button');
confs.appendChild(colorMode);

const eraser = document.createElement('input');
eraser.classList.add('eraser-btn');
eraser.setAttribute('type', 'button');
eraser.setAttribute('value', 'Eraser');
confs.appendChild(eraser);

const clear = document.createElement('input');
clear.classList.add('clear-btn');
clear.setAttribute('type', 'button');
clear.setAttribute('value', 'Clear');
confs.appendChild(clear);

const rangeTitle = document.createElement('p');
rangeTitle.classList.add('range-title');
rangeTitle.style.color = '#FFF';
rangeTitle.textContent = `32 x 32`
confs.appendChild(rangeTitle);

const range = document.createElement('input');
range.classList.add('range-input');
range.setAttribute('id', 'range-input');
range.setAttribute('type', 'range');
range.setAttribute('min', '1');
range.setAttribute('max', '64');
range.setAttribute('value', '32');
confs.appendChild(range);

//The container for the grid
const container = document.createElement('div');
container.classList.add('container');
mainContainer.appendChild(container);

let numColumns = range.value;
let numRows = range.value;
let eraserOn = false;

for(let i = 0; i < numColumns * numRows; i++) {
    container.style.setProperty('--num-columns', `${numColumns}`);
    container.style.setProperty('--column-width', `1fr`);
    container.style.setProperty('--num-rows', `${numRows}`);
    container.style.setProperty('--row-width', `1fr`);
    const cell = document.createElement('div');
    cell.classList.add('cells');
    cell.addEventListener('mouseover', () => {
        if(eraserOn) {
            cell.style.backgroundColor = '#000000';
        } else {
            cell.style.backgroundColor = `${color.value}`;
        }
        
    });
    container.appendChild(cell);
}

range.addEventListener('change', () => {
    rangeTitle.textContent = `${range.value} x ${range.value}`;
    numColumns = range.value;
    numRows = range.value;
    changeGrid();
})

clear.addEventListener('click', clearButton);

eraser.addEventListener('click', () => {
    eraserOn = true;
})

colorMode.addEventListener('click', () => {
    eraserOn = false;
})