const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(['../components/HelloWorld'], resolve)
  },
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
export default routes
