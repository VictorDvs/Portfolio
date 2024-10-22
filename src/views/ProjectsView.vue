<template>
    <div>
        <HeaderComponent/>
    </div>
    <div id="projets" class="container-fluid projets section">
    <h2>Projets Développeurs Web</h2>
    <p>Quelques jeux développés en HTML, CSS et JavaScript</p>
    
    <div class="row row-equal">
      <!-- Utilisation de v-for pour générer chaque projet dynamiquement -->
      <div 
        v-for="(project, index) in projects" 
        :key="index" 
        class="col-12 col-lg-3 mb-6 d-flex justify-content-center card-margin"
      >
        <div class="card">
          <a :href="project.link" target="_blank">
            <img :src="project.image" class="card-img-top" :alt="project.title" />
          </a>
          <div class="card-body">
            <a :href="project.link" target="_blank">
              <h5 class="card-title">{{ project.title }}</h5>
            </a>
            <p class="card-text text-end">Vers le code source</p>
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
      projects: [
        {
          title: 'Quizz Culture Générale',
          image: 'Projets/projets-quizz.png',
          link: 'projets/Quizz/index.html',
        },
        {
          title: 'Shifumi',
          image: 'Projets/projets-shifumi.png',
          link: 'projets/Shifumi/index.html',
        },
        {
          title: 'Morpion',
          image: 'Projets/projets-morpion.png',
          link: 'projets/Morpion/index.html',
        },
        {
          title: "Calcul de l'IMC",
          image: 'Projets/projets-imc.png',
          link: 'projets/IMC/index.html',
        },
        {
          title: "API's ChartJS TypedJS CoinBase",
          image: 'Projets/projets-chartJS.png',
          link: 'projets/ChartJS/index.html',
        },
        {
          title: 'API OpenWeatherMap',
          image: 'Projets/projets-meteo.png',
          link: 'projets/Meteo/index.html',
        }
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
.row-equal{
    display: flex;
    justify-content: space-around;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // height: 150px;
    border-radius: 10px;
    border: none;
    transition: transform 0.3s ease;
    width: 200px;
    background-position: center;
}

.card:hover {
    transform: scale(1.07);
  }

.card-img-top{
cursor: pointer;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
object-fit: cover;
height: 200px;
}
</style>