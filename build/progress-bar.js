!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=115)}({115:function(e,t,r){e.exports=r(116)},116:function(e,t,r){"use strict";function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,"BarType",(function(){return l}));var a=wp.domReady,c=[.6],l={BAR:"BAR",CIRCLE:"CIRCLE",SEMICIRCLE:"SEMICIRCLE"};a((function(){var e=document.querySelectorAll(".wp-themeisle-block-progress-bar");console.log(e),Array.from(e).forEach((function(e){var t=e.querySelector("#container"),r=e.querySelector("#value"),o={};Array.from(e.attributes).forEach((function(e){return o[e.nodeName]=e.nodeValue})),console.log(e.attributes);var i=function(e){return{color:e.progresscolor,strokeWidth:parseFloat(e.strokewidth),trailColor:e.trailcolor,trailWidth:parseFloat(e.trailwidth),svgStyle:{display:"block",width:"100%",height:"".concat(e.height,"px")},warnings:"true"===e.warnings}}(o),a=function(e){var t,r;return"true"===e.coloredprogress&&(t=n(n({},t),{},{color:e.startcolor}),r=n(n({},r),{},{color:e.endcolor})),"true"===e.strokeanimation&&(t=n(n({},t),{},{width:0}),r=n(n({},r),{},{width:parseFloat(e.strokewidth)})),{coloredProgress:"true"===e.coloredprogress,percentage:parseFloat(e.percentage),isAnimated:"true"===e.animated,strokeAnimation:"true"===e.strokeanimation,hideValue:"true"===e.hidevalue,options:{duration:1e3*e.duration,easing:e.easing,to:r,from:t}}}(o);console.log(i),console.log(a);var s,u=function(e,t){a.coloredProgress&&t.path.setAttribute("stroke",e.color),a.strokeAnimation&&t.path.setAttribute("stroke-width",e.width);var o=Math.round(100*t.value());r.innerText="Testing: ".concat(o,"%"),a.hideValue||(0===o?t.setText(""):t.setText("".concat(o,"%")))};switch(o.type){case l.BAR:s=new ProgressBar.Line(t,n(n({},i),{},{step:u,text:{style:{color:o.textcolor,position:"absolute",padding:0,margin:0,transform:null,fontSize:"".concat(.8*o.height,"px")},autoStyleContainer:!1,alignToBottom:!1}}));break;case l.CIRCLE:(s=new ProgressBar.Circle(t,n(n({},i),{},{step:u,text:{value:"",autoStyleContainer:!1}}))).text.style.fontFamily='"Raleway", Helvetica, sans-serif',s.text.style.fontSize="".concat(o.height/4,"px");break;case l.SEMICIRCLE:(s=new ProgressBar.SemiCircle(t,n(n({},i),{},{step:u,text:{value:"",alignToBottom:!1}}))).text.style.fontFamily='"Raleway", Helvetica, sans-serif',s.text.style.fontSize="".concat(o.height/4,"px"),s.text.style.bottom="12%"}s.set(0),setTimeout((function(){var e={root:null,rootMargin:"0px",threshold:c};r.innerText="0%",new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&0===Math.round(100*s.value())&&(a.isAnimated?s.animate((a.percentage/100).toFixed(2),a.options,(function(){})):s.set((a.percentage/100).toFixed(2)))}))}),e).observe(t)}),1e3)}))}))}});