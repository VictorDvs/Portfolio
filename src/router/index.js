import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Accueil' },
  },
  {
    // TODO: créer OffreView.vue — page de service qui présente
    // Développement web + Rédaction technique (contenu ex-ProjectsView
    // et ex-TechWritingProjectsView, réécrit en angle "offre" plutôt
    // que liste de projets)
    path: '/offres',
    name: 'offres',
    component: () => import(/* webpackChunkName: "offres" */ '../views/OffresView.vue'),
    meta: { title: 'Offres' },
  },
  {
    // TODO: créer RealisationsView.vue — portfolio unifié,
    // fusion des projets dev (ex-ProjectsView) et rédaction
    // (ex-TechWritingProjectsView), filtrable par type
    path: '/realisations',
    name: 'realisations',
    component: () => import(/* webpackChunkName: "realisations" */ '../views/RealisationsView.vue'),
    meta: { title: 'Réalisations' },
  },
  {
    path: '/a-propos',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { title: 'À propos' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
    meta: { title: 'Contact' },
  },

  // --- Redirections pour ne pas casser d'anciens liens / indexation Google ---
  {
    path: '/about',
    redirect: { name: 'about' },
  },
  {
    path: '/projects',
    redirect: { name: 'realisations' },
  },
  {
    path: '/tech-writing-projects',
    redirect: { name: 'realisations' },
  },
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