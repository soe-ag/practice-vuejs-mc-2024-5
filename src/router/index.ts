import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'
// import { h } from 'vue'

import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: HomeView
  //   },
  //   {
  //     path: '/projects',
  //     name: 'projects',
  //     component: () => import('@/views/ProjectsView.vue')
  //   },
  //   {
  //     path: '/projects/:id',
  //     name: 'single-project',
  //     component: () => import('@/views/SingleProjectView.vue')
  //   },
  //   {
  //     path: '/:catchAll(.*)*',
  //     name: 'Not Found',
  //     component: h('p', { style: 'color:red' }, '404 Not Found')
  //   }
  // ]
})

export default router
