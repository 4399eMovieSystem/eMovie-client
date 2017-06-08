<template>
  <div>
    <h1 id="Register_title" class="LoginRegister_title" v-if="register">账号注册</h1>
    <h1 id="Login_title" class="LoginRegister_title" v-if="login">账号登录</h1>
    <div id="LoginRegister_infoTel" class="LoginRegister_info">{{Info}}</div>
    <img id="LoginRegister_cinema" src='../../../assets/background/cinema.jpg'>
    <div v-if="login">
      <ul id="Login_ul">
        <input id="Login_phone" type="text" title="手机号码" placeholder="手机号码">
        <input id="Login_password" type="password" title="密码" placeholder="请输入密码">
        <button @click="login1()" id="Login_lbutton" class="LoginRegister_button">登录</button>
        <button @click="changed()" class="LoginRegister_button">注册</button>
      </ul>
    </div>
    <div v-if="register">
      <ul id="Register_textul">
        <li>手机号码：</li>
        <li>验证码：</li>
        <li>密码：</li>
        <li>确认密码：</li>
      </ul>
      <ul id="Register_Errorul">
        <li>{{phoneError}}</li>
        <li>{{codeError}}</li>
        <li>{{passwordError}}</li>
        <li>{{password2Error}}</li>
      </ul>
      <ul id="Register_ul">
        <input id="Register_phone" type="text" title="手机号码" placeholder="手机号码">
        <input id="Register_code" type="text" title="验证码" placeholder="请输入验证码">
        <button id="Register_codeButton" @click="register_sms" class="LoginRegister_button">{{scend60}}</button>
        <input id="Register_password" type="password" title="输入密码" placeholder="输入密码">
        <input id="Register_password2" type="password" title="重新输入密码" placeholder="确认密码">
        <button @click="register1" id="Register_button" class="LoginRegister_button">注册</button>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getData } from '../../../service/getData';
  export default {
    name: 'login-register',
    data() {
      return {
        register: false,
        login: true,
        Info: '',
        Time: 5,
        scend60: '获取验证码',
        phoneError: '',
        codeError: '',
        passwordError: '',
        password2Error: '',
      }
    },
    methods: {
      changed() {
        this.register = true;
        this.login = false;
        this.Time = 5;
        this.Info = '';
        scend60: '获取验证码';
      },
      login1() {
        getData({ apiKey: 'login', data: { phone: Login_phone.value, password:  Login_password.value} })
          .then(data => {
            console.log(data);
            if (data.status == 'OK') {
              this.$router.push({ name: 'Home'});
            } else {
               /*...*/
               this.Info = '账号或密码错误';
            }
          })
          .catch(err => {
            console.log(err);
          })
      },
      register1() {
        getData({ apiKey: 'register', data: { phone: Register_phone.value, password:  Register_password.value, password1: Register_password2.value, code: Register_code.value} })
          .then(data => {
            console.log(data);
            if (data.status == 'OK') {
              Time = 5;
              var Interval = setInterval(function() {
                Info = '注册成功，网页将在 '+Time+' 秒内跳转到登录界面';
                Time--;
              },1000);
              if (Time == 0) {
                  clearInterval(Interval);
                  this.register = false;
                  this.login = true;
                  this.Info = '';
                  this.Time = 0;
                  this.scend60 = '获取验证码';
              }
            } else {
               /*...*/
               if (data.status == 'PARAM_ERROR') this.phoneError = '请输入11位有效手机号码';
               else this.Info = data.msg;
            }
          })
          .catch(err => {
            console.log(err);
          })
      },
      register_sms() {
        getData({ apiKey: 'register_sms', data: { phone: Register_phone.value }})
          .then(data => {
            console.log(data);
            if (data.status == 'OK') {
              Time = 60;
              this.codeError = '';
              var Interval = setInterval(function() {
                  scend60 =' ' +Time+' S';
                  Time--;
                },1000);
              if (Time == 0) {
                this.Info = '';
                this.Time = 0;
                this.scend60 = '获取验证码';
              }
            } else {
               /*...*/
               this.codeError = data.msg;
            }
          })
          .catch(err => {
            console.log(err);
          })
      }
    }
  } 
</script>

<style>
  html,body {
    width: 100%;
    height: 100%;
      font-family: Georgia, Garamond, serif;
  }
  input {
    background-color: #DDDBDB;
    border: none;
    height: 30px;
    width: 250px;
    line-height: 30px;
  }
  .LoginRegister_button {
    border: none;
    background-color: #A5A0A0;
    border-radius: 5px;
    width: 100px;
    height: 30px;

    font-family: Georgia, Garamond, serif;
    color: white;
    font-size: 12pt;

    margin-right: 50px;
  }
  #Register_button {
    display: block;
       font-size: 18pt;
  }
  #LoginRegister_cinema {
    float: left;

    position: absolute;
    left: 10%;
    top: 30%;
    width: 30%;
    height: 40%;
 }
 #Login_lbutton {
    background-color: rgb(198,153,109);
 }
  #Login_ul {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 40%;

  }
  #Login_title {
    font-size: 24pt;

    position: absolute;
    left: 53%;
    top: 30%;
    color: rgb(175,140,110);
  }
  #Login_phone {
    display: block;
    
    margin-bottom: 30px;
  }
  #Login_password {
    display: block;
    
    margin-bottom: 30px;
  }
  #Register_textul {
    position: absolute;
    left: 45%;
    top: 30%; 
    text-align: right;
    color: #51514F;
  }
  #Register_textul li {
    height: 30px;
    line-height: 30px;
    margin-bottom: 30px;
    font-size: 18pt;
  }
   #Register_Errorul {
    list-style-position: inside;
    display: inline-block;
    position: absolute;
    left: 80%;
    top: 30%; 
    margin-left: 0px;
    padding-left: 0px;
    vertical-align: bottom;
    color: red;
  }
  #Register_Errorul li {
    height: 30px;
    line-height: 30px;
    margin-bottom: 30px;
    font-size: 12pt;
  }

  #Register_title {
    position: absolute;
    left: 49%;
     font-size: 18pt;
    top: 22%;
    color: rgb(175,140,110);
  }
  #Register_phone {
    display: block;
    margin-bottom: 9%;
  }
  #Register_code {
    display: inline-block;
    width: 150px;
    margin-bottom: 9%;
  }
  #Register_codeButton {
    background-color: #DDDBDB;
    color: rgb(227,108,9);
    display: inline-block;
    margin-bottom: 9%;
    text-align: center;
  }
  #Register_password,#Register_password2 {
    display: block;
    margin-bottom: 9%;
  }
  #Register_ul {
    position: absolute;
    left: 55%;
    top: 30%;
    margin-left: 1%;
  }
  #LoginRegister_infoTel {
    display: block;
    position: absolute;
    left: 65%;
    top: 80%;
    width: 350px;
    font-size: 18pt;
    color: red;
  }
</style>