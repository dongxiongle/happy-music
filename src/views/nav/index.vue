<template>
  <div>
    <van-sticky>
      <div class="navWrapper">
        <van-icon name="friends-o" size="20" style="padding-left: 20px;" />
        <van-tabs v-model="currentPath" style="flex:1;">
          <van-tab title="我的" replace to="/home"></van-tab>
          <van-tab title="发现" replace to="/find"></van-tab>
          <van-tab title="云村" replace to="/friend"></van-tab>
          <van-tab title="视频" replace to="/vedio"></van-tab>
        </van-tabs>
        <van-icon name="search" size="20" style="padding-right: 20px;" />
      </div>
    </van-sticky>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class NavIndex extends Vue {
  name = 'NavIndex';
  currentPath = 0;
}
</script>
<style lang="less" scoped>
@height: 1rem;
.navWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .van-tabs__line {
    background-color: transparent;
  }
}
</style>
