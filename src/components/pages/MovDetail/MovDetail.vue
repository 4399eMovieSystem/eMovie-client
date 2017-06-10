<template>
  <div id = "md_main">
    <div id = "md_movie_detail" v-if = "movie_detail">

      <div id = "md_div_movie_title">
        <h1 id = "md_h_movie_title">
          <span class = "md_title">{{ movie_detail.name }}</span>
        </h1>
      </div>

      <div id = "md_detail"  class=" md_movie_introduction">


        <div id = "md_poster">
          <img v-bind:src="movie_detail.imgUrl" id="md_movie_img"/>
        </div>

        <div id = "md_content">
          <div id = "md_left_content">
            <div class = "md_content_item">
              <span class="md_content_item_key">首映：</span>
              <span class="md_content_item_value">{{ movie_detail.starttime.substr(0,10) }}</span>
            </div>

            <div class = "md_content_item">
              <span class="md_content_item_key">类型：</span>
              <span class="md_content_item_value">{{ movie_detail.type }}</span>
            </div>

            <div class = "md_content_item">
              <span class="md_content_item_key">地区：</span>
              <span class="md_content_item_value">{{ movie_detail.region }}</span>
            </div>
          </div>


          <div id = "md_right_content">
            <div class = "md_content_item">
              <span class = "md_content_item_key">时长：</span>
              <span class="md_content_item_value">{{ movie_detail.length }}</span>
            </div>
            
            <div class = "md_content_item">
              <span class = "md_content_item_key">导演：</span>
              <span class="md_content_item_value" v-for="director in movie_detail.directors">{{ director.name }} </span>
            </div>
            
            <div class = "md_content_item">
              <span class = "md_content_item_key">语言：</span>
              <span class="md_content_item_value">{{ movie_detail.language }}</span>
            </div>
          </div>
            
          <div class="mov_brief_content" >
            <span class="md_content_item_key">主演：</span>
            <span class="md_content_item_value" v-for="actor in movie_detail.actors">{{ actor.name }} </span>
          </div>

          <div class="mov_brief_content">
            <span class="md_content_item_key">剧情简介：</span>
            <span class="md_content_item_value" >{{ movie_detail.description.replace(/\<.*?\>/g,'').replace(/\s+/g, "") }}</span>
          </div>

        </div>


      </div>
    </div>
    <div v-else class="md_error">
      {{ error_message }}
    </div>

    <div id = "md_cinema"  v-if="selected_cinema">
      <h2 class="md_cinema_title">
        <span class="md_title">上映影院</span>
      </h2>
      <ul id = "md_cinemas_list" class="md_emphasis_content">
        <li class = "md_cinema_list" v-for="play_cinema in play_cinemas" @click="selectCinema(play_cinema)" v-bind:class="{md_cinema_active:play_cinema==selected_cinema}">{{ play_cinema.name }}</li>
      </ul>
      <div id="md_address">影院地址： {{ selected_cinema.address }}</div>
    </div>


    <div id = "md_screenings">

      <div id="md_play_date" v-if="selected_cinema" >
        <h2> 
          <span class = "md_title">观影时间</span>
          <span v-for="single_detail in selected_cinema.detail"
              class="md_span_play_date" 
              v-bind:class="{
                md_bgimg1: selected_cinema.detail.indexOf(single_detail)%3==0,
                md_bgimg2: selected_cinema.detail.indexOf(single_detail)%3==1,
                md_bgimg3: selected_cinema.detail.indexOf(single_detail)%3==2,
                md_date_active:  single_detail.date == date
              }"
              @click="selectDate(single_detail)">
            {{ single_detail.date }}
          </span>
        </h2>
      </div>
      <div v-else class="md_error">
        {{ error_message_2 }}
      </div>

      <div id="md_play_detail" v-if="selected_cinema_date_hells">
        <div id = "md_screenings_content">

          <div id="md_screenings_time" class="md_screenings_content_title md_emphasis_content md_devide_line">
            <span class="md_play_time md_screenings_info">放映时间</span>
            <div class="md_screenings_info" v-for="screening in selected_cinema_date_hells">  
              <span class="md_start">{{ screening.starttime }}</span>
              -
              <span class="md_end"></span>{{ screening.endtime }}</span>
            </div>
          </div>

          <div id="md_language_version" class="md_screenings_content_title md_emphasis_content md_devide_line">
            <span class="md_version md_screenings_info">语言版本</span>
            <div class="md_screenings_info" v-for="screening in selected_cinema_date_hells">
              <span class="md_version">{{ movie_detail.language }}</span>
            </div>
          </div>

          <div id="md_hell" class="md_screenings_content_title md_emphasis_content md_devide_line">
            <span class="md_hell md_screenings_info">放映厅</span>
            <div v-for="screening in selected_cinema_date_hells">
              <span class="md_hell md_screenings_info">{{ screening.name }}</span>
            </div>
          </div>

          <div id="price" class="md_screenings_content_title md_emphasis_content md_devide_line">
            <span class="md_price md_screenings_info">在线售价</span>
            <div v-for="screening in selected_cinema_date_hells">
              <span class="md_screenings_info md_price">{{ screening.price }}</span>
            </div>
          </div>

          <div id="md_selectSeat" class="md_screenings_content_title md_emphasis_content">
            <span class="md_selectSeat md_screenings_info" >在线选座</span>
            <div v-if="user!=null" v-for="screening in selected_cinema_date_hells"  v-on:mouseover="storeIndex(selected_cinema_date_hells.indexOf(screening))">
              <span class="md_selectSeat md_screenings_info">
                <router-link :to="{ name: 'TicketBook' }" class="md_link-def" > 选座购票</router-link>
              </span>
            </div>
            <div v-else>
              <span class="md_selectSeat md_screenings_info" v-on:click="warning">
                <router-link :to="{ name: 'MovDetail' }" class="md_link-def"> 选座购票</router-link>
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { getData } from '../../../service/getData';

  export default {
    name: 'mov-detail',
    data() {
      return {
        movie_detail:null,
        all_cinemas: null,
        play_cinemas:null,
        movie_id:2,
        selected_cinema:null,
        selected_cinema_date_hells:null,
        date:null,
        user:null,
        error_message:'',
        error_message_2:'',
        index_of_cinema_date_hell:null
      }
    },
    created:function() {
      this.setData();
    },
    methods: {
      selectCinema(play_cinema) {
        this.selected_cinema = play_cinema;
        this.selected_cinema_date_hells = this.selected_cinema.detail[0].video_hell.sort(this.sortBy('starttime','name'));

        localStorage.setItem('play_cinema', JSON.stringify(this.selected_cinema));
        localStorage.setItem('cinema_date_hell', JSON.stringify(this.selected_cinema_date_hells));
      },
      selectDate(detail) {
        this.selected_cinema_date_hells = detail.video_hell.sort(this.sortBy('starttime','name'));
        this.date = detail.date;
        localStorage.setItem('date',this.date);
        localStorage.setItem('cinema_date_hell', JSON.stringify(this.selected_cinema_date_hells));
      },
      storeIndex: function(index) {
      //  this.index_of_cinema_date_hell = index;
        localStorage.setItem('index_of_cinema_date_hell',index);
      },
      warning:function() {
        alert('请您先登录');
      },

      filter: function() {
        let reg = new RegExp(this.city);
        this.play_cinemas = this.all_cinemas.filter(item => reg.test(item.address));
        this.selected_cinema = null;
        this.selected_cinema_date_hells = null;
        this.date = null;
        localStorage.removeItem('play_cinema');
        localStorage.removeItem('cinema_date_hell');
        localStorage.removeItem('date');
      },

      setMessages: function() {
        this.selected_cinema = this.play_cinemas[0];
        console.log('sort');
        console.log(this.selected_cinema.detail[0].video_hell);
        console.log(this.selected_cinema.detail[0].video_hell.sort(this.sortBy("starttime",'name')));
        this.selected_cinema_date_hells = this.selected_cinema.detail[0].video_hell.sort(this.sortBy('starttime','name'));
        this.date = this.selected_cinema.detail[0].date;

        //当地缓存
        localStorage.setItem('movie_id',this.movie_id);
        localStorage.setItem('play_cinema', JSON.stringify(this.selected_cinema));
        localStorage.setItem('cinema_date_hell', JSON.stringify(this.selected_cinema_date_hells));
        localStorage.setItem('date',this.date);
        localStorage.setItem('imgUrl',this.movie_detail.imgUrl);
        localStorage.setItem('movie_name',this.movie_detail.name);
        localStorage.setItem('language',this.movie_detail.language);
      },
      sortBy:function (key1,key2) {
        return function(a,b) {
          if (a[key1] < b[key1])
            return -1;
          else if (a[key1] == b[key1]) {
            if (a[key2] < b[key2]) {
              return -1;
            } else {
              return 1;
            }
          } else {
            return 1;
          }
        }
      },

      setData:function() {
        this.movie_id = this.$route.params.mov_id;
        getData({ apiKey: 'mov_cin_detail', params: { mov_id: this.movie_id }  })
          .then(response => {
            this.user = response.user;
            if (this.user == null) {
              console.log("user = null");
            } else {
              console.log("user = "+this.user.id + " "+this.user.phone);
            }
          
            this.movie_detail = response.data;
            console.log("movie_detail="+this.movie_detail);
            if (this.movie_detail == null) {
              this.error_message = '未找到该电影';
              this.error_message_2 = '';
            } else if (response.status === 'OK') {
              // this.play_cinemas = response.data.play_cinemas;
              this.all_cinemas = response.data.play_cinemas;
              // 根据当前地区筛选要显示的影院
              this.filter();
              if (!this.play_cinemas.length) {
                this.error_message_2 = '该电影在当前地区尚未放映，敬请期待';
              } else {
                this.setMessages();
              }
            } else {
              this.error_message = response.msg;
            }
          })
          .catch(err => {
            console.log('cin_mov err', err);
          })
        }
    },

    // 映射全局变量 city
    computed: {
      ...mapGetters({
        city: 'getCity'
      })
    },
    // 为全局变量 city 注册监听函数
    watch: {
      city: function() {
        this.filter();
        if (!this.play_cinemas.length) {
          this.error_message_2 = '该电影在当前地区尚未放映，敬请期待';
        } else {
          this.setMessages();
        }
      },
      '$route':'setData'
    }
  }
</script>

<style>

  #md_main {
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 6%;
    width: 88%;
    height: 96%;
  }

  #md_movie_detail {
    height: 40%;
  }

  #md_cinema {
    top: 40%;
    height: 30%;
    padding-top:2%; 
    clear: both;
  }

  #md_screenings {
    height: 30%;
  }

  #md_movie_title {
    height: 5%;
  }

  #md_detail {
    overflow: hidden;
  }

  #md_poster {
    width: 34%;
    height: 35%;
    float: left;
  }

  #md_content {
    width: 66%;
    height: 35%;
    float: right;
    line-height: 200%;
  }

  #md_left_content {
    margin-left: 1%;
    height: 50%;
    width: 49%;
    float: left;
  }

  #md_right_content {
    margin-left: 1%;
    width: 49%;
    height: 50%;
    float: right;
  }

  .md_content_item {
    margin-bottom: 1%;
  }

  .mov_brief_content {
    margin-left: 1%;
    margin-bottom: 1%;
    clear: both;

  }

  .md_cinema_list {
    font-size: 15pt;
    display: inline-block;
    padding: 0.5%;
    cursor: pointer;
    color:rgb(177,109,108);
  }

  .md_content_item_key {
    font-size: 15pt;
    color: gray; 
  }

  .md_content_item_value {
    font-size: 15pt;
    font-weight: 600;
    color: #333333;
  }

  .md_cinema_title {
    top:2%;
  }

  .md_title {
    color:rgb(170,140,105);
    border-bottom: 0.1vw dotted grey;
  }

  .md_cinema_active {
    background-color: rgb(197,129,128);
  }

  .md_date_active {
    color: #cc0000;
  }

  #md_play_date {
    margin-top:3%;
    margin-bottom: 0.5%; 
  }

  #md_play_detail {
    height: 90%;
    margin-bottom: 2%;
  }

  #md_movie_img {
    max-width:100%;
    max-height:100%;
  }

  #md_address {
    color: #555555;
    font-style: sans-serif;
  }

  .md_emphasis_content{
    background-color: #E6E6FA;
  }

  #md_screenings_content {
    overflow: hidden;
  }

  .md_screenings_info {
    text-align: center;
  }

  .md_start, .md_price {
    color: orange;
  }

  .md_span_play_date {
    font-size: 80%;
    padding-left: 1%;
    padding-right: 1%;
    cursor: pointer;
    background-size: 100% 100%;
  }

  .md_screenings_content_title {
    padding-left: 3%;
    padding-right: 3%;
    float: left;
    text-align: center;
    font-size: 14pt;
    line-height: 200%;
  }

  .md_devide_line {
    background-image: url("../../../assets/info_gap/gap.png");
    background-repeat: no-repeat;
    background-size: 10px 100%;
    background-position: 100%;
  }

  .md_bgimg1 {
    background-image: url("../../../assets/play_time/time1.png");
  }

  .md_bgimg2 {
    background-image: url("../../../assets/play_time/time2.png");
  }

  .md_bgimg3 {
    background-image: url("../../../assets/play_time/time3.png");
  }

  .md_link-def {
    text-decoration: none;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    color: orange;
  }

  .md_error {
    padding-top: 3%;
    padding-bottom: 3%;
    font-size: 1.6vw;
    font-family: sans-serif;
    color: OrangeRed;
  }

</style>