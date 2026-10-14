<template>
  <div
    id="reservation"
    class="booking"
    :role="showHeading ? null : 'region'"
    :aria-label="showHeading ? null : $t('booking.title')"
  >
    <template v-if="showHeading">
      <h2 id="booking-title">{{ $t('booking.title') }}</h2>
      <p>{{ $t('booking.intro') }}</p>
    </template>

    <div v-if="!loaded" class="booking-gate">
      <button type="button" class="btn btn-primary btn-lg" @click="loaded = true">
        <i class="bi bi-calendar-check me-2"></i>
        {{ $t('booking.load') }}
      </button>
      <p class="booking-note">{{ $t('booking.privacy') }}</p>
    </div>

    <iframe
      v-else
      :src="url"
      :title="$t('booking.iframe_title')"
      class="booking-frame"
      loading="lazy"
    ></iframe>

    <a :href="url" target="_blank" rel="noopener noreferrer" class="booking-fallback">
      {{ $t('booking.fallback') }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'BookingEmbedComponent',
    props: {
    showHeading: { type: Boolean, default: true },
  },
  data() {
    return {
      loaded: false,
      // Colle ici l'URL de l'iframe fournie par Google Agenda
      url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ3RTBi5KQ72Dzbi4gODUinHPMH2hv1BucWOAUhYrVMFBxunA9Erw_EIs5OguSp91Jl5-3mL3QpF?gv=true',
    }
  },
}
</script>

<style lang="scss" scoped>
.booking-frame {
  width: 100%;
  height: 700px;
  border: 0;
  border-radius: 12px;
  background: #fff;

  @media (max-width: 575.98px) {
    height: 800px;
  }
}

.booking-note {
  font-size: 0.875rem;
  opacity: 0.8;
  margin-top: 0.75rem;
}

.booking-fallback {
  display: inline-block;
  margin-top: 1rem;
}
</style>