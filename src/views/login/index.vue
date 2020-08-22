<template>
  <div class="loginWrap">
    <topbar title="手机号登录" :fixed="true"/>
    <p>未注册手机号登录后将自动创建账号</p>
    <van-form class="formWrap">
      <van-field class="formItem" v-model="phone" name="手机号" label="手机号" maxlength="11" placeholder="请输入手机号" />
      <van-field class="formItem" type="password" v-model="password" name="password" label="密码" placeholder="请输入密码" />
      <van-button round class="loginBtn" block @click="toLogin">登录</van-button>
    </van-form>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import TopBar from '@/components/topBar/index.vue';
import { Toast } from 'vant';

import { phoneLoginFn } from '@/api';

const userState = namespace('user');

@Component({
  components: {
    topbar: TopBar
  }
})
export default class Login extends Vue {
  @userState.Mutation('SETLOGINTYPE') SETLOGINTYPE!: Function
  @userState.Mutation('SETACCOUNT') SETACCOUNT!: Function
  @userState.Mutation('SETTOKEN') SETTOKEN!: Function
  @userState.Mutation('SETPROFILE') SETPROFILE!: Function
  @userState.Mutation('SETBINDINGS') SETBINDINGS!: Function
  @userState.Mutation('SETLOGINSTATUS') SETLOGINSTATUS!: Function

  name = 'login';
  phone = '';
  password = '';
  phonetest = /^1[3-9]\d{9}$/;
  passwordtest = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,16}$/;

  toLogin() {
    const { phone, password } = this;
    if (!phone) {
      Toast('请输入手机号');
      return;
    }
    if (!this.phonetest.test(phone)) {
      Toast('请输入11位手机号');
      return;
    }
    if (!password) {
      Toast('请输入密码');
      return;
    }
    if (!this.passwordtest.test(password)) {
      Toast('请输入8-16位字母数字组合');
      return;
    }
    phoneLoginFn(phone, password).then((res: any) => {
      const { code, loginType, account, token, profile, bindings, cookie, message } = res;
      if (code === 200) {
        document.cookie = cookie;
        this.SETLOGINTYPE(loginType);
        this.SETACCOUNT(account);
        this.SETTOKEN(token);
        this.SETPROFILE(profile);
        this.SETBINDINGS(bindings);
        this.SETLOGINSTATUS(true);
      } else {
        Toast(message);
        this.SETLOGINSTATUS(false);
      }
    });
  }
}
</script>
<style lang="less" scoped>
.loginWrap {
  background: #fff;
  padding-top: 50px;
}
p {
  font-size: 12px;
  line-height: 20px;
  padding-left: 30px;
  color: #bbb;
}
.formWrap {
  width: 100%;
  padding: 10px 20px;
  box-sizing: border-box;
}
.formItem {
  border-bottom: 1px solid #ddd;
}
.loginBtn {
  margin-top: 20px;
  background: @bgred;
  color: #fff;
  letter-spacing: 2px;
}
</style>
