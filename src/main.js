// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/icon/iconfont.css'
import store from './store'

import {fakeData} from '@/util/fakeData'

Vue.config.productionTip = false
Vue.prototype.$fakeData = fakeData

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,// 挂载
  store,
  components: { App },
  template: '<App/>'
})
