import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import AboutView from '@/views/AboutView.vue'
import FAQView from '@/views/FAQView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/servicios',
    name: 'services',
    component: ServicesView
  },
  {
    path: '/nosotros',
    name: 'about',
    component: AboutView
  },
  {
    path: '/Preguntas',
    name: 'preguntas',
    component: FAQView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router