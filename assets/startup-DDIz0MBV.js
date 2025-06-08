"use strict";import{a4 as b,aG as Y,M as y,ao as J,aH as V,aI as X,L as I,al as Z,aJ as K,aK as d,aL as Q,aM as z,X as g,aN as ee,P as w,aw as te,C as i,aO as ne,O as ae,aP as oe,V as f,D as u,aQ as L,T as o,aR as A,aS as ie,F as le,ax as C,aT as S,aU as B,Z as x,Y as D,_ as N,U as k,aV as re,aW as ue,aX as se,ag as ce,aY as de,aZ as H,a_ as pe}from"./links-DlE74E-n.js";const me=[{element:"nameInput",func:function(){b()}},{element:"researchTeam",func:function(){Y(),y()}},{element:"fileUpload",handler:"change",func:function(){J(this)}},{element:"portalglyphsInput",func:function(){V(this),X(),b()}},{element:"discoveredInput",func:function(){I("discoveredInput","discoveredlinkInput"),y()}},{element:"discoveredlinkInput",func:function(){I("discoveredlinkInput","discoveredInput"),y()}},{element:"docbyInput",func:function(){y()}},{element:"axesInput",handler:"change",func:function(){Z()}},{element:"glyphDeleteButton",handler:"click",func:function(){K()}},{element:"fileUploadTooltip",handler:"click",func:function(){d.uploadShown=!0}},{element:"galleryFileUploadTooltip",handler:"click",func:function(){d.galleryUploadShown=!0}}];Q(),z(),g(ee),w(me),te();const fe={output:{explanationHeading:"explanationHeading",explanationContent:"explanationContent",explanationLink:"explanationLink",explanationWebpImg:"explanationWebpImg",explanationFallbackImg:"explanationFallbackImg"}},P=i.output.explanation;P&&(P.innerHTML=ne),g(fe);const be=["builderInput","builderlinkInput","discoveredInput","discoveredlinkInput"];for(const e of be){const t=i.input[e];t&&(t.dataset.player="")}ae();function ye(){var e,t;const n=document.querySelectorAll(".table .data input, .table .data textarea"),l=document.querySelectorAll(".table .data select"),r=document.getElementsByTagName("output");for(const a of Array.from(n))switch(a.type.toLowerCase()){case"checkbox":a.checked=!1;break;case"radio":const c=document.querySelectorAll('input[type="radio"]:not([checked])'),p=document.querySelectorAll('input[type="radio"][checked]');for(const m of Array.from(c))m.checked=!1;for(const m of Array.from(p))m.checked=!0;break;default:a.value=""}for(const a of Array.from(l))a.value=(t=(e=a.options)==null?void 0:e[0])==null?void 0:t.value;for(const a of Array.from(r))a.innerText="";ie();for(const a in u)delete u[a];const s=document.querySelectorAll(".error");for(const a of Array.from(s))le(a.previousElementSibling);for(const a in C)delete C[a];typeof o.resetExternal=="function"&&o.resetExternal(),S(),B()}function h(e,t){var n,l,r,s;e.style.pointerEvents="none";const{innerText:a,dataset:{link:c}}=e;f.text=oe(JSON.stringify(u)),f.copy=!0,f.link=c;const p=L(e);if(p){e.classList.remove("is-primary"),e.classList.add("is-danger"),e.innerText=p,setTimeout(()=>{e.classList.remove("is-danger"),e.classList.add("is-primary"),e.innerText=a,e.style.pointerEvents=""},1500);return}const m=((s=(r=(l=(n=i)==null?void 0:n.output)==null?void 0:l[t])==null?void 0:r.innerText)==null?void 0:s.replaceAll(`


`,`

`))??t;navigator.clipboard.writeText(m),f.copy=!0,f.link=c,e.innerText="Copied!",setTimeout(()=>{e.innerText=a,e.style.pointerEvents=""},1500)}function he(e){const t=i.output.fullArticle.innerText.replaceAll(`


`,`

`),n="data:text/plain",l=u.name,r=e;r.href=n+","+encodeURIComponent(t),r.download=l+".txt"}function O(e,t=u.name){e.style.pointerEvents="none";const n=A+"Special:EditPage/"+t;U(e,n)}function U(e,t){const n=L(e),l=["#","<",">","[","]","{","|","}"],r=new RegExp(`[${l.join("")}]`,"g");if(!n)e.href=t.replace(r," "),e.target="_blank",e.rel="noopener noreferrer",e.style.pointerEvents="";else{const s=e.innerText;e.removeAttribute("href"),e.className="button is-danger",e.innerText=n,setTimeout(()=>{e.className="button is-outlined is-primary",e.innerText=s,e.style.pointerEvents=""},1500)}}function ge(){var e;if(typeof o.redirectPage!="function")return;const t=document.getElementById("reset"),n=["copyRedirect","createRedirect"],l=document.createElement("p");if(l.id="redirectNote",l.classList.add("has-text-centered"),l.innerText="Please create a redirect for your page!",!o.redirectPage()){n.forEach(()=>{const c=t.previousElementSibling;n.includes(c.id)&&c.remove()}),(e=document.getElementById(l.id))==null||e.remove();return}const r=document.createElement("button");r.innerText="Copy Redirect Code",r.type="button";const s=document.createElement("a");s.rel="noopener noreferrer",s.target="_blank",s.innerText="Create Redirect",w([{element:r,handler:"click",func:function(){h(this,`#REDIRECT [[${u.name}]]`)}},{element:s,handler:"click",func:function(){O(this,o.redirectPage())}}]);const a=[r,s];for(let c=0;c<a.length;c++){const p=a[c],m=n[c];if(document.getElementById(m))return;p.classList.add("button","is-outlined","is-primary"),p.id=m,p.dataset.link="redirect",t.insertAdjacentElement("beforebegin",p)}t.parentElement.insertAdjacentElement("beforebegin",l)}const xe=`
<button class="button is-outlined is-primary" id="copy" type="button" data-link="page" data-evt-id="copyButton">Copy Wikicode</button>
<a class="button is-outlined is-primary" id="download" data-evt-id="downloadButton">Download File</a>
<a class="button is-outlined is-primary" href="https://nomanssky.fandom.com/wiki/Special:Upload?multiple=true" id="uploadLink" rel="noopener noreferrer" target="_blank">Upload Pictures</a>
<a class="button is-outlined is-primary" id="create" data-link="page" data-evt-id="createPageButton">Create Page</a>
<button class="button is-warning" id="reset" type="reset" data-evt-id="resetButton">Reset Inputs</button>`,ke=[{element:"copyButton",handler:"click",func:function(){h(this,"fullArticle")}},{element:"downloadButton",handler:"click",func:function(){he(this)}},{element:"createPageButton",handler:"click",func:function(){O(this)}},{element:"resetButton",handler:"click",func:()=>ye()}],ve=x(xe,{},ke),Te=`<p class="has-text-centered">You must copy the code first, then paste it into the wiki page.<br>Also don't forget to upload any images you have put here.</p>`,v=i.output.actions;v.innerHTML="",D(ve,v,"afterbegin"),v.insertAdjacentHTML("beforebegin",Te);const Ee=`
<label style="display:flex; gap: .3rem"><input class="checkbox" type="checkbox" id="skipCheck" data-evt-id="skipCheck">Enable debug (no checks, no popups)</label>;
<button style="margin: 0 1rem" class="button is-danger is-small" id="clearCache" data-evt-id="clearCache">Clear Localstorage</button>`,Ie=[{element:"clearCache",handler:"click",func:()=>localStorage.clear()},{element:"skipCheck",handler:"change",func:function(){const e=this.checked;d.debug=e,d.uploadShown=e,d.galleryUploadShown=e,document.documentElement.dataset.debug=e.toString(),b()}}];i.output.actions,x(Ee,{},Ie),Object.defineProperty(d,"debug",{configurable:!1,writable:!1,value:!1});const T=document.getElementById("skipCheck");T&&new URLSearchParams(window.location.search).has("debug")&&(T.checked=!0,N(T,"change"));const we=`<h2 class="title is-5 has-text-left has-text-weight-bold mb-2">
  <!--<output id="hubname" name="hubname"></output>  //NOSONAR
	(this is fine since this snippet is inserted somewhere else)-->
  <output
    id="albumHeaderName"
    name="name"
  ></output>
  entry for
  <output
    id="system"
    name="system"
  ></output
  >:
</h2>
<div
  id="albumText"
  class="wikiText"
>
  This category is for content related to the '''<output
    id="system"
    name="system"
  ></output
  >''' [[system]].
  <br />
  <br />
  [[Category: Systems]]
  <br />
  [[Category:
  <output
    id="region"
    name="region"
  ></output
  >]]
</div>
`,Le=`<button id="albumBtn" class="button is-outlined is-primary"
	   data-link="album" data-evt-id="copyButton">
	   Copy Category Wikicode
	   </button>
	   <a class="button is-outlined is-primary" id="albumLink"
	   data-link="album" data-evt-id="openAlbumButton">
	   Open Category
	   </a>`,Ae=[{element:"copyButton",handler:"click",func:function(){h(this,"albumText")}},{element:"openAlbumButton",handler:"click",func:function(){M(this)}}],R=x(Le,{},Ae);function M(e){e.style.pointerEvents="none";const t=(()=>{if(typeof o.albumLinkGen=="function")return o.albumLinkGen();if(u.catalogue)return u.catalogue;console.warn("No wiki page provided. Define the function `albumLinkGen()` and add it to the `globalFunctions` object or define a catalogue in the `pageData.catalogue` property!"),e.style.pointerEvents=""})();t&&U(e,A+t)}function j(){const e=typeof o.albumItemTypeExternal=="function"?o.albumItemTypeExternal():u.type;i.output.album.innerText=e}function G(){const e=typeof o.albumDescExternal=="function"?o.albumDescExternal():"",t=i.output.albumDesc;t&&(t.innerText=e)}function F(){const e=(()=>{if(typeof o.albumDiscovererExternal=="function")return o.albumDiscovererExternal();{const{discovered:n,discoveredlink:l}=u;return l?`wiki=${l}`:`discoverer=${n}`}})(),t=i.output.albumDiscoverer;t&&(t.innerText=e)}function q(){const e=typeof o.albumNameExternal=="function"?o.albumNameExternal():u.name;i.output.albumName.innerText=e}function W(){const e=typeof o.albumOtherExternal=="function"?o.albumOtherExternal():"",t=i.output.albumOther;t&&(t.innerText=e)}function Ce(){const e=typeof o.albumTypeExternal=="function"?o.albumTypeExternal():"";i.output.albumType.innerText=e}function Se(){const e={albumHeaderName:"name",albumImage:"image",albumGlyphs:"portalglyphs"};for(const t in e){const n=i.output[t];n.innerText=u[e[t]]}}function Be(){u.albumInitialised?e():document.addEventListener("albumLoaded",()=>e());function e(){Se(),F(),q(),W(),Ce(),j(),G()}}const De={output:{album:"album",albumType:"albumType",albumHeaderName:"albumHeaderName",albumImage:"albumImage",albumName:"albumName",albumOther:"albumOther",albumGlyphs:"albumGlyphs",albumDiscoverer:"albumDiscoverer",albumText:"albumText",albumDesc:"albumDesc"}},_=i.output.albumEntry,E=i.output.albumActions;_ instanceof HTMLDivElement&&(_.innerHTML=we),E instanceof HTMLDivElement&&(D(R,E,"afterbegin"),g(De),document.dispatchEvent(new Event("albumLoaded")),k("albumInitialised",!0),E.insertAdjacentHTML("afterbegin",`<p style="width:100%" class="has-text-centered mb-3">Please don't forget to create a category entry!</p>`)),re(i.output.portalglyphButtons,"portalglyphsInput");const Ne=ue();k("pageType",Ne),se(),S(),ce(),d.uploadShown=!0,d.galleryUploadShown=!0,B(),d.debug||(d.uploadShown=!1,d.galleryUploadShown=!1),b();const $=i.output.output;$.onmousedown=()=>de();for(const e of Array.from($.children)){const t=e;t.onmouseup=n=>H(n.target),t.ontouchend=n=>H(n.target)}pe();try{N(i.input.portalglyphsInput,"input")}catch{}k("eventListeners",!0);export{W as a,F as b,q as c,Be as d,h as e,M as f,R as g,G as h,j as i,ge as t};
