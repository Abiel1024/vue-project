import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {
      name: 'root-暂无'
    }
  },
  getters: {
    userInfo: state => {
      return state.userInfo
    }
  },
  mutations: {
    setUserInfo (state, data) {
      state.userInfo = data
    }
  },
  actions: {
    async getUserInfo ({ commit }) {
      const result = await new Promise((resolve) => {
        setTimeout(() => {
          commit('setUserInfo', { name: 'Abiel' })
          resolve({ name: 'Abiel' })
        }, 1000)
      })
      return result
    }
  }
})
