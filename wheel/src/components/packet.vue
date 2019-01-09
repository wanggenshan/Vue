<template>
  <div class="packet">
    <img src="../assets/ee-icon.png" alt class="packetImg" @click="showpK">
    <div class="pmark" v-show="showP">
      <div class="pmk">
        <h3>分享后自己能够获得优惠券</h3>
        <p>自己和好友都能得</p>
        <img src="../assets/coupon.png" alt>
        <div class="btn">
          <button class="z" @click="hidep">给钱都不要</button>
          <button class="g" @click="share">果断分享</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doshare } from "../api/index";
export default {
  created() {
    window["CHELUN_SHARE_DATA_WXTIMELINE"] = {
      title: "大图",
      imgUrl:
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2208786905,3348757257&fm=26&gp=0.jpg",
      type: "photo"
    };
  },
  data() {
    return {
      showP: false
    };
  },
  methods: {
    //点击显示遮罩层
    showpK() {
      this.showP = true;
    },
    //点击关闭遮罩层
    hidep() {
      this.showP = false;
    },
    //点击按钮分享
    share() {
      doshare();
    }
  }
};
</script>

<style>
.packet {
  position: relative;
}
.packetImg {
  position: absolute;
  right: 5px;
  top: -25px;
  width: 60px;
  height: 60px;
}
.pmark {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}
.pmk {
  width: 80%;
  height: 350px;
  background: #fff;
  border-radius: 10px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn {
  position: absolute;
  bottom: 20px;
  width: 100%;
}

.g {
  width: 120px;
  height: 40px;
  border: 0;
  float: right;
  margin-right: 25px;
  background: #3aaffd;
  color: #fff;
  border-radius: 5px;
}
.z {
  width: 120px;
  height: 40px;
  border: 0;
  margin-left: 25px;
  background: #999;
  color: #fff;
  border-radius: 5px;
}
.pmk h3 {
  text-align: center;
  margin-top: 10px;
}
.pmk p {
  text-align: center;
  color: #ccc;
}
.pmk img {
  margin-left: 70px;
  width: 170px;
  height: 160px;
}
</style>
