import demo1 from "../../assets/id-a.png";
import demo2 from "../../assets/id-b.png";
import demo3 from "../../assets/licence-a.png";
import demo4 from "../../assets/licence.png";
import demo5 from "../../assets/photo.png";
const state = {
  list: [
    {
      src: "",
      demo: demo1,
      desc: "身份证正面"
    },
    {
      src: "",
      demo: demo2,
      desc: "身份证反面"
    },
    {
      src: "",
      demo: demo3,
      desc: "驾驶证正页"
    },
    {
      src: "",
      demo: demo4,
      desc: "驾驶证副页"
    },
    {
      src: "",
      demo: demo5,
      desc: "白底照片"
    }
  ]
};
const mutations = {
  updateList(state, payload) {
    state.list[payload.index].src = payload.src;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
