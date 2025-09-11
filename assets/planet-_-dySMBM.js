"use strict";import{D as o,C as l,_ as d,G as s,ap as p,aq as f,Z as y,Y as g,ar as v,T as h,X as b,P as A,U as P}from"./links-f23rfWqw.js";import"./index-B0k6ZWeC.js";import"./index-C5ksY6xK.js";import"./creatureData-BP-SWOsl.js";import"./startup-MZTHOO7z.js";import"./gallery-Cey1XwYv.js";import"./runtime-dom.esm-bundler-BCJntOSV.js";import"./Explanation.vue_vue_type_script_setup_true_lang-DGxAgSSW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./floraDatalists-Bz-O6jQ9.js";import"./mineralDatalists-CKshA0d-.js";const x={input:{moonInputs:"moonInputs",addMoonButton:"addMoonButton"},output:{}};function S(t){const n=t.parentElement,e=document.querySelectorAll("[data-moon]"),a=f(Array.from(e),"dataset.moon"),r="moon_input"+a,c=`<div class="table-cell text removable" data-moon="section${a}">
		<button class="button is-outlined is-danger icon is-small" title="Remove moon" type="button" data-evt-id="removeButton">&#10006</button>
		<label for="${r}">Moon name:</label>
	</div>
	<div class="table-cell data" data-moon="section${a}">
		<input type="text" id="${r}" data-evt-id="moonInput">
	</div>`,m=y(c,{},[{element:"moonInput",handler:"input",func:()=>i()},{element:"removeButton",handler:"click",func:()=>{v("section"+a,"moon"),E()}}]);g(m,n,"beforebegin"),document.querySelectorAll("[data-moon]").length/2+1>2&&(t.disabled=!0)}function E(){const t=l.input.moonInputs.querySelector("button");t.disabled=!1,i()}function i(){const t=document.querySelectorAll("[data-moon] input"),n=[];for(const e of Array.from(t))e.value&&n.push(`[[${p(e.value)}]]`);l.output.moonList.innerText=n.join(", "),o.moons=n,M()}function I(t,n=""){const e=t===1?"is":"are";if(!n)return e;s(e,n)}function M(){const t=(()=>{const n=o.moons;if(!n||n.length===0)return"This planet has no moons.";{const e=n.length;return`This planet's [[moon]]${e>1?"s":""} ${I(e)} ${n.join(" and ")}.`}})();s(t,"moonSentence")}function $(){const t=["","Landscape","Night View","Cave System","Analysis Visor","Planet Exploration Guide","Planet Page","System Page","Galaxy Map"],n=["Coast Area","Underwater"];if(o.terrain!=="Pangean"){const e=t.indexOf("Analysis Visor");t.splice(e,0,...n)}o.galleryArray=t}function u(){const t=o.terrain;typeof t=="string"&&s(t!=="Pangean"?"Yes":"No","water")}function w(){i();const t=l.input.terrainInput;t instanceof HTMLSelectElement&&d(t,"change")}const C=[{element:"addMoonButton",handler:"click",func:function(){S(this)}},{element:"terrainInput",func:()=>u()}];h.generateGalleryArray=()=>$(),document.addEventListener("pageReset",()=>w()),b(x),A(C),i(),u(),P("galleryExplanationExternal",`
There is a preferred order of pictures:
	<div class='dialog-center'>
		<ol class='dialog-list'>
			<li>Landscape</li>
			<li>Night View</li>
			<li>Cave System</li>
			<li>Coast Area</li>
			<li>Underwater</li>
			<li>Analysis Visor</li>
			<li>Planet Exploration Guide</li>
			<li>Planet Page</li>
			<li>System Page</li>
			<li>Galaxy Map</li>
		</ol>
	</div>`);
