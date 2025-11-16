"use strict";import"./vue.runtime.esm-bundler-3ZgqKN1E.js";import"./minimal-DFXDy0i6.js";import{Mt as a,Ot as r,_ as y,c as g,it as i,kt as o,mt as m,s as u,vt as w,wt as v,y as x}from"./portalglyphs-GMhkLqu8.js";import{c as I,i as h,r as S,s}from"./startup-DSvLD0_L.js";import"./gallery-CVFJ7_gj.js";import"./Explanation-D7rNd3Mp.js";import"./_plugin-vue_export-helper-Bjxippq7.js";function p(){let e=a.planet,t=a.moon;if(!e){a.name="";return}let n=t||e;i(n,"bodyName"),a.name=`Immortal Worm ${n}`}function c(){let e=(()=>{let f=r.input.autoSpawn;for(let l of Array.from(f))if(l.checked)return l.value;return""})(),t=`This creature ${e} automatically spawn on game reload`,n=r.output.autoSpawn;n.style.display=e?"":"none",e&&(n.innerText=t),u()}function d(){let e=y(),t="Eisvana Rare Fauna Album";i(`[[${t}]]${e}`,"addInfo"),u(),a.catalogue=t}function b(){return a.catalogue.split("|").at(-1)}function $(){x();let{name:e,wormclass:t}=a;return`${e}|${t==="Unstoppable Nematode"?"Unstopp. Nematode":t}`}function P(){let{wormmaxdepth:e,wormstomach:t}=a;return`(${e}ku)<br>${t==="Consumed waypoints"?"Stom.":"Stomach"}: ${t}`}function E(){return a.catalogue.split("|")[0]}function k(){let e=["","Worm scan","Moon Page","Planet Page","System Page","Galaxy Map"];if(!a.moon){let t=e.findIndex(n=>n.toLowerCase().includes("moon"));e.splice(t,1)}a.galleryArray=e}o.generateGalleryArray=()=>k(),o.albumLinkGen=()=>E(),o.albumOtherExternal=()=>P(),o.albumNameExternal=()=>$(),o.albumItemTypeExternal=()=>b(),g("galleryExplanationExternal",`
	The preferred order of pictures is as follows:
	<div class='dialog-center'>
		<ol class='dialog-list'>
			<li>Worm scan</li>
			<li>Moon Page</li>
			<li>Planet Page</li>
			<li>System Page</li>
			<li>Galaxy Map</li>
		</ol>
	</div>`),v({input:{autoSpawn:"autoSpawnInput"}}),w([{element:["planetInput","moonInput"],func:()=>{p(),m(void 0,void 0,!0),s()}},{element:"autoSpawn",func:()=>c()},{element:"researchTeam",func:()=>d()},{element:"wormclassInput",func:()=>s()},{element:["wormmaxdepthInput","wormstomachInput"],func:()=>I()},{element:["discoveredInput","discoveredlinkInput"],func:()=>S()}]),p(),m(void 0,void 0,!0),d(),c(),h();
