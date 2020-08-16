/*
 * @Author: young
 * @Date: 2020-08-16 22:46:41
 * @LastEditTime: 2020-08-16 22:55:01
 * @LastEditors: Please set LastEditors
 * @Description: axios
 * @FilePath: \happy-music\src\shims-axios.d.ts
 */

declare global {
  namespace axios {
    interface Response<T = any> {
      code: number;
      data: T
    }
  }
}
export {}