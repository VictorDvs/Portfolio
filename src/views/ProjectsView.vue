<template>
    <div>
        <HeaderComponent/>
    </div>
    <div id="projets" class="container-fluid projets section">
    
    
    <div class="row row-equal">
      <h4>Exercices réalisés avec Vue CDN</h4>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in projects" 
        :key="index" 
        class="col-12 col-sm-6 col-lg-3 d-flex justify-content-center card-margin"
      >
        <div class="card">
          <a :href="project.link" target="_blank">
            <img :src="project.image" class="card-img-top" :alt="project.title" />
          </a>
          <div class="card-body">
            <a :href="project.link" target="_blank">
              <h5 class="card-title">{{ project.title }}</h5>
            </a>
            <p class="card-text">Vers le code source</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-equal">
      <h4>Exercices et projet de groupe réalisés avec Vue CLI</h4>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in projects" 
        :key="index" 
        class="col-12 col-sm-6 col-lg-3 d-flex justify-content-center card-margin"
      >
        <div class="card">
          <a :href="project.link" target="_blank">
            <img :src="project.image" class="card-img-top" :alt="project.title" />
          </a>
          <div class="card-body">
            <a :href="project.link" target="_blank">
              <h5 class="card-title">{{ project.title }}</h5>
            </a>
            <p class="card-text">{{ projet.desc }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-equal">
      <h4>Exercices réalisés en JavaScript <em>vanilla</em></h4>
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in projectsVanilla" 
        :key="index" 
        class="col-12 col-sm-6 col-lg-3 d-flex justify-content-center card-margin"
      >
        <div class="card">
          <a :href="project.link" target="_blank">
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
    <FooterComponent/>
</template>

<script>
   import HeaderComponent from '@/components/HeaderComponent.vue'
   import FooterComponent from '@/components/FooterComponent.vue'
    export default {

        data() {
    return {
      projectsVanilla: [
        {
          title: 'Quizz WWW',
          desc: '5 questions sur le web, à vous de jouer.',
          image: 'Projets/projets-quizz.png',
          link: 'https://quizz-afpa-project.netlify.app/',
        },
        {
          title: 'Shifumi',
          desc: 'Le premier à 5 l\'emporte !',
          image: 'Projets/projets-shifumi.png',
          link: 'https://shifumi-afpa-project.netlify.app/',
        },
        {
          title: 'Morpion',
          image: 'Projets/projets-morpion.png',
          link: 'https://morpion-afpa-project.netlify.app/',
        },
        {
          title: "Calcul de l'IMC",
          image: 'Projets/projets-imc.png',
          link: 'https://imc-afpa-project.netlify.app/',
        },
        {
          title: "API's ChartJS TypedJS CoinBase",
          image: 'Projets/projets-chartJS.png',
          link: 'https://chartjs-bitcoin-afpa-project.netlify.app/',
        },
        {
          title: 'API OpenWeatherMap',
          image: 'Projets/projets-meteo.png',
          link: 'https://api-meteo-afpa-project.netlify.app/',
        },
        {
          title: "Rollin' Dice",
          image: 'Projets/projets-rolling-dice.png',
          link: 'https://rolling-dice-afpa-project.netlify.app/',
        },
        {
          title: 'Simple Canvas',
          image: 'Projets/projets-canvas.png',
          link: 'https://canvas-afpa-project.netlify.app/',
        },
        {
          title: 'Local Storage',
          image: 'Projets/projets-local-storage.png',
          link: 'https://local-storage-afpa-project.netlify.app/',
        },
        {
          title: 'Snake Dragon Ball',
          image: 'Projets/projets-snake.png',
          link: 'https://snake-afpa-project.netlify.app/',
        },
      ]
    }
  },
        components: {
            HeaderComponent,
            FooterComponent
        }
    }
</script>

<style lang="scss" scoped>

.projets{
  text-align: center;
}

.row-equal{
    display: flex;
    max-width: 80%;
    justify-content: center;
    margin: 0 auto;
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
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.13);
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
// height: 100px;
// width: auto;
}

.card-body {
  text-align: center;
}

</style>