import Vue from 'vue'

export default {
  // 单例化数据
  state: {
    target_city: '广州'
  },
  // 修改状态的事件回调函数
  mutations: {
    setCity(state, name) {
      state.target_city = name;
    }
  },
  // 状态获取函数
  getters: {
    getCity(state) {
      return state.target_city;
    }
  },
  // 分发修改状态的事件
  actions: {
    cityChange(context, city) {
      context.commit('setCity', city);
    }
  }
}