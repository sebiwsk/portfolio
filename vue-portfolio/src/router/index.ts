import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'under-construction',
      component: () => import('../views/UnderConstruction.vue'),
    },
  ],
})

export default router
