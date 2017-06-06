<template>
  <div>
    <div>{{ title }}</div>
    <div>负责人：{{ people }}</div>
    <router-link :to="{ name: 'PayDetail' }">跳转到支付页面</router-link>
  </div>
</template>

<script>
  export default {
    name: 'ticket-book',
    data() {
      return {
        title: '订票页面',
        people: 'zhihui'
      }
    }
  }
</script>

<style>

</style>