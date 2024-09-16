
// Le but de ce projet est de coder un quiz qui affiche des messages et des couleurs différents en fonction des résultats.


// A. Coder une interface basique
// > Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... <br>
// > Rajoutez un peu de style si besoin est. 
// > 
// > Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Gérez le formulaire.
// 2. Testez les résultats.
// 3. Ajoutez un message dans le bloc de fin en fonction des résultats.
// 4. Ajoutez des couleurs en fonction des résultats.
// 5. Gérez la possibilité de tentative de correction de la part de l'utilisateur (changer une valeur et re-valider).
  
//  C. Ajoutez du style à l'interface afin de terminer le projet.

// Besoin : Une fonction pour calculer le score de l'utilisateur, une fonction pour définir les bonnes réponses, une fonction pour faire passer les couleurs en rouge/vert selon les réponses, une fonction qui en appelle d'autres lors du submit, fonction "tentative de correction", utilisation d'un compteur pour les bonnes réponses, une fonction message de fin

// On stocke le bouton 'submit' et les div dans des variables

let submit = document.querySelector('#valider');
let wwwItem = document.querySelector('#wwwItem');
let langageItem = document.querySelector('#langageItem');
let hwItem = document.querySelector('#hwItem');
let openItem = document.querySelector('#openItem');
let cloudItem = document.querySelector('#cloudItem');

// On stocke les inputs dans des variables

// let www = document.querySelector('input[name ="www"]:checked');
// let langage = document.querySelector('input[name ="langage"]:checked');
// let hw = document.querySelector('input[name ="hw"]:checked');
// let openSrc = document.querySelector('input[name ="openSrc"]:checked');
// let cloud = document.querySelector('input[name ="cloud"]:checked');

// On récupère le msg de fin
let resultMsg = document.querySelector('#result');

function calculateScore() {
    let compteur = 0;

const www = document.querySelector('input[name ="www"]:checked');
const langage = document.querySelector('input[name ="langage"]:checked');
const hw = document.querySelector('input[name ="hw"]:checked');
const openSrc = document.querySelector('input[name ="openSrc"]:checked');
const cloud = document.querySelector('input[name ="cloud"]:checked');

    if (www && www.value === "correct") compteur++;
    if (langage && langage.value === "correct") compteur++;
    if (hw && hw.value === "correct") compteur++;
    if (openSrc && openSrc.value === "correct") compteur++;
    if (cloud && cloud.value === "correct") compteur++;
    
    return compteur;
    
}

function changeColor(){

const www = document.querySelector('input[name ="www"]:checked');
const langage = document.querySelector('input[name ="langage"]:checked');
const hw = document.querySelector('input[name ="hw"]:checked');
const openSrc = document.querySelector('input[name ="openSrc"]:checked');
const cloud = document.querySelector('input[name ="cloud"]:checked');

wwwItem.style.backgroundColor = (www && www.value === "correct") ? "green" : "red";
langageItem.style.backgroundColor = (langage && langage.value === "correct") ? "green" : "red";
hwItem.style.backgroundColor = (hw && hw.value === "correct") ? "green" : "red";
openItem.style.backgroundColor = (openSrc && openSrc.value === "correct") ? "green" : "red";
cloudItem.style.backgroundColor = (cloud && cloud.value === "correct") ? "green" : "red";

}

function msgDeFin(score){
    switch (score){
        case 0: 
        resultMsg.innerHTML = "Ne vous découragez-pas ! <br><br> Score: <strong>0 / 5</strong> <br><br> Retentez une autre réponse dans la case rouge, puis re-validez !";
        break;
        case 1:
        resultMsg.innerHTML = "Ne vous découragez-pas ! <br><br> Score: <strong>0 / 5</strong> <br><br> Retentez une autre réponse dans la case rouge, puis re-validez !";
        case 2:
        resultMsg.innerHTML = "Courage ! <br><br> Score: <strong>2 / 5</strong> <br><br> Retentez une autre réponse dans la case rouge, puis re-validez !";
        break;
        case 3:
        resultMsg.innerHTML = "Vous êtes sur la bonne voie ! <br><br> Score: <strong>3 / 5</strong> <br><br> Retentez une autre réponse dans la case rouge, puis re-validez !";
        break;
        case 4:
        resultMsg.innerHTML = "Vous y êtes presque ! <br><br> Score: <strong>4 / 5</strong> <br><br> Retentez une autre réponse dans la case rouge, puis re-validez !";
        break;
        case 5:
        resultMsg.innerHTML = "Bravo, c'est un sans faute ! <br><br> Score: <strong>5 / 5</strong> <br><br> Quelle culture ...";
        break;
    }
    // if (score === 5) {
    //     resultMsg.innerHTML = "Bravo, c'est un sans faute ! <br><br> Score: <strong>5 / 5</strong> <br><br> Quelle culture ...";
    // } else if (score === 4) {
    //     resultMsg.innerHTML = "Vous y êtes presque ! <br><br> Score: <strong>4 / 5</strong> <br><br> Retentez une autre réponse dans la case rouge, puis re-validez !";
    // } else if (score === 3) {
    //     resultMsg.innerHTML = "Vous êtes sur la bonne voie ! <br><br> Score: <strong>3 / 5</strong> <br><br> Retentez une autre réponse dans la case rouge, puis re-validez !";
    // } else if (score === 2) {
    //     resultMsg.innerHTML = "Courage ! <br><br> Score: <strong>2 / 5</strong> <br><br> Retentez une autre réponse dans la case rouge, puis re-validez !";
    // } else if (score === 1) {
    //     resultMsg.innerHTML = "Peut mieux faire ! <br><br> Score: <strong>1 / 5</strong> <br><br> Retentez une autre réponse dans la case rouge, puis re-validez !";
    // } else {
    //     resultMsg.innerHTML = "Ne vous découragez-pas ! <br><br> Score: <strong>0 / 5</strong> <br><br> Retentez une autre réponse dans la case rouge, puis re-validez !";
    // }
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let score = calculateScore();
    changeColor();
    msgDeFin(score);
})
