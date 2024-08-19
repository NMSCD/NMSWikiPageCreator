import{cJ as Kt,cK as W,Z as he,B as ge,cL as H,a as be,cM as _e,V as lt,ao as Se,bc as ve,at as Ce,ae as ut,k as j,cN as P,z as Ut,cO as Z,cP as ot,cQ as b,cR as X,cS as F,cT as B,v as ye,cU as it,F as ft,S as Ee,H as jt,b7 as Te,au as we,aY as Ae,X as Me,aO as _t,aL as St,cV as Pe,t as Ne,cW as Le,cX as xe,l as Re,cY as Gt,cZ as $e,c_ as Ve,i as Ie,aD as C,bb as Oe,av as K,r as Q,s as _,aG as tt,p as De,ah as vt,q as Ct,T as Be}from"./links-3Jmq-kHp.js";
/**
* @vue/runtime-dom v3.4.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const He="http://www.w3.org/2000/svg",Fe="http://www.w3.org/1998/Math/MathML",E=typeof document<"u"?document:null,yt=E&&E.createElement("template"),ke={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o="svg"===t?E.createElementNS(He,e):"mathml"===t?E.createElementNS(Fe,e):n?E.createElement(e,{is:n}):E.createElement(e);return"select"===e&&s&&null!=s.multiple&&o.setAttribute("multiple",s.multiple),o},createText:e=>E.createTextNode(e),createComment:e=>E.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>E.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,r){const a=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),o!==r&&(o=o.nextSibling););else{yt.innerHTML="svg"===s?`<svg>${e}</svg>`:"mathml"===s?`<math>${e}</math>`:e;const o=yt.content;if("svg"===s||"mathml"===s){const e=o.firstChild;for(;e.firstChild;)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},A="transition",I="animation",$=Symbol("_vtc"),Wt=(e,{slots:t})=>he(ge,zt(e),t);Wt.displayName="Transition";const qt={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ke=Wt.props=H({},be,qt),x=(e,t=[])=>{b(e)?e.forEach((e=>e(...t))):e&&e(...t)},Et=e=>!!e&&(b(e)?e.some((e=>e.length>1)):e.length>1);function zt(e){const t={};for(const n in e)n in qt||(t[n]=e[n]);if(!1===e.css)return t;const{name:n="v",type:s,duration:o,enterFromClass:r=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:i=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=a,appearToClass:u=i,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=e,h=Ue(o),m=h&&h[0],v=h&&h[1],{onBeforeEnter:g,onEnter:b,onEnterCancelled:_,onLeave:C,onLeaveCancelled:S,onBeforeAppear:E=g,onAppear:A=b,onAppearCancelled:w=_}=t,T=(e,t,n)=>{M(e,t?u:i),M(e,t?c:a),n&&n()},k=(e,t)=>{e._isLeaving=!1,M(e,p),M(e,f),M(e,d),t&&t()},P=e=>(t,n)=>{const o=e?A:b,a=()=>T(t,e,n);x(o,[t,a]),Tt((()=>{M(t,e?l:r),y(t,e?u:i),Et(o)||wt(t,s,m,a)}))};return H(t,{onBeforeEnter(e){x(g,[e]),y(e,r),y(e,a)},onBeforeAppear(e){x(E,[e]),y(e,l),y(e,c)},onEnter:P(!1),onAppear:P(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>k(e,t);y(e,p),y(e,d),Yt(),Tt((()=>{e._isLeaving&&(M(e,p),y(e,f),Et(C)||wt(e,s,v,n))})),x(C,[e,n])},onEnterCancelled(e){T(e,!1),x(_,[e])},onAppearCancelled(e){T(e,!0),x(w,[e])},onLeaveCancelled(e){k(e),x(S,[e])}})}function Ue(e){if(null==e)return null;if(_e(e))return[et(e.enter),et(e.leave)];{const t=et(e);return[t,t]}}function et(e){return it(e)}function y(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[$]||(e[$]=new Set)).add(t)}function M(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const n=e[$];n&&(n.delete(t),n.size||(e[$]=void 0))}function Tt(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let je=0;function wt(e,t,n,s){const o=e._endId=++je,r=()=>{o===e._endId&&s()};if(n)return setTimeout(r,n);const{type:a,timeout:i,propCount:l}=Xt(e,t);if(!a)return s();const c=a+"end";let u=0;const p=()=>{e.removeEventListener(c,d),r()},d=t=>{t.target===e&&++u>=l&&p()};setTimeout((()=>{u<l&&p()}),i+1),e.addEventListener(c,d)}function Xt(e,t){const n=window.getComputedStyle(e),s=e=>(n[e]||"").split(", "),o=s(`${A}Delay`),r=s(`${A}Duration`),a=At(o,r),i=s(`${I}Delay`),l=s(`${I}Duration`),c=At(i,l);let u=null,p=0,d=0;t===A?a>0&&(u=A,p=a,d=r.length):t===I?c>0&&(u=I,p=c,d=l.length):(p=Math.max(a,c),u=p>0?a>c?A:I:null,d=u?u===A?r.length:l.length:0);return{type:u,timeout:p,propCount:d,hasTransform:u===A&&/\b(transform|all)(,|$)/.test(s(`${A}Property`).toString())}}function At(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Mt(t)+Mt(e[n]))))}function Mt(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function Yt(){return document.body.offsetHeight}function Ge(e,t,n){const s=e[$];s&&(t=(t?[t,...s]:[...s]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const q=Symbol("_vod"),Jt=Symbol("_vsh"),We={beforeMount(e,{value:t},{transition:n}){e[q]="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):O(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:s}){!t!=!n&&(s?t?(s.beforeEnter(e),O(e,!0),s.enter(e)):s.leave(e,(()=>{O(e,!1)})):O(e,t))},beforeUnmount(e,{value:t}){O(e,t)}};function O(e,t){e.style.display=t?e[q]:"none",e[Jt]=!t}function qe(){We.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const Zt=Symbol("");function Vn(e){const t=lt();if(!t)return;const n=t.ut=(n=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>at(e,n)))},s=()=>{const s=e(t.proxy);rt(t.subTree,s),n(s)};Se((()=>{ve(s);const e=new MutationObserver(s);e.observe(t.subTree.el.parentNode,{childList:!0}),Ce((()=>e.disconnect()))}))}function rt(e,t){if(128&e.shapeFlag){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push((()=>{rt(n.activeBranch,t)}))}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el)at(e.el,t);else if(e.type===ft)e.children.forEach((e=>rt(e,t)));else if(e.type===Ee){let{el:n,anchor:s}=e;for(;n&&(at(n,t),n!==s);)n=n.nextSibling}}function at(e,t){if(1===e.nodeType){const n=e.style;let s="";for(const e in t)n.setProperty(`--${e}`,t[e]),s+=`--${e}: ${t[e]};`;n[Zt]=s}}const ze=/(^|;)\s*display\s*:/;function Xe(e,t,n){const s=e.style,o=W(n);let r=!1;if(n&&!o){if(t)if(W(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==n[t]&&G(s,t,"")}else for(const e in t)null==n[e]&&G(s,e,"");for(const e in n)"display"===e&&(r=!0),G(s,e,n[e])}else if(o){if(t!==n){const e=s[Zt];e&&(n+=";"+e),s.cssText=n,r=ze.test(n)}}else t&&e.removeAttribute("style");q in e&&(e[q]=r?s.display:"",e[Jt]&&(s.display="none"))}const Pt=/\s*!important$/;function G(e,t,n){if(b(n))n.forEach((n=>G(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=Ye(e,t);Pt.test(n)?e.setProperty(P(s),n.replace(Pt,""),"important"):e[s]=n}}const Nt=["Webkit","Moz","ms"],nt={};function Ye(e,t){const n=nt[t];if(n)return n;let s=j(t);if("filter"!==s&&s in e)return nt[t]=s;s=Re(s);for(let n=0;n<Nt.length;n++){const o=Nt[n]+s;if(o in e)return nt[t]=o}return t}const Lt="http://www.w3.org/1999/xlink";function xt(e,t,n,s,o,r=Ve(t)){s&&t.startsWith("xlink:")?null==n?e.removeAttributeNS(Lt,t.slice(6,t.length)):e.setAttributeNS(Lt,t,n):null==n||r&&!Gt(n)?e.removeAttribute(t):e.setAttribute(t,r?"":$e(n)?String(n):n)}function Je(e,t,n,s){if("innerHTML"===t||"textContent"===t){if(null==n)return;return void(e[t]=n)}const o=e.tagName;if("value"===t&&"PROGRESS"!==o&&!o.includes("-")){const s="OPTION"===o?e.getAttribute("value")||"":e.value,r=null==n?"":String(n);return(s!==r||!("_value"in e))&&(e.value=r),null==n&&e.removeAttribute(t),void(e._value=n)}let r=!1;if(""===n||null==n){const s=typeof e[t];"boolean"===s?n=Gt(n):null==n&&"string"===s?(n="",r=!0):"number"===s&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(t)}function T(e,t,n,s){e.addEventListener(t,n,s)}function Ze(e,t,n,s){e.removeEventListener(t,n,s)}const Rt=Symbol("_vei");function Qe(e,t,n,s,o=null){const r=e[Rt]||(e[Rt]={}),a=r[t];if(s&&a)a.value=s;else{const[n,i]=tn(t);if(s){T(e,n,r[t]=sn(s,o),i)}else a&&(Ze(e,n,a,i),r[t]=void 0)}}const $t=/(?:Once|Passive|Capture)$/;function tn(e){let t;if($t.test(e)){let n;for(t={};n=e.match($t);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[":"===e[2]?e.slice(3):P(e.slice(2)),t]}let st=0;const en=Promise.resolve(),nn=()=>st||(en.then((()=>st=0)),st=Date.now());function sn(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();Ie(on(e,n.value),t,5,[e])};return n.value=e,n.attached=nn(),n}function on(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const Vt=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,rn=(e,t,n,s,o,r)=>{const a="svg"===o;"class"===t?Ge(e,s,a):"style"===t?Xe(e,n,s):Le(t)?xe(t)||Qe(e,t,n,s,r):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):an(e,t,s,a))?(Je(e,t,s),!e.tagName.includes("-")&&("value"===t||"checked"===t||"selected"===t)&&xt(e,t,s,a,r,"value"!==t)):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),xt(e,t,s,a))};function an(e,t,n,s){if(s)return!!("innerHTML"===t||"textContent"===t||t in e&&Vt(t)&&Kt(n));if("spellcheck"===t||"draggable"===t||"translate"===t||"form"===t||"list"===t&&"INPUT"===e.tagName||"type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!Vt(t)||!W(n))&&t in e}/*! #__NO_SIDE_EFFECTS__ */function cn(e,t,n){const s=jt(e,t);class o extends pt{constructor(e){super(s,e,n)}}return o.def=s,o}/*! #__NO_SIDE_EFFECTS__ */const In=(e,t)=>cn(e,t,yn),ln=typeof HTMLElement<"u"?HTMLElement:class{};class pt extends ln{constructor(e,t={},n){super(),this._def=e,this._props=t,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&n?n(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,ut((()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),Ft(null,this.shadowRoot),this._instance=null)}))}_resolveDef(){this._resolved=!0;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})),this._ob.observe(this,{attributes:!0});const e=(e,t=!1)=>{const{props:n,styles:s}=e;let o;if(n&&!b(n))for(const e in n){const t=n[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=it(this._props[e])),(o||(o=Object.create(null)))[j(e)]=!0)}this._numberProps=o,t&&this._resolveProps(e),this._applyStyles(s),this._update()},t=this._def.__asyncLoader;t?t().then((t=>e(t,!0))):e(this._def)}_resolveProps(e){const{props:t}=e,n=b(t)?t:Object.keys(t||{});for(const e of Object.keys(this))"_"!==e[0]&&n.includes(e)&&this._setProp(e,this[e],!0,!1);for(const e of n.map(j))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t)}})}_setAttr(e){let t=this.hasAttribute(e)?this.getAttribute(e):void 0;const n=j(e);this._numberProps&&this._numberProps[n]&&(t=it(t)),this._setProp(n,t,!1)}_getProp(e){return this._props[e]}_setProp(e,t,n=!0,s=!0){t!==this._props[e]&&(this._props[e]=t,s&&this._instance&&this._update(),n&&(!0===t?this.setAttribute(P(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(P(e),t+""):t||this.removeAttribute(P(e))))}_update(){Ft(this._createVNode(),this.shadowRoot)}_createVNode(){const e=Ut(this._def,H({},this._props));return this._instance||(e.ce=e=>{this._instance=e,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,{detail:t}))};e.emit=(e,...n)=>{t(e,n),P(e)!==e&&t(P(e),n)};let n=this;for(;n=n&&(n.parentNode||n.host);)if(n instanceof pt){e.parent=n._instance,e.provides=n._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach((e=>{const t=document.createElement("style");t.textContent=e,this.shadowRoot.appendChild(t)}))}}function On(e="$style"){{const t=lt();if(!t)return Z;const n=t.type.__cssModules;if(!n)return Z;return n[e]||Z}}const Qt=new WeakMap,te=new WeakMap,z=Symbol("_moveCb"),It=Symbol("_enterCb"),ee={name:"TransitionGroup",props:H({},Ke,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=lt(),s=Te();let o,r;return we((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!mn(o[0].el,n.vnode.el,t))return;o.forEach(fn),o.forEach(pn);const s=o.filter(dn);Yt(),s.forEach((e=>{const n=e.el,s=n.style;y(n,t),s.transform=s.webkitTransform=s.transitionDuration="";const o=n[z]=e=>{e&&e.target!==n||(!e||/transform$/.test(e.propertyName))&&(n.removeEventListener("transitionend",o),n[z]=null,M(n,t))};n.addEventListener("transitionend",o)}))})),()=>{const a=Ae(e),i=zt(a);let l=a.tag||ft;if(o=[],r)for(let e=0;e<r.length;e++){const t=r[e];t.el&&t.el instanceof Element&&(o.push(t),_t(t,St(t,i,s,n)),Qt.set(t,t.el.getBoundingClientRect()))}r=t.default?Me(t.default()):[];for(let e=0;e<r.length;e++){const t=r[e];null!=t.key&&_t(t,St(t,i,s,n))}return Ut(l,null,r)}}},un=e=>delete e.mode,Dn=ee;function fn(e){const t=e.el;t[z]&&t[z](),t[It]&&t[It]()}function pn(e){te.set(e,e.el.getBoundingClientRect())}function dn(e){const t=Qt.get(e),n=te.get(e),s=t.left-n.left,o=t.top-n.top;if(s||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${s}px,${o}px)`,t.transitionDuration="0s",e}}function mn(e,t,n){const s=e.cloneNode(),o=e[$];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&s.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&s.classList.add(e))),s.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(s);const{hasTransform:a}=Xt(s);return r.removeChild(s),a}const N=e=>{const t=e.props["onUpdate:modelValue"]||!1;return b(t)?e=>Pe(t,e):t};function hn(e){e.target.composing=!0}function Ot(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const h=Symbol("_assign"),ct={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e[h]=N(o);const r=s||o.props&&"number"===o.props.type;T(e,t?"change":"input",(t=>{if(t.target.composing)return;let s=e.value;n&&(s=s.trim()),r&&(s=ot(s)),e[h](s)})),n&&T(e,"change",(()=>{e.value=e.value.trim()})),t||(T(e,"compositionstart",hn),T(e,"compositionend",Ot),T(e,"change",Ot))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:r}},a){if(e[h]=N(a),e.composing)return;const i=t??"";(!r&&"number"!==e.type||/^0\d/.test(e.value)?e.value:ot(e.value))!==i&&(document.activeElement===e&&"range"!==e.type&&(s&&t===n||o&&e.value.trim()===i)||(e.value=i))}},ne={deep:!0,created(e,t,n){e[h]=N(n),T(e,"change",(()=>{const t=e._modelValue,n=V(e),s=e.checked,o=e[h];if(b(t)){const e=X(t,n),r=-1!==e;if(s&&!r)o(t.concat(n));else if(!s&&r){const n=[...t];n.splice(e,1),o(n)}}else if(F(t)){const e=new Set(t);s?e.add(n):e.delete(n),o(e)}else o(oe(e,s))}))},mounted:Dt,beforeUpdate(e,t,n){e[h]=N(n),Dt(e,t,n)}};function Dt(e,{value:t,oldValue:n},s){e._modelValue=t,b(t)?e.checked=X(t,s.props.value)>-1:F(t)?e.checked=t.has(s.props.value):t!==n&&(e.checked=B(t,oe(e,!0)))}const se={created(e,{value:t},n){e.checked=B(t,n.props.value),e[h]=N(n),T(e,"change",(()=>{e[h](V(e))}))},beforeUpdate(e,{value:t,oldValue:n},s){e[h]=N(s),t!==n&&(e.checked=B(t,s.props.value))}},gn={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const o=F(t);T(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?ot(V(e)):V(e)));e[h](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,ut((()=>{e._assigning=!1}))})),e[h]=N(s)},mounted(e,{value:t,modifiers:{number:n}}){Bt(e,t)},beforeUpdate(e,t,n){e[h]=N(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||Bt(e,t)}};function Bt(e,t,n){const s=e.multiple,o=b(t);if(!s||o||F(t)){for(let n=0,r=e.options.length;n<r;n++){const r=e.options[n],a=V(r);if(s)if(o){const e=typeof a;r.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):X(t,a)>-1}else r.selected=t.has(a);else if(B(V(r),t))return void(e.selectedIndex!==n&&(e.selectedIndex=n))}!s&&-1!==e.selectedIndex&&(e.selectedIndex=-1)}}function V(e){return"_value"in e?e._value:e.value}function oe(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const bn={created(e,t,n){U(e,t,n,null,"created")},mounted(e,t,n){U(e,t,n,null,"mounted")},beforeUpdate(e,t,n,s){U(e,t,n,s,"beforeUpdate")},updated(e,t,n,s){U(e,t,n,s,"updated")}};function ie(e,t){switch(e){case"SELECT":return gn;case"TEXTAREA":return ct;default:switch(t){case"checkbox":return ne;case"radio":return se;default:return ct}}}function U(e,t,n,s,o){const r=ie(e.tagName,n.props&&n.props.type)[o];r&&r(e,t,n,s)}function _n(){ct.getSSRProps=({value:e})=>({value:e}),se.getSSRProps=({value:e},t)=>{if(t.props&&B(t.props.value,e))return{checked:!0}},ne.getSSRProps=({value:e},t)=>{if(b(e)){if(t.props&&X(e,t.props.value)>-1)return{checked:!0}}else if(F(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},bn.getSSRProps=(e,t)=>{if("string"!=typeof t.type)return;const n=ie(t.type.toUpperCase(),t.props&&t.props.type);return n.getSSRProps?n.getSSRProps(e,t):void 0}}const Sn=["ctrl","shift","alt","meta"],vn={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Sn.some((n=>e[`${n}Key`]&&!t.includes(n)))},Bn=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(n,...s)=>{for(let e=0;e<t.length;e++){const s=vn[t[e]];if(s&&s(n,t))return}return e(n,...s)})},Cn={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Hn=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=n=>{if(!("key"in n))return;const s=P(n.key);return t.some((e=>e===s||Cn[e]===s))?e(n):void 0})},re=H({patchProp:rn},ke);let D,Ht=!1;function ae(){return D||(D=ye(re))}function ce(){return D=Ht?D:Ne(re),Ht=!0,D}const Ft=(...e)=>{ae().render(...e)},yn=(...e)=>{ce().hydrate(...e)},Fn=(...e)=>{const t=ae().createApp(...e),{mount:n}=t;return t.mount=e=>{const s=ue(e);if(!s)return;const o=t._component;!Kt(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const r=n(s,!1,le(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},t},kn=(...e)=>{const t=ce().createApp(...e),{mount:n}=t;return t.mount=e=>{const t=ue(e);if(t)return n(t,!0,le(t))},t};function le(e){return e instanceof SVGElement?"svg":"function"==typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function ue(e){return W(e)?document.querySelector(e):e}let kt=!1;const Kn=()=>{kt||(kt=!0,_n(),qe())},Un=(e,t)=>{const n=e.__vccOpts||e;for(const[e,s]of t)n[e]=s;return n},En="/pr/144/assets/icons/help.svg",Tn=["aria-disabled"],wn=_("img",{src:En,alt:"Help"},null,-1),An={class:"tooltiptext nms-font"},Mn={id:"explanationHeading",class:"explanationHeading title is-4"},Pn={id:"explanationContent",class:"explanationContent nms-font"},Nn=["href"],Ln=["srcset"],xn=["src"],Rn=_("form",{method:"dialog"},[_("button",{class:"button",type:"submit",autofocus:""}," Close ")],-1),jn=jt({__name:"Explanation",props:{img:{},open:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){var n;const s=e,o=C(null),r=C(null),a=C(null),i=(null==(n=s.img)?void 0:n.trim())??"",l=C("0 -100vh"),c=C(""),u=C(0),p=C(0),d=C(!1),f=C(!1),h=t;function m(){l.value="0 -100vh",c.value||(c.value=i),d.value||(d.value=!0),h("update:open",!0),ut((()=>{o.value&&(o.value.showModal(),l.value="0 0",o.value.scrollTo(0,0))}))}function v(){p.value=1,u.value=1}return Oe((()=>{s.open&&m()})),(e,t)=>(K(),Q(ft,null,[_("button",{"aria-disabled":!e.$slots.content||void 0,class:"tooltip",onClick:t[0]||(t[0]=t=>e.$slots.content&&m())},[wn,_("p",An,[tt(e.$slots,"default")])],8,Tn),(K(),De(Be,{to:"body"},[d.value?(K(),Q("dialog",{key:0,style:vt({translate:l.value}),class:"explanation modal-content content",ref_key:"dialogElement",ref:o,onClose:t[3]||(t[3]=t=>e.$emit("update:open",!1))},[_("h2",Mn,[tt(e.$slots,"heading")]),_("div",Pn,[tt(e.$slots,"content")]),c.value&&!f.value?(K(),Q("a",{key:0,href:`./assets/images/jpg/${c.value}.jpg`,class:"explanationLink loading",id:"explanationLink",ref_key:"linkElement",ref:a,rel:"noopener noreferrer",target:"_blank"},[_("picture",null,[_("source",{srcset:`./assets/images/webp/${c.value}.webp`,class:"explanationWebpImg",id:"explanationWebpImg",type:"image/webp"},null,8,Ln),_("img",{src:`./assets/images/jpg/${c.value}.jpg`,style:vt({opacity:u.value,"margin-block-start":p.value+"rem"}),alt:"Explainer Image",class:"explanationFallbackImg",id:"explanationFallbackImg",ref_key:"imgElement",ref:r,onLoadstart:t[1]||(t[1]=e=>f.value=!1),onLoad:v,onError:t[2]||(t[2]=e=>f.value=!0)},null,44,xn)])],8,Nn)):Ct("",!0),Rn],36)):Ct("",!0)]))],64))}});export{Wt as T,pt as V,Un as _,Dn as a,kn as b,Fn as c,cn as d,In as e,Vn as f,bn as g,yn as h,Kn as i,se as j,gn as k,ct as l,We as m,Bn as n,jn as o,Ft as r,On as u,ne as v,Hn as w};