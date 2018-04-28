const routes = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['../pages'], resolve)
  },
  {
    path: 'login',
    name: 'login',
    component: resolve => require(['../components/loginHead'], resolve),
    children: [
      {
        path: '/home',
        name: 'home',
        component: resolve => require(['../pages/home'], resolve)
      },
      {
        path: '/operation',
        name: 'operation',
        component: resolve => require(['../pages/operation'], resolve)
      }
    ]
  }
]
export default routes
