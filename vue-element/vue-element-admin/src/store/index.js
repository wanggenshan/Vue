import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

// 数据子模块
import app from "./modules/app";
import errorLog from "./modules/errorLog";
import permission from "./modules/permission";
import tagsView from "./modules/tagsView";
import user from "./modules/user";
import getters from "./getters";
import list from "./modules/list";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    tagsView,
    user,
    list
  },
  getters,
  plugins: [createLogger()]
});

export default store;
