import{a$ as Ue,b0 as Fe,i as L,e as A,j as $t,b1 as Ht,b2 as Kt,f as N,b3 as je,b as Ut,h as b,b4 as v,d as We,b5 as ze,ai as ae,b6 as Ft,B as qe,b7 as ce,b8 as ke,w as Ge,E as X,b9 as B,ba as Xe,bb as Je,af as Qe,ah as Ye,N as jt,bc as Ze,bd as q,be as $,bf as I,bg as Z,bh as et,bi as ee,bj as tt,bk as Wt,bl as le,bm as st,bn as nt,bo as ot,g as zt,bp as it,bq as rt,br as at,bs as ct,bt as te,bu as se,bv as qt,bw as kt,bx as Gt,by as Xt,bz as Jt,bA as Qt,bB as Yt,bC as Zt,bD as es,bE as ts,bF as ss,bG as ns,bH as os,bI as is,bJ as rs,bK as as,bL as cs,z as ls,bM as fs,bN as us,bO as ds,bP as ps,bQ as hs,bR as ms,bS as bs,bT as gs,aj as _s,bU as Ss,bV as Cs,bW as ys,bX as vs,bY as Ts,bZ as Es,b_ as ws,b$ as As,c0 as Rs,c1 as Ps,c2 as Ns,c3 as Ms,c4 as xs,c5 as Vs,c6 as Os,c7 as Ds,c8 as Ls,c9 as Is,ca as Bs,cb as $s,cc as Hs,cd as Ks,ce as Us,cf as Fs,cg as js,ch as Ws,ci as zs,cj as qs,ck as ks,cl as Gs,cm as Xs,cn as Js,co as Qs,cp as Ys,cq as Zs,cr as en,cs as tn,ct as sn,cu as nn,cv as on,cw as rn,cx as an,cy as cn,cz as ln,cA as fn,A as un,cB as dn,cC as pn,cD as hn,cE as mn,cF as bn,cG as gn,x as _n,cH as Sn,cI as Cn,cJ as yn,cK as vn,cL as Tn,cM as En,cN as wn,cO as An,cP as Rn,cQ as Pn,cR as Nn,cS as Mn,cT as xn,cU as Vn,cV as On,cW as Dn,t as Ln,cX as In,cY as Bn,cZ as $n,c_ as Hn,c$ as Kn,d0 as Un,d1 as Fn,d2 as jn,d3 as Wn,d4 as zn,d5 as qn,d6 as kn,d7 as Gn,d8 as Xn,y as Jn,d9 as Qn,da as Yn,db as Zn,dc as eo,dd as to,de as so,df as no,dg as oo}from"./links-rbsmWE0W.js";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ne;const Se=typeof window<"u"&&window.trustedTypes;if(Se)try{ne=Se.createPolicy("vue",{createHTML:e=>e})}catch{}const lt=ne?e=>ne.createHTML(e):e=>e,io="http://www.w3.org/2000/svg",ro="http://www.w3.org/1998/Math/MathML",_=typeof document<"u"?document:null,Ce=_&&_.createElement("template"),ao={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const o="svg"===t?_.createElementNS(io,e):"mathml"===t?_.createElementNS(ro,e):s?_.createElement(e,{is:s}):_.createElement(e);return"select"===e&&n&&null!=n.multiple&&o.setAttribute("multiple",n.multiple),o},createText:e=>_.createTextNode(e),createComment:e=>_.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,o,r){const a=s?s.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),s),o!==r&&(o=o.nextSibling););else{Ce.innerHTML=lt("svg"===n?`<svg>${e}</svg>`:"mathml"===n?`<math>${e}</math>`:e);const o=Ce.content;if("svg"===n||"mathml"===n){const e=o.firstChild;for(;e.firstChild;)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,s)}return[a?a.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},C="transition",V="animation",M=Symbol("_vtc"),ft={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ut=A({},et,ft),co=e=>(e.displayName="Transition",e.props=ut,e),lo=co(((e,{slots:t})=>nt(ot,dt(e),t))),w=(e,t=[])=>{b(e)?e.forEach((e=>e(...t))):e&&e(...t)},ye=e=>!!e&&(b(e)?e.some((e=>e.length>1)):e.length>1);function dt(e){const t={};for(const s in e)s in ft||(t[s]=e[s]);if(!1===e.css)return t;const{name:s="v",type:n,duration:o,enterFromClass:r=`${s}-enter-from`,enterActiveClass:a=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:c=r,appearActiveClass:l=a,appearToClass:u=i,leaveFromClass:p=`${s}-leave-from`,leaveActiveClass:d=`${s}-leave-active`,leaveToClass:f=`${s}-leave-to`}=e,h=fo(o),m=h&&h[0],v=h&&h[1],{onBeforeEnter:b,onEnter:_,onEnterCancelled:S,onLeave:C,onLeaveCancelled:T,onBeforeAppear:E=b,onAppear:R=_,onAppearCancelled:x=S}=t,N=(e,t,s,n)=>{e._enterCancelled=n,y(e,t?u:i),y(e,t?l:a),s&&s()},M=(e,t)=>{e._isLeaving=!1,y(e,p),y(e,f),y(e,d),t&&t()},k=e=>(t,s)=>{const o=e?R:_,a=()=>N(t,e,s);w(o,[t,a]),ve((()=>{y(t,e?c:r),g(t,e?u:i),ye(o)||Te(t,n,m,a)}))};return A(t,{onBeforeEnter(e){w(b,[e]),g(e,r),g(e,a)},onBeforeAppear(e){w(E,[e]),g(e,c),g(e,l)},onEnter:k(!1),onAppear:k(!0),onLeave(e,t){e._isLeaving=!0;const s=()=>M(e,t);g(e,p),e._enterCancelled?(g(e,d),oe()):(oe(),g(e,d)),ve((()=>{e._isLeaving&&(y(e,p),g(e,f),ye(C)||Te(e,n,v,s))})),w(C,[e,s])},onEnterCancelled(e){N(e,!1,void 0,!0),w(S,[e])},onAppearCancelled(e){N(e,!0,void 0,!0),w(x,[e])},onLeaveCancelled(e){M(e),w(T,[e])}})}function fo(e){if(null==e)return null;if(zt(e))return[J(e.enter),J(e.leave)];{const t=J(e);return[t,t]}}function J(e){return ee(e)}function g(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e[M]||(e[M]=new Set)).add(t)}function y(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const s=e[M];s&&(s.delete(t),s.size||(e[M]=void 0))}function ve(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let uo=0;function Te(e,t,s,n){const o=e._endId=++uo,r=()=>{o===e._endId&&n()};if(null!=s)return setTimeout(r,s);const{type:a,timeout:i,propCount:c}=pt(e,t);if(!a)return n();const l=a+"end";let u=0;const p=()=>{e.removeEventListener(l,d),r()},d=t=>{t.target===e&&++u>=c&&p()};setTimeout((()=>{u<c&&p()}),i+1),e.addEventListener(l,d)}function pt(e,t){const s=window.getComputedStyle(e),n=e=>(s[e]||"").split(", "),o=n(`${C}Delay`),r=n(`${C}Duration`),a=Ee(o,r),i=n(`${V}Delay`),c=n(`${V}Duration`),l=Ee(i,c);let u=null,p=0,d=0;t===C?a>0&&(u=C,p=a,d=r.length):t===V?l>0&&(u=V,p=l,d=c.length):(p=Math.max(a,l),u=p>0?a>l?C:V:null,d=u?u===C?r.length:c.length:0);return{type:u,timeout:p,propCount:d,hasTransform:u===C&&/\b(transform|all)(,|$)/.test(n(`${C}Property`).toString())}}function Ee(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,s)=>we(t)+we(e[s]))))}function we(e){return"auto"===e?0:1e3*Number(e.slice(0,-1).replace(",","."))}function oe(){return document.body.offsetHeight}function po(e,t,s){const n=e[M];n&&(t=(t?[t,...n]:[...n]).join(" ")),null==t?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const F=Symbol("_vod"),ht=Symbol("_vsh"),mt={beforeMount(e,{value:t},{transition:s}){e[F]="none"===e.style.display?"":e.style.display,s&&t?s.beforeEnter(e):O(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:n}){!t!=!s&&(n?t?(n.beforeEnter(e),O(e,!0),n.enter(e)):n.leave(e,(()=>{O(e,!1)})):O(e,t))},beforeUnmount(e,{value:t}){O(e,t)}};function O(e,t){e.style.display=t?e[F]:"none",e[ht]=!t}function ho(){mt.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const bt=Symbol("");function mo(e){const t=B();if(!t)return;const s=t.ut=(s=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e=>j(e,s)))},n=()=>{const n=e(t.proxy);t.ce?j(t.ce,n):ie(t.subTree,n),s(n)};Xe((()=>{Je(n)})),Qe((()=>{Ye(n,jt,{flush:"post"});const e=new MutationObserver(n);e.observe(t.subTree.el.parentNode,{childList:!0}),Ze((()=>e.disconnect()))}))}function ie(e,t){if(128&e.shapeFlag){const s=e.suspense;e=s.activeBranch,s.pendingBranch&&!s.isHydrating&&s.effects.push((()=>{ie(s.activeBranch,t)}))}for(;e.component;)e=e.component.subTree;if(1&e.shapeFlag&&e.el)j(e.el,t);else if(e.type===le)e.children.forEach((e=>ie(e,t)));else if(e.type===st){let{el:s,anchor:n}=e;for(;s&&(j(s,t),s!==n);)s=s.nextSibling}}function j(e,t){if(1===e.nodeType){const s=e.style;let n="";for(const e in t)s.setProperty(`--${e}`,t[e]),n+=`--${e}: ${t[e]};`;s[bt]=n}}const bo=/(^|;)\s*display\s*:/;function go(e,t,s){const n=e.style,o=L(s);let r=!1;if(s&&!o){if(t)if(L(t))for(const e of t.split(";")){const t=e.slice(0,e.indexOf(":")).trim();null==s[t]&&U(n,t,"")}else for(const e in t)null==s[e]&&U(n,e,"");for(const e in s)"display"===e&&(r=!0),U(n,e,s[e])}else if(o){if(t!==s){const e=n[bt];e&&(s+=";"+e),n.cssText=s,r=bo.test(s)}}else t&&e.removeAttribute("style");F in e&&(e[F]=r?n.display:"",e[ht]&&(n.display="none"))}const Ae=/\s*!important$/;function U(e,t,s){if(b(s))s.forEach((s=>U(e,t,s)));else if(null==s&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=_o(e,t);Ae.test(s)?e.setProperty(v(n),s.replace(Ae,""),"important"):e[n]=s}}const Re=["Webkit","Moz","ms"],Q={};function _o(e,t){const s=Q[t];if(s)return s;let n=N(t);if("filter"!==n&&n in e)return Q[t]=n;n=We(n);for(let s=0;s<Re.length;s++){const o=Re[s]+n;if(o in e)return Q[t]=o}return t}const Pe="http://www.w3.org/1999/xlink";function Ne(e,t,s,n,o,r=Kt(t)){n&&t.startsWith("xlink:")?null==s?e.removeAttributeNS(Pe,t.slice(6,t.length)):e.setAttributeNS(Pe,t,s):null==s||r&&!je(s)?e.removeAttribute(t):e.setAttribute(t,r?"":Ut(s)?String(s):s)}function Me(e,t,s,n,o){if("innerHTML"===t||"textContent"===t)return void(null!=s&&(e[t]="innerHTML"===t?lt(s):s));const r=e.tagName;if("value"===t&&"PROGRESS"!==r&&!r.includes("-")){const n="OPTION"===r?e.getAttribute("value")||"":e.value,o=null==s?"checkbox"===e.type?"on":"":String(s);return(n!==o||!("_value"in e))&&(e.value=o),null==s&&e.removeAttribute(t),void(e._value=s)}let a=!1;if(""===s||null==s){const n=typeof e[t];"boolean"===n?s=je(s):null==s&&"string"===n?(s="",a=!0):"number"===n&&(s=0,a=!0)}try{e[t]=s}catch{}a&&e.removeAttribute(o||t)}function S(e,t,s,n){e.addEventListener(t,s,n)}function So(e,t,s,n){e.removeEventListener(t,s,n)}const xe=Symbol("_vei");function Co(e,t,s,n,o=null){const r=e[xe]||(e[xe]={}),a=r[t];if(n&&a)a.value=n;else{const[s,i]=yo(t);if(n){S(e,s,r[t]=Eo(n,o),i)}else a&&(So(e,s,a,i),r[t]=void 0)}}const Ve=/(?:Once|Passive|Capture)$/;function yo(e){let t;if(Ve.test(e)){let s;for(t={};s=e.match(Ve);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[":"===e[2]?e.slice(3):v(e.slice(2)),t]}let Y=0;const vo=Promise.resolve(),To=()=>Y||(vo.then((()=>Y=0)),Y=Date.now());function Eo(e,t){const s=e=>{if(e._vts){if(e._vts<=s.attached)return}else e._vts=Date.now();ze(wo(e,s.value),t,5,[e])};return s.value=e,s.attached=To(),s}function wo(e,t){if(b(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const Oe=e=>111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ao=(e,t,s,n,o,r)=>{const a="svg"===o;"class"===t?po(e,n,a):"style"===t?go(e,s,n):$t(t)?Ht(t)||Co(e,t,s,n,r):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Ro(e,t,n,a))?(Me(e,t,n),!e.tagName.includes("-")&&("value"===t||"checked"===t||"selected"===t)&&Ne(e,t,n,a,r,"value"!==t)):!e._isVueCE||!/[A-Z]/.test(t)&&L(n)?("true-value"===t?e._trueValue=n:"false-value"===t&&(e._falseValue=n),Ne(e,t,n,a)):Me(e,N(t),n,r,t)};function Ro(e,t,s,n){if(n)return!!("innerHTML"===t||"textContent"===t||t in e&&Oe(t)&&Ue(s));if("spellcheck"===t||"draggable"===t||"translate"===t||"form"===t||"list"===t&&"INPUT"===e.tagName||"type"===t&&"TEXTAREA"===e.tagName)return!1;if("width"===t||"height"===t){const t=e.tagName;if("IMG"===t||"VIDEO"===t||"CANVAS"===t||"SOURCE"===t)return!1}return(!Oe(t)||!L(s))&&t in e}const De={};/*! #__NO_SIDE_EFFECTS__ */function gt(e,t,s){const n=Ge(e,t);ke(n)&&A(n,t);class o extends k{constructor(e){super(n,e,s)}}return o.def=n,o}/*! #__NO_SIDE_EFFECTS__ */const Po=(e,t)=>gt(e,t,Nt),No=typeof HTMLElement<"u"?HTMLElement:class{};class k extends No{constructor(e,t={},s=re){super(),this._def=e,this._props=t,this._createApp=s,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&s!==re?this._root=this.shadowRoot:!1!==e.shadowRoot?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def)}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof k){this._parent=e;break}this._instance||(this._resolved?(this._setParent(),this._update()):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then((()=>{this._pendingResolve=void 0,this._resolveDef()})):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._instance.provides=e._instance.provides)}disconnectedCallback(){this._connected=!1,ae((()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)}))}_resolveDef(){if(this._pendingResolve)return;for(let e=0;e<this.attributes.length;e++)this._setAttr(this.attributes[e].name);this._ob=new MutationObserver((e=>{for(const t of e)this._setAttr(t.attributeName)})),this._ob.observe(this,{attributes:!0});const e=(e,t=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:s,styles:n}=e;let o;if(s&&!b(s))for(const e in s){const t=s[e];(t===Number||t&&t.type===Number)&&(e in this._props&&(this._props[e]=ee(this._props[e])),(o||(o=Object.create(null)))[N(e)]=!0)}this._numberProps=o,t&&this._resolveProps(e),this.shadowRoot&&this._applyStyles(n),this._mount(e)},t=this._def.__asyncLoader;t?this._pendingResolve=t().then((t=>e(this._def=t,!0))):e(this._def)}_mount(e){this._app=this._createApp(e),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const t=this._instance&&this._instance.exposed;if(t)for(const e in t)Ft(this,e)||Object.defineProperty(this,e,{get:()=>qe(t[e])})}_resolveProps(e){const{props:t}=e,s=b(t)?t:Object.keys(t||{});for(const e of Object.keys(this))"_"!==e[0]&&s.includes(e)&&this._setProp(e,this[e]);for(const e of s.map(N))Object.defineProperty(this,e,{get(){return this._getProp(e)},set(t){this._setProp(e,t,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const t=this.hasAttribute(e);let s=t?this.getAttribute(e):De;const n=N(e);t&&this._numberProps&&this._numberProps[n]&&(s=ee(s)),this._setProp(n,s,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,t,s=!0,n=!1){if(t!==this._props[e]&&(t===De?delete this._props[e]:(this._props[e]=t,"key"===e&&this._app&&(this._app._ceVNode.key=t)),n&&this._instance&&this._update(),s)){const s=this._ob;s&&s.disconnect(),!0===t?this.setAttribute(v(e),""):"string"==typeof t||"number"==typeof t?this.setAttribute(v(e),t+""):t||this.removeAttribute(v(e)),s&&s.observe(this,{attributes:!0})}}_update(){Pt(this._createVNode(),this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const t=ce(this._def,A(e,this._props));return this._instance||(t.ce=e=>{this._instance=e,e.ce=this,e.isCE=!0;const t=(e,t)=>{this.dispatchEvent(new CustomEvent(e,ke(t[0])?A({detail:t},t[0]):{detail:t}))};e.emit=(e,...s)=>{t(e,s),v(e)!==e&&t(v(e),s)},this._setParent()}),t}_applyStyles(e,t){if(!e)return;if(t){if(t===this._def||this._styleChildren.has(t))return;this._styleChildren.add(t)}const s=this._nonce;for(let t=e.length-1;t>=0;t--){const n=document.createElement("style");s&&n.setAttribute("nonce",s),n.textContent=e[t],this.shadowRoot.prepend(n)}}_parseSlots(){const e=this._slots={};let t;for(;t=this.firstChild;){const s=1===t.nodeType&&t.getAttribute("slot")||"default";(e[s]||(e[s]=[])).push(t),this.removeChild(t)}}_renderSlots(){const e=(this._teleportTarget||this).querySelectorAll("slot"),t=this._instance.type.__scopeId;for(let s=0;s<e.length;s++){const n=e[s],o=n.getAttribute("name")||"default",r=this._slots[o],a=n.parentNode;if(r)for(const e of r){if(t&&1===e.nodeType){const s=t+"-s",n=document.createTreeWalker(e,1);let o;for(e.setAttribute(s,"");o=n.nextNode();)o.setAttribute(s,"")}a.insertBefore(e,n)}else for(;n.firstChild;)a.insertBefore(n.firstChild,n);a.removeChild(n)}}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}}function _t(e){const t=B();return t&&t.ce||null}function Mo(){const e=_t();return e&&e.shadowRoot}function xo(e="$style"){{const t=B();if(!t)return X;const s=t.type.__cssModules;if(!s)return X;return s[e]||X}}const St=new WeakMap,Ct=new WeakMap,W=Symbol("_moveCb"),Le=Symbol("_enterCb"),Vo=e=>(delete e.props.mode,e),Oo=Vo({name:"TransitionGroup",props:A({},ut,{tag:String,moveClass:String}),setup(e,{slots:t}){const s=B(),n=it();let o,r;return rt((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!$o(o[0].el,s.vnode.el,t))return;o.forEach(Lo),o.forEach(Io);const n=o.filter(Bo);oe(),n.forEach((e=>{const s=e.el,n=s.style;g(s,t),n.transform=n.webkitTransform=n.transitionDuration="";const o=s[W]=e=>{e&&e.target!==s||(!e||/transform$/.test(e.propertyName))&&(s.removeEventListener("transitionend",o),s[W]=null,y(s,t))};s.addEventListener("transitionend",o)}))})),()=>{const a=at(e),i=dt(a);let c=a.tag||le;if(o=[],r)for(let e=0;e<r.length;e++){const t=r[e];t.el&&t.el instanceof Element&&(o.push(t),te(t,se(t,i,n,s)),St.set(t,t.el.getBoundingClientRect()))}r=t.default?ct(t.default()):[];for(let e=0;e<r.length;e++){const t=r[e];null!=t.key&&te(t,se(t,i,n,s))}return ce(c,null,r)}}}),Do=Oo;function Lo(e){const t=e.el;t[W]&&t[W](),t[Le]&&t[Le]()}function Io(e){Ct.set(e,e.el.getBoundingClientRect())}function Bo(e){const t=St.get(e),s=Ct.get(e),n=t.left-s.left,o=t.top-s.top;if(n||o){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${n}px,${o}px)`,t.transitionDuration="0s",e}}function $o(e,t,s){const n=e.cloneNode(),o=e[M];o&&o.forEach((e=>{e.split(/\s+/).forEach((e=>e&&n.classList.remove(e)))})),s.split(/\s+/).forEach((e=>e&&n.classList.add(e))),n.style.display="none";const r=1===t.nodeType?t:t.parentNode;r.appendChild(n);const{hasTransform:a}=pt(n);return r.removeChild(n),a}const T=e=>{const t=e.props["onUpdate:modelValue"]||!1;return b(t)?e=>Wt(t,e):t};function Ho(e){e.target.composing=!0}function Ie(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const m=Symbol("_assign"),z={created(e,{modifiers:{lazy:t,trim:s,number:n}},o){e[m]=T(o);const r=n||o.props&&"number"===o.props.type;S(e,t?"change":"input",(t=>{if(t.target.composing)return;let n=e.value;s&&(n=n.trim()),r&&(n=Z(n)),e[m](n)})),s&&S(e,"change",(()=>{e.value=e.value.trim()})),t||(S(e,"compositionstart",Ho),S(e,"compositionend",Ie),S(e,"change",Ie))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:n,trim:o,number:r}},a){if(e[m]=T(a),e.composing)return;const i=t??"";(!r&&"number"!==e.type||/^0\d/.test(e.value)?e.value:Z(e.value))!==i&&(document.activeElement===e&&"range"!==e.type&&(n&&t===s||o&&e.value.trim()===i)||(e.value=i))}},fe={deep:!0,created(e,t,s){e[m]=T(s),S(e,"change",(()=>{const t=e._modelValue,s=x(e),n=e.checked,o=e[m];if(b(t)){const e=q(t,s),r=-1!==e;if(n&&!r)o(t.concat(s));else if(!n&&r){const s=[...t];s.splice(e,1),o(s)}}else if($(t)){const e=new Set(t);n?e.add(s):e.delete(s),o(e)}else o(vt(e,n))}))},mounted:Be,beforeUpdate(e,t,s){e[m]=T(s),Be(e,t,s)}};function Be(e,{value:t,oldValue:s},n){let o;if(e._modelValue=t,b(t))o=q(t,n.props.value)>-1;else if($(t))o=t.has(n.props.value);else{if(t===s)return;o=I(t,vt(e,!0))}e.checked!==o&&(e.checked=o)}const ue={created(e,{value:t},s){e.checked=I(t,s.props.value),e[m]=T(s),S(e,"change",(()=>{e[m](x(e))}))},beforeUpdate(e,{value:t,oldValue:s},n){e[m]=T(n),t!==s&&(e.checked=I(t,n.props.value))}},yt={deep:!0,created(e,{value:t,modifiers:{number:s}},n){const o=$(t);S(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>s?Z(x(e)):x(e)));e[m](e.multiple?o?new Set(t):t:t[0]),e._assigning=!0,ae((()=>{e._assigning=!1}))})),e[m]=T(n)},mounted(e,{value:t}){$e(e,t)},beforeUpdate(e,t,s){e[m]=T(s)},updated(e,{value:t}){e._assigning||$e(e,t)}};function $e(e,t){const s=e.multiple,n=b(t);if(!s||n||$(t)){for(let o=0,r=e.options.length;o<r;o++){const r=e.options[o],a=x(r);if(s)if(n){const e=typeof a;r.selected="string"===e||"number"===e?t.some((e=>String(e)===String(a))):q(t,a)>-1}else r.selected=t.has(a);else if(I(x(r),t))return void(e.selectedIndex!==o&&(e.selectedIndex=o))}!s&&-1!==e.selectedIndex&&(e.selectedIndex=-1)}}function x(e){return"_value"in e?e._value:e.value}function vt(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Tt={created(e,t,s){K(e,t,s,null,"created")},mounted(e,t,s){K(e,t,s,null,"mounted")},beforeUpdate(e,t,s,n){K(e,t,s,n,"beforeUpdate")},updated(e,t,s,n){K(e,t,s,n,"updated")}};function Et(e,t){switch(e){case"SELECT":return yt;case"TEXTAREA":return z;default:switch(t){case"checkbox":return fe;case"radio":return ue;default:return z}}}function K(e,t,s,n,o){const r=Et(e.tagName,s.props&&s.props.type)[o];r&&r(e,t,s,n)}function Ko(){z.getSSRProps=({value:e})=>({value:e}),ue.getSSRProps=({value:e},t)=>{if(t.props&&I(t.props.value,e))return{checked:!0}},fe.getSSRProps=({value:e},t)=>{if(b(e)){if(t.props&&q(e,t.props.value)>-1)return{checked:!0}}else if($(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Tt.getSSRProps=(e,t)=>{if("string"!=typeof t.type)return;const s=Et(t.type.toUpperCase(),t.props&&t.props.type);return s.getSSRProps?s.getSSRProps(e,t):void 0}}const Uo=["ctrl","shift","alt","meta"],Fo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>Uo.some((s=>e[`${s}Key`]&&!t.includes(s)))},jo=(e,t)=>{const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=(s,...n)=>{for(let e=0;e<t.length;e++){const n=Fo[t[e]];if(n&&n(s,t))return}return e(s,...n)})},Wo={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},zo=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=s=>{if(!("key"in s))return;const n=v(s.key);return t.some((e=>e===n||Wo[e]===n))?e(s):void 0})},wt=A({patchProp:Ao},ao);let D,He=!1;function At(){return D||(D=Fe(wt))}function Rt(){return D=He?D:tt(wt),He=!0,D}const Pt=(...e)=>{At().render(...e)},qo=(...e)=>{Rt().hydrate(...e)},re=(...e)=>{const t=At().createApp(...e),{mount:s}=t;return t.mount=e=>{const n=xt(e);if(!n)return;const o=t._component;!Ue(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),1===n.nodeType&&(n.textContent="");const r=s(n,!1,Mt(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},t},Nt=(...e)=>{const t=Rt().createApp(...e),{mount:s}=t;return t.mount=e=>{const t=xt(e);if(t)return s(t,!0,Mt(t))},t};function Mt(e){return e instanceof SVGElement?"svg":"function"==typeof MathMLElement&&e instanceof MathMLElement?"mathml":void 0}function xt(e){return L(e)?document.querySelector(e):e}let Ke=!1;const ko=()=>{Ke||(Ke=!0,Ko(),ho())},Xo=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:ot,BaseTransitionPropsValidators:et,Comment:qt,DeprecationTypes:kt,EffectScope:Gt,ErrorCodes:Xt,ErrorTypeStrings:Jt,Fragment:le,KeepAlive:Qt,ReactiveEffect:Yt,Static:st,Suspense:Zt,Teleport:es,Text:ts,TrackOpTypes:ss,Transition:lo,TransitionGroup:Do,TriggerOpTypes:ns,VueElement:k,assertNumber:os,callWithAsyncErrorHandling:ze,callWithErrorHandling:is,camelize:N,capitalize:We,cloneVNode:rs,compatUtils:as,computed:cs,createApp:re,createBlock:ls,createCommentVNode:fs,createElementBlock:us,createElementVNode:ds,createHydrationRenderer:tt,createPropsRestProxy:ps,createRenderer:Fe,createSSRApp:Nt,createSlots:hs,createStaticVNode:ms,createTextVNode:bs,createVNode:ce,customRef:gs,defineAsyncComponent:_s,defineComponent:Ge,defineCustomElement:gt,defineEmits:Ss,defineExpose:Cs,defineModel:ys,defineOptions:vs,defineProps:Ts,defineSSRCustomElement:Po,defineSlots:Es,devtools:ws,effect:As,effectScope:Rs,getCurrentInstance:B,getCurrentScope:Ps,getCurrentWatcher:Ns,getTransitionRawChildren:ct,guardReactiveProps:Ms,h:nt,handleError:xs,hasInjectionContext:Vs,hydrate:qo,hydrateOnIdle:Os,hydrateOnInteraction:Ds,hydrateOnMediaQuery:Ls,hydrateOnVisible:Is,initCustomFormatter:Bs,initDirectivesForSSR:ko,inject:$s,isMemoSame:Hs,isProxy:Ks,isReactive:Us,isReadonly:Fs,isRef:js,isRuntimeOnly:Ws,isShallow:zs,isVNode:qs,markRaw:ks,mergeDefaults:Gs,mergeModels:Xs,mergeProps:Js,nextTick:ae,normalizeClass:Qs,normalizeProps:Ys,normalizeStyle:Zs,onActivated:en,onBeforeMount:tn,onBeforeUnmount:sn,onBeforeUpdate:Xe,onDeactivated:nn,onErrorCaptured:on,onMounted:Qe,onRenderTracked:rn,onRenderTriggered:an,onScopeDispose:cn,onServerPrefetch:ln,onUnmounted:Ze,onUpdated:rt,onWatcherCleanup:fn,openBlock:un,popScopeId:dn,provide:pn,proxyRefs:hn,pushScopeId:mn,queuePostFlushCb:Je,reactive:bn,readonly:gn,ref:_n,registerRuntimeCompiler:Sn,render:Pt,renderList:Cn,renderSlot:yn,resolveComponent:vn,resolveDirective:Tn,resolveDynamicComponent:En,resolveFilter:wn,resolveTransitionHooks:se,setBlockTracking:An,setDevtoolsHook:Rn,setTransitionHooks:te,shallowReactive:Pn,shallowReadonly:Nn,shallowRef:Mn,ssrContextKey:xn,ssrUtils:Vn,stop:On,toDisplayString:Dn,toHandlerKey:Ln,toHandlers:In,toRaw:at,toRef:Bn,toRefs:$n,toValue:Hn,transformVNodeArgs:Kn,triggerRef:Un,unref:qe,useAttrs:Fn,useCssModule:xo,useCssVars:mo,useHost:_t,useId:jn,useModel:Wn,useSSRContext:zn,useShadowRoot:Mo,useSlots:qn,useTemplateRef:kn,useTransitionState:it,vModelCheckbox:fe,vModelDynamic:Tt,vModelRadio:ue,vModelSelect:yt,vModelText:z,vShow:mt,version:Gn,warn:Xn,watch:Ye,watchEffect:Jn,watchPostEffect:Qn,watchSyncEffect:Yn,withAsyncContext:Zn,withCtx:eo,withDefaults:to,withDirectives:so,withKeys:zo,withMemo:no,withModifiers:jo,withScopeId:oo},Symbol.toStringTag,{value:"Module"}));export{z as a,fe as b,re as c,mt as d,Xo as r,yt as v,jo as w};
