import dnd5eConf from "./libs/5econf";

/** @type {import("eventemitter3")} */
globalThis.Hooks = new EventEmitter3();

globalThis.dnd5e = dnd5eConf;
