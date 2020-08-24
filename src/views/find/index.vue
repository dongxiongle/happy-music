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
    <p class="findTitle">发现好歌</p>
    <div class="resourceWrap">
      <div class="wrap">
        <template v-for="(recommend, index) in recommendList">
          <div class="resourceBox" :key="'resource' + index">
            <img :src="recommend.picUrl"/>
            <p>{{recommend.name}}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { bannerSwiperFn, recResourceFn } from '@/api';

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
  recommendList = [];

  @Prop() msg!: string;

  mounted() {
    bannerSwiperFn().then((res: any) => {
      this.swiperList = res.banners;
    })
    recResourceFn().then((res: any) => {
      const { code, recommend } = res;
      if (code === 200) {
        this.recommendList = recommend.slice(0, 6);
      }
    })
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
  padding: 5px 20px;
}
.resourceWrap {
  overflow-x: auto;
  .wrap {
    padding: 0 20px;
    display: flex;
    width: calc(180vw + 90px);
    box-sizing: border-box;
  }
  .resourceBox {
    width: 30vw;
    margin-right: 10px;
    p {
      font-size: 10px;
      color: #bbb;
      line-height: 12px;
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
}
</style>
