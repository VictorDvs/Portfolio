<template>
  <!-- Header -->
  <HeaderComponent/>

  <!-- Main Content -->
  <main>
<!-- ============================= -->
<!-- Section : Hero                -->
<!-- ============================= -->
<div class="container-fluid home d-flex flex-column align-items-center justify-content-center" id="home">
  <v-parallax src="/hero-cover.jpg" height="100vh" width="100%">
    <div class="hero-overlay"></div>

<div class="hero-content d-flex flex-column align-items-center justify-content-center w-100">
  <div class="home-text-intro text-center">
    <h1 id="text-greetings">{{ $t('home.hero.title') }}</h1>
    <div class="d-flex flex-column gap-3 w-100">
    <p class="hero-subtitle">{{ $t('home.hero.subtitle') }}</p>
    <div class="d-flex flex-row align-items-center justify-content-center gap-3">
            <router-link to="/services" class="btn-offer btn-offer-primary">
          {{ $t('home.hero.cta_primary') }}
        </router-link>
        <router-link to="/contact" class="btn-offer btn-offer-secondary">
          {{ $t('home.hero.cta_secondary') }}
        </router-link>
        </div>
    </div>
  </div>

      <!-- CTA Hero -->
      <div class="d-flex flex-column flex-md-row justify-content-center gap-3">

      </div>

    </div>
  </v-parallax>

<!-- ============================= -->
<!-- Section : Offre (2 piliers)   -->
<!-- ============================= -->
    <div class="container-fluid offer-section section-spacing" id="offre-preview">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center mb-4">
          <h2>{{ $t('home.offer.title') }}</h2>
          <p>{{ $t('home.offer.subtitle') }}</p>
        </div>
      </div>

      <div class="row justify-content-center g-4">
        <div class="col-12 col-md-5">
          <div class="offer-card text-center h-100">
            <h3>{{ $t('home.offer.dev.title') }}</h3>
            <p>{{ $t('home.offer.dev.text') }}</p>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="offer-card text-center h-100">
            <h3>{{ $t('home.offer.redaction.title') }}</h3>
            <p>{{ $t('home.offer.redaction.text') }}</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-12 d-flex justify-content-center">
          <router-link to="/offre" class="btn-offer btn-offer-primary">
            {{ $t('home.offer.cta') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- ============================= -->
    <!-- Section : Aperçu réalisations -->
    <!-- ============================= -->
    <div class="container-fluid projects-section section-spacing" id="realisations-preview">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center mb-4">
          <h2>{{ $t('home.projects.title') }}</h2>
        </div>
      </div>

      <div class="row justify-content-center g-4">
        <div class="col-12 col-md-4" v-for="project in previewProjects" :key="project.id">
          <div class="project-card text-center h-100">
            <a :href="project.link" target="_blank" rel="noopener"><img :src="project.image" class="img-fluid" :alt="project.title"></a>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-12 d-flex justify-content-center">
          <router-link to="/realisations" class="btn-offer btn-offer-primary">
            {{ $t('home.projects.cta') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- ============================= -->
    <!-- Section : Teaser À propos     -->
    <!-- ============================= -->
    <div class="container-fluid about-teaser-section py-5" id="about-teaser">
      <div class="row align-items-center justify-content-center g-4">
        <div class="col-12 col-md-3 text-center">
          <div class="circle-container circle-container-small">
            <img src="/ma-photo.jpg" class="img-fluid" alt="Ma photo">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <p>{{ $t('home.about.teaser') }}</p>
          <router-link to="/a-propos" class="me-contacter btn-offer btn-offer-primary">
            {{ $t('home.about.cta') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- ============================= -->
    <!-- Section : Témoignages         -->
    <!-- ============================= -->
    <div class="container-fluid testimonials-section section-spacing" id="testimonials">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center mb-4">
          <h2>{{ $t('home.testimonials.title') }}</h2>
        </div>
      </div>

      <div class="row justify-content-center g-4">
        <div class="col-12 col-md-5">
          <div class="testimonial-card h-100">
            <p class="testimonial-quote">{{ $t('home.testimonials.item1.quote') }}</p>
            <div class="testimonial-author d-flex align-items-center gap-3">
              <img src="/testimonial-1.jpg" class="testimonial-avatar" :alt="$t('home.testimonials.item1.name')">
              <div class="text-start">
                <p class="testimonial-name mb-0">{{ $t('home.testimonials.item1.name') }}</p>
                <p class="testimonial-role mb-0">{{ $t('home.testimonials.item1.role') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="testimonial-card h-100">
            <p class="testimonial-quote">{{ $t('home.testimonials.item2.quote') }}</p>
            <div class="testimonial-author d-flex align-items-center gap-3">
              <img src="/icon-helene.jpg" class="testimonial-avatar" :alt="$t('home.testimonials.item2.name')">
              <div class="text-start">
                <p class="testimonial-name mb-0">{{ $t('home.testimonials.item2.name') }}</p>
                <p class="testimonial-role mb-0">{{ $t('home.testimonials.item2.role') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================= -->
    <!-- Section : CTA final           -->
    <!-- ============================= -->
    <div class="container-fluid final-cta-section section-spacing text-center" id="contact-cta">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <h2>{{ $t('home.cta.title') }}</h2>
          <router-link to="/contact" class="btn-offer btn-offer-primary">
            {{ $t('home.cta.button') }}
          </router-link>
        </div>
      </div>
    </div>
</div>
  </main>
  <FooterComponent/>
</template>


<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useI18n } from 'vue-i18n'
import Typed from 'typed.js'

export default {
  name: 'HomeView',

  components: {
    HeaderComponent,
    FooterComponent,
  },

  data() {
    return {
      // TODO: remplacer par un import depuis ton fichier de données
      // de réalisations existant si tu en as un (ex: @/data/projects.js)
      previewProjects: [
        {
          id: 'alkantara',
          title: 'Alkantara',
          description: 'Site de l\'agence de communication Alkantara, réalisé avec WordPress.',
          image: 'Projets/cover-alkantara.png',
          link: 'https://alkantara.fr/',
        },
        {
          id: 'pablocires',
          title: 'Portfolio Pablo Cirès',
          description: 'Site web personnel de Pablo Cirès, réalisateur de documentaires.',
          image: 'Projets/projets-pablo-cires.png',
          link: 'https://www.pablocires.me/',
        },
        {
          id: 3,
          title: 'Projet 3',
          description: 'Courte description du projet.',
          image: '/projects/projet-3.jpg',
        },
      ],
    }
  },

  mounted() {
    const { t } = useI18n()
    const text = t('home.hero.title')

    // efface le texte par défaut et lance Typed.js
    const el = document.getElementById('text-greetings')
    if (el) {
      el.textContent = ''
      new Typed(el, {
        strings: [text],
        typeSpeed: 45,
        startDelay: 300,
        showCursor: true,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_boutons.scss";
@import "@/assets/styles/_home.scss";
@import "@/assets/styles/_espacement.scss";
</style>