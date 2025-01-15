export default {
  mounted(el) {
    let lastScroll = 0;
    const navbar = el;
    const scrollThreshold = 200; // Seuil de scroll en pixels avant d'appliquer l'effet

    const onScroll = () => {
      const currentScroll = window.scrollY;

      // Si l'utilisateur est au-dessus du seuil, ne rien faire
      if (currentScroll <= scrollThreshold) {
        navbar.style.transform = 'translateY(0)'; // Affiche la navbar
        return;
      }

      // Cacher ou afficher la navbar en fonction de la direction du scroll
      if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)'; // Masque la navbar
      } else {
        navbar.style.transform = 'translateY(0)'; // Affiche la navbar
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', onScroll);

    el._onScroll = onScroll; // Stocker la fonction pour la suppression ultérieure
  },
  unmounted(el) {
    window.removeEventListener('scroll', el._onScroll);
  }
};
