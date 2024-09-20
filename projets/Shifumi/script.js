// 2 Variables pour suivre le score
let userScore = 0;
let robotScore = 0;

// 1 variable pour faire le lien entre les images et leurs choix respectifs
const choices = {
    pierre: "pierre",
    feuille: "feuille",
    ciseaux: "ciseaux"
};

let pierre = document.querySelector('#pierre');
let feuille = document.querySelector('#feuille');
let ciseaux = document.querySelector('#ciseaux');

// Écouteurs d'événements pour les clics sur les images
// pierre.addEventListener('click', () => playGame('pierre'));
// feuille.addEventListener('click', () => playGame('feuille'));
// ciseaux.addEventListener('click', () => playGame('ciseaux'));
pierre.addEventListener('click', handlePierreClick);
feuille.addEventListener('click', handleFeuilleClick);
ciseaux.addEventListener('click', handleCiseauxClick);

let arbitre = document.querySelector('#arbitre');
let msgDeFin = document.querySelector('#msgDeFin');





// Fonction pour déterminer le gagnant
function determineWinner(userChoice, robotChoice) {
    if (userChoice === robotChoice) {
        return { message: "<strong>Match nul</strong> pour cette manche", className: "draw" };
    } else if (
        (userChoice === 'pierre' && robotChoice === 'ciseaux') ||
        (userChoice === 'feuille' && robotChoice === 'pierre') ||
        (userChoice === 'ciseaux' && robotChoice === 'feuille')
    ) {
        userScore++;
        return { message: "Vous avez <strong>gagné</strong> cette manche", className: "win" };
    } else {
        robotScore++;
        return { message: "Vous avez <strong>perdu</strong> cette manche", className: "lose" };
    }
}


// Fonction pour obtenir le choix aléatoire du robot
function getRobotChoice() {
    const choicesArray = ['pierre', 'feuille', 'ciseaux'];
    const randomIndex = Math.floor(Math.random() * choicesArray.length);
    return choicesArray[randomIndex];
}

// Fonction pour jouer une manche
function playGame(userChoice) {
    const robotChoice = getRobotChoice();
    const result = determineWinner(userChoice, robotChoice);

    // Affichage des résultats
    document.querySelector('#choix').textContent = `Vous avez choisi ${choices[userChoice]} et le robot a choisi ${choices[robotChoice]}.`;

    const gameResult = document.querySelector('#resultat');
    gameResult.textContent = result.message;
    gameResult.innerHTML = result.message;
    // Appliquer la classe en fonction du résultat
    gameResult.className = result.className;

    document.querySelector('#score').textContent = `Le score est de ${userScore} (vous) à ${robotScore} (le robot)`;
    

    if (userScore === 5 || robotScore === 5){
        arbitre.style.display = "block";
        msgDeFin.innerHTML = (userScore === 5) ? "c'est finiiiii, vous avez gagné ! [F5] pour rejouer une partie." : "c'est finiiiii, vous avez perdu ! [F5] pour rejouer une partie.";
        pierre.removeEventListener('click', handlePierreClick);
        feuille.removeEventListener('click', handleFeuilleClick);
        ciseaux.removeEventListener('click', handleCiseauxClick);
    }
}

function handlePierreClick() {
    playGame('pierre');
}
function handleFeuilleClick() {
    playGame('feuille');
}
function handleCiseauxClick() {
    playGame('ciseaux');
}


