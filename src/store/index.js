import Vue from 'vue'
import Vuex from 'vuex'
// Vuex模块化
import tab from './tab'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tab
  }
})
