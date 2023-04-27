import Vue from 'vue'
import App from './App.vue'
import Router from './routes'

Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

let instance = null;

const render = (props) => {
  // 组件实体
  const {
    container
  } = props || {};

  const base = window.__POWERED_BY_QIANKUN__ ? '/vite-app/vue/' : '/';


  new Vue({
    router: Router(base),
    render: h => h(App),
  }).$mount(container ? container.querySelector('#vue-app') : '#vue-app')
}


if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line 
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// 如果不在乾坤中运行则直接渲染
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}


// Qiankun的生命周期
// 初始化
export async function bootstrap() {
  console.log('[app1] bootstrap');
}
// 挂载
export async function mount(props) {
  console.log('[app1] mount', props);
  // 将主应用传递的 props 传递给子应用
  render(props);
}
// 卸载
export async function unmount() {
  console.log('[app1] unmount');
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}