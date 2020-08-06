import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NavIndex from '../views/nav/index.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: NavIndex,
    redirect: '/home',
    children: [
      {
        path: 'find',
        name: 'FindIndex',
        component: () => import('@/views/find/index.vue')
      },
      {
        path: 'home',
        name: 'HomeIndex',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'friend',
        name: 'FriendIndex',
        component: () => import('@/views/friend/index.vue')
      },
      {
        path: 'vedio',
        name: 'VedioIndex',
        component: () => import('@/views/video/index.vue')
      }
    ]
  },
  {
    path: '/canvas',
    name: 'CanvasIndex',
    component: () => import('@/views/canvas/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
