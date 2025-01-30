<template>
  <div :id="id" class="carousel slide carousel-fade">
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
        <div class="image-container">
          <img :src="slide.src" class="d-block w-100" alt="..." @click="showImageModal(slide.src)" />
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="`#${id}`" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="`#${id}`" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <div class="carousel-caption-below">
      <p>{{ currentSlideText  }}</p>
    </div>
    <div class="modal fade" :id="`${id}-modal`" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-body">
            <img id="modalImage" :src="selectedImage" class="img-fluid" alt="Image en grand" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  props: {
    slides: Array,
    id: String,
  },
  data() {
    return {
      selectedImage: "",
      activeIndex: 0,
    };
  },
  methods: {
    showImageModal(imgSrc) {
      this.selectedImage = imgSrc;
      new Modal(document.getElementById(`${this.id}-modal`)).show();
    },
  },
  mounted() {
    const carouselElement = document.getElementById(this.id);
    if (carouselElement) {
      carouselElement.addEventListener("slide.bs.carousel", (event) => {
        this.activeIndex = event.to;
      });
    }
  },
  computed: {
    currentSlideText() {
      return this.$t(this.slides[this.activeIndex]?.text);
    }
  },
};
</script>

<style scoped>
.carousel {
  width: 100%;
  min-height: 45vh; /* Garantir que le carousel occupe toute la hauteur de la fenêtre */
}

.carousel-inner {
  max-height: 400px; /* Assurez-vous que le contenu respecte la hauteur maximale */
}

.image-container {
  width: 100%;
  height: 400px; /* Fixez la hauteur des images */
  overflow: hidden; /* Cachez le dépassement éventuel */
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajustez l'image pour qu'elle remplisse l'espace sans distorsion */
  transition: transform 0.3s ease; /* Ajoutez une animation de zoom */
}

.image-container img:hover {
  cursor: zoom-in;
  transform: scale(1.1); /* Ajoutez un léger zoom au survol */
}

.carousel-caption-below {
  text-align: center;
  margin-top: 10px; /* Réduisez l'espacement en dessous */
  font-size: 1em; /* Ajustez la taille du texte */
  color: #f5f5f5;
  font-family: "Signika", sans-serif;
  font-weight: 500;
}

/* Positionner les boutons de contrôle en dehors de l'image */
.carousel-control-prev,
.carousel-control-next {
  position: absolute;
  top: 50%; /* Centrer verticalement */
  transform: translateY(-50%); /* Centrer précisément */
  z-index: 5; /* Assurez-vous que les boutons sont au-dessus de l'image */
  
}

.carousel-control-prev {
  left: -120px; /* Placer le bouton précédent à gauche du carousel */
  
}

.carousel-control-next {
  right: -120px; /* Placer le bouton suivant à droite du carousel */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  font-size: 3.5rem; /* Ajustez la taille des contrôles */
  color: white;
  box-shadow: 0 0 5px rgb(0, 0, 0); /* Ajoutez une ombre légère pour les icônes */
}

@media screen and (max-width: 768px) {
  .carousel {
    max-height: 300px; /* Réduisez la hauteur sur les écrans plus petits */
  }
  .image-container {
    height: 300px;
  }

  .carousel-control-prev {
  left: -30px; /* Placer le bouton précédent à gauche du carousel */
}

.carousel-control-next {
  right: -30px; /* Placer le bouton suivant à droite du carousel */
}

  
}
</style>
