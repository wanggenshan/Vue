<template>
  <div class="counter-warp">
    <header class="header">
      <input type="text" class="search" placeholder="你随便搜 搜得到算我输">
      <i-tabs :current="current" scroll @change="handleChange" color="#000">
        <i-tab title="热门推荐" :key="-1"></i-tab>
        <i-tab v-for="(item, index) in categories" :key="index" :title="item.name"></i-tab>
      </i-tabs>
    </header>
    <main class="main">
      <img :src="currentTab.cover_img" @click="coverClick" mode="widthFix" class="swiper-img">
      <div class="counter-icon">
        <div v-for="(item, index) in currentTab.children" :key="index">
          <img :src="item.image.url" mode="widthFix">
          <p>{{item.name}}</p>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts" src="./index.ts">
</script>

<style lang="less">
html,
body,
.counter-warp {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.counter-icon {
  display: flex;
  flex-wrap: wrap;
  font-size: 24rpx;
  color: #ccc;
  padding: 0 5%;
  box-sizing: border-box;
}
.counter-icon div {
  width: 20%;
}
.counter-icon image {
  width: 100rpx;
  height: 100rpx;
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

.swiper-img {
  margin-left: 8%;
}
</style>
