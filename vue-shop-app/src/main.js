import Vue from 'vue'

import VueI18n from 'vue-i18n'
import Vant from 'vant';
import 'vant/lib/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
axios.defaults.baseURL = "http://localhost:3009/"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(VueI18n) // 通过插件的形式挂载

Vue.use(Vant);

Vue.config.productionTip = false
vue.prototype.$addr = axios

new Vue({
  router,
  store,  //相当于stroe:stroe ,注册后，子组件使用this.$store访问
  render: h => h(App)
}).$mount('#app')
