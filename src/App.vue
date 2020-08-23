<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { loginStatusFn } from '@/api';
import { Toast } from 'vant';

const userState = namespace('user');

@Component({
  components: {}
})
export default class App extends Vue {
  @userState.Mutation('SETPROFILE') SETPROFILE!: Function
  @userState.Mutation('SETBINDINGS') SETBINDINGS!: Function
  @userState.Mutation('SETLOGINSTATUS') SETLOGINSTATUS!: Function

  mounted() {
    loginStatusFn().then((res: any) => {
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

<style>

</style>
