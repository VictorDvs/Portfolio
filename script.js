document.querySelectorAll('.nav-link').forEach(anchor => {
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
  