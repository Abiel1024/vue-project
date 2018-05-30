module.exports = {
  assetsDir: 'static',
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 8000,
    https: false,
    hotOnly: false,
    proxy: null // string | Object
  }
}
