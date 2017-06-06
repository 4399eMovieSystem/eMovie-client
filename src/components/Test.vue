<template>
  <div class="hello">
    <button v-on:click="login">login!</button>
    <div>{{ msg_1 }}</div>
    <button v-on:click="book">book!</button>
    <div>{{ msg_2 }}</div>
    <button v-on:click="cin_mov">cin_mov!</button>
    <div>{{ msg_3 }}</div>
    <button v-on:click="peo">peo!</button>
    <div>{{ msg_4 }}</div>
    <button v-on:click="logout">logout!</button>
    <div>{{ msg_5 }}</div>
  </div>
</template>

<script>
import { getData } from '../service/getData';
export default {
  name: 'hello',
  data () {
    return {
      msg_1: 'Welcome to Your Vue.js App',
      msg_2: 'Welcome to Your Vue.js App',
      msg_3: 'Welcome to Your Vue.js App',
      msg_4: 'Welcome to Your Vue.js App',
      msg_5: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    login() {
      getData({ apiKey: 'login', data: { phone: '18819253767', password: '14331015' } })
        .then(data => {
          this.msg_1 = data;
        })
        .catch(err => {
          console.log(err);
        })
    },
    peo() {
      getData({
        apiKey: 'peo_info', 
        params: { peo_id: 2 }
      }).then(data => {
        this.msg_4 = data;
      }).catch(err => {
        console.log('peo error', err);
      })
    },
    book() {
      getData({ apiKey: 'get_pay_data', params: { mov_id: 1 }, data: { vh_mov_id: 1, seat_id: 1 } })
        .then(data => {
          this.msg_2 = data;
        })
        .catch(err => {
          console.log('book error', err);
        })
    },
    cin_mov() {
      getData({ apiKey: 'mov_info', params: { mov_id: 2 }})
        .then(data => {
          this.msg_3 = data;
        })
        .catch(err => {
          console.log('cin_mov err', err);
        })
    },
    logout() {
      getData({ apiKey: 'logout'})
        .then(data => {
          this.msg_5 = data;
        })
        .catch(err => {
          console.log('logout err', err);
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
