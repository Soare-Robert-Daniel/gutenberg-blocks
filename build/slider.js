!function(){function e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function t(t){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=lodash.omit;(0,wp.domReady)((function(){document.querySelectorAll(".wp-block-themeisle-blocks-slider").forEach((function(e){var r=e.querySelector(".glide__slides"),o=a(t({},e.dataset),["autoplay","height","hideArrows"]),i="false"!==e.dataset.autoplay&&("true"===e.dataset.autoplay?2e3:e.dataset.autoplay);if("true"!==e.dataset.hideArrows){var n=document.createElement("div");n.innerHTML='<div class="glide__arrows" data-glide-el="controls"><button class="glide__arrow glide__arrow--left" data-glide-dir="<"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 100 100" role="img" aria-hidden="true"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button><button class="glide__arrow glide__arrow--right" data-glide-dir="&gt;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewbox="0 0 100 100" role="img" aria-hidden="true"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path></svg></button></div>',e.appendChild(n.firstElementChild)}Object.keys(o).map((function(e){return o[e]=Number(o[e])})),new Glide("#".concat(e.id),t(t({type:"carousel",keyboard:!0,autoplay:i,hoverpause:!0},o),{},{breakpoints:{800:{perView:1,peek:0,gap:0}}})).mount(),r&&(r.style.height=e.dataset.height)}))}))}();