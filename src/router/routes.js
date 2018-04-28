const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../views'], resolve)
  },
  {
    path: 'login',
    name: 'login',
    component: resolve => require(['../components/loginHead'], resolve),
    children: [
      {
        path: '/home',
        name: 'home',
        component: resolve => require(['../views/home'], resolve)
      },
      {
        path: '/operation',
        name: 'operation',
        component: resolve => require(['../views/operation'], resolve)
      }
    ]
  }
]
export default routes
