<template>
  <div>
    <div class="up" @click="clickCity">
      <span>当前驾照签发城市</span>
      <span>{{info.city.join(' ')}}</span>
    </div>
    <van-popup v-model="showCity" position="bottom" :overlay="true">
      <van-picker
        :columns="cityArray"
        @change="cityChange"
        ref="cityPicker"
        @cancel="onCancel"
        show-toolbar
        title="请选择签发城市"
        @confirm="cityConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import { cityList, costList } from "../api/index.js";
export default {
  data() {
    return {
      showCity: false,
      cityList: [],
      cityArray: [],
      info: {
        type: "",
        city: []
      }
    };
  },
  created() {
    this.getCityList();
  },
  methods: {
    async getCityList() {
      let res = await cityList();
      res.data.forEach(item => {
        item.list.forEach(value => {
          delete value.list;
        });
      });
      console.log("res...", res);
      this.cityList = res.data;
      this.cityArray = [
        {
          values: this.cityList.map(item => item.name)
        },
        {
          values: this.cityList[0].list.map(item => item.name)
        }
      ];
    },
    cityChange(picker, values) {
      let index = this.cityList.findIndex(item => item.name == values[0]);
      this.cityArray[1].values = this.cityList[index].list.map(
        item => item.name
      );
      // console.log('picker...', picker, values, this.cityArray, this.$refs.cityPicker, this.cityList[index].list.map(item=>item.name));
      this.$refs.cityPicker.setColumnValues(
        1,
        this.cityList[index].list.map(item => item.name)
      );
    },
    cityConfirm(values) {
      this.info.city = values;
      this.showCity = false;
    },
    onCancel(e) {
      this.showType = false;
    },
    onConfirm(value) {
      console.log("value...", value);
      this.info.type = value;
      this.onCancel();
    },
    clickCity() {
      this.showCity = true;
    }
  }
};
</script>

<style>
</style>
