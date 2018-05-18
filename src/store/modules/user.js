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
  getUserInfo(context) {
    return new Promise((resolve) => {
      setTimeout(() => {
        context.commit('setUserInfo', {name: 'Abiel'})
        resolve({name: 'Abiel'})
      }, 1000)
    })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
