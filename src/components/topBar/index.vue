<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :right-text="rightText"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    :fixed="fixed"
  />
</template>
<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class TopBar extends Vue {
  name = 'TopBar';
  @Prop() title!: string;
  @Prop() leftText!: string;
  @Prop() rightText!: string;
  @Prop() leftFn!: any;
  @Prop() rightFn!: any;
  @Prop() fixed!: boolean;

  onClickLeft() {
    if (typeof this.leftFn === 'function') {
      this.leftFn();
    } else {
      this.$router.go(-1);
    }
  }

  onClickRight() {
    if (typeof this.rightFn === 'function') {
      this.rightFn();
    }
  }
}
</script>
