const currentGame = ["","","","","","","","",""];


const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let currentPlayer = "X";
const message = document.querySelector('.message');
message.textContent = "au tour de : " + currentPlayer ;

const cells = document.querySelectorAll('.box');
cells.forEach(cell=> cell.addEventListener("click", submitClick));

function submitClick(event){
const boxIndex = event.target.getAttribute("data-index");
if(currentGame[boxIndex] !== ""){
    return;
}
currentGame[boxIndex] = currentPlayer;
const symbol = event.target
symbol.textContent = currentPlayer ;
//vérification comabinaison gagnante

for (let i = 0; i < winningCombinations.length ; i++ ){
    let currenCombination = winningCombinations[i];
    let [a, b, c] = currenCombination.map(index => currentGame[index]);
    if (a === "" || b ==="" || c ==="" ){
        continue;
    }
    else if( a === b && b === c){
        message.innerHTML ="le joueur " + currentPlayer + " à gagné ! <br>";
        message.innerHTML +=" Appuyez sur [R] ou [F5] pour rejouer. ";
        cells.forEach(cell=> cell.removeEventListener("click", submitClick));
        currenCombination.forEach(val =>{
            document.querySelector(`[data-index="${val}"]`).style.backgroundColor ="green";
        })
        return;
    }
}
if(currentGame.every(cell => cell !== "")){
    message.innerHTML =" Match nul ! <br>";
    message.innerHTML +=" Appuyez sur [R] ou [F5] pour rejouer. ";
    cells.forEach(cell => {
        cell.style.backgroundColor ="black"
    })
    cells.forEach(cell => cell.removeEventListener("click", submitClick));
    return;
}
playerNext();

}

//changement de joueur
function playerNext(){
    if(currentPlayer === "O"){
        currentPlayer = "X" ;
    }
    else{
        currentPlayer = "O";
    }
    message.textContent = "au tour de  : " + currentPlayer;
}

//reset game
document.addEventListener("keydown", e =>{
    if(e.key === "R" || e.key === "r" ){
        reset();
    }
})
function reset(){
    currentPlayer === "X";
    currentGame.forEach( ( _, index) => {
        currentGame[index] = "";
    })
    message.textContent = " au tour de : " + currentPlayer;
    cells.forEach(cell =>{
        cell.textContent = "";
        cell.style.backgroundColor ="#090f29";
    });
    cells.forEach(cell=> cell.addEventListener("click", submitClick));
}