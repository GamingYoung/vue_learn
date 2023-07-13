<template>
  <div id="app">
    <Student name="张三" :age="12"></Student>
    <School></School>
  </div>
</template> 

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  data(){
    return {
      msg:'1234567'
    }
  },
  components: {
    School,
    Student
  }
}
</script>
