(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6864976"],{"17d9":function(e,t,n){},2052:function(e,t,n){"use strict";n("17d9")},"21fa":function(e,t,n){},2355:function(e,t,n){},"267b":function(e,t,n){"use strict";n("4d37")},"2e9b":function(e,t,n){"use strict";var c=n("f2bf");function o(e,t,n,o,r,a){var i=Object(c["resolveComponent"])("svg-icon");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:"transparent-icon",style:Object(c["normalizeStyle"])({width:e.size+e.unit,height:e.size+e.unit})},[Object(c["createVNode"])(i,{width:e.iconSize+e.unit,height:e.iconSize+e.unit,name:e.icon},null,8,["width","height","name"])],4)}var r=Object(c["defineComponent"])({name:"TransparentIcon",props:{icon:{type:String,required:!0},size:{type:String,default:"32"},iconSize:{type:String,default:"20"},unit:{type:String,default:"px"}},setup:function(){return{}}}),a=(n("765e"),n("6b0d")),i=n.n(a);const l=i()(r,[["render",o],["__scopeId","data-v-88d88f40"]]);t["a"]=l},4711:function(e,t,n){"use strict";n.r(t);var c=n("f2bf"),o=n("65b6"),r=n.n(o),a=function(e){return Object(c["pushScopeId"])("data-v-b3b06762"),e=e(),Object(c["popScopeId"])(),e},i={class:"relative"},l=a((function(){return Object(c["createElementVNode"])("div",{class:"index-bg"},[Object(c["createElementVNode"])("img",{class:"index-bg-img",src:r.a,alt:""})],-1)})),s={class:"main-wrapper"},d={class:"step-section"},u={class:"section-title"},b={class:"steps-wrapper setUp"},p={class:"step-section"},O={class:"section-title"},j={class:"steps-wrapper"},f={class:"text-center"},m={class:"section-title"},v={class:"accordion-wrapper"},g={key:0,class:"get-app-form-section"},C={class:"section-title"},N={key:0},S={key:1,style:{width:"383px"}},k={key:2,style:{width:"333px"}},y={key:3,style:{width:"284px"}};function V(e,t,n,o,r,a){var V=Object(c["resolveComponent"])("DownloadApp"),_=Object(c["resolveComponent"])("Jumbotron"),h=Object(c["resolveComponent"])("Features"),E=Object(c["resolveComponent"])("Steps"),w=Object(c["resolveComponent"])("ReviewSection"),B=Object(c["resolveComponent"])("Accordion"),$=Object(c["resolveComponent"])("van-sticky");return Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],null,[Object(c["createVNode"])(_,{title:e.$i18n.$t("playBig")},{default:Object(c["withCtx"])((function(){return[e.IS_MOBILE_APP?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])(V,{key:0}))]})),_:1},8,["title"]),Object(c["createVNode"])(h),Object(c["createElementVNode"])("main",i,[l,Object(c["createElementVNode"])("div",s,[Object(c["createElementVNode"])("section",d,[Object(c["createElementVNode"])("h3",u,Object(c["toDisplayString"])(e.$i18n.$t("setUpVia")),1),Object(c["createElementVNode"])("div",b,[Object(c["createVNode"])(E,{index:1,title:e.$i18n.$t("clickShare"),image:"entry/set-up-step1.png"},null,8,["title"]),Object(c["createVNode"])(E,{index:2,title:e.$i18n.$t("chooseAdd"),image:"entry/set-up-step2.png"},null,8,["title"]),Object(c["createVNode"])(E,{index:3,title:e.$i18n.$t("clickAdd"),image:"entry/set-up-step3.png"},null,8,["title"])])]),Object(c["createElementVNode"])("section",p,[Object(c["createElementVNode"])("h3",O,Object(c["toDisplayString"])(e.$i18n.$t("threeStep")),1),Object(c["createElementVNode"])("div",j,[Object(c["createVNode"])(E,{index:1,title:e.$i18n.$t("entryStep1Title"),subTitle:e.$i18n.$t("entryStep1Sub"),image:"entry/step-1.png"},null,8,["title","subTitle"]),Object(c["createVNode"])(E,{index:2,title:e.$i18n.$t("entryStep2Title"),subTitle:e.$i18n.$t("entryStep2Sub"),image:"entry/step-2.png"},null,8,["title","subTitle"]),Object(c["createVNode"])(E,{index:3,title:e.$i18n.$t("entryStep3Title"),subTitle:e.$i18n.$t("entryStep3Sub"),image:"entry/step-3.png"},null,8,["title","subTitle"])])]),Object(c["createVNode"])(w),Object(c["createElementVNode"])("section",f,[Object(c["createElementVNode"])("h3",m,Object(c["toDisplayString"])(e.$i18n.$t("fq")),1),Object(c["createElementVNode"])("div",v,[Object(c["createVNode"])(B,{title:e.$i18n.$t("fqTitle1"),content:e.$i18n.$t("fqContent1"),isOpened:1===e.currentFAQ,onClick:t[0]||(t[0]=function(t){return e.setCurrentFAQ(1)})},null,8,["title","content","isOpened"]),Object(c["createVNode"])(B,{title:e.$i18n.$t("fqTitle2"),content:e.$i18n.$t("fqContent2"),isOpened:2===e.currentFAQ,onClick:t[1]||(t[1]=function(t){return e.setCurrentFAQ(2)})},null,8,["title","content","isOpened"]),Object(c["createVNode"])(B,{title:e.$i18n.$t("fqTitle3"),content:e.$i18n.$t("fqContent3").format({project:e.project_name}),isOpened:3===e.currentFAQ,onClick:t[2]||(t[2]=function(t){return e.setCurrentFAQ(3)})},null,8,["title","content","isOpened"]),Object(c["createVNode"])(B,{title:e.$i18n.$t("fqTitle4").format({project:e.project_name}),content:e.$i18n.$t("fqContent4").format({project:e.project_name}),isOpened:4===e.currentFAQ,onClick:t[3]||(t[3]=function(t){return e.setCurrentFAQ(4)})},null,8,["title","content","isOpened"]),Object(c["createVNode"])(B,{title:e.$i18n.$t("fqTitle5"),content:e.$i18n.$t("fqContent5"),isOpened:5===e.currentFAQ,onClick:t[4]||(t[4]=function(t){return e.setCurrentFAQ(5)})},null,8,["title","content","isOpened"]),Object(c["createVNode"])(B,{title:e.$i18n.$t("fqTitle6"),content:e.$i18n.$t("fqContent6"),isOpened:6===e.currentFAQ,onClick:t[5]||(t[5]=function(t){return e.setCurrentFAQ(6)})},null,8,["title","content","isOpened"])])]),e.IS_MOBILE_APP?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("section",g,[Object(c["createElementVNode"])("h3",C,Object(c["toDisplayString"])(e.$i18n.$t("playNow")),1),e.is550?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",N,[Object(c["createVNode"])($,{position:"bottom","offset-bottom":24,onScroll:e.onScroll},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["get-app-form-card",{"is-hidden":e.scrollTop<=300}])},[Object(c["createVNode"])(V)],2)]})),_:1},8,["onScroll"])])):Object(c["createCommentVNode"])("",!0),e.is425?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",S,[Object(c["createVNode"])($,{position:"bottom","offset-bottom":24,onScroll:e.onScroll},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["get-app-form-card",{"is-hidden":e.scrollTop<=300}])},[Object(c["createVNode"])(V)],2)]})),_:1},8,["onScroll"])])):Object(c["createCommentVNode"])("",!0),e.is375?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",k,[Object(c["createVNode"])($,{position:"bottom","offset-bottom":24,onScroll:e.onScroll},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["get-app-form-card",{"is-hidden":e.scrollTop<=300}])},[Object(c["createVNode"])(V)],2)]})),_:1},8,["onScroll"])])):Object(c["createCommentVNode"])("",!0),e.is320?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",y,[Object(c["createVNode"])($,{position:"bottom","offset-bottom":24,onScroll:e.onScroll},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["get-app-form-card",{"is-hidden":e.scrollTop<=300}])},[Object(c["createVNode"])(V)],2)]})),_:1},8,["onScroll"])])):Object(c["createCommentVNode"])("",!0)]))])])],64)}var _=n("b192"),h=n("b7f3"),E=n("d734"),w=function(e){return Object(c["pushScopeId"])("data-v-2a62f5e0"),e=e(),Object(c["popScopeId"])(),e},B={class:"features bg-gradient-reverse bg"},$={class:"groups"},x={class:"groups__group"},T=w((function(){return Object(c["createElementVNode"])("div",{class:"texts-wrapper"},[Object(c["createElementVNode"])("h3",null,"11 CRORE+"),Object(c["createElementVNode"])("h4",null,"DAILY USER")],-1)})),I={class:"groups__group"},F=w((function(){return Object(c["createElementVNode"])("div",{class:"texts-wrapper"},[Object(c["createElementVNode"])("h3",null,"1000+"),Object(c["createElementVNode"])("h4",null,"DAILY CONTESTS")],-1)}));function A(e,t,n,o,r,a){var i=Object(c["resolveComponent"])("TransparentIcon");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",B,[Object(c["createElementVNode"])("div",$,[Object(c["createElementVNode"])("div",x,[Object(c["createVNode"])(i,{icon:"members",size:"48"}),T]),Object(c["createElementVNode"])("div",I,[Object(c["createVNode"])(i,{icon:"ticket",size:"48"}),F])])])}var P=n("2e9b"),z=Object(c["defineComponent"])({name:"Features",components:{TransparentIcon:P["a"]},setup:function(){return{}}}),D=(n("267b"),n("6b0d")),q=n.n(D);const Q=q()(z,[["render",A],["__scopeId","data-v-2a62f5e0"]]);var R=Q,L=n("7a2f"),U=n("856e"),W=n("d70b"),J=n("0032"),M=n("80b7"),H={class:"review-section"},X={class:"section-title"},Y={key:0,class:"loading-wrapper"},G={class:"witness-wrapper"};function K(e,t,n,o,r,a){var i=Object(c["resolveComponent"])("van-loading"),l=Object(c["resolveComponent"])("Witness");return Object(c["openBlock"])(),Object(c["createElementBlock"])("section",H,[Object(c["createElementVNode"])("h3",X,"Players Love "+Object(c["toDisplayString"])(e.PROJECT),1),e.isLoading?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",Y,[Object(c["createVNode"])(i,{color:"#325FFF"})])):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("div",G,[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(e.reviews,(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])(l,{key:t.id,avatarUrl:t.image,name:t.winner,content:e.projectNameInContentFormat(t.content)},null,8,["avatarUrl","name","content"])})),128))])])}var Z=n("7580"),ee=(n("96cf"),n("3bac")),te=n("e824"),ne={class:"card__user bg-gradient"},ce=["src"],oe={class:"card__user__name"},re={class:"card__content"};function ae(e,t,n,o,r,a){var i=Object(c["resolveComponent"])("ProjectImage"),l=Object(c["resolveComponent"])("PanelCard");return Object(c["openBlock"])(),Object(c["createBlock"])(l,{class:"card"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",ne,[Object(c["createElementVNode"])("div",{class:Object(c["normalizeClass"])(["card__user__avatar",{"bg-primary":!e.avatarUrl}])},[e.avatarUrl?(Object(c["openBlock"])(),Object(c["createElementBlock"])("img",{key:0,src:"data:image/png;base64,"+e.avatarUrl,alt:""},null,8,ce)):(Object(c["openBlock"])(),Object(c["createBlock"])(i,{key:1,name:"avatar.svg",height:"48",width:"48"}))],2),Object(c["createElementVNode"])("div",oe,Object(c["toDisplayString"])(e.title),1)]),Object(c["createElementVNode"])("p",re,Object(c["toDisplayString"])(e.content),1)]})),_:1})}n("ac1f"),n("5319"),n("5b81"),n("b0c0");var ie=n("8f6f"),le=n("57ab"),se=Object(c["defineComponent"])({name:"Witness",components:{FlatCard:ie["a"],PanelCard:M["a"],ProjectImage:le["a"]},props:{name:{type:String,default:""},avatarUrl:{type:String,default:""},content:{type:String,default:""}},setup:function(e){var t=Object(c["computed"])((function(){return e.name.replaceAll("-"," ")}));return{title:t}}});n("e84a");const de=q()(se,[["render",ae],["__scopeId","data-v-1c547dac"]]);var ue=de,be=n("e4fa"),pe=Object(c["defineComponent"])({name:"ReviewSection",components:{Witness:ue},setup:function(){var e=Object(c["reactive"])({reviews:[],isLoading:!1}),t=function(){var t=Object(Z["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,ee["a"].getReview({per_page:3});case 4:n=t.sent,e.reviews=n.data,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](1),te["a"].errorMessageToast(t.t0);case 11:return t.prev=11,e.isLoading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return Object(c["onMounted"])((function(){t()})),Object(_["a"])(Object(_["a"])({},Object(c["toRefs"])(e)),{},{PROJECT:Object(c["capitalize"])("pavo11"),projectNameInContentFormat:be["a"]})}});n("2052");const Oe=q()(pe,[["render",K],["__scopeId","data-v-1f39087f"]]);var je=Oe,fe=n("6c02"),me=n("835d"),ve=Object(c["defineComponent"])({name:"Entry",components:{DownloadApp:me["a"],SvgIcon:J["a"],Accordion:U["a"],Steps:L["a"],Features:R,Jumbotron:E["a"],PanelCard:M["a"],ReviewSection:je},setup:function(){var e=Object(c["reactive"])({currentFAQ:void 0,is550:!0,is425:!1,is375:!1,is320:!1,scrollTop:0}),t=function(t){e.currentFAQ!==t?e.currentFAQ=t:e.currentFAQ=void 0},n=function(){e.is550=!1,e.is425=!1,e.is375=!1,e.is320=!1},o=function(t){var n=t.scrollTop;t.isFixed;e.scrollTop=n};return Object(c["onMounted"])((function(){window.addEventListener("resize",(function(){window.innerWidth>550&&(n(),e.is550=!0),window.innerWidth<=425&&(n(),e.is425=!0),window.innerWidth<=375&&(n(),e.is375=!0),window.innerWidth<=320&&(n(),e.is320=!0)}))})),Object(fe["onBeforeRouteLeave"])((function(){window.removeEventListener("resize",(function(){}))})),Object(_["a"])(Object(_["a"])({},Object(c["toRefs"])(e)),{},{RouterNames:h["a"],IS_MOBILE_APP:W["m"],setCurrentFAQ:t,onScroll:o,project_name:"pavo11"})}});n("feb1");const ge=q()(ve,[["render",V],["__scopeId","data-v-b3b06762"]]);t["default"]=ge},"4d37":function(e,t,n){},5667:function(e,t,n){"use strict";n("2355")},"61d1":function(e,t,n){"use strict";n("c1ca")},"65b6":function(e,t,n){e.exports=n.p+"img/index_bg.9176f133.png"},7145:function(e,t,n){"use strict";n("883e")},"765e":function(e,t,n){"use strict";n("ad50")},"7a2f":function(e,t,n){"use strict";var c=n("f2bf"),o={key:0,class:"step__title"},r={class:"step__card__text"},a={class:"hgroup"},i={key:0,class:"step__title"},l={class:"step__card__title"},s={class:"step__card__subtitle"};function d(e,t,n,d,u,b){var p=Object(c["resolveComponent"])("ProjectImage"),O=Object(c["resolveComponent"])("FlatCard"),j=Object(c["resolveComponent"])("PanelCard");return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["step","step--".concat(e.type)])},["vertical"===e.type?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,"－ STEP "+Object(c["toDisplayString"])(e.index)+" －",1)):Object(c["createCommentVNode"])("",!0),Object(c["createVNode"])(j,{class:"step__card"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",a,["horizontal"===e.type?(Object(c["openBlock"])(),Object(c["createElementBlock"])("h4",i,"STEP "+Object(c["toDisplayString"])(e.index),1)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("h4",l,Object(c["toDisplayString"])(e.title),1)]),Object(c["createElementVNode"])("div",s,Object(c["toDisplayString"])(e.subTitle),1)]),e.image?(Object(c["openBlock"])(),Object(c["createBlock"])(O,{key:0,class:"step__card__box",hasShadow:!0},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])(p,{name:e.image,alt:e.title},null,8,["name","alt"])]})),_:1})):Object(c["createCommentVNode"])("",!0)]})),_:1})],2)}n("a9e3");var u=n("80b7"),b=n("8f6f"),p=n("57ab"),O=Object(c["defineComponent"])({name:"Steps",components:{FlatCard:b["a"],PanelCard:u["a"],ProjectImage:p["a"]},props:{type:{type:String,default:"vertical",validator:function(e){return-1!==["vertical","horizontal"].indexOf(e)}},index:{type:Number,required:!0},title:{type:String,required:!0},subTitle:{type:String,default:""},image:{type:String,default:""}},setup:function(){return{}}}),j=(n("5667"),n("6b0d")),f=n.n(j);const m=f()(O,[["render",d],["__scopeId","data-v-d4752cc0"]]);t["a"]=m},"80b7":function(e,t,n){"use strict";var c=n("f2bf");function o(e,t,n,o,r,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["panel-card shader-smooth",{rounded:e.rounded}])},[Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)}var r=Object(c["defineComponent"])({name:"PanelCard",props:{rounded:{type:Boolean,default:!0}},setup:function(){return{}}}),a=(n("7145"),n("6b0d")),i=n.n(a);const l=i()(r,[["render",o],["__scopeId","data-v-cef60b30"]]);t["a"]=l},"856e":function(e,t,n){"use strict";var c=n("f2bf"),o={class:"flex justify-between items-center cursor-pointer"},r={key:0,class:"card__arrow"},a={key:1,class:"card__arrow"},i={key:0,class:"card__content"};function l(e,t,n,l,s,d){var u=Object(c["resolveComponent"])("svg-icon"),b=Object(c["resolveComponent"])("PanelCard");return Object(c["openBlock"])(),Object(c["createBlock"])(b,{class:"card"},{default:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",o,[Object(c["createElementVNode"])("h4",{class:Object(c["normalizeClass"])(["card__title",{"mb-2":e.isOpened}])},Object(c["toDisplayString"])(e.title),3),e.isOpened?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",r,[Object(c["createVNode"])(u,{name:"arrow-down"})])),e.isOpened?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",a,[Object(c["createVNode"])(u,{name:"arrow-up"})])):Object(c["createCommentVNode"])("",!0)]),e.isOpened?(Object(c["openBlock"])(),Object(c["createElementBlock"])("p",i,Object(c["toDisplayString"])(e.content),1)):Object(c["createCommentVNode"])("",!0)]})),_:1})}var s=n("2e9b"),d=n("80b7"),u=n("8f6f"),b=n("0032"),p=Object(c["defineComponent"])({name:"Accordion",components:{SvgIcon:b["a"],FlatCard:u["a"],PanelCard:d["a"],TransparentIcon:s["a"]},props:{title:{type:String,required:!0},content:{type:String,required:!0},isOpened:{type:Boolean,required:!0,default:!1}},setup:function(){return{}}}),O=(n("61d1"),n("6b0d")),j=n.n(O);const f=j()(p,[["render",l],["__scopeId","data-v-7e2312ca"]]);t["a"]=f},"883e":function(e,t,n){},"8f6f":function(e,t,n){"use strict";var c=n("f2bf");function o(e,t,n,o,r,a){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{class:Object(c["normalizeClass"])(["flat-card",["flat-card--".concat(e.type),{"flat-card--shadow":e.hasShadow}]])},[Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)}var r=Object(c["defineComponent"])({name:"FlatCard",props:{type:{type:String,default:"light",validator:function(e){return-1!==["white","light","dark","normal","primary","secondary"].indexOf(e)}},hasShadow:{type:Boolean,default:!0}},setup:function(){return{}}}),a=(n("a6d3"),n("6b0d")),i=n.n(a);const l=i()(r,[["render",o],["__scopeId","data-v-0676403b"]]);t["a"]=l},9402:function(e,t,n){},9897:function(e,t,n){},a4a2:function(e,t,n){"use strict";n("9897")},a6d3:function(e,t,n){"use strict";n("a9d6")},a9d6:function(e,t,n){},ad50:function(e,t,n){},c1ca:function(e,t,n){},d734:function(e,t,n){"use strict";var c=n("f2bf"),o={class:"bg-ci bg how-to-play"},r={class:"header-offset"},a={class:"title"},i={class:"sub-title"};function l(e,t,n,l,s,d){return Object(c["openBlock"])(),Object(c["createElementBlock"])("div",o,[Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("h2",a,Object(c["toDisplayString"])(e.title),1),Object(c["createElementVNode"])("p",i,Object(c["toDisplayString"])(e.subTitle),1),Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)])])}var s=Object(c["defineComponent"])({name:"Jumbotron",props:{title:{type:String,default:""},subTitle:{type:String,default:""}},setup:function(){return{}}}),d=(n("a4a2"),n("6b0d")),u=n.n(d);const b=u()(s,[["render",l],["__scopeId","data-v-4214989b"]]);t["a"]=b},e4fa:function(e,t,n){"use strict";n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return j})),n.d(t,"a",(function(){return f}));n("99af"),n("ac1f"),n("5319"),n("5b81");var c=n("e9a7"),o=n.n(c),r=n("d70b"),a=n("a5de"),i=n("5198"),l=n("ac84"),s=n("2d58"),d=(n("38cf"),n("6612")),u=n.n(d),b=function(){function e(){Object(l["a"])(this,e),this.numeral=u.a}return Object(s["a"])(e,[{key:"getNumber",value:function(e){return u()(e).value()}},{key:"asFloat",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return u()(e).format("0,0.".concat("0".repeat(t)),Math.floor)}},{key:"asReadableDollar",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return"".concat(a["n"]," ").concat(this.asFloat(e,t))}}]),e}(),p=new b,O=function(e,t){switch(t){case i["d"].CASH:return"".concat(a["n"]," ").concat(p.asFloat(e,a["o"]));case i["d"].EXP:return"".concat(e," ").concat(i["d"][t]);case i["d"].COINS:return"".concat(e," ").concat(o()(i["d"][t]));default:return""}},j=function(e){switch(e){case i["d"].CASH:return"cash";case i["d"].EXP:return"exp";case i["d"].COINS:return"coin";default:return""}},f=function(e){return e.replaceAll("${PRODUCT}",o()("pavo11")).replaceAll("${WEBSITE}",r["c"])}},e84a:function(e,t,n){"use strict";n("9402")},feb1:function(e,t,n){"use strict";n("21fa")}}]);