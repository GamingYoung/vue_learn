<template>
    <div class="school">
      <h2>学校名称：{{ name | mySlice}}</h2>
      <h2>学校地址：{{ address }}</h2>
      <button @click="showName">点我测试hello方法</button>
    </div>
  </template>
  
  <script>
  export default {
      name:'Student',
      data(){
          return {
              name:'尚硅谷atguigu',
              address:'北京昌平'
          }
      },
      methods:{
        showName(){
            this.hello()
        }
      },
  }
  </script>
  
  <style>
    .school {
        background-color: orange;
    }
  </style>