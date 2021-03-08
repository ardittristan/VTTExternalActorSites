!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=375)}({375:function(e,t){const a={inventory:new Set,spellbook:new Set,features:new Set},r=[{navSelector:".tabs",contentSelector:".sheet-body",initial:"description"}].map((e=>new Tabs(e)));function n(e){return{0:'<i class="far fa-circle"></i>',.5:'<i class="fas fa-adjust"></i>',1:'<i class="fas fa-check"></i>',2:'<i class="fas fa-check-double"></i>'}[e]}function s(e){if("Object"!==function(e){const t=typeof e;if("object"===t){if(null===e)return"null";let t=e.constructor.name;return["String","Number","Boolean","Array","Set"].includes(t)?t:/^HTML/.test(t)?"HTMLElement":"Object"}return t}(e))throw new Error("The provided data is not an object!");return 0===Object.keys(e).length}function o(e,t){if(!t)return;let a=e;for(let e of t.split(".")){if(a=a||{},!(e in a))return;a=a[e]}return a}function l(e,t){return e.filter((e=>{const a=e.data;for(let e of["action","bonus","reaction"])if(t.has(e)&&a.activation&&a.activation.type!==e)return!1;return(!t.has("ritual")||!0===a.components.ritual)&&((!t.has("concentration")||!0===a.components.concentration)&&(t.has("prepared")?!(0!==a.level&&!["innate","always"].includes(a.preparation.mode))||("npc"===this.actor.data.type||a.preparation.prepared):!t.has("equipped")||!0===a.equipped))}))}Array.fromRange=function(e){return Array.from(new Array(parseInt(e)).keys())},Hooks.on("showSheet",(function(e,t,i){var c,d,p,u;const f=function(e,t){e.img=t+e.img;let a=e.items;a.sort(((e,t)=>(e.sort||0)-(t.sort||0)));for(let[t,a]of Object.entries(e.data.abilities))a.icon=n(a.proficient),a.hover=dnd5e.proficiencyLevels[a.proficient],a.label=dnd5e.abilities[t];for(let[t,a]of Object.entries(e.data.skills))a.ability=e.data.abilities[a.ability].label.substring(0,3),a.icon=n(a.value),a.hover=dnd5e.proficiencyLevels[a.value],a.label=dnd5e.skills[t];let r=e.data.attributes.hp;0===r.temp&&delete r.temp;0===r.tempmax&&delete r.tempmax;const o=["primary","secondary","tertiary"].reduce(((t,a,r)=>{const n=e.data.resources[a]||{};return n.name=a,n.placeholder=`Resource ${(r+1).toString()}`,n&&0===n.value&&delete n.value,n&&0===n.max&&delete n.max,t.concat([n])}),[]);return function(e){const t={dr:dnd5e.damageTypes,di:dnd5e.damageTypes,dv:dnd5e.damageTypes,ci:dnd5e.conditionTypes,languages:dnd5e.languages,armorProf:dnd5e.armorProficiencies,weaponProf:dnd5e.weaponProficiencies,toolProf:dnd5e.toolProficiencies};for(let[a,r]of Object.entries(t)){const t=e[a];if(!t)continue;let n=[];t.value&&(n=t.value instanceof Array?t.value:[t.value]),t.selected=n.reduce(((e,t)=>(e[t]=r[t],e)),{}),t.custom&&t.custom.split(";").forEach(((e,a)=>t.selected[`custom${a+1}`]=e.trim())),t.cssClass=s(t.selected)?"inactive":""}}(e.data.traits),{actorData:e,resources:o,items:a}}(t,i);!function(e,t){const r={weapon:{label:"Weapons",items:[],dataset:{type:"weapon"}},equipment:{label:"Equipment",items:[],dataset:{type:"equipment"}},consumable:{label:"Consumables",items:[],dataset:{type:"consumable"}},tool:{label:"Tools",items:[],dataset:{type:"tool"}},backpack:{label:"Containers",items:[],dataset:{type:"backpack"}},loot:{label:"Loot",items:[],dataset:{type:"loot"}}};let[n,s,i,c]=e.items.reduce(((e,a)=>{var n,s;return a.labels=null===(n=a.flags)||void 0===n||null===(s=n.externalactor)||void 0===s?void 0:s.labels,a.img=t+a.img||t+"icons/svg/mystery-man.svg",a.isStack=!!a.data.quantity&&a.data.quantity>1,a.hasUses=a.data.uses&&a.data.uses.max>0,a.isOnCooldown=a.data.recharge&&!!a.data.recharge.value&&!1===a.data.recharge.charged,a.isDepleted=a.isOnCooldown&&a.data.uses.per&&a.data.uses.value>0,a.hasTarget=!!a.data.target&&!["none",""].includes(a.data.target.type),function(e){if("spell"===e.type){const t="always"===o(e.data,"preparation.mode"),a=o(e.data,"preparation.prepared");e.toggleClass=a?"active":"",t&&(e.toggleClass="fixed"),e.toggleTitle=t?dnd5e.spellPreparationModes.always:a?dnd5e.spellPreparationModes.prepared:"Unprepared"}else{const t=o(e.data,"equipped");e.toggleClass=t?"active":"",e.toggleTitle=t?"Equipped":"Not Equipped"}}(a),"spell"===a.type?e[1].push(a):"feat"===a.type?e[2].push(a):"class"===a.type?e[3].push(a):Object.keys(r).includes(a.type)&&e[0].push(a),e}),[[],[],[],[]]);n=l(n,a.inventory),s=l(s,a.spellbook),i=l(i,a.features);const d=function(e,t){const a=e.actorData.data.spells,r={},n={atwill:-20,innate:-10,pact:.5},s={"-20":"-","-10":"-",0:"&infin;"},o=(e,t,a,n={})=>{r[t]={order:t,label:a,usesSlots:t>0,canCreate:t>=1,canPrepare:t>=1,spells:[],uses:s[t]||n.value||0,slots:s[t]||n.max||0,override:n.override||0,dataset:{type:"spell",level:t},prop:e}},l=Array.fromRange(10).reduce(((e,t)=>{if(0===t)return e;const r=a[`spell${t}`];return(r.max||r.override)&&t>e&&(e=t),e}),0);if(l>0){o("spell0",0,dnd5e.spellLevels[0]);for(let e=1;e<=l;e++){const t=`spell${e}`;o(t,e,dnd5e.spellLevels[e],a[t])}}a.pact&&a.pact.max&&(o("spell0",0,dnd5e.spellLevels[0]),o("pact",n.pact,dnd5e.spellPreparationModes.pact,a.pact));t.forEach((e=>{const t=e.data.preparation.mode||"prepared";let s=e.data.level||0;const l=`spell${s}`;t in n?(s=n[t],r[s]||o(t,s,dnd5e.spellPreparationModes[t],a[t])):r[s]||o(l,s,dnd5e.spellLevels[s],a[l]),r[s].spells.push(e)}));const i=Object.values(r);return i.sort(((e,t)=>e.order-t.order)),i}(e,s),p=s.filter((e=>e.data.level>0&&"prepared"===e.data.preparation.mode&&e.data.preparation.prepared)).length;let u=0;for(let e of n)e.data.quantity=e.data.quantity||0,e.data.weight=e.data.weight||0,e.totalWeight=Math.round(e.data.quantity*e.data.weight*10)/10,r[e.type].items.push(e),u+=e.totalWeight;e.actorData.data.attributes.encumbrance=function(e,t){var a,r,n,s;let o={tiny:.5,sm:1,med:1,lg:2,huge:4,grg:8}[t.actorData.data.traits.size]||1;null!==(a=t.actorData.data.flags)&&void 0!==a&&null!==(r=a.dnd5e)&&void 0!==r&&r.powerfulBuild&&(o=Math.min(2*o,8));if(null!==(n=t.actorData.data.flags)&&void 0!==n&&null!==(s=n.externalactor)&&void 0!==s&&s.currencyWeight){const a=t.actorData.data.currency;e+=Object.values(a).reduce(((e,t)=>e+t),0)/dnd5e.encumbrance.currencyPerWeight}const l={max:t.actorData.data.abilities.str.value*dnd5e.encumbrance.strMultiplier*o,value:Math.round(10*e)/10};return l.pct=Math.min(100*l.value/l.max,99),l.encumbered=l.pct>2/3,l}(u,e);const f={classes:{label:"Class Levels",items:[],hasActions:!1,dataset:{type:"class"},isClass:!0},active:{label:"Active Abilities",items:[],hasActions:!0,dataset:{type:"feat","activation.type":"action"}},passive:{label:"Passive Abilities",items:[],hasActions:!1,dataset:{type:"feat"}}};for(let e of i)e.data.activation.type?f.active.items.push(e):f.passive.items.push(e);c.sort(((e,t)=>t.levels-e.levels)),f.classes.items=c,e.inventory=Object.values(r),e.spellbook=d,e.preparedSpells=p,e.features=Object.values(f)}(f,i),$(".window-content")[0].innerHTML=e({actor:f.actorData,data:f.actorData.data,items:f.actorData.items,disableExperience:null===(c=f.actorData.flags)||void 0===c||null===(d=c.externalactor)||void 0===d?void 0:d.disableExperience,classLabels:null===(p=f.actorData.flags)||void 0===p||null===(u=p.externalactor)||void 0===u?void 0:u.classLabels,filters:a,resources:f.resources,isCharacter:"character"===f.actorData.data.type,isNPC:"npc"===f.actorData.data.type,owner:!0,actorSizes:dnd5e.actorSizes,inventory:f.inventory,spellbook:f.spellbook,preparedSpells:f.preparedSpells,features:f.features},{allowedProtoProperties:{size:!0}}),function(){const e=$(".window-content").first();r.forEach((t=>t.bind(e[0]))),e.find(".rollable").each(((e,t)=>t.classList.remove("rollable")))}()}))}});
//# sourceMappingURL=populatesheet.js.map