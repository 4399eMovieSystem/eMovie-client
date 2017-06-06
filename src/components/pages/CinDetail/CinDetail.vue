<template>
  <div>
    <div>{{ title }}</div>
    <div>负责人：{{ people }}</div>
    <router-link :to="{ name: 'TicketBook' }">跳转到订票页面</router-link>
  </div>
</template>

<script>
  export default {
    name: 'cin-detail',
    data() {
      return {
        title: '影院详细信息页面',
        people: 'ruilin'
      }
    }
  }
</script>

<style>

</style>