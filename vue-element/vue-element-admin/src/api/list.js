import request from "@/utils/request";

// 获取用户列表
export function getUserList(search = []) {
  let url = "/users/list";
  if (search.length) {
    url += "?" + search.join("&");
  }
  return request({
    url,
    method: "get"
  });
}

// 更新用户信息
export function updateUserInfo(data) {
  return request({
    url: "/users/update",
    method: "post",
    data
  });
}

// 删除用户
export function deleteUser(data) {
  console.log("data...", data);
  return request({
    url: "/users/action",
    method: "delete",
    data
  });
}

// 为用户分配角色
export function modifyRule(data) {
  return request({
    url: "/users/action",
    method: "put",
    data
  });
}
