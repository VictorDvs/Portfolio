<template>
    <div>
        <HeaderComponent/>
    </div>
    <div id="projets" class="container-fluid projets section">
    
      <div class="row row-equal scroll-offset" id="symfony">
      <h3>{{ $t('projects.symfony_title') }}</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in symfony" 
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
            <p class="card-text cli" v-html="project.desc"></p>
          </div>
        </div>
      </div>
    </div>
      <div class="row row-equal scroll-offset" id="vue-cli">
      <h3>{{ $t('projects.vueCLI_title') }}</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in projectsVueCLI" 
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
            <p class="card-text" v-html="project.desc"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-equal scroll-offset" id="vue-cdn">
      <h3>Projets Vue CDN</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in projectsVueCDN" 
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
            <p class="card-text">{{ project.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row row-equal scroll-offset" id="vanilla-js">
      <h3>Projets JavaScript</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in projectsVanilla" 
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
            <p class="card-text text-center">{{ project.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-equal scroll-offset" id="css-pur">
      <h3>Projet CSS</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in projectsCSS" 
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
            <p class="card-text text-center">{{ project.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  data() {
    return {
      symfony: [],
      projectsVueCLI: [],
      projectsVueCDN: [
        {
          title: 'Menu Fast-food',
          desc: 'Une grande frite pour moi',
          image: 'Projets/projets-menu-vuecdn.png',
          link: 'https://vuecdn-menu-afpa-project.netlify.app/',
        },
        {
          title: 'Gestion d\'une liste de produits',
          desc: 'Un CRUD de liste de produits',
          image: 'Projets/projets-liste-produits-vuecdn.png',
          link: 'https://vuecdn-products-list-afpa-project.netlify.app/',
        },
        {
          title: 'To-do list',
          desc: 'La one and only!',
          image: 'Projets/projets-todo-vuecdn.png',
          link: 'https://vuecdn-to-do-list-afpa-project.netlify.app/',
        },
      ],
      projectsVanilla: [
        {
          title: 'Quizz WWW',
          desc: '5 questions sur le web, c\'est à vous de jouer.',
          image: 'Projets/projets-quizz.png',
          link: 'https://quizz-afpa-project.netlify.app/',
        },
        {
          title: 'Shifumi',
          desc: 'Le premier à 5 l\'emporte.',
          image: 'Projets/projets-shifumi.png',
          link: 'https://shifumi-afpa-project.netlify.app/',
        },
        {
          title: 'Morpion',
          desc: 'Un must.',
          image: 'Projets/projets-morpion.png',
          link: 'https://morpion-afpa-project.netlify.app/',
        },
      ],
      projectsCSS: [
        {
          title: 'Visitez Kyoto',
          desc: 'Un beau voyage au Japon !',
          image: 'Projets/projets-kyoto-css.png',
          link: 'https://kyoto-css-afpa-project.netlify.app/',
        },
      ],
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
      this.symfony = [
        {
          title: this.$t('projects.symfony_title'),
          desc: this.$t('projects.biblion_desc'),
          image: 'Projets/projets-symfony-ecf-cover.png',
          link: 'https://github.com/VictorDvs/symfony-ecf-project',
        },
      ];
      this.projectsVueCLI = [
      {
        title: this.$t('projects.vueCLI.0.title'),
        desc: this.$t('projects.vueCLI.0.desc'),
        image: 'Projets/projets-webwares-vuecli.png',
        link: 'https://vuecli-ecfproject-afpa-project.netlify.app/#/',
      },
      {
        title: this.$t('projects.vueCLI.1.title'),
        desc: this.$t('projects.vueCLI.1.desc'),
        image: 'Projets/projets-random-questions-vuecli.png',
        link: 'https://vuecli-quizz-afpa-project.netlify.app/',
      },
      {
        title: this.$t('projects.vueCLI.2.title'),
        desc: this.$t('projects.vueCLI.2.desc'),
        image: 'Projets/projets-fakeshop-vuecli.png',
        link: 'https://vuecli-shop-afpa-project.netlify.app/',
      },
    ];
    },
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

.projets{
  text-align: center;
  background-color: #121212ee;
  color: #f5f5f5;
    height: 100%;
}

.projets h3 {
  font-family: "Kalam", cursive;
    font-weight: 500;
    font-style: normal;
    font-size: 2em;
}

.projets a {
  text-decoration: none;
  color: black;
}

.row-equal{
    display: flex;
    max-width: 80%;
    margin: 0 auto;
}

.scroll-offset {
   position: relative;
   padding-top: 120px; /* Ajuste en fonction de la hauteur de ton header */
   margin-top: -70px;
}

.row-equal h3 {
  margin-bottom: 30px;
  text-align: start;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // height: 150px;
    border-radius: 10px;
    border: none;
    transition: transform 0.3s ease;
    margin-bottom: 50px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.281);
    // width: 100px;
}

.card:hover {
    transform: scale(1.07);
  }

.card-img-top{
cursor: pointer;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
background-position: center;
border-bottom: 1px solid #8e8e8e7d;
// height: 100px;
// width: auto;
}

.card-body {
  text-align: center;
}

.cli{
  font-size: 1.3em;
  text-align: center;
}

#symfony{
  padding-top: 250px;
}

</style>