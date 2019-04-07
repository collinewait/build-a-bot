// This is actually webpack config and vue behind the scenes is using webpac-dev-serve
// thats why we are using webpack config here
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
};
