<template>
    <nav v-scroll class="navbar navbar-expand-lg" id="nav">
      <div class="container-fluid coll-header">
        <!-- Logo ou autre élément ici si nécessaire -->
        <button 
        class="navbar-toggler ms-auto" 
        type="button" 
        @click.stop="toggleMenu"
        aria-expanded="isMenuOpen" 
        aria-label="Toggle navigation">
          <span class="bi bi-list"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end " :class="{ show: isMenuOpen }" id="navbarNav">
          <div class="navbar-nav ">
            <router-link class="nav-link" :to="'/'" @click="closeMenu"> {{ $t('navbar.about') }} </router-link>
            <div class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" @click.prevent="toggleDropdown" aria-expanded="isDropdownOpen">
        {{ $t('navbar.projects') }}
      </a>
      <ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
         <li><router-link class="dropdown-item" :to="'/projects#symfony'" @click="closeDropdown">Symfony</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#vue-cli'" @click="closeDropdown">Vue CLI</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#vue-cdn'" @click="closeDropdown">Vue CDN</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#vanilla-js'" @click="closeDropdown">JavaScript</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#css-pur'"  @click="closeDropdown">CSS</router-link></li>
      </ul>
   </div>
            <router-link class="nav-link nav-anchor" :to="'/experiences'" @click="closeMenu">{{ $t('navbar.experiences') }}</router-link>
            <router-link class="nav-link nav-anchor" :to="'/contact'" @click="closeMenu">{{ $t('navbar.contact') }}</router-link>
            <a class="nav-link  nav-anchor" target="_blank" href="/CV_Victor_De_Vos.pdf">{{ $t('navbar.cv') }}</a>
            <div class="language-switcher">
              <button
                v-for="lang in languages"
                :key="lang"
                class="btn btn-lang"
                :class="{ active: lang === currentLocale }"
                @click="changeLanguage(lang)"
              >
                {{ lang.toUpperCase() }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>

<script>

    export default {
      data() {
    return {
      isMenuOpen: false,
      isDropdownOpen: false,
      languages: ['fr', 'en'], // Langues disponibles
    };
  },
  computed: {
    currentLocale() {
      return this.$i18n.locale; // Récupère la langue actuelle
    },
  },
  methods: {

    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    closeDropdown() {
      this.isDropdownOpen = false;  // Ferme le dropdown
    },

    changeLanguage(lang) {
      this.$i18n.locale = lang; // Change la langue globale
      localStorage.setItem('lang', lang); // Sauvegarde la langue dans le localStorage
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },

    handleOutsideClick(event) {
      const navbar = document.getElementById('navbarNav');
      const toggleButton = document.querySelector('.navbar-toggler');
      
      if (navbar.classList.contains('show') && !navbar.contains(event.target) && event.target !== toggleButton) {
        this.closeMenu();
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }
  }
    
</script>

<style lang="scss" scoped>
/* Style principal de la navbar */
#nav {
  background-color: #121212ee;
  color: #f5f5f5;
  z-index: 10;
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  overflow: visible;
  transition: height 0.3s ease; 
}

/* Hauteur ajustée lorsque la navbar est ouverte */
#nav.show {
  height: auto;
}

/* Alignement des liens dans la navbar */
.navbar-nav {
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

/* Style des liens de navigation */
.navbar-nav a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px; /* Largeur ajustée automatiquement */
  color: #f5f5f5;
}

/* Style des liens de la navbar */
.nav-link {
  position: relative;
  font-family: "Istok Web", sans-serif;
  font-weight: 500;
  font-size: 1.7em;
  text-decoration: none;
  padding-bottom: 5px; /* Espace pour souligner les liens */
}

/* Soulignement des liens actifs */
.router-link-exact-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50;
  width: 60%;
  height: 2px;
  background-color: #f5f5f5; /* Couleur du soulignement */
}

/* Suppression du soulignement pour certains liens */
.no-underline::after {
  display: none;
}

/* Style du dropdown */
.dropdown {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Menu déroulant du dropdown */
.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.1rem);  
  left: 0;
  z-index: 1050;
  background: linear-gradient(to top, #444444, #121212);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-100px);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Affichage du menu déroulant */
.dropdown-menu.show {
  display: block;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* Style des éléments du dropdown */
.dropdown-item {
  color: #f5f5f5;
}

/* Survol des éléments du dropdown */
.dropdown-item:hover {
  background-color: #121212;
}

/* Commutateur de langue */
.language-switcher {
  display: flex;
  gap: 10px;
}

/* Boutons de sélection de langue */
.btn-lang {
  background-color: transparent;
  border: 1px solid #f5f5f5;
  color: #f5f5f5;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.9em;
  font-family: "Istok Web", sans-serif;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

/* Survol des boutons de langue */
.btn-lang:hover {
  background-color: #f5f5f5;
  color: #121212;
}

/* Bouton de langue actif */
.btn-lang.active {
  background-color: #f5f5f5;
  color: #121212;
}



/* Changer la taille de l'icône */
.bi {
  font-size: 50px; /* Ajuster la taille */
}

/* Changer la couleur de l'icône */
.bi-list {
  color: #f5f5f5; /* Couleur claire pour le menu */
}

/* Media Queries pour les écrans réduits */
@media screen and (max-width: 991px) {
  /* Style pour le bouton hamburger */
  // .navbar-toggler {
  //   // margin-bottom: 40px;
  //   // border: none;
  // }

  .router-link-exact-active::after {
    display: none;
  }

  // .navbar-toggler-icon {
  //   background-color: #f5f5f5;
  //   border-radius: 2px;
  // }

  /* Désactive l'animation de soulignement au survol sur les petits écrans */
  // .nav-link:hover::after {
  //   display: none;
  // }
}
</style>

