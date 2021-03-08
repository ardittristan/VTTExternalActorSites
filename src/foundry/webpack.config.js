const globalOptions = require("../../webpack.config");
const path = require("path");
const fs = require("fs");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const AddAssetPlugin = require("add-asset-webpack-plugin");
const { merge } = require("webpack-merge");
const csso = require("csso");

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
        path: process.env.WORKFLOW_PATH,
      },
      partials: [],
      helpers: {},
    }),
    ...(() => {
      /** @type {AddAssetPlugin[]} */
      let assets = [];
      let source = path.resolve(__dirname, "css");

      fs.readdirSync(source).forEach((file) => {
        let output = csso.minify(fs.readFileSync(path.resolve(source, file), { encoding: "utf8" }), {
          restructure: false,
          comments: false,
          sourceMap: true,
        });
        assets.push(new AddAssetPlugin(file, output.css), new AddAssetPlugin(file + ".map", output.map.toString()));
      });

      return assets;
    })(),
  ],
});
