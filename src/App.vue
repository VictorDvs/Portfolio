<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Mes projets</router-link> |
    <router-link to="/experiences">Mes expériences professionnelles</router-link> |
    <router-link to="/contact">Pour rentrer en contact 🛸</router-link>
  </nav> -->
  <router-view/>
</template>

<style lang="scss">
html, body{
    background-color: #fcfcf7;
    font-family:"k2d", sans-serif ;
    font-weight: 100;
    font-style: normal;
    color: #000000;
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
