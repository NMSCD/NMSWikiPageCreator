import{D as n,a4 as g,C as s,K as m,S as b,G as c,J as i,T as o,U as w,X as y,P as h}from"./links-rbsmWE0W.js";import{c as u,a as S,b as x,d as E}from"./startup-ADLQtcYM.js";import"./gallery--10YnZEM.js";import"./runtime-dom.esm-bundler-B7T87I3T.js";import"./Explanation.vue_vue_type_script_setup_true_lang-C8G0zOdj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function p(){const t=n.planet,a=n.moon;if(!t)return void(n.name="");const e=a||t;c(e,"bodyName"),n.name=`Immortal Worm ${e}`}function d(){const n=(()=>{const n=s.input.autoSpawn;for(const t of Array.from(n))if(t.checked)return t.value;return""})(),t=`This creature ${n} automatically spawn on game reload`,a=s.output.autoSpawn;a.style.display=n?"":"none",n&&(a.innerText=t),m()}function f(){const t=b(),a="Eisvana Rare Fauna Album";c(`[[${a}]]${t}`,"addInfo"),m(),n.catalogue=a}function I(){return n.catalogue.split("|").at(-1)}function P(){g();const{name:t,wormclass:a}=n;return`${t}|${"Unstoppable Nematode"===a?"Unstopp. Nematode":a}`}function $(){const{wormmaxdepth:t,wormstomach:a}=n;return`(${t}ku)<br>${"Consumed waypoints"===a?"Stom.":"Stomach"}: ${a}`}function G(){return n.catalogue.split("|")[0]}function N(){const t=["","Worm scan","Moon Page","Planet Page","System Page","Galaxy Map"];if(!n.moon){const n=t.findIndex((n=>n.toLowerCase().includes("moon")));t.splice(n,1)}n.galleryArray=t}const T=[{element:["planetInput","moonInput"],func:()=>{p(),i(void 0,void 0,!0),u()}},{element:"autoSpawn",func:()=>d()},{element:"researchTeam",func:()=>f()},{element:"wormclassInput",func:()=>u()},{element:["wormmaxdepthInput","wormstomachInput"],func:()=>S()},{element:["discoveredInput","discoveredlinkInput"],func:()=>x()}],k={input:{autoSpawn:"autoSpawnInput"}};o.generateGalleryArray=()=>N(),o.albumLinkGen=()=>G(),o.albumOtherExternal=()=>$(),o.albumNameExternal=()=>P(),o.albumItemTypeExternal=()=>I(),w("galleryExplanationExternal","\n\tThe preferred order of pictures is as follows:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Worm scan</li>\n\t\t\t<li>Moon Page</li>\n\t\t\t<li>Planet Page</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Galaxy Map</li>\n\t\t</ol>\n\t</div>"),y(k),h(T),p(),i(void 0,void 0,!0),f(),d(),E();
