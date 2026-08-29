<template>
  <footer class="footer">
    <!-- Main Footer Content -->
    <div class="container-fluid footer-main">
      <div class="container">
        <div class="row g-4 py-5">
          
          <!-- Section 1: Brand / About -->
          <div class="col-12 col-md-6 col-lg-3">
            <div class="footer-section">
              <h3 class="footer-section-title">
                {{ $t('footer.brand.title') }}
              </h3>
              <p class="footer-section-desc">
                {{ $t('footer.brand.desc') }}
              </p>
              <div class="footer-logo">
                <strong>Victor De Vos</strong>
              </div>
            </div>
          </div>
 
          <!-- Section 2: Navigation -->
          <div class="col-12 col-md-6 col-lg-3">
            <div class="footer-section">
              <h3 class="footer-section-title">
                {{ $t('footer.navigation.title') }}
              </h3>
              <ul class="footer-links">
                <li>
                  <router-link to="/">
                    {{ $t('footer.navigation.home') }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/services">
                    {{ $t('footer.navigation.offer') }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/realisations">
                    {{ $t('footer.navigation.works') }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/about">
                    {{ $t('footer.navigation.about') }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/contact">
                    {{ $t('footer.navigation.contact') }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
 
          <!-- Section 3: Resources -->
          <div class="col-12 col-md-6 col-lg-3">
            <div class="footer-section">
              <h3 class="footer-section-title">
                {{ $t('footer.resources.title') }}
              </h3>
              <ul class="footer-links">
                <li>
                  <a href="mailto:contact@voscodes.fr">
                    {{ $t('footer.resources.contact') }}
                  </a>
                </li>
                <li>
                  <router-link to="/contact">
                    {{ $t('footer.resources.quote') }}
                  </router-link>
                </li>
                <li>
                  <a href="#" aria-label="Blog">
                    {{ $t('footer.resources.blog') }}
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Guides">
                    {{ $t('footer.resources.guides') }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
 
          <!-- Section 4: Connect / Social -->
          <div class="col-12 col-md-6 col-lg-3">
            <div class="footer-section">
              <h3 class="footer-section-title">
                {{ $t('footer.connect.title') }}
              </h3>
              <p class="footer-section-desc">
                {{ $t('footer.connect.desc') }}
              </p>
              <div class="footer-social-links">
                <a href="https://github.com/VictorDvs?tab=repositories"
                   target="_blank"
                   rel="noopener"
                   aria-label="GitHub"
                   class="footer-social-link">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/victor2vos/"
                   target="_blank"
                   rel="noopener"
                   aria-label="LinkedIn"
                   class="footer-social-link">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="mailto:victordevos.pro@gmail.com"
                   aria-label="Email"
                   class="footer-social-link">
                  <i class="bi bi-envelope"></i>
                </a>
                <a href="https://twitter.com/yourusername"
                   target="_blank"
                   rel="noopener"
                   aria-label="Twitter"
                   class="footer-social-link">
                  <i class="bi bi-twitter"></i>
                </a>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </div>
 
    <!-- Footer Divider -->
    <div class="footer-divider"></div>
 
    <!-- Footer Bottom / Legal -->
    <div class="container-fluid footer-bottom">
      <div class="container">
        <div class="row align-items-center justify-content-between py-4 flex-column flex-md-row">
          
          <!-- Copyright -->
          <div class="col-12 col-md-auto text-center text-md-start mb-3 mb-md-0">
            <p class="footer-copyright">
              &copy; {{ currentYear }} 
              <strong>Victor De Vos</strong> — 
              {{ $t('footer.bottom.copyright') }}
            </p>
          </div>
 
          <!-- Legal Links -->
          <div class="col-12 col-md-auto">
            <ul class="footer-legal-links">
              <li>
                <a href="#">
                  {{ $t('footer.bottom.privacy') }}
                </a>
              </li>
              <li>
                <a href="#">
                  {{ $t('footer.bottom.terms') }}
                </a>
              </li>
              <li>
                <a href="#">
                  {{ $t('footer.bottom.mentions') }}
                </a>
              </li>
              <li>
                <a href="#">
                  {{ $t('footer.bottom.cookies') }}
                </a>
              </li>
            </ul>
          </div>
 
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
 
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
 
  mounted() {
    // Footer initialization if needed
  },
 
  beforeUnmount() {
    // Cleanup if needed
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_footer.scss";
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_variables.scss";
</style>