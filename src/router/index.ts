/*
 * @Author: young
 * @Date: 2020-08-15 12:44:48
 * @LastEditTime: 2020-08-16 21:18:04
 * @LastEditors: Please set LastEditors
 * @Description: 路由
 * @FilePath: \happy-music\src\router\index.ts
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NavIndex from '../views/nav/index.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: NavIndex,
    redirect: '/fine',
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
