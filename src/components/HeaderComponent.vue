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
            <router-link class="nav-link nav-anchor" :to="'/'">À mon propos </router-link>
            <div class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="javascript:void(0)" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Projets
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
         <li><router-link class="dropdown-item" :to="'/projects#vue-cli'">Vue CLI</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#vue-cdn'">Vue CDN</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#vanilla-js'">Vanilla JS</router-link></li>
         <li><router-link class="dropdown-item" :to="'/projects#css-pur'">CSS pur</router-link></li>
      </ul>
   </div>
            <router-link class="nav-link nav-anchor" :to="'/experiences'">Éxperiences</router-link>
            <router-link class="nav-link nav-anchor" :to="'/contact'">Contact 🛸</router-link>
            <a class="nav-link link-cv" target="_blank" href="/CV_Victor_De_Vos.pdf">Voir Mon CV</a>
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

.theme-light {
              --background: #fcfcf7;
              --color: #000;
              --border: 2.5px solid black;
          }
  
  .theme-dark {
      --background: #000;
      --color: #fff;
      --border: 2.5px solid white;
  }

#nav {
  background: var(--background);
    z-index: 10;
    height: 150px;
    position: fixed; 
    top: 0;
    width: 100%; 
   }
  
  .nav-link {
    font-family: "Istok Web", sans-serif;
  font-weight: 500;
  font-style: normal;
    color: var(--color);
    font-size: 1.5em;
    margin-right: 20px;
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
  }
  
  .link-cv:hover {
    background-color: black;
    color: #ebe6e0;
  }

@media screen and (max-width:991px) {
  .coll-header{
    background-color: #fcfcf7;
    padding-bottom: 30px;
  }
}
  
</style>