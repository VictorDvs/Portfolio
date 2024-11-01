<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Mes projets</router-link> |
    <router-link to="/experiences">Mes expériences professionnelles</router-link> |
    <router-link to="/contact">Pour rentrer en contact 🛸</router-link>
  </nav> -->
  <router-view/>
</template>

<script>
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { Dropdown } from 'bootstrap';

export default {
  setup() {
    const router = useRouter();

    const initializeDropdowns = () => {
      // Sélectionne tous les éléments de dropdown
      const dropdownElements = document.querySelectorAll('.dropdown-toggle');
      dropdownElements.forEach((dropdown) => {
        new Dropdown(dropdown);
      });
    };

    onMounted(() => {
      initializeDropdowns(); // Initialise les dropdowns au chargement initial

      // Surveille les changements de route pour réinitialiser les dropdowns
      watch(
        () => router.currentRoute.value,
        () => {
          initializeDropdowns(); // Réinitialise les dropdowns après chaque navigation
        }
      );
    });
  },
};
</script>

<style lang="scss">


html, body{
    background-color: #fcfcf7;
    height: 100%;
}

a{
    text-decoration: none;
    color: black;
    font-weight: 400;
}

p {
    font-size: 1.5em;
    font-weight: 200;
}

.section{
    margin: 100px 0;
}


</style>
