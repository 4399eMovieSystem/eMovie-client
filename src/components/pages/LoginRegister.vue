<template>
  <div>
    <div>{{ title }}</div>
    <div>负责人：{{ people }}</div>
  </div>
</template>

<script>
  export default {
    name: 'login-register',
    data() {
      return {
        title: '登录/注册页面',
        people: 'ruilin'
      }
    }
  }
</script>

<style>

</style>