<template>
  <div class="container-fluid footer">
    <div class="row">
      <div class="col-12 d-flex flex-wrap justify-content-start">
        <div class="footer-content">
          <span class="copyright me-3">© {{ currentYear }} Copyright Victor De Vos</span>
          <a target="_blank" href="https://github.com/VictorDvs?tab=repositories" rel="noopener">
            <i class="bi bi-github me-3"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/victor2vos/" rel="noopener">
            <i class="bi bi-linkedin me-3"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_footer.scss";
</style>