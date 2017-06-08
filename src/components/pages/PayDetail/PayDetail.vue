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
                <div class="info">座位</div>
            </div>
            <div id="row_two">
                <div>{{pd_time}}</div>
                <div>{{pd_mov}}</div>
                <div>{{pd_seat}}</div>
            </div>
        </div>
        <div class="info">应付总额：<span id="total_price">{{pd_total_price}}</span></div>
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
        <div id="pay"><img src="../../../assets/paydetail/付款.png"></div>
</div>
</div>
</template>

<script>
  export default {
    name: 'pay-detail',
    data() {
      return {
        pd_time: 'pd_time',
        pd_seat: 'pd_seat',
        pd_mov: 'pd_mov',
        pd_total_price: 'pd_total_price',
        pd_account: '',
        pd_password: '',
        hint_bool: 0,
      }
    }
  }
</script>

<style>
#my_body {
  height: 65vw;
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
    font-size: 130%;
    float: left;
}

#B1 div span {
    font-size: 140%;
}

#B2 {
    margin-top: 1.5vw;
    height: 90%;
    width: 70%;
    padding-left: 15vw;
}

#B2 div{
    margin-bottom: 1.25vw;
}
#cheak {
    font-size: 130%;
}

#table div {
    height: 10vh;
    background-position:center;
    background-repeat: no-repeat;
}

#table div div {
    line-height: 300%;
    text-align: center;
    width: 33%;
    float: left;
}

#row_one {
    background-image:url("../../../assets/paydetail/支付信息.jpg");
}

#row_two {
    margin-top: -0.75vw;
    background-image:url("../../../assets/paydetail/支付页面电影信息.jpg");
}

#total_price {
    font-size: 150%;
    color: red;
}

.pay_info_row input{
    height: 30%;
    margin-top: 1vw;
    margin-left: 1vw;
    width: 50%;
    background-position:center;
    background-repeat: repeat-y;
    background-size: 100%;
    background-image:url("../../../assets/paydetail/支付信息.jpg");
}

#pay_info {
    height: 20%;
    width: 60%;
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
    position: absolute;
    zoom: 50%;
    width: 10%;
    height: 10%;
    left: 41%;
}

.info {
    color: rgb(90,90,90);
}
</style>