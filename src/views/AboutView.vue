<template>

    <HeaderComponent />

    <main>
        <div class="container-fluid home" id="home">
            <div class="row">
                <div class="ma-photo col-12 col-lg-3 d-flex justify-content-lg-end align-items-center mb-4 ">
                    <div class="circle-container">
                        <img src="/ma-photo.jpg" class="img-fluid" id="ma-photo" alt="Ma photo">
                    </div>
                </div>
                <div class="home-text-intro col-12 col-lg-7 text-start text-column">
                    <h2 id="text-greetings">Bienvenu(e) sur mon portfolio !</h2>
                    <div id="text-body">
                        <p>
                            Actuellement à la recherche d'un stage en développement web, je souhaite mettre à profit mes
                            compétences et finaliser mon titre professionnel de <em>Développeur Web et Web Mobile</em>,
                            débuté en juin 2024 au sein de <a
                                href="https://territoiredigital.afpa.fr/fr/fair/visiting/1" target="_blank"
                                rel="noopener">l'AFPA Territoire Digital</a>. </p>
                        <p> 
                                Mon parcours inclut des expériences enrichissantes dans le développement, notamment en tant que rédacteur technique, où j'ai travaillé en méthodologie agile et contribué à la mise en place de processus innovants tels que le <a href="https://www.writethedocs.org/guide/docs-as-code/" target="_blank"
                                rel="noopener">Docs-as-Code</a>.</p>
                        <p>
                            Découvrez mon CV pour plus de détails et n'hésitez pas à <router-link :to="'/contact'" class="me-contacter">me contacter</router-link> pour discuter d'une éventuelle collaboration.
                        </p>
                    </div>
                    <p id="sources-perso" class="d-flex">
                        <a target="_blank" href="https://github.com/VictorDvs?tab=repositories" rel="noopener"><i
                                class="bi bi-github"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/in/victor2vos/" rel="noopener"> <i
                                class="bi bi-linkedin"></i></a>
                        <a target="_blank" href="https://www.facebook.com/vittoriodevos" rel="noopener"><i
                                class="bi bi-facebook"></i></a>
                    </p>
                </div>
            </div>
            <div class="temoignage-helene d-flex align-items-center flex-column justify-content-center">
                <h2>Témoignage</h2>
                <p class="temoignage-content" id="tem-cont"></p>
                <p class="author"> <img src="icon-helene.jpg" alt="Photo de ma collègue Hélène Le Tutour"
                        class="helene"> Hélène Le Tutour, Rédactrice Technique chez EXFO</p>
            </div>
        </div>
    </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import Typed from 'typed.js'; // Importation de Typed.js
export default {
    name: 'AboutView',
    mounted() {
        this.initTyped();
    },
    components: {
        HeaderComponent,
    },
    methods: {
        initTyped() {
            const element = document.getElementById('tem-cont');
            if (element) {
                new Typed(element, {
                    strings: [
                        "Victor a rejoint mon équipe dans le cadre d'un remplacement de 9 mois, au cours d'une période d'importantes transformations dans l'entreprise. Bien que cela soit sa première réelle expérience professionnelle en tant que rédacteur technique, il m'a impressionnée par la rapidité avec laquelle il est monté en compétences et s'est adapté à nos outils et méthodes. Victor m'a notamment été d'une aide considérable dans la mise en place de la méthode 'Doc-as-code'. Curieux par nature et soucieux de bien faire, il s'est beaucoup investi dans les recherches en vue d'optimiser nos méthodes et a été force de proposition. Victor est calme et discret sans pour autant être effacé. Il a un effet apaisant et positif sur l'équipe, c'est extrêmement agréable de travailler avec lui. Il a toutes les qualités pour évoluer avec succès dans le monde de la rédaction technique ou ailleurs. Je le recommande vivement.",
                    ],
                    typeSpeed: 10,
                    backSpeed: 20,
                    loop: false
                })
            }


        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";

a {
    color: black;
    font-weight: bolder;
}

.me-contacter {
    font-weight: 500;
}

.home {
    margin: 200px 0;
    background-color: #fcfcf7;
    height: 100vh;
}

.home-text-intro {
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
    position: relative;
    /* Nécessaire pour que l'ombre soit bien positionnée */
    @include displayFlex;
    width: 250px;
    /* Ajuste la taille du cercle selon ton besoin */
    height: 250px;
    /* Ajuste la taille du cercle selon ton besoin */
    border-radius: 50%;
    /* Rend le conteneur circulaire */
    overflow: hidden;
    /* Coupe l'image qui dépasse */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9);
    /* Ombre portée */
    padding-top: 100px;
}

.circle-container img {
    max-width: 100%;
}

#text-greetings {
    font-size: 3.5em;
    font-family: "Kalam", cursive;
    font-weight: 400;
    font-style: normal;
}

#text-body {
    font-family: "Istok Web", sans-serif;
    font-weight: 300;
    font-style: normal;
    text-align: justify;
}

.temoignage-helene {
    margin-top: 100px;
}

.temoignage-content {
    font-family: "Kalam", cursive;
    font-size: 2em;
    max-width: 75%;
    margin-top: 25px;
    padding: 30px;
    text-align: center;
}

.author {
    @include displayFlex;
    padding: 30px;
    font-family: "Istok Web", sans-serif;
    font-weight: 500;
    font-style: normal;
}

.helene {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;

}

@media (max-width: 1200px) {
    .ma-photo {
        display: flex;
        justify-content: center;
    }
}


@media (max-width: 1078px) {
    #text-greetings {
        margin-bottom: 60px;
        text-align: center;
    }
}

#text-intro {
    font-size: 2.5em;
    font-weight: 100;
}

#sources-perso {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: start;
}

.bi {
    margin: 10px;
    cursor: pointer;
    color: black;
}

.bi:hover {
    color: black;
}

.btn-primary {
    background-color: black;
    color: black;
    border: none;
    /* justify-content: end; */

}


.btn-primary:hover {
    background-color: rgb(0, 0, 0);
    border: none;
    /* color: #ebe6e0; */

}

#consult-cv:hover {
    color: #ebe6e0;
}

@media (max-width: 775px) {

    .btn-primary,
    .btn-secondary {
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