import{H as B,aD as t,bb as F,av as i,r as m,s as e,aG as c,p as I,ah as b,q as _,T as j,F as H,ae as L}from"./links-BgFYMyYj.js";const T="/pr/175/assets/icons/help.svg",S=["aria-disabled"],M=e("img",{src:T,alt:"Help"},null,-1),N={class:"tooltiptext nms-font"},V={id:"explanationHeading",class:"explanationHeading title is-4"},W={id:"explanationContent",class:"explanationContent nms-font"},q=["href"],z=["srcset"],D=["src"],G=e("form",{method:"dialog"},[e("button",{class:"button",type:"submit",autofocus:""}," Close ")],-1),J=B({__name:"Explanation",props:{img:{},open:{type:Boolean}},emits:["update:open"],setup(a,{emit:l}){var n;const s=a,o=t(null),p=t(null),u=t(null),r=(null==(n=s.img)?void 0:n.trim())??"",v=t("0 -100vh"),d=t(""),g=t(0),f=t(0),x=t(!1),k=t(!1),y=l;function h(){v.value="0 -100vh",d.value||(d.value=r),x.value||(x.value=!0),y("update:open",!0),L((()=>{o.value&&(o.value.showModal(),v.value="0 0",o.value.scrollTo(0,0))}))}function $(){f.value=1,g.value=1}return F((()=>{s.open&&h()})),(a,l)=>(i(),m(H,null,[e("button",{"aria-disabled":!a.$slots.content||void 0,class:"tooltip",onClick:l[0]||(l[0]=e=>a.$slots.content&&h())},[M,e("p",N,[c(a.$slots,"default")])],8,S),(i(),I(j,{to:"body"},[x.value?(i(),m("dialog",{key:0,style:b({translate:v.value}),class:"explanation modal-content content",ref_key:"dialogElement",ref:o,onClose:l[3]||(l[3]=e=>a.$emit("update:open",!1))},[e("h2",V,[c(a.$slots,"heading")]),e("div",W,[c(a.$slots,"content")]),d.value&&!k.value?(i(),m("a",{key:0,href:`./assets/images/jpg/${d.value}.jpg`,class:"explanationLink loading",id:"explanationLink",ref_key:"linkElement",ref:u,rel:"noopener noreferrer",target:"_blank"},[e("picture",null,[e("source",{srcset:`./assets/images/webp/${d.value}.webp`,class:"explanationWebpImg",id:"explanationWebpImg",type:"image/webp"},null,8,z),e("img",{src:`./assets/images/jpg/${d.value}.jpg`,style:b({opacity:g.value,"margin-block-start":f.value+"rem"}),alt:"Explainer Image",class:"explanationFallbackImg",id:"explanationFallbackImg",ref_key:"imgElement",ref:p,onLoadstart:l[1]||(l[1]=e=>k.value=!1),onLoad:$,onError:l[2]||(l[2]=e=>k.value=!0)},null,44,D)])],8,q)):_("",!0),G],36)):_("",!0)]))],64))}});export{J as _};
