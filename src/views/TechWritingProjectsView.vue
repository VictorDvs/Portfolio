<template>
        <HeaderComponent/>
    <div id="projets" class="container-fluid projets section">
    
      <div class="row row-equal scroll-offset" id="docusaurus">
      <h3>{{ $t('techWritingProjects.docusaurus_title') }}</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in docusaurus" 
        :key="index" 
        class="col-12 col-sm-6 col-lg-3 d-flex justify-content-center card-margin"
      >
        <div class="card">
          <a :href="project.link" target="_blank" rel="noopener">
            <img :src="project.image" class="card-img-top" :alt="project.title" />
          </a>
          <div class="card-body">
            <a :href="project.link" target="_blank">
              <h5 class="card-title">{{ project.title }}</h5>
            </a>
                        <!-- Bouton qui déclenche le dialog -->
           <v-btn color="primary" @click="openDialog('docusaurus', index)" class="mt-2">
            {{ $t('learn_more') }}
          </v-btn>
          </div>
        </div>
      </div>
             <!-- Dialog Vuetify -->
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">
          {{ selectedProject?.title }}
        </v-card-title>
        <v-card-text v-html="selectedProject?.desc" />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :href="selectedProject?.link" target="_blank">
            {{ $t('visit_project') }}
          </v-btn>
          <v-btn text @click="dialog = false">{{ $t('close') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>

    <div class="row row-equal scroll-offset" id="mkdocs">
      <h3>{{ $t('techWritingProjects.mkdocs_title') }}</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in mkdocs" 
        :key="index" 
        class="col-12 col-sm-6 col-lg-3 d-flex justify-content-center card-margin"
      >
        <div class="card">
          <a :href="project.link" target="_blank" rel="noopener">
            <img :src="project.image" class="card-img-top" :alt="project.title" />
          </a>
          <div class="card-body">
            <a :href="project.link" target="_blank">
              <h5 class="card-title">{{ project.title }}</h5>
            </a>
                        <!-- Bouton qui déclenche le dialog -->
           <v-btn color="primary" @click="openDialog('mkdocs', index)" class="mt-2">
            {{ $t('learn_more') }}
          </v-btn>
          </div>
        </div>
      </div>
             <!-- Dialog Vuetify -->
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="headline">
          {{ selectedProject?.title }}
        </v-card-title>
        <v-card-text v-html="selectedProject?.desc" />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :href="selectedProject?.link" target="_blank">
            {{ $t('visit_project') }}
          </v-btn>
          <v-btn text @click="dialog = false">{{ $t('close') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  data() {
    return {
      docusaurus: [],
      mkdocs: [],
      dialog: false,
      selectedProject: null,
    };
  },
  components: {
    HeaderComponent,
  },
  mounted() {
    this.updateProjects();
  },
  methods: {
    updateProjects() {
      this.docusaurus = [
        {
          title: this.$t('techWritingProjects.fastpack_title'),
          desc: this.$t('techWritingProjects.fastpack_description'),
          image: 'Projets/projets-fastpack.png',
          link: 'https://fastpack-documentation.netlify.app/',
        },
      ]
      this.mkdocs = [
        {
          title: this.$t('techWritingProjects.restokit_title'),
          desc: this.$t('techWritingProjects.restokit_description'),
          image: 'Projets/projets-restokit.png',
          link: 'https://restokit-sdk-documentation.netlify.app/',
        },
      ]
    },
    openDialog(category, index) {
  this.selectedProject = this[category][index];
  this.dialog = true;
}
  },
  watch: {
  // Surveille les changements de langue pour recharger les traductions
  '$i18n.locale': function () {
    this.updateProjects();
  },
},
};
</script>

<style lang="scss" scoped>

@import "@/assets/styles/_techWritingProjects.scss";

</style>