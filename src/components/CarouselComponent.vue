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
       <svg class="carousel-control-prev-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M11 1L3 8l8 7" fill="currentColor"/>
  </svg>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="`#${id}`" data-bs-slide="next">
      <svg class="carousel-control-next-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M5 1l8 7-8 7" fill="currentColor"/>
  </svg>
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
