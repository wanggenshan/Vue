import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// 引入modules
import index from './modules/index'

export default new Vuex.Store({
  modules: {
    index
  },
  plugins: [createLogger()]
})
