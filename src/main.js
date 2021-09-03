import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//iconfont样式
// import './assets/iconfont/iconfont.css'

//请求接口集 api
import api from './api'
Vue.prototype.api = api
console.log(Vue.prototype.api);

//swiper插件
// import vueSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(vueSwiper)

Vue.config.productionTip = false

//Vant组件
import {Swipe,SwipeItem,Loading } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
