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
  typeSpeed: 10,
  backSpeed: 30, 
});


// Sélectionner les éléments nécessaires
const button = document.querySelector('.navbar-brand');
const span = document.querySelector('span');
const icon = document.querySelector('i');  // Sélection de l'icône
