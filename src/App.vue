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

</script>

<style lang="scss">
  .theme-light {
              --background: #fcfcf7;
              --color: #000;
          }
  
  .theme-dark {
      --background: #000;
      --color: #fff;
  }

html, body{
  background: var(--background);
    font-family:"k2d", sans-serif ;
    font-weight: 100;
    font-style: normal;
    color: var(--color);
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
    margin: 150px 0;
}


</style>
