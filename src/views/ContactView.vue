<template>
    <HeaderComponent />
    <div class="container-fluid section" id="contact">
        
        <div class="row justify-content-center">

            <div class="col-12 d-flex flex-column align-items-center" id="contact-left">
                <h3 id="invit">{{ $t('contact.description') }} </h3>

                <div class="contact-info">
                    <p>
                        <i class="bi bi-envelope-fill me-2"></i>
                        <a href="mailto:victordevos.pro@gmail.com">victordevos.pro@gmail.com</a>
                    </p>
                    <p>
                        <i class="bi bi-geo-alt-fill me-2"></i>
                        {{ $t('contact.location') }}
                    </p>
                </div>

                <div class="d-flex justify-content-center" id="sources-perso">
                    <a target="_blank" href="https://github.com/VictorDvs?tab=repositories" rel="noopener">
                        <i class="bi bi-github me-3"></i>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/victor2vos/" rel="noopener">
                        <i class="bi bi-linkedin me-3"></i>
                    </a>
                </div>
            </div>

            <div class="col-12 d-flex justify-content-center">
                <!-- modify this form HTML and place wherever you want your form -->
                <form id="form" action="https://formspree.io/f/mpwaeeld" method="POST">

                    <label for="name" class="mb-2">{{ $t('contact.form.name') }} <span class="required">*</span></label>
                    <input type="text" name="name" id="name" class="form-control mb-3" required>

                    <label for="email" class="mb-2">{{ $t('contact.form.email') }} <span class="required">*</span></label>
                    <input type="email" name="email" id="email" class="form-control mb-3" required>

                    <label for="phone" class="mb-2">{{ $t('contact.form.phone') }}</label>
                    <input type="tel" name="phone" id="phone" class="form-control mb-3">

                    <label for="subject" class="mb-2">{{ $t('contact.form.subject') }} <span class="required">*</span></label>
                    <input type="text" name="_subject" id="subject" class="form-control mb-3" required>

                    <label for="message" class="mb-2">{{ $t('contact.form.message') }} <span class="required">*</span></label>
                    <textarea name="message" id="message" class="form-control mb-3" rows="5"
                        required></textarea>

                    <div class="form-check mb-3">
                        <input type="checkbox" name="callback" id="callback" class="form-check-input">
                        <label for="callback" class="form-check-label">{{ $t('contact.form.callback') }}</label>
                    </div>

                    <button type="submit">{{ $t('contact.form.submit') }}</button>
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
@import "@/assets/styles/_contact.scss";
</style>