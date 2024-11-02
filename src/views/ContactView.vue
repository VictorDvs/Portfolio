<template>
    <HeaderComponent />
    <div class="container-fluid section" id="contact">
        
        <div class="row">
            <div class="col-sm-12 col-12 align-items-center d-flex justify-content-center flex-column">
                <h3 id="invit">Je serai ravi d'échanger avec vous ! Que vous ayez des questions, des projets en tête, ou simplement une envie de discuter, n'hésitez pas à m'écrire. <br> Vous pouvez compter sur une réponse rapide pour que nous puissions avancer ensemble. <br>À bientôt ! </h3>
   
             <!-- modify this form HTML and place wherever you want your form -->
                <form id="form" action="https://formspree.io/f/mpwaeeld" method="POST">

                    <label for="email">Adresse mail :</label>
                    <input type="email" name="email" class="form-control mb-3" placeholder="Votre email" required>


                    <label for="message">Message :</label>
                    <textarea name="message" class="form-control mb-3" rows="4"
                        placeholder="Votre message..." required></textarea>

                    <button type="submit">Envoyez votre message</button>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'

export default {
    components: {
        HeaderComponent,

    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_mixins.scss";


#invit{
    font-family: "Kalam", cursive;
    font-weight: 300;
    // font-size: 1.4em;
    width: 60%;
    text-align: justify;

    @media (max-width: 576px) {
        text-align: center;
        width: 80%;
    }

}

.row {
    width: 100%;
    margin: 0 auto;
}


#contact {
    @include displayFlex;
    flex-direction: column;
    color: black;
    background-color: #fcfcf7;
    height: 100vh;
    padding: 10px; // Centralisé pour tous les écrans

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #EFEBFE;
        color: black;
        margin: 25px 0;
        width: 100%;
        max-width: 600px;
        height: auto;
        padding: 20px;
        border-radius: 20px;
        box-sizing: border-box;

        label {
            width: 100%;
            padding-left: 20px;
        }

        .form-control {
            width: calc(100% - 40px);
            max-width: 500px;
            margin: 0 20px;
        }

        button {
            border: none;
            background-color: #3615B1;
            color: white;
            font-size: 1.2em;
            font-weight: 500;
            border-radius: 30px;
            padding: 10px;
            max-width: 250px;
            width: calc(100% - 40px);
            margin: 15px auto 0;
            justify-content: center;
            transition: transform 0.3s ease;

                &:hover {
                    transform: scale(1.07);
                    
                }
        }
    }
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

    #contact input,
    #contact textarea {
        width: calc(100% - 20px);  // Largeur adaptée aux écrans plus petits
        margin: 0 10px;
    }

    #contact form button {
        width: calc(100% - 20px);  // Largeur du bouton ajustée pour écrans plus petits
        margin: 10px auto 0;
        justify-content: center;
    }

}
</style>