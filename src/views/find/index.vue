<template>
  <div>
    <h3>{{name}}</h3>
    <p class="text">xxxxxxxxxxx</p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class FindIndex extends Vue {
  name = 'findIndex';
  @Prop() msg!: string;
}
</script>
<style lang="less" scoped>
.text {
  background-image: linear-gradient(to right, rgba(241, 191, 191, 0.6), rgba(197, 39, 245, 0.6));
  // background-color: rgba(0,0,0,0.6);
  background-size: 100px;
  background-repeat: no-repeat;
  background-clip: text;
  // -webkit-text-fill-color: transparent;
  color: transparent;
  line-height: 40px;
  font-size: 30px;
  animation: identifier 2s linear infinite;
  width: 200px;
  margin: 0 auto;
}
@keyframes identifier {
  0% {
    background-position-x: -100px;
  }

  100% {
    background-position-x: 200px;
  }
}
</style>
