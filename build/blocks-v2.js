!function(e){function t(t){for(var r,l,a=t[0],i=t[1],s=t[2],p=0,f=[];p<a.length;p++)l=a[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(u&&u(t);f.length;)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={3:0},c=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.tiOtterWebpackJsonp=window.tiOtterWebpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;c.push([100,0]),n()}({100:function(e,t,n){n(121),e.exports=n(124)},121:function(e,t,n){"use strict";n.r(t);var r=n(36),o=n(26),c=n(2),l=n(25),a=n(4);var i=({attributes:e,setAttributes:t,number:n,setNumber:r})=>c.createElement("div",null,c.createElement(l.InspectorControls,null,c.createElement(a.PanelBody,null,c.createElement(a.TextControl,{value:e.text||"",onChange:e=>t({text:e})}),c.createElement(a.TextControl,{value:n,onChange:e=>r(Number(e))}),c.createElement(a.RangeControl,{value:n,onChange:e=>r(e||0)})))),s=n(6);const u=(p="wp-block-themeisle-blocks-brand-new-world-",(e,t)=>{const[n,r]=Object(c.useState)(t);return Object(c.useEffect)(()=>{void 0===n&&r(p+e.substr(0,8))},[t]),n});var p;var f=({attributes:e,setAttributes:t,clientId:n})=>{console.log(e);const[r,o]=Object(s.useState)(0),a=u(n,e.id);return Object(s.useEffect)(()=>{t({id:a})},[a]),Object(s.useEffect)(()=>{console.log(a,n,e.id)},[a,e.id,n]),c.createElement("div",null,c.createElement(i,{attributes:e,setAttributes:t,number:r,setNumber:o}),c.createElement(l.RichText,{value:e.text||"",onChange:e=>t({text:e})}))};var m=({attributes:e})=>c.createElement(l.RichText.Content,{value:e.text||""});var b={id:{type:"string"},text:{type:"string",default:"Hallo"},number:{type:"number",default:0}};const h=Object(r.registerBlockType)("themeisle-blocks/typescript-text",{title:Object(o.__)("Test Typescript"),description:Object(o.__)("Put the logo maker on the site."),category:"widgets",icon:"smiley",attributes:b,edit:f,save:m});console.log(h)},124:function(e,t,n){"use strict";n.r(t);var r=n(26),o=n(36),c=(n(44),n(38),n(0),n(2)),l=n(4);c.createElement(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"},c.createElement(l.Path,{d:"M5 5H3v2h2V5zm3 8h11v-2H8v2zm9-8H6v2h11V5zM7 11H5v2h2v-2zm0 8h2v-2H7v2zm3-2v2h11v-2H10z"})),c.createElement(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},c.createElement(l.Path,{d:"M9 18.6L3.5 13l1-1L9 16.4l9.5-9.9 1 1z"}));var a={slug:{type:"string"}},i=n(27);Object(o.registerBlockType)("themeisle-blocks/plugin-cards",{title:Object(r.__)("Plugin Card"),description:Object(r.__)("Plugin Card block lets you display plugins data in your blog posts."),icon:()=>c.createElement(l.SVG,{viewBox:"0 0 32 32",style:{padding:"1px",fill:"#000000"},xmlns:"http://www.w3.org/2000/svg"},c.createElement(l.Path,{d:"M31.908 1.543c0-0.815-0.677-1.478-1.51-1.478h-28.731c-0.815 0-1.478 0.677-1.478 1.51v14.441c0 0.022 0.002 0.044 0.004 0.065-0.003 0.021-0.004 0.043-0.004 0.065v14.357c0 0.815 0.677 1.478 1.51 1.478h28.731c0.815 0 1.478-0.677 1.478-1.51v-14.441c0-0.022-0.002-0.044-0.004-0.065 0.003-0.021 0.004-0.043 0.004-0.065v-14.357zM30.792 1.543v13.799h-4.324c0.587-0.66 0.932-1.525 0.932-2.453 0-0.737-0.218-1.423-0.592-2-0.648-1.066-1.82-1.78-3.156-1.78-2.034 0-3.689 1.655-3.689 3.689 0 0.745 0.223 1.449 0.615 2.039 0.111 0.178 0.236 0.347 0.376 0.504h-4.372v-6.025c0-0.184-0.090-0.347-0.228-0.449-0.101-0.103-0.242-0.167-0.398-0.167h-0.173c-0.24 0-0.453 0.153-0.529 0.38-0.352 1.049-1.332 1.754-2.439 1.754-0.419 0-0.815-0.101-1.166-0.28-0.776-0.444-1.301-1.279-1.301-2.235 0-1.419 1.154-2.574 2.574-2.574 0.408 0 0.799 0.096 1.147 0.27 0.546 0.305 0.976 0.804 1.185 1.426 0.052 0.155 0.169 0.275 0.314 0.335 0.092 0.065 0.204 0.103 0.322 0.103h0.133c0.308 0 0.558-0.25 0.558-0.558v-6.142h13.816c0.217 0 0.394 0.162 0.394 0.362zM1.305 1.575c0-0.217 0.162-0.394 0.362-0.394h13.732v4.404c-0.239-0.216-0.505-0.401-0.793-0.549-0.536-0.297-1.148-0.464-1.791-0.464-2.034 0-3.689 1.655-3.689 3.689 0 1.423 0.81 2.659 1.992 3.274 0.534 0.301 1.149 0.473 1.804 0.473 0.939 0 1.813-0.354 2.476-0.955v4.404h-6.016c-0.308 0-0.558 0.25-0.558 0.558v0.173c0 0.127 0.043 0.245 0.117 0.34 0.065 0.129 0.178 0.231 0.321 0.279 0.562 0.189 1.023 0.558 1.332 1.030 0.232 0.39 0.364 0.842 0.364 1.318 0 1.419-1.154 2.574-2.574 2.574-0.894 0-1.682-0.458-2.144-1.151-0.236-0.389-0.372-0.844-0.372-1.331-0-1.107 0.705-2.087 1.754-2.44 0.227-0.076 0.38-0.289 0.38-0.529v-0.133c0-0.106-0.030-0.204-0.081-0.288-0.068-0.231-0.282-0.4-0.535-0.4h-6.084v-13.883zM1.305 30.505v-13.799h4.324c-0.587 0.66-0.932 1.525-0.932 2.453 0 0.737 0.218 1.424 0.592 2 0.647 1.066 1.82 1.78 3.156 1.78 2.034 0 3.689-1.655 3.689-3.689-0-0.745-0.223-1.449-0.615-2.040-0.111-0.178-0.236-0.347-0.376-0.504h4.372v6.025c0 0.184 0.090 0.347 0.228 0.449 0.101 0.103 0.242 0.167 0.398 0.167h0.173c0.24 0 0.453-0.153 0.529-0.38 0.352-1.049 1.332-1.754 2.439-1.754 0.419 0 0.815 0.101 1.165 0.28 0.776 0.444 1.301 1.279 1.301 2.236 0 1.419-1.154 2.574-2.574 2.574-0.408 0-0.799-0.096-1.147-0.27-0.546-0.305-0.976-0.804-1.185-1.426-0.052-0.155-0.169-0.275-0.314-0.336-0.092-0.065-0.204-0.103-0.322-0.103h-0.133c-0.308 0-0.558 0.25-0.558 0.558v6.142h-13.816c-0.217-0-0.394-0.163-0.394-0.362zM30.792 30.472c0 0.217-0.162 0.394-0.362 0.394h-13.732v-4.404c0.239 0.216 0.505 0.401 0.792 0.548 0.536 0.297 1.148 0.464 1.791 0.464 2.034 0 3.689-1.655 3.689-3.689 0-1.423-0.81-2.659-1.993-3.274-0.534-0.301-1.149-0.473-1.804-0.473-0.939 0-1.813 0.354-2.476 0.955v-4.404h6.016c0.308 0 0.558-0.25 0.558-0.558v-0.173c0-0.126-0.044-0.245-0.117-0.34-0.064-0.129-0.178-0.231-0.321-0.279-0.562-0.189-1.023-0.558-1.332-1.030-0.232-0.389-0.363-0.842-0.363-1.318 0-1.419 1.154-2.574 2.574-2.574 0.894 0 1.682 0.458 2.144 1.151 0.236 0.389 0.372 0.844 0.372 1.331 0 1.107-0.705 2.087-1.754 2.439-0.227 0.076-0.38 0.289-0.38 0.529v0.133c0 0.106 0.030 0.204 0.081 0.289 0.068 0.231 0.282 0.4 0.535 0.4h6.084v13.883z"})),category:"themeisle-blocks",keywords:["plugin","card","orbitfox"],attributes:a,supports:{html:!1},edit:i.a,save:()=>null})},2:function(e,t){e.exports=React},25:function(e,t){e.exports=window.wp.blockEditor},26:function(e,t){e.exports=window.wp.i18n},27:function(e,t,n){"use strict";var r=n(34);function o(e,t,n,r,o,c,l){try{var a=e[c](l),i=a.value}catch(e){return void n(e)}a.done?t(i):Promise.resolve(i).then(r,o)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var l,a=e[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=wp.i18n.__,i=wp.apiFetch,s=wp.components,u=s.Placeholder,p=s.Dashicon,f=s.TextControl,m=s.Spinner,b=wp.element,h=b.useEffect,v=b.useRef,d=b.useState,y=wp.keycodes,w=y.DOWN,g=y.ENTER,O=y.TAB,k=y.UP,E=function(e){var t=e.setAttributes,n=e.hasError,l=e.setError,s=e.className,b=v(null),y=!1,E=[],j=c(d(!1),2),x=j[0],S=j[1],P=c(d(""),2),C=P[0],A=P[1],T=c(d({}),2),N=T[0],M=T[1],D=c(d(null),2),z=D[0],I=D[1];h((function(){null===z||y||(y=!0,Object(r.a)(E[z],b.current,{onlyScrollIfNeeded:!0}),E[z].focus(),setTimeout((function(){y=!1}),100))}),[z]);var R=function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({slug:""}),S(!0),l(!1),e.next=5,i({path:"themeisle-gutenberg-blocks/v1/get_plugins?search=".concat(encodeURIComponent(n))});case 5:if(!(r=e.sent).data.errors){e.next=12;break}return l(!0),S(!1),I(null),M({}),e.abrupt("return");case 12:S(!1),I(null),M(r.data.plugins);case 15:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,c){var l=e.apply(t,n);function a(e){o(l,r,c,a,i,"next",e)}function i(e){o(l,r,c,a,i,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}(),B=function(e){if(Object.keys(N).length){e.stopPropagation(),e.preventDefault();var t=z?z-1:Object.keys(N).length-1;I(t)}},H=function(e){if(Object.keys(N).length){e.stopPropagation(),e.preventDefault();var t=null===z||z===Object.keys(N).length-1?0:z+1;I(t)}},V=function(e){t({slug:e.slug}),M({})};return wp.element.createElement(u,{icon:"admin-plugins",label:a("Plugin Card"),instructions:a("Search for the plugin you want to display."),className:s},wp.element.createElement("div",{className:"wp-block-themeisle-blocks-plugin-cards-search-field"},wp.element.createElement(p,{icon:"search"}),x&&wp.element.createElement(m,null),wp.element.createElement(f,{type:"text",placeholder:a("Search for plugin…"),value:C,onChange:A,onKeyDown:function(e){switch(e.keyCode){case k:B(e);break;case w:H(e);break;case O:Object.keys(N).length&&!e.shiftKey&&I(0);break;case g:R(e.target.value)}},onFocus:function(){return I(null)}}),N&&wp.element.createElement("div",{tabIndex:"-1",className:"wp-block-themeisle-blocks-plugin-cards-search-results",ref:b},Object.keys(N).map((function(e){var t,n,r=N[e];return r.icons.svg&&(t=r.icons.svg),r.icons["2x"]&&(t=r.icons["2x"]),r.icons["1x"]&&(t=r.icons["1x"]),r.icons.default&&(t=r.icons.default),wp.element.createElement("button",{className:"wp-block-themeisle-blocks-plugin-cards-list-item",key:e,ref:(n=e,function(e){E[n]=e}),onClick:function(e){e.preventDefault(),V(r)},onKeyDown:function(e){return function(e,t){switch(e.keyCode){case k:B(e);break;case w:H(e);break;case O:if(e.shiftKey){0!==z&&B(e);break}if(z===Object.keys(N).length-1)break;H(e);break;case g:V(t)}}(e,r)}},wp.element.createElement("img",{src:t}),wp.element.createElement("span",{dangerouslySetInnerHTML:{__html:_.unescape(r.name)}}))})))),n&&wp.element.createElement("div",{className:"wp-block-themeisle-blocks-plugin-cards-error"},wp.element.createElement("span",null,a("There seems to be an error. Make sure your internet is working properly."))))},j=wp.i18n.__,x=wp.components,S=x.Dashicon,P=x.Button,C=x.Toolbar,A=x.Tooltip,T=wp.blockEditor.BlockControls,N=function(e){var t=e.setAttributes;return wp.element.createElement(T,null,wp.element.createElement(C,null,wp.element.createElement(A,{text:j("Edit")},wp.element.createElement(P,{className:"components-icon-button components-toolbar__control wp-block-themeisle-blocks-plugin-cards-edit-plugin-card",onClick:function(){return t({slug:void 0})}},wp.element.createElement(S,{icon:"edit"})))))};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,c=void 0;try{for(var l,a=e[Symbol.iterator]();!(r=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return R(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var B=wp.components.Disabled,H=wp.element,V=H.Fragment,K=H.useState,U=wp.serverSideRender;t.a=function(e){var t=e.attributes,n=e.setAttributes,r=e.className,o=I(K(!1),2),c=o[0],l=o[1];return t.slug?wp.element.createElement(V,null,wp.element.createElement(N,{setAttributes:n}),wp.element.createElement(B,null,wp.element.createElement(U,{block:"themeisle-blocks/plugin-cards",className:t.className,attributes:D({},t)}))):wp.element.createElement(E,{attributes:t,setAttributes:n,hasError:c,setError:l,className:r})}},36:function(e,t){e.exports=window.wp.blocks},38:function(e,t,n){},4:function(e,t){e.exports=window.wp.components},6:function(e,t){e.exports=window.wp.element}});