<template>
  <!-- Header -->
  <HeaderComponent/>

  <!-- Main Content -->
  <main>
<!-- ============================= -->
<!-- Section : Hero                -->
<!-- ============================= -->


  <div class="hero-content d-flex flex-column align-items-center justify-content-center w-100">
  
    <div class="home-text-intro text-center">
      <div class="photo-wrapper">
      <div class="photo-circle">
        <img src="/ma-photo.jpg" alt="Victor De Vos" />
      </div>
      </div>
         <!-- Cercle + titre côte à côte -->
      <div class="d-flex flex-row align-items-center justify-content-center gap-3">
        <h1 id="text-greetings">{{ $t('home.hero.title') }}</h1>
      </div>
  
      <div class="d-flex flex-column gap-3 w-100">
      <p class="hero-subtitle">{{ $t('home.hero.subtitle') }}</p>
  
      <div class="d-flex flex-row align-items-center justify-content-center gap-3">
              <router-link to="/services" class="btn-offer btn-offer-primary">
            {{ $t('home.hero.cta_primary') }}
          </router-link>
          <router-link to="/#contact-cta" class="btn-offer btn-offer-secondary no-underline">
            {{ $t('home.hero.cta_secondary') }}
          </router-link>
  
          </div>
      </div>
    </div>
  
        <!-- CTA Hero -->
        <div class="d-flex flex-column flex-md-row justify-content-center gap-3">
        </div>
      </div>


<!-- ============================= -->
<!-- Section : Offre (2 piliers)   -->
<!-- ============================= -->

    <div class="container-fluid offer-section reveal-on-scroll" id="offre-preview">
      <!-- <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center mb-5 w-100">
          <h2>{{ $t('home.offer.title') }}</h2>
        </div>
      </div> -->

      <div class="row justify-content-center g-5">
        <div class="col-12 col-md-5">
          <div class="offer-card wavy-circle h-100">
            <p>{{ $t('home.offer.dev.title') }}</p>
            <h3>{{ $t('home.offer.dev.text') }}</h3>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <div class="offer-card wavy-circle h-100">
            <p>{{ $t('home.offer.redaction.title') }}</p>
            <h3>{{ $t('home.offer.redaction.text') }}</h3>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-12 d-flex justify-content-center">
          <router-link to="/services" class="btn-offer btn-offer-primary">
            {{ $t('home.offer.cta') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- ============================= -->
    <!-- Section : Aperçu réalisations -->
    <!-- ============================= -->
    <div class="container-fluid projects-section section-spacing reveal-on-scroll" id="realisations-preview">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center mb-4">
          <h2>{{ $t('home.projects.title') }}</h2>
        </div>
      </div>

<div class="row justify-content-center g-4">
  <div class="col-12 col-md-4" v-for="project in previewProjects" :key="project.id">
    <a :href="project.link" target="_blank" rel="noopener" class="project-card-home text-center h-100">
      <div class="project-image-wrapper">
        <img :src="project.image" class="img-fluid" :alt="project.title">
        <h3 class="project-title">{{ project.title }}</h3>
      </div>
    </a>
  </div>
</div>

      <div class="row justify-content-center mt-4">
        <div class="col-12 d-flex justify-content-center mt-4">
          <router-link to="/realisations" class="btn-offer btn-offer-primary">
            {{ $t('home.projects.cta') }}
          </router-link>
        </div>
      </div>
    </div>
    
    <!-- ============================= -->
    <!-- Section : Qui suis-je ?       -->
    <!-- ============================= -->

    <div class="container-fluid about-section section-spacing reveal-on-scroll" id="about">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8 text-center mb-4">
          <h2 class="mb-4">{{ $t('home.about.title') }}</h2>
          <p class="text-about" v-html="$t('home.about.text')"></p>
        </div>
      </div>
    </div>
        <!-- ============================= -->
    <!-- Section : FORMULAIRE           -->
    <!-- ============================= -->
    <div class="container-fluid final-cta-section section-spacing text-center reveal-on-scroll" id="contact-cta">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <h2>{{ $t('home.cta.title') }}</h2>

<div class="col-12 d-flex justify-content-center">
  <form id="form" action="https://formspree.io/f/mpwaeeld" method="POST" class="contact-form">
    
    <!-- Ligne 1 : Name & Email -->
    <div class="form-row">
      <div class="form-group">
        <label for="name">{{ $t('home.cta.form.name') }} <span class="required">*</span></label>
        <input type="text" name="name" id="name" class="form-control" required>
      </div>

      <div class="form-group">
        <label for="email">{{ $t('home.cta.form.email') }} <span class="required">*</span></label>
        <input type="email" name="email" id="email" class="form-control" required>
      </div>
    </div>

    <!-- Ligne 2 : Phone & Subject -->
    <div class="form-row">
      <div class="form-group">
        <label for="phone">{{ $t('home.cta.form.phone') }}</label>
        <input type="tel" name="phone" id="phone" class="form-control">
      </div>

      <div class="form-group">
        <label for="subject">{{ $t('home.cta.form.subject') }}</label>
        <input type="text" name="_subject" id="subject" class="form-control">
      </div>
    </div>

    <!-- Ligne 3 : Message (full width) -->
    <div class="form-group form-group--full">
      <label for="message">{{ $t('home.cta.form.message') }} <span class="required">*</span></label>
      <textarea name="message" id="message" class="form-control" rows="6" required></textarea>
    </div>

    <!-- Checkbox -->
    <div class="form-check mb-0">
      <input type="checkbox" name="callback" id="callback" class="form-check-input">
      <label for="callback" class="form-check-label">{{ $t('home.cta.form.callback') }}</label>
    </div>

    <!-- Button -->
    <button type="submit" class="btn-submit">{{ $t('home.cta.form.submit') }}</button>
  </form>
</div>
          <!-- <router-link to="/contact" class="btn-offer btn-offer-primary">
            {{ $t('home.cta.button') }}
          </router-link> -->
        </div>
      </div>
    </div>
    <!-- ============================= -->
    <!-- Section : Témoignages         -->
    <!-- ============================= -->
    <div class="container-fluid testimonials-section section-spacing reveal-on-scroll" id="testimonials">
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
              <img src="/icon-eleonore.jpg" class="testimonial-avatar" :alt="$t('home.testimonials.item1.name')">
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

  </main>
  <FooterComponent/>
</template>


<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";


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
          image: 'Projets/cover-pablocires.png',
          link: 'https://www.pablocires.me/',
        },
        {
          id: 'fastpack',
          title: 'Fastpack',
          description: 'Courte description du projet.',
          image: 'Projets/cover-fastpack.png',
          link: 'https://fastpack-documentation.netlify.app/',
        },
      ],
    }
  },
mounted() {
    // Une seule création de matchMedia pour tout le composant
    this.mm = gsap.matchMedia();

    this.mm.add("(prefers-reduced-motion: no-preference)", () => {

      // --- Reveal des sections au scroll ---
      const sections = gsap.utils.toArray(".reveal-on-scroll");
      sections.forEach((el) => {
        gsap.from(el, {
          y: 90,
          opacity: 0,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Cleanup unique pour tout ce bloc
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    });
  },

  beforeUnmount() {
    this.mm?.revert();
  },
};

</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_boutons.scss";
@import "@/assets/styles/_home.scss";
@import "@/assets/styles/_espacement.scss";
</style>