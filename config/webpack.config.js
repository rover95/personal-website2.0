const { resolve } = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "../src/index.tsx"),
  output: {
    path: resolve(__dirname, "../dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".tsx", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "awesome-typescript-loader",
        },
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: "file-loader",
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({}),
    new copyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, "../assets"),
          to: resolve(__dirname, "../dist/assets"),
        },
      ],
    }),
  ],
  // devServer: {
  //   contentBase: resolve(__dirname, "../dist"),
  //   port: 5555,
  //   hot: true,
  // },
};