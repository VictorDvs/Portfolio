<script setup>
import { computed, watch } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = computed(() => theme.global.name.value === 'dark')

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

watch(
  isDark,
  (val) => {
    document.body.classList.toggle('theme-dark', val)
  },
  { immediate: true }
)

const iconName = computed(() =>
  isDark.value ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
)
</script>

<template>
  <v-icon
    :icon="iconName"
    color="themeIcon"
    @click="toggleTheme"
    style="cursor: pointer; font-size: 28px;"
    role="button"
    aria-label="Toggle theme"
  />
</template>

