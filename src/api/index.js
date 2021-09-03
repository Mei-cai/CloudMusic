import axios from 'axios'
import {
    bannerSwiper,recSongs,defaultSearch
} from './config'

// 请求超时时间
axios.defaults.timeout = 30000
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export default {
    //获取发现页面首页轮播图
    bannerSwiperFn() {
        return axios.get(bannerSwiper)
    },
    //调用此接口 , 可获得每日推荐歌曲 ( 需要登录 )
    recSongsFn() {
        return axios.get(recSongs)
    },
    //搜索默认关键词
    defaultSearchFn() {
        return axios.get(defaultSearch)
    }
}