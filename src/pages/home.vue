<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'sub-home',
  components: {
    HelloWorld
  },
  data() {
    return {
      title: 'vue-app',
      msg: '子页面应用-home'
    }
  },
  watch: {
    title: function (newVal, oldVal) {
      // 输出值
      console.log(newVal, oldVal)
    }
  },
  methods: {
    clickTitle() {
      console.log(this.title)
      console.log(this.$router)
      // this.$router.push({
      //   name: 'home'
      // })
    }
  }
}
</script>

<template>
  <HelloWorld msg="Welcome to Your Vue.js home App" />
</template>

<style lange="less" scoped>
.title {
  padding: 8px;
  text-align: center;
}
</style>
