(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61a01336"],{"01cc":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("ac84"),a=n("2d58"),c=(n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("f2bf")),i=function(){function e(){Object(o["a"])(this,e),this.vModelEvents=new Set}return Object(a["a"])(e,[{key:"asVModel",value:function(e){var t,n=e.props,o=e.propName,a=e.emit,i=e.onSet,r=e.onChange,l="update:".concat(o);return this.vModelEvents.add(l),Object(c["computed"])({get:function(){return t!=n[o]&&(null===r||void 0===r||r(n[o])),t=n[o]},set:function(e){null===i||void 0===i||i(e),null===r||void 0===r||r(e),a(l,e)}})}},{key:"hideAutoFillBackground",value:function(e,t){null!==t&&void 0!==t||(t=function(){var t;return e.value=null!==(t=e.value)&&void 0!==t?t:""}),e.addEventListener("animationstart",(function(e){e.animationName.toLowerCase();t()}))}}]),e}()},"0f98":function(e,t,n){"use strict";var o=n("2d58"),a=n("ac84"),c=n("f2bf"),i=n("afbc"),r=n("b7f3"),l=n("33e5"),s=Object(o["a"])((function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6;Object(a["a"])(this,e),this.maxHorizontalItems=n,this.recommendFollowingCards=Object(c["computed"])((function(){var e,n=t.info.state.recommendation;return console.log("recommendFollowingCards:",n),null!==(e=null===n||void 0===n?void 0:n.data)&&void 0!==e?e:[]})),this.hasRecommendations=Object(c["computed"])((function(){var e,n,o;return(null!==(o=null===(n=null===(e=t.recommendFollowingCards)||void 0===e?void 0:e.value)||void 0===n?void 0:n.length)&&void 0!==o?o:0)>0})),this.hasFollowings=Object(c["computed"])((function(){var e,n,o;return(null!==(o=null===(n=null===(e=t.state.followingCards)||void 0===e?void 0:e.data)||void 0===n?void 0:n.length)&&void 0!==o?o:0)>0})),this.hasFollowers=Object(c["computed"])((function(){var e,n,o;return(null!==(o=null===(n=null===(e=t.state.followerCards)||void 0===e?void 0:e.data)||void 0===n?void 0:n.length)&&void 0!==o?o:0)>0})),this.onToggleFollowingListTile=function(e){i["a"].push({name:r["a"].playerDetail,params:{member_id:e}})},this.info=l["a"],this.state=Object(c["reactive"])({followingCards:Object(c["toRef"])(this.info.state,"followings"),followerCards:Object(c["toRef"])(this.info.state,"followers"),recommendationPageCards:Object(c["toRef"])(this.info.state,"recommendation")}),console.log("info:",l["a"])})),d=function(){return new s};t["a"]=d},"20d9":function(e,t,n){"use strict";n("3902")},2165:function(e,t,n){"use strict";var o=n("f2bf");function a(e,t,n,a,c,i){var r=Object(o["resolveComponent"])("svg-icon"),l=Object(o["resolveComponent"])("ProjectImage");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["panel-icon",{active:e.isActive}]),style:Object(o["normalizeStyle"])({width:e.size+e.sizeUnit,height:e.size+e.sizeUnit})},[Object(o["renderSlot"])(e.$slots,"default",{},(function(){return[e.icon&&"svg"===e.iconType?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:0,width:e.iconSize+e.sizeUnit,height:e.iconSize+e.sizeUnit,name:e.isActive?e.defaultActiveIcon:e.icon},null,8,["width","height","name"])):e.icon&&"image"===e.iconType?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:1,class:"header-logo mt-1",name:(e.isActive?e.defaultActiveIcon:e.icon)+".png",width:e.iconSize+e.sizeUnit,height:e.iconSize+e.sizeUnit,rounded:""},null,8,["name","width","height"])):Object(o["createCommentVNode"])("",!0)]}),!0)],6)}n("a9e3");var c=n("57ab"),i=Object(o["defineComponent"])({name:"PanelIcon",components:{ProjectImage:c["a"]},props:{isActive:{type:Boolean,default:!1},icon:{type:String,default:""},sizeUnit:{type:String,default:function(){return"px"}},activeIcon:{type:String},size:{type:Number,default:32},iconSize:{type:Number,default:20},iconType:{type:String,default:function(){return"svg"}}},setup:function(e){var t=Object(o["computed"])((function(){return e.isActive&&!e.activeIcon?e.icon:e.activeIcon}));return{defaultActiveIcon:t}}}),r=(n("20d9"),n("6b0d")),l=n.n(r);const s=l()(i,[["render",a],["__scopeId","data-v-5dd351e3"]]);t["a"]=s},3902:function(e,t,n){},"5bc7":function(e,t,n){},"6ce2":function(e,t,n){"use strict";n("b0c0");var o=n("f2bf");function a(e,t,n,a,c,i){var r=Object(o["resolveComponent"])("ProjectImage"),l=Object(o["resolveComponent"])("van-image");return e.imgUrl?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,width:e.size,height:e.size,fit:"contain",src:e.imgUrl,round:""},{error:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(r,{width:e.size,height:e.size,name:e.name,round:""},null,8,["width","height","name"])]})),_:1},8,["width","height","src"])):(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:1,width:e.size,height:e.size,name:e.name,round:""},null,8,["width","height","name"]))}var c=n("d70b"),i=n("57ab"),r=Object(o["defineComponent"])({name:"AvatarImage",components:{ProjectImage:i["a"]},props:{avatarPath:{type:String,default:""},size:{type:String,default:"40"},name:{type:String,default:function(){return"avatar.svg"}}},setup:function(e){var t=Object(o["computed"])((function(){return e.avatarPath?c["s"]+e.avatarPath:""}));return{imgUrl:t}}}),l=n("6b0d"),s=n.n(l);const d=s()(r,[["render",a]]);t["a"]=d},7145:function(e,t,n){"use strict";n("883e")},"768e":function(e,t,n){"use strict";n.r(t);var o=n("f2bf"),a=function(e){return Object(o["pushScopeId"])("data-v-419f7a15"),e=e(),Object(o["popScopeId"])(),e},c={key:0,class:"loading-wrapper"},i={key:1,class:"header-box mt-1"},r={class:"mx-4 mt-n1-5"},l={class:"mb-2"},s={class:"horizontal-scroll"},d={class:"horizontal-scroll__container"},u={class:"email"},m=a((function(){return Object(o["createElementVNode"])("section",null,[Object(o["createElementVNode"])("p",null,"More >")],-1)})),f=[m],b={key:2,class:"listTile"},p={key:0,class:"listTile__content"},g={key:1,class:"loading-wrapper"},v={key:2,class:"loading-wrapper"},j={key:3},O={class:"p-4"},h={class:"card"},w={class:"card__description"};function k(e,t,n,a,m,k){var y=Object(o["resolveComponent"])("BaseNavBar"),B=Object(o["resolveComponent"])("van-loading"),C=Object(o["resolveComponent"])("AvatarImage"),F=Object(o["resolveComponent"])("panel-icon"),S=Object(o["resolveComponent"])("base-button"),x=Object(o["resolveComponent"])("panel-card"),N=Object(o["resolveComponent"])("MemberListTile"),z=Object(o["resolveComponent"])("AppPageTemplate");return Object(o["openBlock"])(),Object(o["createBlock"])(z,null,{header:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(y,{"left-text":e.$i18n.$t("following"),onClickRight:e.onRouteToFindFollowers,iconName:"refer"},null,8,["left-text","onClickRight"])]})),default:Object(o["withCtx"])((function(){return[e.isRecommendLoading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createVNode"])(B,{color:"#1915bf"})])):Object(o["createCommentVNode"])("",!0),e.hasRecommendations&&!e.isRecommendLoading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",i,[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("div",l,Object(o["toDisplayString"])("".concat(e.$i18n.$t("recommendToYou"))),1),Object(o["createElementVNode"])("div",s,[Object(o["createElementVNode"])("div",d,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.recommendFollowingCards,(function(t,n){return Object(o["openBlock"])(),Object(o["createBlock"])(x,{class:"horizontal-scroll__card",key:n},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(F,{size:42,iconSize:42},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(C,{name:"avatar.png",avatarPath:t.avatar,onClick:function(n){return e.setPlayerPage(t)}},null,8,["avatarPath","onClick"])]})),_:2},1024),Object(o["createElementVNode"])("div",u,Object(o["toDisplayString"])(t.username||t.phone||t.email||"Guest"),1),t.is_follow?(Object(o["openBlock"])(),Object(o["createBlock"])(S,{key:1,size:"small",surfaceShader:!0,shadowShader:!0,onClick:function(){return e.onToggleRecommendation(t,t.member_id)}},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])("".concat(e.$i18n.$t("following"))),1)]})),_:2},1032,["onClick"])):(Object(o["openBlock"])(),Object(o["createBlock"])(S,{key:0,size:"small",surfaceShader:!1,shadowShader:!0,onClick:function(){return e.onToggleRecommendation(t,t.member_id)}},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])("".concat(e.$i18n.$t("follow"))),1)]})),_:2},1032,["onClick"]))]})),_:2},1024)})),128)),e.canShowMore?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{key:0,class:"horizontal-scroll__more",onClick:t[0]||(t[0]=function(){return e.onRouteToFindFollowers&&e.onRouteToFindFollowers.apply(e,arguments)})},f)):Object(o["createCommentVNode"])("",!0)])])])])):Object(o["createCommentVNode"])("",!0),e.hasFollowings?(Object(o["openBlock"])(),Object(o["createElementBlock"])("section",b,[e.isInitLoading?Object(o["createCommentVNode"])("",!0):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",p,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.followings,(function(t,n){return Object(o["openBlock"])(),Object(o["createBlock"])(N,{isFollowed:t.is_follow,"onUpdate:isFollowed":function(e){return t.is_follow=e},key:n,username:t.username||t.phone||t.email||"Guest",level:t.level,avatarPath:t.avatar,onClick:function(n){return e.setPlayerPage(t)},onToggleFollowing:function(n){return e.onToggleFollowing(n,t.member_id)}},null,8,["isFollowed","onUpdate:isFollowed","username","level","avatarPath","onClick","onToggleFollowing"])})),128))])),e.isInitLoading&&!e.isRecommendLoading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",g,[Object(o["createVNode"])(B,{color:"#1915bf"})])):Object(o["createCommentVNode"])("",!0),e.isLoading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",v,[Object(o["createVNode"])(B,{color:"#1915bf"})])):Object(o["createCommentVNode"])("",!0)])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("section",j,[Object(o["createElementVNode"])("div",O,[Object(o["createElementVNode"])("div",h,[Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("p",null,Object(o["toDisplayString"])(e.$i18n.$t("followingDescription")),1)])])])]))]})),_:1})}var y=n("b192"),B=n("0bd7"),C=n("7580"),F=(n("96cf"),n("e9c4"),n("2383")),S=n("b7f3"),x=n("0f98"),N=n("7c73d"),z=n("afbc"),I=n("6c02"),T=n("6ce2"),_=n("80b7");function R(e,t,n,a,c,i){var r=Object(o["resolveComponent"])("panel-icon");return Object(o["openBlock"])(),Object(o["createBlock"])(r,{size:42,iconSize:42,icon:"profile-active",activeIcon:"profile-active"})}var V=n("2165"),P=Object(o["defineComponent"])({components:{PanelIcon:V["a"]},name:"AvatarIcon",setup:function(e){return{}}}),E=n("6b0d"),L=n.n(E);const A=L()(P,[["render",R]]);var $=A,U=n("d03e"),M=n("4c65"),D=Object(o["defineComponent"])({name:"Following",components:{BaseNavBar:M["a"],AppPageTemplate:F["a"],MemberListTile:N["a"],AvatarImage:T["a"],PanelCard:_["a"],AvatarIcon:$,BaseButton:U["a"]},setup:function(){var e=Object(o["reactive"])({followings:[],currentPage:1,totalPage:50,isLoading:!1,isInitLoading:!1,isRecommendLoading:!1}),t=Object(x["a"])(),n=function(e){t.onToggleFollowingListTile(e.member_id),sessionStorage.setItem("followData",JSON.stringify(e))};Object(I["onBeforeRouteUpdate"])(Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("onBeforeRouteUpdate"),e.next=3,t.info.actions.updateUserFollowingInfo();case 3:return e.next=5,t.info.actions.updateFollowRecommendation("",1,10);case 5:case"end":return e.stop()}}),e)}))));var a=function(){var n=Object(C["a"])(regeneratorRuntime.mark((function n(){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.isLoading=!0,e.currentPage+=1,a={page:e.currentPage,per_page:20},n.next=5,t.info.actions.updateUserFollowingInfo(!0,a);case 5:(o=e.followings).push.apply(o,Object(B["a"])(t.info.state.followings.data)),e.isLoading=!1;case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(o["onMounted"])(Object(C["a"])(regeneratorRuntime.mark((function n(){var c,i,r,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log("onMounted"),e.isRecommendLoading=!0,e.isInitLoading=!0,n.next=5,t.info.actions.updateFollowRecommendation("",1,10);case 5:return e.isRecommendLoading=!1,n.next=8,t.info.actions.updateUserFollowingInfo();case 8:if(e.followings=t.state.followingCards.data,e.totalPage=t.state.followingCards.pager.pages,e.isInitLoading=!1,!(e.currentPage<e.totalPage)){n.next=14;break}return n.next=14,a();case 14:c=Object(o["ref"])(document.getElementById("main")),i=function(){var e;null===(e=c.value)||void 0===e||e.addEventListener("scroll",l)},r=function(){var e;null===(e=c.value)||void 0===e||e.removeEventListener("scroll",l)},l=function(t){if(t.target.scrollTop+t.target.clientHeight===t.target.scrollHeight){if(e.currentPage>=e.totalPage)return void r();a()}},i();case 19:case"end":return n.stop()}}),n)})))),Object(y["a"])(Object(y["a"])(Object(y["a"])({},Object(o["toRefs"])(t.state)),Object(o["toRefs"])(e)),{},{canShowMore:Object(o["computed"])((function(){t.state.followingCards;return!0})),recommendFollowingCards:t.recommendFollowingCards,hasRecommendations:t.hasRecommendations,hasFollowings:t.hasFollowings,maxHorizontalItems:t.maxHorizontalItems,RouterNames:S["a"],onToggleFollowingListTile:t.onToggleFollowingListTile,onToggleFollowing:function(e,n){return Object(C["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return console.log("onToggleFollowing"),o.abrupt("return",t.info.actions.toggleFollow(e,n));case 2:case"end":return o.stop()}}),o)})))()},onToggleRecommendation:function(n,o){return Object(C["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log("onToggleRecommendation",e,o),a.abrupt("return",t.info.actions.toggleRecommendation(n,o));case 2:case"end":return a.stop()}}),a)})))()},onRouteToFindFollowers:function(){z["a"].push({name:S["a"].recommends})},setPlayerPage:n})}});n("8d9b");const H=L()(D,[["render",k],["__scopeId","data-v-419f7a15"]]);t["default"]=H},"7c73d":function(e,t,n){"use strict";var o=n("f2bf"),a={class:"listTile"},c={class:"listTile__container"},i={class:"listTile__user"},r={class:"username"},l={class:"listTile__controls"};function s(e,t,n,s,d,u){var m=Object(o["resolveComponent"])("AvatarImage"),f=Object(o["resolveComponent"])("base-button");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",a,[Object(o["createElementVNode"])("section",c,[Object(o["createVNode"])(m,{name:"avatar.png",avatarPath:e.avatarPath},null,8,["avatarPath"]),Object(o["createElementVNode"])("div",i,[Object(o["createElementVNode"])("div",r,Object(o["toDisplayString"])(e.username),1)]),Object(o["createElementVNode"])("div",l,[e.pIsFollow?(Object(o["openBlock"])(),Object(o["createBlock"])(f,{key:0,onClick:Object(o["withModifiers"])(e.onAlreadyFollowing,["stop"]),surfaceShader:!0,shadowShader:!0,size:"normal"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])("".concat(e.$i18n.$t("following"))),1)]})),_:1},8,["onClick"])):(Object(o["openBlock"])(),Object(o["createBlock"])(f,{key:1,onClick:Object(o["withModifiers"])(e.onFollow,["stop"]),surfaceShader:!1,shadowShader:!0,size:"normal"},{default:Object(o["withCtx"])((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])("".concat(e.$i18n.$t("follow"))),1)]})),_:1},8,["onClick"]))])])])}n("a9e3");var d=n("01cc"),u=n("6ce2"),m=n("ed48"),f=n("d03e"),b=Object(o["defineComponent"])({name:"MemberListTile",inheritAttrs:!0,components:{AvatarImage:u["a"],FlatButton:m["a"],BaseButton:f["a"]},props:{avatarPath:{type:String,default:""},username:{type:String,default:""},level:{type:Number,default:1},isFollowed:{type:Boolean,default:!1}},emits:["toggleFollowing","update:isFollowed"],setup:function(e,t){var n=t.emit,o=new d["a"],a=o.asVModel({props:e,propName:"isFollowed",emit:n});return{pIsFollow:a,onAlreadyFollowing:function(){console.log("pIsFolow:",a.value),n("toggleFollowing",!1),a.value=!1},onFollow:function(){console.log("pIsFolow:",a.value),n("toggleFollowing",!0),a.value=!0}}}}),p=(n("83c3"),n("6b0d")),g=n.n(p);const v=g()(b,[["render",s],["__scopeId","data-v-324536c2"]]);t["a"]=v},"80b7":function(e,t,n){"use strict";var o=n("f2bf");function a(e,t,n,a,c,i){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:Object(o["normalizeClass"])(["panel-card shader-smooth",{rounded:e.rounded}])},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)}var c=Object(o["defineComponent"])({name:"PanelCard",props:{rounded:{type:Boolean,default:!0}},setup:function(){return{}}}),i=(n("7145"),n("6b0d")),r=n.n(i);const l=r()(c,[["render",a],["__scopeId","data-v-cef60b30"]]);t["a"]=l},"83c3":function(e,t,n){"use strict";n("5bc7")},"883e":function(e,t,n){},"8d9b":function(e,t,n){"use strict";n("9068")},9068:function(e,t,n){},9739:function(e,t,n){},bef3:function(e,t,n){"use strict";n("9739")},ed48:function(e,t,n){"use strict";var o=n("f2bf"),a=["disabled","type"];function c(e,t,n,c,i,r){var l=Object(o["resolveComponent"])("svg-icon");return Object(o["openBlock"])(),Object(o["createElementBlock"])("button",{class:Object(o["normalizeClass"])(["flat-button",[{active:e.active,block:e.block,shadow:e.shadow,disabled:e.disabled,prefix:e.prefix,suffix:e.suffix,loading:e.loading},"flat-button--".concat(e.color),"flat-button--".concat(e.type),"flat-button--".concat(e.size)]]),disabled:e.disabled,type:e.nativeType},[Object(o["renderSlot"])(e.$slots,"loading",{},(function(){return[e.loading?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,class:"loading-icon animate-spin",name:"loading",width:"16px",height:"16px"})):Object(o["createCommentVNode"])("",!0)]}),!0),Object(o["renderSlot"])(e.$slots,"prefix",{},(function(){return[e.prefix?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,class:"prefix-icon",name:e.prefix,width:e.iconSize+"px",height:e.iconSize+"px"},null,8,["name","width","height"])):Object(o["createCommentVNode"])("",!0)]}),!0),Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0),Object(o["renderSlot"])(e.$slots,"suffix",{},(function(){return[e.suffix?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,class:"suffix-icon",name:e.suffix,width:e.iconSize+"px",height:e.iconSize+"px"},null,8,["name","width","height"])):Object(o["createCommentVNode"])("",!0)]}),!0)],10,a)}n("a9e3");var i=Object(o["defineComponent"])({name:"FlatButton",props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},color:{type:String,default:"primary",validator:function(e){return-1!==["primary","secondary","light","dark"].indexOf(e)}},block:{type:Boolean,default:!1},type:{type:String,default:"normal",validator:function(e){return-1!==["text","normal"].indexOf(e)}},shadow:{type:Boolean,default:!1},size:{type:String,default:"medium",validator:function(e){return-1!==["medium","large","small"].indexOf(e)}},prefix:{type:String,default:""},suffix:{type:String,default:""},loading:{type:Boolean,default:!1},nativeType:{type:String,default:""},iconSize:{type:Number,default:18}},setup:function(){return{}}}),r=(n("bef3"),n("6b0d")),l=n.n(r);const s=l()(i,[["render",c],["__scopeId","data-v-d65d8290"]]);t["a"]=s}}]);