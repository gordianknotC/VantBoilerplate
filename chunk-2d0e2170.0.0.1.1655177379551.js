(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e2170"],{"7ce3":function(n,s,o){"use strict";o.r(s),o.d(s,"BrowserWeb",(function(){return t})),o.d(s,"Browser",(function(){return i}));var e=o("1547");class t extends e["a"]{constructor(){super(),this._lastWindow=null}async open(n){this._lastWindow=window.open(n.url,n.windowName||"_blank")}async close(){return new Promise((n,s)=>{null!=this._lastWindow?(this._lastWindow.close(),this._lastWindow=null,n()):s("No active window to close!")})}}const i=new t}}]);