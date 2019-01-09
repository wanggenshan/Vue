import Vue from "vue";
import Router from "vue-router";
import Faq from "../components/question.vue";
import index from "../page/index.vue";
import delivery from "../page/delivery.vue";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/index",
      component: index
    },
    {
      path: "/faq",
      component: Faq
    },
    {
      path: "/delivery",
      component: delivery
    },
    {
      path: "*",
      component: index
    }
  ]
});
