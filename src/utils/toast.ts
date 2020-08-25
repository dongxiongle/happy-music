import { Toast } from 'vant';
const toast = function(msg: any) {
  Toast.clear();
  Toast(msg);
}
export default toast;
