<template>
    
<HeaderComponent/>
    
    <div class="container-fluid home" id="home">
    <div class="row">
      <div
        class="ma-photo col-12 col-lg-4 d-flex justify-content-lg-end align-items-center mb-4 mb-lg-0">
        <div class="circle-container">
          <img src="/ma-photo.jpg" class="img-fluid" id="ma-photo" alt="Ma photo">
        </div>
      </div>
      <div class="home-text-intro col-12 col-lg-6 text-start text-column">
        <h2 id="text-greetings"></h2>
        <div id="text-body">
          <p>
            Du haut de mes 2 années d'expériences en tant que rédacteur technique dans des entreprises orientées <em>Logiciel</em>, 
            j'ai réalisé que le code prenait une part trop importante pour que je ne m'y intéresse pas de plus près. Vous trouverez sur mon site les missions 
            qui m'ont été confiées dans "ma vie professionnelle antérieure" ainsi que quelques projets développés en langages front-end. 
            <br><br>
            Je serais heureux d'échanger avec vous, n'hésitez pas à <router-link :to="'/contact'" class="me-contacter">me contacter</router-link> !
          </p>
        </div>
        <p id="sources-perso" class="d-flex">
          <a target="_blank" href="https://github.com/VictorDvs?tab=repositories"><i class="bi bi-github"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/victor2vos/"> <i class="bi bi-linkedin"></i></a>
          <a target="_blank" href="https://www.facebook.com/vittoriodevos"><i class="bi bi-facebook"></i></a>
        </p>
      </div>
    </div>
    <div class="temoignage-helene d-flex align-items-center flex-column justify-content-center">
        
        <p class="temoignage-content">
            "Victor a rejoint mon équipe dans le cadre d'un remplacement de 9 mois, au cours d'une période d'importantes transformations dans l'entreprise. 
Bien que cela soit sa première réelle expérience professionnelle en tant que rédacteur technique, il m'a impressionnée par la rapidité avec laquelle il est monté en compétences et s'est adapté à nos outils et méthodes. 
Victor m'a notamment été d'une aide considérable dans la mise en place de la méthode "Doc-as-code". <br>Curieux par nature et soucieux de bien faire, il s'est beaucoup investi dans les recherches en vue d'optimiser nos méthodes et a été force de proposition.
<br>Victor est calme et discret sans pour autant être effacé. Il a un effet apaisant et positif sur l'équipe, c'est extrêmement agréable de travailler avec lui.
Il a toutes les qualités pour évoluer avec succès dans le monde de la rédaction technique ou ailleurs. Je le recommande vivement."  </p>
        <p class="author"> <img src="icon-helene.jpg" alt="" class="helene"> Hélène Le Tutour, Rédactrice Technique chez EXFO</p>
  
    </div>
  </div>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import Typed from 'typed.js'; // Importation de Typed.js
    export default {
        name: 'AboutView',
        mounted() {
            this.initTyped();
        },
        components: {
            HeaderComponent,
            FooterComponent
        },
        methods: {
            initTyped() {
      // Initialisation de Typed.js avec les options
      const options = {
        strings: [
          "Soyez les bienvenus sur mon portfolio !", 
          "Je m'appelle Victor, j'apprends le développement web et je suis rédacteur technique de profession."
        ],
        typeSpeed: 10,
        backSpeed: 20,
        loop: false // Répéter l'animation en boucle si nécessaire
      };

      new Typed('#text-greetings', options);
    }
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";

.theme-light {
            --background: #fcfcf7;
            --color: #000;
            --border-width: 1px;
            --border-style: solid;
            --border-color: black;
        }

.theme-dark {
    --background: #000;
    --color: #fff;
    --border-width: 1px;
    --border-style: solid;
    --border-color: #fcfcf7;
}


.me-contacter {
    color: var(--color);
    font-weight: 500;
}

.home{
    margin: 150px 0 ;
}

.home-text-intro{
    margin-left: 50px;
    font-family: "Kalam", cursive;
    font-weight: 300;

}

@media (max-width: 1200px) {
    .home-text-intro {
        margin-left: 0px;
    }
}

.circle-container {
    position: relative; /* Nécessaire pour que l'ombre soit bien positionnée */
    @include displayFlex;
    width: 320px; /* Ajuste la taille du cercle selon ton besoin */
    height: 320px; /* Ajuste la taille du cercle selon ton besoin */
    border-radius: 50%; /* Rend le conteneur circulaire */
    overflow: hidden; /* Coupe l'image qui dépasse */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9); /* Ombre portée */
    padding-top: 100px;
}
.circle-container img{
    max-width: 100%; 
    /* object-fit: cover; */
    /* object-position: center; */
 }

 #text-greetings{
     font-size: 3em;
     font-family: "Kalam", cursive;
  font-weight: 400;
  font-style: normal;
     height: 130px;
     
 }

.temoignage-content {
    font-family: "Kalam", cursive;
    font-weight: 300;
    font-size: 2em;
    max-width: 75%;
    margin-top: 100px;
    border-width: var(--border-width);
    border-style: var(--border-style);
    border-color: var(--border-color);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 2px 2px 5px black;
}

.author{
    @include displayFlex;
    padding: 30px;
}

.helene{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    // background-color: white;
    // box-shadow: 1px 1px 5px black;
    margin-right: 15px;
    
}

@media (max-width: 1200px) {
    .ma-photo {
        display: flex;
        justify-content: center;
    }
}


@media (max-width: 1078px){
    #text-greetings{
        margin-bottom: 60px;
        text-align: center;
    }
}

 #text-intro{
     font-size: 2.5em;
     font-weight: 100;
 }

#sources-perso{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: end;
}

.bi{
    margin: 10px;
    cursor: pointer;
    color: black;
}

.bi:hover{
    color: black;
}

.btn-primary{
    background-color: black;
    color: black;
    border: none;
    /* justify-content: end; */
    
}


.btn-primary:hover{
    background-color: rgb(0, 0, 0);
    border: none;
    /* color: #ebe6e0; */
    
}

#consult-cv:hover{
    color: #ebe6e0;
}

@media (max-width: 775px){
    .btn-primary, .btn-secondary{
        margin: 0 auto;
        
}
}

@media screen and (max-width:990px) {
    #sources-perso {
    justify-content: center;
}
#text-body {
    text-align: center;
}
}

@media screen and (max-width:670px) {
#text-body {
    margin-top: 120px;
}

.temoignage-content {
    padding: 0;
    box-shadow: none;
}
}

@media screen and (min-width:990px) and (max-width:1340px) {
    #text-body {
        margin-top: 110px;
    }
}


</style>