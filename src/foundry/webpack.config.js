const globalOptions = require("../../webpack.config");
const path = require("path");
const fs = require("fs");
const CopyPlugin = require("copy-webpack-plugin");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const { merge } = require("webpack-merge");

module.exports = merge(globalOptions, {
  entry: {
    tabs: [path.resolve(__dirname, "libs/tabs.js")],
    TextEditor: [path.resolve(__dirname, "libs/TextEditor.js")],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../../dist"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "css"), to: path.resolve(__dirname, "../../dist") }],
    }),
    new HandlebarsPlugin({
      entry: path.resolve(__dirname, "index.handlebars"),
      output: path.resolve(__dirname, "../../dist", "[name].html"),
      data: {
        directories: ((source) => {
          let arr = fs
            .readdirSync(source)
            .map((name) => path.join(source, name))
            .filter((source) => fs.lstatSync(source).isDirectory())
            .map((name) => {
              let match = name.match(/[^\\\/]*/g);
              return match[match.length - 2];
            });
          arr.splice(arr.indexOf("foundry"), 1);
          arr.forEach(
            (name, i) =>
              (arr[i] = {
                url: name,
                name: require(path.resolve(source, name, "manifest.json"))?.title || name,
              })
          );

          return arr;
        })(path.resolve(__dirname, "../")),
        path: process.env.WORKFLOW_PATH
      },
      partials: [],
      helpers: {},
    }),
  ],
});
