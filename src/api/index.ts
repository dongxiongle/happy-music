import axios from 'axios';
import { Notify } from 'vant';
// 发现页
import { bannerSwiperFn, dragonBallFn, topPlayListFn, hightqualityFn, recResourceFn, catlistFn, personalizedFn, hotFn, recSongsFn, playListDetailFn, newSongsFn } from './config/find';
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
    Notify(response.data.msg || '请求失败');
    return response.data;
  }
}, (error) => {
  if (error.response && error.response.data) {
    Notify(error.response.data.msg || '请求失败');
  }
  return Promise.reject(error.response);
}
)

export default axios;

export { bannerSwiperFn, dragonBallFn, topPlayListFn, hightqualityFn, recResourceFn, catlistFn, personalizedFn, hotFn, phoneLoginFn, logoutFn, loginStatusFn, recSongsFn, playListDetailFn, newSongsFn };
