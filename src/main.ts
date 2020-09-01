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

import { Button, Swipe, SwipeItem, Popup, Icon, Form, Field, NavBar } from 'vant';
import '@/assets/less/index.less';
import 'vant/lib/index.less';

Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Popup);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Field);
Vue.use(NavBar);
Vue.use(VueLazyload);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
