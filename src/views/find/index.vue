<template>
  <div>
    <van-swipe ref="mySwiper" :autoplay="5000" indicator-color="white">
      <template v-for="(item, index) in swiperList">
        <van-swipe-item :key="index">
          <div class="bannerOut">
            <div class="bannerBox">
              <img :src="item.pic">
              <span class="typeTitle" :style="'background-color:'+item.titleColor">{{item.typeTitle}}</span>
            </div>
          </div>
        </van-swipe-item>
      </template>
      <div class="swiper-pagination" slot="pagination"></div>
    </van-swipe>
    <div class="wrapScrollX">
      <div class="bollWrap" :style="ballString">
        <template v-for="(ball, index) in ballList">
          <div class="ballBox" :key="'ball' + index">
            <div class="ball">
              <img :src="ball.iconUrl" alt="">
              <span v-if="index === 0" class="ballDate">{{today}}</span>
            </div>
            <p class="subTitle mt08">{{ball.name}}</p>
          </div>
        </template>
      </div>
    </div>
    <p class="findTitle">发现好歌单</p>
    <div class="wrapScrollX">
      <div class="wrap">
        <template v-for="(recommend, index) in recommendList">
          <div class="resourceBox" :key="'resource' + index">
            <img :src="recommend.picUrl"/>
            <p>{{recommend.name}}</p>
          </div>
        </template>
      </div>
    </div>
    <p class="findTitle">推荐好歌</p>
    <div class="wrapScrollX">
      <div class="songWrap">
        <template v-for="(song, index) in newSongsList">
          <div class="songBox" :key="'song' + index">
            <img :src="song.songPicUrl"/>
            <p>{{song.name}}</p>
          </div>
        </template>
      </div>
    </div>
    <p class="findTitle">每日推荐歌单new message</p>
    <div class="wrapScrollX">
      <div class="wrap">
        <template v-for="(resource, index) in resourceList">
          <div class="resourceBox" :key="'resource' + index">
            <img :src="resource.picUrl"/>
            <p>{{resource.name}}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { bannerSwiperFn, dragonBallFn, personalizedFn, recResourceFn, recSongsFn, playListDetailFn, newSongsFn } from '@/api';

import toast from '@/utils/toast';

interface Banners {
  pic: string;
  targetId: number;
  titleColor?: string;
  typeTitle?: string;
}

@Component
export default class FindIndex extends Vue {
  name = 'findIndex';
  swiperList = [] as Array<Banners>;
  recommendList: Array<any> = [];
  ballList = [];
  ballString = '';
  today = '';
  resourceList: Array<any> = [];
  newSongsList: Array<any> = [];

  @Prop() msg!: string;

  /**
   * 轮播图
   */
  getBannerSwiper() {
    bannerSwiperFn().then((res: any) => {
      this.swiperList = res.banners;
    })
  }

  /**
   * 原型入口
   */
  getDragonBall() {
    dragonBallFn().then((res: any) => {
      const { code, message, data } = res;
      if (code === 200) {
        this.ballList = data;
        this.ballString = `width: calc(${12 * data.length}vw + ${20 * (data.length + 1)}px);`
      } else {
        toast(message);
      }
    })
  }

  /**
   * 获取每日推荐歌单
   */
  getResource() {
    recResourceFn().then((res: any) => {
      const { code, recommend } = res;
      if (code === 200) {
        this.resourceList = recommend.splice(0, 6);
        // this.getplayListDetail(recommend[0].id);
      }
    })
  }

  /**
   * 推荐歌曲
   */
  getRecSongs() {
    recSongsFn().then((res: any) => {
      const { code, data } = res;
      if (code === 200) {
        const temp: Array<any> = [];
        data.dailySongs.forEach((song: any) => {
          const songId = song.id
          const songName = song.name;
          const songArName = song.ar[0] ? song.ar[0].name : '';
          const songAlName = song.al.name || '';
          const songPicUrl = song.al.picUrl;
          temp.push({ songId, songName, songArName, songAlName, songPicUrl });
        });
        this.newSongsList = temp.slice(0, 12);
      }
    });
  }

  /**
   * 推荐歌单(懂你的精选歌单)
   */
  getPersonalized() {
    personalizedFn().then((res: any) => {
      const { code, result } = res;
      if (code === 200) {
        const arrTemp: Array<any> = [];
        const start = parseInt(`${Math.random() * (result.length - 6)}`) + 1;
        arrTemp.push(result[0]);
        const temp = result.slice(start, start + 5);
        this.recommendList = arrTemp.concat(temp);
      }
    });
  }

  getNewSongs() {
    newSongsFn().then((res: any) => {
      console.log(res);
    })
  }

  /**
   * 获取歌单详情
   */
  getplayListDetail(id: number) {
    playListDetailFn(id).then((res: any) => {
      console.log('---');
      console.log(res);
    });
  }

  mounted() {
    this.today = `${new Date().getDate()}`;
    this.getBannerSwiper();
    this.getDragonBall();
    this.getResource();
    this.getPersonalized();
    // this.getNewSongs();
    this.getRecSongs();
  }
}
</script>
<style lang="less" scoped>
@pd: 10px 20px;
@bdr: 4px;
.bannerOut {
  padding: @pd;
  width: 100vw;
  box-sizing: border-box;
  .bannerBox {
    position: relative;
    border-radius: @bdr;
    overflow: hidden;
  }
  img {
    display: block;
    width: 100%;
  }
  .typeTitle {
    position: absolute;
    right: -1px;
    bottom: 0;
    color: #fff;
    padding: 2px 8px;
    font-size: 10px;
    border-top-left-radius: @bdr;
  }
}
.findTitle {
  font-size: 16px;
  color: #111;
  font-weight: 600;
  margin-top: 10px;
  padding: 5px 20px;
}
.wrapScrollX {
  overflow-x: auto;
}
.wrap {
  padding: 0 20px;
  display: flex;
  width: calc(150vw + 90px);
  box-sizing: border-box;
}
.resourceBox {
  width: 25vw;
  margin-right: 10px;
  p {
    margin-top: 8px;
    font-size: 10px;
    color: #333;
    line-height: 12px;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
}
.resourceBox:last-child {
  margin-right: 0;
}
img {
  display: block;
  width: 100%;
  border-radius: 4px;
}
.bollWrap {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  min-width: 100vw;
  box-sizing: border-box;
  .ballBox {
    width: 12vw;
    .ball {
      position: relative;
      border-radius: 50%;
      overflow: hidden;
      background-color: @bgred;
      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 13px;
        margin-top: 2px;
        color: @bgred;
      }
    }
    img {
      display: block;
      width: 100%;
    }
  }
}
.subTitle {
  font-size: 10px;
  color: #333;
  line-height: 12px;
  text-align: center;
}
.songWrap {
  padding: 5px 20px;
  box-sizing: border-box;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  width: calc(320vw + 120px);
  .songBox {
    display: flex;
    width: 80vw;
    margin-top: 5px;
    img {
      display: block;
      width: 12vw;
      border-radius: 4px;
    }
  }
}
</style>
