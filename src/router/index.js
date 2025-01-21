import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView,
    meta: { title: 'Home' },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectsView.vue'),
    meta: { title: 'Dev Projects' },
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExperiencesView.vue'),
    meta: { title: 'Experiences' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue'),
    meta: { title: 'Contact' },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Position sauvegardée lors du retour à une page précédente
    } else if (to.hash) {
      return {
        el: to.hash, // Cible le hash (ancre) spécifié
        behavior: 'smooth', // Ajoute un défilement fluide
      };
    } else {
      return { top: 0 }; // Retourne en haut de page si aucun hash n'est spécifié
    }
  },
})

// Hook pour changer le titre
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Mon Application';
  next();
});

export default router
