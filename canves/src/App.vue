<template>
  <canvas ref="canvas"></canvas>
</template>

<script>
import bg from "./assets/bg.jpg";
export default {
  name: "App",
  computed: {
    canvas() {
      return this.$refs.canvas;
    },
    context() {
      console.log(this.$refs.canvas);
      return this.$refs.canvas.getContext("2d");
    }
  },
  methods: {
    async init() {
      let { canvas, context } = this;
      let img = await this.loadImg(bg);
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        0,
        0,
        img.width,
        img.height
      );
      //绘制头像
      let aUrl =
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=17687413,3389183670&fm=26&gp=0.jpg";
      let atar = await this.loadImg(aUrl);
      context.drawImage(atar, 0, 0, atar.width, atar.height, 97, 757, 86, 80);
    },
    loadImg(src) {
      return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = src;
        img.onload = () => {
          resolve(img);
        };
        img.onerror = () => {
          reject();
        };
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style>
html,
body,
canvas {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
