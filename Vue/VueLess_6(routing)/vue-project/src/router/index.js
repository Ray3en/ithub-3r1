import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      component: AboutView
    },
    {
      path: '/contacts',
      component: ContactView
    }
  ],
})

export default router
