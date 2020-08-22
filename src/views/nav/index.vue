<template>
  <div>
    <div class="navWrapper">
      <van-icon name="friends-o" size="20" style="padding-left: 20px;" @click="showSetting" />
      <ul class="navBox">
        <template v-for="(item, index) in pathList">
          <li :key="index" :class="['navItem', item.path == currentPath ? '' : null]" @click="changePath(index)" >
            <p :class="[item.path == currentPath ? 'activItem' : null]">{{item.title}}</p>
          </li>
        </template>
      </ul>
      <van-icon name="search" size="20" style="padding-right: 20px;" />
    </div>
    <van-popup v-model="show" position="left" :style="{ width: '80%', background: 'transparent' }">
      <setting />
    </van-popup>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Setting from '@/views/setting/index.vue';
@Component({
  components: {
    setting: Setting
  }
})
export default class NavIndex extends Vue {
  name = 'NavIndex';
  currentPath = this.$router.currentRoute.path;
  show = false;
  pathList = [
    { title: '我的', path: '/home' },
    { title: '发现', path: '/find' },
    { title: '云村', path: '/friend' },
    { title: '视频', path: '/vedio' }
  ];

  changePath(index: number) {
    this.currentPath = this.pathList[index].path;
    this.$router.replace({ path: this.currentPath });
  }

  showSetting() {
    this.show = true;
    console.log(this.show);
  }
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
    p {
      transition: all 0.1s linear;
    }
    .activItem {
      transform: scale(1.2);
    }
  }
}
</style>
