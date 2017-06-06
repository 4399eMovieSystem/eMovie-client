<template>
  <div>
    <div>{{ title }}</div>
    <div>负责人：{{ people }}</div>
  </div>
</template>

<script>
  export default {
    name: 'pay-detail',
    data() {
      return {
        title: '订票支付页面',
        people: 'zhihui'
      }
    }
  }
</script>

<style>

</style>