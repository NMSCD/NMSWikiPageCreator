"use strict";import"./vue.runtime.esm-bundler-3ZgqKN1E.js";import"./minimal-DFXDy0i6.js";import{Mt as e,Ot as i,_ as p,c as o,ht as f,it as g,kt as s,tt as d,v as I,vt as h}from"./portalglyphs-GMhkLqu8.js";import{c as y,i as v,r as $,s as x}from"./startup-DSvLD0_L.js";import"./gallery-CVFJ7_gj.js";import"./Explanation-D7rNd3Mp.js";import"./_plugin-vue_export-helper-Bjxippq7.js";function c(){let n=e.region,t=i.output.regNr;t.innerText=f(n)}function u(){let n=p(),t=i.output.addInfo;t.innerText=`${n}`}function C(){e.catalogue=`Category: ${e.system}`}function m(){let n=e.name,t=e.tentacles,r=e.mainColour,a=e.secColour,l=i.input.appearanceInput;(r.trim()||a.trim()||t.trim())&&(l.value=`${n} is ${r.trim()?`${I(r)} ${r.trim()}`:""} organic frigate${a.trim()?` with ${a} accents`:""} with ${t}.`,g(l))}function T(){return`{{Class|${e.class}}}`}function w(){return"Organic Frigate Album"}s.albumOtherExternal=()=>T(),s.albumItemTypeExternal=()=>w(),o("galleryExplanationExternal",`
	There is a preferred order of gallery pictures:
	<div class='dialog-center'>
		<ol class='dialog-list'>
			<li>Rear view of frigate</li>
			<li>Interaction screen</li>
			<li>System Page</li>
		</ol>
 	</div>`),o("galleryArray",["","Rear view of frigate","Interaction screen","System Page"]),h([{element:"nameInput",func:()=>{x(),m()}},{element:"portalglyphsInput",func:()=>c()},{element:["mainColourInput","secColourInput","tentacleInput"],func:()=>m()},{element:"researchTeam",func:()=>u()},{element:"classInput",func:()=>y()},{element:"hideAppearanceButton",handler:"click",func:function(){d("appearance",this)}},{element:["discoveredInput","discoveredlinkInput"],func:()=>$()}]),c(),C(),u(),v();
