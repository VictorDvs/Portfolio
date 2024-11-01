<template>
        <HeaderComponent/>
<div class="container-fluid experiences">
    <div class="row row-xp">
        <h2>Les missions du rédacteur technique chez EXFO </h2>
        <p>Étant donné que la documentation technique des solutions est confidentielle, je ne peux pas fournir les documents auxquels j'ai contribué. Cependant, je vous présente quelques images qui illustrent mon travail en tant que rédacteur technique.</p>
        <CarouselComponent :slides="carouselSlides" />
    </div>
</div>

    <!-- <FooterComponent/> -->
</template>

<script>
   import HeaderComponent from '@/components/HeaderComponent.vue';
   import CarouselComponent from '@/components/CarouselComponent.vue';

//    import FooterComponent from '@/components/FooterComponent.vue'
    export default {
        components: {
            HeaderComponent,
            CarouselComponent,
            // FooterComponent
        }, 

        data() {
    return {
        carouselSlides: [
            { src: "/Experiences/mkdocs_config.png", title: "First slide label", text: "Configuration de la documentation avec MkDocs" },
            { src: "/Experiences/new-version-guide-exfo.png", title: "Second slide label", text: "Process de publication d'une nouvelle version de documentation" },
            { src: "/Experiences/validate-comments-exfo.png", title: "Third slide label", text: "Process de validation des commentaires utilisateurs de la documentation" }
        ],
    }
        }

    }
</script>

<style lang="scss" scoped>

.experiences {
    margin: 200px auto;
    background-color: #fcfcf7;
    height: 100vh;
}

.row-xp{
    width: 65%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
}
</style>