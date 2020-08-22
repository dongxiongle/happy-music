<template>
  <div class="setWrap">
    <p class="loginBtn" @click="toLogin">登录</p>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {},
  props: {}
})
export default class Setting extends Vue {
  name = 'setting';

  toLogin() {
    this.$router.push({ name: 'login' });
  }
}
</script>
<style lang="less" scoped>
.setWrap {
  min-height: 100vh;
  background: #fff;
  font-size: 13px;
}
</style>
