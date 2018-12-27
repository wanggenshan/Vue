//定义数据
const state = {
  num: 100
};
//模块发生同步改变
const mutations = {
  change(state, action) {
    state.num = action.payload == "+" ? state.num + 1 : state.num - 1;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
