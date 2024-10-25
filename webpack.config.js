const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
  devServer: {
    host: 'localhost',
    port: 9000,
    compress: true,
    hot: true,
    open: true,
    static: {
      directory: __dirname,
      watch: true,
    },
    historyApiFallback: true, // SPA의 경우를 대비해 추가
  },
}
