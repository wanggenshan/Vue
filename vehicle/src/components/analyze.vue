<template>
  <div>
    <ul class="data-list">
      <li>
        <dl class="dlst">
          <dt>
            <img src="http://picture.eclicks.cn/g2/l/2018/12/29/8b64b3c45968151c_482_315.png" alt>
          </dt>
          <dd>
            <h2>2018中国驾驶教练员生存状态大数据报告</h2>
            <span class="y">市场动态</span>
            <span class="r">原创</span>
            <p>教练员的真实生存状态和工作现状</p>
            <span>2018/12/29</span>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.data-list {
  list-style: none;
}
.y {
  font-size: 12px;
  color: #f90;
  border: 1px solid #f90;
  padding: 2px;
  margin-right: 0;
}
.r {
  font-size: 12px;
  color: #f66;
  border: 1px solid #f66;
  padding: 2px;
  margin-left: 5px;
}
.dlst {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.dlst dt img {
  width: 242px;
  height: 158px;
  margin-top: 20px;
  border-radius: 10px;
}
.dlst dl {
  flex: 1;
  height: 241px;
}
</style>
