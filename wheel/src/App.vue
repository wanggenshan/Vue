<template>
  <div id="app">
    <header class="newFlow">
      <div>订单提交</div>
      <div>填写收货地址</div>
      <div>正在办理</div>
      <div>办理完成</div>
    </header>
    <main class="wrap">
      <div class="newBanner">
        <mt-swipe :show-indicators="false">
          <mt-swipe-item>
            <img src="localhost:8080/src/assets/banner.png" alt>
          </mt-swipe-item>
        </mt-swipe>
      </div>

      <div class="upload">
        <div>
          <span>服务类型</span>
          <span></span>
        </div>
        <div>
          <span>当前驾照签发城市</span>
          <input type="text" placeholder="请选择签发地">
        </div>
        <div>
          <span>可补换的签发城市</span>
          <input type="text" placeholder="请选择补换地">
        </div>
        <div>
          <span>服务费</span>
          <span class="price">￥399</span>
        </div>
      </div>
      <div class="rect">
        <span>优惠</span>
        <span class="r">></span>
      </div>
    </main>
    <footer class="footer">
      <div class="pay">
        实付:
        <b>￥399</b>
      </div>
      <div class="payment">立即支付</div>
    </footer>
    <van-popup v-model="show">内容</van-popup>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Popup } from "mint-ui";
import Vue from "vue";
import popup from "vant/lib/popup";
import "vant/lib/button/style";
Vue.component(Popup.name, Popup);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: "app",
  data() {
    return {
      show: true
    };
  },
  methods: {
    popupVisible() {
      this.flag = true;
    }
  }
};
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: #eee;
}
#app {
  display: flex;
  flex-direction: column;
}
.wrap {
  flex: 1;
}
.newFlow {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.28rem;
  color: #3aaffd;
  flex-wrap: wrap;
  background: #fff;
}
.newFlow div {
  flex: 1;
  width: 20%;
  height: 100%;
  line-height: 1rem;
  text-align: center;
}
.active {
  background: #3aaffd;
  color: #fff;
}
.newBanner {
  width: 100%;
  height: 2.2rem;
}

.newBanner img {
  width: 100%;
  height: 100%;
}
.upload {
  width: 100%;
  margin-top: 0.2rem;
  background: #fff;
  padding: 0 2%;
  box-sizing: border-box;
  font-size: 0.3rem;
}
.upload div {
  height: 0.9rem;
  border-bottom: 1px solid #eee;
  /* line-height: 0.9rem; */
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.upload input {
  border: 0;
}
.price {
  float: right;
  margin-right: 0.1rem;
  color: red;
}
/* .r {
} */
.rect {
  width: 100%;
  padding: 0 2%;
  height: 0.9rem;
  background: #fff;
  margin-top: 0.2rem;
  /* overflow: hidden; */
  box-sizing: border-box;
}
.rect span {
  line-height: 0.9rem;
}
.r {
  float: right;
  margin-right: 0.5rem;
  font-size: 20px;
  color: #ccc;
}
.footer {
  width: 100%;
  height: 0.85rem;
  display: flex;
  flex-wrap: wrap;
  line-height: 0.85rem;
}
.pay {
  width: 70%;
  background: #fff;
  padding-left: 0.2rem;
  box-sizing: border-box;
}
.pay b {
  color: red;
}
.payment {
  width: 30%;
  text-align: center;
  background: #999;
  color: #fff;
  font-size: 0.32rem;
}
</style>
