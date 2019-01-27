import {getCategories} from '@/data/index'

const state = {
  categories: []
}

const mutations = {
  updateCategories(state, categories):void{
    state.categories = categories;
  }
}

const actions = {
  async getCategories({commit}){
    let data = await getCategories();
    console.log('data...', data);
    commit('updateCategories', data.data);
  }
}

export default {
  namespaced: true,
  mutations,
  state,
  actions
}
