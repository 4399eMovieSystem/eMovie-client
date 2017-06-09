<template>
  <div id="CinDetail">
    <div class='CinDetail_p'>{{name}}</div>
    <div class="CinDetail_div">
      <div class='CinDetail_text'>地址: {{address}} </div>
      <div class='CinDetail_text'>联系方式:  {{phone}} </div>
    </div>
    <div class='CinDetail_p'>电影列表</div>
    <div class="CinDetail_div">
    <img class="CinDetail_img" v-for="move in movies" v-bind:src="move.imgUrl" @click="CinDetail_movie(move)">

    </div>

    <div class='CinDetail_p'>{{movie.name}}</div>
    <div class="CinDetail_div">
      <div class='CinDetail_text'>时长: {{movie.length}}</div>
      <div class='CinDetail_text'>类型: {{movie.type}}</div>
    </div>
    <div class='CinDetail_p'>观影时间</div>
    <div class="CinDetail_div">
    <table>
      <tr>
        <th class='CinDetail_text'>放映时间</th>
        <th class='CinDetail_text'>类型</th>
        <th class='CinDetail_text'>放映厅</th>
        <th class='CinDetail_text'>在线售价</th>
        <th class='CinDetail_text'>在线选座</th>
      </tr>
      <tr v-for="ascreen in screens">
        <td class='CinDetail_text'>{{ascreen.starttime}}</td>
        <td class='CinDetail_text'>{{ascreen.type}}</td>
        <td class='CinDetail_text'>{{ascreen.name}}</td>
        <td class='CinDetail_text'>{{ascreen.price}}</td>
        <td class='CinDetail_text'><router-link :to="{ name: 'MovDetail', params: { mov_id: m_id} }">
            <button>在线选座</button>
          </router-link></td>
      </tr>
    </table>
    </div>

  </div>
</template>

<script>
import { getData } from '../../../service/getData';
  export default {
    name: 'cin-detail',
    data() {
      return {
        name: '万达国际影城(白云万达广场店)',
        address: '白云万达广场',
        cin_id: 5,
        actor: '1',
        phone: 1,
        director: '1',
        movies: [],
        m_id: -1,
        movie: null,
        screens: [],
        vedio_hells: null
      }
    },
    mounted: function() {
      //this.cin_id = this.$route.path.substr(10);
      getData({ apiKey: 'cin_info', params: { cin_id: this.cin_id }  })
          .then(response => {
            var data = response.data;
            this.name = data.name;
            this.address = data.address;
            this.phone = data.phone;
            this.movies = data.movies;
            if (this.m_id == -1) this.m_id = data.movies[0].mov_id;
            if (this.movie == null) this.movie = data.movies[0];
            var ob = data.vedio_hells[this.m_id];
            this.vedio_hells = data.vedio_hells;
            this.screens = ob["2017-8-10"];
          })
          .catch(err => {
            console.log('cin_mov err', err);
      })
    },
    methods: {
          CinDetail_movie(movie) {
          this.m_id = movie.mov_id;
          this.movie = movie;
          var ob = this.vedio_hells[this.m_id];
          this.screens = ob["2017-8-10"];
          console.log(this.m_id);
      }
    }
  }
</script>

<style>
.CinDetail {
  font-family: Georgia, Garamond, serif;
}
.CinDetail_p {
  width:auto;
  display:inline-block !important; 
  display:inline;
  font-family: Georgia, Garamond, serif;
  color: rgb(172,155,121);
  font-weight: bold;
  font-size: 18pt;
  margin-left: 10%;
  border-bottom:1px dashed #111;
}
.CinDetail_img {
  display: inline-block;
  width: 20%;
  height: 100%;
  margin-left: 1%;
  border: 3px solid white;
  cursor: pointer;
  transition: all 0.6s;
}
.CinDetail_img:hover {
  border-color: green;
  transform: scale(1.1);
}
.CinDetail_text {
  margin-bottom: 1%;
}
.CinDetail_div {
  margin-top: 1%;
  margin-bottom: 2%;
  background-color: rgb(230,230,220);
  width: 60%;
  height: 30%;
  margin-left: 10%;
}
</style>