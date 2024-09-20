import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/CardView.vue')
    },
    {
      path: '/crud',
      name: 'crud',

      component: () => import('../views/CrudView.vue')
    },
    {
      path: '/testimoni',
      name: 'testimoni',

      component: () => import('../views/TestimoniView.vue')
    },
    {
      path: '/digi',
      name: 'digi',

      component: () => import('../views/DigiView.vue')
    }
  ]
})

export default router
