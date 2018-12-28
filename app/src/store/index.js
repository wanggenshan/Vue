import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import creatLogger from "vuex/dist/logger";
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    app
  },
  plugins: [creatLogger()]
});
