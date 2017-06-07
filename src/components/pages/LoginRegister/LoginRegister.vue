<template>
  <div>
    <h1 id="Register-title" class="LoginRegister-title" v-if="register">账号注册</h1>
    <h1 id="Login-title" class="LoginRegister-title" v-if="login">账号登录</h1>
    <div id="LoginRegister-infoTel" class="LoginRegister-info">{{telInfo}}</div>
    <div id="LoginRegister-infoCode" class="LoginRegister-info">{{codeInfo}}</div>
    <div id="LoginRegister-infoPassword" class="LoginRegister-info">{{passwordInfo}}</div>
    <div id="LoginRegister-infoPassword2" class="LoginRegister-info">{{password2Info}}</div>
    <img id="LoginRegister-cinema" src='../../../assets/background/cinema.jpg'>
    <div v-if="login">
      <ul id="Login-ul">
        <input id="Login-phone" type="text" title="手机号码" placeholder="手机号码">
        <input id="Login-password" type="password" title="密码" placeholder="请输入密码">
        <button @click="login" class="LoginRegister-button">登录</button>
        <button @click="login=false;registe=true" class="LoginRegister-button">注册</button>
      </ul>
    </div>
    <div v-if="register">
      <ul id="Register-textul">
        <li>手机号码：</li>
        <li>验证码：</li>
        <li>密码：</li>
        <li>确认密码：</li>
      </ul>
      <ul id="Register-ul">
        <input id="Register-phone" type="text" title="手机号码" placeholder="手机号码">
        <input id="Register-code" type="text" title="验证码" placeholder="请输入验证码">
        <button id="Register-codeButton" @click="register_sms" class="LoginRegister-button">获取验证码</button>
        <input id="Register-password" type="password" title="输入密码" placeholder="输入密码">
        <input id="Register-password2" type="password" title="重新输入密码" placeholder="确认密码">
        <button @click="register" class="LoginRegister-button">注册</button>
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
        register: true,
        login: false,
        telInfo: '123',
        codeInfo: '',
        passwordInfo: '',
        password2Info: '',
      }
    },
    methods: {
      login() {
        getData({ apiKey: 'login', data: { phone: '18819253767', password: '14331015' } })
          .then(data => {
            this.telInfo = data;
          })
          .catch(err => {
            console.log(err);
          })
      },
      register() {

      },
      register_sms() {

      }
    }
  } 
</script>

<style>
  html,body {
    width: 100%;
    height: 100%;
      font-family: Georgia, Garamond, serif;
    color: white;
  }
  input {
    background-color: #DDDBDB;
    border: none;
    height: 30px;
    width: 250px;
    line-height: 30px;
  }
  .LoginRegister-button {
    border: none;
    background-color: #A5A0A0;
    border-radius: 5px;
    width: 100px;
    height: 30px;

    font-family: Georgia, Garamond, serif;
    color: white;
    font: 18pt;

    margin-right: 50px;
  }
  #LoginRegister-cinema {
    float: left;

    position: absolute;
    left: 10%;
    top: 30%;
    width: 40%;
    height: 50%;
 }
  #Login-ul {
    position: absolute;
    left: 60%;
    top: 40%;

  }
  #Login-title {
    font-size: 30pt;

    position: absolute;
    left: 65%;
    top: 30%;
    color: rgb(175,140,110);
  }
  #Login-phone {
    display: block;
    
    margin-bottom: 30px;
  }
  #Login-password {
    display: block;
    
    margin-bottom: 30px;
  }
  #Register-textul {
    position: absolute;
    left: 50%;
    top: 25%; 
    text-align: right;
    color: #51514F;
  }
  #Register-textul li {
    height: 30px;
    line-height: 30px;
    margin-bottom: 30px;
    font-size: 18pt;
  }
  #Register-title {
    position: absolute;
    left: 60%;
    top: 15%;
    color: #DDD60F;
  }
  #Register-phone {
    display: block;
    margin-bottom: 30px;
  }
  #Register-code {
    display: inline-block;
    width: 150px;
    margin-bottom: 30px;
  }
  #Register-codeButton {
    background-color: #DDDBDB;
    color: rgb(227,108,9);
    display: inline-block;
    margin-bottom: 30px;
  }
  #Register-password,#Register-password2 {
    display: block;
    margin-bottom: 30px;
  }
  #Register-ul {
    position: absolute;
    left: 60%;
    top: 25%;
  }
</style>