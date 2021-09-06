const api = process.env.NODE_ENV === 'development' ? '/api' : ''

// 发现页面相关
export const discoverBanner = api + '/banner?type=1' // 发现页面轮播图
export const defaultSearch = api + '/search/default' //默认搜索关键词


//登录相关
export const sendCaptcha = api + '/captcha/sent' //发送验证码
export const phoneLogin = api + '/login/cellphone' //手机号登录
export const checkPhone = api + '/cellphone/existence/check' //检查手机号是否注册
export const verifyCaptcha = api + '/captcha/verify' //判断验证码正确与否

