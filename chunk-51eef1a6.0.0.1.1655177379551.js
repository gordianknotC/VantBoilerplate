(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51eef1a6"],{1570:function(e,t,n){},"20d9":function(e,t,n){"use strict";n("3902")},2165:function(e,t,n){"use strict";var a=n("f2bf");function c(e,t,n,c,o,i){var r=Object(a["resolveComponent"])("svg-icon"),l=Object(a["resolveComponent"])("ProjectImage");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:Object(a["normalizeClass"])(["panel-icon",{active:e.isActive}]),style:Object(a["normalizeStyle"])({width:e.size+e.sizeUnit,height:e.size+e.sizeUnit})},[Object(a["renderSlot"])(e.$slots,"default",{},(function(){return[e.icon&&"svg"===e.iconType?(Object(a["openBlock"])(),Object(a["createBlock"])(r,{key:0,width:e.iconSize+e.sizeUnit,height:e.iconSize+e.sizeUnit,name:e.isActive?e.defaultActiveIcon:e.icon},null,8,["width","height","name"])):e.icon&&"image"===e.iconType?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:1,class:"header-logo mt-1",name:(e.isActive?e.defaultActiveIcon:e.icon)+".png",width:e.iconSize+e.sizeUnit,height:e.iconSize+e.sizeUnit,rounded:""},null,8,["name","width","height"])):Object(a["createCommentVNode"])("",!0)]}),!0)],6)}n("a9e3");var o=n("57ab"),i=Object(a["defineComponent"])({name:"PanelIcon",components:{ProjectImage:o["a"]},props:{isActive:{type:Boolean,default:!1},icon:{type:String,default:""},sizeUnit:{type:String,default:function(){return"px"}},activeIcon:{type:String},size:{type:Number,default:32},iconSize:{type:Number,default:20},iconType:{type:String,default:function(){return"svg"}}},setup:function(e){var t=Object(a["computed"])((function(){return e.isActive&&!e.activeIcon?e.icon:e.activeIcon}));return{defaultActiveIcon:t}}}),r=(n("20d9"),n("6b0d")),l=n.n(r);const s=l()(i,[["render",c],["__scopeId","data-v-5dd351e3"]]);t["a"]=s},"27ea":function(e,t,n){"use strict";n.r(t);var a=n("f2bf"),c=function(e){return Object(a["pushScopeId"])("data-v-97399120"),e=e(),Object(a["popScopeId"])(),e},o={class:"recent-transactions"},i={class:"recent-item"},r=c((function(){return Object(a["createElementVNode"])("div",{class:"title"},"Deposit",-1)})),l={class:"value"},s={class:"recent-item"},d=c((function(){return Object(a["createElementVNode"])("div",{class:"title"},"Winnings",-1)})),u={class:"value"},b={class:"recent-item"},p=c((function(){return Object(a["createElementVNode"])("div",{class:"title"}," Bonus",-1)})),f={class:"value"},m={class:"recent-item"},O=c((function(){return Object(a["createElementVNode"])("div",{class:"title"},"Ticket",-1)})),j={class:"value"},v={class:"px-6"},y={class:"recent--category"},g={key:0,class:"recent px-6 py-4"},S={key:1,class:"recent px-6 py-4"};function h(e,t,n,c,h,k){var N=Object(a["resolveComponent"])("BaseNavBar"),B=Object(a["resolveComponent"])("PanelButton"),w=Object(a["resolveComponent"])("WithdrawRecordList"),C=Object(a["resolveComponent"])("AppPageTemplate");return Object(a["openBlock"])(),Object(a["createBlock"])(C,null,{header:Object(a["withCtx"])((function(){return[Object(a["createVNode"])(N,{"left-text":e.$i18n.$t("allTransaction")},null,8,["left-text"])]})),default:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("div",i,[r,Object(a["createElementVNode"])("div",l,Object(a["toDisplayString"])(e.cashSymbol)+Object(a["toDisplayString"])(e.wallet.cash),1)]),Object(a["createElementVNode"])("div",s,[d,Object(a["createElementVNode"])("div",u,Object(a["toDisplayString"])(e.cashSymbol)+Object(a["toDisplayString"])(e.wallet.winnings),1)]),Object(a["createElementVNode"])("div",b,[p,Object(a["createElementVNode"])("div",f,Object(a["toDisplayString"])(e.cashSymbol)+Object(a["toDisplayString"])(e.wallet.coin),1)]),Object(a["createElementVNode"])("div",m,[O,Object(a["createElementVNode"])("div",j,Object(a["toDisplayString"])(e.wallet.ticket),1)])]),Object(a["createElementVNode"])("div",v,[Object(a["createElementVNode"])("div",y,[Object(a["createVNode"])(B,{name:e.$i18n.$t("allTransaction"),class:Object(a["normalizeClass"])({active:e.isAllTransaction}),relief:e.reliefHandler(e.TransactionInformation.ALL),block:!1,onClick:t[0]||(t[0]=function(t){return e.changeCategory(e.TransactionInformation.ALL)})},{expansion:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$i18n.$t("allTransaction")),1)]})),_:1},8,["name","class","relief"]),Object(a["createVNode"])(B,{name:e.$i18n.$t("withdrawalTransaction"),class:Object(a["normalizeClass"])({active:e.isWithdrawalTransaction}),relief:e.reliefHandler(e.TransactionInformation.WITHDRAWAL),block:!1,onClick:t[1]||(t[1]=function(t){return e.changeCategory(e.TransactionInformation.WITHDRAWAL)})},{expansion:Object(a["withCtx"])((function(){return[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.$i18n.$t("withdrawalTransaction")),1)]})),_:1},8,["name","class","relief"])])]),e.isAllTransaction?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",g,[Object(a["createVNode"])(w,{"payload-type":e.TransactionInformation.ALL},null,8,["payload-type"])])):Object(a["createCommentVNode"])("",!0),e.isWithdrawalTransaction?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",S,[Object(a["createVNode"])(w,{"payload-type":e.TransactionInformation.WITHDRAWAL},null,8,["payload-type"])])):Object(a["createCommentVNode"])("",!0)]})),_:1})}var k=n("b192"),N=n("2383"),B=n("4c65"),w=n("ed48"),C={class:"single-task"},E={class:"single-task-left"},V={class:"name"},x={class:"single-task-right"},T={class:"coins"},z=Object(a["createTextVNode"])("Go"),I={key:1,class:"text-label text-xs"};function A(e,t,n,c,o,i){var r=Object(a["resolveComponent"])("PanelIcon"),l=Object(a["resolveComponent"])("svg-icon"),s=Object(a["resolveComponent"])("FlatButton");return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",C,[Object(a["createElementVNode"])("div",E,[Object(a["createVNode"])(r,{icon:e.iconName,size:48,"icon-size":e.propIconSize},null,8,["icon","icon-size"]),Object(a["createElementVNode"])("div",V,Object(a["toDisplayString"])(e.title),1)]),Object(a["createElementVNode"])("div",x,[Object(a["createElementVNode"])("div",T,[Object(a["createVNode"])(l,{name:e.rewardIconFormat(e.rewardType)},null,8,["name"]),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.rewardFormat(e.rewardAmount,e.rewardType)),1)]),e.status===e.ETaskStatus.PENDING?(Object(a["openBlock"])(),Object(a["createBlock"])(s,{key:0,class:"btn",onClick:e.receiveHandler},{default:Object(a["withCtx"])((function(){return[z]})),_:1},8,["onClick"])):Object(a["createCommentVNode"])("",!0),e.status===e.ETaskStatus.DONE?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",I,"Received")):Object(a["createCommentVNode"])("",!0)])])}n("a9e3");var D=n("2165"),_=n("0032"),$=n("e4fa"),P=n("5198"),W=n("6c02"),L=Object(a["defineComponent"])({name:"SingleTask",emits:["receive"],components:{FlatButton:w["a"],SvgIcon:_["a"],PanelIcon:D["a"]},props:{iconName:{type:String,default:"prize-2"},propIconSize:{type:Number,default:28},rewardAmount:{type:Number,default:100},rewardType:{type:Number,default:P["d"].COINS},title:{type:String,default:"Verify Email"},description:{type:String,default:""},status:{type:Number},redirect:{type:String}},setup:function(e,t){var n=t.emit,a=Object(W["useRouter"])(),c=function(){n("receive"),a.push({name:e.redirect})};return{ETaskStatus:P["j"],receiveHandler:c,rewardFormat:$["b"],rewardIconFormat:$["c"]}}}),F=(n("3b41"),n("6b0d")),R=n.n(F);const H=R()(L,[["render",A],["__scopeId","data-v-8a5c719a"]]);var U=H,G=n("b7f3"),J=n("880e"),X=(n("b0c0"),{class:"card card--linearBG single-transaction"}),M={class:"card-item top"},q={class:"card-date"},K={class:"card-no"},Q={class:"card-item down"},Y={class:"card-name"},Z={class:"card-anount"};function ee(e,t,n,c,o,i){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",X,[Object(a["createElementVNode"])("div",M,[Object(a["createElementVNode"])("div",q,Object(a["toDisplayString"])(e.date),1),Object(a["createElementVNode"])("div",K,Object(a["toDisplayString"])(e.no),1)]),Object(a["createElementVNode"])("div",Q,[Object(a["createElementVNode"])("div",Y,Object(a["toDisplayString"])(e.name),1),Object(a["createElementVNode"])("div",Z,Object(a["toDisplayString"])(e.amount),1)])])}var te=Object(a["defineComponent"])({name:"SingleTransaction",components:{FlatButton:w["a"]},props:{date:{type:String,default:""},name:{type:String,default:""},no:{type:String,default:""},amount:{type:Number,default:0}},setup:function(e,t){t.emit;return{}}});n("a45f");const ne=R()(te,[["render",ee],["__scopeId","data-v-5ee9d20c"]]);var ae=ne,ce=n("a5de"),oe=n("77b3"),ie=n("0613"),re=n("8c1a"),le=Object(a["defineComponent"])({name:"RecentTransactions",components:{AppPageTemplate:N["a"],BaseNavBar:B["a"],FlatButton:w["a"],SingleTask:U,PanelButton:J["a"],SingleTransaction:ae,WithdrawRecordList:oe["a"],NoDataFound:re["a"]},setup:function(){var e=Object(ie["b"])(),t=e.user,n=Object(a["reactive"])({category:P["u"].ALL}),c=function(e){return e==n.category?"sunk":"low"},o=function(e){n.category=e},i=Object(a["computed"])((function(){return n.category===P["u"].ALL})),r=Object(a["computed"])((function(){return n.category===P["u"].DEPOSIT})),l=Object(a["computed"])((function(){return n.category===P["u"].WITHDRAWAL})),s=Object(a["computed"])((function(){var e=t.state.balance,n=e.center.cash.amount+e.fantasyee.cash,a=e.center.coin.amount+e.fantasyee.coin,c=e.center.ticket.fantasyee+e.fantasyee.ticket,o=e.center.winnings.amount+e.fantasyee.winnings,i=n+a+o;return{cash:n,coin:a,ticket:c,winnings:o,total_balance:i}}));return Object(k["a"])(Object(k["a"])({},Object(a["toRefs"])(n)),{},{reliefHandler:c,TransactionInformation:P["u"],changeCategory:o,RouterNames:G["a"],cashSymbol:ce["n"],isAllTransaction:i,isDepositTransaction:r,isWithdrawalTransaction:l,wallet:s})}});n("2a02");const se=R()(le,[["render",h],["__scopeId","data-v-97399120"]]);t["default"]=se},"2a02":function(e,t,n){"use strict";n("6450")},3902:function(e,t,n){},"3b41":function(e,t,n){"use strict";n("1570")},6450:function(e,t,n){},"81ba":function(e,t,n){},"880e":function(e,t,n){"use strict";n("b0c0");var a=n("f2bf"),c=["disabled"],o={key:0,class:"inner-wrapper"},i={class:"flex flex-col"},r={key:0,class:"panel-button__num"};function l(e,t,n,l,s,d){var u=Object(a["resolveComponent"])("PanelIcon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{class:Object(a["normalizeClass"])(["panel-button",[{vertical:"vertical"===e.position,horizontal:"horizontal"===e.position,"w-full":e.block,"shader-smooth":"high"===e.relief},"panel-button--".concat(e.relief)]]),disabled:e.disabled},[e.icon?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",o,[Object(a["createVNode"])(u,{class:Object(a["normalizeClass"])(["panel-button__icon",{"mr-4":"horizontal"===e.position}]),icon:e.icon,size:e.size,"icon-size":e.iconSize},null,8,["class","icon","size","icon-size"]),Object(a["createElementVNode"])("div",i,[Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["panel-button__text",{"mt-1":"vertical"===e.position}])},Object(a["toDisplayString"])(e.name),3),e.isWallet?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,Object(a["toDisplayString"])(e.cashSymbol)+Object(a["toDisplayString"])(e.amount),1)):Object(a["createCommentVNode"])("",!0),e.subText?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:1,class:Object(a["normalizeClass"])(["panel-button__subText",{"mt-1":"vertical"===e.position}])},Object(a["toDisplayString"])(e.subText),3)):Object(a["createCommentVNode"])("",!0)])])):Object(a["createCommentVNode"])("",!0),Object(a["renderSlot"])(e.$slots,"expansion",{},void 0,!0)],10,c)}n("a9e3");var s=n("2165"),d=Object(a["defineComponent"])({name:"PanelButton",components:{PanelIcon:s["a"]},props:{icon:{type:String},name:{type:String,default:""},disabled:{type:Boolean,default:!1},position:{type:String,default:"vertical"},size:{type:Number,default:32},iconSize:{type:Number,default:20},block:{type:Boolean,default:!0},relief:{type:String,default:"high"},subText:{type:String},isWallet:{type:Boolean,default:!1},amount:{type:Number},cashSymbol:{type:String,default:""}},setup:function(){}}),u=(n("eae5"),n("6b0d")),b=n.n(u);const p=b()(d,[["render",l],["__scopeId","data-v-2d81e6e6"]]);t["a"]=p},9739:function(e,t,n){},a45f:function(e,t,n){"use strict";n("f264")},bef3:function(e,t,n){"use strict";n("9739")},e4fa:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return O}));n("99af"),n("ac1f"),n("5319"),n("5b81");var a=n("e9a7"),c=n.n(a),o=n("d70b"),i=n("a5de"),r=n("5198"),l=n("ac84"),s=n("2d58"),d=(n("38cf"),n("6612")),u=n.n(d),b=function(){function e(){Object(l["a"])(this,e),this.numeral=u.a}return Object(s["a"])(e,[{key:"getNumber",value:function(e){return u()(e).value()}},{key:"asFloat",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return u()(e).format("0,0.".concat("0".repeat(t)),Math.floor)}},{key:"asReadableDollar",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return"".concat(i["n"]," ").concat(this.asFloat(e,t))}}]),e}(),p=new b,f=function(e,t){switch(t){case r["d"].CASH:return"".concat(i["n"]," ").concat(p.asFloat(e,i["o"]));case r["d"].EXP:return"".concat(e," ").concat(r["d"][t]);case r["d"].COINS:return"".concat(e," ").concat(c()(r["d"][t]));default:return""}},m=function(e){switch(e){case r["d"].CASH:return"cash";case r["d"].EXP:return"exp";case r["d"].COINS:return"coin";default:return""}},O=function(e){return e.replaceAll("${PRODUCT}",c()("pavo11")).replaceAll("${WEBSITE}",o["c"])}},eae5:function(e,t,n){"use strict";n("81ba")},ed48:function(e,t,n){"use strict";var a=n("f2bf"),c=["disabled","type"];function o(e,t,n,o,i,r){var l=Object(a["resolveComponent"])("svg-icon");return Object(a["openBlock"])(),Object(a["createElementBlock"])("button",{class:Object(a["normalizeClass"])(["flat-button",[{active:e.active,block:e.block,shadow:e.shadow,disabled:e.disabled,prefix:e.prefix,suffix:e.suffix,loading:e.loading},"flat-button--".concat(e.color),"flat-button--".concat(e.type),"flat-button--".concat(e.size)]]),disabled:e.disabled,type:e.nativeType},[Object(a["renderSlot"])(e.$slots,"loading",{},(function(){return[e.loading?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,class:"loading-icon animate-spin",name:"loading",width:"16px",height:"16px"})):Object(a["createCommentVNode"])("",!0)]}),!0),Object(a["renderSlot"])(e.$slots,"prefix",{},(function(){return[e.prefix?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,class:"prefix-icon",name:e.prefix,width:e.iconSize+"px",height:e.iconSize+"px"},null,8,["name","width","height"])):Object(a["createCommentVNode"])("",!0)]}),!0),Object(a["renderSlot"])(e.$slots,"default",{},void 0,!0),Object(a["renderSlot"])(e.$slots,"suffix",{},(function(){return[e.suffix?(Object(a["openBlock"])(),Object(a["createBlock"])(l,{key:0,class:"suffix-icon",name:e.suffix,width:e.iconSize+"px",height:e.iconSize+"px"},null,8,["name","width","height"])):Object(a["createCommentVNode"])("",!0)]}),!0)],10,c)}n("a9e3");var i=Object(a["defineComponent"])({name:"FlatButton",props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},color:{type:String,default:"primary",validator:function(e){return-1!==["primary","secondary","light","dark"].indexOf(e)}},block:{type:Boolean,default:!1},type:{type:String,default:"normal",validator:function(e){return-1!==["text","normal"].indexOf(e)}},shadow:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:function(e){return-1!==["medium","large","small"].indexOf(e)}},prefix:{type:String,default:""},suffix:{type:String,default:""},loading:{type:Boolean,default:!1},nativeType:{type:String,default:""},iconSize:{type:Number,default:18}},setup:function(){return{}}}),r=(n("bef3"),n("6b0d")),l=n.n(r);const s=l()(i,[["render",o],["__scopeId","data-v-d65d8290"]]);t["a"]=s},f264:function(e,t,n){}}]);