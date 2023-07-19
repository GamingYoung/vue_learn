# 笔记

## 关于不同版本的Vue：
    1.Vue.js与vue.runtime.xxx.js的区别：
        （1）vue.js是完整版的Vue，包含：核心功能+模版解析器
        （2）vue.runtime.xxx.js是运行版的Vue，只包含：核心功能
    2.因为vue.runtime.xxx.js没有模版解析器，所以不能使用template配置项，需要使用render函数接收creatElement函数去指定具体内容

## vue.config.js配置文件
    // 使用vue inspect > output.js可以查看Vue脚手架的默认配置
    // 使用vue.config.js可以对脚手架进行个性化定制，文档：https://cli.vuejs.org/zh

## ref属性
    1.被用来给元素或子组件注册引用信息（id的替代者）
    2.应用在html标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象
    3.使用方式：
        打标识：<h1 ref="xxx">...</h1> 或<School ref="xxx"></School>
        获取：this.$refs.xxx

## 配置项props
    功能：让组件接收外部传过来的数据
    1.传递数据：<Demo name="xxx"/>
    2.接收数据：
        第一种方式（只接收）：props:['name']
        第二种方式（限制类型）：props:{name:String}
        第三种方式（限制类型、限制必要性、指定默认值）:
            props:{
                name:{
                    type:String,//类型
                    required:true,//必要性
                    default:'老王'//默认值
                }
            }
    备注：props是只读的，修改会有警告，如果必须修改就拷贝一份

## mixin（混入）
    功能：可以把多个组件共用的配置提取成一个混入对象
    使用方式：
        第一步定义混合
        {
            data(){...},
            methods:{...}
            ....
        }
        第二步使用混入
            （1）全局混入：Vue.mixin(xxx)
            （2）局部混入：mixins:['xxx']


## 插件
    功能：用于增强Vue
    本质：包含intall方法的一个对象，install的第一个参数是Vue。第二个以后的参数是插件使用者传递的数据
    定义插件：
        对象.install = function (Vue. options) {
            // 1.添加全局过滤器
            Vue.filter()

            // 2.添加全局指令
            Vue.directive()

            // 3.配置全局混入
            Vue.mixin()

            // 4.添加实例方法
            Vue.prototype.$mymethod = function(){}
            Vue.prototype.$myProperty = xxxx
        }
    使用插件：Vue.use()

## scoped样式
    作用：让样式在局部生效，防止冲突
    写法：<style scoped>

## 总结TodoList案例
    1.组件化编码流程：
        1.拆分静态组件：组件要按照功能点拆分，命名不要与Html元素冲突
        2.实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件再用：
            1.一个组件再用：放在组件自身即可
            2.一些组件再用：放在他们的共同的父组件上（状态提升）
        3.实现交互：从绑定事件开始
    2.props适用于：
        1.父组件==>子组件通信
        2.子组件==>父组件通信（要求父先给子一个函数）
    3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props不可修改

## 浏览器本地存储webStorage
    1.JSON.stringfy():将Json文件以字符串的形式存储；
    2.存储内容大小一般支持5M左右（不同浏览器可能不一样）
    3.浏览器通过Window.sessionStorage和Window.localStorage属性来实现本地存储机制
    4.相关API：
        1.xxStorage.setItem('key', 'value');添加存储
        2.xxStorage.getItem('key');返回键名对应的值
        3.xxStorage.removeItem('key');删除该健
        4.xxStorage.clear();清空存储中所有数据
    5.SessionStorage存储的内容会随着浏览器窗口关闭而消失；LocalStorage需是手动清除才会消失
    6.xxStorage.getItem(xxx)如果xxx对应的value获取不到，那么getItem的返回值是null

