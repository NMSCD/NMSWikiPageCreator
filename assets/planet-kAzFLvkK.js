"use strict";import"./vue.runtime.esm-bundler-3ZgqKN1E.js";import"./minimal-DFXDy0i6.js";import{E as m,L as d,Mt as o,Ot as l,X as c,c as p,it as r,kt as f,nt as y,o as g,q as v,vt as h,wt as b}from"./portalglyphs-GMhkLqu8.js";import"./startup-DSvLD0_L.js";import"./gallery-CVFJ7_gj.js";import"./Explanation-D7rNd3Mp.js";import"./_plugin-vue_export-helper-Bjxippq7.js";import"./creatureData-D85I0m2j.js";import"./celestialObjects-kX9m1N_w.js";import"./planetMoon-lZyBGc4c.js";import"./floraDatalists-BTt2RLj_.js";import"./mineralDatalists-C-xGVlWa.js";var A={input:{moonInputs:"moonInputs",addMoonButton:"addMoonButton"},output:{}};function x(t){let e=t.parentElement,n=document.querySelectorAll("[data-moon]"),a=m(Array.from(n),"dataset.moon"),s="moon_input"+a;g(d(`<div class="table-cell text removable" data-moon="section${a}">
		<button class="button is-outlined is-danger icon is-small" title="Remove moon" type="button" data-evt-id="removeButton">&#10006</button>
		<label for="${s}">Moon name:</label>
	</div>
	<div class="table-cell data" data-moon="section${a}">
		<input type="text" id="${s}" data-evt-id="moonInput">
	</div>`,{},[{element:"moonInput",handler:"input",func:()=>i()},{element:"removeButton",handler:"click",func:()=>{v("section"+a,"moon"),P()}}]),e,"beforebegin"),document.querySelectorAll("[data-moon]").length/2+1>2&&(t.disabled=!0)}function P(){let t=l.input.moonInputs.querySelector("button");t.disabled=!1,i()}function i(){let t=document.querySelectorAll("[data-moon] input"),e=[];for(let n of Array.from(t))n.value&&e.push(`[[${c(n.value)}]]`);l.output.moonList.innerText=e.join(", "),o.moons=e,E()}function S(t,e=""){let n=t===1?"is":"are";if(!e)return n;r(n,e)}function E(){r((()=>{let t=o.moons;if(!t||t.length===0)return"This planet has no moons.";{let e=t.length;return`This planet's [[moon]]${e>1?"s":""} ${S(e)} ${t.join(" and ")}.`}})(),"moonSentence")}function M(){let t=["","Landscape","Night View","Cave System","Analysis Visor","Planet Exploration Guide","Planet Page","System Page","Galaxy Map"],e=["Coast Area","Underwater"];if(o.terrain!=="Pangean"){let n=t.indexOf("Analysis Visor");t.splice(n,0,...e)}o.galleryArray=t}function u(){let t=o.terrain;typeof t=="string"&&r(t==="Pangean"?"No":"Yes","water")}function $(){i();let t=l.input.terrainInput;t instanceof HTMLSelectElement&&y(t,"change")}f.generateGalleryArray=()=>M(),document.addEventListener("pageReset",()=>$()),b(A),h([{element:"addMoonButton",handler:"click",func:function(){x(this)}},{element:"terrainInput",func:()=>u()}]),i(),u(),p("galleryExplanationExternal",`
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
