import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/pages/home')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('@/pages/demo')
  }
]

const Router = (url) => {
  const router = new VueRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    base: url,
    mode: 'history',
    routes // `routes: routes` 的缩写
  })
  return router
}



export default Router