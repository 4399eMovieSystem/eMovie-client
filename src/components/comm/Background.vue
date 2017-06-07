<template>
  <div id="background-bg" class="background-bg">
    <div id="background-content" class="background-bg center">
      <v-header></v-header>
      <router-view></router-view>
    </div>
    <div id="background-flower" class="background-bg">
      <img src="../../assets/background/bg2.png" />
    </div>
  </div>
</template>

<script>
  import vHeader from './Header';

  export default {
    name: 'background',
    components: {
      vHeader
    }
  }
</script>

<style>
  html, body {
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  .background-bg {
    margin: 0;
    border: 0;
    position: absolute;
  }

  #background-bg {

    min-width: 1054px;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/background/bg1.jpg")
  }

  #background-content {
    width: 92%;
    height: 92%;
    border-radius: 10px;
    background-image: url("../../assets/background/bg3.jpg");
    box-shadow: 20px 20px 30px 10px rgba(0, 0, 0, 0.4);
  }

  .center {
    margin: auto;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
  }

  #background-flower {
    width: 6%;
    height: 20%;
    right: 25px;
    bottom: 10px;
  }

  #background-flower > img {
    height: 100%;
    width: 100%;
    position: absolute;
  }

</style>