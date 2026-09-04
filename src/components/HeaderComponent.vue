<template>
  <nav 
    v-scroll 
    class="navbar navbar-expand-lg" 
    id="nav" 
    :class="{ 'menu-open': isMenuOpen, 'header--dark': isDarkHeader }"
  >
    <div class="container coll-header">
      <button
        class="navbar-toggler ms-auto"
        type="button"
        @click.stop="toggleMenu"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
      >
        <span class="bi bi-list"></span>
      </button>

      <div 
        class="collapse navbar-collapse justify-content-end" 
        :class="{ show: isMenuOpen }" 
        id="navbarNav"
      >
        <div class="navbar-nav">
          <router-link 
            to="/" 
            class="nav-link nav-link-home no-underline" 
            aria-label="Retour à l'accueil" 
            @click="closeMenu"
          >
            V<span style="color: #DC6E44">D</span>V
          </router-link>

          <router-link 
            class="nav-link" 
            :to="'/services'" 
            @click="closeMenu"
          >
            {{ $t('navbar.offer') }}
          </router-link>

          <router-link 
            class="nav-link" 
            :to="'/realisations'" 
            @click="closeMenu"
          >
            {{ $t('navbar.realisations') }}
          </router-link>

          <router-link 
            class="nav-link" 
            :to="'/about'" 
            @click="closeMenu"
          >
            {{ $t('navbar.about') }}
          </router-link>

          <!-- Icônes de contact -->
          <div class="d-flex contact-icons align-items-center ms-3">
            <a 
              href="mailto:victordevos.pro@gmail.com" 
              title="Email"
              aria-label="Envoyer un email"
            >
              <i class="bi bi-envelope-fill"></i>
            </a>
            <a 
              href="https://wa.me/33681883176" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="WhatsApp"
              aria-label="Contacter sur WhatsApp"
            >
              <i class="bi bi-whatsapp"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/victor2vos/" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn"
              aria-label="Visiter le profil LinkedIn"
            >
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
  
  data() {
    return {
      isMenuOpen: false,
    };
  },

  computed: {
    isDarkHeader() {
      return this.$route.meta.darkHeader === true;
    },
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    closeMenu() {
      this.isMenuOpen = false;
    },

    handleOutsideClick(event) {
      // Si le menu est fermé, ne rien faire
      if (!this.isMenuOpen) return;

      const navbarNav = document.getElementById('navbarNav');
      const toggleButton = document.querySelector('.navbar-toggler');

      // Ferme si on clique en dehors du menu ET du bouton
      if (
        !navbarNav?.contains(event.target) && 
        !toggleButton?.contains(event.target)
      ) {
        this.closeMenu();
      }
    },
  },

  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_header.scss";
</style>