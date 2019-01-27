import { Vue, Component } from 'vue-property-decorator'
import Card from '@/components/card.vue' // mpvue目前只支持的单文件组件
import CompB from '@/components/compb.vue' // mpvue目前只支持的单文件组件
const debug = require('debug')('log:Index')

import {mapState, mapActions} from 'vuex';

// 必须使用装饰器的方式来指定component
@Component({
  components: {
    Card,
    CompB, //注意，vue的组件在template中的用法，`CompB` 会被转成 `comp-b`
  },
  computed: mapState({
    categories: state=>state['index'].categories
  }),
  methods: mapActions({
    getCategories: 'index/getCategories'
  })
})
class Index extends Vue {
  ver: number = 123

  onShow() { // 小程序 hook
    debug('onShow')
    this['getCategories']();
  }

  mounted() { // vue hook
    debug('mounted')
  }

  goVuex(){
    wx.switchTab({ url: '/pages/my/main' });
  }
}

export default Index
