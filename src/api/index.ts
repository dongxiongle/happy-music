import axios from 'axios';
import { Notify } from 'vant';
// 发现页
import { bannerSwiperFn, dragonBallFn, topPlayListFn, hightqualityFn, recResourceFn, catlistFn, personalizedFn, hotFn } from './config/find';
// 用户信息
import { phoneLoginFn, logoutFn, loginStatusFn } from './config/user';

axios.defaults.baseURL = '//' + process.env.VUE_APP_APIHOST;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.timeout = 30000;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(response => {
  if (response.data && response.data.code === 200) {
    return response.data;
  } else {
    Notify('请求失败');
  }
})

export default axios;

export { bannerSwiperFn, dragonBallFn, topPlayListFn, hightqualityFn, recResourceFn, catlistFn, personalizedFn, hotFn, phoneLoginFn, logoutFn, loginStatusFn };
