<template>
  <HeaderComponent />

  <main class="container-fluid realisations-page section-spacing">
    <!-- Titre -->
    <!-- <section class="row justify-content-center">
      <div class="col-12 col-lg-8 text-center">
        <h1>{{ $t('realisationsPage.title') }}</h1>
      </div>
    </section> -->

<!-- Filtres -->
<section class="row justify-content-center mt-5 mb-5">
  <div class="col-12 d-flex justify-content-center gap-2 filter-buttons">
    <button
      v-for="filter in filters"
      :key="filter.value"
      class="btn-filter"
      :class="{ active: activeFilter === filter.value }"
      @click="activeFilter = filter.value"
    >
      {{ $t(filter.labelKey) }}
    </button>
  </div>
</section>

    <!-- Grille de projets -->
    <section class="row justify-content-center g-4">
      <div class="col-12 col-sm-6 col-lg-6" v-for="item in filteredItems" :key="item.id">
        <div class="project-card h-100">
                <a v-if="item.image" :href="item.link" target="_blank" rel="noopener">
        <img :src="item.image" :alt="item.title" class="img-fluid" />
      </a>
      <div class="project-content">
          <span class="project-badge">{{ item.group }}</span>
          <h3>{{ item.title }}</h3>
          <button class="btn-offer btn-offer-secondary mt-2" @click="openDialog(item)">
            {{ $t('techWritingProjects.learn_more') }}
          </button>
      </div>
        </div>
      </div>
    </section>

    <!-- Dialog détail projet (Vuetify, réutilisé partout) -->
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">
          {{ selectedItem?.title }}
        </v-card-title>
        <v-card-text v-html="selectedItem?.description" />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :href="selectedItem?.link" target="_blank" rel="noopener">
            {{ $t('techWritingProjects.visit_project') }}
          </v-btn>
          <v-btn text @click="dialog = false">
            {{ $t('techWritingProjects.close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </main>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
  name: 'RealisationsView',

  components: {
    HeaderComponent,
  },

  data() {
    return {
      activeFilter: 'all',
      dialog: false,
      selectedItem: null,
filters: [
  { value: 'all', labelKey: 'realisationsPage.filters.all' },
  { value: 'dev', labelKey: 'realisationsPage.filters.dev' },
  { value: 'redaction', labelKey: 'realisationsPage.filters.redaction' },
],
      items: [
        // --- Développement web : Symfony ---
        {
          id: 'alkantara',
          category: 'dev',
          group: 'WordPress',
          featured: true,
          titleKey: 'devWebProjects.alkantara_title',
          descKey: 'devWebProjects.alkantara_desc',
          image: 'Projets/cover-alkantara.png',
          link: 'https://alkantara.fr/',
        },
        {
          id: 'pablocires',
          category: 'dev',
          group: 'Vue.js',
          featured: true,
          titleKey: 'devWebProjects.pablocires_title',
          descKey: 'devWebProjects.pablocires_desc',
          image: 'Projets/projets-pablo-cires.png',
          link: 'https://www.pablocires.me/',
        },
        // --- Rédaction technique ---
        {
          id: 'fastpack',
          category: 'redaction',
          group: 'Docusaurus',
          featured: true,
          titleKey: 'techWritingProjects.fastpack_title',
          descKey: 'techWritingProjects.fastpack_description',
          image: 'Projets/projets-fastpack.png',
          link: 'https://fastpack-documentation.netlify.app/',
        },
        {
          id: 'restokit',
          category: 'redaction',
          group: 'MkDocs',
          featured: true,
          titleKey: 'techWritingProjects.restokit_title',
          descKey: 'techWritingProjects.restokit_description',
          image: 'Projets/projets-restokit.png',
          link: 'https://restokit-sdk-documentation.netlify.app/',
        },
      ],
    }
  },

  computed: {
    resolvedItems() {
      return this.items.map((item) => ({
        ...item,
        title: this.$t(item.titleKey),
        description: this.$t(item.descKey),
      }))
    },
    filteredItems() {
      const items =
        this.activeFilter === 'all'
          ? this.resolvedItems
          : this.resolvedItems.filter((item) => item.category === this.activeFilter)

      // Les projets "featured" remontent en premier
      return [...items].sort((a, b) => Number(b.featured) - Number(a.featured))
    },
  },

  methods: {
    openDialog(item) {
      this.selectedItem = item
      this.dialog = true
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";
@import "@/assets/styles/_realisations.scss";
</style>