import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index.vue')
  },
  {
    path: '/partOne',
    name: 'partOne',
    component: () => import('../views/partOne/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/partOne/home.vue')
      },
      {
        path: '/operation',
        name: 'operation',
        component: () => import('../views/partOne/operation.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
