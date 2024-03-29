const { resolve } = require("path");
const {merge} = require("webpack-merge");
const webpackConfigBase = require("./webpack.config.base");

const webpackConfigDev = {
  devtool: "eval-source-map",
  mode: 'development',
  devServer: {
    static: resolve(__dirname, "../dist"),
    historyApiFallback: true,
    host: "0.0.0.0",
    port: 8888,
    hot: true,
  },
}
module.exports = merge(webpackConfigBase, webpackConfigDev);
