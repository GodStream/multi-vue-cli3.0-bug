import Vue from 'vue'
import FastClick from 'fastclick'
import './plugins/cube-ui'
import './plugins/vant'
import App from './App.vue'
import 'amfe-flexible'

Vue.config.productionTip = false

FastClick.attach(document.body)

new Vue({
  render: h => h(App)
}).$mount('#app')
