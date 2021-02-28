/* eslint-disable no-undef */
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  //root/src/index.jsを読み込む
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  //root/public/ にbundle.jsとしてentryで読み込んだファイルを最適化し出力する
  devtool: 'inline-source-map',
  //chromeの開発者ツールで最適化されるファイル達をその前の状態で確認できるようにする
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
    ],
  },
  //babelなどトランスパイルをするmoduleを最適化する際のルールの設定
};
