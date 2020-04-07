import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    // 位置
    position: '哈尔滨',
    // 登陆
    userName: ''
  },
  mutations: {
    setPosition (state, val) {
      state.position = val
    },
    setUserName (state, userName) {
      state.userName = userName
    }
  },
  actions: {
    setPosition ({ commit }, val) {
      setTimeout(() => {
        commit('setPosition', val)
      }, 10)
    }
  },
  modules: {}
})
