const container = document.querySelector(".container");

const divContainer = document.createElement("div");
divContainer.style.display = 'flex';
divContainer.style.flexWrap = 'wrap';
divContainer.style.width = '600px';
divContainer.style.height = '600px';
divContainer.style.border = '1px solid black';
divContainer.classList.add("divContainer");

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

function deleteGrid(){
    while (divContainer.firstChild){
        divContainer.removeChild(divContainer.firstChild);
    }
}

divContainer.addEventListener("mouseover", e => {
    if(e.target !== e.currentTarget){
        e.target.style.background = "black";
    }
});

createGrid();

const btn = document.createElement("button");
btn.classList.add("sizeBtn");
btn.innerText = "Change Size";
btn.style.padding = '5px';
btn.style.margin = '10px';

btn.addEventListener('click', e => {
    const userInput = prompt("Enter a size for the canvas (1 - 100)");
    if (userInput === null){
        console.log("User canceled prompt.");
    }
    else if (userInput.trim === ""){
        window.alert("Input cannot be empty. Please try again.");
    }
    else{
        const parsedInt = Number(userInput);
        if ((!Number.isNaN(parsedInt)) && parsedInt > 0 && parsedInt <= 100){
            deleteGrid();
            createGrid(parsedInt);
        }
        else {
            window.alert("Not a valid number! Please try again.");
        }
    }
});

container.appendChild(btn);
container.appendChild(divContainer);
