// 서버포트와 통신
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',  // 서버 도메인 [ 8080 : 자신의 포트번호로 입력 ]
      changeOrigin: true,
    })
  );
};