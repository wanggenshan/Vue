<template>
  <div class="counter-warp">
    <header class="header">
      <input type="text" class="search" placeholder="你随便搜 搜得到算我输">
      <!-- <div class="counter-nav"> -->
      <scroll-view class="nav-group" scroll-x="true">
        <p v-for="(item, index) in categories" :key="index">{{item.name}}</p>
      </scroll-view>
      <!--      
      </div>-->
    </header>
    <main class="main">
      <div>
        <swiper class="cont" :current="currentTab" circular="true" skip-hidden-item-layout="true">
          <swiper-item>
            <div class="item">
              <img
                src="http://img1.360buyimg.com/n6/jfs/t18307/277/1982585783/154032/4a794a5b/5addcdb8Nbf69f078.jpg"
              >
            </div>
          </swiper-item>
          <swiper-item>
            <div class="item">
              <img
                src="https://img.alicdn.com/bao/uploaded/i1/2786730691/TB2pSh2bw1J.eBjy0FpXXaMoXXa_!!2786730691.jpg"
              >
            </div>
          </swiper-item>
          <swiper-item>
            <div class="item">
              <img
                src="https://img.alicdn.com/bao/uploaded/i4/2838892713/TB2dkJykHFlpuFjy0FgXXbRBVXa_!!2838892713.jpg"
              >
            </div>
          </swiper-item>
        </swiper>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  data={
    // movies: [
    //   "http://img1.360buyimg.com/n6/jfs/t18307/277/1982585783/154032/4a794a5b/5addcdb8Nbf69f078.jpg",
    //   "https://images.nike.com/is/image/DotCom/pwp_sheet2?$NIKE_PWPx3$&$img0=BA6378_395",
    //   "https://img.alicdn.com/bao/uploaded/i4/2838892713/TB2dkJykHFlpuFjy0FgXXbRBVXa_!!2838892713.jpg",
    //   "https://img.alicdn.com/bao/uploaded/i1/2786730691/TB2pSh2bw1J.eBjy0FpXXaMoXXa_!!2786730691.jpg",
    // "https://img.alicdn.com/bao/uploaded/i1/3116278700/TB2I92Rm_qWBKNjSZFAXXanSpXa_!!3116278700.jpg"
    // ]
  }
}
</script>
<script lang="ts" src="./index.ts">
</script>

<style lang="less">
@import "./index";
html,
body,
.counter-warp {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  height: 200rpx;
  width: 100%;
}
.search {
  width: 90%;
  height: 80rpx;
  background: #eee;
  margin-left: 5%;
  border-radius: 20rpx;
  padding-left: 30rpx;
  box-sizing: border-box;
  color: #ccc;
  margin-top: 15rpx;
}
// .counter-nav {
//   width: 100%;
//   height: 90rpx;
//   display: flex;
// }
.nav-group {
  display: flex;
  white-space: nowrap;
  margin-top: 20rpx;
  padding: 0 35rpx;
}
.nav-group p {
  display: inline-block;
  width: 140rpx;
  height: 90rpx;
  margin-right: 40rpx;
}

.main {
  flex: 1;
}
.item {
  width: 90%;
  margin-left: 5%;
  height: 400rpx;
}
.item image {
  width: 100%;
  height: 400rpx;
}
</style>
