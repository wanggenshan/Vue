// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "@/store/index";
import "mint-ui/lib/style.css";
import mintUI from "mint-ui";
Vue.config.productionTip = false;
Vue.use(mintUI);
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
