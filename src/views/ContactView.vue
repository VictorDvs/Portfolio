<template>
    <HeaderComponent />
    <div class="container-fluid section" id="contact">
        
        <div class="row">
            <div class="col-sm-6 col-12 align-items-end d-flex justify-content-center flex-column">
                <!-- modify this form HTML and place wherever you want your form -->
                <form id="form" action="https://formspree.io/f/mpwaeeld" method="POST">

                    <p>Adresse mail :</p>
                    <input type="email" name="email" class="form-control mb-3" placeholder="Votre email">


                    <p>Message :</p>
                    <textarea name="message" class="form-control mb-3" rows="4"
                        placeholder="Votre message..."></textarea>

                    <!-- your other form fields go here -->
                    <button type="submit">Envoyez votre message</button>
                </form>
            </div>
            <div class="col-sm-6 col-12 align-items-center justify-content-center d-flex flex-column">
                    <ul>
                    <li><p><i class="bi bi-telephone"></i> +33 6 81 88 31 76</p></li>
                    <li><p><i class="bi bi-envelope"></i> victordevos.pro@gmail.com</p></li>
                </ul>
            </div>

            
        </div>
    </div>
    <!-- <FooterComponent /> -->
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
// import FooterComponent from '@/components/FooterComponent.vue'
export default {
    components: {
        HeaderComponent,
        // FooterComponent
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";

li {
    list-style: none;
}

.row {
    width: 100%;
}

#contact-text {
    max-width: 65%;
}

#contact {
    @include displayFlex;
    flex-direction: column;

    color: black;
}

#contact form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #EFEBFE;
    text-align: start;
    color: black;
    margin: 25px 0px;
    width: 100%;
    height: 400px;
    max-width: 600px;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 20px;

}

// #contact form label {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     margin: 10px;
//     width: 100%;
// }

#contact form p {
    display: flex;
    align-items: start;
    width: 100%;
    padding-left: 40px;
}

#contact input,
#contact textarea {
    width: 100%;
    /* Les inputs prennent toute la largeur */
    max-width: 500px;
    /* Limiter la largeur pour les écrans larges */
}

#contact form button {
    display: flex;
    // align-self: flex-end;
    border: none;
    background-color: #3615B1;
    color: white;
    font-size: 1.2em;
    font-weight: 500;
    border-radius: 30px;
    padding: 10px;

    // margin-right: 35px;
    // margin-top: 15px;
}

/* Media queries pour petits écrans */
@media (max-width: 576px) {
    #contact {
        padding: 10px;
        /* Réduire le padding sur petits écrans */
    }

    #contact form {
        padding: 0;
        /* Réduire le padding sur petits écrans */
    }

    #contact form label {
        margin: 5px;
        /* Réduire les marges des labels */
    }

}
</style>