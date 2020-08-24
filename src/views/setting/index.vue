<template>
  <div class="setWrap">
    <p class="loginBtn" v-if="!loginStatus" @click="toLogin">登录</p>
    <p class="loginBtn" v-if="loginStatus" @click="toLogout">退出登录</p>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { logoutFn } from '@/api';

const userState = namespace('user');

@Component
export default class Setting extends Vue {
  name = 'setting';
  @userState.State('loginStatus') loginStatus!: boolean
  @userState.Mutation('SETLOGINSTATUS') SETLOGINSTATUS!: Function

  toLogin() {
    this.$router.push({ name: 'login' });
  }

  toLogout() {
    logoutFn().then((res: any) => {
      console.log(res);
      if (res.code === 200) {
        this.SETLOGINSTATUS(false);
      }
    });
  }
}
</script>
<style lang="less" scoped>
.setWrap {
  min-height: 100vh;
  background: #fff;
  font-size: 13px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}
.loginBtn {
  cursor: pointer;
  width: 100px;
  padding: 4px;
  text-align: center;
}
</style>
