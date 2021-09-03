module.exports = {
    runtimeCompiler: true,
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        //以上的ip和端口是本机的;下面为需要跨的
        proxy: {//配置跨域
            '/api': {
                target: 'http://localhost:3000/',//后台地址
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': ''//通配符，所有api/的请求全都代理到http://localhost:3000/
                }
            }
        }
    }
}