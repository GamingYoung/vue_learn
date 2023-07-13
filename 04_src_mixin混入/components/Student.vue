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
            msg:'1234567',
            name:'123',
            age:123
        }
    },
}
</script>

<style>

</style>