import {
  getUserList,
  updateUserInfo,
  deleteUser,
  modifyRule
} from "@/api/list";

const state = {
  list: [],
  current: 1
};

const mutations = {
  updateList(state, list) {
    state.list = list;
  }
};

const actions = {
  // 获取用户列表
  GetUserList({ commit }, query) {
    return new Promise((resolve, reject) => {
      getUserList(query)
        .then(res => {
          if (res.data.code == 1) {
            commit("updateList", res.data.data.list);
            resolve();
          } else {
            reject();
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // 更新用户信息
  UpdateUserInfo({ commit }, data) {
    return new Promise((resolve, reject) => {
      updateUserInfo(data)
        .then(res => {
          console.log("res...", res);
          if (res.data.code == 1) {
            resolve(res.data.msg);
          } else {
            reject(res.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // 删除用户
  DeleteUser({ commit }, data) {
    return new Promise((resolve, reject) => {
      deleteUser(data)
        .then(res => {
          // console.log("res...", res);
          if (res.data.code == 1) {
            resolve(res.data.msg);
          } else {
            reject(res.data.msg);
          }
          i;
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // 分配角色
  ModifyRule({ commit }, data) {
    return new Promise((resolve, reject) => {
      modifyRule(data)
        .then(res => {
          console.log("res...", res);
          if (res.data.code == 1) {
            resolve(res.data.msg);
          } else {
            reject(res.data.msg);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
