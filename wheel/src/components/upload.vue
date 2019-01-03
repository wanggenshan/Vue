<template>
  <ul class="ullt">
    <li v-for="(item,index) in list" :key="index" @click="click(index)">
      <img v-if="item.src" :src="item.src">
      <img v-else :src="addImg">
      <p>{{item.desc}}</p>
    </li>
    <div class="mask" v-show="showM">
      <img :src="current.demo">
      <div class="mask-btn">
        <div class="mk1" @click="upload(1)">拍照</div>
        <div class="mk2" @click="upload(2)">相册</div>
        <div class="mk3" @click="hideM">取消</div>
      </div>
    </div>
  </ul>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { uploadimg } from "../api/index.js";
import add from "../assets/add.png";
export default {
  name: "upload",
  data() {
    return {
      current: {},
      showM: false
    };
  },
  computed: {
    ...mapState({
      list: state => state.upload.list
    }),
    addImg() {
      return add;
    }
  },
  methods: {
    ...mapMutations({
      updatedList: "upload/updatedList"
    }),
    //点击显示遮罩层
    click(index) {
      this.current = this.list[index];
      this.showM = true;
    },
    //点击关闭遮罩层
    hideM() {
      this.showM = false;
    },
    //点击拍照
    async upload(type) {
      let res = await uploadimg(type);
      if (res.result == 1) {
        this.updateList({
          src: res.data.url,
          index: this.list.findIndex(item => item == this.current)
        });
        this.showMask = false;
      } else {
        alert("上传图片失败");
      }
      console.log("res...", res);
    }
  }
};
</script>
<style scoped>
.mask {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
}
.ullt {
  width: 100%;
  height: 1.8rem;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.05rem;
  background: #fff;
}
.ullt li {
  flex: 1;
  position: relative;
}

.ullt img {
  border: 1px solid #ccc;
  padding: 0.05rem 0.2rem;
  box-sizing: border-box;
}
.ullt p {
  line-height: 0.7rem;
  text-align: center;
  position: absolute;
  top: 0.8rem;
}
.mask-btn {
  position: fixed;
  bottom: 0;
  left: 5%;
  width: 90%;
}
.mk1,
.mk2,
.mk3 {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  background: #fff;
  color: #3aaafc;
}
.mk1 {
  border-radius: 0.2rem 0.2rem 0 0;
}
.mk2 {
  border-radius: 0 0 0.2rem 0.2rem;
}
.mk3 {
  border-radius: 0.2rem 0.2rem 0 0;
  margin-top: 10px;
}
.mask img {
  width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
