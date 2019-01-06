import Vue from "vue";
import Router from "vue-router";

import analyze from "../components/analyze.vue";
import tendency from "../components/tendency.vue";
import study from "../components/study.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/analyze",
      name: "analyze",
      component: analyze
    },
    {
      path: "/tendency",
      name: "tendency",
      component: tendency
    },
    {
      path: "/study",
      name: "study",
      component: study
    }
  ]
});
