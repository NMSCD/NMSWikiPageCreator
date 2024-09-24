import{bw as i,bH as _,bv as n,bI as V,c8 as J,bT as r,c9 as A,by as f,bx as K,bR as D,bS as z,bU as Q,bB as W,ca as X,bJ as E,cb as Y,bF as Z,bG as ee,bK as I,bL as te}from"./links-DZdM10VC.js";import{h as N,a as ne,i as R,b as C,c as oe,d as se}from"./startup-Dxj1daxr.js";import"./gallery-CSq1IxaD.js";import"./runtime-dom.esm-bundler-BoZUkUWd.js";import"./Explanation.vue_vue_type_script_setup_true_lang-Da6ECYRw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function H(){i.output.regNr.innerText=_(n.region)}function x(){const e=V();i.output.addInfo.innerText=e}function $(){const e=n.mainColour,t=n.secColour,l=n.name,o=n.subtype.toLowerCase(),a=n.type.toLowerCase(),s=i.input.appearanceInput;if(!e.trim()&&!t.trim())return;const c=`${l} is ${e.trim()?`${E(e)} ${e.trim()}`:E(a)} ${"starter pistol"===o?o:a} multi-tool${t.trim()?` with ${t} accents`:""}.`;s.value=c,f(s)}function q(){ce(),n.albumInitialised?N():document.addEventListener("albumLoaded",(()=>N()))}function L(){q(),b()}function ce(){const{srLocName:e,planet:t,moon:i,axes:l}=n,o=n.location.toLowerCase(),a=W(t,i);let s,c;const r=(()=>{const t=n.srLoc;return e||t.includes("Space")?t.toLowerCase():o.includes("Space")?o:a})();o.includes("space")?(s=`fly to the ${o}`,c=`the ${r}`,o!==r&&e?r.includes("space")||(c=`${r} [[${e}]]`):s="take from cabinet"):(c=`${r} [[${e}]]`,s=`fly to ${a} (${l})`,r.toLowerCase().includes("space")?c=`the ${r}`:i&&"moon"===r&&e===i||!i&&"planet"===r&&e===t?s=`fly to ${l}`:e||(c=`${a}`,s=`fly to ${l}`));f(`Save and reload on ${c}, then ${s}.`,"acquirement"),n.actualSrLoc=r}function b(){const e=n.srLocName,t=n.location,l=n.srPlanetImg||"nmsMisc_notAvailable.png",o=n.sysImg||"nmsMisc_notAvailable.png",a=n.cabinetPlanetImg||"nmsMisc_notAvailable.png",s=n.axesImg||"nmsMisc_notAvailable.png",c=["srImgInput","sysImgInput","cabInput","coordsInput"],u=[{},{},{},{}],p=J(),m=(()=>{const i=n.srLoc;return i.includes("Space")||e?i:t.includes("Space")?t:p})(),f="Sentinel Pillar"===t?"Pillar":"Cabinet",d=t.includes("Space")?"":`(${f} ${p} highlighted)`;function I(e,n,t){e.picName=n,e.desc=t}I(u[0],l,`Save/Reload ${m}`),I(u[1],o,`System ${d}`),!t.includes("Space")&&(I(u[2],a,`${f} ${p}`),I(u[3],s,"Coordinates"));const b=[];for(let e=0;e<u.length;e++){const n=u[e],t=n.picName,l=n.desc,o=c[e];if(!t||!l){r(i.input[o],"none");continue}r(i.input[o],"");const a=document.createElement("span");a.style.display="block",a.innerText=`${t}|${l}`,b.push(a.outerHTML),i.output[o+"Label"].innerText=l}i.output.acquirementGallery.innerHTML=b.join("")}function B(){const e=n.type,t=i.input.locInput;e in A?(r(t,"none"),t.value=A[e],f(t)):r(t,""),M(),G(),b()}function ae(){const e=n.location,t=i.input.typeInput,l=i.input.subtypeInput;if(!("string"==typeof e&&t instanceof HTMLSelectElement&&l instanceof HTMLSelectElement))return;const o=structuredClone(A);delete o.Royal;const a=Object.fromEntries(Object.entries(o).map((e=>e.reverse())));e in a?(r(t,"none"),r(l,"none"),t.value=a[e],f(t)):r(t,""),M(),G(),b()}function O(){const e=n.location,t=["planetInput","moonInput","axesInput"];for(const n of t){const t=i.input[n],l=e.includes("Space");r(t,l?"none":""),l&&(t.value="",f(t),K(t))}}function k(){const e=n.srLoc,t=i.input.srInput;e.includes("Space")?(r(t,"none"),t.value="",f(t)):r(t,"")}function M(){const e=n.location,t=i.input.costInput,l="Sentinel Pillar"===e||"Harmonic Camp"===e;r(t,l?"none":""),l&&(t.value="",D(t,"input"))}function G(){const e=n.type,t=i.input.crystalsInput;if(["Royal","Sentinel","Atlantid"].includes(e)){const e=t.closest(".checkboxes").querySelectorAll('input[type="checkbox"]');r(t,"none"),e.forEach((e=>{e.checked=!1,D(e,"change")}))}else r(t,"")}function F(){const e=n.type,t=i.input.subtypeInput,l={Pistol:[["Pistol","Starter Pistol"],["Standard","Starter Pistol"]],Rifle:[["Rifle","SMG"],["Standard (Large)","SMG (Small)"]],Experimental:[["Rifle","Pistol"],["Rifle (Large)","Pistol (Small)"]],Alien:[["Rifle","SMG","Pistol"],["Rifle (Large)","SMG (Medium)","Pistol (Small)"]]},o=Object.keys(l).includes(e);r(t,o?"":"none"),o?z(t,l[e][0],l[e][1]):t.value="",Q(t)}function le(){return"Album"}function ie(){return"Multi-Tool"}function re(){return`<br>{{Class|${n.class}}} - ${function(){const e=n.subtype;return!e||n.isStarter?"":e+" -"}()} ${n.slots} Slots`}function ue(){return(()=>{const e=n.axes,t=n.acquirement.replace("Save and reload","S/r");return e&&!X(!1)?t.replace(/[()]/g,"").replace(e,`(${e})`):t})()}function pe(){const e=["","Discovery Menu","Price Page","Base Stats","Minor Settlement","Sentinel Pillar","Harmonic Camp","Monolith","Tool in Hand","First Person View"],t=n.location,i=["Minor Settlement","Sentinel Pillar","Harmonic Camp","Monolith"];if(i.includes(t))i.filter((e=>e!==t)).forEach((n=>{const t=e.indexOf(n);e.splice(t,1)}));else for(let n=e.length-1;n>=0;n--)i.includes(e[n])&&e.splice(n,1);n.galleryArray=e}const me=[{element:"nameInput",func:()=>{ne(),$()}},{element:"typeInput",func:()=>{x(),B(),F(),E(n.type,"enPrefix"),R(),C(),$()}},{element:"subtypeInput",func:()=>{C(),x(),$(),R()}},{element:"researchTeam",func:()=>x()},{element:"locInput",func:function(){L(),O(),M(),ae()}},{element:"srlocInput",func:()=>{L(),k()}},{element:["srInput","planetInput","moonInput"],func:()=>L()},{element:"axesInput",func:()=>q()},{element:["slotsInput","classInput"],func:()=>C()},{element:["srImgInput","sysImgInput","cabInput","coordsInput"],func:()=>b()},{element:["srImgUpload","sysImgUpload","cabUpload","coordsUpload"],handler:"change",func:function(){Y(this),b()}},{element:"portalglyphsInput",func:()=>H()},{element:["discoveredInput","discoveredlinkInput"],func:()=>oe()},{element:["mainColourInput","secColourInput"],func:()=>$()},{element:"hideAppearanceButton",handler:"click",func:function(){Z("appearance",this)}}];I.albumDescExternal=()=>ue(),I.albumOtherExternal=()=>re(),I.albumItemTypeExternal=()=>ie(),I.albumTypeExternal=()=>le(),I.generateGalleryArray=()=>pe(),te("galleryExplanationExternal","\n\tThere is a preferred order of pictures:\n\t<div class='is-flex is-justify-content-center'>\n\t\t<ol class='has-text-left'>\n\t\t\t<li>Discovery Menu</li>\n\t\t\t<li>Price Page</li>\n\t\t\t<li>Base Stats</li>\n\t\t\t<li>Minor Settlement/Sentinel Pillar/Harmonic Camp/Monolith</li>\n\t\t\t<li>Tool in Hand</li>\n\t\t\t<li>First Person View</li>\n\t\t</ol>\n\t</div>"),ee(me),L(),x(),B(),F(),O(),k(),H(),M(),se(),E(n.type??"","enPrefix");
