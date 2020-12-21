const { resolve } = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "../src/index.tsx"),
  output: {
    path: resolve(__dirname, "../dist"),
    filename: "[name].js",
    // publicPath: "/assets/",
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "awesome-typescript-loader",
        },
      },
      { enforce: "pre", test: /\.(js|tsx)$/, loader: "source-map-loader" },
      // {
      //     test: /\.(ts|tsx)$/,
      //     enforce: 'pre',
      //     use: [
      //         {
      //             loader: 'tslint-loader',
      //             options: { }
      //         }
      //     ]
      // },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif|woff|woff2|ttf)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      // {
      //   test: /\.(jpg|jpeg|png|svg|gif)$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 8192,
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new htmlWebpackPlugin({
      template: "index.ejs",
    }),
    new copyWebpackPlugin({
      patterns: [
        {
          from: resolve(__dirname, "../static"),
          to: resolve(__dirname, "../dist/static"),
        },
      ],
    }),
  ],
  devServer: {
    contentBase: resolve(__dirname, "../dist"),
    historyApiFallback: true,
    host:"0.0.0.0",
    port: 5555,
    hot: true,
  },
  devtool: "eval-source-map",
};