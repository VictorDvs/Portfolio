import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import i18n from './i18n/i18n';
import ScrollDirective from './directives/scroll';



// Crée l'application Vue
const app = createApp(App);

// Ajoute la directive scroll globalement
app.directive('scroll', ScrollDirective);

// Utilise les plugins et monte l'application
app.use(i18n).use(store).use(router).mount('#app');
