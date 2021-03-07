const lang = require("../../libs/lang.json");

module.exports =
  /**@param {string} prop */
  function (prop) {
    return lang[prop] || prop;
  };
