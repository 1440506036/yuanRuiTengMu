import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './util/rem'

// host: '192.168.31.52',
//   port: 8080,

Vue.config.productionTip = false
Vue.use(ElementUI)
// moment
Object.defineProperty(Vue.prototype, '$moment', {
  value: moment
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
