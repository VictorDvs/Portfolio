import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: AboutView,
    meta: { title: 'Accueil - Mon Portfolio' },
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProjectsView.vue'),
    meta: { title: 'Les projets - Mon Portfolio' },
  },
  {
    path: '/experiences',
    name: 'experiences',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExperiencesView.vue'),
    meta: { title: 'Les expériences - Mon Portfolio' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue'),
    meta: { title: 'Contact - Mon Portfolio' },
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
