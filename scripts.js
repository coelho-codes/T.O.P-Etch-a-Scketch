const mainContainer = document.getElementById('main-container');

//The container for configurations
const confs = document.createElement('div');
confs.classList.add('confs');
mainContainer.appendChild(confs);

const color = document.createElement('input');
color.classList.add('color-input');
color.setAttribute('type', 'color');
confs.appendChild(color);

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

function createDivs(numDiv) {
    for(let i = 0; i < numDiv; i++) {
        let squares = document.createElement('div');
        squares.classList.add('squares');
        squares.addEventListener('mouseover', e => e.target.classList.add('mouseover-color'));
        container.appendChild(squares);
    }
}

range.addEventListener('change', () => {
    rangeTitle.textContent = `${range.value} x ${range.value}`;
})