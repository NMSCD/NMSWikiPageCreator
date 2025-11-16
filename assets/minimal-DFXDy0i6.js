"use strict";import{Dt as r,H as S,M as s,Mt as n,Ot as d,X as I,i as x,n as k,nt as u,t as w,vt as P,wt as B,x as M,yt as N}from"./portalglyphs-GMhkLqu8.js";(function(){let e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(let t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(let o of t)if(o.type==="childList")for(let i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(t){let o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;let o=l(t);fetch(t.href,o)}})();var p=localStorage.getItem("theme"),c=p??"light";!p&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(c="dark"),c==="dark"&&(document.documentElement.dataset.theme="dark"),p||localStorage.setItem("theme",c);var f=new DOMParser().parseFromString(`<button class="button" id="switchTheme">Switch light/dark mode</button>
<div class="footerLinks">
  <button type="button" id="openSettingsBtn">Global Defaults</button>
  <a href="./about.html" id="about">About</a>
  <a href="https://forms.gle/LRhzWjMRkXoKd9CcA" rel="noreferrer noopener" target="_blank">Feedback Form</a>
  </div>
  <div class="banner">
  </br>
  <a href="https://nmscd.com/">
    <img src="" style="width: 300px; height: 100px;" alt="NMSCD" />
</a>
  </div>

<dialog id="settings" class="modal-content content">
  <h2 class="title is-4">Global Preload Values</h2>
   <!-- //NOSONAR
		(this is fine since this snippet is inserted somewhere else)-->
  <div class="table">
    <div class="table-cell text">
      <label for="discoveredlinkDefault">Discoverer wiki name:</label>
    </div>
    <div class="table-cell data">
      <input id="discoveredlinkDefault" type="text" data-store="discoveredlinkInput builderlinkInput" data-player>
    </div>
    <div class="table-cell text">
      <label for="discoveredDefault">Discoverer alias if no wiki:</label>
    </div>
    <div class="table-cell data">
      <input id="discoveredDefault" type="text" data-store="discoveredInput builderInput" data-player>
    </div>
    <div class="table-cell text">
      <label for="docbyDefault">Documenter alias if not discoverer:</label>
    </div>
    <div class="table-cell data">
      <input id="docbyDefault" type="text" data-store="docbyInput">
    </div>
    <div class="table-cell text">
      <label for="hubnameDefault">Name of your Hub:</label>
    </div>
    <div class="table-cell data">
      <input id="hubnameDefault" type="text" data-store="hubnameInput">
    </div>
    <div class="table-cell text">
      <label for="galaxyDefault">Name of the galaxy:</label>
    </div>
    <div class="table-cell data">
      <input id="galaxyDefault" type="text" data-store="galaxyInput">
    </div>
    <div class="table-cell text">
      <label for="systemDefault">Name of the system:</label>
    </div>
    <div class="table-cell data">
      <input id="systemDefault" type="text" data-store="systemInput">
    </div>
    <div class="table-cell text">
      <label for="regionDefault">Name of the region where the system is located:</label>
    </div>
    <div class="table-cell data">
      <input id="regionDefault" type="text" data-store="regionInput">
    </div>
    <div class="table-cell text">
      <label for="planetDefault">Name of the planet:</label>
    </div>
    <div class="table-cell data">
      <input id="planetDefault" type="text" data-store="planetInput">
    </div>
    <div class="table-cell text">
      <label for="moonDefault">Name of the moon:</label>
    </div>
    <div class="table-cell data">
      <input id="moonDefault" type="text" data-store="moonInput">
    </div>
    <div class="table-cell text">
      <label>Platform:</label>
    </div>
    <div class="table-cell data">
      <select id="platformDefault" data-store="platformInput">
        <option value="">I don't know</option>
        <option value="PC">PC</option>
        <option value="PS">PlayStation</option>
        <option value="XB">Xbox</option>
        <option value="NS">Switch</option>
      </select>
    </div>
    <div class="table-cell text">
      <label>Researchteam you belong to:</label>
    </div>
    <div class="table-cell data">
      <input type="text" id="researchteamDefault" data-store="researchteamInput"></input>
    </div>
    <div class="table-cell text">
      <div class="label-combo">
        <label for="portalglyphsDefault">Portalglyphs:</label>
        <button class="button is-small is-danger" type="button" id="glyphDeleteDefault"
          data-input-bind="portalglyphsDefault">&larr; Delete</button>
      </div>
    </div>
    <div class="table-cell data">
      <input type="text" id="portalglyphsDefault" maxlength="12" data-store="portalglyphsInput">
    </div>
    <div class="tableHeader data">
      <div id="settingsPortalglyphButtons" class="portalglyphButtons"></div>
      <output id="settingsPortalglyphsPreview" class="glyph portalglyphsPreview"></output>
    </div>
    <div class="table-cell text">
      <label>System wealth:</label>
    </div>
    <div class="table-cell data">
      <select id="wealthDefault" data-store="wealthInput">
        <optgroup label="T3">
          <option value="\u2605\u2605\u2605 (Advanced)">Advanced</option>
          <option value="\u2605\u2605\u2605 (Affluent)">Affluent</option>
          <option value="\u2605\u2605\u2605 (Booming)">Booming</option>
          <option value="\u2605\u2605\u2605 (Flourishing)">Flourishing</option>
          <option value="\u2605\u2605\u2605 (High Supply)">High Supply</option>
          <option value="\u2605\u2605\u2605 (Opulent)">Opulent</option>
          <option value="\u2605\u2605\u2605 (Prosperous)">Prosperous</option>
          <option value="\u2605\u2605\u2605 (Wealthy)">Wealthy</option>
        </optgroup><!-- here ends T3-->
        <optgroup label="T2">
          <!--here begins T2-->
          <option value="\u2605\u2605 (Adequate)">Adequate</option>
          <option value="\u2605\u2605 (Balanced)">Balanced</option>
          <option value="\u2605\u2605 (Comfortable)">Comfortable</option>
          <option value="\u2605\u2605 (Developing)">Developing</option>
          <option value="\u2605\u2605 (Medium Supply)">Medium Supply</option>
          <option value="\u2605\u2605 (Promising)">Promising</option>
          <option value="\u2605\u2605 (Satisfactory)">Satisfactory</option>
          <option value="\u2605\u2605 (Sustainable)">Sustainable</option>
        </optgroup><!-- here ends T2-->
        <optgroup label="T1">
          <!--here begins T1-->
          <option value="\u2605 (Declining)">Declining</option>
          <option value="\u2605 (Destitute)">Destitute</option>
          <option value="\u2605 (Failing)">Failing</option>
          <option value="\u2605 (Fledgling)">Fledgling</option>
          <option value="\u2605 (Low Supply)">Low Supply</option>
          <option value="\u2605 (Struggling)">Struggling</option>
          <option value="\u2605 (Unsuccessful)">Unsuccessful</option>
          <option value="\u2605 (Unpromising)">Unpromising</option>
        </optgroup>
        <!--here ends T1-->
        <optgroup label="Pirate">
          <option value="\u{1F480} (Black Market)">Black Market</option>
        </optgroup>
        <optgroup label="Abandoned/Uncharted">
          <option value="">Data Unavailable</option>
        </optgroup>
      </select>
    </div>

  </div>
  <p>If you experience weird behaviour, restore the defaults and click "Set".</p>
  <br>
  <p>Also, we recommend that the users delete one letter of each category, example: Documenter/Researchteam, System/Region etc..</p>
  <form method="dialog">
    <button class="button is-primary" type="submit" id="submitDefault">Set</button>
    <button class="button is-danger" type="submit" autofocus>Cancel</button>
    <button class="button is-warning" type="reset" id="resetDefault">Restore Defaults</button>
  </form>
</dialog>
`,"text/html"),m=f.getElementById("about");m.href===window.location.toString()&&m?.remove();var v=f.body.innerHTML;d?.output?.footer instanceof HTMLElement?d.output.footer.innerHTML=v:document.getElementById("footer").innerHTML=v;var g=document.getElementById("settingsPortalglyphButtons");g&&w(g,"portalglyphsDefault");var b={input:{settings:"settings"}},h=document.querySelectorAll("footer dialog .data>*");r.push(...Array.from(h)),h.forEach(e=>{let l=e.id;b.input[l]=l;let a={element:l,func:function(){delete n.restored}};e.dataset.store&&N(a)}),B(b);var T={light:"assets/images/webp/shared/nmscdbanner.webp",dark:"assets/images/webp/shared/nmscdbannerwhite.webp"};function A(){let e=(localStorage.getItem("theme")??"light")==="light"?"dark":"light";localStorage.setItem("theme",e),document.documentElement.dataset.theme=e,y(e)}setTimeout(()=>{delete document.documentElement.dataset.transition},400);function y(e){let l=document.querySelector(".banner img");l?l.src=T[e]:console.log("Element .banner img not found")}document.addEventListener("DOMContentLoaded",()=>{let e=localStorage.getItem("theme")??"light";document.documentElement.dataset.theme=e,y(e)});function E(){D();let e=d.input.settings;e.style.scale="0",e.showModal(),e.style.scale="1",e.scrollTo(0,0);let l=JSON.parse(localStorage.getItem("defaultSettings")??"{}");for(let a in l){let t=e.querySelector(`.data [data-store="${a}"]`);t&&(t.value=l[a],t.id==="portalglyphsDefault"&&u(t,"input"))}s(),delete n.restored}function L(){if(n.restored){localStorage.removeItem("defaultSettings"),delete n.restored;return}let e={},l=Array.from(r);for(let a of l){let t=a?.value,o=a?.dataset?.store,i=a;(i?.options?.[i.options.length-1]?.value===t||t)&&o&&(e[o]=I(t))}localStorage.setItem("defaultSettings",JSON.stringify(e))}function O(){let e=JSON.parse(localStorage.getItem("defaultSettings")??"{}");for(let l in e){let a=l.split(" ").length>1?l.split(" ").map(t=>document.getElementById(t)).find(t=>t):document.getElementById(l);if(a)switch(a.value=e[l],l.split(" ")[0]){case"wealthInput":u(a,"change");break;case"portalglyphsInput":case"systemInput":case"discoveredlinkInput":case"discoveredInput":case"builderlinkInput":case"builderInput":u(a,"input");break}}}function D(){let e=Array.from(r);for(let l of e)l?.value&&(l.tagName.toLowerCase()==="select"?l.value=l.options?.[0]?.value:l.value="");s(),n.restored=!0}P([{element:"discoveredDefault",func:function(){s("discoveredDefault","discoveredlinkDefault")}},{element:"discoveredlinkDefault",func:function(){s("discoveredlinkDefault","discoveredDefault")}},{element:"portalglyphsDefault",func:function(){x(this)}},{element:"glyphDeleteDefault",handler:"click",func:function(){k(this)}},{element:"switchTheme",handler:"click",func:function(){A()}},{element:"openSettingsBtn",handler:"click",func:function(){E()}},{element:"submitDefault",handler:"click",func:function(){L()}},{element:"resetDefault",handler:"click",func:function(){D()}}]),M(),S();export{O as t};
