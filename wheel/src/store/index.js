import Vuex from "vuex";
import Vue from "vue";
import createLogger from "vuex/dist/logger";
// 导入模块
import upload from "./modules/upload.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    upload
  },
  plugins: [createLogger()]
});
