import Vue from 'vue'
import Vuex from 'vuex'
import city_status from './city_status'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    city_status
  }
})