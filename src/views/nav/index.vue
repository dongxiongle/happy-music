<template>
  <div>
    <div class="navWrapper">
      <van-icon name="friends-o" size="20" style="padding-left: 20px;" />
      <ul class="navBox">
        <router-link tag="li" class="navItem" to="/home" replace>我的</router-link>
        <router-link tag="li" class="navItem" to="/find" replace>发现</router-link>
        <router-link tag="li" class="navItem" to="/friend" replace>云村</router-link>
        <router-link tag="li" class="navItem" to="/vedio" replace>视频</router-link>
      </ul>
      <van-icon name="search" size="20" style="padding-right: 20px;" />
    </div>
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
  position: sticky;
  padding: 8px 0;
  .navBox {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .navItem {
      padding: 0 10px;
    }
  }
}
</style>
