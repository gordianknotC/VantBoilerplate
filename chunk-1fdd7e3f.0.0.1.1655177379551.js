(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fdd7e3f"],{"3ae3":function(e,t,n){"use strict";n.r(t);var o=n("f2bf"),a=function(e){return Object(o["pushScopeId"])("data-v-3f2082b2"),e=e(),Object(o["popScopeId"])(),e},c={class:"p-6"},l={class:"banner"},i={class:"heading p-6"},r={class:"timestamp"},s=a((function(){return Object(o["createElementVNode"])("time",null,"Expires on 22/05/20",-1)})),d=a((function(){return Object(o["createElementVNode"])("p",null,"Refer friends & earn prizes!",-1)}));function b(e,t,n,a,b,u){var p=Object(o["resolveComponent"])("BaseNavBar"),m=Object(o["resolveComponent"])("JoinContestsCard"),j=Object(o["resolveComponent"])("van-image"),O=Object(o["resolveComponent"])("svg-icon"),f=Object(o["resolveComponent"])("PanelCard"),v=Object(o["resolveComponent"])("AppPageTemplate");return Object(o["openBlock"])(),Object(o["createBlock"])(v,null,{header:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(p,{"left-text":e.$i18n.$t("rewards")},null,8,["left-text"])]})),default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(m,{dateTime:"Expires on 22/05/20",buttonText:"Claim ₹50"}),Object(o["createVNode"])(m,{dateTime:"Expires on 22/05/20",buttonText:"Claimed",isClaimed:""}),Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",l,[(Object(o["openBlock"])(),Object(o["createBlock"])(j,{key:0,class:"w-full h-36",src:"https://sportnews-api.snoopyd.com/resource/sportnews/image/news/2022/06/13622.jpg",alt:"banner"}))]),Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",r,[Object(o["createVNode"])(O,{name:"clock"}),s]),d])]})),_:1})])]})),_:1})}var u=n("2383"),p=n("4c65"),m=function(e){return Object(o["pushScopeId"])("data-v-9d9a4cf8"),e=e(),Object(o["popScopeId"])(),e},j={class:"timestamp"},O=m((function(){return Object(o["createElementVNode"])("h5",null,"Join 5 live fantasy H2H contests",-1)})),f=m((function(){return Object(o["createElementVNode"])("p",{class:"subText"},"Join 5 live fantasy head to head contests of Rs.250 and above in indian T20 league & win Rs.50 bonus",-1)})),v={class:"gauge mt-4"},C={class:"gauge-container"},g={class:"gauge-panel"},N=m((function(){return Object(o["createElementVNode"])("p",{class:"ml-2"},"1/5",-1)}));function h(e,t,n,a,c,l){var i=Object(o["resolveComponent"])("svg-icon"),r=Object(o["resolveComponent"])("FlatButton"),s=Object(o["resolveComponent"])("PanelCard");return Object(o["openBlock"])(),Object(o["createBlock"])(s,{class:"contest-card p-6 mb-6"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",j,[Object(o["createVNode"])(i,{name:"clock"}),Object(o["createElementVNode"])("time",null,Object(o["toDisplayString"])(e.dateTime),1)]),O,f,Object(o["createElementVNode"])("div",v,[Object(o["createElementVNode"])("div",C,[Object(o["createElementVNode"])("div",g,[Object(o["createVNode"])(i,{ref:"gaugeSVG",name:"contest-progress-bar",width:"100%",height:"100%"},null,512)]),N])]),Object(o["createVNode"])(r,{class:"mt-4",block:"",shadow:"",size:"large",disabled:e.isClaimed,color:[e.isClaimed?"light":"primary"]},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.buttonText),1)]})),_:1},8,["disabled","color"])]})),_:1})}var y=n("6514"),V=n("80b7"),k=n("ed48"),B=n("52e5"),x=Object(o["defineComponent"])({name:"JoinContestsCard",components:{PanelCard:V["a"],FlatButton:k["a"],VipHorizontalGauge:B["a"]},props:{dateTime:{type:String,default:""},isClaimed:{type:Boolean,default:!1},buttonText:{type:String,default:""}},setup:function(){return{tzToLocal:y["b"]}}}),S=(n("95dc3"),n("6b0d")),E=n.n(S);const w=E()(x,[["render",h],["__scopeId","data-v-9d9a4cf8"]]);var z=w,T=n("880e"),_=Object(o["defineComponent"])({name:"Rewards",components:{AppPageTemplate:u["a"],BaseNavBar:p["a"],JoinContestsCard:z,PanelCard:V["a"],PanelButton:T["a"]},setup:function(){return{}}});n("6b8a");const P=E()(_,[["render",b],["__scopeId","data-v-3f2082b2"]]);t["default"]=P},"6b8a":function(e,t,n){"use strict";n("b9d9")},"81ba":function(e,t,n){},"880e":function(e,t,n){"use strict";n("b0c0");var o=n("f2bf"),a=["disabled"],c={key:0,class:"inner-wrapper"},l={class:"flex flex-col"},i={key:0,class:"panel-button__num"};function r(e,t,n,r,s,d){var b=Object(o["resolveComponent"])("PanelIcon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{class:Object(o["normalizeClass"])(["panel-button",[{vertical:"vertical"===e.position,horizontal:"horizontal"===e.position,"w-full":e.block,"shader-smooth":"high"===e.relief},"panel-button--".concat(e.relief)]]),disabled:e.disabled},[e.icon?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createVNode"])(b,{class:Object(o["normalizeClass"])(["panel-button__icon",{"mr-4":"horizontal"===e.position}]),icon:e.icon,size:e.size,"icon-size":e.iconSize},null,8,["class","icon","size","icon-size"]),Object(o["createElementVNode"])("div",l,[Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["panel-button__text",{"mt-1":"vertical"===e.position}])},Object(o["toDisplayString"])(e.name),3),e.isWallet?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,Object(o["toDisplayString"])(e.cashSymbol)+Object(o["toDisplayString"])(e.amount),1)):Object(o["createCommentVNode"])("",!0),e.subText?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:1,class:Object(o["normalizeClass"])(["panel-button__subText",{"mt-1":"vertical"===e.position}])},Object(o["toDisplayString"])(e.subText),3)):Object(o["createCommentVNode"])("",!0)])])):Object(o["createCommentVNode"])("",!0),Object(o["renderSlot"])(e.$slots,"expansion",{},void 0,!0)],10,a)}n("a9e3");var s=n("2165"),d=Object(o["defineComponent"])({name:"PanelButton",components:{PanelIcon:s["a"]},props:{icon:{type:String},name:{type:String,default:""},disabled:{type:Boolean,default:!1},position:{type:String,default:"vertical"},size:{type:Number,default:32},iconSize:{type:Number,default:20},block:{type:Boolean,default:!0},relief:{type:String,default:"high"},subText:{type:String},isWallet:{type:Boolean,default:!1},amount:{type:Number},cashSymbol:{type:String,default:""}},setup:function(){}}),b=(n("eae5"),n("6b0d")),u=n.n(b);const p=u()(d,[["render",r],["__scopeId","data-v-2d81e6e6"]]);t["a"]=p},"95dc3":function(e,t,n){"use strict";n("f070")},b9d9:function(e,t,n){},eae5:function(e,t,n){"use strict";n("81ba")},f070:function(e,t,n){}}]);