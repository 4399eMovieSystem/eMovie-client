<template>
  <div>
    <p>{{name}}<span>{{grade}}</span></p>
    <div>
      <div>地址: {{address}} </div>
      <div>联系方式:  {{phone}} </div>
    </div>
    <p>电影列表</p>
    <div>
    <img v-for="move in moves" v-bind:src="move.imgUrl">

    </div>

    <p>{{currentMove.name}}<span>{{currentMove.grade}}</span></p>
    <div>
      <div>时长: {{currentMove.length}}</div>
      <div>类型: {{currentMove.type}}</div>
      <div>导演: {{director}}</div>
      <div>时长: {{actor}}</div>
    </div>
    <div>
        <table>
      <tr>
        <th>放映时间</th>
        <th>语言版本</th>
        <th>放映厅</th>
        <th>在线售价</th>
        <th>在线选座</th>
      </tr>
      <tr v-for="ascreen in currentMove.screens">
        <td>{{ascreen.time}}</td>
        <td>{{ascreen.language}}</td>
        <td>{{ascreen.videohall}}</td>
        <td>{{ascreen.price}}</td>
        <td><router-link :to="{ name: 'MovDetail', params: { mov_id: currentMove.mov_id } }">
            <button>在线选座</button>
          </router-link></td>
      </tr>
    </table>
    </div>

    <router-link :to="{ name: 'TicketBook' }">跳转到订票页面</router-link>
  </div>
</template>

<script>
  export default {
    name: 'cin-detail',
    data() {
      return {
        name: '万达国际影城(白云万达广场店)',
        address: '白云万达广场',
        actor: '',
        phone: 12312312312,
        director: '',
        moves: [],
        grade: 4,
        currentMove:  {
          "mov_id": -1,
          "name": '123',
          "type": '1',
          "length": '12',
          "imgUrl": '../../assets/background/warn.png',//电影的海报
          "directors": [
              {
                  "name": '',
                  "id": -1,
              }
          ],
          "actors": [
              {
                  "name": '',
                  "id": -1,
              }
          ],
          "screens": [
              {
                   "time": "1",
                   "price": 42.5,
                   "language": '英语',
                   "videohall": "3号厅",
              }

          ],
          "comments": [
              '非常好看','还不错'
          ]
        },

      }
    }
  }
</script>

<style>

</style>