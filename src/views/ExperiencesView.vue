<template>
        <HeaderComponent/>
<div class="container-fluid experiences">
    <p>Les documentations sur lesquelles j'ai eu l'opportunité de collaborer sont soient privés soient mises à jour, cependant j'ai collecté quelques échantillons de certains travaux réalisés ces dernières années.</p>
    <div class="row row-xp">
        <h2>Illustrations de travaux réalisés chez EXFO entre 2022 et 2023 </h2>
        <div class="col-sm-6 col-12 align-items-end d-flex justify-content-center flex-column"><img  src="/Experiences/mkdocs_config.png" alt="Fichier YAML de configuration pour MkDocs" class="mkdocs-img" @click="showImageModal('/Experiences/mkdocs_config.png')"></div>
        <div class="col-sm-6 col-12 align-items-start d-flex justify-content-center flex-column"><h4>Édition de fichiers YAML pour configurer notre documentation avec MkDocs</h4></div>
    </div>
    <div class="row row-xp">
        <div class="col-sm-6 col-12 align-items-end d-flex justify-content-center flex-column"><h4>Map du process pour la publication d'un nouveau guide</h4></div>
        <div class="col-sm-6 col-12 align-items-start d-flex justify-content-center flex-column"><img  src="/Experiences/new-version-guide-exfo.png" alt="Fichier YAML de configuration pour MkDocs" class="new-guide-img" @click="showImageModal('/Experiences/new-version-guide-exfo.png')"></div>
    </div>
    <div class="row row-xp">
        <div class="col-sm-6 col-12 align-items-end d-flex justify-content-center flex-column"><img  src="/Experiences/validate-comments-exfo.png" alt="Fichier YAML de configuration pour MkDocs" class="new-guide-img" @click="showImageModal('/Experiences/validate-comments-exfo.png')"></div>
        <div class="col-sm-6 col-12 align-items-start d-flex justify-content-center flex-column"><h4>Map du process pour la publication d'un nouveau guide</h4></div>
    </div>
     <!-- Modal -->
     <!-- Modale personnalisée -->
    <div v-if="isModalVisible" class="custom-modal">
        <div class="custom-modal-content">
            <span class="close-btn" @click="isModalVisible = false">&times;</span>
            <img :src="modalImage" alt="Aperçu de l'image" class="img-fluid" />
        </div>
    </div>
</div>
    <!-- <FooterComponent/> -->
</template>

<script>
   import HeaderComponent from '@/components/HeaderComponent.vue'
//    import FooterComponent from '@/components/FooterComponent.vue'
    export default {
        components: {
            HeaderComponent,
            // FooterComponent
        }, 
        data() {
        return {
            modalImage: '',
            isModalVisible: false
        };
    },

        methods: {

            showImageModal(imgSrc) {
            this.modalImage = imgSrc;
            this.isModalVisible = true;
        }
        }
    }
</script>

<style lang="scss" scoped>

h2 {
    text-align: center;
}
.experiences {
    margin: 200px 0;
}

.mkdocs-img{
    width: 500px;
    height: 500px;
}

.new-guide-img{
    width: 750px;
    height: 300px;
}

.row-xp{
    margin: 50px 0 0;
}

/* Styles pour la modale */
.custom-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
}

.custom-modal-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 90%; /* Réduis la largeur de la modale */
    height: 90vh;
    // max-width: 500px; /* Limite la taille maximale de la modale */
    // max-height: 80vh;
    overflow: auto;
}

.custom-modal-content img {
    width: 80%;
    height: auto;
    // max-width: 100%;
    // max-height: 100%;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 32px;
    cursor: pointer;
}

</style>