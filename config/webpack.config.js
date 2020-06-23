const path = require('path');

module.exports = {
  entry: path.resolve(__dirname,'../src/index.tsx'),
  output:{
    path: path.resolve(__dirname,'../dist'),
    filename:'bundle.js'
  },
  resolve: {
    extensions: [".js", ".tsx", ".jsx", ".json"]
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        use:{
          loader: 'ts-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.') ，
    hot: true
  }
}