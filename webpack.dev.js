const path = require("path");
const config = require("./webpack.config");

config.optimization = {
  minimize: false,
};

config.devServer = {
  contentBase: path.resolve(__dirname, "dist"),
  open: true,
  openPage: `${process.env.MNAME}/`,
  publicPath: `/${process.env.MNAME}/`,
  inline: true,
  hot: true,
};

module.exports = config;
