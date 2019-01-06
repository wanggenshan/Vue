<template>
  <div id="app">
    <a>
      <img src="./assets/banner.png" alt class="header-img">
    </a>
    <header class="header">
      <a class="logo">
        <img src="https://www.chelun.com/static/dist/img/logo.png" alt>
      </a>
      <ul class="menu clearfix">
        <li>
          <h3>产品</h3>
        </li>
        <li>
          <h3>关于我们</h3>
        </li>
        <li>
          <h3>大数据</h3>
        </li>
        <li>
          <h3>新闻</h3>
        </li>
        <li>
          <h3>招聘</h3>
        </li>
        <li>
          <h3>商城</h3>
        </li>
        <li>登入/注册</li>
      </ul>
    </header>
    <nav class="nav">
      <router-link to="/analyze">分析评论</router-link>
      <router-link to="/tendency">趋势榜单</router-link>
      <router-link to="/study">研究报告</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App"
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
}
.header {
  width: 100%;
  height: 80px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.header-img {
  width: 100%;
  height: 40%;
}

.logo img {
  margin-left: 20px;
  margin-top: 31px;
  width: 120px;
  height: 39px;
}
.menu {
  list-style: none;
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.menu li {
  line-height: 40px;
}
.nav {
  width: 100%;
  height: 70px;
  line-height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav a {
  display: block;
  width: 30%;
  color: #ccc;
  font-size: 20px;
  text-decoration: none;
}
</style>
