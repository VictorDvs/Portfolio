<template>
    <!-- Header -->
    <HeaderComponent />
  
    <!-- Main Content -->
    <main>
      <!-- Section: Home -->
      <div class="container-fluid home d-flex flex-column align-items-center justify-content-center" id="home">
        <!-- Welcome Row -->
        <div class="row align-items-center justify-content-center mt-5 w-100">
          <div class="col-12 col-lg-8 d-flex flex-column flex-lg-row align-items-center justify-content-center">
            <!-- Photo -->
            <div class="ma-photo mb-3 mb-lg-0 me-lg-3">
              <div class="circle-container">
                <img src="/ma-photo.jpg" class="img-fluid" id="ma-photo" alt="Ma photo">
              </div>
            </div>
  
            <!-- Intro Text -->
            <div class="home-text-intro text-center text-lg-start">
              <h2 id="text-greetings">{{ $t('about.title') }}</h2>
            </div>
          </div>
        </div>
  
        <!-- Bio Section -->
        <div class="bio row mt-5 w-100 justify-content-center">
            <div class="col-12 col-md-10 col-lg-8" id="text-body">
                <p>
                    {{ $t('about.paragraph1') }}
                    <!-- <a href="https://www.writethedocs.org/guide/docs-as-code/" target="_blank" rel="noopener" class="me-contacter">Docs-as-Code</a>{{ $t('about.paragraph1_part2') }} -->
                </p>
                <p>
                    {{ $t('about.paragraph2') }}
                    <!-- <a href="https://territoiredigital.afpa.fr/fr/fair/visiting/1" target="_blank" rel="noopener" class="me-contacter">l'AFPA Territoire Digital</a> {{ $t('about.paragraph2_part2') }} -->
                </p>
                <p>
    {{ $t('about.paragraph3') }}
    <!-- <router-link to="/contact" class="me-contacter">{{ $t('about.paragraph3_part3') }}</router-link> -->
  </p>
</div>

  
          <!-- Social Media Links -->
          <div class="col-12 d-flex justify-content-center mt-3" id="sources-perso">
            <a target="_blank" href="https://github.com/VictorDvs?tab=repositories" rel="noopener">
              <i class="bi bi-github me-3"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/victor2vos/" rel="noopener">
              <i class="bi bi-linkedin me-3"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/vittoriodevos" rel="noopener">
              <i class="bi bi-facebook me-3"></i>
            </a>
          </div>
        </div>
        <!-- <div class=" tem d-flex justify-content-center align-items-center mt-5 flex-column">
            <p class="mb-5 helene-profil">
              <img src="icon-helene.jpg" alt="Photo de ma collègue Hélène Le Tutour" class="helene me-2">
              Hélène Le Tutour, {{ $t('about.helene') }} <b>EXFO</b> :
            </p>
            <p>{{ $t('about.tem') }}</p>
            
  
        </div> -->
      </div>
    </main>
  </template>
  
  
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
    name: 'AboutView',

    components: {
        HeaderComponent,
    },


}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_home.scss";
</style>
