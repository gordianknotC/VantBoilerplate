(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41692b8c"],{"046b":function(e,t,n){"use strict";var o=n("f2bf"),c=["disabled"],a={class:"inner"},r={class:"text"};function i(e,t,n,i,l,s){var u=Object(o["resolveComponent"])("PanelIcon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{class:Object(o["normalizeClass"])(["sport-button",{active:e.active,disabled:e.disabled,square:e.square}]),disabled:e.disabled},[Object(o["createElementVNode"])("div",a,[Object(o["createVNode"])(u,{icon:e.iconName,"is-active":e.active},null,8,["icon","is-active"]),Object(o["createElementVNode"])("div",r,Object(o["toDisplayString"])(e.iconName),1)])],10,c)}n("a9e3");var l=n("6806"),s=n.n(l),u=n("2165"),d=n("5198"),b=Object(o["defineComponent"])({name:"SportButton",components:{PanelIcon:u["a"]},props:{sportId:{type:Number,default:d["g"].CRICKET},active:{type:Boolean,default:!1},iconSize:{type:Number,default:20},propSizeUnit:{type:String,default:"px"},disabled:{type:Boolean,default:!1},square:{type:Boolean,default:!1}},setup:function(e){var t=Object(o["computed"])((function(){return s()(d["g"][e.sportId])}));return{iconName:t}}}),p=(n("d09e"),n("6b0d")),m=n.n(p);const f=m()(b,[["render",i],["__scopeId","data-v-4eb7d572"]]);t["a"]=f},"10c9":function(e,t,n){},1690:function(e,t,n){"use strict";n("99af");var o=n("f2bf"),c={class:"stepCard-left"},a={class:"stepCard-left--step"},r={class:"stepCard-left--title"},i={class:"stepCard-left--text"},l={class:"stepCard-img"};function s(e,t,n,s,u,d){var b=Object(o["resolveComponent"])("ProjectImage"),p=Object(o["resolveComponent"])("PanelCard");return Object(o["openBlock"])(),Object(o["createBlock"])(p,{class:"panel-card-dark-shadow stepCard mb-10"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createElementVNode"])("div",a,"STEP "+Object(o["toDisplayString"])(e.stepIdx),1),Object(o["createElementVNode"])("div",r,Object(o["toDisplayString"])(e.title),1),Object(o["createElementVNode"])("div",i,Object(o["toDisplayString"])(e.content),1)]),Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(b,{name:"how-to-play/".concat(e.spotName,"/").concat(e.spotName,"_step").concat(e.stepIdx,".png"),width:"100%"},null,8,["name"])])]})),_:1})}n("a9e3");var u=n("80b7"),d=n("57ab"),b=Object(o["defineComponent"])({name:"StepCard",components:{PanelCard:u["a"],ProjectImage:d["a"]},props:{showStep:{type:Boolean,default:function(){return!0}},content:{type:String,required:!0},title:{type:String,required:!0},stepIdx:{type:Number},spotName:{type:String,default:"cricket"}},setup:function(){return{}}}),p=(n("43d1"),n("6b0d")),m=n.n(p);const f=m()(b,[["render",s],["__scopeId","data-v-351a65ce"]]);t["a"]=f},2383:function(e,t,n){"use strict";var o=n("f2bf"),c={class:"page-wrapper"},a={key:1},r={key:2,class:"title"};function i(e,t,n,i,l,s){var u=Object(o["resolveComponent"])("van-icon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[e.hasBack?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,class:"page-back",onClick:t[0]||(t[0]=function(){return e.backHandler&&e.backHandler.apply(e,arguments)})},[Object(o["createVNode"])(u,{name:"arrow-left"}),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.backText),1)])):Object(o["createCommentVNode"])("",!0),e.hasTitle||e.hasBack||e.noHeader?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createElementBlock"])("header",a,[Object(o["renderSlot"])(e.$slots,"header",{},void 0,!0)])),e.hasTitle?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h2",r,Object(o["toDisplayString"])(e.title),1)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("main",{id:"main",class:Object(o["normalizeClass"])(e.paddingClass)},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],2),Object(o["createElementVNode"])("footer",null,[Object(o["renderSlot"])(e.$slots,"footer",{},void 0,!0)])])}n("b0c0");var l=n("6c02"),s=n("b7f3"),u=n("0613"),d=n("6034"),b=n("65ce"),p=n("57ab"),m=Object(o["defineComponent"])({name:"AppPageTemplate",components:{CustomerServiceButton:b["a"],ProjectImage:p["a"]},props:{hasBack:{type:Boolean,default:!1},hasTitle:{type:Boolean,default:!1},backText:{type:String,default:"Back"},title:{type:String,default:"Title"},isCustomBack:{type:Boolean,default:!1},noHeader:{type:Boolean,default:!1},usePadding:{type:Boolean,default:function(){return!1}},showChat:{type:Boolean,default:!0}},setup:function(e,t){var n=t.emit,c=Object(l["useRouter"])(),a=function(){e.isCustomBack?n("back"):c.back()},r=Object(u["b"])(),i=r.global,b=Object(o["ref"])(!1),p=Object(d["a"])(),m=i.getters.currentLang,f=Object(o["reactive"])([{name:"English",value:"en",className:Object(o["computed"])((function(){return"en"===m.value?"lang-active":""}))},{name:p.$t("indian"),value:"ind",className:Object(o["computed"])((function(){return"ind"===m.value?"lang-active":""}))}]),O=function(e){i.actions.setLang(e.value),b.value=!1},j=function(){b.value=!0},v=Object(l["useRoute"])(),g=v.name===s["a"].customerService,h=Object(o["computed"])((function(){return e.usePadding?"default-padding":""}));return{RouterNames:s["a"],backHandler:a,isLangDialogShow:b,langOpts:f,setLang:O,setDialog:j,isAtCustomerService:g,paddingClass:h}}}),f=(n("7701"),n("6b0d")),O=n.n(f);const j=O()(m,[["render",i],["__scopeId","data-v-91ddfc6a"]]);t["a"]=j},"43d1":function(e,t,n){"use strict";n("68d6")},"4c65":function(e,t,n){"use strict";var o=n("f2bf"),c={class:"button-icon"};function a(e,t,n,a,r,i){var l=Object(o["resolveComponent"])("svg-icon"),s=Object(o["resolveComponent"])("van-nav-bar");return Object(o["openBlock"])(),Object(o["createBlock"])(s,{fixed:"",placeholder:"","left-arrow":e.leftArrow,onClickLeft:e.onClickLeftIcon},{right:Object(o["withCtx"])((function(){return[Object(o["renderSlot"])(e.$slots,"right",{},(function(){return[e.showRightIcon?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,class:"button m-0 p-0 cursor-pointer",onClick:t[0]||(t[0]=function(){return e.onClickRightIcon&&e.onClickRightIcon.apply(e,arguments)})},[Object(o["createElementVNode"])("div",c,[Object(o["renderSlot"])(e.$slots,"icon",{},(function(){return[e.iconName?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,name:e.iconName,width:"1.5rem",height:"1.5rem"},null,8,["name"])):Object(o["createCommentVNode"])("",!0)]}),!0)])])):Object(o["createCommentVNode"])("",!0)]}),!0)]})),_:3},8,["left-arrow","onClickLeft"])}var r=n("1c16"),i=n("6c02"),l=Object(o["defineComponent"])({name:"BaseNavBar",props:{leftArrow:{type:Boolean,default:function(){return!0}},iconName:{type:String}},components:{},setup:function(e,t){var n=t.emit,c=t.attrs,a=Object(i["useRouter"])(),l=Object(o["computed"])((function(){return e.iconName})),s=function(){n("click-right")},u=function(){r["a"].undefined(c.onClickLeft)?a.back():n("click-left")};return{showRightIcon:l,onClickRightIcon:s,onClickLeftIcon:u}}}),s=(n("d55e"),n("6b0d")),u=n.n(s);const d=u()(l,[["render",a],["__scopeId","data-v-4a25e411"]]);t["a"]=d},"65ce":function(e,t,n){"use strict";var o=n("f2bf"),c={class:"p-4"};function a(e,t,n,a,r,i){var l=Object(o["resolveComponent"])("svg-icon"),s=Object(o["resolveComponent"])("van-dialog");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["customer-service",{isLanding:e.isLanding}]),onClick:t[0]||(t[0]=function(){return e.clickCustomerService&&e.clickCustomerService.apply(e,arguments)})},[Object(o["createVNode"])(l,{name:"customer-headphone",width:"3rem",height:"3rem"})],2),Object(o["createVNode"])(s,{show:e.show,"onUpdate:show":t[2]||(t[2]=function(t){return e.show=t}),theme:"round-button",confirmButtonText:"Enter chat room",title:"Please enter your email",closeOnClickOverlay:!0,className:["chat-dialog",{isLanding:e.isLanding}],"overlay-class":{isLanding:e.isLanding},onConfirm:e.enterChatRoom},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"email-input",name:"email",type:"email","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.email=t}),required:""},null,512),[[o["vModelText"],e.email]])])]})),_:1},8,["show","className","overlay-class","onConfirm"]),e.isLanding?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:Object(o["normalizeClass"])(["customer-service-dialog-layout",{show:e.show}]),onClick:t[3]||(t[3]=function(){return e.cancelShow&&e.cancelShow.apply(e,arguments)})},null,2)):Object(o["createCommentVNode"])("",!0)],64)}var r=n("b192"),i=n("6c02"),l=n("b7f3"),s=n("0613"),u=Object(o["defineComponent"])({name:"CustomerServiceButton",props:{isLanding:{type:Boolean,default:!1}},setup:function(){var e=Object(i["useRouter"])(),t=Object(s["b"])(),n=t.user,c=n.getters.isLogin,a=Object(o["reactive"])({show:!1,email:""}),u=function(){a.email&&e.push({name:l["a"].customerService,params:{id:0,email:a.email}})},d=function(){c.value?e.push({name:l["a"].customerService}):a.show=!a.show},b=function(){a.show=!1};return Object(r["a"])(Object(r["a"])({},Object(o["toRefs"])(a)),{},{clickCustomerService:d,enterChatRoom:u,cancelShow:b})}}),d=(n("dba3"),n("6e98"),n("6b0d")),b=n.n(d);const p=b()(u,[["render",a],["__scopeId","data-v-76f94eee"]]);t["a"]=p},"68d6":function(e,t,n){},"6bc8":function(e,t,n){"use strict";n("e8b1")},"6e98":function(e,t,n){"use strict";n("e50c")},7145:function(e,t,n){"use strict";n("883e")},7701:function(e,t,n){"use strict";n("86c2")},"80b7":function(e,t,n){"use strict";var o=n("f2bf");function c(e,t,n,c,a,r){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["panel-card shader-smooth",{rounded:e.rounded}])},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)}var a=Object(o["defineComponent"])({name:"PanelCard",props:{rounded:{type:Boolean,default:!0}},setup:function(){return{}}}),r=(n("7145"),n("6b0d")),i=n.n(r);const l=i()(a,[["render",c],["__scopeId","data-v-cef60b30"]]);t["a"]=l},"86c2":function(e,t,n){},"883e":function(e,t,n){},9909:function(e,t,n){"use strict";var o=n("f2bf"),c=function(e){return Object(o["pushScopeId"])("data-v-3235bbac"),e=e(),Object(o["popScopeId"])(),e},a={class:"p-6"},r=c((function(){return Object(o["createElementVNode"])("div",{class:"title"},"How to play",-1)})),i={class:"text"},l=c((function(){return Object(o["createElementVNode"])("div",{class:"foot"},[Object(o["createElementVNode"])("div",{class:"foot-title"},"You’ve Earned Winnings!"),Object(o["createElementVNode"])("div",{class:"foot-text"},"Now it’s time to claim your winnings. Once the match completes check your scorecard for your rank & WINNINGS!")],-1)}));function s(e,t,n,c,s,u){var d=Object(o["resolveComponent"])("BaseNavBar"),b=Object(o["resolveComponent"])("SportNav"),p=Object(o["resolveComponent"])("AppPageTemplate");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{header:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{"left-text":"How to play",onClickLeft:e.goBackProfile},null,8,["onClickLeft"])]})),default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",a,[r,Object(o["createElementVNode"])("div",i,Object(o["toDisplayString"])(e.text),1),Object(o["createVNode"])(b,{showSports:e.sportArr,square:!1,initSportId:e.currentSport,onChange:e.updatePage},null,8,["showSports","initSportId","onChange"]),Object(o["renderSlot"])(e.$slots,"stepCard",{},void 0,!0),l])]})),_:3})}n("b0c0");var u=n("2383"),d=n("4c65"),b=n("ffae"),p=n("5198"),m=n("6c02"),f=n("b7f3"),O=n("afbc"),j=Object(o["defineComponent"])({name:"DefaultHowToPlayMobil",components:{AppPageTemplate:u["a"],BaseNavBar:d["a"],SportNav:b["a"]},setup:function(){var e=[p["g"].CRICKET,p["g"].FOOTBALL],t=Object(o["ref"])(e[0]),n=Object(m["useRoute"])(),c=function(e){console.log("sport",p["g"][e].toLowerCase());var t=p["g"][e].toLowerCase();"cricket"==t?O["a"].push({name:f["a"].howToPlayMobilCricket}):O["a"].push({name:f["a"].howToPlayMobilFootball})};Object(o["onBeforeMount"])((function(){n.name===f["a"].howToPlayMobilCricket?t.value=p["g"].CRICKET:n.name===f["a"].howToPlayMobilFootball&&(t.value=p["g"].FOOTBALL)}));var a=function(){O["a"].push({name:f["a"].userProfile})};return{sportArr:e,currentSport:t,updatePage:c,text:"The How to Play page offers a brief about the playing pattern of the platform. To become a champion, mastering the skill is required. This page covers everything from creating a team to winning a contest. Learn more to become a champion.",goBackProfile:a}}}),v=(n("a915"),n("6b0d")),g=n.n(v);const h=g()(j,[["render",s],["__scopeId","data-v-3235bbac"]]);t["a"]=h},a915:function(e,t,n){"use strict";n("10c9")},b79c:function(e,t,n){},b970:function(e,t,n){},c2c5:function(e,t,n){},d09e:function(e,t,n){"use strict";n("b970")},d55e:function(e,t,n){"use strict";n("b79c")},dba3:function(e,t,n){"use strict";n("c2c5")},e50c:function(e,t,n){},e8b1:function(e,t,n){},ffae:function(e,t,n){"use strict";var o=n("f2bf"),c={class:"sport-nav"};function a(e,t,n,a,r,i){var l=Object(o["resolveComponent"])("SportButton");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.navItems,(function(t){return Object(o["openBlock"])(),Object(o["createBlock"])(l,{class:"flex-1",key:t,sportId:e.ESport_id[t],active:e.activeItem===e.ESport_id[t],disabled:e.disabled,square:e.square,onClick:function(n){return e.onChange(e.ESport_id[t])}},null,8,["sportId","active","disabled","square","onClick"])})),128))])}n("a9e3"),n("d81d"),n("4de4"),n("d3b7"),n("b64b");var r=n("046b"),i=n("880e"),l=n("5198"),s=Object(o["defineComponent"])({name:"SportNav",components:{SportButton:r["a"],PanelButton:i["a"]},props:{initSportId:{type:Number,default:l["g"].CRICKET},disabled:{type:Boolean,default:!1},showSports:{type:Array,default:function(){return[]}},square:{type:Boolean,default:!0}},setup:function(e,t){var n=t.emit,c=Object(o["computed"])((function(){return e.showSports.length>0?e.showSports.map((function(e){return l["g"][e]})):Object.keys(l["g"]).filter((function(e){return!Number(e)}))})),a=Object(o["ref"])(e.initSportId),r=function(e){a.value=e,n("change",e)};return{activeItem:a,navItems:c,ESport_id:l["g"],onChange:r}}}),u=(n("6bc8"),n("6b0d")),d=n.n(u);const b=d()(s,[["render",a],["__scopeId","data-v-ee59e1f6"]]);t["a"]=b}}]);