<template>
  <div class="del">
    <header class="newFlow">
      <div>订单提交</div>
      <div>填写收货地址</div>
      <div>正在办理</div>
      <div>办理完成</div>
    </header>
    <div class="del-wrap">
      <h6 class="adds">收货地址</h6>
      <div class="del-main">
        <span>联系省市</span>
      </div>
      <div class="del-main">
        <span>详细地址</span>
      </div>
      <div class="del-main">
        <span>联系电话</span>
      </div>
      <div class="del-main">
        <span>联系人</span>
      </div>
      <div class="service">
        <packet></packet>
        <customer/>
      </div>
    </div>
    <footer class="del-footer">确认</footer>
  </div>
</template>

<script>
import customer from "../components/customer";
import packet from "../components/packet";
export default {
  components: {
    customer,
    packet
  },
  methods: {}
};
</script>

<style>
html,
body,
.del {
  width: 100%;
  height: 100%;
  background: #eee;
}
.del {
  display: flex;
  flex-direction: column;
}
.del-wrap {
  flex: 1;
  position: relative;
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
.service {
  position: absolute;
  bottom: 2.33rem;
  right: 0;
}
.del-footer {
  width: 100%;
  text-align: center;
  background: #999;
  color: #fff;
  font-size: 0.32rem;
  height: 0.85rem;
  line-height: 0.85rem;
}
.adds {
  font-style: normal;
  text-align: center;
  width: 100%;
  height: 0.45rem;
  color: #999;
}
.del-main {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #fff;
  padding-left: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
</style>
