<template>
  <HeaderComponent />
 
  <main class="realisations-page">
    <!-- ===== SECTION HERO ===== -->
<section class="hero-section" id="hero">
  <!-- Slides de couvertures -->
<div class="hero-slides" aria-hidden="true">
  <div
    v-for="(project, index) in heroProjects"
    :key="project.id"
    class="hero-slide"
    :class="slideClass(index)"
  >
    <div
      class="hero-slide__image"
      :style="{ backgroundImage: `url(${heroImageUrl(project)})` }"
    ></div>
  </div>
</div>
  <div class="hero-overlay"></div>


    <div class="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div class="col-12 col-lg-8">
        <div class="hero-content text-center">
          <h1 class="hero-title" data-aos="fade-up" data-aos-delay="100">
            {{ $t('works.hero.title') }}
          </h1>
          <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">
            {{ $t('works.hero.subtitle') }}
          </p>
        </div>
      </div>
    </div>

</section>
 
    <!-- ===== SECTION FILTERS ===== -->
    <section class="filters-section" id="filters" data-aos="fade-up">
      <div class="container py-80">
        <div class="row justify-content-center mb-5">
          <div class="col-12 text-center">
            <p class="filter-label">{{ $t('works.filters.label') }}</p>
          </div>
        </div>
 
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="filters-container">
              <button
                v-for="filter in filters"
                :key="filter.value"
                class="filter-btn"
                :class="{ 'filter-btn--active': activeFilter === filter.value }"
                @click="activeFilter = filter.value"
                :aria-pressed="activeFilter === filter.value">
                {{ $t(filter.labelKey) }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
 
    <!-- ===== SECTION PROJECTS GRID ===== -->
    <section class="projects-section" id="projects" data-aos="fade-up">
      <div class="container py-120">
        <div class="row g-4 justify-content-center">
          <div 
            class="col-12 col-md-6 col-lg-5"
            v-for="(project, i) in filteredProjects" 
            :key="project.id"
            :data-aos="`fade-up`"
            :data-aos-delay="`${(i + 1) * 100}`">
            
            <div class="project-card">
              <!-- Image -->
              <div class="project-image">
                <img 
                  :src="project.image" 
                  :alt="project.title" 
                  class="img-fluid" />
                <div class="project-overlay">
                  <button 
                    class="btn btn-white"
                    @click="openModal(project)"
                    :aria-label="`Voir les détails de ${project.title}`">
                    {{ $t('works.projects.learn_more') }}
                  </button>
                </div>
              </div>
 
              <!-- Content -->
              <div class="project-content">
                <div class="project-meta">
                  <span class="project-badge">{{ project.group }}</span>
                  <span class="project-year" v-if="project.year">{{ project.year }}</span>
                </div>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                
                <div class="project-footer">
                  <a 
                    :href="project.link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn btn-primary btn-sm">
                    <i class="bi bi-box-arrow-up-right me-2"></i>
                    {{ $t('works.projects.visit') }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="empty-state">
          <p>{{ $t('works.projects.no_results') }}</p>
        </div>
      </div>
    </section>
 
    <!-- ===== PROJECT MODAL ===== -->
    <transition name="modal" v-if="selectedProject">
      <div class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button 
            class="modal-close" 
            @click="closeModal"
            aria-label="Fermer la modal">
            <i class="bi bi-x-lg"></i>
          </button>
 
          <div class="modal-body">
            <!-- Project Image -->
            <div class="modal-image">
              <img 
                :src="selectedProject.image" 
                :alt="selectedProject.title" />
            </div>
 
            <!-- Project Info -->
            <div class="modal-info">
              <div class="modal-meta">
                <span class="modal-badge">{{ selectedProject.group }}</span>
                <span class="modal-year" v-if="selectedProject.year">{{ selectedProject.year }}</span>
              </div>
 
              <h2 class="modal-title">{{ selectedProject.title }}</h2>
              
              <p class="modal-description">{{ selectedProject.description }}</p>
 
              <!-- Details -->
              <div v-if="selectedProject.details" class="modal-details">
                <h3>{{ $t('works.projects.details') }}</h3>
                <p>{{ selectedProject.details }}</p>
              </div>
 
              <!-- Technologies -->
              <div v-if="selectedProject.technologies" class="modal-technologies">
                <h3>{{ $t('works.projects.technologies') }}</h3>
                <div class="tech-list">
                  <span 
                    v-for="tech in selectedProject.technologies" 
                    :key="tech"
                    class="tech-badge">
                    {{ tech }}
                  </span>
                </div>
              </div>
 
              <!-- CTA -->
              <div class="modal-cta">
                <a 
                  :href="selectedProject.link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-primary btn-lg">
                  <i class="bi bi-box-arrow-up-right me-2"></i>
                  {{ $t('works.projects.visit') }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </main>
 
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

const HERO_INTERVAL = 3000
 
export default {
  name: 'RealisationsView',
 
  components: {
    HeaderComponent,
    FooterComponent,
  },
 
  data() {
    return {
      activeFilter: 'all',
      selectedProject: null,
      projectCount: 4,
      clientCount: 5,
      yearCount: 2,

      // Hero slideshow
      currentSlide: 0,
      previousSlide: null,
      heroTimer: null,
 
      filters: [
        { value: 'all', labelKey: 'works.filters.all' },
        { value: 'dev', labelKey: 'works.filters.dev' },
        { value: 'writing', labelKey: 'works.filters.writing' },
      ],
 
      projects: [
        // --- Web Development ---
        {
          id: 'alkantara',
          category: 'dev',
          group: 'WordPress',
          featured: true,
          year: 2024,
          titleKey: 'works.projects.alkantara.title',
          descKey: 'works.projects.alkantara.desc',
          detailsKey: 'works.projects.alkantara.details',
          image: 'Projets/cover-alkantara.png',
          link: 'https://alkantara.fr/',
          technologies: ['WordPress', 'PHP', 'Bootstrap', 'SEO'],
        },
        {
          id: 'pablocires',
          category: 'dev',
          group: 'Vue.js',
          featured: true,
          year: 2023,
          titleKey: 'works.projects.pablocires.title',
          descKey: 'works.projects.pablocires.desc',
          detailsKey: 'works.projects.pablocires.details',
          image: 'Projets/cover-pablocires.png',
          link: 'https://www.pablocires.me/',
          technologies: ['Vue.js', 'Nuxt', 'Tailwind CSS', 'Vimeo API'],
        },
 
        // --- Technical Writing ---
        {
          id: 'fastpack',
          category: 'writing',
          group: 'Docusaurus',
          featured: true,
          year: 2024,
          titleKey: 'works.projects.fastpack.title',
          descKey: 'works.projects.fastpack.desc',
          detailsKey: 'works.projects.fastpack.details',
          image: 'Projets/cover-fastpack.png',
          link: 'https://fastpack-documentation.netlify.app/',
          technologies: ['Docusaurus', 'React', 'MDX', 'TypeScript'],
        },
        {
          id: 'restokit',
          category: 'writing',
          group: 'MkDocs',
          featured: true,
          year: 2023,
          titleKey: 'works.projects.restokit.title',
          descKey: 'works.projects.restokit.desc',
          detailsKey: 'works.projects.restokit.details',
          image: 'Projets/projets-restokit.png',
          link: 'https://restokit-sdk-documentation.netlify.app/',
          technologies: ['MkDocs', 'Python', 'Markdown', 'REST API'],
        },
      ],
    }
  },
 
  computed: {
    resolvedProjects() {
      return this.projects.map((project) => ({
        ...project,
        title: this.$t(project.titleKey),
        description: this.$t(project.descKey),
        details: this.$t(project.detailsKey),
      }))
    },
 
    filteredProjects() {
      const projects =
        this.activeFilter === 'all'
          ? this.resolvedProjects
          : this.resolvedProjects.filter((p) => p.category === this.activeFilter)
 
      // Featured projects first
      return [...projects].sort((a, b) => Number(b.featured) - Number(a.featured))
    },

        // Couvertures affichées dans le hero (toujours tous les projets,
    // indépendamment du filtre actif)
    heroProjects() {
      return this.projects.filter((p) => p.image)
    },
  },

    mounted() {
    this.startHeroSlideshow()
    document.addEventListener('visibilitychange', this.onVisibilityChange)
  },
 
  methods: {
    openModal(project) {
      this.selectedProject = project
      document.body.style.overflow = 'hidden'
    },
 
    closeModal() {
      this.selectedProject = null
      document.body.style.overflow = ''
    },

    nextSlide() {
      this.previousSlide = this.currentSlide
      this.currentSlide = (this.currentSlide + 1) % this.heroProjects.length
    },

    slideClass(index) {
      return {
        'is-active': index === this.currentSlide,
        'is-leaving': index === this.previousSlide && index !== this.currentSlide,
      }
    },

    startHeroSlideshow() {
      // Respect de prefers-reduced-motion et inutile avec une seule image
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduceMotion || this.heroProjects.length < 2) return

      // Préchargement pour éviter les flashs au premier passage
      this.heroProjects.forEach((p) => {
        new Image().src = this.heroImageUrl(p)
      })

      this.stopHeroSlideshow()
      this.heroTimer = setInterval(this.nextSlide, HERO_INTERVAL)
    },

    stopHeroSlideshow() {
      clearInterval(this.heroTimer)
      this.heroTimer = null
    },

    // Met le diaporama en pause quand l'onglet n'est pas visible
    onVisibilityChange() {
      if (document.hidden) {
        this.stopHeroSlideshow()
      } else {
        this.startHeroSlideshow()
      }
    },

    // À adapter à la façon dont tu résous déjà tes images ailleurs
    // dans le template (ex. new URL(...), require(...), préfixe public...)
    heroImageUrl(project) {
      return `/${project.image}`
    },
  },
 
  beforeUnmount() {
    this.stopHeroSlideshow()
    document.removeEventListener('visibilitychange', this.onVisibilityChange)
    document.body.style.overflow = ''
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_realisations.scss";
</style>