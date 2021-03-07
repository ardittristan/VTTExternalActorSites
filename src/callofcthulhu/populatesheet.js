import { imgParse } from "../lib";

/**
 * might be different for different systems, but this initializes the sheet tabs
 */
const tabs = [
  {
    navSelector: ".tabs",
    contentSelector: ".sheet-body",
    initial: "biography",
  },
];

const _tabs = createTabHandlers();

/* -------------------------------------------- */
/*   Sheet Populator                            */
/* -------------------------------------------- */

/**
 * @param  {HandlebarsTemplatable} sheetTemplate
 * @param  {Object} actorData
 * @param  {String} baseUrl
 */
function populateSheet(sheetTemplate, actorData, baseUrl) {
  /**
   * here you parse the json data into data you can send to the actor sheet
   */
  const data = getData(actorData, baseUrl);

  /**
   * here you send the data that the handlebars template reads from to the template
   */
  $(".window-content")[0].innerHTML = sheetTemplate(
    {
      actor: data,
      data: data.data,
    },
    {
      allowedProtoProperties: {
        size: true,
      },
    }
  );

  activateListeners();
}

/* -------------------------------------------- */

/**
 * @param  {Object} actorData
 * @param  {String} baseUrl
 */
function getData(actorData, baseUrl) {
  actorData.img = imgParse(actorData.img, baseUrl);

  actorData.items.sort((a, b) => (a.sort || 0) - (b.sort || 0));

  actorData.items.forEach((item) => {
    item.img = imgParse(item.img, baseUrl);
  });

  return actorData;
}

/* -------------------------------------------- */

function activateListeners() {
  // sheet object
  const html = $(".window-content").first();

  // bind tabs to pages
  _tabs.forEach((t) => t.bind(html[0]));
}

/* -------------------------------------------- */
/*   Helper Functions                           */
/* -------------------------------------------- */

function createTabHandlers() {
  return tabs.map((t) => {
    return new Tabs(t);
  });
}

/**
 * listens to the hook that tells it to start the population
 */

Hooks.on("showSheet", populateSheet);
