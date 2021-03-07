const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          module: true,
        },
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      { test: /\.(otf|ttf|woff2|woff|eot)$/, use: ["url-loader"] },
      { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] },
      { test: /\.less$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"] },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  plugins: [new MiniCssExtractPlugin()],
};
