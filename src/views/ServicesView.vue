<template>
  <HeaderComponent />
 
  <main>
    <!-- ===== SECTION 1: HERO ===== -->
    <section class="hero-services" id="services-hero">
      <div class="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div class="row align-items-center justify-content-center w-100">
          <div class="col-12 col-lg-10 text-center">
            <h1 class="hero-title" data-aos="fade-up">
              {{ $t('services.hero.title') }}
            </h1>
            <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
              {{ $t('services.hero.subtitle') }}
            </p>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ===== SECTION 2: SERVICES DÉTAILLÉS ===== -->
    <section class="services-main py-120" id="services-main">
      <div class="container">
        <!-- SERVICE 1: WEB DEVELOPMENT -->
        <div class="row align-items-center justify-content-center mb-5 pb-5" id="webdev">
          <div class="col-12 col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
            <div class="service-visual">
              <div class="service-icon-large">
                <i class="bi bi-code-square"></i>
              </div>
            </div>
          </div>
 
          <div class="col-12 col-lg-7" data-aos="fade-left">
            <div class="service-content">
              <h2 class="service-title">
                {{ $t('services.webdev.title') }}
              </h2>
              
              <p class="service-intro">
                {{ $t('services.webdev.intro') }}
              </p>
 
              <div class="service-description mb-5">
                {{ $t('services.webdev.description') }}
              </div>
 
              <!-- What's Included -->
              <div class="service-section mb-4">
                <h3 class="service-section-title">
                  <i class="bi bi-check2-circle me-2"></i>
                  {{ $t('services.webdev.included_title') }}
                </h3>
                <ul class="service-list">
                  <li v-for="item in $tm('services.webdev.items')" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
 
              <!-- For Whom -->
              <div class="service-section mb-4">
                <h3 class="service-section-title">
                  <i class="bi bi-people me-2"></i>
                  {{ $t('services.webdev.for_whom_title') }}
                </h3>
                <p>{{ $t('services.webdev.for_whom') }}</p>
              </div>
 
              <!-- Benefits -->
              <div class="service-benefits">
                <div class="benefit-item" v-for="(benefit, i) in $tm('services.webdev.benefits')" :key="i">
                  <div class="benefit-icon">
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <div class="benefit-text">{{ benefit }}</div>
                </div>
              </div>
 
              <!-- CTA for Service -->
              <div class="service-cta mt-5">
                <router-link to="/contact" class="btn btn-primary btn-lg">
                  <i class="bi bi-envelope-fill me-2"></i>
                  {{ $t('services.webdev.cta') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
 
        <!-- Divider -->
        <div class="services-divider"></div>
 
        <!-- SERVICE 2: TECHNICAL WRITING -->
        <div class="row align-items-center justify-content-center mt-5 pt-5" id="techwriting">
          <div class="col-12 col-lg-7 order-2 order-lg-1" data-aos="fade-right">
            <div class="service-content">
              <h2 class="service-title">
                {{ $t('services.techwriting.title') }}
              </h2>
              
              <p class="service-intro">
                {{ $t('services.techwriting.intro') }}
              </p>
 
              <div class="service-description mb-5">
                {{ $t('services.techwriting.description') }}
              </div>
 
              <!-- What's Included -->
              <div class="service-section mb-4">
                <h3 class="service-section-title">
                  <i class="bi bi-check2-circle me-2"></i>
                  {{ $t('services.techwriting.included_title') }}
                </h3>
                <ul class="service-list">
                  <li v-for="item in $tm('services.techwriting.items')" :key="item">
                    {{ item }}
                  </li>
                </ul>
              </div>
 
              <!-- For Whom -->
              <div class="service-section mb-4">
                <h3 class="service-section-title">
                  <i class="bi bi-people me-2"></i>
                  {{ $t('services.techwriting.for_whom_title') }}
                </h3>
                <p>{{ $t('services.techwriting.for_whom') }}</p>
              </div>
 
              <!-- Benefits -->
              <div class="service-benefits">
                <div class="benefit-item" v-for="(benefit, i) in $tm('services.techwriting.benefits')" :key="i">
                  <div class="benefit-icon">
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <div class="benefit-text">{{ benefit }}</div>
                </div>
              </div>
 
              <!-- CTA for Service -->
              <div class="service-cta mt-5">
                <router-link to="/contact" class="btn btn-primary btn-lg">
                  <i class="bi bi-envelope-fill me-2"></i>
                  {{ $t('services.techwriting.cta') }}
                </router-link>
              </div>
            </div>
          </div>
 
          <div class="col-12 col-lg-5 order-1 order-lg-2 mb-5 mb-lg-0" data-aos="fade-left">
            <div class="service-visual">
              <div class="service-icon-large service-icon-secondary">
                <i class="bi bi-file-earmark-text"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ===== SECTION 3: COMPARISON TABLE ===== -->
    <section class="comparison-section py-120 bg-light" id="services-comparison">
      <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">
          {{ $t('services.comparison.title') }}
        </h2>
 
        <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <div class="col-12 col-lg-10">
            <div class="comparison-table-wrapper">
              <table class="comparison-table">
                <thead>
                  <tr>
                    <th>{{ $t('services.comparison.feature') }}</th>
                    <th class="text-center">
                      {{ $t('services.webdev.title') }}
                    </th>
                    <th class="text-center">
                      {{ $t('services.techwriting.title') }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, i) in comparisonRows" :key="i">
                    <td>{{ row.feature }}</td>
                    <td class="text-center">
                      <i v-if="row.webdev" class="bi bi-check-circle-fill text-success"></i>
                      <span v-else class="text-muted">—</span>
                    </td>
                    <td class="text-center">
                      <i v-if="row.techwriting" class="bi bi-check-circle-fill text-success"></i>
                      <span v-else class="text-muted">—</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ===== SECTION 4: PROCESS / HOW IT WORKS ===== -->
    <section class="process-section py-120" id="services-process">
      <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">
          {{ $t('services.process.title') }}
        </h2>
 
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10">
            <div class="process-timeline">
              <!-- Step 1 -->
              <div class="process-step" data-aos="fade-up" data-aos-delay="50">
                <div class="process-number">1</div>
                <div class="process-content">
                  <h3>{{ $t('services.process.step1_title') }}</h3>
                  <p>{{ $t('services.process.step1_desc') }}</p>
                </div>
              </div>
 
              <!-- Step 2 -->
              <div class="process-step" data-aos="fade-up" data-aos-delay="100">
                <div class="process-number">2</div>
                <div class="process-content">
                  <h3>{{ $t('services.process.step2_title') }}</h3>
                  <p>{{ $t('services.process.step2_desc') }}</p>
                </div>
              </div>
 
              <!-- Step 3 -->
              <div class="process-step" data-aos="fade-up" data-aos-delay="150">
                <div class="process-number">3</div>
                <div class="process-content">
                  <h3>{{ $t('services.process.step3_title') }}</h3>
                  <p>{{ $t('services.process.step3_desc') }}</p>
                </div>
              </div>
 
              <!-- Step 4 -->
              <div class="process-step" data-aos="fade-up" data-aos-delay="200">
                <div class="process-number">4</div>
                <div class="process-content">
                  <h3>{{ $t('services.process.step4_title') }}</h3>
                  <p>{{ $t('services.process.step4_desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ===== SECTION 5: FAQ ===== -->
    <section class="faq-section py-120 bg-light" id="services-faq">
      <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">
          {{ $t('services.faq.title') }}
        </h2>
 
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="accordion" id="faqAccordion">
              <div class="accordion-item" v-for="(faq, i) in faqItems" :key="i" data-aos="fade-up" data-aos-delay="50">
                <h2 class="accordion-header">
                  <button 
                    class="accordion-button" 
                    type="button" 
                    :data-bs-target="`#faq${i}`"
                    :aria-controls="`faq${i}`"
                    data-bs-toggle="collapse">
                    {{ faq.title }}
                  </button>
                </h2>
                <div :id="`faq${i}`" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ===== SECTION 6: FINAL CTA ===== -->
    <section class="cta-final-section py-120 bg-primary text-white" id="services-cta-final">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-lg-8 text-center">
            <h2 class="cta-title" data-aos="fade-up">
              {{ $t('services.cta_final.title') }}
            </h2>
            <p class="cta-subtitle" data-aos="fade-up" data-aos-delay="50">
              {{ $t('services.cta_final.subtitle') }}
            </p>
 
            <div class="cta-buttons d-flex flex-column flex-md-row gap-3 justify-content-center mt-5" data-aos="fade-up" data-aos-delay="100">
              <!-- Primary CTA: Quote -->
              <router-link to="/contact" class="btn btn-secondary btn-lg">
                <i class="bi bi-file-earmark-arrow-down me-2"></i>
                {{ $t('services.cta_final.quote') }}
              </router-link>
 
              <!-- Secondary CTA: Contact -->
              <a href="mailto:contact@voscodes.fr" class="btn btn-outline-light btn-lg">
                <i class="bi bi-envelope me-2"></i>
                {{ $t('services.cta_final.contact') }}
              </a>
 
              <!-- Tertiary CTA: Portfolio -->
              <router-link to="/works" class="btn btn-outline-light btn-lg">
                <i class="bi bi-briefcase me-2"></i>
                {{ $t('services.cta_final.portfolio') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
 
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
 
export default {
  name: 'ServicesView',
 
  components: {
    HeaderComponent,
    FooterComponent,
  },
 
  data() {
    return {
      comparisonRows: [
        {
          feature: this.$t('services.comparison.feature_timeline'),
          webdev: true,
          techwriting: false,
        },
        {
          feature: this.$t('services.comparison.feature_design'),
          webdev: true,
          techwriting: false,
        },
        {
          feature: this.$t('services.comparison.feature_deployment'),
          webdev: true,
          techwriting: false,
        },
        {
          feature: this.$t('services.comparison.feature_seo'),
          webdev: true,
          techwriting: false,
        },
        {
          feature: this.$t('services.comparison.feature_documentation'),
          webdev: false,
          techwriting: true,
        },
        {
          feature: this.$t('services.comparison.feature_apis'),
          webdev: false,
          techwriting: true,
        },
        {
          feature: this.$t('services.comparison.feature_guides'),
          webdev: false,
          techwriting: true,
        },
        {
          feature: this.$t('services.comparison.feature_maintenance'),
          webdev: true,
          techwriting: false,
        },
      ],
    }
  },
 
  computed: {
    faqItems() {
      return this.$tm('services.faq.items') || []
    },
  },
 
  mounted() {
    // AOS est géré dans main.js
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_services.scss";
</style>