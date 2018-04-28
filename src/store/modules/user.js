const state = {
  userInfo: {
    name: '默认用户姓名'
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
        context.commit('setUserInfo', {name: '用户真实姓名'})
        resolve({name: '用户真实姓名'})
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
