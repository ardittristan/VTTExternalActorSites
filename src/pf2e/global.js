import langs from "./libs/lang.json";
import pf2eConf from "./libs/pf2conf";
import CONST from "./libs/const";

/** @type {import("eventemitter3")} */
globalThis.Hooks = new EventEmitter3();

globalThis.i18n = langs;

globalThis.PF2E = pf2eConf;

globalThis.CONST = CONST;
