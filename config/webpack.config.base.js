const { resolve } = require("path");
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
      {
        test: /\.s?css$/,
        use: ["style-loader", { loader: "css-loader", options:{modules: false}}, "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif|woff|woff2|ttf)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    
  ],
};