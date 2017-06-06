<template>
  <div>
    <div>{{ title }}</div>
    <div>负责人：{{ people }}</div>
    <router-link :to="{ name: 'MovList' }">跳转到电影列表页面</router-link>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        title: '主页',
        people: 'wenhan'
      }
    }
  }
</script>

<style>

</style>