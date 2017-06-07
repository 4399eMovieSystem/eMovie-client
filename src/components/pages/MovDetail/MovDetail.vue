<template>
  <div id = "main">
    <div id = "movie-detail" v-if = "movie_detail">
      <div id = "movietitle">
        <h3 class = "title">{{ movie_detail.name }}</h3>
        
      </div>
      <div id = "detail">
        <div id = "divposter">

          <img v-bind:src="movie_detail.imgUrl"/>
        </div>
        <div id = "content">
          <div id = "left_detail">
            <div class = "mov_detail left">
              <span class="cat">首映：{{ movie_detail.starttime.substr(0,10) }}</span>
            </div>
            <div class = "mov_detail left">
              <span class="cat">类型：{{ movie_detail.type }}</span>
            </div>
            <div class = "mov_detail left">
              <span class="cat">地区：{{ movie_detail.region }}</span>
            </div>
            
          </div>
          <div id = "right_detail">
            <div class = "mov_detail right">
              <span class = "cat">时长：{{ movie_detail.length }}</span>
            </div>
            
            <div class = "mov_detail right">
              <span class = "cat">导演：</span>
              <span v-for="director in movie_detail.directors">{{ director.name }} </span>
              <span></span>
            </div>
            
            <div class = "mov_detail right">
              <span class = "cat">语言：{{ movie_detail.language }}</span>
            </div>
          </div>
            
          <div class = "mov_detail" >
            <span class = "cat">主演：</span>
            <span v-for="actor in movie_detail.actors">{{ actor.name }} </span>
            <span></span>
          </div>
          <div class = "mov_detail">
            <span class = "cat">剧情简介：</span>
            <span>{{ movie_detail.description }}</span>
          </div>
        </div>
      </div>
    </div>

    <div id = "cinema">
      <h3>上映影院</h3>
      <ul id = "cinemas_list">
        <li id = "cinema_list" v-for="play_cinema in play_cinemas" @click="selectCinema(play_cinema)">{{ play_cinema.name }}</li>
      </ul>
      <div id="address" v-if="selected_cinema">影院地址： {{ selected_cinema.address }}</div>
    </div>

    <div id = "showing">
      <div id="time" v-if="selected_cinema" >
        <span class = "title">观影时间</span>
        <span v-for="single_detail in selected_cinema.detail"  @click="selectDate(single_detail)">{{ single_detail.date }}</span>
      </div>
      <div id="play_detail">
        <table border="1" rules = "cols">
          <tr>
            <th>放映时间</th>
            <th>语言版本</th>
            <th>放映厅</th>
            <th>在线售价</th>
            <th>在线选座</th>
          </tr>
          <tr v-for="screening in selected_cinema_date_hells">
            <td>{{ screening.starttime }} - {{ screening.endtime }}</td>
            <td>{{ movie_detail.language }}</td>
            <td>{{ screening.name }}</td>
            <td>{{ screening.price }}元</td>
            <td><router-link :to="{ name: 'TicketBook' }" class="header-link-def">选座购票</router-link></td>
          </tr>
        </table>
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
        selected_cinema_date_hells:null
      }
    },
    mounted:function() {
        console.log(this.$route.path);
        console.log(this.movie_id)
        this.movie_id = this.$route.path.substr(9);
        console.log(this.movie_id)
        getData({ apiKey: 'mov_cin_detail', params: { mov_id: this.movie_id }  })
          .then(response => {
            this.movie_detail = response.data;
            this.play_cinemas = response.data.play_cinemas;
            this.selected_cinema = this.play_cinemas[0];
            console.log(this.selected_cinema)
            console.log(this.play_cinemas)
            this.selected_cinema_date_hells = this.selected_cinema.detail[0].video_hell;
          })
          .catch(err => {
            console.log('cin_mov err', err);
          })
      
    },
    methods: {
      selectCinema(play_cinema) {
        this.selected_cinema = play_cinema;
        this.selected_cinema_date_hells = this.selected_cinema.detail[0].video_hell;
      },
      selectDate(detail) {
        this.selected_cinema_date_hells = detail.video_hell;

      }
    }
  }
</script>

<style>

  #main {
    margin-top: 3%;
    margin-left: 3%;
    width: 94%;
    height: 94%;
  }

  #movie_detail {
    height: 40%;
  }

  #cinema {
    top: 40%;
    height: 30%;
    clear: both;
  }

  #showing {
    height: 30%;
  }

  #movie_title {
    height: 5%;
  }

  #detail {
    height: 95%;
  }

  #divposter {
    height: 35%;
    width: 34%;
    float: left;
  }

  #content {
    height: 35%;
    width: 66%;
    float: right;
  }

  #left_detail {
    height: 50%;
    width: 50%;
    float: left;
  }

  #right_detail {
    width: 50%;
    height: 50%;
    float: right;
  }

  #mov_demo{
    padding-top: 50%;
    height: 50%;
    clear: both;
  }

  #cinema_list {
    display: inline-block;
    margin: 1%;
  }

  #cinemas_list {
    background-color: #999;
  }



</style>