const divContainer = document.querySelector(".container");

function createGrid(size = 16){
    let total = size * size;
    for(let i = 0; i < total; i++){
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        squareDiv.style.boxSizing = 'border-box';
        squareDiv.style.width = 'calc(100% * (1/' + size + ')';
        squareDiv.style.height = 'calc(100% * (1/' + size + ')';
        squareDiv.style.border = '0.5px solid';
        squareDiv.style.flex = '0 0 auto';
        divContainer.appendChild(squareDiv);
    }
}

divContainer.addEventListener("mouseover", e => {
    if(e.target !== e.currentTarget){
        e.target.style.background = "black";
    }
});

createGrid();