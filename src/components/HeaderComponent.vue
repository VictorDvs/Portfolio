<template>
    <nav class="navbar navbar-expand-lg sticky-top" id="nav">
      <div class="container-fluid coll-header">
        <!-- Logo ou autre élément ici si nécessaire -->



        <button 
        class="navbar-toggler ms-auto" 
        type="button" 
        @click.stop="toggleMenu"
        aria-expanded="isMenuOpen" 
        aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" :class="{ show: isMenuOpen }" id="navbarNav">
          <div class="navbar-nav">
            <router-link class="nav-link nav-anchor" :to="'/'" @click="closeMenu">À mon propos </router-link>
            <div class="nav-item dropdown">
      <a class="nav-link-projects dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Projets
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
         <li><router-link class="dropdown-item" :to="'/projects#vue-cli'" @click="closeMenu">Vue CLI</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#vue-cdn'" @click="closeMenu">Vue CDN</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#vanilla-js'" @click="closeMenu">Vanilla JS</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#css-pur'"  @click="closeMenu">CSS pur</router-link></li>
      </ul>
   </div>
            <router-link class="nav-link nav-anchor" :to="'/experiences'" @click="closeMenu">Éxperiences</router-link>
            <router-link class="nav-link nav-anchor" :to="'/contact'" @click="closeMenu">Contact</router-link>
            <a class="nav-link link-cv no-underline" target="_blank" href="/CV_Victor_De_Vos.pdf">Voir Mon CV</a>
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
    };
  },
      methods: {
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

.dropdown{
    display: flex;
    align-items: center;
}

.dropdown-menu{
  font-family: "Istok Web", sans-serif;
  border: 1px solid rgba(0, 0, 0, 0.258);

}

#nav {
    background-color: #fcfcf7;
    z-index: 10;
    height: 80px;
    position: fixed; 
    top: 0;
    width: 100%; 
   }

   .navbar-nav{
    justify-content: space-evenly;
    width: 100%;
   }

   .nav-link-projects{
    font-family: "Istok Web", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: black;
    font-size: 1.7em;
    margin-right: 40px;
    text-decoration: none;
   }
  
  .nav-link {
    position: relative;
    font-family: "Istok Web", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: black;
    font-size: 1.7em;
    margin-right: 40px;
  }

  /* Style pour la ligne sous le lien */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px; /* Positionnez la ligne sous le texte */
  width: 100%;
  height: 1px; /* Épaisseur de la ligne */
  background-color: black; /* Couleur de la ligne */
  transform: scaleX(0); /* Ligne invisible au départ */
  transform-origin: right; /* Point de départ de l’animation */
  transition: transform 0.5s ease; /* Animation d’extension de la ligne */
}

/* Style au survol */
.nav-link:hover {
  color: #333; /* Change la couleur du texte au survol */
}

/* Animation de la ligne au survol */
.nav-link:hover::after {
  transform: scaleX(1); /* Fait apparaître la ligne en l’étendant */
  transform-origin: left; /* Étend la ligne de gauche à droite */
}
  
/* Applique le soulignement permanent sur le lien actif */
.router-link-exact-active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.no-underline::after {
  display: none;
}
  
  .link-cv {
    border: 2.5px solid black;
    border-radius: 8px;
    width: fit-content;
    padding: 5px 15px;

    &:hover {
    background-color: black;
    color: #ebe6e0;
  }
  }
  

@media screen and (max-width:991px) {
  .coll-header{
    background-color: #fcfcf7;
    padding-bottom: 30px;
  }
  .navbar-toggler{
    margin-bottom: 40px;
  }

  .nav-link:hover::after{
    display: none;
  }

  .router-link-exact-active::after{
    width: 18%;
    padding: 0px;
  }
}
  
</style>