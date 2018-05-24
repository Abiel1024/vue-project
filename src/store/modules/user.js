const state = {
  userInfo: {
    name: 'user-暂无'
  }
}
const getters = {
  userInfo: state => {
    return state.userInfo
  }
}
const mutations = {
  setUserInfo(state, data) {
    state.userInfo = data
  }
}
const actions = {
  async getUserInfo(context) {
    let result = await new Promise((resolve) => {
      setTimeout(() => {
        context.commit('setUserInfo', {name: 'Abiel'})
        resolve({name: 'Abiel'})
      }, 1000)
    })
    return result
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
