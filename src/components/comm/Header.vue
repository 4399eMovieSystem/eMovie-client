<template>
<div id="header">
  <div id="header-logo">
    <img src="../../assets/header/logo.png" class="center" />
  </div>

  <div id="header-city">
    <p @click="show = !show">{{ target }}</p>
    <div id="header-city-list" :class="{ 'header-show': show, 'header-hide': !show }">
      <ul>
        <li v-for="city in citys" @click="selectCity(city)">{{ city }}</li>
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
    <div id="header-search-show">
      <input id="header-search-input" placeholder="请输入影片名" v-model="selectedMovie.name" />
      <div id="header-search-btn" @mouseup="click(false)" @mousedown="click(true)" :disable="this.selectedMovie.name">
        <img src="../../assets/header/unclick.png" class="center" v-if="!searchState" />
        <img src="../../assets/header/click.png" class="center" v-if="searchState" />
      </div>
    </div>
    <div id="header-search-list" v-if="movies">
      <div>
        <ul>
          <li v-for="movie in movies" @click="searchMovie(movie)">
            <router-link :to="{ name: 'MovDetail', params: { mov_id: movie.mov_id }}" class="header-search-list-item-font">
              {{ movie.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div id="header-user">
    <img src="../../assets/header/user.png" @click="tologin = !tologin" />
    <div id="header-user-list" :class="{'header-show': tologin, 'header-hide': !tologin}">
      <ul>
        <li v-for="item in items" @click="isLogin(item)">{{item}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  import { getData } from '../../service/getData';

  export default {
    name: 'header',

    data() {
      return {
        tologin: false,
        show: false,
        searchState: false,
        target: '广州',
        selectedMovie: { name: null, mov_id: null },
        citys: [ '广州', '深圳', '杭州', '上海', '武汉', '北京' ],
        movies: null,
        mov_list_show: false,
        items: [ 'Login', 'Logout' ]
      }
    },

    watch: {
      'selectedMovie.name': {
        handler: function(curVal, oldVal) {
          if (curVal === '' || this.mov_list_show) {
            if (this.mov_list_show && curVal === '') {
              this.mov_list_show = false;
            } else {
              this.movies = null;
            }
            return;
          }
          getData({ apiKey: 'search_mov', data: { name: curVal }})
            .then(res => {
              this.movies = res.data.length && res.data || null;
            })
            .catch(err => {
              console.log('search mov err:', err);
            })
        },
        deep: true
      }
    },

    methods: {
      selectCity(city) {
        this.target = city;
        this.show = !this.show;
        // console.log('1', this.$store.getters.getCity);
        this.$store.commit('setCity', city);
      },

      isLogin(item) {
        if (item == 'Login') {
          this.$router.push({ name: 'LoginRegister'});
        }
          
        else this.$router.push({ name: 'Home'});
      },

      click(state) {
        if (!this.selectedMovie.name) return;
        this.searchState = state;
        if (!state)
          this.$router.push({
            name: 'MovDetail',
            params: { mov_id: this.selectedMovie.mov_id }
          });
      },

      searchMovie(movie) {
        if (!movie) return;
        //console.log('name:', movie.name, 'id:', movie.mov_id);
        this.selectedMovie = movie;
        this.mov_list_show = true;
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
    position: absolute;
    width: 18%;
    height: 100%;
  }

  #header-logo > img {
    width: 108%;
    max-height: 100%;
  }

  #header-city {
    position: absolute;
    left: 18%;
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
    width: 100%;
    height: 180%;
    background: rgba(255, 255, 255, 0.8);
    top: 65%;
    overflow: hidden;
    z-index: 5;
  }

  #header-city-list li:hover {
    background-color: rgba(96, 96, 96, 0.2);
  }

  #header-city-list > ul {
    position: absolute;
    width: calc(100% + 15px);
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
    font-size: 2rem;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    color: grey;
  }

  #header-user {
    width: 42px;
    height: 42px;
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
  #header-user-list {
    position: relative;
    width: 80px;
    height: 180%;
    background: rgba(244, 255, 255, 0.8);
    left: -45%;
    margin-right: 0px;

    overflow: hidden;  
    border: 1px solid #ccc;
    cursor: pointer;
  }
  #header-user-list > ul {
    position: absolute;
    width: 120%;
    height: 100%;  
    overflow-y: auto;  
    overflow-x: hidden;
    margin-top: 0; 
    padding: 0;
    text-align: center;
  }
  #header-user-list li {

    line-height: 40px;
    height: 40px;
  }
  #header-user-list li:hover {
    background-color: rgba(96, 96, 96, 0.2);
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
    border-radius: 0 38px 10px 20px;
  }

  #header-search-show {
    overflow: hidden;
  }

  #header-search-show > div, #header-search-show > input {
    display: inline-block;
    position: absolute;
    height: 70%;
    top: 50%;
    transform: translate(0, -50%);
    margin: 0;
  }

  #header-search-input {
    width: 83%;
    background-color: white;
    left: 1%;
    outline: none;
    box-sizing: border-box;
    padding: 4px 8px;
    font-size: 23px;
    color: rgba(96, 96, 96, 0.5);
    border-radius: 3px;
    overflow: hidden;
    border-radius: 20px 0 0 20px;
    border: 0;
  }

  #header-search-input::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  #header-search-list {
    position: relative;
    width: 100%;
    height: auto;
    max-height: 400%;
    background-color: rgba(255, 255, 255, 0.8);
    top: 100%;
    overflow: hidden;
  }

  #header-search-list > div {
    position: relative;
    width: calc(100% + 15px);
    overflow-y: scroll;
    overflow-x: hidden;
  }

  #header-search-list ul {
    padding: 0;
    margin: 0;
  }

  #header-search-list li {
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
  }

  #header-search-list li:hover {
    background-color: rgba(96, 96, 96, 0.2);
  }

  .header-search-list-item-font {
    text-decoration: none;
    color: rgba(96, 96, 96, 0.5);
  }

  #header-search-btn {
    width: 35px;
    border-radius: 0 35px 35px 0;
    left: 82%;
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