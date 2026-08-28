<template>
  <!-- Header -->
  <HeaderComponent />

  <!-- Main Content -->
  <main>
    <!-- ===== SECTION 1: HERO ===== -->
    <!-- <section class="hero" id="about-hero">
      <div class="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div class="row align-items-center justify-content-center w-100">
          <div class="col-12 col-lg-8">
            <div class="hero-content text-center">
              <h1 class="hero-title" data-aos="fade-up">
                {{ $t('about.hero.title') }}
              </h1>
              <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
                {{ $t('about.hero.subtitle') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- ===== SECTION 2: BIO / PRÉSENTATION ===== -->
    <section class="bio-section py-120" id="about-bio">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <!-- Texte Bio -->
          <div class="col-12 col-lg-7">
            <div class="bio-content">
              <h2 class="section-title" data-aos="fade-up">
                {{ $t('about.bio.title') }}
              </h2>
              
              <p class="bio-text" data-aos="fade-up" data-aos-delay="50">
                {{ $t('about.bio.paragraph1') }}
              </p>
              
              <p class="bio-text" data-aos="fade-up" data-aos-delay="100">
                {{ $t('about.bio.paragraph2') }}
              </p>

              <p class="bio-text" data-aos="fade-up" data-aos-delay="150">
                {{ $t('about.bio.paragraph3') }}
              </p>

              <!-- Lien Docs-as-Code (si applicable) -->
              <p class="bio-text highlight" data-aos="fade-up" data-aos-delay="200">
                <strong>{{ $t('about.bio.philosophy') }}</strong>
                <a href="https://www.writethedocs.org/guide/docs-as-code/" target="_blank" rel="noopener">
                  {{ $t('about.bio.docsAsCode') }}
                </a>
              </p>
            </div>
          </div>

          <!-- Image / Illustration (optionnel) -->
          <div class="col-12 col-lg-5 d-flex justify-content-center mt-5 mt-lg-0">
            <!-- Placeholder pour une photo ou illustration -->
            <div class="profile-placeholder" data-aos="fade-left">
              <div class="profile-circle">
                <img src="/ma-photo.png" alt="Victor De Vos" class="photo-about" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 3: EXPERTISE / VALEURS ===== -->
    <section class="expertise-section py-120 bg-light" id="about-expertise">
      <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">
          {{ $t('about.expertise.title') }}
        </h2>

        <div class="row g-4">
          <!-- Expertise 1: Web Development -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="expertise-card" data-aos="fade-up" data-aos-delay="50">
              <div class="expertise-icon">
                <i class="bi bi-code-square"></i>
              </div>
              <h3>{{ $t('about.expertise.webdev.title') }}</h3>
              <p>
                {{ $t('about.expertise.webdev.desc') }}
              </p>
              <ul class="skills-list">
                <li>Vue.js, React, JavaScript</li>
                <li>WordPress CMS</li>
                <li>SCSS, Bootstrap</li>
                <li>Responsive Design</li>
              </ul>
            </div>
          </div>

          <!-- Expertise 2: Technical Writing -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="expertise-card" data-aos="fade-up" data-aos-delay="100">
              <div class="expertise-icon">
                <i class="bi bi-file-earmark-text"></i>
              </div>
              <h3>{{ $t('about.expertise.techwriting.title') }}</h3>
              <p>
                {{ $t('about.expertise.techwriting.desc') }}
              </p>
              <ul class="skills-list">
                <li>Documentation technique</li>
                <li>Docs-as-Code (MDX, Markdown)</li>
                <li>Guides utilisateur</li>
                <li>Spécifications produit</li>
              </ul>
            </div>
          </div>

          <!-- Expertise 3: Accessibility -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="expertise-card" data-aos="fade-up" data-aos-delay="150">
              <div class="expertise-icon">
                <i class="bi bi-universal-access"></i>
              </div>
              <h3>{{ $t('about.expertise.accessibility.title') }}</h3>
              <p>
                {{ $t('about.expertise.accessibility.desc') }}
              </p>
              <ul class="skills-list">
                <li>WCAG AA/AAA compliance</li>
                <li>Inclusive design</li>
                <li>Performance optimization</li>
                <li>SEO best practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 4: PARCOURS / EXPÉRIENCE ===== -->
    <section class="experience-section py-120" id="about-experience">
      <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">
          {{ $t('about.experience.title') }}
        </h2>

        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="timeline">
              <!-- Timeline Item 1 -->
              <div class="timeline-item" data-aos="fade-up" data-aos-delay="50">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>{{ $t('about.experience.item1.title') }}</h3>
                  <p class="timeline-date">{{ $t('about.experience.item1.date') }}</p>
                  <p>{{ $t('about.experience.item1.desc') }}</p>
                </div>
              </div>

              <!-- Timeline Item 2 -->
              <div class="timeline-item" data-aos="fade-up" data-aos-delay="100">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>{{ $t('about.experience.item2.title') }}</h3>
                  <p class="timeline-date">{{ $t('about.experience.item2.date') }}</p>
                  <p>{{ $t('about.experience.item2.desc') }}</p>
                </div>
              </div>

              <!-- Timeline Item 3 -->
              <div class="timeline-item" data-aos="fade-up" data-aos-delay="150">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>{{ $t('about.experience.item3.title') }}</h3>
                  <p class="timeline-date">{{ $t('about.experience.item3.date') }}</p>
                  <p>{{ $t('about.experience.item3.desc') }}</p>
                </div>
              </div>

              <!-- Timeline Item 4 -->
              <div class="timeline-item" data-aos="fade-up" data-aos-delay="200">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <h3>{{ $t('about.experience.item4.title') }}</h3>
                  <p class="timeline-date">{{ $t('about.experience.item4.date') }}</p>
                  <p>{{ $t('about.experience.item4.desc') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 5: COMPÉTENCES ===== -->
    <section class="skills-section py-120 bg-light" id="about-skills">
      <div class="container">
        <h2 class="section-title text-center mb-5" data-aos="fade-up">
          {{ $t('about.skills.title') }}
        </h2>

        <div class="row g-4">
          <!-- Skills Category 1: Frontend -->
          <div class="col-12 col-md-6">
            <div class="skill-category" data-aos="fade-up" data-aos-delay="50">
              <h3 class="skill-category-title">Frontend</h3>
              <div class="skill-tags">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">SCSS</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">Bootstrap</span>
                <span class="skill-tag">Responsive</span>
              </div>
            </div>
          </div>

          <!-- Skills Category 2: CMS & Backend -->
          <div class="col-12 col-md-6">
            <div class="skill-category" data-aos="fade-up" data-aos-delay="100">
              <h3 class="skill-category-title">CMS & Backend</h3>
              <div class="skill-tags">
                <span class="skill-tag">WordPress</span>
                <span class="skill-tag">PHP</span>
                <span class="skill-tag">Git</span>
                <span class="skill-tag">REST APIs</span>
                <span class="skill-tag">SEO</span>
              </div>
            </div>
          </div>

          <!-- Skills Category 3: Documentation -->
          <div class="col-12 col-md-6">
            <div class="skill-category" data-aos="fade-up" data-aos-delay="150">
              <h3 class="skill-category-title">Documentation</h3>
              <div class="skill-tags">
                <span class="skill-tag">Technical Writing</span>
                <span class="skill-tag">MDX / Markdown</span>
                <span class="skill-tag">API Docs</span>
                <span class="skill-tag">User Guides</span>
                <span class="skill-tag">Docs-as-Code</span>
              </div>
            </div>
          </div>

          <!-- Skills Category 4: Tools & Methodologies -->
          <div class="col-12 col-md-6">
            <div class="skill-category" data-aos="fade-up" data-aos-delay="200">
              <h3 class="skill-category-title">Outils & Méthodologies</h3>
              <div class="skill-tags">
                <span class="skill-tag">Figma</span>
                <span class="skill-tag">WCAG / A11y</span>
                <span class="skill-tag">Agile</span>
                <span class="skill-tag">Git Workflow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 6: CTA FORTE ===== -->
    <section class="cta-section py-120 bg-primary text-white" id="about-cta">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-lg-8 text-center">
            <h2 class="cta-title" data-aos="fade-up">
              {{ $t('about.cta.title') }}
            </h2>
            <p class="cta-subtitle" data-aos="fade-up" data-aos-delay="50">
              {{ $t('about.cta.subtitle') }}
            </p>

            <div class="cta-buttons d-flex flex-column flex-md-row gap-3 justify-content-center mt-5" data-aos="fade-up" data-aos-delay="100">
              <router-link to="/contact" class="btn btn-secondary btn-lg">
                <i class="bi bi-envelope-fill me-2"></i>
                {{ $t('about.cta.contactBtn') }}
              </router-link>
              
              <a href="mailto:contact@voscodes.fr" class="btn btn-outline-light btn-lg">
                <i class="bi bi-file-earmark-arrow-down me-2"></i>
                {{ $t('about.cta.quoteBtn') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 7: RÉSEAUX SOCIAUX ===== -->
    <section class="social-section py-80" id="about-social">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-6 text-center">
            <h3 class="mb-4" data-aos="fade-up">
              {{ $t('about.social.title') }}
            </h3>
            
            <div class="social-links d-flex justify-content-center gap-4" data-aos="fade-up" data-aos-delay="50">
              <a href="https://github.com/VictorDvs?tab=repositories" 
                 target="_blank" 
                 rel="noopener" 
                 class="social-link"
                 aria-label="GitHub">
                <i class="bi bi-github"></i>
              </a>

              <a href="https://www.linkedin.com/in/victor2vos/" 
                 target="_blank" 
                 rel="noopener" 
                 class="social-link"
                 aria-label="LinkedIn">
                <i class="bi bi-linkedin"></i>
              </a>

              <a href="mailto:contact@voscodes.fr" 
                 class="social-link"
                 aria-label="Email">
                <i class="bi bi-envelope"></i>
              </a>

              <a href="https://twitter.com/yourusername" 
                 target="_blank" 
                 rel="noopener" 
                 class="social-link"
                 aria-label="Twitter">
                <i class="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'AboutView',

  components: {
    HeaderComponent,
  },

  mounted() {
    // Initialiser AOS (Animate On Scroll) si tu l'utilises
    // AOS.init()
  },

  beforeUnmount() {
    // Cleanup si nécessaire
  },
}
</script>


<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_variables.scss";
@import "@/assets/styles/_about.scss"
</style>
