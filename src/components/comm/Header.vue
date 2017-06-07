<template>
<div id="header">
  <div id="header-logo">
    <img src="../../assets/header/logo.png" />
  </div>

  <div id="header-city">
    <p @click="show = !show">{{ target.name }}</p>
    <div id="header-city-list" :class="{ 'header-show': show, 'header-hide': !show }">
      <ul>
        <li v-for="city in citys" @click="selectCity(city)">{{ city.name }}</li>
      </ul>
    </div>
  </div>

  <div id="header-btns" class="center">
    <ul>
      <li class="header-link">
        <router-link :to="{ name: 'Home' }" class="header-link-def">首页</router-link>
      </li>
      <li class="header-link">
        <router-link :to="{ name: 'MovList' }" class="header-link-def">电影</router-link>
      </li>
      <li class="header-link">
        <router-link :to="{ name: 'CinDetail' }" class="header-link-def">影院</router-link>
      </li>
    </ul>
  </div>

  <div id="header-search">
    <div id="header-search-input" contenteditable="true"></div>
    <div id="header-search-btn" @mouseup="click(false)" @mousedown="click(true)">
      <img src="../../assets/header/unclick.png" class="center" v-if="!searchState" />
      <img src="../../assets/header/click.png" class="center" v-if="searchState" />
    </div>
  </div>


  <div id="header-user">
    <img src="../../assets/header/user.png" />
  </div>
</div>
</template>

<script>
  export default {
    name: 'header',

    data() {
      return {
        show: false,

        searchState: false,

        target: { name: '广州', id: 1 },
        citys: [
          {
            name: '广州',
            id: 1
          },
          {
            name: '深圳',
            id: 2
          },
          {
            name: '杭州',
            id: 3
          },
          {
            name: '上海',
            id: 4
          },
          {
            name: '武汉',
            id: 5
          },
          {
            name: '北京',
            id: 6
          }
        ]
      }
    },

    methods: {
      selectCity(city) {
        this.target = city;
        this.show = !this.show;

      },

      click(state) {
        this.searchState = state;

      }
    }
  }
</script>

<style>
  #header {
    position: relative;
    width: 94%;
    height: 8%;


    min-height: 74.86px;

    margin: 0;
    border-width: 0;
    padding: 0;
    left: 3%;
    border-bottom: 1px dotted grey;
  }

  #header > div {
    display: inline-block;
  }

  #header-logo {
    position: relative;
    width: 20%;
    height: 100%;
  }

  #header-logo > img {
    float: right;
    width: 95%;
    height: 100%;
  }

  #header-city {
    position: relative;
    left: -3%;
    width: 8%;
    height: 100%;
  }

  #header-city > p {
    position: absolute;
    width:100%;
    height: 20%;
    top: 40%;
    margin: 0;
    text-align: center;
    color: grey;
    cursor: pointer;
  }

  #header-city > p:after {
    position: relative;
    content: '';
    border-width: 5px 5px 5px 5px;
    border-style: solid;
    margin-left: 6px;
    top: 10px;
    border-color: grey transparent transparent transparent;
  }


  #header-city-list {
    position: absolute;
    width: 80px;
    height: 180%;
    background: rgba(244, 255, 255, 0.8);
    left: 13%;
    top: 65%;
    overflow: hidden;  
    border: 1px solid #ccc;
  }

  #header-city-list > ul {
    position: absolute;
    width: 120%;
    height: 100%;  
    overflow-y: auto;  
    overflow-x: hidden;
    margin-top: 0; 
    padding: 0;
  }

  #header-city-list li {
    text-align: center;
    width: 100%;
    cursor: pointer;
    height: 40px;  
    line-height: 40px;
  }

  .header-show {
    display: show;
  }

  .header-hide {
    display: none;
  }

  #header-btns {
    width: 35%;
    height: 100%;
    text-align: center;
  }

  #header-btns > ul {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  .header-link {
    display: inline-block;
    width: 30%;
    height: 100%;
    box-sizing: border-box;
    line-height: 450%;
  }

  .header-link-def {
    text-decoration: none;
    font-size: 45px;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    color: grey;
  }

  #header-user {
    width: 50px;
    height: 50px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);

    cursor: pointer;

  }

  #header-user > img {
    width: 100%;
    height: 100%;
  }


  #header-search {
    position: absolute;
    right: calc(50px + 2%);
    width: 21%;
    height: 50px;
    background-color: rgb(253, 161, 89);
    border-radius: 5px;
    top: 50%;
    transform: translate(0, -50%);
  }

  #header-search > div {
    display: inline-block;
    position: absolute;
    height: 70%;
    top: 50%;
    transform: translate(0, -50%);
  }

  #header-search-input {
    width: 83%;
    background-color: white;
    left: 2%;
    outline: none;
    box-sizing: border-box;
    padding: 4px 2px;
    font-size: 23px;
    border-radius: 3px;
    overflow: hidden;
  }

  #header-search-btn {
    width: 35px;
    border-radius: 871px;
    right: 2%;
    overflow: hidden;
    background-color: white;
    cursor: pointer;
  }

  #header-search-btn > img {
    position: absolute;
    width: 35px;
    height: 35px;
  }

  .header-city-down {
    border-color: grey transparent transparent transparent;
  }

  .header-ciy-up {
    border-color:transparent transparent grey transparent;
  }
</style>