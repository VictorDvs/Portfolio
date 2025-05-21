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
            <router-link class="nav-link nav-anchor" :to="'/tech-writing-projects'" @click="closeMenu">{{ $t('navbar.techWritingProjects') }}</router-link>
            <div class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" @click.prevent="toggleDropdown" aria-expanded="isDropdownOpen">
        {{ $t('navbar.projects') }}
      </a>
      <ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
         <li><router-link class="dropdown-item" :to="'/projects#symfony'" @click="closeDropdown">Symfony</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#vueCLI'" @click="closeDropdown">Vue.js</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#vanillaJS'" @click="closeDropdown">JavaScript</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#css'"  @click="closeDropdown">CSS</router-link></li>
      </ul>
   </div>
            <router-link class="nav-link nav-anchor" :to="'/experiences'" @click="closeMenu">{{ $t('navbar.experiences') }}</router-link>
            <router-link class="nav-link nav-anchor" :to="'/contact'" @click="closeMenu">{{ $t('navbar.contact') }}</router-link>
              <div class="d-flex language-switcher align-items-center">
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
                <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  </template>

<script>
import ThemeToggle from './ThemeToggle.vue'


    export default {
      data() {
    return {
      isMenuOpen: false,
      isDropdownOpen: false,
      languages: ['fr', 'en'], // Langues disponibles
    };
  },
  components: {
    ThemeToggle
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
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_header.scss";
</style>

