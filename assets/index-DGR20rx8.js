import{bn as s,c7 as l,bx as e,bT as u,bG as o,by as c,bJ as r,bo as i,bC as m}from"./links-BCSAQWDo.js";import{l as d,p,s as f,a as n,b as h,w as t,c as g,d as b,e as I,f as w,r as E,g as S}from"./index-Bc8d-krZ.js";import{f as B,m as k}from"./mineralDatalists-D0bIAFGk.js";const F=[{element:["systemInput","hubnameInput","galaxyInput","regionInput"],func:()=>d()},{element:"faunaNumberInput",func:function(){p(parseInt(s[this.dataset.destNoauto]),"faunaSentencePlural")}},{element:"sentinelInput",func:()=>f()},{element:["descriptionInput","wormmaxdepthInput"],func:function(){n(this)}},{element:"sandwormInput",func:()=>h()},{element:"sandwormImgUpload",handler:"change",func:function(){l(this)}},{element:"autoSpawn",func:()=>t()},{element:"addResourceButton",handler:"click",func:function(){g(this)}},{element:"faunaToggleButton",handler:"click",func:function(){e("fauna",this)}},{element:"floraToggleButton",handler:"click",func:function(){e("flora",this)}},{element:"mineralToggleButton",handler:"click",func:function(){e("mineral",this)}},{element:"addFaunaButton",handler:"click",func:function(){b(this)}},{element:"addFloraButton",handler:"click",func:function(){I(this)}},{element:"addMineralButton",handler:"click",func:function(){w(this)}}],x={input:{resourceInputs:"resourceInputs",autoSpawn:"autoSpawnInput"},output:{resourceBullets:"resourceBullets",creatures:"creatures",plants:"plants",minerals:"minerals",sandworm:"sandworm"}};m.resetExternal=()=>document.dispatchEvent(new Event("pageReset")),document.addEventListener("pageReset",(()=>E()));const T=[B,k];T.forEach((n=>u(n))),o(x),c(F),r(i.input.resourceInputs.querySelector("button"),"click"),n(),t(),S();