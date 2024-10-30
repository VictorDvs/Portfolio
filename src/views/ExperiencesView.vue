<template>
        <HeaderComponent/>
<div class="container-fluid experiences">
    <div class="row row-xp">
        <h2>Illustrations de travaux réalisés chez EXFO entre 2022 et 2023 </h2>
        <p>La documentation technique des solutions d'EXFO est privé mais voici quelques illustrations de mes missions.</p>

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
            { src: "/Experiences/mkdocs_config.png", title: "First slide label", text: "Édition de fichiers YAML pour configurer notre documentation avec MkDocs" },
            { src: "/Experiences/new-version-guide-exfo.png", title: "Second slide label", text: "Map du process pour la publication d'un nouveau guide" },
            { src: "/Experiences/validate-comments-exfo.png", title: "Third slide label", text: "Some representative placeholder content for the first slide." }
        ],
    }
        }

    }
</script>

<style lang="scss" scoped>


.carousel {
    max-width: 65%;
    width: 65%;
    @media (max-width: 768px) {
        width: 100%;
}
}


.experiences {
    margin: 200px auto;
    max-width: 80%;
}

.row-xp{
    margin: 50px 0 0;
    display: flex;
    justify-content: center;
}

.image-container {
    width: 100%;       // Remplir la largeur du carousel
    height: 300px;     // Hauteur fixe, ajustez selon vos besoins
    overflow: hidden;  // Masque les parties qui dépassent
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover; // Remplit le conteneur sans déformer l'image
}

.carousel-caption-below {
    text-align: center;
    margin-top: 15px;
    font-size: 1rem;
    color: #333;
}



</style>