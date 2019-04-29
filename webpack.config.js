const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  resolve: {
    modules: ["node_modules", path.join(__dirname, "src")],
    extensions: [".js"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.svg$/,
        loader: "@svgr/webpack"
      },
      {
        test: /\.png$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "all",
          enforce: true,
          name: "vendor",
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  }
};
