<template>
  <div id = "main">
    <div id = "movie-detail" v-if = "movie_detail">
      <div id = "movietitle">
        <h1 id = "htitle">
          <span class = "title">{{ movie_detail.name }}</span>
        </h1>
      </div>
      <div id = "detail"  class="main_content">
        <div id = "divposter">

          <img v-bind:src="movie_detail.imgUrl" id="imgMovie"/>
        </div>
        <div id = "content">
          <div id = "left_detail">
            <div class = "mov_detail left">
              <span class="cat">首映：</span><span class="movie_data">{{ movie_detail.starttime.substr(0,10) }}</span>
            </div>
            <div class = "mov_detail left">
              <span class="cat">类型：</span><span class="movie_data">{{ movie_detail.type }}</span>
            </div>
            <div class = "mov_detail left">
              <span class="cat">地区：</span><span class="movie_data">{{ movie_detail.region }}</span>
            </div>
            
          </div>
          <div id = "right_detail">
            <div class = "mov_detail right">
              <span class = "cat">时长：</span><span class="movie_data">{{ movie_detail.length }}</span>
            </div>
            
            <div class = "mov_detail right">
              <span class = "cat">导演：</span>
              <span class="movie_data" v-for="director in movie_detail.directors">{{ director.name }} </span>
              
            </div>
            
            <div class = "mov_detail right">
              <span class = "cat">语言：</span><span class="movie_data">{{ movie_detail.language }}</span>
            </div>
          </div>
            
          <div class = "mov_demo" >
            <span class = "cat">主演：</span>
            <span class="movie_data" v-for="actor in movie_detail.actors">{{ actor.name }} </span>
            <span></span>
          </div>
          <div class = "mov_demo">
            <span class = "cat">剧情简介：</span>
            <span class="movie_data" >{{ movie_detail.description.replace(/\<.*?\>/g,'').replace(/\s+/g, "") }}</span>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      该影片不存在
    </div>


    <div id = "cinema"  v-if="selected_cinema">
      <h2 class="divtitle">
        <span class="title">上映影院</span>
      </h2>
      <ul id = "cinemas_list" class="main_content">
        <li class = "cinema_list" v-for="play_cinema in play_cinemas" @click="selectCinema(play_cinema)" v-bind:class="{active:play_cinema==selected_cinema}">{{ play_cinema.name }}</li>
      </ul>
      <div id="address">影院地址： {{ selected_cinema.address }}</div>
    </div>

    <div id = "showing">
      <div id="time" v-if="selected_cinema" >
        <h2> 
          <span class = "title">观影时间</span>
          <span v-for="single_detail in selected_cinema.detail"  
              @click="selectDate(single_detail)" 
              class="date" 
              v-bind:class="{
                bgimg1: selected_cinema.detail.indexOf(single_detail)%3==0,
                bgimg2: selected_cinema.detail.indexOf(single_detail)%3==1,
                bgimg3: selected_cinema.detail.indexOf(single_detail)%3==2,
              }">
            {{ single_detail.date }}
          </span>
        </h2>
      </div>
      <div id="play_detail" v-if="selected_cinema_date_hells">

        <div id = "Screenings">

          <div id="s_time" class=" s_title main_content gap">
            <span class="s_time s_info">放映时间</span>
            <div class="s_info" v-for="screening in selected_cinema_date_hells">  
              <span class="s_start">{{ screening.starttime }}</span>
              -
              <span class="s_end"></span>{{ screening.endtime }}</span>
            </div>
            
          </div>

          


          <div id="version" class="s_title main_content gap">
            <span class="version s_info">语言版本</span>
            <div class="s_info" v-for="screening in selected_cinema_date_hells">
              <span class="version">{{ movie_detail.language }}</span>
            </div>
          </div>

          <div id="hell" class="s_title main_content gap">
            <span class="hell s_info">放映厅</span>
            <div v-for="screening in selected_cinema_date_hells">
              <span class="hell s_info">{{ screening.name }}</span>
            </div>
          </div>

          <div id="price" class="s_title main_content gap">
            <span class="price s_info">在线售价</span>
            <div v-for="screening in selected_cinema_date_hells">
              <span class="hell s_info s_price" >{{ screening.price }}</span>
            </div>
          </div>

          <div id="selectSeat" class="s_title main_content">
            <span class="selectSeat s_info" >在线选座</span>
            <div v-for="screening in selected_cinema_date_hells">
              <span class="selectSeat s_info"><router-link :to="{ name: 'TicketBook' }" class="link-def"  v-on:click="storeIndex(selected_cinema_date_hells.indexOf(screening))"> 选座购票</router-link></span>
            </div>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { getData } from '../../../service/getData';

  export default {
    name: 'mov-detail',
    data() {
      return {

        movie_detail:null,
        play_cinemas:null,
        movie_id:2,
        selected_cinema:null,
        selected_cinema_date_hells:null,
        date:null
      }
    },
    mounted:function() {
        console.log(this.$route.path);
        console.log(this.movie_id)
        this.movie_id = this.$route.path.substr(9);
        console.log(this.movie_id)
        getData({ apiKey: 'mov_cin_detail', params: { mov_id: this.movie_id }  })
          .then(response => {
            console.log(response);
            this.movie_detail = response.data;
            this.play_cinemas = response.data.play_cinemas;
            this.selected_cinema = this.play_cinemas[0];
            console.log(this.selected_cinema)
            console.log(this.play_cinemas)
            this.selected_cinema_date_hells = this.selected_cinema.detail[0].video_hell;
            this.date = this.selected_cinema.detail[0].date;

            //当地缓存
            localStorage.setItem('play_cinema', JSON.stringify(this.selected_cinema));
            localStorage.setItem('cinema_date_hell', JSON.stringify(this.selected_cinema_date_hells));
            localStorage.setItem('date',this.date);
          })
          .catch(err => {
            console.log('cin_mov err', err);
          })
      
    },
    methods: {
      selectCinema(play_cinema) {
        this.selected_cinema = play_cinema;
        this.selected_cinema_date_hells = this.selected_cinema.detail[0].video_hell;
        localStorage.setItem('play_cinema', JSON.stringify(this.selected_cinema));
        localStorage.setItem('cinema_date_hell', JSON.stringify(this.selected_cinema_date_hells));
      },
      selectDate(detail) {
        this.selected_cinema_date_hells = detail.video_hell;
        this.date = detail.date;
        localStorage.setItem('date',this.date);
        localStorage.setItem('cinema_date_hell', JSON.stringify(this.selected_cinema_date_hells));
      },
      storeIndex: function(index) {
        localStorage.setItem('index of cinema_date_hell',index);
      }
    }
  }
</script>

<style>

  #main {
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 6%;
    width: 88%;
    height: 96%;
  }

  #movie_detail {
    height: 40%;
  }

  #cinema {
    top: 40%;
    height: 30%;
    padding-top:2%; 
    clear: both;
  }

  #showing {
    height: 30%;
  }

  #movie_title {
    height: 5%;
  }

  #detail {
    overflow: hidden;
  }

  #divposter {
    width: 34%;
    height: 35%;
    float: left;
  }

  #content {
    width: 66%;
    height: 35%;
    float: right;
  }

  #left_detail {
    margin-left: 1%;
    height: 50%;
    width: 49%;
    float: left;
  }

  #right_detail {
    margin-left: 1%;
    width: 49%;
    height: 50%;
    float: right;
  }

  .mov_detail {
    margin-bottom: 1%;
  }

  .mov_demo{
    margin-left: 1%;
    margin-bottom: 1%;
    clear: both;
    line-height: 120%;
  }

  .cinema_list {
    font-size: 15pt;
    display: inline-block;
    padding: 0.5%;
    cursor: pointer;
    color:rgb(177,109,108);
  }

  .cat {
    font-size: 15pt;
    color:gray; 
  }

  .movie_data {
    font-size: 15pt;
    font-weight: 600;
    color: #333333;
  }

  .divtitle {
    top:2%;
  }

  .title {
    color:rgb(170,140,105);
    border-bottom: 0.1vw dotted grey;
  }

  .active {
    background-color: rgb(197,129,128);
  }

  #time {
    margin-top:3%;
    margin-bottom: 0.5%; 
  }

  #play_detail {
    height: 90%;
    margin-bottom: 2%;
  }

  #imgMovie {

    max-width:100%;
    max-height:100%;
  }



  .main_content{
    background-color: #E6E6FA;
  }

  #Screenings {
    overflow: hidden;
  }

  .s_info {
    text-align: center;
  }

  .s_start, .s_price {
    color: orange;
  }

  .date {
    
    padding-left: 1%;
    padding-right: 1%;
    cursor: pointer;
    background-size: 100% 100%;
  }



  .s_title {
    padding-left: 3%;
    padding-right: 3%;
    float: left;
    text-align: center;
    font-size: 14pt;
    line-height: 200%;
  }

  .gap {
    background-image: url("../../../assets/info_gap/gap.png");
    background-repeat: no-repeat;
    background-size: 10px 100%;
    background-position: 100%;
  }

  .bgimg1 {
    background-image: url("../../../assets/play_time/time1.png");
  }

  .bgimg2 {
    background-image: url("../../../assets/play_time/time2.png");
  }

  .bgimg3 {
    background-image: url("../../../assets/play_time/time3.png");
  }

  .link-def {
    text-decoration: none;
    
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    color: orange;
  }

</style>