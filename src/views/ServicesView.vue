<template>
  <HeaderComponent />

  <main class="container-fluid offer-page section-spacing">
    <div class="section-spacing">
    <!-- Intro -->
    <section class="row justify-content-center mb-5">
      <div class="col-12 col-lg-8 text-center">
        <h1>{{ $t('offer.title') }}</h1>
        <span>{{ $t('offer.intro') }}</span>
      </div>
    </section>

    <!-- Les 2 prestations -->
    <section class="row justify-content-center g-4 mb-5">
      <div class="col-12 col-lg-5">
        <div class="offer-block h-100">
          <h2>{{ $t('offer.dev.title') }}</h2>
          <p>{{ $t('offer.dev.text') }}</p>
          <ul>
            <li v-for="item in devItems" :key="item">{{ item }}</li>
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

    <!-- CTA -->
    <section class="row justify-content-center p-5">
      <div class="col-12 text-center d-flex flex-row align-items-center justify-content-center gap-3">
        <router-link to="/contact" class="btn-offer btn-offer-primary">
          {{ $t('offer.cta_devis') }}
        </router-link>
        <router-link to="/realisations" class="btn-offer btn-offer-secondary-services">
          {{ $t('offer.cta_realisations') }}
        </router-link>
      </div>
    </section>
    </div>
  </main>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'OffreView',

  components: {
    HeaderComponent,
    FooterComponent,
  },

computed: {
  devItems() {
    return this.$tm('offer.dev.items');
  },
  redactionItems() {
    return this.$tm('offer.redaction.items');
  },
}
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_services.scss";
</style>