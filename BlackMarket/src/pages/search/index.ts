import { Vue, Component } from "vue-property-decorator";

import { mapState, mapActions } from "vuex";
@Component({})
export default class search extends Vue {
  goback() {
    wx.navigateBack();
  }
}
