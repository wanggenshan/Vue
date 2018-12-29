import Vue from "vue";
import App from "./App.vue";
import Mint from "mint-ui";
Vue.use(Mint);
new Vue({
  el: "#app",
  render: h => h(App)
});
