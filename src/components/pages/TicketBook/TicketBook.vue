<template>
  <div id="tb_body_two">
    <div id="seat_tag_list">
        <div class="seat_tag">
            <img src="../../../assets/paydetail/可选.png" alt="可选">
            <span>可选</span>
        </div>
        <div class="seat_tag">
            <img src="../../../assets/paydetail/已选.png" alt="已选">
            <span>已选</span>
        </div>
        <div class="seat_tag">
            <img src="../../../assets/paydetail/已售.png" alt="已售">
            <span>已售</span>
        </div>
        <div class="seat_tag">
            <img src="../../../assets/paydetail/情侣.png" alt="情侣">
            <span>情侣</span>
        </div>
    </div>
    <div id="h">
        <div id="hall">
            <div id="screen">银幕</div>
            <div id="num_list">
                <div class="div_num" v-for="temp in tb_num_list">{{temp}}</div>
            </div>
            <div id="seat_list">
                <div v-for="seat in tb_seats" class="seat" :class="{'seat_avai': seat.valid, 'seat_sold': !seat.valid, 'seat_selected': seat.valid == 2}" :id='seat.seat_id' @click="select_seat(seat)"></div>
            </div></div>
            <div id="selected_seat">
                <div v-for="selected_seat in tb_selected_seats" class="selected_seat_label">{{selected_seat.row_col | my_filter}}<span class="del" @click="del(selected_seat)">x</span></div>
            </div>
        </div>
    <div id="mov_info">
        <div id="tb_mov_name">{{tb_mov_name}}</div>
        <img id="tb_mov_img" v-bind:src="tb_img_url">
        <div id="len_and_version">
            <div id="empty"></div>
            <div class="mov_div">
                <span class="mov_info">时长</span>
                <span class="mov_info_value">{{tb_mov_len}}</span>
            </div>
            <div class="mov_div">
                <span class="mov_info">版本</span>
                <span class="mov_info_value">{{tb_version}}</span>
            </div>
        </div>
        <div class="mov_div">
            <span class="mov_info">影院</span>
            <span class="mov_info_value text_bold">{{tb_mov_cinema}}</span>
        </div>
        <div class="mov_div">
            <span class="mov_info">影厅</span>
            <span class="mov_info_value text_bold">{{tb_mov_hall}}</span>
        </div>
        <div class="mov_div">
            <span class="mov_info">场次</span>
            <span class="mov_info_value text_bold">{{tb_mov_session}}{{tb_mov_starttime}}~{{tb_mov_endtime}}</span>
        </div>
        <div class="mov_div">
            <span class="mov_info">票价</span>
            <span class="mov_info_value text_bold">{{tb_mov_price}}<span class="mov_info_value text_bold">￥/张</span></span>
        </div>
        <div class="mov_div">
            <span class="mov_info">座位</span>
            <span class="text_bold" v-for="temp in tb_selected_seats">{{temp.row_col | my_filter}}</span>
        </div>
        <div class="mov_div">
            <span class="mov_info" id="total_price">总价</span>
            <span id="tb_total_price_value"><span>￥</span>{{tb_total_price_value}}</span>
        </div>
        <div id="submit" @click="submit">
            <router-link :to="{ name: 'PayDetail' }" v-if='tb_jump'></router-link>
            <img src="../../../assets/paydetail/提交订单.png">
        </div>
    </div>
  </div>
</template>

<script>
import { getData } from '../../../service/getData';
  export default {
    name: 'ticket-book',
    data() {
      return {
        // 获取的json信息
        tb_cdh: null,
        tb_pc: null,
        tb_mov_name: null,
        // 获取的页面要显示的信息
        tb_mov_len: null,
        tb_version: null,
        tb_mov_cinema: null,
        tb_mov_hall: null,
        tb_mov_session: null,
        tb_mov_starttime: null,
        tb_mov_endtime: null,
        tb_mov_price: null,
        tb_img_url: null,
        // 提交的数据
        tb_mov_id: null,
        tb_vh_mov_id: null,
        tb_vh_id: null,
        // 其他数据
        tb_seats: null,
        tb_num_list: 8,
        tb_selected_seats: [],
        tb_selected_max_num: 6,
        tb_jump: true,
      }
    },
    computed: {
        tb_total_price_value: function() {
            return this.tb_selected_seats.length * this.tb_mov_price;
        },
    },
    mounted: function() {
        this.tb_cdh = JSON.parse(localStorage.cinema_date_hell)[localStorage.index_of_cinema_date_hell];
        this.tb_pc = JSON.parse(localStorage.play_cinema);
        this.tb_mov_name = localStorage.movie_name;
        this.tb_version = localStorage.language;
        this.tb_mov_cinema = this.tb_pc.name;
        this.tb_mov_hall = this.tb_cdh.name;
        this.tb_mov_session = localStorage.date;
        this.tb_mov_starttime = this.tb_cdh.starttime;
        this.tb_mov_endtime = this.tb_cdh.endtime;
        this.tb_mov_price = this.tb_cdh.price;
        this.tb_img_url = localStorage.imgUrl;
        this.tb_mov_id = localStorage.movie_id;
        this.tb_vh_mov_id = this.tb_cdh.vh_mov_id;
        this.tb_vh_id = this.tb_cdh.vh_id;
        this.tb_mov_len = this.calculate_mov_len();
        this.get_seats_info();
    },
    methods: {
        submit() {
            let submit_seats_id = [];
            for(var seat in this.tb_selected_seats) {
                submit_seats_id.push(String(this.tb_selected_seats[seat].seat_id));
            }
            console.log("mov_id="+this.tb_mov_id);
            console.log("vh_mov_id="+this.tb_vh_mov_id);
            console.log("seats_id="+submit_seats_id);
            console.log("price="+this.tb_total_price_value);
            getData({apiKey: 'submit', params: {mov_id: this.tb_mov_id},data: {vh_mov_id: this.tb_vh_mov_id, seats_id: submit_seats_id, price: this.tb_total_price_value}})
              .then(data => {
                  console.log(data);
                  if(data.status == 'OK') {
                    this.tb_jump = true;
                  } else {
                      console.log("error");
                  }
              })
              .catch(err => {
                  console.log(err);
              })
        },
        get_seats_info()  {
            getData({apiKey: 'seats_info', params: {mov_id: this.tb_mov_id, vh_id: this.tb_vh_id}})
              .then(data => {
                  if(data.status == 'OK') {
                    this.tb_seats = data.data.seats;
                  } else {
                      console.log(data);
                  }
              })
              .catch(err => {
                     console.log(err);
                })
        },
        select_seat(seat) {
            if(this.tb_selected_seats.length >= this.tb_selected_max_num && seat.valid == 1) {
                alert("你选的座位太多了!");
            } else {
                if(seat.valid == 1) {
                    seat.valid = 2;
                    this.tb_selected_seats.push(seat);
                } else if(this.tb_selected_seats.indexOf(seat) != -1){
                    seat.valid = true;
                    this.tb_selected_seats.splice(this.tb_selected_seats.indexOf(seat), 1);
                } else {
                    alert("该座位已售，请选择其他座位");
                }
            }
        },
        del(seat) {
            seat.valid = true;
            this.tb_selected_seats.splice(this.tb_selected_seats.indexOf(seat), 1);
        },
        calculate_mov_len() {
            var st = this.tb_mov_starttime;
            var et = this.tb_mov_endtime;
            st = st.split(":");
            et = et.split(":");
            var s = parseInt(st[0])*60 + parseInt(st[1]);
            var e = parseInt(et[0])*60 + parseInt(et[1]);
            return String(e-s) + "分钟";
        },
    },
    filters: {
        my_filter(row_col) {
            row_col = row_col.split("排");
            var row = String(parseInt(row_col[0])+1);
            var col = String(parseInt(row_col[1].split("列")[0])+1);
            return row+"行"+col+"列";
        },
    }
  }

  
</script>

<style>
#tb_body_two {
    height: 65vw;
}
#seat_tag_list {
    padding-left: 6vw;
    margin-top: 2%;
    height: 6%;
}

#seat_tag_list img {
    zoom: 40%;
    padding-left: 10vw;
}

#h{
    border: 0px;
    height: 84%;
    width: 60%;
    float: left;
}

#mov_info {
    border: 0px;
    height: 84%;
    width: 30%;
    float: right;
}

#hall {
    width: 90%;
    height: 70%;
    margin-left: 10%;
}

#selected_seat {
    margin-top: 3%;
    width: 90%;
    height: 30%;
    float: right;
}

.seat_tag {
    display: inline;
}

#screen {
    margin-left: 18%;
    width: 70%;
    height: 10%;
    text-align: center;
    border-bottom:dotted 0.1vw rgb(127,127,127);
    color: rgb(175,140,110)
}

#num_list {
    width: 54%;
    height: 75%;
    float: left;
    border-right: 0.1vw dotted rgb(127,127,127);
    margin-top: 5%;
}

#seat_list {
    margin-left: -44.5%;
    margin-top: 5%;
    width: 90%;
    height: 75%;
    float: left;
}

#tb_mov_name {
    height: 7%;
    text-align: center;
    border-bottom:dotted 0.1vw rgb(127,127,127);
    color: rgb(175,140,110);
}

#tb_mov_img {
    width: 45%;
    height: 27%;
    margin-right: 5%;
    margin-bottom: 3%;
    float: left;
}

#len_and_version {
    width: 50%;
    height: 30%;
    float: right;
}

#empty {
    height: 60%;
}

#submit {
    height: 6%;
    width: 60%;
    margin-top: 10%;
    cursor: pointer;
}

.mov_info_value {
    font-size: 1.3vw;
    color: black;
}

.mov_info {
    font-size: 1.3vw;
}

.mov_div {
    margin-top: 0.75vw;
}
#total_price {
    font-size: 130%;
}

#tb_total_price_value, #tb_total_price_value span {
    color: red;
    font-size: 130%;
}

.seat {
    width: 11%;
    height: 12.7%;
    float: left;
    background-position:center;
    background-repeat: no-repeat;
    background-size: 60%;
    cursor: pointer;
}

.div_num {
    line-height: 4vw;
    height: 12.7%;
    color: rgb(127,127,127);
}
.seat_avai {
    background-image:url("../../../assets/paydetail/可选.png");
}

.seat_selected {
    background-image:url("../../../assets/paydetail/已选.png");
}

.seat_sold {
    background-image:url("../../../assets/paydetail/已售.png");
}

.couples {
    background-image:url("../../../assets/paydetail/情侣.png");
}

.selected_seat_label {
    font-size: 1.3vw;
    border: 0.1vw solid rgb(118,146,60);
    float: left;
    margin-right: 2%;
    margin-bottom: 0.5%;
    width: 14%;
    color: rgb(118,146,60);
}

.del {
    float: right;
    margin-right: 2%;
    cursor: pointer;
}

span {
    color: rgb(127,127,127);
}

.text_bold {
    margin-right: 1vw;
    font-weight: bold;
}

#mov_seat {
    color: black;
}

#submit img {
    zoom: 50%;
}
</style>