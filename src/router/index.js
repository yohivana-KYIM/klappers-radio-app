import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ActusPage from '../views/ActusPage.vue'
import PodcastsPage from '../views/PodcastsPage.vue'
import ContactPage from '../views/ContactPage.vue'

import InfoPage from '../views/InfoPage.vue'


const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/direct', name: 'Direct', component: HomePage }, 
  { path: '/actus', name: 'Actus', component: ActusPage },
  { path: '/podcasts', name: 'Podcasts', component: PodcastsPage },
  { path: '/info', name: 'Info', component: InfoPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
