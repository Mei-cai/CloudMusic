import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {//底部导航
    path: '/',
    name: 'tabbar',
    component: () => import('../views/tabbar'),
    redirect: '/discover',
    children: [
      {//发现
        path: '/discover',
        name: "discover",
        component: () => import('../views/discover')
      },
      {//播客
        path: '/podcast',
        name: "podcast",
        component: () => import('../views/podcast')
      },
      {//我的
        path: '/mine',
        name: "mine",
        component: () => import('../views/mine')
      },
      {//K歌
        path: '/sing',
        name: "sing",
        component: () => import('../views/sing')
      },
      {//云村
        path: '/cloud',
        name: "cloud",
        component: () => import('../views/cloud')
      },
    ]
  },
  //搜索页
  {
    path: '/search',
    name: "search",
    component: () => import('../views/search')
  },
  //登录选项
  {
    path: '/login',
    name: "login",
    component: () => import('../views/login'),
  },
  //手机号登录
  {
    path: '/phoneLogin',
    name: "phoneLogin",
    component: () => import('../views/login/components/phone.vue'),
    redirect: '/phoneLogin/writePhone',
    children: [
      //填手机号
      {
        path: '/phoneLogin/writePhone',
        name: "writePhone",
        component: () => import('../views/login/components/writePhone.vue'),
        meta: {
          keepAlive: true,
        }
      },
      //验证码
      {
        path: '/phoneLogin/code',
        name: "code",
        component: () => import('../views/login/components/code.vue'),
        // meta: {
        //   keepAlive: true,
        // }
      },
    ],
  },
  //播放页，目前写成路由，以后考虑写成组件,要带底部播放栏
  {
    path: '/audio',
    name: "audio",
    component: () => import('../views/audio'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
