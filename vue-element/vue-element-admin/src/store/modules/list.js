import { getUserList } from "../../api/list";

const state = {
  list: [],
  current: 13
};
const mutations = {
  updatalist(state, list) {
    state.list = list;
  }
};
const actions = {
  getUserList({ commit }, query) {
    return new Promise((resolve, reject) => {
      getUserList(query)
        .then(res => {
          console.log("res.....", res);
          console.log("query...", query);
          if (res.data.code == 1) {
            commit("updatalist", res.data.data.list);
            resolve();
          } else {
            reject();
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  // updatauser(commit){
  //   return new Promise((resolve,reject)=>{
  //     updatauser().then(res=>{
  //       if(res.data.code==1){
  //         commit
  //       }
  //     })
  //   })
  // }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
