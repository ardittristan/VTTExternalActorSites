const globalOptions = require("../../webpack.config");
const devOptions = require("../../webpack.dev");
const manifest = require("./manifest.json");
const path = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInjectStringPlugin = require("html-webpack-inject-string-plugin");

module.exports = merge(process.env.NODE_ENV == "development" ? devOptions() : globalOptions, {
  entry: {
    index: ["babel-polyfill", path.resolve(__dirname, "index.js")],
    populatesheet: path.resolve(__dirname, "populatesheet.js"),
    global: path.resolve(__dirname, "global.js"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist" + "/pf2e"),
  },
  module: {
    rules: [
      {
        test: /\.handlebars$/,
        use: [{ loader: "handlebars-loader", options: { helperDirs: [path.join(__dirname, "/handlebars/helpers")] } }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "../index.html"),
      publicPath: process.env.WORKFLOW_PATH?.length > 0 ? process.env.WORKFLOW_PATH + manifest.path : manifest.path,
      path: process.env.WORKFLOW_PATH || "",
      inject: false,
      title: manifest.title,
      minify: false,
    }),
    new HtmlWebpackInjectStringPlugin({
      search: "<!-- headInject -->",
      inject: `<script src="${process.env.WORKFLOW_PATH || ""}/TextEditor.js"></script>`,
    }),
  ],
});
