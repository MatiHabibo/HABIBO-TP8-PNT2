import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

import './form'
import { router } from './router'
import './axios'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
