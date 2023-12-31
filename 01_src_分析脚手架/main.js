/*
  该文件是整个项目的入口文件
*/
// 引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from './App.vue'

// 关闭vue的生产提示
Vue.config.productionTip = false

// 创建vue的实例对象---vm
new Vue({
  /*
  关于不同版本的Vue：
    1.Vue.js与vue.runtime.xxx.js的区别：
        （1）vue.js是完整版的Vue，包含：核心功能+模版解析器
        （2）vue.runtime.xxx.js是运行版的Vue，只包含：核心功能
    2.因为vue.runtime.xxx.js没有模版解析器，所以不能使用template配置项，需要使用render函数接收creatElement函数去指定具体内容
   */
  render: h => h(App),
}).$mount('#app')
