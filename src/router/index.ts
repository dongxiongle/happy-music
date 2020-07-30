import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NavIndex from '../views/nav/index.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: NavIndex,
    redirect: '/find',
    children: [
      {
        path: 'find',
        component: () => import('@/views/find/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
