document.querySelectorAll('.nav-anchor').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 110; /* Ajuste selon la hauteur de ta navbar */
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });

  function showImageModal(element) {
    var imgSrc = element.src;
    document.getElementById('modalImage').src = imgSrc;
}


var typed = new Typed('#text-greetings', {
  strings: ["Bienvenu(e) sur mon site !", "Je m'appelle Victor, je suis apprenti développeur web et rédacteur technique de profession."],
  typeSpeed: 10,
  backSpeed: 30, 
});


// Sélectionner les éléments nécessaires
const button = document.querySelector('.navbar-brand');
const span = document.querySelector('span');
const icon = document.querySelector('i');  // Sélection de l'icône

// // Fonction pour activer le mode sombre
// function modeSombre() {
//     // Ajouter la classe 'dark' sur l'élément Body
//     document.body.classList.add('dark');
//     // Changer le texte du bouton en "Thème clair"
//     span.textContent = 'Thème clair';
//     document.body.style.backgroundColor = "#2c2c2c";
//     // Changer l'icône en soleil
//     icon.className = 'fa fa-sun';
//     // Définir l'item 'theme' dans localStorage comme 'sombre'
//     localStorage.setItem('theme', 'sombre');
// }

// // Fonction pour activer le mode clair
// function modeClair() {
//     // Retirer la classe 'dark' de l'élément Body
//     document.body.classList.remove('dark');
//     // Changer le texte du bouton en "Thème sombre"
//     span.textContent = 'Thème sombre';
//     document.body.style.backgroundColor = "#faf9f6";
//     // Changer l'icône en lune
//     icon.className = 'fa fa-moon';
//     // Définir l'item 'theme' dans localStorage comme 'clair'
//     localStorage.setItem('theme', 'clair');
// }

// // Vérifier si un thème est déjà stocké dans le localStorage au chargement de la page
// window.addEventListener('load', () => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === 'sombre') {
//         // Si l'utilisateur avait choisi le thème sombre, on applique le mode sombre
//         modeSombre();
//     } else {
//         // Sinon, on reste en mode clair
//         modeClair();
//     }
// });

// // Détecter le clic sur le bouton pour changer de thème
// button.addEventListener('click', () => {
//     // Vérifier si le thème actuel est sombre
//     if (document.body.classList.contains('dark')) {
//         // Si c'est le cas, on passe au mode clair
//         modeClair();
//     } else {
//         // Sinon, on passe au mode sombre
//         modeSombre();
//     }
// });
