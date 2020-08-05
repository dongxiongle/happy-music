<template>
  <div class="canvasWrap">
    <div class="canvasBox">
      <canvas id="canva" width="1600" height="200"></canvas>
    </div>
    <button @click="drawLine">rect</button>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {},
  props: {}
})
export default class CanvasIndex extends Vue {
  name = 'canvas';
  ctx!: CanvasRenderingContext2D;
  drawFlag = false;

  mounted() {
    const canvas = document.getElementById('canva') as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.addEventListener('mousedown', this.onTouchStart);
    canvas.addEventListener('mousemove', this.onMousemove);
    canvas.addEventListener('mouseup', this.onMouseup);
  }

  onTouchStart() {
    this.drawFlag = true;
    console.log('mousedown');
  }

  onMousemove(e: Event) {
    if (this.drawFlag) {
      console.log(e);
    }
  }

  onMouseup() {
    this.drawFlag = false;
    console.log('mouseup');
  }

  drawLine() {
    const { ctx } = this;
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
  }
}
</script>
<style lang="less" scoped>
.canvasWrap {
  // width: 100vw;
  // height: 100vh;
  // position: fixed;
  // top: 0;
  // left: 0;
  // background: rgba(0, 0, 0, 0.6);
  .canvasBox {
    width: 400px;
    height: 300px;
    border: 1px solid #ddd;
    margin: 0 auto;
    background: white;
    background-image: linear-gradient(45deg, rgba(0,0,0,0.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,0.25) 0), linear-gradient(45deg, rgba(0,0,0,0.25) 25%, transparent 0, transparent 75%, rgba(0,0,0,0.25) 0);
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
  }
  canvas {
    width: 100%;

  }
}
</style>
