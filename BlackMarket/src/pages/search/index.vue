<template>
  <div class="search-wrap">
    <header class="header">
      <input type="text" class="search" placeholder="你随便搜 搜得到算我输" @click="goback">
    </header>
    <main class="search-main"></main>
  </div>
</template>

<script lang='ts' src='./index.ts'>
</script>

<style>
html,
body,
.search-wrap {
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
.search-main {
  flex: 1;
}
</style>
