import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['./views/Login'], resolve)
    },
    {
      path: 'partOne',
      name: 'partOne',
      component: resolve => require(['./views/partOne'], resolve),
      children: [
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['./views/partOne/home'], resolve)
        },
        {
          path: '/operation',
          name: 'operation',
          component: resolve => require(['./views/partOne/operation'], resolve)
        }
      ]
    }
  ]
})
