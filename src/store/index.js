import Vuex from './src'
import Vue from 'vue'
import user from './modules/user'

Vue.use(Vuex)

const state = {
  userInfo: {
    name: 'root-暂无'
  }
}
const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data
  }
}
let option = {
  modules: {
    user
  },
  state,
  mutations
}
export default new Vuex.Store(option)
