import escapeStringRegexp from "escape-string-regexp";
import spliceString from "splice-string";
import localize from "./handlebars/helpers/localize.js";
import { COC7 } from "./libs/config.js";
import CoC7Parser from "./libs/CoC7Parser.js";
import { imgParse } from "../lib";

/**
 * might be different for different systems, but this initializes the sheet tabs
 */
const tabs = [
  {
    navSelector: ".tabs",
    contentSelector: ".sheet-body",
    initial: "skills",
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
  console.log(data);
  /**
   * here you send the data that the handlebars template reads from to the template
   */
  /** @type {string} */
  let innerHTML = sheetTemplate(
    {
      actor: data,
      data: data.data,
      skillList: data.skillList,
      credit: data.credit,
      itemsByType: data.itemsByType,
      rangeWpn: data.rangeWpn,
      meleeWpn: data.meleeWpn,
      isInABoutOfMadness: data.isInABoutOfMadness,
      isInsane: data.isInsane,
      sanity: data.sanity,
      pulpCharacter: data.flags?.externalactor?.pulpRules,
      meleeSkills: data.meleeSkills,
      rangeSkills: data.combatSkills,
    },
    {
      allowedProtoProperties: {
        size: true,
      },
    }
  );

  // add host url to relative css urls
  let changedUrls = [];
  innerHTML.match(/url\(.*?\)/g).forEach((url) => {
    if (!url.match(/https?:\/\//) && !changedUrls.includes(url)) {
      let index = pos(url.indexOf("'")) || pos(url.indexOf('"')) || pos(url.indexOf("(")) || 0;
      innerHTML = innerHTML.replace(new RegExp(escapeStringRegexp(url), "g"), spliceString(url, index + 1, 0, baseUrl));
      changedUrls.push(url);
    }
  });

  $(".window-content")[0].innerHTML = innerHTML;

  activateListeners(data);
}

/* -------------------------------------------- */

/**
 * @param  {Object} data
 * @param  {String} baseUrl
 */
function getData(data, baseUrl) {
  data.img = imgParse(data.img, baseUrl);

  //#region defaults
  if (!data.data.characteristics) {
    data.data.characteristics = {
      str: { value: null, short: "CHARAC.STR", label: "CHARAC.Strength", formula: null },
      con: { value: null, short: "CHARAC.CON", label: "CHARAC.Constitution", formula: null },
      siz: { value: null, short: "CHARAC.SIZ", label: "CHARAC.Size", formula: null },
      dex: { value: null, short: "CHARAC.DEX", label: "CHARAC.Dexterity", formula: null },
      app: { value: null, short: "CHARAC.APP", label: "CHARAC.Appearance", formula: null },
      int: { value: null, short: "CHARAC.INT", label: "CHARAC.Intelligence", formula: null },
      pow: { value: null, short: "CHARAC.POW", label: "CHARAC.Power", formula: null },
      edu: { value: null, short: "CHARAC.EDU", label: "CHARAC.Education", formula: null },
    };
  }

  if (!data.data.attribs) {
    data.data.attribs = {
      hp: { value: null, max: null, short: "HP", label: "Hit points", auto: true },
      mp: { value: null, max: null, short: "HP", label: "Magic points", auto: true },
      lck: { value: null, short: "LCK", label: "Luck" },
      san: { value: null, max: 99, short: "SAN", label: "Sanity", auto: true },
      mov: { value: null, short: "MOV", label: "Movement rate", auto: true },
      db: { value: null, short: "DB", label: "Damage bonus", auto: true },
      build: { value: null, short: "BLD", label: "Build", auto: true },
      armor: { value: null, auto: false },
    };
  }

  if (!data.data.status) {
    data.data.status = {
      criticalWounds: { type: "Boolean", value: false },
      unconscious: { type: "Boolean", value: false },
      dying: { type: "Boolean", value: false },
      dead: { type: "Boolean", value: false },
      prone: { type: "Boolean", value: false },
      tempoInsane: { type: "boolean", value: false },
      indefInsane: { type: "boolean", value: false },
    };
  }

  if (!data.data.biography) {
    data.data.biography = { personalDescription: { type: "string", value: "" } };
  }

  if (!data.data.infos) {
    data.data.infos = { occupation: "", age: "", sex: "", residence: "", birthplace: "", archetype: "", organization: "" };
  }

  if (!data.data.flags) {
    data.data.flags = { locked: true, manualCredit: false };
  }

  if (!data.data.credit) {
    data.data.credit = { monetarySymbol: null, multiplier: null, spent: null, assetsDetails: null };
  }

  if (!data.data.development) {
    data.data.development = { personal: null, occupation: null, archetype: null };
  }

  if (!data.data.biography) data.data.biography = [];
  if (!data.data.encounteredCreatures) data.data.encounteredCreatures = [];

  let skills = data.items.filter((item) => item?.type === "skill");
  let weapons = data.items.filter((item) => item?.type === "weapon");
  //#endregion

  //#region skilllist
  data.skillList = [];

  let previousSpec = "";
  for (const skill of skills) {
    if (skill.data.properties.special) {
      if (previousSpec != skill.data.specialization) {
        previousSpec = skill.data.specialization;
        data.skillList.push({
          isSpecialization: true,
          name: skill.data.specialization,
        });
      }
    }
    data.skillList.push(skill);
  }
  //#endregion

  //#region credit
  let manualCredit = data.data.flags.manualCredit;
  if (!manualCredit) {
    data.credit = {};
    let factor;
    let moneySymbol;
    if (!data.data.credit) {
      factor = 1;
      moneySymbol = "$";
    } else {
      factor = parseInt(data.data.credit.multiplier) ? parseInt(data.data.credit.multiplier) : 1;
      moneySymbol = data.data.credit.monetarySymbol ? data.data.credit.monetarySymbol : "$";
    }

    data.credit.spendingLevel = `${spendingLevel(data.items) * factor}${moneySymbol}`;
    data.credit.assets = `${assets(data.items) * factor}${moneySymbol}`;
    data.credit.cash = `${cash(data.items) * factor}${moneySymbol}`;
  }
  //#endregion

  //#region itemsByType
  data.itemsByType = {};

  for (const item of data.items) {
    let list = data.itemsByType[item.type];
    if (!list) {
      list = [];
      data.itemsByType[item.type] = list;
    }
    list.push(item);
  }
  //#endregion

  //#region skills
  data.meleeSkills = skills.filter((skill) => skill.data.properties.combat == true && skill.data.properties.fighting == true);
  data.rangeSkills = skills.filter((skill) => skill.data.properties.combat == true && skill.data.properties.firearm == true);

  let cbtSkills = skills.filter((skill) => skill.data.properties.combat == true);
  data.combatSkills = data.combatSkills || {};
  if (cbtSkills) {
    for (const skill of cbtSkills) {
      data.combatSkills[skill._id] = skill;
    }
  }
  //#endregion

  //#region weapons
  if (weapons) {
    data.weapons = data.weapons || {};
    for (const weapon of weapons) {
      weapon.usesAlternateSkill = weapon.data.properties.auto == true || weapon.data.properties.brst == true;
      if (!weapon.data.ammo) weapon.data.ammo = 0;

      weapon.skillSet = true;
      if (weapon.data.skill.main.id == "") {
        weapon.skillSet = false;
      } else {
        if (data.combatSkills[weapon.data.skill.main.id]) {
          // const skill = this.actor.getOwnedItem( weapon.data.skill.main.id);
          weapon.data.skill.main.name = data.combatSkills[weapon.data.skill.main.id].name;
          // weapon.data.skill.main.value = skill.value;
        } else {
          weapon.skillSet = false;
        }

        if (weapon.data.skill.alternativ.id != "") {
          if (data.combatSkills[weapon.data.skill.alternativ.id]) {
            // const skill = this.actor.getOwnedItem( weapon.data.skill.alternativ.id);
            weapon.data.skill.alternativ.name = data.combatSkills[weapon.data.skill.alternativ.id].name;
            // weapon.data.skill.alternativ.value = skill.value;
          }
        }
      }

      weapon.data._properties = [];
      for (let [key, value] of Object.entries(COC7["weaponProperties"])) {
        let property = {};
        property.id = key;
        property.name = value;
        property.value = true == weapon.data.properties[key];
        weapon.data._properties.push(property);
      }
      data.rangeWpn = data.rangeWpn || [];
      data.meleeWpn = data.meleeWpn || [];
      data.weapons[weapon._id] = weapon;
      if (weapon.data.properties.rngd) data.rangeWpn.push(weapon);
      else data.meleeWpn.push(weapon);
    }
  }
  //#endregion

  //#region items
  if (data.items) {
    data.hasEmptyValueWithFormula = false;
    if (data.data.characteristics) {
      for (const characteristic of Object.values(data.data.characteristics)) {
        if (!characteristic.value) characteristic.editable = true;
        characteristic.hard = Math.floor(characteristic.value / 2);
        characteristic.extreme = Math.floor(characteristic.value / 5);

        //If no value && no formula don't display charac.
        if (!characteristic.value && !characteristic.formula) characteristic.display = false;
        else characteristic.display = true;

        //if any characteristic has no value but has a formula.
        if (!characteristic.value && characteristic.formula) characteristic.hasEmptyValueWithFormula = true;

        data.hasEmptyValueWithFormula = data.hasEmptyValueWithFormula || characteristic.hasEmptyValueWithFormula;
      }
    }
  }
  //#endregion

  //#region attribs
  data.data.attribs.mov.value = mov(data); //return computed values or fixed values if not auto.
  data.data.attribs.db.value = db(data);
  data.data.attribs.build.value = build(data);

  if (data.data.attribs.hp.value < 0) data.data.attribs.hp.value = null;
  if (data.data.attribs.mp.value < 0) data.data.attribs.mp.value = null;
  if (data.data.attribs.san.value < 0) data.data.attribs.san.value = null;

  if (data.data.attribs.hp.auto) {
    //TODO if any is null set max back to null.
    if (data.data.characteristics.siz.value != null && data.data.characteristics.con.value != null) data.data.attribs.hp.max = hpMax(data);
  }

  if (data.data.attribs.mp.auto) {
    //TODO if any is null set max back to null.
    if (data.data.characteristics.pow.value != null) data.data.attribs.mp.max = Math.floor(data.data.characteristics.pow.value / 5);
  }

  if (data.data.attribs.san.auto) {
    data.data.attribs.san.max = sanMax(data);
  }

  if (data.data.attribs.mp.value > data.data.attribs.mp.max || data.data.attribs.mp.max == null) data.data.attribs.mp.value = data.data.attribs.mp.max;
  if (data.data.attribs.hp.value > data.data.attribs.hp.max || data.data.attribs.hp.max == null) data.data.attribs.hp.value = data.data.attribs.hp.max;

  if (data.data.attribs.hp.value == null && data.data.attribs.hp.max != null) data.data.attribs.hp.value = data.data.attribs.hp.max;
  if (data.data.attribs.mp.value == null && data.data.attribs.mp.max != null) data.data.attribs.mp.value = data.data.attribs.mp.max;

  if (data.data.attribs.san.value == null && data.data.characteristics.pow.value != null) data.data.attribs.san.value = data.data.characteristics.pow.value;
  if (data.data.attribs.san.value > data.data.attribs.san.max) data.data.attribs.san.value = data.data.attribs.san.max;

  if (data.data.biography instanceof Array && data.data.biography.length) {
    data.data.biography[0].isFirst = true;
    data.data.biography[data.data.biography.length - 1].isLast = true;
  }

  data.data.indefiniteInsanityLevel = {};
  data.data.indefiniteInsanityLevel.value = data.data.attribs.san.dailyLoss ? data.data.attribs.san.dailyLoss : 0;
  data.data.indefiniteInsanityLevel.max = Math.floor(data.data.attribs.san.value / 5);

  data.hasInventory =
    Object.prototype.hasOwnProperty.call(data.itemsByType, "item") ||
    Object.prototype.hasOwnProperty.call(data.itemsByType, "book") ||
    Object.prototype.hasOwnProperty.call(data.itemsByType, "spell");
  //#endregion

  data.isInABoutOfMadness = isInABoutOfMadness(data.effects);
  data.isInsane = isInsane(data.effects);
  data.sanity = sanity(data.effects);

  if (data.itemsByType?.occupation?.length > 0) {
    data.data.infos.occupation = data.itemsByType.occupation[0].name;
    data.data.infos.occupationSet = true;
  } else data.data.infos.occupationSet = false;

  if (data.itemsByType?.archetype?.length > 0) {
    data.data.infos.archetype = data.itemsByType.archetype[0].name;
    data.data.infos.archetypeSet = true;
  } else data.data.infos.archetypeSet = false;

  /**
   * any other parsing that needs to be done
   */

  return data;
}

/* -------------------------------------------- */

function activateListeners(data) {
  // sheet object
  const html = $(".window-content").first();

  // bind tabs to pages
  _tabs.forEach((t) => t.bind(html[0]));

  html.find(".show-detail").on("click", (event) => _onItemSummary(event, data));
}

/* -------------------------------------------- */
/*   Helper Functions                           */
/* -------------------------------------------- */

function getChatData(htmlOptions, item) {
  console.log(item)
  const data = JSON.parse(JSON.stringify(item.data));
  console.log(data)
  //Fix : data can have description directly in field, not under value.
  if (data.description && !data.description.value) {
    const value = data.description;
    data.description = {
      value: value,
    };
  }
  const labels = [];

  // Rich text description
  data.description.value = TextEditor.enrichHTML(data.description.value, htmlOptions);
  data.description.value = CoC7Parser.enrichHTML(data.description.value);
  data.description.special = TextEditor.enrichHTML(data.description.special, htmlOptions);
  data.description.special = CoC7Parser.enrichHTML(data.description.special);

  // Item type specific properties
  const props = [];

  if (item.type == "weapon") _weaponChatData(item, labels, props, htmlOptions);

  if (item.type == "skill") {
    for (let [key, value] of Object.entries(COC7["skillProperties"])) {
      if (item.data.properties[key] == true) props.push(value);
    }
  }

  // Filter properties and return
  data.properties = props.filter((p) => !!p);
  data.labels = labels;
  return data;
}

function _weaponChatData(item, labels, props, htmlOptions) {
  for (let [key, value] of Object.entries(COC7["weaponProperties"])) {
    if (item.data.properties[key] == true) props.push(value);
  }

  let skillLabel = localize("CoC7.Skill");
  let skillName = "";
  let found = false;
  if (item.data.skill.main.id && htmlOptions.owner) {
    const skill = htmlOptions.owner.skillList.filter(sk => sk._id == item.data.skill.main.id)?.[0] ;
    if (skill) {
      skillName += getNameWithoutSpec(skill);
      found = true;
    }
  }

  if (item.usesAlternativeSkill && this.data.data.skill.alternativ.id && htmlOptions.owner) {
    skillLabel = localize("CoC7.Skills");
    const skill = htmlOptions.owner.skillList.filter(sk => sk._id == item.data.skill.alternativ.id)?.[0];
    if (skill) {
      skillName += `/${getNameWithoutSpec(skill)}`;
      found = true;
    }
  }

  if (!found) {
    skillName = item.data.skill.main.name;
    if (item.usesAlternativeSkill && item.data.skill.alternativ.name) skillName += `/${item.data.skill.alternativ.name}`;
  }

  if (skillName) {
    labels.push({
      name: skillLabel,
      value: skillName,
    });
  }

  labels.push({
    name: localize("CoC7.WeaponUsesPerRound"),
    value: usesPerRoundString(item),
  });

  labels.push({
    name: localize("CoC7.WeaponMalfunction"),
    value: item.data.malfunction ? item.data.malfunction : "-",
  });

  if (item.data.bullets) {
    labels.push({
      name: localize("CoC7.WeaponBulletsInMag"),
      value: item.data.bullets,
    });
  }
}

/**
 * @param  {JQuery.ClickEvent<HTMLElement, undefined, HTMLElement, HTMLElement>} event
 */
function _onItemSummary(event, data) {
  event.preventDefault();
  let li = $(event.currentTarget).parents(".item"),
    item = data.items.filter((item) => item._id === li.data("item-id"))?.[0],
    chatData = getChatData({ secrets: true, owner: data }, item);

  // Toggle summary
  if (li.hasClass("expanded")) {
    let summary = li.children(".item-summary");
    summary.slideUp(200, () => summary.remove());
  } else {
    let div = $('<div class="item-summary"></div>');

    let labels = $('<div class="item-labels"></div>');
    chatData.labels.forEach((p) =>
      labels.append(`<div class="item-label"><span class="label-name">${p.name} :</span><span class="label-value">${p.value}</span></div>`)
    );
    div.append(labels);

    div.append($(`<div class="item-description">${chatData.description.value}</div>`));
    if (item.data.properties?.spcl) {
      let specialDiv = $(`<div class="item-special">${chatData.description.special}</div>`);
      div.append(specialDiv);
    }

    let props = $('<div class="item-properties"></div>');
    chatData.properties.forEach((p) => props.append(`<div class="tag item-property">${localize(p)}</div>`));
    div.append(props);

    li.append(div.hide());
    div.slideDown(200);
  }
  li.toggleClass("expanded");
}

function usesPerRoundString(item){
  let usesPerRound;
  if( item.data.usesPerRound.normal) usesPerRound = item.data.usesPerRound.normal;
  else usesPerRound = '1';
  if( item.data.usesPerRound.max) usesPerRound += `(${item.data.usesPerRound.max})`;
  if( item.data.properties.auto) usesPerRound += ` ${localize('CoC7.WeaponAuto')}`;
  if( item.data.properties.brst) {
    usesPerRound += ` ${localize('CoC7.WeaponBrst')}`;
    if( item.data.usesPerRound.burst) usesPerRound += `(${item.data.usesPerRound.burst})`;
  }

  return usesPerRound;
}

/* -------------------------------------------- */
//#region credits

function getNameWithoutSpec(item) {
  if (item.data.properties?.special) {
    const specNameRegex = new RegExp(item.data.specialization, "ig");
    const filteredName = item.name
      .replace(specNameRegex, "")
      .trim()
      .replace(/^\(+|\)+$/gm, "");
    return filteredName.length ? filteredName : item.name;
  }

  return item.name;
}

function getSkillsByName(skillName, items) {
  let skillList = [];
  const name = skillName.match(/\(([^)]+)\)/) ? skillName.match(/\(([^)]+)\)/)[1] : skillName;

  items.forEach((value) => {
    if (getNameWithoutSpec(value).toLowerCase() == name.toLowerCase() && value.type == "skill") skillList.push(value);
  });
  return skillList;
}

function creditRatingSkill(items) {
  let skillList = getSkillsByName(localize("CoC7.CreditRatingSkillName"), items);
  if (skillList.length != 0) return skillList[0];
  return null;
}

function creditRating(items) {
  const CR = creditRatingSkill(items);
  if (CR) {
    const value = CR.value;
    if (value) return value;
    return parseInt(CR.data.value);
  }
  return 0;
}

function spendingLevel(items) {
  const CR = creditRating(items);
  if (CR >= 99) return 5000;
  if (CR >= 90) return 250;
  if (CR >= 50) return 50;
  if (CR >= 10) return 10;
  if (CR >= 1) return 2;
  return 0.5;
}

function assets(items) {
  const CR = creditRating(items);
  if (CR >= 99) return 5000000;
  if (CR >= 90) return CR * 2000;
  if (CR >= 50) return CR * 500;
  if (CR >= 10) return CR * 50;
  if (CR >= 1) return CR * 10;
  return 0;
}

function cash(items) {
  const CR = creditRating(items);
  if (CR >= 99) return 50000;
  if (CR >= 90) return CR * 20;
  if (CR >= 50) return CR * 5;
  if (CR >= 10) return CR * 2;
  if (CR >= 1) return CR;
  return 0.5;
}

//#endregion

/* -------------------------------------------- */

//#region madness
function boutOfMadness(effects) {
  return effects.find((e) => e.label == localize("CoC7.BoutOfMadnessName"));
}

function isInABoutOfMadness(effects) {
  if (!boutOfMadness(effects)) return false;
  return !boutOfMadness(effects).disabled;
}
//#endregion

/* -------------------------------------------- */

//#region insanity
function insanity(effects) {
  return effects.find((e) => e.label == localize("CoC7.InsanityName"));
}

function isInsane(effects) {
  if (!insanity(effects)) return false;
  return !insanity(effects).disabled;
}
//#endregion

/* -------------------------------------------- */

//#region sanity
function sanity(effects) {
  let boutRealTime = boutOfMadness(effects)?.flags?.CoC7?.realTime ? true : false;
  let duration = boutRealTime ? boutOfMadness(effects)?.duration?.rounds : boutOfMadness(effects)?.duration.seconds;
  if (!boutRealTime && duration) duration = Math.round(duration / 3600);
  let indefiniteInstanity = insanity(effects)?.flags?.CoC7.indefinite ? true : false;
  let insaneDuration = indefiniteInstanity ? null : insanity(effects)?.duration.seconds;
  if (!indefiniteInstanity && insaneDuration) insaneDuration = insaneDuration / 3600;
  let boutDurationText = isInABoutOfMadness(effects) ? (boutRealTime ? `${duration} ${localize("CoC7.rounds")}` : `${duration} ${localize("CoC7.hours")}`) : null;
  const insanityDurationText = insaneDuration ? (isInsane(effects) ? (indefiniteInstanity ? null : `${insaneDuration} ${localize("CoC7.hours")}`) : null) : null;
  if (isInsane(effects) && !insanityDurationText && !indefiniteInstanity) indefiniteInstanity = true;
  if (!duration) boutDurationText = "";

  return {
    boutOfMadness: {
      active: isInABoutOfMadness(effects),
      realTime: isInABoutOfMadness(effects) ? boutRealTime : undefined,
      summary: isInABoutOfMadness(effects) ? !boutRealTime : undefined,
      duration: isInABoutOfMadness(effects) ? duration : undefined,
      durationText: boutDurationText ? boutDurationText : "",
      hint: isInABoutOfMadness(effects) ? `${localize("CoC7.BoutOfMadness")}${boutDurationText ? ": " + boutDurationText : ""}` : localize("CoC7.BoutOfMadness"),
    },
    underlying: {
      active: isInsane(effects),
      indefintie: isInsane(effects) ? indefiniteInstanity : undefined,
      duration: insaneDuration,
      durationText: insanityDurationText ? insanityDurationText : "",
      hint: isInsane(effects)
        ? indefiniteInstanity
          ? localize("CoC7.IndefiniteInsanity")
          : `${localize("CoC7.TemporaryInsanity")} ${insanityDurationText ? insanityDurationText : ""}`
        : "",
    },
  };
}
//#endregion

/* -------------------------------------------- */

//#region mov
function mov(data) {
  if (!data.data.attribs) return null;
  if (!data.data.attribs.mov) return null;
  if (data.data.attribs.mov.value == "auto") data.data.attribs.mov.auto = true;
  if (data.data.attribs.mov.auto) {
    let MOV;
    if (data.data.characteristics.dex.value < data.data.characteristics.siz.value && data.data.characteristics.str.value < data.data.characteristics.siz.value) MOV = 7;
    if (data.data.characteristics.dex.value >= data.data.characteristics.siz.value || data.data.characteristics.str.value >= data.data.characteristics.siz.value)
      MOV = 8;
    if (data.data.characteristics.dex.value > data.data.characteristics.siz.value && data.data.characteristics.str.value > data.data.characteristics.siz.value) MOV = 9; // Bug correction by AdmiralNyar.
    if (data.data.type != "creature") {
      if (!isNaN(parseInt(data.data.infos.age))) MOV = parseInt(data.data.infos.age) >= 40 ? MOV - Math.floor(parseInt(data.data.infos.age) / 10) + 3 : MOV;
    }
    return MOV;
  }
  return data.data.attribs.mov.value;
}
//#endregion

/* -------------------------------------------- */

//#region db
function db(data) {
  if (!data.data.attribs) return null;
  if (!data.data.attribs.db) return null;
  if (data.data.attribs.db.value == "auto") data.data.attribs.db.auto = true;
  if (data.data.attribs.db.auto) {
    const sum = data.data.characteristics.str.value + data.data.characteristics.siz.value;
    if (sum > 164) return `${Math.floor((sum - 45) / 80)}D6`;
    if (sum < 65) return -2;
    if (sum < 85) return -1;
    if (sum < 125) return 0;
    if (sum < 165) return "1D4";
  }
  return data.data.attribs.db.value;
}
//#endregion

/* -------------------------------------------- */

//#region build
function build(data) {
  if (!data.data.attribs) return null;
  if (!data.data.attribs.build) return null;
  if (data.data.attribs.build.value == "auto") data.data.attribs.build.auto = true;
  if (data.data.attribs.build.auto) {
    const sum = data.data.characteristics.str.value + data.data.characteristics.siz.value;
    if (sum > 164) return Math.floor((sum - 45) / 80) + 1;
    if (sum < 65) return -2;
    if (sum < 85) return -1;
    if (sum < 125) return 0;
    if (sum < 165) return 1;
  }

  return data.data.attribs.build.value;
}
//#endregion

/* -------------------------------------------- */

//#region hpMax
function hpMax(data) {
  if (data.data.attribs.hp.auto) {
    if (data.data.characteristics.siz.value != null && data.data.characteristics.con.value != null) {
      const maxHP = Math.floor((data.data.characteristics.siz.value + data.data.characteristics.con.value) / 10);
      return (data.flags.externalactor?.pulpRules || false) && "character" == data.type ? maxHP * 2 : maxHP;
    }
    if (data.data.attribs.hp.max) return parseInt(data.data.attribs.hp.max);
    return null;
  }
  return parseInt(data.data.attribs.hp.max);
}
//#endregion

/* -------------------------------------------- */

//#region sanMax
function sanMax(data) {
  if (data.data.attribs.san.auto) {
    if (cthulhuMythos(data.items)) return 99 - cthulhuMythos(data.items);
    return 99;
  }
  return parseInt(data.data.attribs.san.max);
}
//#endregion

/* -------------------------------------------- */

//#region cthulhuMythos
function cthulhuMythos(items) {
  const CM = cthulhuMythosSkill(items);
  if (CM) {
    const value = CM.value;
    if (value) return value;
    return parseInt(CM.data.value);
  }
  return 0;
}

function cthulhuMythosSkill(items) {
  let skillList = getSkillsByName(localize(COC7.CthulhuMythosName), items);
  if (skillList.length != 0) return skillList[0];
  return null;
}
//#endregion

function createTabHandlers() {
  return tabs.map((t) => {
    return new Tabs(t);
  });
}

/* -------------------------------------------- */

Array.fromRange = function (n) {
  return Array.from(new Array(parseInt(n)).keys());
};

/**
 * @param  {Number} n
 */
function pos(n) {
  return n > 0 ? n : undefined;
}

/**
 * listens to the hook that tells it to start the population
 */

Hooks.on("showSheet", populateSheet);
