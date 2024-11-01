<template>
<div class="carousel slide carousel-fade" id="carouselExampleFade">
    <div class="carousel-inner">
      <div v-for="(slide, index) in slides" :key="index" :class="['carousel-item', { active: index === 0 }]">
        <div class="image-container">
          <img :src="slide.src" class="d-block w-100" alt="..." @click="showImageModal(slide.src)">
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

    <!-- Légende sous le carousel -->
    <div class="carousel-caption-below">
      <p>{{ slides[activeIndex].text }}</p>
    </div>

    <!-- Modal pour afficher l'image en grand -->
    <div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content">
          <div class="modal-body">
            <img id="modalImage" :src="selectedImage" class="img-fluid" alt="Image en grand">
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
import { Modal } from 'bootstrap';

export default {
  props: {
    slides: {
      type: Array,
      required: true,
    },
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
      new Modal(document.getElementById('imageModal')).show();
    },
  },
  mounted() {
    document.getElementById("carouselExampleFade").addEventListener("slide.bs.carousel", (event) => {
      this.activeIndex = event.to;
    });
  },
};
</script>

<style scoped>
.carousel {
  
  width: 65%;
}
@media screen and (max-width: 1096px) {
  .carousel{
    width: 100%;
  max-width: 100%;
  }
}
.image-container {
    width: 100%;       
    height: 300px;     
    overflow: hidden;  
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        transition: transform 0.3s ease; 
    }

    img:hover {
        cursor: zoom-in; 
        transform: scale(1.1); 
    }
}

.carousel-caption-below {
  text-align: center;
  margin-top: 15px;
  font-size: 1rem;
  color: #333;
}
</style>