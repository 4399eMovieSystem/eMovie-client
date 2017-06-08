<template>
  <div>
    <div class="titlestyle">{{ title }}</div>
  
      <img class="mainpic" src="../../../assets/home/movie2.jpg" />
    <router-link :to="{ name: 'MovList' }">跳转到电影列表页面</router-link>
    <router-link :to="{ name: 'LoginRegister' }">登录注册页面</router-link>
  </div>
</template>

<script>
  import {getData} from "../../../service/getData.js"
  export default {
    name: 'home',
    data() {
      return {
        title: '欢迎来到快乐影购，开始您的美好观影之旅吧！',
        people: 'wenhan',
        
      }
    },
  
  }
</script>

<style>
    .titlestyle{
      position: absolute;
      left: 20%;
      top:15%;
      font-size: 35px;
      font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
      color: orange;
      text-shadow: 1px 1px rgba(197, 223, 248,0.8),2px 2px rgba(197, 223, 248,0.8),3px 3px rgba(197, 223, 248,0.8),4px 4px rgba(197, 223, 248,0.8),5px 5px rgba(197, 223, 248,0.8);
    }
    .mainpic{
      width: 80%;
      height: 75%;
      position: absolute;
      left: 10%;
      top:25%;
      
    }
</style>