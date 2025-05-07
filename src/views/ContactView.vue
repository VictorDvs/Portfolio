<template>
    <HeaderComponent />
    <div class="container-fluid section" id="contact">
        
        <div class="row">
            <div class="col-sm-12 col-12 align-items-center d-flex justify-content-center flex-column">
                <h3 id="invit">{{ $t('contact.description') }} </h3>

                <div class="col-12 d-flex justify-content-center" id="sources-perso">
            <a target="_blank" href="https://github.com/VictorDvs?tab=repositories" rel="noopener">
              <i class="bi bi-github me-3"></i>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/victor2vos/" rel="noopener">
              <i class="bi bi-linkedin me-3"></i>
            </a>
            <a target="_blank" href="https://www.facebook.com/vittoriodevos" rel="noopener">
              <i class="bi bi-facebook me-3"></i>
            </a>
          </div>
   
             <!-- modify this form HTML and place wherever you want your form -->
                <form id="form" action="https://formspree.io/f/mpwaeeld" method="POST">

                    <label for="email" class="mb-2">{{ $t('contact.form.email') }} </label>
                    <input type="email" name="email" class="form-control mb-3" required>


                    <label for="message" class="mb-2">{{ $t('contact.form.message') }}</label>
                    <textarea name="message" class="form-control mb-3" rows="5"
                        required></textarea>

                    <button type="submit">{{ $t('contact.form.submit') }}</button>
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
@import "@/assets/styles/_contact.scss";
</style>