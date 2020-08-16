<!--
 * @Author: young
 * @Date: 2020-08-15 12:44:48
 * @LastEditTime: 2020-08-16 22:52:01
 * @LastEditors: Please set LastEditors
 * @Description: 发现
 * @FilePath: \happy-music\src\views\find\index.vue
-->
<template>
  <div class="outWrap">
    {{name}}
    <swiper ref="mySwiper" class="swiper component" :options="swiperdDrectiveOption">
      <template v-for="(item, index) in swiperList">
        <swiper-slide :key="index">
          <img :src="item.pic" alt="">
        </swiper-slide>
      </template>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { SwiperOptions } from 'swiper';

import { bannerSwiperFn } from '@/api';

interface Banners {
  pic: string;
  targetId: number;
  titleColor?: string;
  typeTitle?: string;
}

interface ResBanners {
  banners: Array<Banners>;
  code: number;
}

@Component
export default class FindIndex extends Vue {
  name = 'findIndex';
  swiperList = [] as Array<Banners>;
  swiperdDrectiveOption: SwiperOptions = {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    slideClass: 'custom-slide-class',
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  };

  @Prop() msg!: string;

  mounted() {
    bannerSwiperFn().then((res: Response<ResBanners>) => {
      this.swiperList = res.banners as Array<Banners>;
    })
  }
}
</script>
<style lang="less" scoped>
.outWrap {
  padding: 20px 0;
}
</style>
