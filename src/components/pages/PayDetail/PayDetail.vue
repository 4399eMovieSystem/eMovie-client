<template>
  <div id="my_body">
    <div id="B1">
        <img src="../../../assets/paydetail/倒计时.png">
        <div>请在<span>15</span>分钟内支付<span>完成</span></div>
    </div>
    <div id="B2">
        <div id="cheak">请核对以下信息</div>
        <div id="table">
            <div id="row_one">
                <div class="info">观影时间</div>
                <div class="info">影片</div>
                <div class="info"></div>
                <div class="info" id="seat_name">座位</div>
            </div>
            <div id="row_two">
                <div class="row_two_div">{{pd_time}}</div>
                <div class="row_two_div">{{pd_mov}}</div>
                <div class="row_two_div">{{pd_mov_cinema}}</div>
                <div class="row_two_seat">
                    <span class="pd_seat" v-for="seat in pd_seat" v-if="pd_loop_flag">{{seat}}</span>
                    <span class="pd_seat" v-if="!pd_loop_flag">{{String(pd_seat)}}</span>
                </div>
            </div>
        </div>
        <div class="info">应付总额：<span id="total_price"><span>￥</span>{{pd_total_price}}</span></div>
        <div id="pay_info">
            <div class="pay_info_row">
                <div class="info">支付账号</div>
                <input v-model='pd_account'></input>
            </div>
            <div class="pay_info_row">
                <div class="info">支付密码</div>
                <input type="password" v-model='pd_password'></input>
            </div>
        </div>
        <div id="hint" v-if='hint_bool'>
            <img src="../../../assets/paydetail/感叹号.png">
            <div>输入的账户或密码错误</div>
        </div>
        <img id="pay" @click='pay' src="../../../assets/paydetail/付款.png">
</div>
</div>
</template>

<script>
import { getData } from '../../../service/getData';
  export default {
    name: 'pay-detail',
    data() {
      return {
        pd_mov_id: null,
        pd_mov_cinema: null,
        pd_time: null,
        pd_seat: null,
        pd_mov: null,
        pd_total_price: null,
        pd_tickets_id: null,
        pd_account: '',
        pd_password: '',
        pd_loop_flag: null,
        hint_bool: false,
      }
    },
    created: function(){
        this.pd_time = this.$route.query.pd_time;
        this.pd_seat = this.$route.query.pd_seat;
        if(this.pd_seat.length > 1) {
            this.pd_loop_flag = true;
        } else {
            this.pd_loop_flag = false;
        }
        this.pd_mov = this.$route.query.pd_mov;
        this.pd_total_price = this.$route.query.pd_total_price;
        this.pd_tickets_id = this.$route.query.ticks_id;
        this.pd_mov_id = this.$route.query.pd_mov_id;
        this.pd_mov_cinema = this.$route.query.pd_mov_cinema;
    },
  methods: {
      pay() {
        // console.log(this.pd_tickets_id);
        // console.log(this.pd_account);
        // console.log(this.pd_password);
        // console.log(this.pd_total_price);
        if(this.pd_account.length < 6 || this.pd_password.length < 6) {
            this.hint_bool = true;
        } else {
            this.hint_bool = false;
            getData({ apiKey: 'pay', params: {mov_id: this.pd_mov_id},data: {tcks_id: this.pd_tickets_id, pay_num: this.pd_account, pay_pwd: this.pd_password, price: this.pd_total_price}})
            .then(data => {
            if(data.status == 'OK') {
                alert("您已成功购票！");
                this.$router.push({name: 'Home'});
            } else {
                alert("支付账号或密码错误！");
            }
            })
            .catch(err => {
            console.log(err);
            alert("Error");
            });
        }
        
      },
      seats_font_size_change() {
          if(this.$route.query.pd_seat.length > 3) {

          }
      }
    }
  }
</script>

<style>
#my_body {
  height: 40vw;
}
#B1 {
    margin-left: 10%;
    margin-top: 2%;
    height: 10%;

}

#B1 img {
    zoom: 10%;
    float: left;

}

#B1 div {
    color: rgb(175,140,110);
    font-size: 2vw;
    float: left;
}

#B1 div span {
    font-size: 2.3vw;
    color: rgb(175,140,110);
}

#B2 {
    margin-top: 1.2vw;
    margin-left: 17%;
    height: 90%;
    width: 70%;
}

#B2 div{
    margin-bottom: 1vw;
}
#cheak {
    font-size: 1.8vw;
}

#table div div {
    text-align: center;
    width: 25%;
    float: left;
    font-size: 1.5vw;
}

#row_one {
    height: 7vh;
    background-position:center;
    background-image:url("../../../assets/paydetail/支付信息.jpg");
}

#row_one div {
    padding-top: 1vh;
    height: 100%;
}
#row_two {
    margin-top: -0.75vw;
    height: 12vh;
    background-position:center;
    background-image:url("../../../assets/paydetail/支付页面电影信息.jpg");
    padding-bottom: 2vh;
}

.row_two_div {
    font-weight: bold;
    margin-top: 2%;
    width: 70%;
}
#total_price, #total_price span {
    font-size: 2vw;
    color: red;
}

.pay_info_row input{
    height: 60%;
    margin-top: 1%;
    margin-left: 1%;
    width: 75%;
    float: right;
    background-position:center;
    background-repeat: repeat-y;
    background-size: 100%;
    background-image:url("../../../assets/paydetail/支付信息.jpg");
}

#pay_info {
    height: 20%;
    width: 40%;
    margin-top: 1vw;
}

.pay_info_row {
    height: 50%;
}

.pay_info_row div {
    float: left;
    height: 50%;
    line-height: 3;
}

#hint {
    padding-left: 9%;
    height: 7%;
}

#hint img {
    zoom: 50%;
    float: left;
}

#hint div {
    padding-top: 1%;
    float: left;
    line-height: 100%;
    color: red;
}

#pay {
    position: relative;
    width: 10%;
    left: 30%;
    margin-top: 2%;
    cursor: pointer;
}

.info {
    color: rgb(90,90,90);
    font-size: 1.3vw;
}

.pd_seat {
    width: 80%;
    height: 20%;
    left: 10%;
    display:inline-block;
}

#seat_name {
    text-align: left;
}

.row_two_seat {
    margin-top: -1%;
    font-weight: bold;
    width: 70%;
}
</style>