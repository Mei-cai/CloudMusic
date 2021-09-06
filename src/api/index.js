import axios from 'axios'
import {
    discoverBanner, defaultSearch, sendCaptcha,phoneLogin,checkPhone,verifyCaptcha
} from './config'

// 请求超时时间
axios.defaults.timeout = 30000
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export default {
    //获取发现页面首页轮播图
    discoverBanner() {
        return axios.get(discoverBanner)
    },
    //搜索默认关键词
    defaultSearch() {
        return axios.get(defaultSearch)
    },
    //发送验证码，phone = 手机号
    sendCaptcha(phone) {
        return axios.get(sendCaptcha, {
            params: {
                phone,
            }
        })
    },
    //手机号登录
    //data的参数：phone = 手机号,password = 密码,captcha = 验证码
    //传入captcha后,password参数将失效
    phoneLogin(data){
        return axios.get(phoneLogin,{
            params:data
        })
    },
    //检查手机号是否注册，phone = 手机号
    checkPhone(phone){
        return axios.get(checkPhone,{
            params:{
                phone,
            }
        })
    },
    //判断验证码正确与否
    //phone = 手机号，captcha = 验证码
    verifyCaptcha(phone,captcha){
        return axios.get(verifyCaptcha,{
            params:{
                phone,captcha
            }
        })
    }
}