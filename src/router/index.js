import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {//底部导航
    path: '/',
    name: 'tabbar',
    component: () => import('../views/tabbar'),
    redirect:'/discover',
    children:[
      {//发现
        path:'/discover',
        name:"discover",
        component:()=>import('../views/discover')
      },
      {//播客
        path:'/podcast',
        name:"podcast",
        component:()=>import('../views/podcast')
      },
      {//我的
        path:'/mine',
        name:"mine",
        component:()=>import('../views/mine')
      },
      {//K歌
        path:'/sing',
        name:"sing",
        component:()=>import('../views/sing')
      },
      {//云村
        path:'/cloud',
        name:"cloud",
        component:()=>import('../views/cloud')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
