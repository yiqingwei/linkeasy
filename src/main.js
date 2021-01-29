// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Ant from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import OuiLine from '@/components/OuiLine.vue'

Vue.config.productionTip = false
Vue.use(Ant)

// Vue.component('OuiLine', OuiLine)
// Vue.component('OuiDashboard', OuiDashboard)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
