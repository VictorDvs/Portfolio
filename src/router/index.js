import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectsView.vue')
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExperiencesView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue')
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

export default router
