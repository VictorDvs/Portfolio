
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


// Fonction pour désactiver les boutons radio d'une question
function disableInputs(questionName) {
    let radios = document.querySelectorAll(`input[name="${questionName}"]`);
    radios.forEach(radio => {
        radio.disabled = true; // Désactiver le bouton radio
    });
}

// Fonction pour changer la couleur et désactiver les bonnes réponses
function changeColor(){

const www = document.querySelector('input[name ="www"]:checked');
const langage = document.querySelector('input[name ="langage"]:checked');
const hw = document.querySelector('input[name ="hw"]:checked');
const openSrc = document.querySelector('input[name ="openSrc"]:checked');
const cloud = document.querySelector('input[name ="cloud"]:checked');

// Vérifier et changer les couleurs + désactiver les inputs corrects
if (www && www.value === "correct") {
    wwwItem.style.backgroundColor = "green";
    disableInputs('www'); // Désactiver les inputs si réponse correcte
} else {
    wwwItem.style.backgroundColor = "red";
}

if (langage && langage.value === "correct") {
    langageItem.style.backgroundColor = "green";
    disableInputs('langage');
} else {
    langageItem.style.backgroundColor = "red";
}

if (hw && hw.value === "correct") {
    hwItem.style.backgroundColor = "green";
    disableInputs('hw');
} else {
    hwItem.style.backgroundColor = "red";
}

if (openSrc && openSrc.value === "correct") {
    openItem.style.backgroundColor = "green";
    disableInputs('openSrc');
} else {
    openItem.style.backgroundColor = "red";
}

if (cloud && cloud.value === "correct") {
    cloudItem.style.backgroundColor = "green";
    disableInputs('cloud');
} else {
    cloudItem.style.backgroundColor = "red";
}

}

// Message de fin
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
   
}

// Ajouter l'événement au bouton valider
submit.addEventListener('click', (e) => {
    e.preventDefault();
    let score = calculateScore();
    changeColor();
    msgDeFin(score);
})

// Réinitialiser la couleur de fond lorsque l'utilisateur modifie sa réponse
let resetCol = document.querySelectorAll("input[type='radio']");
resetCol.forEach(radio => radio.addEventListener("input", resetColor));

function resetColor(event) {
    const name = event.target.getAttribute("name");

    // Réinitialiser la couleur de fond de l'élément associé à la question
    switch (name) {
        case 'www':
            wwwItem.style.backgroundColor = "white";
            break;
        case 'langage':
            langageItem.style.backgroundColor = "white";
            break;
        case 'hw':
            hwItem.style.backgroundColor = "white";
            break;
        case 'openSrc':
            openItem.style.backgroundColor = "white";
            break;
        case 'cloud':
            cloudItem.style.backgroundColor = "white";
            break;
    }
}
