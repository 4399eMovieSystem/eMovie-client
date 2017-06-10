<template>
  <div>
    <div class="titlestyle">{{ title }}</div>
      <div id="all">
        <img class="side_left" src="../../../assets/home/side.png"/>
        <img class="left" src="../../../assets/home/left.png" @click="clickleft()"/>
        <div v-bind:class="{'picone': isone, 'pictwo': istwo, 'picthree': isthree}"></div>
      
        <img class="side_right" src="../../../assets/home/side.png"/>
        <img id="right" src="../../../assets/home/right.png" @click="clickright()"/>
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
        index: 1,
        isone:true,
        istwo:false,
        isthree:false
      }
    },
    methods: {  
      clickright() {
         if (this.index == 1){
          this.index++;
          this.isone=false;
          this.istwo=true;
          this.isthree=false;
         }
         else if (this.index == 2){
          this.index++;
          this.isone=false;
          this.istwo=false;
          this.isthree=true;
         }
         else if (this.index == 3){
          this.index = 1;
          this.isone=true;
          this.istwo=false;
          this.isthree=false;
         }
      },
      clickleft() {
         if (this.index == 1){
          this.index=3;
          this.isone=false;
          this.istwo=false;
          this.isthree=true;
         }
         else if (this.index == 2){
          this.index--;
          this.isone=true;
          this.istwo=false;
          this.isthree=false;
         }
         else if (this.index == 3){
          this.index--;
          this.isone=false;
          this.istwo=true;
          this.isthree=false;
         }
      }
    }
  }  
</script>

<style>
    .titlestyle{
      position: absolute;
      left: 5%;
      top:14.5%;
      font-size: 28px;
      font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
      color: orange;
    }
    #all{
     width:60vw;
     height: 40vw;
      position: absolute;
      left:23%;
      top:20%;
    }
    .side_left{
      position: absolute;
      left: 1%;
      top:8%;
      width: 6%;
      height:67%;
    }
    .side_right{
      position: absolute;
      left:80%;
      top:8%;
      width: 6%;
      height:67%;
    }
    .left{
      position: absolute;
      left: 1%;
      top:40%;
      width:6%;
      cursor: pointer;
    }
    #right{
      position: absolute;
      left:80.3%;
      width:6%;
      top:40%;
      cursor: pointer;
    }
    .picone{
      width: 75%;
      height: 78%;
      position: absolute;
      left: 7%;
      top:8%;
      background-image: url("../../../assets/home/main1.jpg");
      background-repeat: no-repeat;
      background-size: 100%,100%;
    }
    .pictwo{
      width: 75%;
      height: 78%;
      position: absolute;
      left: 7%;
      top:8%;
      background-image: url("../../../assets/home/main2.jpg");
      background-repeat: no-repeat;
      background-size: 100%,100%;
    }
    .picthree{
      width: 75%;
      height: 78%;
      position: absolute;
      left: 7%;
      top:8%;
      background-image: url("../../../assets/home/main3.jpg");
      background-repeat: no-repeat;
      background-size: 100%,100%;
    }
</style>