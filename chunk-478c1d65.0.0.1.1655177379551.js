(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-478c1d65"],{"06bc":function(e,t,n){e.exports=n.p+"img/set-up-step3.b68b4739.png"},"0d8a":function(e,t,n){},"0e94":function(e,t,n){e.exports=n.p+"img/logo.f9c4bf36.svg"},"1cb4":function(e,t,n){e.exports=n.p+"img/logo-blue.5ffae856.png"},2153:function(e,t,n){e.exports=n.p+"img/football_step6.d1d67f85.png"},"217e":function(e,t,n){e.exports=n.p+"img/daily-bonus-gift.a803d5d2.png"},2383:function(e,t,n){"use strict";var o=n("f2bf"),c={class:"page-wrapper"},a={key:1},r={key:2,class:"title"};function i(e,t,n,i,s,p){var l=Object(o["resolveComponent"])("van-icon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[e.hasBack?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,class:"page-back",onClick:t[0]||(t[0]=function(){return e.backHandler&&e.backHandler.apply(e,arguments)})},[Object(o["createVNode"])(l,{name:"arrow-left"}),Object(o["createElementVNode"])("span",null,Object(o["toDisplayString"])(e.backText),1)])):Object(o["createCommentVNode"])("",!0),e.hasTitle||e.hasBack||e.noHeader?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createElementBlock"])("header",a,[Object(o["renderSlot"])(e.$slots,"header",{},void 0,!0)])),e.hasTitle?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h2",r,Object(o["toDisplayString"])(e.title),1)):Object(o["createCommentVNode"])("",!0),Object(o["createElementVNode"])("main",{id:"main",class:Object(o["normalizeClass"])(e.paddingClass)},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],2),Object(o["createElementVNode"])("footer",null,[Object(o["renderSlot"])(e.$slots,"footer",{},void 0,!0)])])}n("b0c0");var s=n("6c02"),p=n("b7f3"),l=n("0613"),u=n("6034"),f=n("65ce"),d=n("57ab"),b=Object(o["defineComponent"])({name:"AppPageTemplate",components:{CustomerServiceButton:f["a"],ProjectImage:d["a"]},props:{hasBack:{type:Boolean,default:!1},hasTitle:{type:Boolean,default:!1},backText:{type:String,default:"Back"},title:{type:String,default:"Title"},isCustomBack:{type:Boolean,default:!1},noHeader:{type:Boolean,default:!1},usePadding:{type:Boolean,default:function(){return!1}},showChat:{type:Boolean,default:!0}},setup:function(e,t){var n=t.emit,c=Object(s["useRouter"])(),a=function(){e.isCustomBack?n("back"):c.back()},r=Object(l["b"])(),i=r.global,f=Object(o["ref"])(!1),d=Object(u["a"])(),b=i.getters.currentLang,g=Object(o["reactive"])([{name:"English",value:"en",className:Object(o["computed"])((function(){return"en"===b.value?"lang-active":""}))},{name:d.$t("indian"),value:"ind",className:Object(o["computed"])((function(){return"ind"===b.value?"lang-active":""}))}]),m=function(e){i.actions.setLang(e.value),f.value=!1},h=function(){f.value=!0},v=Object(s["useRoute"])(),O=v.name===p["a"].customerService,j=Object(o["computed"])((function(){return e.usePadding?"default-padding":""}));return{RouterNames:p["a"],backHandler:a,isLangDialogShow:f,langOpts:g,setLang:m,setDialog:h,isAtCustomerService:O,paddingClass:j}}}),g=(n("7701"),n("6b0d")),m=n.n(g);const h=m()(b,[["render",i],["__scopeId","data-v-91ddfc6a"]]);t["a"]=h},"242f":function(e,t,n){e.exports=n.p+"img/avatar.71020390.svg"},"33d8":function(e,t,n){e.exports=n.p+"img/congratulation.9b002eab.png"},"3e76":function(e,t,n){e.exports=n.p+"img/players.f2828523.png"},4990:function(e,t,n){e.exports=n.p+"img/step-1.1cccd771.png"},"4c65":function(e,t,n){"use strict";var o=n("f2bf"),c={class:"button-icon"};function a(e,t,n,a,r,i){var s=Object(o["resolveComponent"])("svg-icon"),p=Object(o["resolveComponent"])("van-nav-bar");return Object(o["openBlock"])(),Object(o["createBlock"])(p,{fixed:"",placeholder:"","left-arrow":e.leftArrow,onClickLeft:e.onClickLeftIcon},{right:Object(o["withCtx"])((function(){return[Object(o["renderSlot"])(e.$slots,"right",{},(function(){return[e.showRightIcon?(Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{key:0,class:"button m-0 p-0 cursor-pointer",onClick:t[0]||(t[0]=function(){return e.onClickRightIcon&&e.onClickRightIcon.apply(e,arguments)})},[Object(o["createElementVNode"])("div",c,[Object(o["renderSlot"])(e.$slots,"icon",{},(function(){return[e.iconName?(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:0,name:e.iconName,width:"1.5rem",height:"1.5rem"},null,8,["name"])):Object(o["createCommentVNode"])("",!0)]}),!0)])])):Object(o["createCommentVNode"])("",!0)]}),!0)]})),_:3},8,["left-arrow","onClickLeft"])}var r=n("1c16"),i=n("6c02"),s=Object(o["defineComponent"])({name:"BaseNavBar",props:{leftArrow:{type:Boolean,default:function(){return!0}},iconName:{type:String}},components:{},setup:function(e,t){var n=t.emit,c=t.attrs,a=Object(i["useRouter"])(),s=Object(o["computed"])((function(){return e.iconName})),p=function(){n("click-right")},l=function(){r["a"].undefined(c.onClickLeft)?a.back():n("click-left")};return{showRightIcon:s,onClickRightIcon:p,onClickLeftIcon:l}}}),p=(n("d55e"),n("6b0d")),l=n.n(p);const u=l()(s,[["render",a],["__scopeId","data-v-4a25e411"]]);t["a"]=u},"509d":function(e,t,n){e.exports=n.p+"img/cricket_step1.1cccd771.png"},"56ea":function(e,t,n){e.exports=n.p+"img/logo-qrcode.fcb4d504.png"},"57ab":function(e,t,n){"use strict";var o=n("f2bf");function c(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("van-image");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{src:e.imgUrl,alt:e.altText,fit:"contain",round:e.round,width:e.width,height:e.height},null,8,["src","alt","round","width","height"])}n("a9e3"),n("99af"),n("b0c0");var a=Object(o["defineComponent"])({name:"ProjectImage",props:{name:{type:String,require:!0},round:{type:Boolean,default:!1},width:{type:[String,Number]},height:{type:[String,Number]},alt:{type:String}},setup:function(e){var t=Object(o["computed"])((function(){return n("7659")("./".concat(e.name))})),c=Object(o["computed"])((function(){return e.alt||Object(o["capitalize"])("pavo11")}));return{imgUrl:t,altText:c}}}),r=n("6b0d"),i=n.n(r);const s=i()(a,[["render",c]]);t["a"]=s},"59f5":function(e,t,n){e.exports=n.p+"img/logo-vertical.191355ed.svg"},"5bcd":function(e,t,n){e.exports=n.p+"img/step-1.03798287.png"},"5e0c":function(e,t,n){e.exports=n.p+"img/football_step1.f55b5a3c.png"},"5ec3":function(e,t,n){e.exports=n.p+"img/logo.97ed9437.png"},"65ce":function(e,t,n){"use strict";var o=n("f2bf"),c={class:"p-4"};function a(e,t,n,a,r,i){var s=Object(o["resolveComponent"])("svg-icon"),p=Object(o["resolveComponent"])("van-dialog");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["customer-service",{isLanding:e.isLanding}]),onClick:t[0]||(t[0]=function(){return e.clickCustomerService&&e.clickCustomerService.apply(e,arguments)})},[Object(o["createVNode"])(s,{name:"customer-headphone",width:"3rem",height:"3rem"})],2),Object(o["createVNode"])(p,{show:e.show,"onUpdate:show":t[2]||(t[2]=function(t){return e.show=t}),theme:"round-button",confirmButtonText:"Enter chat room",title:"Please enter your email",closeOnClickOverlay:!0,className:["chat-dialog",{isLanding:e.isLanding}],"overlay-class":{isLanding:e.isLanding},onConfirm:e.enterChatRoom},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["withDirectives"])(Object(o["createElementVNode"])("input",{class:"email-input",name:"email",type:"email","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.email=t}),required:""},null,512),[[o["vModelText"],e.email]])])]})),_:1},8,["show","className","overlay-class","onConfirm"]),e.isLanding?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:Object(o["normalizeClass"])(["customer-service-dialog-layout",{show:e.show}]),onClick:t[3]||(t[3]=function(){return e.cancelShow&&e.cancelShow.apply(e,arguments)})},null,2)):Object(o["createCommentVNode"])("",!0)],64)}var r=n("b192"),i=n("6c02"),s=n("b7f3"),p=n("0613"),l=Object(o["defineComponent"])({name:"CustomerServiceButton",props:{isLanding:{type:Boolean,default:!1}},setup:function(){var e=Object(i["useRouter"])(),t=Object(p["b"])(),n=t.user,c=n.getters.isLogin,a=Object(o["reactive"])({show:!1,email:""}),l=function(){a.email&&e.push({name:s["a"].customerService,params:{id:0,email:a.email}})},u=function(){c.value?e.push({name:s["a"].customerService}):a.show=!a.show},f=function(){a.show=!1};return Object(r["a"])(Object(r["a"])({},Object(o["toRefs"])(a)),{},{clickCustomerService:u,enterChatRoom:l,cancelShow:f})}}),u=(n("dba3"),n("6e98"),n("6b0d")),f=n.n(u);const d=f()(l,[["render",a],["__scopeId","data-v-76f94eee"]]);t["a"]=d},6679:function(e,t,n){e.exports=n.p+"img/football_step4.25d776a3.png"},"67ff":function(e,t,n){e.exports=n.p+"img/rewards_fantasee.1b44bfc9.png"},"6e98":function(e,t,n){"use strict";n("e50c")},"705a":function(e,t,n){e.exports=n.p+"img/step-4.f7b05d7e.png"},7340:function(e,t,n){e.exports=n.p+"img/football_step3.0b606e13.png"},7659:function(e,t,n){var o={"./SSL.png":"9199","./advanced/rewards_fantasee.png":"67ff","./advanced/rewards_lotto.png":"fea5","./advanced/rewards_wheel.png":"94d1","./avatar.png":"b95e","./avatar.svg":"242f","./congratulation.png":"33d8","./daily-bonus-gift.png":"217e","./entry/set-up-step1.png":"aa9c","./entry/set-up-step2.png":"dbff","./entry/set-up-step3.png":"06bc","./entry/step-1.png":"5bcd","./entry/step-2.png":"e756","./entry/step-3.png":"c3af","./fantasy/cricket/step-1.png":"4990","./fantasy/cricket/step-2.png":"ec80","./fantasy/cricket/step-3.png":"de91","./fantasy/cricket/step-4.png":"705a","./fantasy/cricket/step-5.png":"b3ce","./how-to-play/cricket/cricket_step1.png":"509d","./how-to-play/cricket/cricket_step2.png":"cbea","./how-to-play/cricket/cricket_step3.png":"9905","./how-to-play/cricket/cricket_step4.png":"a14c","./how-to-play/cricket/cricket_step5.png":"f0a5","./how-to-play/football/football_step1.png":"5e0c","./how-to-play/football/football_step2.png":"f571","./how-to-play/football/football_step3.png":"7340","./how-to-play/football/football_step4.png":"6679","./how-to-play/football/football_step5.png":"f4b1","./how-to-play/football/football_step6.png":"2153","./logo-blue.png":"1cb4","./logo-qrcode.png":"56ea","./logo-vertical.svg":"59f5","./logo.png":"5ec3","./logo.svg":"0e94","./players.png":"3e76","./players1.5x.png":"bb46","./splash.jpeg":"8bab"};function c(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}c.keys=function(){return Object.keys(o)},c.resolve=a,e.exports=c,c.id="7659"},7701:function(e,t,n){"use strict";n("86c2")},"86c2":function(e,t,n){},"8bab":function(e,t,n){e.exports=n.p+"img/splash.1f76904a.jpeg"},9199:function(e,t,n){e.exports=n.p+"img/SSL.5c271238.png"},"94d1":function(e,t,n){e.exports=n.p+"img/rewards_wheel.aaf8067e.png"},9905:function(e,t,n){e.exports=n.p+"img/cricket_step3.5879e6e4.png"},a14c:function(e,t,n){e.exports=n.p+"img/cricket_step4.ab7094f4.png"},aa9c:function(e,t,n){e.exports=n.p+"img/set-up-step1.0c8ef3e7.png"},b3ce:function(e,t,n){e.exports=n.p+"img/step-5.073e479e.png"},b79c:function(e,t,n){},b95e:function(e,t,n){e.exports=n.p+"img/avatar.19bc2a5d.png"},bb46:function(e,t,n){e.exports=n.p+"img/players1.5x.0699ca7c.png"},c2c5:function(e,t,n){},c3af:function(e,t,n){e.exports=n.p+"img/step-3.dfe0cccc.png"},cbea:function(e,t,n){e.exports=n.p+"img/cricket_step2.0b606e13.png"},d03e:function(e,t,n){"use strict";var o=n("f2bf");function c(e,t,n,c,a,r){var i=Object(o["resolveComponent"])("van-button");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{class:Object(o["normalizeClass"])(e.styleClass)},{default:Object(o["withCtx"])((function(){return[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)]})),_:3},8,["class"])}var a=Object(o["defineComponent"])({name:"BaseButton",inheritAttrs:!0,props:{surfaceShader:{type:Boolean,default:function(){return!1}},shadowShader:{type:Boolean,default:function(){return!0}}},setup:function(e){return{styleClass:Object(o["computed"])((function(){var t=e.surfaceShader,n=e.shadowShader,o=t&&n?"shader-large-shadow shader-smooth":t?"shader-smooth":n?"shader-large-shadow shader-text-smooth":"";return o}))}}}),r=(n("d13b"),n("6b0d")),i=n.n(r);const s=i()(a,[["render",c],["__scopeId","data-v-7ab2fb4b"]]);t["a"]=s},d13b:function(e,t,n){"use strict";n("0d8a")},d55e:function(e,t,n){"use strict";n("b79c")},dba3:function(e,t,n){"use strict";n("c2c5")},dbff:function(e,t,n){e.exports=n.p+"img/set-up-step2.66f94283.png"},de91:function(e,t,n){e.exports=n.p+"img/step-3.e8cb8ab7.png"},e50c:function(e,t,n){},e756:function(e,t,n){e.exports=n.p+"img/step-2.98140229.png"},ec80:function(e,t,n){e.exports=n.p+"img/step-2.0b606e13.png"},f0a5:function(e,t,n){e.exports=n.p+"img/cricket_step5.d1d67f85.png"},f4b1:function(e,t,n){e.exports=n.p+"img/football_step5.25209211.png"},f571:function(e,t,n){e.exports=n.p+"img/football_step2.1cccd771.png"},fea5:function(e,t,n){e.exports=n.p+"img/rewards_lotto.ac7484b3.png"}}]);