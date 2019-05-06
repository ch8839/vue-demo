// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import store from './store'
import '@/permission.js'
import '../env'
Vue.config.productionTip = false
console.log('process.env.BASE_API1', process.env)
let http = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000 // 请求超时时间
})
Vue.prototype.$http = http
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
