import JSBridge from "../until/JSBridge";

function sendRequest(url, method = "GET", data = {}) {
  let params = {
    method
  };
  // 判断如果是一个post请求，带上请求体信息
  if (method == "POST") {
    params.body = JSON.stringify(data);
  }
  // 判断请求查询url是否携带query
  if (url.indexOf("?") == -1) {
    url += `?_=${+new Date()}`;
  } else {
    url += `&_=${+new Date()}`;
  }
  // 拼接登陆态token
  return fetch(url, params)
    .then(res => res.json())
    .then(body => body);
}

export let uploadimg = type => {
  return new Promise((resolve, reject) => {
    JSBridge.invoke("device", "chooseImage", {
      type,
      chooseCallbackName: function(res) {
        resolve(res);
      }
    });
  });
};
// 获取驾照签发城市
export let cityList = () => {
  return sendRequest("https://chezhu.eclicks.cn/ExchangeJiaZhao/cityList");
};

// 获取可补换城市
export let costList = (...params) => {
  return sendRequest(
    `/api/ExchangeJiaZhao/getCostList?order_type=${params.type}&city_id=${
      params.city_id
    }&province_id=${params.pro_id}`
  );
};
