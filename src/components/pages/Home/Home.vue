<template>
  <div>
    <div class="titlestyle">{{ title }}</div>
      <div>
        <img class="side_left" src="../../../assets/home/side.png"/>
        <img class="left" src="../../../assets/home/left.png"/>
        <img class="mainpic" src="../../../assets/home/main1.jpg" />
        <img class="side_right" src="../../../assets/home/side.png"/>
        <img class="right" src="../../../assets/home/right.png"/>
      </div>
  </div>
</template>

<script>
  import {getData} from "../../../service/getData.js"
  export default {
    name: 'home',
    data() {
      return {
        title: '欢迎来到快乐影购！',
        people: 'wenhan',
        
      }
    },
  
  }
</script>

<style>
    .titlestyle{
      position: absolute;
      left: 5%;
      top:14.5%;
      font-size: 25px;
      font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
      color: orange;
    }
    .mainpic{
      width: 53%;
      position: absolute;
      left: 20%;
      top:20%;
      
    }
    .side_left{
      position: absolute;
      left: 15.8%;
      top:20%;
      height:72%;
    }
    .side_right{
      position: absolute;
      left: 70%;
      top:20%;
      height:72%;
    }
    .left{
      position: absolute;
      left:15.8%;
      top:50%;
      width:4%;
    }
    .right{
      position: absolute;
      left: 70.4%;
      top:50%;
      width:4%;
    }
</style>