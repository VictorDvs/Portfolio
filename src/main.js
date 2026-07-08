import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import i18n from '@/i18n';
import ScrollDirective from './directives/scroll';
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/styles/main.scss';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          themeIcon: "#201A1E",
        },
      },
      dark: {
        dark: true,
        colors: {
          themeIcon: "#F0AE4A",
        },
      },
    },
  },
});



// Crée l'application Vue
const app = createApp(App);

// Ajoute la directive scroll globalement
app.directive('scroll', ScrollDirective);

// Utilise les plugins et monte l'application
app.use(i18n).use(store).use(router).use(vuetify).mount('#app');
