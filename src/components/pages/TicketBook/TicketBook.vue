<template>
  <div>
    <router-link :to="{ name: 'PayDetail' }">跳转到支付页面</router-link>
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
            <div id="num_list"></div>
            <div id="seat_list"></div></div>
            <div id="selected_seat"></div>
        </div>
    <div id="mov_info">
        <div id="mov_name"></div>
        <div id="mov_img"></div>
        <div id="len_and_version">
            <div id="empty"></div>
            <div class="mov_div">
                <span class="mov_info">时长</span>
                <span id="len" class="mov_info_value"></span>
            </div>
            <div class="mov_div">
                <span class="mov_info">版本</span>
                <span id="version" class="mov_info_value"></span>
            </div>
        </div>
        <div class="mov_div">
            <span class="mov_info">影院</span>
            <span id="mov_cinema" class="mov_info_value text_bold"></span>
        </div>
        <div class="mov_div">
            <span class="mov_info">影厅</span>
            <span id="mov_hall" class="mov_info_value text_bold"></span>
        </div>
        <div class="mov_div">
            <span class="mov_info">场次</span>
            <span id="mov_session" class="mov_info_value text_bold"></span>
        </div>
        <div class="mov_div">
            <span class="mov_info">票价</span>
            <span id="mov_price" class="mov_info_value text_bold"></span>
        </div>
        <div class="mov_div">
            <span class="mov_info">座位</span>
            <span id="mov_seat" class="text_bold"></span>
        </div>
        <div class="mov_div">
            <span class="mov_info" id="total_price">总价</span>
            <span id="total_price_value">￥0</span>
        </div>
        <div id="submit">
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
        title: '订票页面',
        people: 'zhihui'
      }
    }
  }

  
</script>

<style>
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
    width: 53%;
    height: 90%;
    float: left;
    border-right: 0.1vw dotted rgb(127,127,127);
}

#seat_list {
    margin-left: -43.5%;
    margin-top: 10%;
    width: 90%;
    height: 80%;
    float: left;
}

#mov_name {
    height: 7%;
    text-align: center;
    border-bottom:dotted 0.1vw rgb(127,127,127);
    color: rgb(175,140,110);
}

#mov_img {
    width: 50%;
    height: 30%;
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

#total_price_value {
    color: red;
    font-size: 130%;
}

.seat {
    width: 8%;
    height: 12.5%;
    zoom: 40%;
    float: left;
    background-position:center;
    background-repeat: no-repeat;
    background-size: 75%;
    cursor: pointer;
}

.div_num {
    padding-top: 0.5%;
    height: 10.5%;
    color: rgb(127,127,127);
}
.sell_avai {
    background-image:url("../../../assets/paydetail/可选.png");
}

.selected {
    background-image:url("../../../assets/paydetail/已选.png");
}

.sold {
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
    font-weight: bold;
}

#mov_seat {
    color: black;
}

#submit img {
    zoom: 50%;
}
</style>