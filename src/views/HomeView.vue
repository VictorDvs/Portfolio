<template>
  <!-- Header -->
  <HeaderComponent />

  <!-- Main Content -->
  <main>

    <!-- ============================= -->
    <!-- Section : Hero                -->
    <!-- ============================= -->
    <div class="container-fluid home d-flex flex-column align-items-center justify-content-center" id="home">
      <div class="row align-items-center justify-content-center mt-5 w-100">
        <div class="col-12 col-lg-8 d-flex flex-column flex-lg-row align-items-center justify-content-center">
          <!-- Photo -->
          <div class="ma-photo mb-3 mb-lg-0 me-lg-3">
            <div class="circle-container">
              <img src="/ma-photo.jpg" class="img-fluid" id="ma-photo" alt="Ma photo">
            </div>
          </div>

          <!-- Intro Text -->
          <div class="home-text-intro text-center text-lg-center">
            <h1 id="text-greetings">{{ $t('home.hero.title') }}</h1>
            <p class="hero-subtitle">{{ $t('home.hero.subtitle') }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Hero -->
      <div class="row justify-content-center mt-4 w-100">
        <div class="col-12 d-flex flex-column flex-md-row justify-content-center gap-3">
          <router-link to="/offre" class="btn-offer btn-offer-primary">
            {{ $t('home.hero.cta_primary') }}
          </router-link>
          <router-link to="/contact" class="btn-offer btn-offer-secondary">
            {{ $t('home.hero.cta_secondary') }}
          </router-link>
        </div>
      </div>
    

    <!-- ============================= -->
    <!-- Section : Offre (2 piliers)   -->
    <!-- ============================= -->
    <div class="container-fluid offer-section py-5" id="offre-preview">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center mb-4">
          <h2>{{ $t('home.offer.title') }}</h2>
          <p>{{ $t('home.offer.subtitle') }}</p>
        </div>
      </div>

      <div class="row justify-content-center g-4">
        <div class="col-12 col-md-5">
          <div class="offer-card h-100">
            <h3>{{ $t('home.offer.dev.title') }}</h3>
            <p>{{ $t('home.offer.dev.text') }}</p>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="offer-card h-100">
            <h3>{{ $t('home.offer.redaction.title') }}</h3>
            <p>{{ $t('home.offer.redaction.text') }}</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-12 d-flex justify-content-center">
          <router-link to="/offre" class="btn-offer">
            {{ $t('home.offer.cta') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- ============================= -->
    <!-- Section : Aperçu réalisations -->
    <!-- ============================= -->
    <div class="container-fluid projects-section py-5" id="realisations-preview">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center mb-4">
          <h2>{{ $t('home.projects.title') }}</h2>
        </div>
      </div>

      <div class="row justify-content-center g-4">
        <div class="col-12 col-md-4" v-for="project in previewProjects" :key="project.id">
          <div class="project-card h-100">
            <img :src="project.image" class="img-fluid" :alt="project.title">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-12 d-flex justify-content-center">
          <router-link to="/realisations" class="btn-offer">
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
          <router-link to="/a-propos" class="me-contacter">
            {{ $t('home.about.cta') }}
          </router-link>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-12 d-flex justify-content-center" id="sources-perso">
          <a target="_blank" href="https://github.com/VictorDvs?tab=repositories" rel="noopener">
            <i class="bi bi-github me-3"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/victor2vos/" rel="noopener">
            <i class="bi bi-linkedin me-3"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- ============================= -->
    <!-- Section : CTA final           -->
    <!-- ============================= -->
    <div class="container-fluid final-cta-section py-5 text-center" id="contact-cta">
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
</template>


<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import { useI18n } from 'vue-i18n'
import Typed from 'typed.js'

export default {
  name: 'HomeView',

  components: {
    HeaderComponent,
  },

  data() {
    return {
      // TODO: remplacer par un import depuis ton fichier de données
      // de réalisations existant si tu en as un (ex: @/data/projects.js)
      previewProjects: [
        {
          id: 1,
          title: 'Projet 1',
          description: 'Courte description du projet.',
          image: '/projects/projet-1.jpg',
        },
        {
          id: 2,
          title: 'Projet 2',
          description: 'Courte description du projet.',
          image: '/projects/projet-2.jpg',
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
@import "@/assets/styles/_home.scss";
</style>