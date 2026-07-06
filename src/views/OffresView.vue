<template>
  <HeaderComponent />

  <main class="container-fluid offre-page section-spacing">
    <div class="section-spacing">
    <!-- Intro -->
    <section class="row justify-content-center mb-5">
      <div class="col-12 col-lg-8 text-center">
        <h1>{{ $t('offer.title') }}</h1>
        <p>{{ $t('offer.intro') }}</p>
      </div>
    </section>

    <!-- Les 2 prestations -->
    <section class="row justify-content-center g-4 mb-5">
      <div class="col-12 col-lg-5">
        <div class="offer-block h-100">
          <h2>{{ $t('offer.dev.title') }}</h2>
          <p>{{ $t('offer.dev.text') }}</p>
          <ul>
            <li v-for="(item, i) in devItems" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>

      <div class="col-12 col-lg-5">
        <div class="offer-block h-100">
          <h2>{{ $t('offer.redaction.title') }}</h2>
          <p>{{ $t('offer.redaction.text') }}</p>
          <ul>
            <li v-for="(item, i) in redactionItems" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </section>
</div>
    <!-- CTA -->
    <section class="row justify-content-center">
      <div class="col-12 text-center">
        <router-link to="/contact" class="btn-offer btn-offer-primary">
          {{ $t('offer.cta') }}
        </router-link>
      </div>
    </section>
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'OffreView',

  components: {
    HeaderComponent,
  },

  data() {
    return {
      // TODO: remplacer par tes vraies prestations (ou basculer sur
      // $tm('offer.dev.items') si tu préfères tout piloter depuis i18n.js)
      devItems: [
        'Sites vitrines sur mesure',
        'Développement WordPress',
        'Applications Vue.js',
        'Migration et refonte de sites existants',
      ],
      redactionItems: [
        'Guides utilisateurs',
        'Documentation technique (docs-as-code)',
        'Notes de version',
        'Bases de connaissances',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
</style>