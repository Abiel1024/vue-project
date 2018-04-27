const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: resolve => require(['../components/HelloWorld'], resolve)
  }
]
export default routes
