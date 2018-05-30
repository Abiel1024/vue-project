import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve => require(['./views'], resolve)
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
