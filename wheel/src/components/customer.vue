<template>
  <div class="c">
    <img src="../assets/cc-icon.png" alt class="kf" @click="showKf">
    <div class="cmark" v-show="showM">
      <div class="mk">
        <div class="mk1" id="cc">联系客服</div>
        <div class="mk2">
          <a href="tel:18201223761">打电话</a>
        </div>
        <div class="cmk3" @click="hideM">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showM: false
    };
  },
  methods: {
    //点击显示遮罩层
    showKf() {
      this.showM = true;
    },
    //点击关闭遮罩层
    hideM() {
      this.showM = false;
    }
  }
};
</script>

<style scope>
.c {
  position: relative;
}
.kf {
  position: absolute;
  top: 45px;
  right: 5px;
  width: 60px;
  height: 60px;
}
.cmark {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}
.mk {
  position: fixed;
  bottom: 100px;
  left: 5%;
  width: 90%;
}
.mk1,
.mk2,
.cmk3 {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background: #fff;
  color: #3aaafc;
  font-size: 0.36rem;
}
.mk1 {
  border-radius: 0.2rem 0.2rem 0 0;
}
.mk2 {
  border-radius: 0 0 0.2rem 0.2rem;
}
.mk2 a {
  display: block;
  color: #3aaafc;
}
.cmk3 {
  border-radius: 0.2rem 0.2rem 0.2rem 0.2rem;
  margin-top: 10px;
  font-weight: bold;
}
</style>
