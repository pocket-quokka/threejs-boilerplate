const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
    // clean: true,
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000,
  },
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    host: 'localhost',
    port: 9000,
    compress: true,
    hot: false,
    liveReload: true,
    open: true,
    watchFiles: ['src/**/*'], // src 디렉토리의 변경사항 감지
    devMiddleware: {
      writeToDisk: true, // 디스크에 파일 쓰기 활성화
    },
  },
  watch: true,
};
