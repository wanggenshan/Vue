import { resolve } from "url";
import { rejects } from "assert";

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
//异步
// const actions = {
//   changes({ commit }, action) {
//     return new Promise((resolve, rejects) => {
//       setTimeout(() => {
//         commit({
//           type: "changes",
//           action
//         });
//         resolve();
//       }, 1000);
//     });
//   }
// };
export default {
  namespaced: true,
  state,
  // actions,
  mutations
};
