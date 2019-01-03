import JSBridge from "../until/JSBridge";
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
