import "./css/style.css";
import "./css/callofcthulhu.css";

import sheetTemplate from "./handlebars/actor-sheet.handlebars";

Hooks.emit("start");

document.addEventListener("DOMContentLoaded", async function () {
  if (window.location.href.split(/\?(.+)/)[1] == undefined) {
    notFoundError("No Link Entered");
    return;
  }

  let loadElement = $(`<div class="errorDiv"><div><p>Retrieving Data</p></div></div>`);
  $("body").append(loadElement);

  const windowData = window.location.href.split(/\?(.+)/)[1];

  $(document.body).find("form#siteUrlForm input#siteUrl").val(windowData);

  let [dataUrl, , actorId] = windowData.split(/(\.json)(.+)/);
  dataUrl += ".json";

  try {
    const dataJSON = await getJSON(dataUrl);

    if (dataJSON[actorId] === undefined) {
      notFoundError("Actor Not Found");
      return;
    }

    const baseUrl = dataUrl.replace(/(\/)(?!.*\1).*\b\.json\b/, "").replace("actorAPI", "");

    /**
     * dynamic url for getting background from server
     *
     * can add more of these for more dynamically loaded content
     */
    document.body.style.setProperty("--denim", `url('${baseUrl}ui/denim.png')`);
    document.body.style.setProperty("--parchment", `url('${baseUrl}ui/parchment.jpg')`);

    let actorData = dataJSON[actorId];

    Hooks.emit("showSheet", sheetTemplate, actorData, baseUrl);
  } catch {
    notFoundError("URL not found");
  }

  loadElement.remove();
});

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
      url: "https://cors-anywhere.ardittristan.workers.dev/corsproxy/?apiurl=" + url,
      success: (data) => resolve(data),
      error: () => {
        $.ajax({
          dataType: "json",
          url: url,
          success: (data) => resolve(data),
          error: () => reject(),
        });
      },
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
