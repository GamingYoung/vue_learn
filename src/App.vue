<template>
  <div id="app">
    <img src="./assets/logo.png" alt="logo">
    <School/>
    <Student/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
  name: 'App',
  components: {
    Student,
    School
  }
}
</script>
