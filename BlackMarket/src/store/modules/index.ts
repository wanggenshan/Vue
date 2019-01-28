import { getCategories, getCategoryProduct } from "@/data/index";

const state = {
  categories: [],
  products: {}
};

const mutations = {
  updateCategories(state, categories): void {
    state.categories = categories;
  },
  updateCategoryProduct(state, products) {
    state.products = products;
  }
};

const actions = {
  // 获取目录
  async getCategories({ commit }) {
    let data = await getCategories();
    console.log("data...", data);
    commit("updateCategories", data.data);
  },

  // 获取详情
  async getCategoryProduct({ commit }, id) {
    let data = await getCategoryProduct(id);
    console.log("data...", data);
    commit("updateCategoryProduct", data.data);
  }
};

export default {
  namespaced: true,
  mutations,
  state,
  actions
};
