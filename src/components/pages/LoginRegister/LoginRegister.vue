<template>
  <div >
    <h1 id="Register_title" class="LoginRegister_title" v-if="register">账号注册</h1>
    <h1 id="Login_title" class="LoginRegister_title" v-if="login">账号登录</h1>
    <div id="LoginRegister_infoTel" class="LoginRegister_info">{{Info}}</div>
    <img id="LoginRegister_cinema" src='../../../assets/background/cinema.png'>
    <div id="Login_content" v-if="login">
      <ul id="Login_ul">
        <input class="Login_input" id="Login_phone" type="text" title="手机号码" placeholder="手机号码">
        <input class="Login_input" id="Login_password" type="password" title="密码" placeholder="请输入密码">
        <button @click="login1()" id="Login_lbutton" class="Login_button">登录</button>
        <button @click="changed()" class="Login_button">注册</button>
      </ul>
    </div>
    <div  v-if="register">
      <div id="Register_textul">
        <div>手机号码：</div>
        <div>验证码：</div>
        <div>密码：</div>
        <div>确认密码：</div>
      </div>
      <ul id="Register_Errorul">
        <li>{{phoneError}}</li>
        <li>{{codeError}}</li>
        <li>{{passwordError}}</li>
        <li>{{password2Error}}</li>
      </ul>
      <div id="Register_ul">
        <input class="Register_input" id="Register_phone" type="text" title="手机号码" placeholder="手机号码">
        <input class="Register_input" id="Register_code" type="text" title="验证码" placeholder="请输入验证码">
        <button id="Register_codeButton" @click="register_sms" class="Register_button">{{scend60}}</button>
        <input class="Register_input" id="Register_password" type="password" title="输入密码" placeholder="输入密码">
        <input class="Register_input" id="Register_password2" type="password" title="重新输入密码" placeholder="确认密码">
        <button @click="register1" id="Register_button" class="Register_button">注册</button>
      </div>
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
  .Login_input {
    background-color: #DDDBDB;
    border: none;
    height: 10%;
    width: 70%;
    line-height: 10%;
    padding-left: 10px;
  }
  #Login_content {
    width: 90%;
    height: 90%;
  }
  .Login_button {
    border: none;
    background-color: #A5A0A0;
    border-radius: 3px;
    width: 30%;
    height: 10%;

    font-family: Georgia, Garamond, serif;
    color: white;
    font-size: 12pt;

    margin-right: 10%;
    cursor: pointer;
  }
  .Register_input {
    background-color: #DDDBDB;
    border: none;
    height: 10%;
    width: 70%;
    line-height: 10%;
    padding-left: 10px;
    margin-bottom: 1.5em; 
  }
  .Register_button {
      border: none;
    background-color: #A5A0A0;
    border-radius: 3px;
    width: 30%;
    height: 10%;

    font-family: Georgia, Garamond, serif;
    color: white;
    font-size: 12pt;

    margin-right: 10%;
    cursor: pointer;
  }
  #LoginRegister_cinema {
    position: absolute;
    margin-top: 10%;
    margin-left: 15%;
    width: 30%;
    height: 40%;
 }
 #Login_lbutton {
    background-color: rgb(198,153,109);
 }
  #Login_ul {
    display: inline-block;
    position: absolute;
    left: 55%;
    top: 40%;
    width: 30%;
    height: 50%;
  }
  #Login_title {
    position: absolute;
    left: 58%;
    top: 26%;
    font-size: 24pt;
    width: 30%;
    color: rgb(175,140,110);
  }
  #Login_phone {
    display: block;
    
    margin-bottom: 5%;
  }
  #Login_password {
    display: block;
    
    margin-bottom: 5%;
  }
  #Register_textul {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 32%; 
    text-align: right;
    color: #51514F;
    width: auto;
    height: 50%;
  }
  #Register_textul div {
    display: block;
    height: 10%;
    vertical-align: bottom;
    line-height: 10%; 
    margin-bottom: 1em;
    
    font-size: 18pt;
  }
   #Register_Errorul {
    list-style-position: inside;
    display: block;
    position: absolute;
    left: 82%;
    top: 30%; 
    margin-left: 0px;
    padding-left: 0px;
    vertical-align: bottom;
    color: red;
  }
  #Register_Errorul li {
    height: 10%;
    line-height: 10%;
    margin-bottom: 30px;
    font-size: 12pt;;
  }

  #Register_title {
    position: absolute;
    left: 50%;
    font-size: 18pt;
    top: 20%;
    color: rgb(175,140,110);
  }
  #Register_phone {
    display: block;

  }
  #Register_code {
    display: inline-block;
    width: 35%;

  }
  #Register_codeButton {
    background-color: #DDDBDB;
    width: 32%;
    color: rgb(227,108,9);
    display: inline-block;
    text-align: center;
  }
  #Register_password,#Register_password2 {
    display: block;
  }
  #Register_ul {
    display: inline-block;
    position: absolute;
    margin: 0px;
    left: 60%;
    top: 30%;
    width: 30%;
    height: 50%;
  }
  #LoginRegister_infoTel {
    display: block;
    position: absolute;
    left: 58%;
    top: 70%;
    width: auto;
    height: 10%;
    font-size: 18pt;
    color: red;
  }
</style>