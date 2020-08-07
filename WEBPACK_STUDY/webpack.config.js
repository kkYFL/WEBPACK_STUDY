const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html'
})

module.exports = {
  // 编译模式
  mode: 'development', // development production
  plugins: [htmlPlugin],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.jpg|png|git|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=16940' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
    ]
  }
}
