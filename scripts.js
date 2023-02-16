function createDivs(numDiv) {
    for(let i = 0; i < numDiv; i++) {
        let squares = document.createElement('div');
        squares.classList.add('squares');
        container.appendChild(squares);
    }
}

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

createDivs(256);