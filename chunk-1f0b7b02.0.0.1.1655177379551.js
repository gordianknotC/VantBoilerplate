(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f0b7b02"],{"07a4":function(e,t,n){"use strict";var a=n("f2bf");function c(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("van-tag");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{size:"medium",round:"",color:e.theme.color,"text-color":e.theme.textColor},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.theme.text),1)]})),_:1},8,["color","text-color"])}var o=n("2fe6"),r=(n("a9e3"),n("a5de")),i=n("6034"),l=Object(a["defineComponent"])({name:"VerifyStatusTag",props:{status:{type:Number,default:r["m"].UNVERIFIED}},setup:function(e){var t,n=Object(a["computed"])((function(){return l[e.status]})),c=Object(i["a"])(),l=(t={},Object(o["a"])(t,r["m"].SUCCEED,{color:"rgb(49,208,170)",textColor:"rgb(255,255,255)",text:c.$t("verified")}),Object(o["a"])(t,r["m"].PENDING,{color:"rgb(237,172,75)",textColor:"rgb(255,255,255)",text:c.$t("verifying")}),Object(o["a"])(t,r["m"].DATA_FAILED,{color:"rgb(237,75,158)",textColor:"rgb(255,255,255)",text:c.$t("cFailed")}),Object(o["a"])(t,r["m"].IMAGE_FAILED,{color:"rgb(237,75,158)",textColor:"rgb(255,255,255)",text:c.$t("cFailed")}),Object(o["a"])(t,r["m"].UNVERIFIED,{color:"rgb(237,75,158)",textColor:"rgb(255,255,255)",text:c.$t("unverified")}),t);return{theme:n}}}),s=n("6b0d"),u=n.n(s);const d=u()(l,[["render",c]]);t["a"]=d},"07ec":function(e,t,n){"use strict";n("274b")},"0ec7":function(e,t,n){"use strict";var a=n("f2bf"),c={class:"vip-task"},o={class:"vip-task-detail"},r={class:"vip-task-detail--left"},i={class:"vip-task-detail--name"},l={class:"vip-task-detail--value"},s={class:"vip-task-detail--right"},u=Object(a["createTextVNode"])("Go");function d(e,t,n,d,b,p){var f=Object(a["resolveComponent"])("PanelIcon"),m=Object(a["resolveComponent"])("FlatButton");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(f,{class:"mr-4",icon:e.iconName,size:32},null,8,["icon"]),Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",i,Object(a["toDisplayString"])(e.task_title),1),Object(a["createElementVNode"])("div",l,Object(a["toDisplayString"])(e.task_description),1)]),Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(m,{disabled:2==e.task_status,onClick:e.goTask},{default:Object(a["withCtx"])((function(){return[u]})),_:1},8,["disabled","onClick"])])])])}var b=n("7580"),p=(n("96cf"),n("a9e3"),n("d3b7"),n("99af"),n("2165")),f=n("ed48"),m=n("6c02"),O=n("b7f3"),j=n("5198"),v=n("b047"),g=n.n(v),h=n("0613"),C=n("3bac"),E=n("d70b"),N=n("e824"),x=Object(a["defineComponent"])({name:"VipTask",components:{FlatButton:f["a"],PanelIcon:p["a"]},props:{iconName:{type:String,default:"wallet"},task_title:{type:String},task_description:{type:String},task_id:{type:Number},task_status:{type:Number}},setup:function(e){var t=Object(a["reactive"])({loginGameLoading:!1,currentSportId:j["g"].CRICKET}),n=Object(h["b"])(),c=n.user,o=n.global,r=Object(a["computed"])((function(){return c.getters.isLogin.value})),i=Object(m["useRouter"])(),l=g()(Object(b["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.actions.updateRefreshToken();case 2:case"end":return e.stop()}}),e)}))),3e5,{leading:!0,trailing:!1}),s=function(e){r.value?t.loginGameLoading||(l(),u(e)):i.push({name:O["a"].signIn})},u=g()((function(e){t.loginGameLoading=!0,C["a"].postLoginGame({provider_id:e}).then((function(n){var a=n.data.login_url,c={id:e,url:a,lang:o.getters.currentLang.value,sportId:t.currentSportId};E["m"]?i.push({name:O["a"].gameIframe,params:c}):window.location.href="".concat(a,"/").concat(o.getters.currentLang.value,"/").concat(t.currentSportId)})).catch((function(e){console.error(e),N["a"].errorMessageToast(e)})).finally((function(){t.loginGameLoading=!1}))}),1e3,{leading:!0,trailing:!1}),d=function(){switch(e.task_id){case 1:i.push({name:O["a"].profileVerification});break;case 2:s(1);break;case 3:i.push({name:O["a"].wheelPage});break;case 4:i.push({name:O["a"].playLotto});break}};return{goTask:d}}}),y=(n("07ec"),n("6b0d")),k=n.n(y);const V=k()(x,[["render",d],["__scopeId","data-v-1213c7a4"]]);t["a"]=V},"1e17":function(e,t,n){"use strict";n("f8fe")},"274b":function(e,t,n){},"46e6":function(e,t){e.exports="data:image/png;base64,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"},4713:function(e,t,n){"use strict";n("93fa")},"4bbb":function(e,t,n){"use strict";var a=n("f2bf"),c={class:"container"},o={class:"container-icon"},r={class:"container-info"};function i(e,t,n,i,l,s){var u=Object(a["resolveComponent"])("svg-icon"),d=Object(a["resolveComponent"])("PanelCard");return Object(a["openBlock"])(),Object(a["createBlock"])(d,null,{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",o,[Object(a["createVNode"])(u,{name:e.iconName,width:"100%",height:"100%"},null,8,["name"])]),Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.info),1)])])]})),_:1})}n("a9e3");var l=n("46e6"),s=n.n(l),u=n("0032"),d=n("a5de"),b=Object(a["defineComponent"])({name:"VipBenefitsCard",components:{SvgIcon:u["a"]},props:{lv:{type:Number,default:0},daily_bonus:{type:Number,default:300},daily_withdraw:{type:Number,default:2},birthday_bonus:{type:Number,default:1e3},item:{type:Number},cash:{type:Number,default:37},coin:{type:Number,default:1e3}},setup:function(){return{cashSymbol:d["n"],SuccessIMG:s.a}}}),p=(n("1e17"),n("6b0d")),f=n.n(p);const m=f()(b,[["render",i],["__scopeId","data-v-291103c4"]]);t["a"]=m},"51aa":function(e,t,n){"use strict";n.r(t);var a=n("f2bf"),c=function(e){return Object(a["pushScopeId"])("data-v-867f365c"),e=e(),Object(a["popScopeId"])(),e},o={class:"p-6"},r=c((function(){return Object(a["createElementVNode"])("div",{class:"title"},"Beginner Task",-1)})),i={class:"list-tiles"},l=c((function(){return Object(a["createElementVNode"])("span",null,"Claim",-1)})),s={class:"flex flex-row justify-start items-center"},u=c((function(){return Object(a["createElementVNode"])("span",null,"1000 EXP",-1)})),d={key:0},b=c((function(){return Object(a["createElementVNode"])("span",null,"verify",-1)})),p={key:1},f=c((function(){return Object(a["createElementVNode"])("span",null,"Claim",-1)})),m=[f],O={class:"flex flex-row justify-start items-center"},j=c((function(){return Object(a["createElementVNode"])("span",null,"3000 EXP",-1)})),v={key:0},g=c((function(){return Object(a["createElementVNode"])("span",null,"Add now",-1)})),h={key:1},C=c((function(){return Object(a["createElementVNode"])("span",null,"Claim",-1)})),E=[C],N={class:"flex flex-row justify-start items-center"},x=c((function(){return Object(a["createElementVNode"])("span",null,"500 EXP",-1)})),y={key:0},k=c((function(){return Object(a["createElementVNode"])("span",null,"Join now",-1)})),V={key:1},w=c((function(){return Object(a["createElementVNode"])("span",null,"Claim",-1)})),B=[w],S={class:"flex flex-row justify-start items-center"},U=c((function(){return Object(a["createElementVNode"])("span",null,"200 EXP",-1)})),A={key:0},T=c((function(){return Object(a["createElementVNode"])("span",null,"Withdraw",-1)})),R={key:1},I=c((function(){return Object(a["createElementVNode"])("span",null,"Claim",-1)})),z=[I],K={class:"flex flex-row justify-start items-center"},F=c((function(){return Object(a["createElementVNode"])("span",null,"300 EXP",-1)})),G=c((function(){return Object(a["createElementVNode"])("div",{class:"title mb-4"},"Daily Task",-1)})),D=c((function(){return Object(a["createElementVNode"])("span",null,"Claim",-1)})),P={class:"flex flex-row justify-start items-center"},_=c((function(){return Object(a["createElementVNode"])("span",null,"100 EXP",-1)})),M={class:"flex flex-row justify-start items-center"};function L(e,t,n,c,f,C){var w=Object(a["resolveComponent"])("BaseNavBar"),I=Object(a["resolveComponent"])("VipMyExpCard"),L=Object(a["resolveComponent"])("svgIcon"),J=Object(a["resolveComponent"])("ListTileCardPanelButton"),q=Object(a["resolveComponent"])("FlatButton"),Q=Object(a["resolveComponent"])("AppPageTemplate");return Object(a["openBlock"])(),Object(a["createBlock"])(Q,null,{header:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(w,{"left-text":e.$i18n.$t("vipHowToGetExp")},null,8,["left-text"])]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",o,[Object(a["createVNode"])(I,{thisMonthExp:e.this_month_exp},null,8,["thisMonthExp"]),r,Object(a["createElementVNode"])("div",i,[Object(a["createVNode"])(J,{icon:"prize-2",title:e.$i18n.$t("signUp"),label:"_",onClick:t[0]||(t[0]=function(){})},{label:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(L,{name:"exp",width:"1rem",height:"1rem"}),u])]})),default:Object(a["withCtx"])((function(){return[l]})),_:1},8,["title"]),Object(a["createVNode"])(J,{icon:"verify",title:e.$i18n.$t("verifyKYC"),label:"_",onClick:e.onGotoKYC},{label:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",O,[Object(a["createVNode"])(L,{name:"exp",width:"1rem",height:"1rem"}),j])]})),default:Object(a["withCtx"])((function(){return[e.kyc?(Object(a["openBlock"])(),Object(a["createElementBlock"])("section",p,m)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("section",d,[Object(a["createVNode"])(q,{size:"small",color:"primary"},{default:Object(a["withCtx"])((function(){return[b]})),_:1})]))]})),_:1},8,["title","onClick"]),Object(a["createVNode"])(J,{icon:"deposit",title:e.$i18n.$t("addCashFromTheFirstTime"),label:"_",onClick:e.onGotoAddCash},{label:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",N,[Object(a["createVNode"])(L,{name:"exp",width:"1rem",height:"1rem"}),x])]})),default:Object(a["withCtx"])((function(){return[e.first_deposit?(Object(a["openBlock"])(),Object(a["createElementBlock"])("section",h,E)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("section",v,[Object(a["createVNode"])(q,{size:"small",color:"primary"},{default:Object(a["withCtx"])((function(){return[g]})),_:1})]))]})),_:1},8,["title","onClick"]),Object(a["createVNode"])(J,{icon:"match",title:e.$i18n.$t("joinYourFirstContest"),label:"_",onClick:e.onGotoJoinFantasyee},{label:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",S,[Object(a["createVNode"])(L,{name:"exp",width:"1rem",height:"1rem"}),U])]})),default:Object(a["withCtx"])((function(){return[e.first_fantasyee_bet?(Object(a["openBlock"])(),Object(a["createElementBlock"])("section",V,B)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("section",y,[Object(a["createVNode"])(q,{size:"small",color:"primary"},{default:Object(a["withCtx"])((function(){return[k]})),_:1})]))]})),_:1},8,["title","onClick"]),Object(a["createVNode"])(J,{icon:"prize",title:e.$i18n.$t("winForTheFirstTime"),label:"_",onClick:e.onGotoFantasyeeWithdraw},{label:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",K,[Object(a["createVNode"])(L,{name:"exp",width:"1rem",height:"1rem"}),F])]})),default:Object(a["withCtx"])((function(){return[e.first_fantasyee_win?(Object(a["openBlock"])(),Object(a["createElementBlock"])("section",R,z)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("section",A,[Object(a["createVNode"])(q,{size:"small",color:"primary"},{default:Object(a["withCtx"])((function(){return[T]})),_:1})]))]})),_:1},8,["title","onClick"]),G,Object(a["createVNode"])(J,{icon:"logout",title:e.$i18n.$t("dailyLogin"),label:"_",onClick:t[1]||(t[1]=function(){})},{label:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",P,[Object(a["createVNode"])(L,{name:"exp",width:"1rem",height:"1rem"}),_])]})),default:Object(a["withCtx"])((function(){return[D]})),_:1},8,["title"]),Object(a["createVNode"])(J,{icon:"contest",title:e.$i18n.$t("joinContests"),label:"(1 Rupee = 1 Exp)",onClick:t[2]||(t[2]=function(){})},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",M,[Object(a["createVNode"])(L,{name:"exp",width:"1rem",height:"1rem"}),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.fantasyee_exp_today)+"/3000 EXP",1)])]})),_:1},8,["title"])])])]})),_:1})}var J=n("b192"),q=n("7580"),Q=(n("96cf"),n("d3b7"),n("159b"),n("b64b"),n("2383")),Y=n("4c65"),W=n("0ec7"),H=n("4bbb"),X=n("3bac"),Z=function(e){return Object(a["pushScopeId"])("data-v-54f0b9c7"),e=e(),Object(a["popScopeId"])(),e},$={class:"flex flex-col"},ee={class:"vipcard-container"},te={class:"vipcard-row-desc"},ne={class:"vipcard-row-desc"},ae={class:"vipcard-exp-bar"},ce=Z((function(){return Object(a["createElementVNode"])("div",{class:"flex justify-center"},null,-1)}));function oe(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("VipHorizontalGauge"),l=Object(a["resolveComponent"])("PanelCard");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",$,[Object(a["createVNode"])(l,null,{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["vipcard",e.gradientClass()]),style:Object(a["normalizeStyle"])({height:e.height})},[Object(a["createElementVNode"])("div",ee,[Object(a["createElementVNode"])("div",te,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["vipcard-row-desc--bold",e.textClass()])},Object(a["toDisplayString"])(e.$i18n.$t("myExp")),3),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["vipcard-row-desc--bold",e.textClass()])},Object(a["toDisplayString"])(e.$i18n.$t("expThisMonth")),3)]),Object(a["createElementVNode"])("div",ne,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["vipcard-row-desc--normal",e.textClass()])},Object(a["toDisplayString"])(e.currentExpLabel),3),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["vipcard-row-desc--normal",e.textClass()])},Object(a["toDisplayString"])(e.thisMonthGetExp),3)]),Object(a["createElementVNode"])("div",ae,[e.isBonusDataReady?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:0,canRender:!0,percentageGetter:e.percentageGetter,fillColor:e.progressBarFillColor,displayedLevel:e.currentLevel,"onUpdate:displayedLevel":t[0]||(t[0]=function(t){return e.currentLevel=t}),experience:e.currentExp,"onUpdate:experience":t[1]||(t[1]=function(t){return e.currentExp=t})},null,8,["percentageGetter","fillColor","displayedLevel","experience"])):Object(a["createCommentVNode"])("",!0)]),ce])],6)]})),_:1})])}n("a9e3");var re=n("80b7"),ie=n("2165"),le=n("6ce2"),se=n("1988"),ue=n("a5de"),de=n("52e5"),be=n("880e"),pe=n("d469"),fe=Object(a["defineComponent"])({name:"VipMyExpCard",components:{PanelIcon:ie["a"],PanelCard:re["a"],AvatarImage:le["a"],VipHorizontalGauge:de["a"],PanelButton:be["a"],ListTileButton:pe["a"]},props:{height:{type:String,default:"10rem"},thisMonthExp:{type:Number,required:!0}},emits:[],setup:function(e,t){t.emit;var n=Object(a["toRef"])(se["b"].vipGauge,"expLabel"),c=Object(a["toRef"])(se["b"].vipGauge,"currentLevel"),o=Object(a["toRef"])(se["b"].vipGauge,"experience"),r=Object(a["computed"])((function(){return"".concat(e.thisMonthExp,"EXP")})),i=Object(a["computed"])((function(){se["b"].vipGauge.currentLevel.value;return ue["l"][c.value].barColor})),l=function(){return se["b"].vipGauge.getCurrentPercentageByLevel(c.value)},s=function(){return se["b"].vipGauge.getIconNameByLevel(c.value)},u=function(){return se["b"].vipGauge.getGradientColor(c.value)},d=Object(a["computed"])((function(){se["b"].vipGauge.currentLevel.value;var e=se["b"].vipGauge.getVipStatus(c.value);return e})),b=function(){return ue["l"][c.value].textClass},p=Object(a["toRef"])(se["b"].vipGauge.state,"ready");return Object(a["onMounted"])(Object(q["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))),{getIconName:s,gradientClass:u,vipStatus:d,thisMonthGetExp:r,textClass:b,EVIPStatus:ue["g"],percentageGetter:l,currentLevel:c,currentExpLabel:n,currentExp:o,progressBarFillColor:i,isBonusDataReady:p}}}),me=(n("bef7"),n("6b0d")),Oe=n.n(me);const je=Oe()(fe,[["render",oe],["__scopeId","data-v-54f0b9c7"]]);var ve=je,ge=n("33e5"),he={class:"card shader-large-shadow"},Ce={key:1},Ee={class:"circle-highlight"},Ne={class:"flex justify-end items-center h-full"};function xe(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("PanelIcon"),l=Object(a["resolveComponent"])("van-cell");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",he,[Object(a["createVNode"])(l,{title:e.title,label:e.label},{label:Object(a["withCtx"])((function(){return[e.label?Object(a["renderSlot"])(e.$slots,"label",{key:0},(function(){return[Object(a["createElementVNode"])("h3",null,Object(a["toDisplayString"])(e.label),1)]}),!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",Ce))]})),icon:Object(a["withCtx"])((function(){return[Object(a["renderSlot"])(e.$slots,"icon",{},(function(){return[Object(a["createElementVNode"])("div",Ee,[Object(a["createVNode"])(i,{size:40,icon:e.icon},null,8,["icon"])])]}),!0)]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",Ne,[Object(a["renderSlot"])(e.$slots,"default",{},void 0,!0)])]})),_:3},8,["title","label"])])}var ye=Object(a["defineComponent"])({name:"ListTileCardPanelButton",components:{PanelIcon:ie["a"]},props:{title:{type:String,required:!0},label:{type:String},icon:{type:String,required:!0}},setup:function(){}});n("6ffd");const ke=Oe()(ye,[["render",xe],["__scopeId","data-v-2944151b"]]);var Ve,we=ke,Be=n("07a4"),Se=n("ed48"),Ue=n("b7f3"),Ae=n("ac84"),Te=n("2d58"),Re=(n("99af"),n("d70b")),Ie=n("2ef0"),ze=n("e824"),Ke=n("b51d"),Fe=function(){function e(){var t=this;Object(Ae["a"])(this,e),this.state=Object(a["reactive"])({loginGameLoading:!1,isFantasyeeOpened:!1}),this.loginGame=Object(Ie["debounce"])((function(e){t.state.loginGameLoading=!0,X["a"].postLoginGame({provider_id:e}).then((function(n){Re["m"]?se["b"].router.push({name:Ue["a"].gameIframe,params:{id:e,url:n.data.login_url,lang:se["b"].languageService.language}}):window.location.href="".concat(n.data.login_url,"/").concat(se["b"].languageService.language),t.state.isFantasyeeOpened=!0})).catch((function(e){ze["a"].errorMessageToast(e)})).finally((function(){t.state.loginGameLoading=!1}))}),1e3,{leading:!0,trailing:!1}),this.goDreamUrl=function(e){t.state.loginGameLoading?console.error("不能loginGame"):(console.log("可以loginGame"),t.loginGame(e))},Object(a["watch"])((function(){return t.state.isFantasyeeOpened}),(function(){var e,n;t.state.isFantasyeeOpened?null===(e=t._onFantasyOpen)||void 0===e||e.call(t):null===(n=t._onFantasyClose)||void 0===n||n.call(t)}))}return Object(Te["a"])(e,[{key:"onFantasyOpen",value:function(e){this._onFantasyOpen=e}},{key:"onFantatasyClose",value:function(e){this._onFantasyClose=e}},{key:"push",value:function(e){throw new Ke["a"]}}]),e}();function Ge(){return null!==Ve&&void 0!==Ve?Ve:Ve=new Fe}var De=n("5198"),Pe=Object(a["defineComponent"])({name:"VipHowToGetExp",components:{AppPageTemplate:Q["a"],BaseNavBar:Y["a"],VipTask:W["a"],VipBenefitsCard:H["a"],VipMyExpCard:ve,ListTileButton:pe["a"],ListTileCardPanelButton:we,VerifyStatusTag:Be["a"],FlatButton:Se["a"]},props:{},setup:function(e,t){t.emit;var n=Object(a["reactive"])({fantasyee_exp_today:0,first_deposit:!1,first_fantasyee_bet:!1,first_fantasyee_win:!1,kyc:!1,this_month_exp:0,vip_level:0});return Object(a["onMounted"])(Object(q["a"])(regeneratorRuntime.mark((function e(){var t,a,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ge["a"].actions.updateUserInfo();case 2:return t=X["a"].getVipLvBonus(),a=X["a"].getExpInfo(),e.next=6,t;case 6:return c=e.sent,e.next=9,a;case 9:o=e.sent,Object.keys(o).forEach((function(e){n[e]=o[e]})),se["b"].vipGauge.init(c.data),se["b"].vipGauge.updatePercentage();case 13:case"end":return e.stop()}}),e)})))),Object(J["a"])(Object(J["a"])({},Object(a["toRefs"])(n)),{},{onGotoKYC:function(){se["b"].router.push({name:Ue["a"].profileVerification})},onGotoAddCash:function(){se["b"].router.push({name:Ue["a"].wallet})},onGotoJoinFantasyee:function(){var e=Ge();e.goDreamUrl(De["g"].CRICKET)},onGotoFantasyeeWithdraw:function(){var e=Ge();e.goDreamUrl(De["g"].CRICKET)}})}});n("4713");const _e=Oe()(Pe,[["render",L],["__scopeId","data-v-867f365c"]]);t["default"]=_e},"6ce2":function(e,t,n){"use strict";n("b0c0");var a=n("f2bf");function c(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("ProjectImage"),l=Object(a["resolveComponent"])("van-image");return e.imgUrl?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,width:e.size,height:e.size,fit:"contain",src:e.imgUrl,round:""},{error:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(i,{width:e.size,height:e.size,name:e.name,round:""},null,8,["width","height","name"])]})),_:1},8,["width","height","src"])):(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:1,width:e.size,height:e.size,name:e.name,round:""},null,8,["width","height","name"]))}var o=n("d70b"),r=n("57ab"),i=Object(a["defineComponent"])({name:"AvatarImage",components:{ProjectImage:r["a"]},props:{avatarPath:{type:String,default:""},size:{type:String,default:"40"},name:{type:String,default:function(){return"avatar.svg"}}},setup:function(e){var t=Object(a["computed"])((function(){return e.avatarPath?o["s"]+e.avatarPath:""}));return{imgUrl:t}}}),l=n("6b0d"),s=n.n(l);const u=s()(i,[["render",c]]);t["a"]=u},"6ffd":function(e,t,n){"use strict";n("c20f")},"81ba":function(e,t,n){},"880e":function(e,t,n){"use strict";n("b0c0");var a=n("f2bf"),c=["disabled"],o={key:0,class:"inner-wrapper"},r={class:"flex flex-col"},i={key:0,class:"panel-button__num"};function l(e,t,n,l,s,u){var d=Object(a["resolveComponent"])("PanelIcon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{class:Object(a["normalizeClass"])(["panel-button",[{vertical:"vertical"===e.position,horizontal:"horizontal"===e.position,"w-full":e.block,"shader-smooth":"high"===e.relief},"panel-button--".concat(e.relief)]]),disabled:e.disabled},[e.icon?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(d,{class:Object(a["normalizeClass"])(["panel-button__icon",{"mr-4":"horizontal"===e.position}]),icon:e.icon,size:e.size,"icon-size":e.iconSize},null,8,["class","icon","size","icon-size"]),Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["panel-button__text",{"mt-1":"vertical"===e.position}])},Object(a["toDisplayString"])(e.name),3),e.isWallet?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,Object(a["toDisplayString"])(e.cashSymbol)+Object(a["toDisplayString"])(e.amount),1)):Object(a["createCommentVNode"])("",!0),e.subText?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:1,class:Object(a["normalizeClass"])(["panel-button__subText",{"mt-1":"vertical"===e.position}])},Object(a["toDisplayString"])(e.subText),3)):Object(a["createCommentVNode"])("",!0)])])):Object(a["createCommentVNode"])("",!0),Object(a["renderSlot"])(e.$slots,"expansion",{},void 0,!0)],10,c)}n("a9e3");var s=n("2165"),u=Object(a["defineComponent"])({name:"PanelButton",components:{PanelIcon:s["a"]},props:{icon:{type:String},name:{type:String,default:""},disabled:{type:Boolean,default:!1},position:{type:String,default:"vertical"},size:{type:Number,default:32},iconSize:{type:Number,default:20},block:{type:Boolean,default:!0},relief:{type:String,default:"high"},subText:{type:String},isWallet:{type:Boolean,default:!1},amount:{type:Number},cashSymbol:{type:String,default:""}},setup:function(){}}),d=(n("eae5"),n("6b0d")),b=n.n(d);const p=b()(u,[["render",l],["__scopeId","data-v-2d81e6e6"]]);t["a"]=p},"93fa":function(e,t,n){},"9a90":function(e,t,n){"use strict";n("b31f")},b31f:function(e,t,n){},b5c9:function(e,t,n){},bef7:function(e,t,n){"use strict";n("b5c9")},c20f:function(e,t,n){},d469:function(e,t,n){"use strict";n("b0c0");var a=n("f2bf"),c=["disabled"],o={key:0,class:"inner-wrapper"},r={class:"flex flex-col"},i={class:"panel-button__text"},l={key:0,class:"panel-button__subText"},s={class:"flex flex-1 text-right items-center justify-end"};function u(e,t,n,u,d,b){var p=Object(a["resolveComponent"])("PanelIcon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{class:Object(a["normalizeClass"])(["panel-button",["horizontal",{"w-full":e.block}]]),disabled:e.disabled},[e.icon?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(p,{class:"panel-button__icon mr-4",icon:e.icon,size:e.size,"icon-size":e.iconSize},null,8,["icon","size","icon-size"]),Object(a["createElementVNode"])("div",r,[Object(a["createElementVNode"])("div",i,Object(a["toDisplayString"])(e.name),1),e.subText?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",l,Object(a["toDisplayString"])(e.subText),1)):Object(a["createCommentVNode"])("",!0)])])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",s,[Object(a["renderSlot"])(e.$slots,"expansion",{},void 0,!0)])],10,c)}n("a9e3");var d=n("2165"),b=Object(a["defineComponent"])({name:"ListTileButton",components:{PanelIcon:d["a"]},props:{icon:{type:String},name:{type:String,default:""},disabled:{type:Boolean,default:!1},size:{type:Number,default:32},iconSize:{type:Number,default:20},block:{type:Boolean,default:!0},relief:{type:String,default:"high"},subText:{type:String}},setup:function(){}}),p=(n("9a90"),n("6b0d")),f=n.n(p);const m=f()(b,[["render",u],["__scopeId","data-v-041448ed"]]);t["a"]=m},eae5:function(e,t,n){"use strict";n("81ba")},f8fe:function(e,t,n){}}]);