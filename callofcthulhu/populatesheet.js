!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=359)}({359:function(t,e,n){function o(t,e){return t.match(/https?:\/\//)?t:e+t}n.r(e);const r=[{navSelector:".tabs",contentSelector:".sheet-body",initial:"biography"}].map((t=>new Tabs(t)));Hooks.on("showSheet",(function(t,e,n){const i=function(t,e){return t.img=o(t.img,e),t.items.sort(((t,e)=>(t.sort||0)-(e.sort||0))),t.items.forEach((t=>{t.img=o(t.img,e)})),t}(e,n);$(".window-content")[0].innerHTML=t({actor:i,data:i.data},{allowedProtoProperties:{size:!0}}),function(){const t=$(".window-content").first();r.forEach((e=>e.bind(t[0])))}()}))}});
//# sourceMappingURL=populatesheet.js.map