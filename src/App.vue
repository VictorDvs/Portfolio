<template>
  <v-app>
  <router-view/>
  </v-app>
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

<style>

p {
    font-size: 1.5em;
    font-weight: 200;
}

</style>
