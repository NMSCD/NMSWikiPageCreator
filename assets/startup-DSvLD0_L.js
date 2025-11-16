"use strict";import{t as E}from"./minimal-DFXDy0i6.js";import{At as I,Ct as $,D as J,Et as p,F as Y,J as Q,L as y,M as w,Mt as r,Nt as u,O as z,Ot as l,Pt as L,Q as A,St as K,Tt as V,U as X,Y as Z,_t as ee,b as te,bt as ne,c as h,f as C,g as m,gt as ae,i as oe,k as S,kt as o,n as le,nt as B,o as D,r as ie,rt as re,t as ue,tt as se,u as ce,vt as N,wt as g,xt as de,y as f}from"./portalglyphs-GMhkLqu8.js";K(),$(),g(V),N([{element:"nameInput",func:function(){f()}},{element:"researchTeam",func:function(){Q(),m()}},{element:"fileUpload",handler:"change",func:function(){Y(this)}},{element:"portalglyphsInput",func:function(){oe(this),ie(),f()}},{element:"discoveredInput",func:function(){w("discoveredInput","discoveredlinkInput"),m()}},{element:"discoveredlinkInput",func:function(){w("discoveredlinkInput","discoveredInput"),m()}},{element:"docbyInput",func:function(){m()}},{element:"axesInput",handler:"change",func:function(){re()}},{element:"glyphDeleteButton",handler:"click",func:function(){le()}},{element:"fileUploadTooltip",handler:"click",func:function(){u.uploadShown=!0}},{element:"galleryFileUploadTooltip",handler:"click",func:function(){u.galleryUploadShown=!0}}]),ae();var pe={output:{explanationHeading:"explanationHeading",explanationContent:"explanationContent",explanationLink:"explanationLink",explanationWebpImg:"explanationWebpImg",explanationFallbackImg:"explanationFallbackImg"}},H=l.output.explanation;H&&(H.innerHTML=ee),g(pe);for(let e of["builderInput","builderlinkInput","discoveredInput","discoveredlinkInput"]){let t=l.input[e];t&&(t.dataset.player="")}se();function me(){let e=document.querySelectorAll(".table .data input, .table .data textarea"),t=document.querySelectorAll(".table .data select"),a=document.getElementsByTagName("output");for(let n of Array.from(e))switch(n.type.toLowerCase()){case"checkbox":n.checked=!1;break;case"radio":let d=document.querySelectorAll('input[type="radio"]:not([checked])'),s=document.querySelectorAll('input[type="radio"][checked]');for(let c of Array.from(d))c.checked=!1;for(let c of Array.from(s))c.checked=!0;break;default:n.value=""}for(let n of Array.from(t))n.value=n.options?.[0]?.value;for(let n of Array.from(a))n.innerText="";for(let n in Z(),r)delete r[n];let i=document.querySelectorAll(".error");for(let n of Array.from(i))te(n.previousElementSibling);for(let n in I)delete I[n];typeof o.resetExternal=="function"&&o.resetExternal(),E(),A()}function b(e,t){e.style.pointerEvents="none";let{innerText:a,dataset:{link:i}}=e;p.text=de(JSON.stringify(r)),p.copy=!0,p.link=i;let n=C(e);if(n){e.classList.remove("is-primary"),e.classList.add("is-danger"),e.innerText=n,setTimeout(()=>{e.classList.remove("is-danger"),e.classList.add("is-primary"),e.innerText=a,e.style.pointerEvents=""},1500);return}let d=l?.output?.[t]?.innerText?.replaceAll(`


`,`

`)??t;navigator.clipboard.writeText(d),p.copy=!0,p.link=i,e.innerText="Copied!",setTimeout(()=>{e.innerText=a,e.style.pointerEvents=""},1500)}function fe(e){let t=l.output.fullArticle.innerText.replaceAll(`


`,`

`),a=r.name,i=e;i.href="data:text/plain,"+encodeURIComponent(t),i.download=a+".txt"}function P(e,t=r.name){e.style.pointerEvents="none",O(e,L+"Special:EditPage/"+t)}function O(e,t){let a=C(e),i=RegExp(`[${["#","<",">","[","]","{","|","}"].join("")}]`,"g");if(!a)e.href=t.replace(i," "),e.target="_blank",e.rel="noopener noreferrer",e.style.pointerEvents="";else{let n=e.innerText;e.removeAttribute("href"),e.className="button is-danger",e.innerText=a,setTimeout(()=>{e.className="button is-outlined is-primary",e.innerText=n,e.style.pointerEvents=""},1500)}}function be(){if(typeof o.redirectPage!="function")return;let e=document.getElementById("reset"),t=["copyRedirect","createRedirect"],a=document.createElement("p");if(a.id="redirectNote",a.classList.add("has-text-centered"),a.innerText="Please create a redirect for your page!",!o.redirectPage()){t.forEach(()=>{let s=e.previousElementSibling;t.includes(s.id)&&s.remove()}),document.getElementById(a.id)?.remove();return}let i=document.createElement("button");i.innerText="Copy Redirect Code",i.type="button";let n=document.createElement("a");n.rel="noopener noreferrer",n.target="_blank",n.innerText="Create Redirect",N([{element:i,handler:"click",func:function(){b(this,`#REDIRECT [[${r.name}]]`)}},{element:n,handler:"click",func:function(){P(this,o.redirectPage())}}]);let d=[i,n];for(let s=0;s<d.length;s++){let c=d[s],T=t[s];if(document.getElementById(T))return;c.classList.add("button","is-outlined","is-primary"),c.id=T,c.dataset.link="redirect",e.insertAdjacentElement("beforebegin",c)}e.parentElement.insertAdjacentElement("beforebegin",a)}var ye=y(`
<button class="button is-outlined is-primary" id="copy" type="button" data-link="page" data-evt-id="copyButton">Copy Wikicode</button>
<a class="button is-outlined is-primary" id="download" data-evt-id="downloadButton">Download File</a>
<a class="button is-outlined is-primary" href="https://nomanssky.fandom.com/wiki/Special:Upload?multiple=true" id="uploadLink" rel="noopener noreferrer" target="_blank">Upload Pictures</a>
<a class="button is-outlined is-primary" id="create" data-link="page" data-evt-id="createPageButton">Create Page</a>
<button class="button is-warning" id="reset" type="reset" data-evt-id="resetButton">Reset Inputs</button>`,{},[{element:"copyButton",handler:"click",func:function(){b(this,"fullArticle")}},{element:"downloadButton",handler:"click",func:function(){fe(this)}},{element:"createPageButton",handler:"click",func:function(){P(this)}},{element:"resetButton",handler:"click",func:()=>me()}]),he=`<p class="has-text-centered">You must copy the code first, then paste it into the wiki page.<br>Also don't forget to upload any images you have put here.</p>`,k=l.output.actions;k.innerHTML="",D(ye,k,"afterbegin"),k.insertAdjacentHTML("beforebegin",he),l.output.actions,y(`
<label style="display:flex; gap: .3rem"><input class="checkbox" type="checkbox" id="skipCheck" data-evt-id="skipCheck">Enable debug (no checks, no popups)</label>;
<button style="margin: 0 1rem" class="button is-danger is-small" id="clearCache" data-evt-id="clearCache">Clear Localstorage</button>`,{},[{element:"clearCache",handler:"click",func:()=>localStorage.clear()},{element:"skipCheck",handler:"change",func:function(){let e=this.checked;u.debug=e,u.uploadShown=e,u.galleryUploadShown=e,document.documentElement.dataset.debug=e.toString(),f()}}]),Object.defineProperty(u,"debug",{configurable:!1,writable:!1,value:!1});var x=document.getElementById("skipCheck");x&&new URLSearchParams(window.location.search).has("debug")&&(x.checked=!0,B(x,"change"));var ge=`<h2 class="title is-5 has-text-left has-text-weight-bold mb-2">
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
`;const U=y(`<button id="albumBtn" class="button is-outlined is-primary"
	   data-link="album" data-evt-id="copyButton">
	   Copy Category Wikicode
	   </button>
	   <a class="button is-outlined is-primary" id="albumLink"
	   data-link="album" data-evt-id="openAlbumButton">
	   Open Category
	   </a>`,{},[{element:"copyButton",handler:"click",func:function(){b(this,"albumText")}},{element:"openAlbumButton",handler:"click",func:function(){R(this)}}]);function R(e){e.style.pointerEvents="none";let t=(()=>{if(typeof o.albumLinkGen=="function")return o.albumLinkGen();if(r.catalogue)return r.catalogue;console.warn("No wiki page provided. Define the function `albumLinkGen()` and add it to the `globalFunctions` object or define a catalogue in the `pageData.catalogue` property!"),e.style.pointerEvents=""})();t&&O(e,L+t)}function M(){let e=typeof o.albumItemTypeExternal=="function"?o.albumItemTypeExternal():r.type;l.output.album.innerText=e}function j(){let e=typeof o.albumDescExternal=="function"?o.albumDescExternal():"",t=l.output.albumDesc;t&&(t.innerText=e)}function F(){let e=(()=>{if(typeof o.albumDiscovererExternal=="function")return o.albumDiscovererExternal();{let{discovered:a,discoveredlink:i}=r;return i?`wiki=${i}`:`discoverer=${a}`}})(),t=l.output.albumDiscoverer;t&&(t.innerText=e)}function G(){let e=typeof o.albumNameExternal=="function"?o.albumNameExternal():r.name;l.output.albumName.innerText=e}function q(){let e=typeof o.albumOtherExternal=="function"?o.albumOtherExternal():"",t=l.output.albumOther;t&&(t.innerText=e)}function ke(){let e=typeof o.albumTypeExternal=="function"?o.albumTypeExternal():"";l.output.albumType.innerText=e}function xe(){let e={albumHeaderName:"name",albumImage:"image",albumGlyphs:"portalglyphs"};for(let t in e){let a=l.output[t];a.innerText=r[e[t]]}}function ve(){r.albumInitialised?e():document.addEventListener("albumLoaded",()=>e());function e(){xe(),F(),G(),q(),ke(),M(),j()}}var Te={output:{album:"album",albumType:"albumType",albumHeaderName:"albumHeaderName",albumImage:"albumImage",albumName:"albumName",albumOther:"albumOther",albumGlyphs:"albumGlyphs",albumDiscoverer:"albumDiscoverer",albumText:"albumText",albumDesc:"albumDesc"}},W=l.output.albumEntry,v=l.output.albumActions;W instanceof HTMLDivElement&&(W.innerHTML=ge),v instanceof HTMLDivElement&&(D(U,v,"afterbegin"),g(Te),document.dispatchEvent(new Event("albumLoaded")),h("albumInitialised",!0),v.insertAdjacentHTML("afterbegin",`<p style="width:100%" class="has-text-centered mb-3">Please don't forget to create a category entry!</p>`)),ue(l.output.portalglyphButtons,"portalglyphsInput"),h("pageType",J()),ce(),E(),z(),u.uploadShown=!0,u.galleryUploadShown=!0,A(),u.debug||(u.uploadShown=!1,u.galleryUploadShown=!1),f();var _=l.output.output;_.onmousedown=()=>X();for(let e of Array.from(_.children)){let t=e;t.onmouseup=a=>S(a.target),t.ontouchend=a=>S(a.target)}ne();try{B(l.input.portalglyphsInput,"input")}catch{}h("eventListeners",!0);export{M as a,q as c,ve as i,b as l,j as n,R as o,F as r,G as s,U as t,be as u};
