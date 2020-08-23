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
    <div>发现好歌</div>
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

  @Prop() msg!: string;

  mounted() {
    bannerSwiperFn().then((res: any) => {
      this.swiperList = res.banners;
    })
    recResourceFn().then((res: any) => {
      console.log(res);
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
</style>
