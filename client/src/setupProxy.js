const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/user/login', {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/user/*', {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/wallet/*/accounts/*', {
      target: 'http://localhost:5000',
      changeOrigin: true,
    }),
  );
};
