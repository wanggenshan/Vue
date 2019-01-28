import { Vue, Component } from "vue-property-decorator";

import { mapState, mapActions } from "vuex";

// 必须使用装饰器的方式来指定component
@Component({
  computed: mapState({
    categories: state => state["index"].categories,
    products: state => state["index"].products
  }),
  methods: mapActions({
    getCategories: "index/getCategories",
    getCategoryProduct: "index/getCategoryProduct"
  })
})
class Index extends Vue {
  ver: number = 123;
  current: any = 0;

  get currentTab() {
    return this["categories"][this.current];
  }

  onShow() {
    // 小程序 hook
    this["getCategories"]().then(() => {
      this.getProduct();
    });
  }

  handleChange({ target }) {
    console.log("target...", target);
    this.current = target.key;
    this.getProduct();
  }

  getProduct() {
    let id = this["categories"][this.current].id;
    this["getCategoryProduct"](id);
  }

  goSearch() {
    wx.navigateTo({
      url: "/pages/search/main"
    });
  }
}

export default Index;
