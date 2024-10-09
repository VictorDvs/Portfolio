<template>
    
        <HeaderComponent/>
        <div class="container-fluid section" id="contact">
<div class="row">
  <div class="col-sm-6 col-12 align-items-center d-flex">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero dolorem eveniet vel excepturi vitae odio omnis laudantium, sapiente exercitationem quaerat. Vitae fugit deleniti molestiae modi asperiores beatae possimus aspernatur odio!</p>
  </div>

  <div class="col-sm-6 col-12 align-items-center d-flex justify-content-lg-end">
    <!-- modify this form HTML and place wherever you want your form -->
<form
action="https://formspree.io/f/mpwaeeld"
method="POST"
>
<label>
  Votre mail :
  <input type="email" name="email" class="form-control mb-3">
</label>
<label>
  Votre message :
  <textarea name="message" class="form-control mb-3" rows="4" ></textarea>
</label>
<!-- your other form fields go here -->
<button type="submit">Envoyez votre message</button>
</form>
</div>
</div>
</div>
<FooterComponent/>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
    export default {
        components: {
            HeaderComponent,
            FooterComponent
        }
    }
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";

#contact{
    @include displayFlex;
    flex-direction: column;
    
    color: black;
}

#contact form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: black;
    margin: 25px 0px;
    width: 100%;
    max-width: 600px;
    padding: 0 10px;
    box-sizing: border-box;

}

#contact form label {
    margin: 10px;
    width: 100%;
}

#contact input, #contact textarea {
    width: 100%; /* Les inputs prennent toute la largeur */
    max-width: 500px; /* Limiter la largeur pour les écrans larges */
}

.footer-content {
    text-align: center; /* Centrer les textes du footer */
    margin: 5px 0; /* Marges plus petites pour éviter le débordement */
    word-wrap: break-word; /* Forcer la casse des longs mots */
}

/* Media queries pour petits écrans */
@media (max-width: 576px) {
    #contact {
        padding: 10px; /* Réduire le padding sur petits écrans */
    }
    
    #contact form {
        padding: 0; /* Réduire le padding sur petits écrans */
    }
    
    #contact form label {
        margin: 5px; /* Réduire les marges des labels */
    }
    
    .footer-content {
        font-size: 0.9rem; /* Réduire la taille du texte dans le footer sur petits écrans */
    }
}
</style>