import Vue from "vue";
import Router from "vue-router";
import Faq from "../components/question.vue";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/faq",
      component: Faq
    }
  ]
});
