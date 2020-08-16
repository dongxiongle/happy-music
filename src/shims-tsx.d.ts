/*
 * @Author: young
 * @Date: 2020-07-27 21:48:24
 * @LastEditTime: 2020-08-16 22:17:24
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: \happy-music\src\shims-tsx.d.ts
 */
import Vue, { VNode } from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
