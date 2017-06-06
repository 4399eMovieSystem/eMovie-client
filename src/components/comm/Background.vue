<template>
  <div id="bg" class="bg">
    <div id="content" class="bg">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'background'
  }
</script>

<style>
  html, body {
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    margin: 0;
  }

  .bg {
    margin: 0;
    border: 0;
    position: absolute;
  }

  #bg {
    width: 100%;
    height: 100%;
    background-image: url("../../assets/background/bg1.jpg")
  }

  #content {
    width: 92%;
    height: 92%;
    left: 4%;
    top: 4%;
    background-image: url("../../assets/background/bg3.jpg");
  }

</style>