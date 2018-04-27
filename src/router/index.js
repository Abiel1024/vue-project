import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import {LoadingBar} from 'iview'

Vue.use(Router)

let myRouter = new Router({
  mode: 'history',
  routes
})
myRouter.beforeEach((to, from, next) => {
  window.aaaa = LoadingBar
  LoadingBar.start()
  setTimeout(() => {
    next()
  }, 1000)
})
myRouter.afterEach((to, from) => {
  LoadingBar.finish()
})

export default myRouter
