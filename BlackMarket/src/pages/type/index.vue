<template>
  <div class="counter-warp">
    <header class="header">
      <input type="text" class="search" placeholder="你随便搜 搜得到算我输">
    </header>
    <main class="type-main">
      <ul class="left">
        <li>手机数码</li>
        <li>电脑外设</li>
        <li>影音娱乐</li>
        <li>居家生活</li>
        <li>智能设备</li>
        <li>户外运动</li>
        <li>酷玩前线</li>
        <li>家用电器</li>
      </ul>
      <div class="right"></div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
html,
body,
.counter-warp {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  height: 100rpx;
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
.type-main {
  flex: 1;
  display: flex;
}
.left {
  width: 30%;
  height: 100%;
  background: #ccc;
}
.left li {
  text-align: center;
  line-height: 90rpx;
  height: 90rpx;
}
.right {
  width: 70%;
  height: 100%;
  background: #eee;
}
</style>
