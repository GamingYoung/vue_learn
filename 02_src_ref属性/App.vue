<template>
  <div id="app">
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDom">点我输出Dom元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from './components/School.vue'

export default {
  name: 'App',
  data(){
    return {
      msg:'1234567'
    }
  },
  components: {
    School
  },
  methods: {
    showDom(){
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      console.log(this.$refs.sch)
    }
  }
}
</script>
