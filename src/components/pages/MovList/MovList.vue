<template>
  <div>
    <div>
      <div id="title_font_1">{{ title1 }}</div>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
          <div id="post1" v-if="movie_detail">
            <img class="image" v-bind:src="movie_detail.imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
          <div id="post2" v-if="movie_detail">
            <img class="image" v-bind:src="movie_detail.imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
          <div id="post3" v-if="movie_detail">
            <img  class="image"v-bind:src="movie_detail.imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
          <div id="post4" v-if="movie_detail">
            <img class="image" v-bind:src="movie_detail.imgUrl"/>
          </div>
        </router-link>
     
    </div>
    <div>
      <div id="title_font_2">{{ title2 }}</div>
      <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
          <div id="post5" v-if="movie_detail">
            <img  class="image" v-bind:src="movie_detail.imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
          <div id="post6" v-if="movie_detail">
            <img class="image" v-bind:src="movie_detail.imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
          <div id="post7" v-if="movie_detail">
            <img class="image" v-bind:src="movie_detail.imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
          <div id="post8" v-if="movie_detail">
            <img class="image" v-bind:src="movie_detail.imgUrl"/>
          </div>
        </router-link>
    </div>
    <div>
      <div id="title_font_3">{{ title3 }}</div>
      <ul>
        <li>
          <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
              <div id="movie1" v-if="movie_detail" class="rank_font">
                {{movie_detail.name}}
              </div>
          </router-link>
          <div id="ticket1">
            <h class="rank_font">{{movie_list.rank[0].grade}}</h>
          </div>
        </li>
        <li>
          <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
              <div id="movie2" v-if="movie_detail" class="rank_font">
                {{movie_detail.name}}
              </div>
          </router-link>
          <div id="ticket2">
            <h class="rank_font">{{movie_list.rank[1].grade}}</h>
          </div>
        </li>
        <li>
          <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
              <div id="movie3" v-if="movie_detail" class="rank_font">
                {{movie_detail.name}}
              </div>
          </router-link>
          <div id="ticket3">
            <h class="rank_font">{{movie_list.rank[2].grade}}</h>
          </div>
        </li>
        <li>
          <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
              <div id="movie4" v-if="movie_detail" class="rank_font">
                {{movie_detail.name}}
              </div>
          </router-link>
          <div id="ticket4">
            <h class="rank_font">{{movie_list.rank[3].grade}}</h>
          </div>
        </li>
        <li>
          <router-link :to="{ name: 'MovDetail', params: { mov_id: 2 } }">
              <div id="movie5" v-if="movie_detail" class="rank_font">
                {{movie_detail.name}}
              </div>
          </router-link>
          <div id="ticket5">
            <h class="rank_font">{{movie_list.rank[4].grade}}</h>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {getData} from "../../../service/getData.js"
  export default { 
    name: 'mov-list',
    data() {
      return {
        title1: '正在热映',
        title2: '即将上映',
        title3: '电影排行榜',
        movie_list:null
      }
    },
    mounted:function() {
          this.movie_id = this.$route.path.substr(9);
          getData({ apiKey: 'mov_list'  })
          .then(response => {
            this.movie_list = response.data;
                     })
          .catch(err => {
            console.log('cin_mov err', err);
          })
    }
  }
</script>

<style>
  .image{
    width:40%;
  }
  #post1{
    position: absolute;
    left:3%;
    top:23%;
  }
  #post2{
    position: absolute;
    left:15%;
    top:23%;
  }
  #post3{
    position: absolute;
    left:27%;
    top:23%;
  }
  #post4{
    position: absolute;
    left:39%;
    top:23%;
  }
  #post5{
    position: absolute;
    left:3%;
    top:63%;
  }
  #post6{
    position: absolute;
    left:15%;
    top:63%;
  }
  #post7{
    position: absolute;
    left:27%;
    top:63%;
  }
  #post8{
    position: absolute;
    left:39%;
    top:63%;
  }
  #title_font_1{
    font-size: 2vw;
    padding: 0.5vw;
    font-weight: bold;
    color:grey;
    position: absolute;
    left:1%;
    top:15%;
    text-shadow: 0 0 20px red;
  }
  #title_font_2{
    font-size: 2vw;
    padding: 0.5vw;
    font-weight: bold;
    color:grey;
    position: absolute;
    left:1%;
    top:55%;
     text-shadow: 0 0 20px red;
  }
  #title_font_3{
    font-size: 2vw;
    padding: 0.5vw;
    font-weight: bold;
    color:grey;
    position: absolute;
    left:65%;
    top:15%;
     text-shadow: 0 0 20px red;
  }
  .rank_font{
    font-size: 1.5vw;
    font-weight: bold;
    color:grey;
  }
  .rank_first_font{

  }
  .rank_second_font{
    
  }
  .rank_third_font{
    
  }
  #movie1{
    position: absolute;
    left:67%;
    top:24%;
  }
  #movie2{
    position: absolute;
    left:67%;
    top:30%;
  }
  #movie3{
    position: absolute;
    left:67%;
    top:36%;
  }
  #movie4{
    position: absolute;
    left:67%;
    top:42%;
  }
  #movie5{
    position: absolute;
    left:67%;
    top:48%;
  }
  #ticket1{
    position: absolute;
    left:85%;
    top:24%;
  }
  #ticket2{
    position: absolute;
    left:85%;
    top:30%;
  }
  #ticket3{
    position: absolute;
    left:85%;
    top:36%;
  }
  #ticket4{
    position: absolute;
    left:85%;
    top:42%;
  }
  #ticket5{
    position: absolute;
    left:85%;
    top:48%;
  }
</style>