<template>
  <div>
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            msg:'1234567'
        }
    },
    // 简单接收
    // props:['name','age']

    // 接收的同时对数据进行类型限制
    // props:{
    //   name:String,
    //   age:Number
    // }

    // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    props:{
      name:{
        type:String,//类型
        required:true//是否必须
      },
      age:{
        type:Number,
        default:99//默认值
      }
    }
}
</script>

<style>

</style>