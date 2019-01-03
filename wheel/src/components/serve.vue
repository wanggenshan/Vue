<template>
  <div>
    <div @click="showadd" class="up">
      <span>服务类型</span>
      <span>{{info}}</span>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="true">
      <van-picker
        :columns="couls"
        @cancel="onCancel"
        show-toolbar
        title="请选择服务类型"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      couls: ["补驾照", "换驾照"],
      info: "请选择"
    };
  },
  methods: {
    showadd() {
      this.show = true;
    },
    onCancel(e) {
      this.showType = false;
    },

    onConfirm(value) {
      this.info = value;
      this.show = false;
    }
  }
};
</script>
<style scoped>
.inpt {
  float: right;
  line-height: 0.9rem;
}
.inpt span {
  color: #999;
}
</style>
