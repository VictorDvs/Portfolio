<template>
        <HeaderComponent/>
<div class="container-fluid experiences">
    <div class="row row-xp">
        <h2 class="mb-4">{{ $t('experiences.title_efor') }}</h2>
        <p class="mb-3">{{ $t('experiences.tech') }}
            <span class="badge bg-success">IXIA CCMS (Desktop)</span> <span class="badge bg-info">DITA XML</span>
        </p>
        <p class="mb-4 mt-4">{{ $t('experiences.description1_1_efor') }}</p>
        <p class="mb-4">{{ $t('experiences.description1_efor') }}</p>
    </div>
    <div class="row row-xp mt-5 mb-5">
        <h2 class="mb-4">{{ $t('experiences.title_baifall_dream') }}</h2>
        <p class="mb-3">{{ $t('experiences.tech') }} 
            <span class="badge bg-success">Symfony 6.0</span> <span class="badge bg-success">GitHub</span> <span class="badge bg-success">Hostinger</span> <span class="badge bg-success">Figma</span> <span class="badge bg-success">Visual Studio Code</span> <span class="badge bg-info">PHP</span> <span class="badge bg-info">JavaScript</span> <span class="badge bg-info">MySQL</span> <span class="badge bg-info">API Stripe</span>
        </p>
        <p class="mb-4 mt-4">{{ $t('experiences.desc_baifall_dream') }}</p>
        <p>{{ $t('experiences.resources_baifall_dream') }}</p>
        <CarouselComponent :slides="carouselSlides3" id="carousel3"/>
    </div>
    <div class="row row-xp section-exfo">
        <h2 class="mb-4">{{ $t('experiences.title1') }}</h2>
        <p class="mb-3">{{ $t('experiences.tech') }}
            <span class="badge bg-success">Oxygen XML Editor</span> <span class="badge bg-success">PHP MyAdmin</span> <span class="badge bg-success">GitLab</span> <span class="badge bg-success">MkDocs</span> <span class="badge bg-success">Visual Studio Code</span> <span class="badge bg-info">DITA XML</span> <span class="badge bg-info">Markdown</span> <span class="badge bg-info">YAML</span>
        </p>
        <p class="mb-4 mt-4">{{ $t('experiences.description1_1') }}</p>
        <p class="mb-4">{{ $t('experiences.description1') }}</p>
        <CarouselComponent :slides="carouselSlides1" id="carousel1" />
        <div class="tem d-flex justify-content-center align-items-center flex-column">
            <p class="mb-5">
              <img src="/icon-helene.jpg" alt="Photo de ma collègue Hélène Le Tutour" class="helene me-2">
              Hélène Le Tutour, {{ $t('about.helene') }} <b>EXFO</b> :
            </p>
            <p>{{ $t('about.tem') }}</p>
        </div>
    </div>
    <div class="row row-xp mt-5 mb-5">
        <h2 class="mb-4">{{ $t('experiences.title2') }}</h2>
        <p class="mb-3">{{ $t('experiences.tech') }} 
            <span class="badge bg-success">Paligo</span> <span class="badge bg-success">Oxygen XML Editor</span> <span class="badge bg-success">Confluence</span> <span class="badge bg-info">Docbook</span> <span class="badge bg-info">DITA XML</span>
        </p>
        <p class="mb-4 mt-4">{{ $t('experiences.description2') }}</p>
        <p>{{ $t('experiences.resources') }}</p>
        <ul> 
        <li class="mb-2">{{ $t('experiences.linkOlfeoDoc') }} <a class="linkOlfeo" href="https://doc.saas.olfeo.eu/index.html?lang=fr" target="_blank" rel="noopener">Olfeo SaaS</a></li>
        <li class="mb-4"> <a href="/Soutenance.pdf" target="_blank" rel="noopener">{{ $t('experiences.soutenance') }}</a></li>
        </ul>
        <CarouselComponent :slides="carouselSlides2" id="carousel2"/>
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
        carouselSlides1: [
            { src: "/Experiences/mkdocs_config.png", title: "First slide label", text: 'experiences.carousel1_slide1' },
            { src: "/Experiences/new-version-guide-exfo.png", title: "Second slide label", text: "experiences.carousel1_slide2" },
            { src: "/Experiences/validate-comments-exfo.png", title: "Third slide label", text: "experiences.carousel1_slide3" }
        ],
        carouselSlides2: [
            { src: "/Experiences/xp-olfeo-knowledge-base.png", title: "First slide label", text: "experiences.carousel2_slide1" },
            { src: "/Experiences/xp-olfeo-knowledge-base-use-case.png", title: "Third slide label", text: "experiences.carousel2_slide2" },
            { src: "/Experiences/xp-olfeo-knowledge-base-pb.png", title: "Fourth slide label", text: "experiences.carousel2_slide3" },
            { src: "/Experiences/xp-olfeo-notes-versions.png", title: "Second slide label", text: "experiences.carousel2_slide4" },
        ],
        carouselSlides3: [
            { src: "/Experiences/baifall_UML.png", title: "First slide label", text: "experiences.carousel3_slide1" },
            { src: "/Experiences/baifall_easyAdmin.png", title: "Second slide label", text: "experiences.carousel3_slide2" },
            { src: "/Experiences/baifall_tests.png", title: "Third slide label", text: "experiences.carousel3_slide3" },
        ],
        activeIndex: 0,
    }
        },
        computed: {
    currentSlideText() {
        const currentSlides = this.activeIndex < this.carouselSlides1.length ? this.carouselSlides1 : this.carouselSlides2;
        return this.$t(currentSlides[this.activeIndex]?.text);
    }
}

    }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_experiences.scss";
</style>