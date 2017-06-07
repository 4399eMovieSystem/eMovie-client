<template>
  <div>
    <div>{{ title }}</div>
    <div>负责人：{{ people }}</div>
    <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">跳转到电影详细信息页面</router-link>
    <router-link :to="{ name: 'TicketBook' }">跳转到订票页面</router-link>
  </div>
</template>

<script>
  export default { 
    name: 'mov-list',
    data() {
      return {
        title: '电影列表页面',
        people: 'wenhan'
      }
    }
  }
</script>

<style>

</style>