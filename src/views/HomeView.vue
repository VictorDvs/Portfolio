<template>
  <HeaderComponent />
 
  <main class="home-page">
    <!-- ===== SECTION 1: HERO ===== -->
    <section class="hero-section" id="hero" data-aos="fade-up">
      <div class="container-fluid hero-container">
        <div class="container">
          <div class="row align-items-center justify-content-center min-vh-100">
            <div class="col-12 col-lg-8">
              <div class="hero-content text-center">
                <!-- Photo -->
                <div class="hero-photo" data-aos="zoom-in" data-aos-delay="100">
                  <img src="/ma-photo-header.png" alt="Victor De Vos" class="hero-image" />
                </div>
 
                <!-- Title -->
                <h1 class="hero-title" data-aos="fade-up" data-aos-delay="200">
                  {{ $t('home.hero.title') }}
                </h1>
 
                <!-- Subtitle -->
                <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="300">
                  {{ $t('home.hero.subtitle') }}
                </p>
 
                <!-- CTAs -->
                <div class="hero-ctas" data-aos="fade-up" data-aos-delay="400">
                  <router-link to="/services" class="btn btn-primary btn-lg">
                    <i class="bi bi-arrow-right me-2"></i>
                    {{ $t('home.hero.cta_primary') }}
                  </router-link>
                  <a href="#contact-cta" class="btn btn-outline-light btn-lg">
                    <i class="bi bi-envelope me-2"></i>
                    {{ $t('home.hero.cta_secondary') }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ===== SECTION 2: SERVICES PREVIEW ===== -->
    <section class="services-preview" id="services-preview" data-aos="fade-up">
      <div class="container py-120">
        <div class="row justify-content-center mb-5">
          <div class="col-12 col-lg-8 text-center">
            <h2 class="section-title">{{ $t('home.services.title') }}</h2>
            <p class="section-subtitle">{{ $t('home.services.subtitle') }}</p>
          </div>
        </div>
 
        <div class="row g-4 justify-content-center">
          <!-- Service 1: Web Dev -->
          <div class="col-12 col-md-6 col-lg-5" data-aos="fade-right" data-aos-delay="100">
            <div class="service-card">
              <div class="service-icon">
                <i class="bi bi-code-square"></i>
              </div>
              <h3 class="service-title">{{ $t('home.services.webdev.title') }}</h3>
              <p class="service-description">{{ $t('home.services.webdev.description') }}</p>
              
              <ul class="service-highlights">
                <li v-for="item in $tm('home.services.webdev.highlights')" :key="item">
                  {{ item }}
                </li>
              </ul>
 
              <router-link to="/services#webdev" class="btn btn-primary btn-sm mt-4">
                {{ $t('home.services.cta') }}
              </router-link>
            </div>
          </div>
 
          <!-- Service 2: Tech Writing -->
          <div class="col-12 col-md-6 col-lg-5" data-aos="fade-left" data-aos-delay="100">
            <div class="service-card">
              <div class="service-icon service-icon-secondary">
                <i class="bi bi-file-earmark-text"></i>
              </div>
              <h3 class="service-title">{{ $t('home.services.techwriting.title') }}</h3>
              <p class="service-description">{{ $t('home.services.techwriting.description') }}</p>
              
              <ul class="service-highlights">
                <li v-for="item in $tm('home.services.techwriting.highlights')" :key="item">
                  {{ item }}
                </li>
              </ul>
 
              <router-link to="/services#techwriting" class="btn btn-primary btn-sm mt-4">
                {{ $t('home.services.cta') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ===== SECTION 3: PROJECTS PREVIEW ===== -->
    <section class="projects-preview" id="projects-preview" data-aos="fade-up">
      <div class="container py-120">
        <div class="row justify-content-center mb-5">
          <div class="col-12 col-lg-8 text-center">
            <h2 class="section-title">{{ $t('home.projects.title') }}</h2>
            <p class="section-subtitle">{{ $t('home.projects.subtitle') }}</p>
          </div>
        </div>
 
        <div class="row g-4 justify-content-center">
          <div 
            class="col-12 col-md-6 col-lg-4"
            v-for="(project, i) in previewProjects" 
            :key="project.id"
            :data-aos="`fade-up`"
            :data-aos-delay="`${(i + 1) * 100}`">
            <a :href="project.link" target="_blank" rel="noopener" class="project-card">
              <div class="project-image">
                <img :src="project.image" :alt="project.title" />
                <div class="project-overlay">
                  <h3 class="project-title">{{ project.title }}</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
 
        <div class="row justify-content-center mt-5">
          <div class="col-12 text-center">
            <router-link to="/works" class="btn btn-primary btn-lg">
              <i class="bi bi-briefcase me-2"></i>
              {{ $t('home.projects.cta') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ===== SECTION 4: TESTIMONIALS ===== -->
    <section class="testimonials-section" id="testimonials" data-aos="fade-up">
      <div class="container py-120">
        <div class="row justify-content-center mb-5">
          <div class="col-12 col-lg-8 text-center">
            <h2 class="section-title">{{ $t('home.testimonials.title') }}</h2>
            <p class="section-subtitle">{{ $t('home.testimonials.subtitle') }}</p>
          </div>
        </div>
 
        <div class="row g-4 justify-content-center">
          <div 
            class="col-12 col-md-6 col-lg-5"
            v-for="(testimonial, i) in testimonials"
            :key="i"
            :data-aos="`fade-up`"
            :data-aos-delay="`${(i + 1) * 100}`">
            <div class="testimonial-card">
              <p class="testimonial-quote">
                <i class="bi bi-quote"></i>
                {{ testimonial.quote }}
              </p>
              <div class="testimonial-author">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="testimonial-avatar" />
                <div class="testimonial-info">
                  <p class="testimonial-name">{{ testimonial.name }}</p>
                  <p class="testimonial-role">{{ testimonial.role }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ===== SECTION 5: CONTACT CTA + FORM ===== -->
    <section class="contact-section" id="contact-cta" data-aos="fade-up">
      <div class="container py-120">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6">
            <!-- Heading -->
            <div class="text-center mb-5">
              <h2 class="section-title">{{ $t('home.cta.title') }}</h2>
              <p class="section-subtitle">{{ $t('home.cta.subtitle') }}</p>
            </div>
 
            <!-- Form -->
            <form 
              @submit.prevent="handleSubmit"
              class="contact-form"
              data-aos="fade-up"
              data-aos-delay="100">
              
              <!-- Row 1: Name & Email -->
              <div class="form-row">
                <div class="form-group">
                  <label for="name">{{ $t('home.cta.form.name') }} <span class="required">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    class="form-control" 
                    required>
                </div>
                <div class="form-group">
                  <label for="email">{{ $t('home.cta.form.email') }} <span class="required">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    class="form-control" 
                    required>
                </div>
              </div>
 
              <!-- Row 2: Phone & Subject -->
              <div class="form-row">
                <div class="form-group">
                  <label for="phone">{{ $t('home.cta.form.phone') }}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone"
                    class="form-control">
                </div>
                <div class="form-group">
                  <label for="subject">{{ $t('home.cta.form.subject') }}</label>
                  <input 
                    type="text" 
                    id="subject" 
                    v-model="form.subject"
                    class="form-control">
                </div>
              </div>
 
              <!-- Row 3: Message (full width) -->
              <div class="form-group form-group--full">
                <label for="message">{{ $t('home.cta.form.message') }} <span class="required">*</span></label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  class="form-control" 
                  rows="6" 
                  required></textarea>
              </div>
 
              <!-- Checkbox -->
              <div class="form-check">
                <input 
                  type="checkbox" 
                  id="callback" 
                  v-model="form.callback"
                  class="form-check-input">
                <label for="callback" class="form-check-label">
                  {{ $t('home.cta.form.callback') }}
                </label>
              </div>
 
              <!-- Submit Button -->
              <button 
                type="submit" 
                class="btn btn-primary btn-lg"
                :disabled="isSubmitting">
                <i v-if="!isSubmitting" class="bi bi-send me-2"></i>
                <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                {{ isSubmitting ? $t('home.cta.form.sending') : $t('home.cta.form.submit') }}
              </button>
            </form>
 
            <!-- Success Message -->
            <div v-if="submitSuccess" class="alert alert-success mt-4" role="alert">
              {{ $t('home.cta.form.success') }}
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
  name: 'HomeView',
 
  components: {
    HeaderComponent,
    FooterComponent,
  },
 
  data() {
    return {
      previewProjects: [
        {
          id: 'alkantara',
          title: 'Alkantara',
          image: 'Projets/cover-alkantara.png',
          link: 'https://alkantara.fr/',
        },
        {
          id: 'pablocires',
          title: 'Portfolio Pablo Cirès',
          image: 'Projets/cover-pablocires.png',
          link: 'https://www.pablocires.me/',
        },
        {
          id: 'fastpack',
          title: 'Fastpack',
          image: 'Projets/cover-fastpack.png',
          link: 'https://fastpack-documentation.netlify.app/',
        },
      ],
      testimonials: [
        {
          quote: this.$t('home.testimonials.item1.quote'),
          name: this.$t('home.testimonials.item1.name'),
          role: this.$t('home.testimonials.item1.role'),
          avatar: '/icon-eleonore.jpg',
        },
        {
          quote: this.$t('home.testimonials.item2.quote'),
          name: this.$t('home.testimonials.item2.name'),
          role: this.$t('home.testimonials.item2.role'),
          avatar: '/icon-helene.jpg',
        },
      ],
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        callback: false,
      },
      isSubmitting: false,
      submitSuccess: false,
    }
  },
 
  methods: {
    async handleSubmit() {
      this.isSubmitting = true
      try {
        const response = await fetch('https://formspree.io/f/mpwaeeld', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.form.name,
            email: this.form.email,
            phone: this.form.phone,
            subject: this.form.subject || 'Contact depuis la homepage',
            message: this.form.message,
            callback: this.form.callback,
          }),
        })
 
        if (response.ok) {
          this.submitSuccess = true
          this.resetForm()
          setTimeout(() => {
            this.submitSuccess = false
          }, 5000)
        }
      } catch (error) {
        console.error('Form submission error:', error)
      } finally {
        this.isSubmitting = false
      }
    },
 
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        callback: false,
      }
    },
  },
 
  mounted() {
    // AOS est géré dans main.js
    // Les animations jouent automatiquement au scroll
  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_boutons.scss";
@import "@/assets/styles/_home.scss";
@import "@/assets/styles/_espacement.scss";
</style>