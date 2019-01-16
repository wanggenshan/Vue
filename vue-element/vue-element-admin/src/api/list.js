import request from "@/utils/request";
//添加列表
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
//更新列表
// export function updatauser(data) {
//   let url = "/users/update";

//   return request({
//     url,
//     method: "post",
//     data
//   });
// }
