import axios from '../index';
const phoneLoginURI = '/login/cellphone'; // 手机号登录
const logoutURI = 'logout'; // 退出登录
const loginStatus = '/login/status'; // 登录状态

/**
 * 手机号登录
 * @param phone 手机号 必传
 * @param password 密码 必传
 * @param countrycode 国家码 非必传
 * @param md5_password MD5加密后的密码，传入后password将失效 非必传
 */
export const phoneLoginFn = function(phone: string, password: string, countrycode?: string, md5_password?: string) {
  return axios.get(phoneLoginURI, { params: { phone, password, countrycode, md5_password } });
};
/**
 * 退出登录
 */
export const logoutFn = function() {
  return axios.get(logoutURI);
};
// 登录状态
export const loginStatusFn = function() {
  return axios.get(loginStatus);
};
