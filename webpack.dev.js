const path = require("path");
const config = require("./webpack.config");

function configDev() {
  console.log("dev")

  config.mode = "development";

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

  return config;
}

module.exports = configDev;
