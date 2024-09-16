let responses = ["c","b", "c", "b", "a"];

let form = document.querySelector("#form");
let question = document.querySelectorAll(".question");
form.addEventListener("submit",submitForm);


function submitForm(event){
    event.preventDefault();
    let compteur = 0;
    let userResponse = document.querySelectorAll("input:checked"); 
    let tab1 = [];
    userResponse.forEach((btn, index) => {
        if (btn.value === responses[index]){
            tab1.push("green");
            compteur++;
        }
        else{
            tab1.push("red");
        }

    });
    addColor(tab1);
    addMessage(compteur);

}

function addColor(array){
    array.forEach((color, index) =>{
        question[index].style.backgroundColor = color;
    }) 
}
function addMessage(count){
    let r1 = document.querySelector(".resultat");
    switch(count){
        case 0:
            r1.textContent = " vous êtes vraiment très nul ";
            r1.textContent += " vous avez 0/5 bonne réponses ";
            setTimeout(()=>{
                window.close();
            }, 2000)
        break;
        case 1: 
        r1.textContent = " vous êtes vraiment nul , mais ça commence à venir ";
        r1.textContent += " vous avez 1/5 bonne réponses ";
    break;
        case 2:
            r1.textContent = " vous êtes vraiment très nul ";
            r1.textContent += " vous avez 2/5 bonne réponses ";
        break;
        case 3:
            r1.textContent = " vous êtes vraiment très nul ";
            r1.textContent += " vous avez 3/5 bonne réponses ";
        break;
        case 4:
            r1.textContent = " vous êtes vraiment très nul ";
            r1.textContent += " vous avez 4/5 bonne réponses ";
        break;
        case 5: 
        r1.textContent = " vous êtes vraiment très nul ";
            r1.textContent += " vous avez 5/5 bonne réponses ";
        break; 
        
    }
}

    //reinitialisé la couleur de fond
let changeColor = document.querySelectorAll("input[type='radio']");
    changeColor.forEach(radio => radio.addEventListener("input",resetColor));
    function resetColor(event){
        let innputIndex =  event.target.getAttribute("name").match(/\d/g)[1]-1;
        let resetBlock = question[innputIndex];
        resetBlock.style.backgroundColor = "white" ;
        console.log(innputIndex);
    }
        