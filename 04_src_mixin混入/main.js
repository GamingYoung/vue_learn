import Vue from 'vue'
import App from './App.vue'
import {c} from './mixinGlobal'

Vue.config.productionTip = false
Vue.mixin(c)

new Vue({
  render: h => h(App),
}).$mount('#app')
