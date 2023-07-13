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