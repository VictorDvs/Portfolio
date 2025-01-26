<template>
    <div>
        <HeaderComponent/>
    </div>
    <div id="projets" class="container-fluid projets section">
    
      <div class="row row-equal scroll-offset" id="symfony">
      <h3>{{ $t('symfony_title') }}</h3>
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
      <div class="row row-equal scroll-offset" id="vueCLI">
      <h3>{{ $t('vueCLI_title') }}</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in VueCLI" 
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
    <div class="row row-equal scroll-offset" id="vueCDN">
      <h3>{{ $t('vueCDN_title') }}</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in VueCDN" 
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
    
    <div class="row row-equal scroll-offset" id="vanillaJS">
      <h3>{{ $t('vanillaJS_title') }}</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in vanillaJS" 
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
    <div class="row row-equal scroll-offset" id="css">
      <h3>{{ $t('css_title') }}</h3>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in css" 
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
      VueCLI: [],
      VueCDN: [],
      vanillaJS: [],
      css: [],
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
          title: this.$t('biblion_title'),
          desc: this.$t('biblion_desc'),
          image: 'Projets/projets-symfony-ecf-cover.png',
          link: 'https://github.com/VictorDvs/symfony-ecf-project',
        },
      ],
      this.VueCLI = [
      {
        title: this.$t('webwares_title'),
        desc: this.$t('webwares_desc'),
        image: 'Projets/projets-webwares-vuecli.png',
        link: 'https://vuecli-ecfproject-afpa-project.netlify.app/#/',
      },
      {
        title: this.$t('pablocires_title'),
        desc: this.$t('pablocires_desc'),
        image: 'Projets/projets-pablo-cires.png',
        link: 'https://www.pablocires.me/',
      },
      {
        title: this.$t('randomAPI_title'),
        desc: this.$t('randomAPI_desc'),
        image: 'Projets/projets-random-questions-vuecli.png',
        link: 'https://vuecli-quizz-afpa-project.netlify.app/',
      },
      {
        title: this.$t('shop_title'),
        desc: this.$t('shop_desc'),
        image: 'Projets/projets-fakeshop-vuecli.png',
        link: 'https://vuecli-shop-afpa-project.netlify.app/',
      },
    ],
    this.VueCDN = [
      {
        title: this.$t('menu_title'),
        desc: this.$t('menu_desc'),
        image: 'Projets/projets-menu-vuecdn.png',
        link: 'https://vuejs-cdn-project-afpa-project.netlify.app/',
      },
      {
        title: this.$t('produits_title'),
        desc: this.$t('produits_desc'),
        image: 'Projets/projets-liste-produits-vuecdn.png',
        link: 'https://vue-chess-cdn-project-afpa-project.netlify.app/',
      },
      {
        title: this.$t('todo_title'),
        desc: this.$t('todo_desc'),
        image: 'Projets/projets-todo-vuecdn.png',
        link: 'https://vuecdn-to-do-list-afpa-project.netlify.app/',
      },
    ],
    this.vanillaJS = [
      {
        title: this.$t('quizz_title'),
        desc: this.$t('quizz_desc'),
        image: 'Projets/projets-quizz.png',
        link: 'https://quizz-afpa-project.netlify.app/',
      },
      {
        title: this.$t('shifumi_title'),
        desc: this.$t('shifumi_desc'),
        image: 'Projets/projets-shifumi.png',
        link: 'https://shifumi-afpa-project.netlify.app/',
      },
      {
        title: this.$t('ticTacToe_title'),
        desc: this.$t('ticTacToe_desc'),
        image: 'Projets/projets-morpion.png',
        link: 'https://morpion-afpa-project.netlify.app/',
      },
    ],
      this.css = [
        {
        title: this.$t('kyoto_title'),
        desc: this.$t('kyoto_desc'),
        image: 'Projets/projets-kyoto-css.png',
        link: 'https://kyoto-css-afpa-project.netlify.app/',
        }
      ]
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

@import "@/assets/styles/_projects.scss";

</style>