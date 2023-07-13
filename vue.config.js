// 使用vue inspect > output.js可以查看Vue脚手架的默认配置
// 使用vue.config.js可以对脚手架进行个性化定制，文档：https://cli.vuejs.org/zh
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})
