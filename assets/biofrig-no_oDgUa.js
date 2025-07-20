"use strict";import{D as e,C as i,Q as d,R as I,G as y,S as $,O as h,T as l,U as s,P as v}from"./links-LgOPrxk_.js";import{a as C,b as x,c as T,d as b}from"./startup-29ArpqHX.js";import"./gallery-Ci-2u1J0.js";import"./runtime-dom.esm-bundler-3nNJwCht.js";import"./Explanation.vue_vue_type_script_setup_true_lang-DboraSD8.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function c(){const t=e.region,n=i.output.regNr;n.innerText=d(t)}function u(){const t=$(),n=i.output.addInfo;n.innerText=`${t}`}function w(){const t=e.system;e.catalogue=`Category: ${t}`}function m(){const t=e.name,n=e.tentacles,a=e.mainColour,r=e.secColour,o=i.input.appearanceInput;if(!(a.trim()||r.trim()||n.trim()))return;const p=a.trim()?`${I(a)} ${a.trim()}`:"",f=r.trim()?` with ${r} accents`:"",g=`${t} is ${p} organic frigate${f} with ${n}.`;o.value=g,y(o)}function E(){return`{{Class|${e.class}}}`}function O(){return"Organic Frigate Album"}const A=[{element:"nameInput",func:()=>{T(),m()}},{element:"portalglyphsInput",func:()=>c()},{element:["mainColourInput","secColourInput","tentacleInput"],func:()=>m()},{element:"researchTeam",func:()=>u()},{element:"classInput",func:()=>C()},{element:"hideAppearanceButton",handler:"click",func:function(){h("appearance",this)}},{element:["discoveredInput","discoveredlinkInput"],func:()=>x()}];l.albumOtherExternal=()=>E(),l.albumItemTypeExternal=()=>O(),s("galleryExplanationExternal",`
	There is a preferred order of gallery pictures:
	<div class='dialog-center'>
		<ol class='dialog-list'>
			<li>Rear view of frigate</li>
			<li>Interaction screen</li>
			<li>System Page</li>
		</ol>
 	</div>`),s("galleryArray",["","Rear view of frigate","Interaction screen","System Page"]),v(A),c(),w(),u(),b();
