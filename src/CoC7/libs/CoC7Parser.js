import localize from "../handlebars/helpers/localize.js"
import template from "./template.json"

export default class CoC7Parser {
  static enrichHTML(content) {
    const html = document.createElement("div");
    html.innerHTML = String(content);

    let text = [];

    text = TextEditor._getTextNodes(html);
    const rgx = new RegExp("@(coc7).(.*?)\\[([^\\]]+)\\](?:{([^}]+)})?", "gi");
    TextEditor._replaceTextContent(text, rgx, CoC7Parser._createLink);
    return html.innerHTML;
  }

  static _createLink(match, tag, type, options, name) {
    const data = {
      cls: ["coc7-link"],
      dataset: { check: type },
      icon: "fas fa-dice",
      blind: false,
      name: name,
    };

    const regx = new RegExp("[^,]+", "gi");
    const matches = options.matchAll(regx);
    for (let match of Array.from(matches)) {
      let [key, value] = match[0].split(":");
      if ("icon" == key) data.icon = value;
      if ("blind" == key && undefined == value) {
        value = true;
        data.blind = true && ["check"].includes(type.toLowerCase());
      }
      data.dataset[key] = value;
    }

    let title;
    const difficulty = CoC7Check.difficultyString(data.dataset.difficulty);

    switch (type.toLowerCase()) {
      case "check": {
        let humanName = data.dataset.name;
        if (["attributes", "attribute", "attrib", "attribs"].includes(data.dataset.type?.toLowerCase())) {
          if ("lck" == data.dataset.name) humanName = localize("CoC7.Luck");
          if ("san" == data.dataset.name) humanName = localize("CoC7.Sanity");
        }
        if (["charac", "char", "characteristic", "characteristics"].includes(data.dataset.type?.toLowerCase())) {
          humanName = CoC7Utilities.getCharacteristicNames(data.dataset.name)?.label;
        }
        title = format(`CoC7.LinkCheck${!data.dataset.difficulty ? "" : "Diff"}${!data.dataset.modifier ? "" : "Modif"}`, {
          difficulty: difficulty,
          modifier: data.dataset.modifier,
          name: humanName,
        });
        break;
      }
      case "sanloss":
        title = format(`CoC7.LinkSanLoss${!data.dataset.difficulty ? "" : "Diff"}${!data.dataset.modifier ? "" : "Modif"}`, {
          difficulty: difficulty,
          modifier: data.dataset.modifier,
          sanMin: data.dataset.sanMin,
          sanMax: data.dataset.sanMax,
        });
        break;
      case "item":
        title = format(`CoC7.LinkItem${!data.dataset.difficulty ? "" : "Diff"}${!data.dataset.modifier ? "" : "Modif"}`, {
          difficulty: difficulty,
          modifier: data.dataset.modifier,
          name: data.dataset.name,
        });
        break;
      default:
        break;
    }

    if (!name) {
      data.name = title;
    } else data.dataset.displayName = true;

    const a = document.createElement("a");
    a.title = title;
    a.classList.add(...data.cls);
    for (let [k, v] of Object.entries(data.dataset)) {
      a.dataset[k] = v;
    }
    a.draggable = true;
    a.innerHTML = `${data.blind ? '<i class="fas fa-eye-slash"></i>' : ""}<i data-link-icon="${data.icon}" class="link-icon ${data.icon}"></i>${data.name}`;

    return a;
  }
}

class CoC7Check {
  static difficultyString(difficultyLevel) {
		switch (!isNaN(Number(difficultyLevel))?Number(difficultyLevel):difficultyLevel) {
		case '?':
			return localize('CoC7.UnknownDifficulty');
		case '+':
			return localize('CoC7.HardDifficulty');
		case '++':
			return localize('CoC7.ExtremeDifficulty');
		case '+++':
			return localize('CoC7.CriticalDifficulty');
		case 0:
			return localize('CoC7.RegularDifficulty');
		case CoC7Check.difficultyLevel.unknown:
			return localize('CoC7.UnknownDifficulty');
		case CoC7Check.difficultyLevel.regular:
			return localize('CoC7.RegularDifficulty');
		case CoC7Check.difficultyLevel.hard:
			return localize('CoC7.HardDifficulty');
		case CoC7Check.difficultyLevel.extreme:
			return localize('CoC7.ExtremeDifficulty');
		case CoC7Check.difficultyLevel.critical:
			return localize('CoC7.CriticalDifficulty');
		default:
			return null;
		}

	}

  static difficultyLevel = {
		unknown: -1,
		regular: 1,
		hard: 2,
		extreme: 3,
		critical: 4,
		impossible: 9
	}
}

class CoC7Utilities {
  static getCharacteristicNames( char){
		const charKey = char.toLowerCase();

		switch( charKey){
		case 'str': return { short: localize('CHARAC.STR'), label: localize('CHARAC.Strength')};
		case 'con': return { short: localize('CHARAC.CON'), label: localize('CHARAC.Constitution')};
		case 'siz': return { short: localize('CHARAC.SIZ'), label: localize('CHARAC.Size')};
		case 'dex': return { short: localize('CHARAC.DEX'), label: localize('CHARAC.Dexterity')};
		case 'app': return { short: localize('CHARAC.APP'), label: localize('CHARAC.Appearance')};
		case 'int': return { short: localize('CHARAC.INT'), label: localize('CHARAC.Intelligence')};
		case 'pow': return { short: localize('CHARAC.POW'), label: localize('CHARAC.Power')};
		case 'edu': return { short: localize('CHARAC.EDU'), label: localize('CHARAC.Education')};
		default: {
			for (const [, value] of Object.entries(template.Actor.templates.characteristics.characteristics)) {
				if( charKey == localize( value.short).toLowerCase()) return { short: localize(value.short), label: localize(value.label)};
			}
			return null;
		}
		}
	}
}

function format(stringId, data={}) {
  let str = localize(stringId);
  const fmt = /\{[^\}]+\}/g;
  str = str.replace(fmt, k => {
    return data[k.slice(1, -1)];
  });
  return str;
}
