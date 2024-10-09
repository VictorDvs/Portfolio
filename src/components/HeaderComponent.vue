<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top" id="nav">
      <div class="container-fluid">
        <!-- Logo ou autre élément ici si nécessaire -->
        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div class="navbar-nav">
            <router-link class="nav-link nav-anchor" :to="'/'">Faisons connaissance </router-link>
            <router-link class="nav-link nav-anchor" :to="'/projects'">Mes Projets</router-link>
            <router-link class="nav-link nav-anchor" :to="'/experiences'">Mes Éxperiences</router-link>
            <router-link class="nav-link nav-anchor" :to="'/contact'">Entrons en contact 🛸</router-link>
            <a class="nav-link link-cv" target="_blank" href="/CV_Victor_De_Vos.pdf">Télécharger Mon CV</a>
          </div>
        </div>
      </div>
    </nav>
  </template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

#nav {
    background-color: #fcfcf7 !important;
    z-index: 10;
    height: 80px;
  }
  
  .nav-link {
    font-family: "k2d", sans-serif;
    font-weight: 500;
    font-style: normal;
    color: black;
    font-size: 1.3em;
    margin-right: 20px;
  }
  
  .nav-link:hover {
    color: black;
  }
  
  .nav-link:active {
    color: black;
  }
  
  .link-cv {
    border: 2.5px solid black;
    border-radius: 8px;
    width: fit-content;
    padding: 5px 15px;
  }
  
  .link-cv:hover {
    background-color: black;
    color: #ebe6e0;
  }
  
</style>