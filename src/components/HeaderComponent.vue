<template>
    <nav class="navbar navbar-expand-lg sticky-top" id="nav">
      <div class="container-fluid coll-header">
        <!-- Logo ou autre élément ici si nécessaire -->



        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div class="navbar-nav">
            <router-link class="nav-link nav-anchor" :to="'/'" @click="closeMenu">À mon propos </router-link>
            <div class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" @click.prevent data-bs-toggle="dropdown" aria-expanded="false">
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
            <a class="nav-link link-cv" target="_blank" href="/CV_Victor_De_Vos.pdf">Voir Mon CV</a>
          </div>
        </div>
      </div>
    </nav>
  </template>

<script>
import { Collapse } from 'bootstrap'; // Import explicite de Collapse

    export default {
      methods: {
    closeMenu() {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse.classList.contains('show')) {
        new Collapse(navbarCollapse).hide(); // Utilise l'objet Collapse pour fermer le menu
      }
    }
  }
    }
</script>

<style lang="scss" scoped>

#nav {
  background-color: #fcfcf7;
    z-index: 10;
    height: 120px;
    position: fixed; 
    top: 0;
    width: 100%; 
   }
  
  .nav-link {
    font-family: "Istok Web", sans-serif;
  font-weight: 500;
  font-style: normal;
    color: black;
    font-size: 1.5em;
    margin-right: 40px;
  }
  
  // .nav-link:hover {
  //   color: black;
  // }
  
  // .nav-link:active {
  //   color: black;
  // }
  
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
}
  
</style>