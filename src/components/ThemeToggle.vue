<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark'
  theme.global.name.value = newTheme

  if (newTheme === 'dark') {
    document.body.classList.add('theme-dark')
  } else {
    document.body.classList.remove('theme-dark')
  }
}

const iconName = () => theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-weather-night'
const iconColor = () => theme.global.current.value.dark ? 'yellow lighten-3' : 'blue darken-2'

</script>

<template>
    <v-icon
    :color="iconColor()"
    @click="toggleTheme"
    style="cursor: pointer; font-size: 28px;"
    role="button"
    aria-label="Toggle theme"
  >
    {{ iconName() }}
  </v-icon>
</template>

