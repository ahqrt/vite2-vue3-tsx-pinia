import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{ path: '/home', component: () => import('@/pages/home.vue') }],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
