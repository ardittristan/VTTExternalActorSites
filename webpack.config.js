const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const HtmlReplaceWebpackPlugin = require("html-replace-webpack-plugin")
const package = require("./package.json");

module.exports = {
  mode: "production",
  devtool: "source-map",
  performance: {
    hints: false,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserJSPlugin({
        parallel: true,
        test: /\.js$/,
        cache: true,
        terserOptions: {
          module: true,
          sourceMap: true,
        },
      }),
      new CssMinimizerPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        minimizerOptions: {
          preset: ["default", { discardComments: { removeAll: true } }],
        },
      }),
    ],
  },
  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/i, use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { sourceMap: true } }] },
      { test: /\.(otf|ttf|woff2|woff|eot)$/, use: [{ loader: "file-loader", options: { name: "[name].[ext]" } }] },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { sourceMap: true } }, { loader: "sass-loader", options: { sourceMap: true } }],
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader", options: { sourceMap: true } }, { loader: "less-loader", options: { sourceMap: true } }],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CaseSensitivePathsPlugin(),
    new HtmlReplaceWebpackPlugin([
      {
        pattern: "<!-- eventemitter -->",
        replacement: `<script src="https://unpkg.com/eventemitter3@${package.devDependencies.eventemitter3.slice(1)}/umd/eventemitter3.min.js"></script>`,
      },
      {
        pattern: "<!-- jquery -->",
        replacement: `<script src="https://unpkg.com/jquery@${package.devDependencies.jquery.slice(1)}/dist/jquery.min.js"></script>`
      }
    ])
  ],
};
