const state = {
  userInfo: {
    name: ''
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('setUserInfo', {
          name: 'test',
          age: 15
        })
        resolve()
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
