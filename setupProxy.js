const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        "/api",
      createProxyMiddleware( {
        target: 'http://43.203.227.36:8080',
        changeOrigin: true
      })
    )
    
  };