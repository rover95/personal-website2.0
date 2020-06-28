const { resolve } = require("path");
const copyWebpackPlugin = require("copy-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "../src/index.tsx"),
  output: {
    path: resolve(__dirname, "../dist"),
    filename: "[name].js",
    // publicPath: "/assets/",
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
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
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
    port: 5555,
    hot: true,
  },
  devtool: "eval-source-map",
};