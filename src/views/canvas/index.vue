<template>
  <div class="canvasWrap">
    <div class="imgBox">
      <img :src="url" alt="">
    </div>
    <div class="canvasBox" :style="'width: ' + width + 'px;height: ' + height + 'px;'">
      <canvas id="canva" width="1600" height="1200"></canvas>
    </div>
    <button @click="drawLine">rect</button>
    <button @click="reverseImg">reverseImg</button>
    <button @click="rotate">rotate</button>
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
  width = 400;
  height = 300;
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;
  drawFlag = false;
  url = 'https://fengyuanchen.github.io/cropperjs/images/picture.jpg'

  mounted() {
    const canvas = document.getElementById('canva') as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    canvas.addEventListener('mousedown', this.onTouchStart);
    canvas.addEventListener('mousemove', this.onMousemove);
    canvas.addEventListener('mouseup', this.onMouseup);
    this.canvas = canvas;
    this.drawImage();
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

  reverseImg() {
    const image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = () => {
      console.log('成功');
      const oldWidth = image.naturalWidth || image.width;
      const oldHeight = image.naturalHeight || image.height;
      this.canvas.width = oldWidth;
      this.canvas.height = oldHeight;
      const ord = oldWidth / this.width;
      this.height = oldHeight / ord;
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0)';
      this.ctx.translate(this.canvas.width, 0);
      this.ctx.scale(-1, 1);
      this.ctx.drawImage(image, 0, 0);
      this.url = this.canvas.toDataURL('image/png', 1);
    };
    image.onerror = () => {
      console.log('shibai');
    };
    image.src = this.url;
  }

  rotate() {
    console.log('rotate');
    const image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = () => {
      const oldWidth = image.naturalWidth || image.width;
      const oldHeight = image.naturalHeight || image.height;
      const [currentWidth, currentHeight] = [oldHeight, oldWidth];
      this.canvas.width = currentWidth
      this.canvas.height = currentHeight;
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0)';
      const ord = currentWidth / currentHeight;
      this.width = this.width === 400 ? 400 * ord : 400;
      this.height = this.width === 400 ? 400 / ord : 400;
      this.ctx.translate(this.canvas.width, 0);
      this.ctx.rotate(90 * Math.PI / 180);
      this.ctx.drawImage(image, 0, 0);
      this.url = this.canvas.toDataURL('image/png', 1);
    };
    image.onerror = () => {
      console.log('shibai');
    };
    image.src = this.url;
  }

  drawImage() {
    const image = new Image();
    image.setAttribute('crossOrigin', 'anonymous');
    image.onload = () => {
      console.log('成功');
      const oldWidth = image.naturalWidth || image.width;
      const oldHeight = image.naturalHeight || image.height;
      this.canvas.width = oldWidth;
      this.canvas.height = oldHeight;
      const ord = oldWidth / this.width;
      this.height = oldHeight / ord;
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0)';
      this.ctx.drawImage(image, 0, 0);
      this.url = this.canvas.toDataURL('image/png', 1);
    };
    image.onerror = () => {
      console.log('shibai');
    };
    image.src = this.url;
  }
}
</script>
<style lang="less" scoped>
.canvasWrap {
  .canvasBox {
    display: none;
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
.imgBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
}
img {
  max-width: 200px;
  max-height: 200px;
}
</style>
