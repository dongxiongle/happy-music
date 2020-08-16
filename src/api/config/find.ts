/*
 * @Author: young
 * @Date: 2020-08-15 12:56:15
 * @LastEditTime: 2020-08-15 13:03:46
 * @LastEditors: Please set LastEditors
 * @Description: 发现页api
 * @FilePath: \happy-music\src\api\config\find.ts
 */

import axios from '../index';

const bannerSwiper = '/banner?type=1'; // 发现页轮播图
const topPlayList = '/top/playlist'; // 推荐歌单，歌单广场
const hightquality = '/top/playlist/highquality'; // 精品歌单
// const catlist = '/playlist/catlist'; // 歌单分类
// const hot = '/playlist/hot'; // 热门歌单分类
// const topListDetail = '/toplist/detail'; // 所有榜单内容摘要
// const topList = '/top/list'; // 排行榜
// const playListDetail = '/playlist/detai/'; // 歌单详情
// const recSongs = '/recommend/songs'; // 每日推荐歌曲
// const recResource = '/recommend/resource'; // 每日推荐歌单
// const newAlbum = '/top/album'; // 新碟
// const getAlbum = '/album'; // 专辑内容
// const newSongs = '/top/song'; // 新歌
// const personalFm = '/personal_fm'; // 私人Fm

export const bannerSwiperFn = function() {
  return axios.get(bannerSwiper);
};
/**
 * @description: 获取推荐歌单
 * @param {number} limit 分页数量 默认30
 * @param {string} order 分别对应最新和最热,可选值为 'new' 和 'hot'
 * @param {string} cat 比如 ' 华语 '、' 古风 ' 、' 欧美 '、' 流行 ', 默认为 '全部'
 * @return {Array}
 */
export const topPlayListFn = function(
  limit = 30,
  order = 'hot',
  cat: string
) {
  return axios.get(topPlayList, { params: { limit, order, cat } });
};
/**
 * @description: 精品歌单
 * @param {number} limit 分页数量 默认30
 * @param {number} before 分页参数，取上一页最后一个歌单的updatetime获取下一页数据
 * @param {string} cat 比如 ' 华语 '、' 古风 ' 、' 欧美 '、' 流行 ', 默认为 '全部'
 * @return {Array}
 */
export const hightqualityFn = function(
  limit = 30,
  before: number | string,
  cat: string
) {
  return axios.get(hightquality, { params: { limit, before, cat } });
};
