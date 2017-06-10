<template>
  <div v-if="movie_list">
    <div>
      <div id="title_font_1">{{ title1 }}</div>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.now[0].mov_id } }">
          <div id="post1" v-if="movie_list">
            <img class="image" v-bind:src="movie_list.now[0].imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.now[1].mov_id  } }">
          <div id="post2" v-if="movie_list">
            <img class="image" v-bind:src="movie_list.now[1].imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.now[2].mov_id  } }">
          <div id="post3" v-if="movie_list">
            <img  class="image"v-bind:src="movie_list.now[2].imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.now[3].mov_id  } }">
          <div id="post4" v-if="movie_list">
            <img class="image" v-bind:src="movie_list.now[3].imgUrl"/>
          </div>
        </router-link>
     
    </div>
    <div>
      <div id="title_font_2">{{ title2 }}</div>
      <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.feature[0].mov_id } }">
          <div id="post5" v-if="movie_list">
            <img  class="image" v-bind:src="movie_list.feature[0].imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.feature[1].mov_id  } }">
          <div id="post6" v-if="movie_list">
            <img class="image" v-bind:src="movie_list.feature[1].imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.feature[2].mov_id  } }">
          <div id="post7" v-if="movie_list">
            <img class="image" v-bind:src="movie_list.feature[2].imgUrl"/>
          </div>
        </router-link>
        <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.feature[3].mov_id  } }">
          <div id="post8" v-if="movie_list">
            <img class="image" v-bind:src="movie_list.feature[3].imgUrl"/>
          </div>
        </router-link>
    </div>
    <div>
      <div id="title_font_3">{{ title3 }}</div>
      <ul>
        <li>
          <div class="rank1_pic"><img src="../../../assets/movie_list/rank1.png"/></div>
          <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.rank[0].mov_id } }">
              <div id="movie1" v-if="movie_list" class="rank_font">
                {{movie_list.rank[0].name}}
              </div>
          </router-link>
          <div id="ticket1">
            <span class="rank_font">{{movie_list.rank[0].grade}}</span>
          </div>
        </li>
        <li>
          <div class="rank2_pic"><img src="../../../assets/movie_list/rank2.png"/></div>
          <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.rank[1].mov_id } }">
              <div id="movie2" v-if="movie_list" class="rank_font">
                {{movie_list.rank[1].name}}
              </div>
          </router-link>
          <div id="ticket2">
            <span class="rank_font">{{movie_list.rank[1].grade}}</span>
          </div>
        </li>
        <li>
          <div class="rank3_pic"><img src="../../../assets/movie_list/rank3.png"/></div>
          <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.rank[2].mov_id } }">
              <div id="movie3" v-if="movie_list" class="rank_font">
                {{movie_list.rank[2].name}}
              </div>
          </router-link>
          <div id="ticket3">
            <span class="rank_font">{{movie_list.rank[2].grade}}</span>
          </div>
        </li>
        <li>
          <span class="rank4_pic">4</span>
          <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.rank[3].mov_id } }">
              <div id="movie4" v-if="movie_list" class="rank_font">
                {{movie_list.rank[3].name}}
              </div>
          </router-link>
          <div id="ticket4" v-if="movie_list">
            <span class="rank_font">{{movie_list.rank[3].grade}}</span>
          </div>
        </li>
        <li>
          <span class="rank5_pic">5</span>
          <router-link :to="{ name: 'MovDetail', params: { mov_id: movie_list.rank[4].mov_id } }">
              <div id="movie5" v-if="movie_list" class="rank_font">
                {{movie_list.rank[4].name}}
              </div>
          </router-link>
          <div id="ticket5">
            <span class="rank_font">{{movie_list.rank[4].grade}}</span>
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
    width:10vw;
    height:13vw;
    cursor: pointer;
  transition: all 0.5s;
  }
  .image:hover {
  border-color: green;
  transform: scale(1.1);
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
    left:64%;
    top:15%;
     text-shadow: 0 0 20px red;
  }
  .rank_font{
    font-size: 1.5vw;
    font-weight: bold;
    color:grey;
  }

  #movie1{
    position: absolute;
    left:70%;
    top:28%;
  }
  #movie2{
    position: absolute;
    left:70%;
    top:38%;
  }
  #movie3{
    position: absolute;
    left:70%;
    top:47%;
  }
  #movie4{
    position: absolute;
    left:70%;
    top:56%;
  }
  #movie5{
    position: absolute;
    left:70%;
    top:62%;
  }
  #ticket1{
    position: absolute;
    left:89%;
    top:28%;
  }
  #ticket2{
    position: absolute;
    left:89%;
    top:38%;
  }
  #ticket3{
    position: absolute;
    left:89%;
    top:47%;
  }
  #ticket4{
    position: absolute;
    left:89%;
    top:56%;
  }
  #ticket5{
    position: absolute;
    left:89%;
    top:62%;
  }
  .rank1_pic{
    position: absolute;
    left:65%;
    top:24%;
  }
  .rank2_pic{
    position: absolute;
    left:65.3%;
    top:35%;
  }
  .rank2_pic img{
    width:85%;
  }
  .rank3_pic{
    position: absolute;
    left:65.4%;
    top:45%;
  }
  .rank3_pic img{
    width:75%;
  }
  .rank4_pic{
    position: absolute;
    left:66.5%;
    top:56%;
    font-size: 1.5vw;
    font-weight: bold;
    color:grey;
  }
  .rank5_pic{
    position: absolute;
    left:66.5%;
    top:62%;
    font-size: 1.5vw;
    font-weight: bold;
    color:grey;
  }
</style>