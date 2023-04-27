<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  name: 'sub-about',
  data() {
    return {
      title: 'vue-app',
      msg: '子页面应用-about'
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
  <div class="title" @click="clickTitle">{{ title }} - {{ msg }}</div>
</template>

<style lange="less" scoped>
.title {
  padding: 8px;
  text-align: center;
}
</style>
