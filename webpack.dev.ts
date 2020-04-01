import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html"
});

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }]
  },
  plugins: [htmlPlugin]
};
