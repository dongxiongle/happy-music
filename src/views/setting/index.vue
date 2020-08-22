<template>
  <div class="setWrap">
    <p class="loginBtn" @click="toLogin">登录</p>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { loginStatusFn } from '@/api';
import { Toast } from 'vant';

const userState = namespace('user');

@Component({
  components: {},
  props: {}
})
export default class Setting extends Vue {
  name = 'setting';

  @userState.Mutation('SETPROFILE') SETPROFILE!: Function
  @userState.Mutation('SETBINDINGS') SETBINDINGS!: Function
  @userState.Mutation('SETLOGINSTATUS') SETLOGINSTATUS!: Function

  toLogin() {
    this.$router.push({ name: 'login' });
  }

  mounted() {
    loginStatusFn().then((res: any) => {
      console.log(res);
      const { code, profile, bindings, message } = res;
      if (code === 200) {
        this.SETPROFILE(profile);
        this.SETBINDINGS(bindings);
        this.SETLOGINSTATUS(true);
      } else {
        Toast(message);
      }
    })
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
