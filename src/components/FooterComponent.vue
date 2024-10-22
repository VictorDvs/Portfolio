<template>
  <div class="container-fluid footer">
    
    <div class="row">
      <div class="col-12 d-flex flex-wrap justify-content-start">
    <div class="footer-content me-auto"><p>Portfolio créé avec Vue.js et hebergé sur GitHub</p></div>
    <!-- <div class="footer-content me-4"><p>Experiences</p></div>
    <div class="footer-content me-4"><p>Home</p></div>
    <div class="footer-content me-4"><p>Projets</p></div>
    <div class="footer-content me-4"><p>Contact</p></div>
    <div class="footer-content footer-link-cv"><p>Mon CV</p></div> -->
  </div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

@import "@/assets/styles/_mixins.scss";

.footer{
    background-color: rgba(0, 0, 0, 0.808);
    height: 70px;
    color: #ebe6e0;
    position: relative;
    bottom: 0;
    width: 100%;
    @include displayFlex;
}

.footer-content{
    /* margin: 0 25px; */
    @include displayFlex;
    padding: auto 0;
    
}

.footer-content p{
    margin: 0 25px;
}



.footer-content p:hover{
    font-weight: 500 ;
}

.footer-link-cv{
    border: 2.5px solid white;
    border-radius: 8px;
    /* width: fit-content; */
    padding: 5px 5px;
}

.footer-link-cv:hover{
    background-color: white;
    color: black;
}

</style>