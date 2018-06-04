const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin');


module.exports = {
  //webpack在寻找相对路径的文件(如入口文件及其依赖的模块文件)时会以context为根目录，默认是当前工作目录，可以通过如下属性设置为当前目录下的app目录为context
  //context: path.resolve(__dirname,'app'),
  
  // JavaScript 执行入口文件
  entry: {
    main1:'./main.js',
    main2:'./main2.js'
  },
  output: {
    // 把所有依赖的模块合并输出到一个js 文件,name代表chunk的名字
    filename: '[name].js',
    // 把输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // 转换 .css 文件需要使用的 Loader
          use: ['css-loader'],
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `main.css`,
    }),
   new webpack.optimize.SplitChunksPlugin({
      chunks: "all",
      minSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true
    }),
  ]
};