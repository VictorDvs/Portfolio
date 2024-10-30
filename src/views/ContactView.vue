<template>
    <HeaderComponent />
    <div class="container-fluid section" id="contact">
        
        <div class="row">
            <div class="col-sm-12 col-12 align-items-center d-flex justify-content-center flex-column">
                <h5 id="invit">Je serai ravi d'échanger avec vous ! Que vous ayez des questions, des projets en tête, ou simplement une envie de discuter, n'hésitez pas à m'écrire. <br> Vous pouvez compter sur une réponse rapide pour que nous puissions avancer ensemble. <br>Merci ! </h5>
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
            <!-- <div class="col-sm-6 col-12 align-items-center justify-content-center d-flex flex-column">
                    <ul>
                    <li><p><i class="bi bi-telephone"></i> +33 6 81 88 31 76</p></li>
                    <li><p><i class="bi bi-envelope"></i> victordevos.pro@gmail.com</p></li>
                </ul>
            </div> -->

            
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


#invit{
    font-family: "Kalam", cursive;
    font-weight: 300;
    font-size: 1.4em;
    width: 60%;
}

.row {
    width: 100%;
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

#contact form p {
    display: flex;
    align-items: start;
    width: 100%;
    padding-left: 40px;
}

#contact input,
#contact textarea {
    width: calc(100% - 40px);  // Réduit de 40px pour correspondre aux marges intérieures
    max-width: 500px;           // Limite la largeur sur les grands écrans
    margin: 0 20px;    
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

    width: calc(100% - 60px);   // Largeur du bouton ajustée pour correspondre aux marges du conteneur
    max-width: 250px;
    margin: 15px auto 0;        // Centré et espacement supplémentaire
    justify-content: center;

}

/* Media queries pour petits écrans */
@media (max-width: 576px) {
#invit{
    text-align: center;
    width: 80%;
}


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