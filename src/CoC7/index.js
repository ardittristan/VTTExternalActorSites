/**
 * imports the css for usage, order matters
 */
import "./css/style.css";
import "./less/coc7g.less";
import "./css/coc7.css";

import sheetTemplate from "./handlebars/character-sheet.handlebars";
import config from "../config";

/**
 * hook to do html edits on startup for onefile packing, since webpack can break things sometimes
 */
Hooks.emit("start");

// when document is loaded, add sheet
document.addEventListener("DOMContentLoaded", async function () {
  /**
   * checks if actor url is added
   */
  if (window.location.href.split(/\?(.+)/)[1] == undefined) {
    notFoundError("No Link Entered");
    return;
  }

  /**
   * shows text that page is getting the data
   */
  let loadElement = $(`<div class="errorDiv"><div><p>Retrieving Data</p></div></div>`);
  $("body").append(loadElement);

  /**
   * gets user inputted data
   */
  const windowData = window.location.href.split(/\?(.+)/)[1];

  /**
   * enters url data into textbox if there is any
   */
  $(document.body).find("form#siteUrlForm input#siteUrl").val(windowData);

  /**
   * read actor id and json url from url data
   */
  let [dataUrl, , actorId] = windowData.split(/(\.json)(.+)/);
  dataUrl += ".json";

  /**
   * errors out if it gets blocked while trying to retrieve data or the link doesn't exist
   */
  try {
    /**
     * gets data from json
     */
    const dataJSON = await getJSON(dataUrl);

    /**
     * double check if actor id exists
     */
    if (dataJSON[actorId] === undefined) {
      notFoundError("Actor Not Found");
      return;
    }

    /**
     * get base url of foundry server
     */
    const baseUrl = dataUrl.replace(/(\/)(?!.*\1).*\b\.json\b/, "").replace("actorAPI", "");

    /**
     * dynamic url for getting background from server
     *
     * can add more of these for more dynamically loaded content
     */
    document.body.style.setProperty("--denim", `url('${baseUrl}ui/denim.png')`);
    document.body.style.setProperty("--d20-grey", `url('${baseUrl}icons/svg/d20-grey.svg')`);
    document.body.style.setProperty("--d20-black", `url('${baseUrl}icons/svg/d20-black.svg')`);
    document.body.style.setProperty("--main-sheet-bg", `url('${baseUrl}systems/CoC7/artwork/backgrounds/character-sheet.png') 4 repeat`);
    document.body.style.setProperty("--main-sheet-image", `url('${baseUrl}systems/CoC7/artwork/tentacules.png')`);
    document.body.style.setProperty("--hp-background", `url('${baseUrl}systems/CoC7/artwork/backgrounds/hp-background.svg')`);
    document.body.style.setProperty("--san-background", `url('${baseUrl}systems/CoC7/artwork/backgrounds/san-background.svg')`);

    /**
     * get data of actor that's in the url
     */
    let actorData = dataJSON[actorId];

    /**
     * emit hook that populatesheet.js listens to
     */
    Hooks.emit("showSheet", sheetTemplate, actorData, baseUrl);
  } catch (e) {
    console.error(e);
    notFoundError("URL not found");
  }

  /**
   * remove the loading text when done
   */
  loadElement.remove();
});

/**
 * add link to url and reload page when link gets submitted
 */
$(document.body)
  .find("form#siteUrlForm")
  .on("submit", function (e) {
    window.location = window.location.origin + window.location.pathname + "?" + $(e.target).find("input#siteUrl").val();
  });

/**
 * gets json data from url, uses cors-anywhere proxy to get around cors not being setup on foundry
 *
 * @param  {String} url
 */
function getJSON(url) {
  return new Promise((resolve, reject) => {
    $.ajax({
      dataType: "json",
      url: config.proxy + url,
      success: (data) => resolve(data),
      error: () => reject(),
    });
  });
}

/**
 * shows submitted text in the middle of screen
 *
 * @param  {String} textContent
 */
function notFoundError(textContent) {
  let divElement = document.createElement("div");
  divElement.className = "errorDiv";
  $("body").append(`<div class="errorDiv"><div><p>${textContent}</p></div></div>`);
}
