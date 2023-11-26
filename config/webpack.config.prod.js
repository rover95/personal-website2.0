const { resolve, join } = require("path");
const { merge } = require("webpack-merge");
const webpackConfigBase = require("./webpack.config.base");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfigProd = {
  mode: "production",
  plugins: [
    // new UglifyJSPlugin(),
    // new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      template: "index.ejs"
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, "../static"),
          to: resolve(__dirname, "../dist/static"),
        },
      ],
    }),
  ]
};
module.exports = merge(webpackConfigBase, webpackConfigProd);
