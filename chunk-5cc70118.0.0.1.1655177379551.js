(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cc70118","chunk-64fb34b3","chunk-9d286c06"],{"05af":function(e,t,n){},"06bc":function(e,t,n){e.exports=n.p+"img/set-up-step3.b68b4739.png"},"0e94":function(e,t,n){e.exports=n.p+"img/logo.f9c4bf36.svg"},"12f8":function(e,t,n){"use strict";n("7ab5")},"1cb4":function(e,t,n){e.exports=n.p+"img/logo-blue.5ffae856.png"},2153:function(e,t,n){e.exports=n.p+"img/football_step6.d1d67f85.png"},"217e":function(e,t,n){e.exports=n.p+"img/daily-bonus-gift.a803d5d2.png"},2383:function(e,t,n){"use strict";var a=n("f2bf"),c={class:"page-wrapper"},o={key:1},r={key:2,class:"title"};function i(e,t,n,i,s,u){var l=Object(a["resolveComponent"])("van-icon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[e.hasBack?(Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{key:0,class:"page-back",onClick:t[0]||(t[0]=function(){return e.backHandler&&e.backHandler.apply(e,arguments)})},[Object(a["createVNode"])(l,{name:"arrow-left"}),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.backText),1)])):Object(a["createCommentVNode"])("",!0),e.hasTitle||e.hasBack||e.noHeader?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("header",o,[Object(a["renderSlot"])(e.$slots,"header",{},void 0,!0)])),e.hasTitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h2",r,Object(a["toDisplayString"])(e.title),1)):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("main",{id:"main",class:Object(a["normalizeClass"])(e.paddingClass)},[Object(a["renderSlot"])(e.$slots,"default",{},void 0,!0)],2),Object(a["createElementVNode"])("footer",null,[Object(a["renderSlot"])(e.$slots,"footer",{},void 0,!0)])])}n("b0c0");var s=n("6c02"),u=n("b7f3"),l=n("0613"),m=n("6034"),p=n("65ce"),b=n("57ab"),d=Object(a["defineComponent"])({name:"AppPageTemplate",components:{CustomerServiceButton:p["a"],ProjectImage:b["a"]},props:{hasBack:{type:Boolean,default:!1},hasTitle:{type:Boolean,default:!1},backText:{type:String,default:"Back"},title:{type:String,default:"Title"},isCustomBack:{type:Boolean,default:!1},noHeader:{type:Boolean,default:!1},usePadding:{type:Boolean,default:function(){return!1}},showChat:{type:Boolean,default:!0}},setup:function(e,t){var n=t.emit,c=Object(s["useRouter"])(),o=function(){e.isCustomBack?n("back"):c.back()},r=Object(l["b"])(),i=r.global,p=Object(a["ref"])(!1),b=Object(m["a"])(),d=i.getters.currentLang,f=Object(a["reactive"])([{name:"English",value:"en",className:Object(a["computed"])((function(){return"en"===d.value?"lang-active":""}))},{name:b.$t("indian"),value:"ind",className:Object(a["computed"])((function(){return"ind"===d.value?"lang-active":""}))}]),g=function(e){i.actions.setLang(e.value),p.value=!1},O=function(){p.value=!0},j=Object(s["useRoute"])(),v=j.name===u["a"].customerService,h=Object(a["computed"])((function(){return e.usePadding?"default-padding":""}));return{RouterNames:u["a"],backHandler:o,isLangDialogShow:p,langOpts:f,setLang:g,setDialog:O,isAtCustomerService:v,paddingClass:h}}}),f=(n("7701"),n("6b0d")),g=n.n(f);const O=g()(d,[["render",i],["__scopeId","data-v-91ddfc6a"]]);t["a"]=O},"242f":function(e,t,n){e.exports=n.p+"img/avatar.71020390.svg"},"2a620":function(e,t,n){"use strict";n("c1d0")},"2b13":function(e,t,n){"use strict";n("b0c0");var a=n("f2bf"),c={class:"match-card__title"},o={class:"match-card__content"},r={key:0,class:"match-card__footer"};function i(e,t,n,i,s,u){var l=Object(a["resolveComponent"])("MatchInfoCell"),m=Object(a["resolveComponent"])("PanelCard");return Object(a["openBlock"])(),Object(a["createBlock"])(m,{class:Object(a["normalizeClass"])(["match-card",{isLocked:e.isLocked}])},{default:Object(a["withCtx"])((function(){var t;return[Object(a["createElementVNode"])("div",c,Object(a["toDisplayString"])(null===(t=e.data.league)||void 0===t?void 0:t.name),1),Object(a["createElementVNode"])("div",o,[Object(a["createVNode"])(l,{has_imageA:!!e.imageA,has_imageB:!!e.imageB,imageA:e.imageA,imageB:e.imageB,"team-a-name":e.teamA_name,"team-b-name":e.teamB_name,teamA_id:e.teamA_id,teamB_id:e.teamB_id,time:e.time,status:e.status,line_up:e.line_up,is_sport:e.is_sport,cricketInfo:e.cricketInfo,onIsLocked:e.isLockedFunc,onClick:e.clickHandler},null,8,["has_imageA","has_imageB","imageA","imageB","team-a-name","team-b-name","teamA_id","teamB_id","time","status","line_up","is_sport","cricketInfo","onIsLocked","onClick"])]),e.team_numbers&&e.contest_number?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.team_numbers)+" Teams",1),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.contest_number)+" Contest",1)])):Object(a["createCommentVNode"])("",!0)]})),_:1},8,["class"])}n("a9e3");var s=n("86eb"),u=n("80b7"),l=n("a5de"),m=Object(a["defineComponent"])({name:"CricketMatch",components:{MatchInfoCell:s["a"],PanelCard:u["a"]},emits:["link"],props:{id:{type:Number},data:{type:Object,default:function(){}},imageA:{type:String},imageB:{type:String},teamA_id:{type:Number},teamB_id:{type:Number},teamA_name:{type:String,default:""},teamB_name:{type:String,default:""},time:{type:String,default:"0"},status:{type:Number,default:l["j"].ENDED},line_up:{type:Boolean},team_numbers:{type:Number,default:0},contest_number:{type:Number,default:0},is_sport:{type:Boolean,default:!1},cricketInfo:{type:Object,required:!0}},setup:function(e,t){var n=t.emit,c=Object(a["ref"])(!1),o=function(e){c.value=e},r=function(){c.value||n("link",e.data)};return{isLocked:c,isLockedFunc:o,clickHandler:r}}}),p=(n("99a5"),n("6b0d")),b=n.n(p);const d=b()(m,[["render",i],["__scopeId","data-v-08b9c040"]]);t["a"]=d},"2dd8":function(e,t,n){"use strict";n("6a74")},"33d8":function(e,t,n){e.exports=n.p+"img/congratulation.9b002eab.png"},"3c17":function(e,t,n){},"3e76":function(e,t,n){e.exports=n.p+"img/players.f2828523.png"},4990:function(e,t,n){e.exports=n.p+"img/step-1.1cccd771.png"},"4e2a":function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return O}));var a=n("ac84"),c=n("2d58"),o=n("c20e"),r=n("e5cd"),i=n("0384"),s=n("a007"),u=n("e3fc"),l=n("7775"),m=n("f2bf"),p=n("7b8e"),b=n("cb08"),d=n("1988"),f=n("6fb3"),g=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(e){var c;return Object(a["a"])(this,n),c=t.call(this,Object.assign(null!==e&&void 0!==e?e:{},{state:Object(b["a"])(["phone"]),rules:l["c"],messages:Object(l["a"])(d["b"].languageService),title:Object(m["computed"])((function(){return d["b"].languageService.txt.editRemark})),request:d["b"].apiService.postPhoneOTP,onClose:function(e){e.resetState(),e.config.visible.value=!1},onVisible:function(e,t){},onBeforeVisible:function(e,t){e.resetState(t)}})),Object(f["a"])(Object(o["a"])(c)),c}return Object(c["a"])(n,[{key:"getPayload",value:function(){return Object(r["a"])(Object(i["a"])(n.prototype),"getPayload",this).call(this)}}]),n}(p["a"]),O=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(e){var c;return Object(a["a"])(this,n),c=t.call(this,Object.assign(null!==e&&void 0!==e?e:{},{state:Object(b["a"])(["phone"]),rules:l["c"],messages:Object(l["a"])(d["b"].languageService),title:Object(m["computed"])((function(){return d["b"].languageService.txt.editRemark})),request:d["b"].apiService.requestResetPwdThruPhone,onClose:function(e){e.resetState(),e.config.visible.value=!1},onVisible:function(e,t){},onBeforeVisible:function(e,t){e.resetState(t)}})),Object(f["a"])(Object(o["a"])(c)),c}return Object(c["a"])(n,[{key:"getPayload",value:function(){return Object(r["a"])(Object(i["a"])(n.prototype),"getPayload",this).call(this)}}]),n}(p["a"])},"509d":function(e,t,n){e.exports=n.p+"img/cricket_step1.1cccd771.png"},5367:function(e,t,n){"use strict";n("fa82")},"54e2":function(e,t,n){"use strict";n.r(t);var a=n("f2bf"),c={class:"second-tabs"},o={class:"overlay-wrapper"};function r(e,t,n,r,i,s){var u=Object(a["resolveComponent"])("SignForm"),l=Object(a["resolveComponent"])("van-loading"),m=Object(a["resolveComponent"])("van-overlay");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(u,{model:e.phoneModel},null,8,["model"]),Object(a["createVNode"])(m,{show:e.loading,onClick:t[0]||(t[0]=function(t){return e.loading=!1})},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",o,[Object(a["createVNode"])(l)])]})),_:1},8,["show"])])}var i=n("b192"),s=(n("ac1f"),n("5319"),n("b7f3")),u=n("0613"),l=n("2d58"),m=n("ac84"),p=n("c20e"),b=n("a007"),d=n("e3fc"),f=n("7775"),g=n("7b8e"),O=n("cb08"),j=n("1988"),v=n("6fb3"),h=function(e){Object(b["a"])(n,e);var t=Object(d["a"])(n);function n(e){var c;return Object(m["a"])(this,n),c=t.call(this,Object.assign(null!==e&&void 0!==e?e:{},{state:Object(O["a"])(["phone","password"]),rules:f["c"],messages:Object(f["a"])(j["b"].languageService),title:Object(a["computed"])((function(){return j["b"].languageService.txt.login})),request:j["b"].apiService.SignInWithPhone,onClose:function(e){e.resetState(),e.config.visible.value=!1},onVisible:function(e,t){},onBeforeVisible:function(e,t){e.resetState(t)}})),c.state.password.disabled=!1,Object(v["a"])(Object(p["a"])(c)),c}return Object(l["a"])(n)}(g["a"]),k=n("5e3a"),_=n("86b9"),C=n("6c02"),y=n("e824"),B={class:"sign-in-form-footer"},w={class:"my-4 text-base"};function x(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("router-link"),s=Object(a["resolveComponent"])("FlatButton"),u=Object(a["resolveComponent"])("BaseForm");return Object(a["openBlock"])(),Object(a["createBlock"])(u,{class:"h-full flex flex-col",model:e.model},{submitFooter:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("section",B,[Object(a["createVNode"])(i,{class:"forget-title",to:{name:e.RouterNames.forgetPassword}},{default:Object(a["withCtx"])((function(){return[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.$i18n.$t("forgotPassword"))+" ?",1)]})),_:1},8,["to"]),Object(a["createVNode"])(s,{class:"mt-4",block:"",shadow:!0,disabled:!e.model.canSubmit.value},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",w,Object(a["toDisplayString"])(e.$i18n.$t("logIn")),1)]})),_:1},8,["disabled"])])]})),_:1},8,["model"])}var S=n("ed48"),N=Object(a["defineComponent"])({name:"SignForm",components:{BaseForm:k["a"],FlatButton:S["a"]},props:{model:{type:Object,required:!0}},setup:function(e){return Object(a["onMounted"])((function(){console.log("SignInForm model:",e.model)})),{RouterNames:s["a"],onTelInput:function(t,n){e.model.notifyOnInput(e.model.state.phone.dataKey,{number:t,isValid:n})}}}}),R=(n("f4d6"),n("6b0d")),V=n.n(R);const M=V()(N,[["render",x],["__scopeId","data-v-d03192a4"]]);var L=M,I=n("0c9e"),E=Object(a["defineComponent"])({name:"SignIn",components:{SignForm:L,BaseForm:k["a"],NormalButton:_["a"]},setup:function(e){var t=Object(u["b"])(),n=t.user,c=Object(C["useRouter"])(),o=Object(a["ref"])(0),r=Object(a["ref"])(!1),l=new h({onSubmit:function(e,t){return j["b"].apiService.isErrorResponse(e)?y["a"].errorMessageToast(e):(n.actions.setUserData(e.data),I["a"].login(e.data.username),c.replace({name:s["a"].home})),!0},onBeforeSubmit:function(){r.value=!0},onAfterSubmit:function(){r.value=!1},onCatchSubmit:function(e){r.value=!1,y["a"].errorMessageToast(e)}}),m=Object(a["reactive"])({verificationDialogShow:!1,errorText:""});return Object(i["a"])(Object(i["a"])({},Object(a["toRefs"])(m)),{},{loading:r,RouterNames:s["a"],phoneModel:l,activeTab:o})}});n("f6e8");const G=V()(E,[["render",r],["__scopeId","data-v-074703ca"]]);t["default"]=G},"56ea":function(e,t,n){e.exports=n.p+"img/logo-qrcode.fcb4d504.png"},"57ab":function(e,t,n){"use strict";var a=n("f2bf");function c(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("van-image");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{src:e.imgUrl,alt:e.altText,fit:"contain",round:e.round,width:e.width,height:e.height},null,8,["src","alt","round","width","height"])}n("a9e3"),n("99af"),n("b0c0");var o=Object(a["defineComponent"])({name:"ProjectImage",props:{name:{type:String,require:!0},round:{type:Boolean,default:!1},width:{type:[String,Number]},height:{type:[String,Number]},alt:{type:String}},setup:function(e){var t=Object(a["computed"])((function(){return n("7659")("./".concat(e.name))})),c=Object(a["computed"])((function(){return e.alt||Object(a["capitalize"])("pavo11")}));return{imgUrl:t,altText:c}}}),r=n("6b0d"),i=n.n(r);const s=i()(o,[["render",c]]);t["a"]=s},"59f5":function(e,t,n){e.exports=n.p+"img/logo-vertical.191355ed.svg"},"5bcd":function(e,t,n){e.exports=n.p+"img/step-1.03798287.png"},"5c9c":function(e,t,n){"use strict";n.r(t);var a=n("f2bf"),c=function(e){return Object(a["pushScopeId"])("data-v-dccb38e0"),e=e(),Object(a["popScopeId"])(),e},o=c((function(){return Object(a["createElementVNode"])("p",{class:"m-6 text-label"},"Enter your mobile number to continue. Make sure your mobile phone number is active.",-1)})),r={class:"my-4 text-base"},i={class:"text-center"};function s(e,t,n,c,s,u){var l=Object(a["resolveComponent"])("FlatButton"),m=Object(a["resolveComponent"])("BaseForm");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[o,Object(a["createVNode"])(m,{class:"form-sign-up",model:e.model},{submitFooter:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(l,{class:"bottom",disabled:!e.model.canSubmit.value,"native-type":"submit"},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",r,Object(a["toDisplayString"])(e.$i18n.$t("sendOTPCode")),1)]})),_:1},8,["disabled"]),Object(a["createElementVNode"])("p",i,Object(a["toDisplayString"])(e.loading?e.$i18n.$t("loading"):""),1)]})),_:1},8,["model"])],64)}var u=n("b7f3"),l=n("5e3a"),m=n("4e2a"),p=n("6c02"),b=n("e824"),d=n("0613"),f=n("ed48"),g=n("4dd0"),O=Object(a["defineComponent"])({name:"SignUp",components:{FlatButton:f["a"],BaseForm:l["a"]},props:{invitationCode:{type:String}},setup:function(e){var t=Object(p["useRoute"])(),n=Object(p["useRouter"])(),c=Object(a["ref"])(!1),o=Object(d["b"])(),r=o.user,i=function(){var e=t.query,n=e.visitor_id,a=e.zoneid;n&&a?(g["set"]("visitor_id",n),g["set"]("zone_id",a)):(g["remove"]("visitor_id"),g["remove"]("zone_id"))};i();var s=new m["a"]({onSubmit:function(t){if(t.succeed){var a=s.state.phone.value;r.actions.setPhoneAndPass({phone:a,referral_code:e.invitationCode}),n.push({name:u["a"].otpPage,params:{fromPage:"signup",otpType:"phone"}})}return!0},onBeforeSubmit:function(){c.value=!0},onAfterSubmit:function(){c.value=!1},onCatchSubmit:function(e){console.log("catch submit:",e),c.value=!1,b["a"].errorMessageToast(e)}});return{loading:c,RouterNames:u["a"],model:s,onTelInput:function(e,t){s.notifyOnInput(s.state.phone.dataKey,{number:e,isValid:t})}}}}),j=(n("d302"),n("6b0d")),v=n.n(j);const h=v()(O,[["render",s],["__scopeId","data-v-dccb38e0"]]);t["default"]=h},"5cfa":function(e,t,n){"use strict";n("05af")},"5e0c":function(e,t,n){e.exports=n.p+"img/football_step1.f55b5a3c.png"},"5ec3":function(e,t,n){e.exports=n.p+"img/logo.97ed9437.png"},"65ce":function(e,t,n){"use strict";var a=n("f2bf"),c={class:"p-4"};function o(e,t,n,o,r,i){var s=Object(a["resolveComponent"])("svg-icon"),u=Object(a["resolveComponent"])("van-dialog");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["customer-service",{isLanding:e.isLanding}]),onClick:t[0]||(t[0]=function(){return e.clickCustomerService&&e.clickCustomerService.apply(e,arguments)})},[Object(a["createVNode"])(s,{name:"customer-headphone",width:"3rem",height:"3rem"})],2),Object(a["createVNode"])(u,{show:e.show,"onUpdate:show":t[2]||(t[2]=function(t){return e.show=t}),theme:"round-button",confirmButtonText:"Enter chat room",title:"Please enter your email",closeOnClickOverlay:!0,className:["chat-dialog",{isLanding:e.isLanding}],"overlay-class":{isLanding:e.isLanding},onConfirm:e.enterChatRoom},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",c,[Object(a["withDirectives"])(Object(a["createElementVNode"])("input",{class:"email-input",name:"email",type:"email","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.email=t}),required:""},null,512),[[a["vModelText"],e.email]])])]})),_:1},8,["show","className","overlay-class","onConfirm"]),e.isLanding?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:0,class:Object(a["normalizeClass"])(["customer-service-dialog-layout",{show:e.show}]),onClick:t[3]||(t[3]=function(){return e.cancelShow&&e.cancelShow.apply(e,arguments)})},null,2)):Object(a["createCommentVNode"])("",!0)],64)}var r=n("b192"),i=n("6c02"),s=n("b7f3"),u=n("0613"),l=Object(a["defineComponent"])({name:"CustomerServiceButton",props:{isLanding:{type:Boolean,default:!1}},setup:function(){var e=Object(i["useRouter"])(),t=Object(u["b"])(),n=t.user,c=n.getters.isLogin,o=Object(a["reactive"])({show:!1,email:""}),l=function(){o.email&&e.push({name:s["a"].customerService,params:{id:0,email:o.email}})},m=function(){c.value?e.push({name:s["a"].customerService}):o.show=!o.show},p=function(){o.show=!1};return Object(r["a"])(Object(r["a"])({},Object(a["toRefs"])(o)),{},{clickCustomerService:m,enterChatRoom:l,cancelShow:p})}}),m=(n("dba3"),n("6e98"),n("6b0d")),p=n.n(m);const b=p()(l,[["render",o],["__scopeId","data-v-76f94eee"]]);t["a"]=b},6679:function(e,t,n){e.exports=n.p+"img/football_step4.25d776a3.png"},"67ff":function(e,t,n){e.exports=n.p+"img/rewards_fantasee.1b44bfc9.png"},"6a74":function(e,t,n){},"6d59":function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("f2bf"),c={class:"container"},o={class:"matches-list"};function r(e,t,n,r,i,s){var u=Object(a["resolveComponent"])("CricketMatch"),l=Object(a["resolveComponent"])("NoMatches"),m=Object(a["resolveComponent"])("infinite-loading"),p=Object(a["resolveComponent"])("van-pull-refresh");return Object(a["openBlock"])(),Object(a["createBlock"])(p,{modelValue:e.isRefreshing,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.isRefreshing=t}),onRefresh:e.onRefresh,"pulling-text":"Pull to refresh","loosing-text":"Loose to refresh","loading-text":"Loading..."},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",o,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.upcoming,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:t.id,id:t.id,data:t,imageA:t.home_team.img_url,imageB:t.away_team.img_url,teamA_name:t.home_team.name,teamB_name:t.away_team.name,teamA_id:t.home_team.id,teamB_id:t.away_team.id,time:t.open_datetime,status:t.status,cricketInfo:t,is_sport:"",onClick:function(){return e.onClickMatch(t)}},null,8,["id","data","imageA","imageB","teamA_name","teamB_name","teamA_id","teamB_id","time","status","cricketInfo","onClick"])})),128))]),0===e.upcoming.length?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,text:"No Matches",hideButton:""})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(m,{firstLoad:!1,identifier:e.upcoming,target:".cricket-game-layout > .scrollable-content",onInfinite:e.onLoadMore},null,8,["identifier","onInfinite"])])]})),_:1},8,["modelValue","onRefresh"])}var i=n("b192"),s=n("7580"),u=(n("d3b7"),n("96cf"),n("1988")),l=n("6c02"),m=n("2b13"),p=n("dbb3"),b=n("b7f3"),d=n("e824"),f=Object(a["defineComponent"])({name:"CricketGameUpcomingPage",components:{CricketMatch:m["a"],NoMatches:p["a"]},props:{},setup:function(e,t){t.emit;var n=Object(a["reactive"])({isRefreshing:!1}),c=Object(l["useRouter"])(),o=function(e){u["b"].cricketGameStore.setCurrentMatchToLocalStorage(e),c.push({name:b["a"].cricketMatchInfo,params:{matchId:e.id}})};Object(a["onMounted"])(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("CricketGameUpcoming Mounted......."),e.next=3,u["b"].cricketGameStore.updateUpcomingMatches({page:1});case 3:case"end":return e.stop()}}),e)}))));var r=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!u["b"].cricketGameStore.state.canLoadUpcoming){e.next=7;break}return e.next=4,u["b"].cricketGameStore.loadMoreUpcoming();case 4:u["b"].cricketGameStore.state.canLoadUpcoming?t.loaded():t.complete(),e.next=8;break;case 7:t.complete();case 8:e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),t.error(),console.error(e.t0);case 14:return e.prev=14,e.finish(14);case 16:case"end":return e.stop()}}),e,null,[[0,10,14,16]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){u["b"].cricketGameStore.updateUpcomingMatches({page:1}).then((function(e){d["a"].infoToast("Refresh Success")})).catch((function(e){d["a"].failToast("Refresh Failed")})).finally((function(){n.isRefreshing=!1}))};return Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(a["toRefs"])(n)),Object(a["toRefs"])(u["b"].cricketGameStore.state)),{},{onClickMatch:o,onLoadMore:r,onRefresh:m,demo:u["b"].cricketGameStore.getDemoModel()})}}),g=(n("9f5a"),n("6b0d")),O=n.n(g);const j=O()(f,[["render",r],["__scopeId","data-v-5166a42d"]]);t["default"]=j},"6e98":function(e,t,n){"use strict";n("e50c")},"705a":function(e,t,n){e.exports=n.p+"img/step-4.f7b05d7e.png"},"72c0":function(e,t,n){},7340:function(e,t,n){e.exports=n.p+"img/football_step3.0b606e13.png"},7659:function(e,t,n){var a={"./SSL.png":"9199","./advanced/rewards_fantasee.png":"67ff","./advanced/rewards_lotto.png":"fea5","./advanced/rewards_wheel.png":"94d1","./avatar.png":"b95e","./avatar.svg":"242f","./congratulation.png":"33d8","./daily-bonus-gift.png":"217e","./entry/set-up-step1.png":"aa9c","./entry/set-up-step2.png":"dbff","./entry/set-up-step3.png":"06bc","./entry/step-1.png":"5bcd","./entry/step-2.png":"e756","./entry/step-3.png":"c3af","./fantasy/cricket/step-1.png":"4990","./fantasy/cricket/step-2.png":"ec80","./fantasy/cricket/step-3.png":"de91","./fantasy/cricket/step-4.png":"705a","./fantasy/cricket/step-5.png":"b3ce","./how-to-play/cricket/cricket_step1.png":"509d","./how-to-play/cricket/cricket_step2.png":"cbea","./how-to-play/cricket/cricket_step3.png":"9905","./how-to-play/cricket/cricket_step4.png":"a14c","./how-to-play/cricket/cricket_step5.png":"f0a5","./how-to-play/football/football_step1.png":"5e0c","./how-to-play/football/football_step2.png":"f571","./how-to-play/football/football_step3.png":"7340","./how-to-play/football/football_step4.png":"6679","./how-to-play/football/football_step5.png":"f4b1","./how-to-play/football/football_step6.png":"2153","./logo-blue.png":"1cb4","./logo-qrcode.png":"56ea","./logo-vertical.svg":"59f5","./logo.png":"5ec3","./logo.svg":"0e94","./players.png":"3e76","./players1.5x.png":"bb46","./splash.jpeg":"8bab"};function c(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=o,e.exports=c,c.id="7659"},7701:function(e,t,n){"use strict";n("86c2")},"7ab5":function(e,t,n){},"84af":function(e,t,n){"use strict";var a=n("f2bf"),c={class:"base-banner",ref:"bannerRef"},o=["href"],r={class:"object-cover",alt:"banner"};function i(e,t,n,i,s,u){var l=Object(a["resolveComponent"])("van-swipe-item"),m=Object(a["resolveComponent"])("van-swipe"),p=Object(a["resolveDirective"])("lazy");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(m,{height:e.height,autoplay:"8000","indicator-color":"white",pauseAutoplayOnHover:""},{default:Object(a["withCtx"])((function(){return[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.banners,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:t},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("a",{href:e.url||"javascript:void(0)"},[Object(a["withDirectives"])(Object(a["createElementVNode"])("img",r,null,512),[[p,e.content]])],8,o)]})),_:2},1024)})),128))]})),_:1},8,["height"])],512)}var s=n("b192"),u=n("7580"),l=(n("96cf"),n("a9e3"),n("3bac")),m=Object(a["defineComponent"])({name:"Banner",components:{},props:{areaId:{type:Number,require:!0}},setup:function(e){var t=Object(a["ref"])(),n=Object(a["computed"])((function(){return Number(e.areaId)})),c=Object(a["reactive"])({banners:[],height:125,loading:!1}),o=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,c.loading=!0,e.next=4,l["a"].getAds({area_id:n.value});case 4:t=e.sent,c.banners=t.data,e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:return e.prev=10,c.loading=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,8,10,13]])})));return function(){return e.apply(this,arguments)}}(),r=function(){var e=t.value.offsetWidth,n=e/4;c.height=n};return Object(a["onMounted"])((function(){r(),window.onresize=function(){r()},o()})),Object(s["a"])({bannerRef:t},Object(a["toRefs"])(c))}}),p=(n("2a620"),n("6b0d")),b=n.n(p);const d=b()(m,[["render",i],["__scopeId","data-v-09cf5cd0"]]);t["a"]=d},"86c2":function(e,t,n){},"8bab":function(e,t,n){e.exports=n.p+"img/splash.1f76904a.jpeg"},9199:function(e,t,n){e.exports=n.p+"img/SSL.5c271238.png"},9328:function(e,t,n){"use strict";var a=n("f2bf");function c(e,t,n,c,o,r){var i=Object(a["resolveComponent"])("van-tabs");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{shrink:""},Object(a["createSlots"])({_:2},[Object(a["renderList"])(e.$slots,(function(t,n){return{name:n,fn:Object(a["withCtx"])((function(t){return[Object(a["renderSlot"])(e.$slots,n,{data:t},void 0,!0)]}))}}))]),1024)}var o=Object(a["defineComponent"])({name:"BaseTabs",inheritAttrs:!0,components:{},setup:function(){}}),r=(n("2dd8"),n("6b0d")),i=n.n(r);const s=i()(o,[["render",c],["__scopeId","data-v-63829a38"]]);t["a"]=s},"94d1":function(e,t,n){e.exports=n.p+"img/rewards_wheel.aaf8067e.png"},9905:function(e,t,n){e.exports=n.p+"img/cricket_step3.5879e6e4.png"},"99a5":function(e,t,n){"use strict";n("b9b98")},"9f5a":function(e,t,n){"use strict";n("c811")},a14c:function(e,t,n){e.exports=n.p+"img/cricket_step4.ab7094f4.png"},a8c9:function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("f2bf"),c={class:"container"},o={class:"matches-list"};function r(e,t,n,r,i,s){var u=Object(a["resolveComponent"])("CricketMatch"),l=Object(a["resolveComponent"])("NoMatches"),m=Object(a["resolveComponent"])("infinite-loading"),p=Object(a["resolveComponent"])("van-pull-refresh");return Object(a["openBlock"])(),Object(a["createBlock"])(p,{modelValue:e.isRefreshing,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.isRefreshing=t}),onRefresh:e.onRefresh,"pulling-text":"Pull to refresh","loosing-text":"Loose to refresh","loading-text":"Loading..."},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",o,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.completed,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:t.id,id:t.id,data:t,imageA:t.home_team.img_url,imageB:t.away_team.img_url,teamA_name:t.home_team.name,teamB_name:t.away_team.name,teamA_id:t.home_team.id,teamB_id:t.away_team.id,time:t.open_datetime,status:t.status,cricketInfo:t,is_sport:"",onClick:function(){return e.onClickMatch(t)}},null,8,["id","data","imageA","imageB","teamA_name","teamB_name","teamA_id","teamB_id","time","status","cricketInfo","onClick"])})),128))]),0===e.completed.length?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,text:"No Matches",hideButton:""})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(m,{firstLoad:!1,identifier:e.completed,target:".cricket-game-layout > .scrollable-content",onInfinite:e.onLoadMore},null,8,["identifier","onInfinite"])])]})),_:1},8,["modelValue","onRefresh"])}var i=n("b192"),s=n("7580"),u=(n("d3b7"),n("96cf"),n("1988")),l=n("6c02"),m=n("dbb3"),p=n("b7f3"),b=n("2b13"),d=n("e824"),f=Object(a["defineComponent"])({name:"CricketGameCompletePage",components:{CricketMatch:b["a"],NoMatches:m["a"]},props:{},setup:function(e,t){t.emit;var n=Object(a["reactive"])({isRefreshing:!1}),c=Object(l["useRouter"])(),o=function(e){u["b"].cricketGameStore.setCurrentMatchToLocalStorage(e),c.push({name:p["a"].cricketMatchInfo,params:{matchId:e.id}})};Object(a["onMounted"])(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("CricketGameCompleted Mounted......."),e.next=3,u["b"].cricketGameStore.updateCompletedMatches({page:1});case 3:case"end":return e.stop()}}),e)}))));var r=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("onLoadMore"),e.prev=1,!u["b"].cricketGameStore.state.canLoadCompleted){e.next=8;break}return e.next=5,u["b"].cricketGameStore.loadMoreCompleted();case 5:u["b"].cricketGameStore.state.canLoadCompleted?t.loaded():t.complete(),e.next=9;break;case 8:t.complete();case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),t.error();case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){u["b"].cricketGameStore.updateCompletedMatches({page:1}).then((function(e){d["a"].infoToast("Refresh Success")})).catch((function(e){d["a"].failToast("Refresh Failed")})).finally((function(){n.isRefreshing=!1}))};return Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(a["toRefs"])(n)),Object(a["toRefs"])(u["b"].cricketGameStore.state)),{},{onClickMatch:o,onLoadMore:r,onRefresh:m,demo:u["b"].cricketGameStore.getDemoModel()})}}),g=(n("5cfa"),n("6b0d")),O=n.n(g);const j=O()(f,[["render",r],["__scopeId","data-v-a5d1a186"]]);t["default"]=j},aa9c:function(e,t,n){e.exports=n.p+"img/set-up-step1.0c8ef3e7.png"},b3ce:function(e,t,n){e.exports=n.p+"img/step-5.073e479e.png"},b95e:function(e,t,n){e.exports=n.p+"img/avatar.19bc2a5d.png"},b9b98:function(e,t,n){},bb46:function(e,t,n){e.exports=n.p+"img/players1.5x.0699ca7c.png"},bf92:function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("f2bf"),c={class:"container"},o={class:"matches-list"};function r(e,t,n,r,i,s){var u=Object(a["resolveComponent"])("CricketMatch"),l=Object(a["resolveComponent"])("NoMatches"),m=Object(a["resolveComponent"])("infinite-loading"),p=Object(a["resolveComponent"])("van-pull-refresh");return Object(a["openBlock"])(),Object(a["createBlock"])(p,{modelValue:e.isRefreshing,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.isRefreshing=t}),onRefresh:e.onRefresh,"pulling-text":"Pull to refresh","loosing-text":"Loose to refresh","loading-text":"Loading..."},{default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",o,[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.live,(function(t){return Object(a["openBlock"])(),Object(a["createBlock"])(u,{key:t.id,id:t.id,data:t,imageA:t.home_team.img_url,imageB:t.away_team.img_url,teamA_name:t.home_team.name,teamB_name:t.away_team.name,teamA_id:t.home_team.id,teamB_id:t.away_team.id,time:t.open_datetime,status:t.status,cricketInfo:t,is_sport:"",onClick:function(){return e.onClickMatch(t)}},null,8,["id","data","imageA","imageB","teamA_name","teamB_name","teamA_id","teamB_id","time","status","cricketInfo","onClick"])})),128))]),0===e.live.length?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,text:"No Matches",hideButton:""})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(m,{firstLoad:!1,identifier:e.live,target:".cricket-game-layout > .scrollable-content",onInfinite:e.onLoadMore},null,8,["identifier","onInfinite"])])]})),_:1},8,["modelValue","onRefresh"])}var i=n("b192"),s=n("7580"),u=(n("d3b7"),n("96cf"),n("1988")),l=n("6c02"),m=n("dbb3"),p=n("b7f3"),b=n("2b13"),d=n("e824"),f=Object(a["defineComponent"])({name:"CricketGameLivePage",components:{CricketMatch:b["a"],NoMatches:m["a"]},props:{},setup:function(e,t){t.emit;var n=Object(a["reactive"])({isRefreshing:!1}),c=Object(l["useRouter"])(),o=function(e){u["b"].cricketGameStore.setCurrentMatchToLocalStorage(e),c.push({name:p["a"].cricketMatchInfo,params:{matchId:e.id}})};Object(a["onMounted"])(Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("CricketGameLive Mounted......."),e.next=3,u["b"].cricketGameStore.updateLiveMatches({page:1});case 3:case"end":return e.stop()}}),e)}))));var r=function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!u["b"].cricketGameStore.state.canLoadLive){e.next=7;break}return e.next=4,u["b"].cricketGameStore.loadMoreLive();case 4:u["b"].cricketGameStore.state.canLoadLive?t.loaded():t.complete(),e.next=8;break;case 7:t.complete();case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.error();case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){u["b"].cricketGameStore.updateLiveMatches({page:1}).then((function(e){d["a"].infoToast("Refresh Success")})).catch((function(e){d["a"].failToast("Refresh Failed")})).finally((function(){n.isRefreshing=!1}))};return Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(a["toRefs"])(n)),Object(a["toRefs"])(u["b"].cricketGameStore.state)),{},{onClickMatch:o,onLoadMore:r,onRefresh:m,demo:u["b"].cricketGameStore.getDemoModel()})}}),g=(n("12f8"),n("6b0d")),O=n.n(g);const j=O()(f,[["render",r],["__scopeId","data-v-7e963060"]]);t["default"]=j},c0df:function(e,t,n){"use strict";n.r(t);var a=n("f2bf"),c={class:"cricket-game-layout"};function o(e,t,n,o,r,i){var s=Object(a["resolveComponent"])("van-tab"),u=Object(a["resolveComponent"])("base-tabs"),l=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(u,{active:e.routerName,"onUpdate:active":t[0]||(t[0]=function(t){return e.routerName=t}),"line-height":"0px"},{default:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(s,{title:e.$i18n.$t("upcoming"),name:e.RouterNames.cricketGameUpcoming,to:{name:e.RouterNames.cricketGameUpcoming}},null,8,["title","name","to"]),Object(a["createVNode"])(s,{title:e.$i18n.$t("live"),name:e.RouterNames.cricketGameLive,to:{name:e.RouterNames.cricketGameLive}},null,8,["title","name","to"]),Object(a["createVNode"])(s,{title:e.$i18n.$t("complete"),name:e.RouterNames.cricketGameComplete,to:{name:e.RouterNames.cricketGameComplete}},null,8,["title","name","to"])]})),_:1},8,["active"]),Object(a["createVNode"])(l,{class:"scrollable-content"})])}var r=n("b192"),i=n("7580"),s=(n("96cf"),n("b0c0"),n("caad"),n("2532"),n("2383")),u=n("54e2"),l=n("5c9c"),m=n("b7f3"),p=n("6c02"),b=n("84af"),d=n("9328"),f=n("57ab"),g=n("a8c9"),O=n("6d59"),j=n("bf92"),v=Object(a["defineComponent"])({name:"CricketGameLayout",components:{AppPageTemplate:s["a"],SignIn:u["default"],SignUp:l["default"],Banner:b["a"],BaseTabs:d["a"],ProjectImage:f["a"],CricketGameUpcomingPage:O["default"],CricketGameLivePage:j["default"],CricketGameCompletePage:g["default"]},setup:function(){var e=Object(p["useRouter"])(),t=Object(a["reactive"])({routerName:e.currentRoute.value.name}),n=[m["a"].cricketGameUpcoming,m["a"].cricketGameLive,m["a"].cricketGameComplete];Object(a["onMounted"])(Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log("CricketGameLayout Mounted......."),c(),document.documentElement.style.setProperty("--cricket-game-insert-content-height","10rem");case 3:case"end":return e.stop()}}),e)}))));var c=function(){var a=e.currentRoute.value.name;n.includes(a)?t.routerName=e.currentRoute.value.name:t.routerName=n[0],console.log("on router.currentRoute.value changed.......",t.routerName,t)};return Object(a["watch"])((function(){return e.currentRoute.value}),c),Object(r["a"])(Object(r["a"])({},Object(a["toRefs"])(t)),{},{RouterNames:m["a"],currentRoute:e.currentRoute})}}),h=(n("5367"),n("6b0d")),k=n.n(h);const _=k()(v,[["render",o],["__scopeId","data-v-78b08c0c"]]);t["default"]=_},c1d0:function(e,t,n){},c2c5:function(e,t,n){},c3af:function(e,t,n){e.exports=n.p+"img/step-3.dfe0cccc.png"},c811:function(e,t,n){},cbea:function(e,t,n){e.exports=n.p+"img/cricket_step2.0b606e13.png"},d302:function(e,t,n){"use strict";n("defe")},dba3:function(e,t,n){"use strict";n("c2c5")},dbff:function(e,t,n){e.exports=n.p+"img/set-up-step2.66f94283.png"},de91:function(e,t,n){e.exports=n.p+"img/step-3.e8cb8ab7.png"},defe:function(e,t,n){},e50c:function(e,t,n){},e756:function(e,t,n){e.exports=n.p+"img/step-2.98140229.png"},ec80:function(e,t,n){e.exports=n.p+"img/step-2.0b606e13.png"},f0a5:function(e,t,n){e.exports=n.p+"img/cricket_step5.d1d67f85.png"},f4b1:function(e,t,n){e.exports=n.p+"img/football_step5.25209211.png"},f4d6:function(e,t,n){"use strict";n("72c0")},f571:function(e,t,n){e.exports=n.p+"img/football_step2.1cccd771.png"},f6e8:function(e,t,n){"use strict";n("3c17")},fa82:function(e,t,n){},fea5:function(e,t,n){e.exports=n.p+"img/rewards_lotto.ac7484b3.png"}}]);