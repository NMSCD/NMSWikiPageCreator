"use strict";import{a4 as m,aG as $,M as f,ao as Y,aH as J,aI as V,L as E,al as X,aJ as Z,aK as s,aL as K,aM as Q,X as y,aN as z,P as I,aw as ee,C as i,aO as te,O as ne,aP as ae,V as p,D as r,aQ as w,T as o,aR as L,aS as oe,F as ie,ax as A,aT as C,aU as S,Z as h,Y as B,_ as D,U as g,aV as le,aW as re,aX as se,ag as ue,aY as ce,aZ as N,a_ as de}from"./links-f23rfWqw.js";const pe=[{element:"nameInput",func:function(){m()}},{element:"researchTeam",func:function(){$(),f()}},{element:"fileUpload",handler:"change",func:function(){Y(this)}},{element:"portalglyphsInput",func:function(){J(this),V(),m()}},{element:"discoveredInput",func:function(){E("discoveredInput","discoveredlinkInput"),f()}},{element:"discoveredlinkInput",func:function(){E("discoveredlinkInput","discoveredInput"),f()}},{element:"docbyInput",func:function(){f()}},{element:"axesInput",handler:"change",func:function(){X()}},{element:"glyphDeleteButton",handler:"click",func:function(){Z()}},{element:"fileUploadTooltip",handler:"click",func:function(){s.uploadShown=!0}},{element:"galleryFileUploadTooltip",handler:"click",func:function(){s.galleryUploadShown=!0}}];K(),Q(),y(z),I(pe),ee();const me={output:{explanationHeading:"explanationHeading",explanationContent:"explanationContent",explanationLink:"explanationLink",explanationWebpImg:"explanationWebpImg",explanationFallbackImg:"explanationFallbackImg"}},H=i.output.explanation;H&&(H.innerHTML=te),y(me);const fe=["builderInput","builderlinkInput","discoveredInput","discoveredlinkInput"];for(const e of fe){const t=i.input[e];t&&(t.dataset.player="")}ne();function be(){const e=document.querySelectorAll(".table .data input, .table .data textarea"),t=document.querySelectorAll(".table .data select"),a=document.getElementsByTagName("output");for(const n of Array.from(e))switch(n.type.toLowerCase()){case"checkbox":n.checked=!1;break;case"radio":const c=document.querySelectorAll('input[type="radio"]:not([checked])'),u=document.querySelectorAll('input[type="radio"][checked]');for(const d of Array.from(c))d.checked=!1;for(const d of Array.from(u))d.checked=!0;break;default:n.value=""}for(const n of Array.from(t))n.value=n.options?.[0]?.value;for(const n of Array.from(a))n.innerText="";oe();for(const n in r)delete r[n];const l=document.querySelectorAll(".error");for(const n of Array.from(l))ie(n.previousElementSibling);for(const n in A)delete A[n];typeof o.resetExternal=="function"&&o.resetExternal(),C(),S()}function b(e,t){e.style.pointerEvents="none";const{innerText:a,dataset:{link:l}}=e;p.text=ae(JSON.stringify(r)),p.copy=!0,p.link=l;const n=w(e);if(n){e.classList.remove("is-primary"),e.classList.add("is-danger"),e.innerText=n,setTimeout(()=>{e.classList.remove("is-danger"),e.classList.add("is-primary"),e.innerText=a,e.style.pointerEvents=""},1500);return}const c=i?.output?.[t]?.innerText?.replaceAll(`


`,`

`)??t;navigator.clipboard.writeText(c),p.copy=!0,p.link=l,e.innerText="Copied!",setTimeout(()=>{e.innerText=a,e.style.pointerEvents=""},1500)}function ye(e){const t=i.output.fullArticle.innerText.replaceAll(`


`,`

`),a="data:text/plain",l=r.name,n=e;n.href=a+","+encodeURIComponent(t),n.download=l+".txt"}function P(e,t=r.name){e.style.pointerEvents="none";const a=L+"Special:EditPage/"+t;U(e,a)}function U(e,t){const a=w(e),l=["#","<",">","[","]","{","|","}"],n=new RegExp(`[${l.join("")}]`,"g");if(!a)e.href=t.replace(n," "),e.target="_blank",e.rel="noopener noreferrer",e.style.pointerEvents="";else{const c=e.innerText;e.removeAttribute("href"),e.className="button is-danger",e.innerText=a,setTimeout(()=>{e.className="button is-outlined is-primary",e.innerText=c,e.style.pointerEvents=""},1500)}}function he(){if(typeof o.redirectPage!="function")return;const e=document.getElementById("reset"),t=["copyRedirect","createRedirect"],a=document.createElement("p");if(a.id="redirectNote",a.classList.add("has-text-centered"),a.innerText="Please create a redirect for your page!",!o.redirectPage()){t.forEach(()=>{const u=e.previousElementSibling;t.includes(u.id)&&u.remove()}),document.getElementById(a.id)?.remove();return}const l=document.createElement("button");l.innerText="Copy Redirect Code",l.type="button";const n=document.createElement("a");n.rel="noopener noreferrer",n.target="_blank",n.innerText="Create Redirect",I([{element:l,handler:"click",func:function(){b(this,`#REDIRECT [[${r.name}]]`)}},{element:n,handler:"click",func:function(){P(this,o.redirectPage())}}]);const c=[l,n];for(let u=0;u<c.length;u++){const d=c[u],T=t[u];if(document.getElementById(T))return;d.classList.add("button","is-outlined","is-primary"),d.id=T,d.dataset.link="redirect",e.insertAdjacentElement("beforebegin",d)}e.parentElement.insertAdjacentElement("beforebegin",a)}const ge=`
<button class="button is-outlined is-primary" id="copy" type="button" data-link="page" data-evt-id="copyButton">Copy Wikicode</button>
<a class="button is-outlined is-primary" id="download" data-evt-id="downloadButton">Download File</a>
<a class="button is-outlined is-primary" href="https://nomanssky.fandom.com/wiki/Special:Upload?multiple=true" id="uploadLink" rel="noopener noreferrer" target="_blank">Upload Pictures</a>
<a class="button is-outlined is-primary" id="create" data-link="page" data-evt-id="createPageButton">Create Page</a>
<button class="button is-warning" id="reset" type="reset" data-evt-id="resetButton">Reset Inputs</button>`,xe=[{element:"copyButton",handler:"click",func:function(){b(this,"fullArticle")}},{element:"downloadButton",handler:"click",func:function(){ye(this)}},{element:"createPageButton",handler:"click",func:function(){P(this)}},{element:"resetButton",handler:"click",func:()=>be()}],ke=h(ge,{},xe),ve=`<p class="has-text-centered">You must copy the code first, then paste it into the wiki page.<br>Also don't forget to upload any images you have put here.</p>`,x=i.output.actions;x.innerHTML="",B(ke,x,"afterbegin"),x.insertAdjacentHTML("beforebegin",ve);const Te=`
<label style="display:flex; gap: .3rem"><input class="checkbox" type="checkbox" id="skipCheck" data-evt-id="skipCheck">Enable debug (no checks, no popups)</label>;
<button style="margin: 0 1rem" class="button is-danger is-small" id="clearCache" data-evt-id="clearCache">Clear Localstorage</button>`,Ee=[{element:"clearCache",handler:"click",func:()=>localStorage.clear()},{element:"skipCheck",handler:"change",func:function(){const e=this.checked;s.debug=e,s.uploadShown=e,s.galleryUploadShown=e,document.documentElement.dataset.debug=e.toString(),m()}}];i.output.actions,h(Te,{},Ee),Object.defineProperty(s,"debug",{configurable:!1,writable:!1,value:!1});const k=document.getElementById("skipCheck");k&&new URLSearchParams(window.location.search).has("debug")&&(k.checked=!0,D(k,"change"));const Ie=`<h2 class="title is-5 has-text-left has-text-weight-bold mb-2">
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
`,we=`<button id="albumBtn" class="button is-outlined is-primary"
	   data-link="album" data-evt-id="copyButton">
	   Copy Category Wikicode
	   </button>
	   <a class="button is-outlined is-primary" id="albumLink"
	   data-link="album" data-evt-id="openAlbumButton">
	   Open Category
	   </a>`,Le=[{element:"copyButton",handler:"click",func:function(){b(this,"albumText")}},{element:"openAlbumButton",handler:"click",func:function(){R(this)}}],O=h(we,{},Le);function R(e){e.style.pointerEvents="none";const t=(()=>{if(typeof o.albumLinkGen=="function")return o.albumLinkGen();if(r.catalogue)return r.catalogue;console.warn("No wiki page provided. Define the function `albumLinkGen()` and add it to the `globalFunctions` object or define a catalogue in the `pageData.catalogue` property!"),e.style.pointerEvents=""})();t&&U(e,L+t)}function M(){const e=typeof o.albumItemTypeExternal=="function"?o.albumItemTypeExternal():r.type;i.output.album.innerText=e}function j(){const e=typeof o.albumDescExternal=="function"?o.albumDescExternal():"",t=i.output.albumDesc;t&&(t.innerText=e)}function G(){const e=(()=>{if(typeof o.albumDiscovererExternal=="function")return o.albumDiscovererExternal();{const{discovered:a,discoveredlink:l}=r;return l?`wiki=${l}`:`discoverer=${a}`}})(),t=i.output.albumDiscoverer;t&&(t.innerText=e)}function F(){const e=typeof o.albumNameExternal=="function"?o.albumNameExternal():r.name;i.output.albumName.innerText=e}function q(){const e=typeof o.albumOtherExternal=="function"?o.albumOtherExternal():"",t=i.output.albumOther;t&&(t.innerText=e)}function Ae(){const e=typeof o.albumTypeExternal=="function"?o.albumTypeExternal():"";i.output.albumType.innerText=e}function Ce(){const e={albumHeaderName:"name",albumImage:"image",albumGlyphs:"portalglyphs"};for(const t in e){const a=i.output[t];a.innerText=r[e[t]]}}function Se(){r.albumInitialised?e():document.addEventListener("albumLoaded",()=>e());function e(){Ce(),G(),F(),q(),Ae(),M(),j()}}const Be={output:{album:"album",albumType:"albumType",albumHeaderName:"albumHeaderName",albumImage:"albumImage",albumName:"albumName",albumOther:"albumOther",albumGlyphs:"albumGlyphs",albumDiscoverer:"albumDiscoverer",albumText:"albumText",albumDesc:"albumDesc"}},W=i.output.albumEntry,v=i.output.albumActions;W instanceof HTMLDivElement&&(W.innerHTML=Ie),v instanceof HTMLDivElement&&(B(O,v,"afterbegin"),y(Be),document.dispatchEvent(new Event("albumLoaded")),g("albumInitialised",!0),v.insertAdjacentHTML("afterbegin",`<p style="width:100%" class="has-text-centered mb-3">Please don't forget to create a category entry!</p>`)),le(i.output.portalglyphButtons,"portalglyphsInput");const De=re();g("pageType",De),se(),C(),ue(),s.uploadShown=!0,s.galleryUploadShown=!0,S(),s.debug||(s.uploadShown=!1,s.galleryUploadShown=!1),m();const _=i.output.output;_.onmousedown=()=>ce();for(const e of Array.from(_.children)){const t=e;t.onmouseup=a=>N(a.target),t.ontouchend=a=>N(a.target)}de();try{D(i.input.portalglyphsInput,"input")}catch{}g("eventListeners",!0);export{q as a,G as b,F as c,Se as d,b as e,R as f,O as g,j as h,M as i,he as t};
