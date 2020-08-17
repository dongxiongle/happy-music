/*
 * @Author: young
 * @Date: 2020-08-15 12:44:48
 * @LastEditTime: 2020-08-16 21:39:58
 * @LastEditors: Please set LastEditors
 * @Description: main
 * @FilePath: \happy-music\src\main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueLazyload from 'vue-lazyload';

import vant from 'vant';
import '@/assets/less/index.less';
import 'vant/lib/index.less';

Vue.use(vant);
Vue.use(VueLazyload);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
