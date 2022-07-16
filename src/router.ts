import { createRouter, createWebHistory } from 'vue-router'

import Index from '@/pages/Index.vue'
import GalleryPage from '@/pages/GalleryPage.vue'

const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      title: 'Vite + Vue + TypeScript + Tailwind Starter Template',
    },
  },
  {
    path: '/gallery',
    component: GalleryPage,
    meta: {
      title: 'Gallery',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
