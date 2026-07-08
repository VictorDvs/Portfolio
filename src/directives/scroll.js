export default {
  mounted(el, binding) {
    // Options configurables via v-scroll="{ hideThreshold: 200, transparencyThreshold: 10 }"
    const options = {
      hideThreshold: 200,
      transparencyThreshold: 10,
      ...(binding.value || {}),
    };

    let lastScroll = window.scrollY;
    let ticking = false;

    el.style.transition = 'transform 0.4s ease-out';
    el.style.willChange = 'transform';

    // --- Edge case : page chargée déjà scrollée (reload, ancre, retour navigateur) ---
    if (window.scrollY > options.transparencyThreshold) {
      el.classList.add('navbar--solid');
    }

    const update = () => {
      const currentScroll = window.scrollY;

      // --- 1. TRANSPARENCE (two-way : bascule dans les deux sens) ---
      if (currentScroll > options.transparencyThreshold) {
        el.classList.add('navbar--solid');
      } else {
        el.classList.remove('navbar--solid');
      }

      // --- 2. VISIBILITÉ (inchangé) ---
      if (currentScroll <= options.hideThreshold) {
        el.style.transform = 'translateY(0)';
      } else if (currentScroll > lastScroll) {
        el.style.transform = 'translateY(-100%)';
      } else {
        el.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    el._onScroll = onScroll;
  },

  unmounted(el) {
    window.removeEventListener('scroll', el._onScroll);
    el.classList.remove('navbar--solid');
  },
};