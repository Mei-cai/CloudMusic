import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//iconfont样式文件，最后要用本地的，目前在用链接
//at.alicdn.com/t/font_2782279_0d5jbukq5085.css
//不要忘了去index.html里把link引入的链接样式删除，要改用本地的

//请求接口集 api
import api from './api'
Vue.prototype.api = api
console.log(Vue.prototype.api);

Vue.config.productionTip = false

//Vant组件
import {Swipe,SwipeItem,Loading,Toast,PasswordInput, NumberKeyboard} from 'vant'
// import {Toast} from 'vant'
Vue.use(Swipe).use(SwipeItem)
Vue.use(Loading)
Vue.use(Toast)
Vue.use(PasswordInput).use(NumberKeyboard)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
