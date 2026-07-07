export default {
  mounted(el, binding) {
    // Options configurables via v-scroll="{ hideThreshold: 200, transparencyThreshold: 10 }"
    // Valeurs par défaut = comportement identique à ton code actuel si aucune option n'est passée
    const options = {
      hideThreshold: 200,
      transparencyThreshold: 10,
      ...(binding.value || {}),
    };

    let lastScroll = window.scrollY;
    let hasLeftTop = false; // Flag "one-way" : ne repasse JAMAIS à false après le premier scroll
    let ticking = false;

    el.style.transition = 'transform 0.4s ease-out';
    el.style.willChange = 'transform'; // hint navigateur pour la perf du translateY

    // --- Edge case : page chargée déjà scrollée (reload, ancre, retour navigateur) ---
    // Sans ça, si l'utilisateur arrive avec scrollY > threshold, le header
    // serait transparent alors qu'il ne devrait pas l'être.
    if (window.scrollY > options.transparencyThreshold) {
      hasLeftTop = true;
      el.classList.add('navbar--solid');
    }

    const update = () => {
      const currentScroll = window.scrollY;

      // --- 1. TRANSPARENCE (one-way, indépendante du hide/show) ---
      if (!hasLeftTop && currentScroll > options.transparencyThreshold) {
        hasLeftTop = true;
        el.classList.add('navbar--solid'); // jamais .remove() : comportement voulu
      }

      // --- 2. VISIBILITÉ (ton comportement existant, inchangé) ---
      if (currentScroll <= options.hideThreshold) {
        el.style.transform = 'translateY(0)';
      } else if (currentScroll > lastScroll) {
        el.style.transform = 'translateY(-100%)'; // scroll bas -> masque
      } else {
        el.style.transform = 'translateY(0)'; // scroll haut -> affiche
      }

      lastScroll = currentScroll;
      ticking = false;
    };

    // Throttle RAF : évite de déclencher `update` à chaque pixel scrollé
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
    el.classList.remove('navbar--solid'); // évite un état "pollué" si le DOM est réutilisé (keep-alive, transitions)
  },
};