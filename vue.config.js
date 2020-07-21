module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
          '/api': {
            target: 'http://user.ctfnet.com:8000', //对应自己的接口
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
          }
        }
      }
}