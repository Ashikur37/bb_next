"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4050],{24050:function(e,n,t){t.r(n);var r=t(85893),a=t(92809),s=t(67294),c=t(88667),i=t.n(c),o=t(14494),u=t(94565),l=t(41664);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=(0,o.$j)((function(e){return{bestBrands:e.homePage.bestBrands}}),(function(e){return{getBestBrands:function(){return(0,u.sZ)(e)}}}))((function(e){var n=e.styles,t=e.lang,a=e.t,c=e.Header,o=e.FontAwesomeIcon;(0,s.useRef)(null),(0,s.useEffect)((function(){e.bestBrands||e.getBestBrands()}),[e.bestBrands]);var u=(0,s.useState)(null),d=(u[0],u[1]);return(0,r.jsx)("div",{className:"container mt-4",children:e.bestBrands?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col",children:[(0,r.jsx)(c,{text:a("best_brands"),url:"brands",lang:t,Link:l.default,h:"h2",FontAwesomeIcon:o}),(0,r.jsx)("div",{className:"best_brands ".concat(n.brands_container),children:e.bestBrands?(0,r.jsx)(i(),f(f({getSwiper:d},{loop:!1,speed:1500,lazy:!0,autoplay:{delay:1e3},slidesPerView:6,spaceBetween:10,breakpoints:{320:{slidesPerView:2},480:{slidesPerView:3},640:{slidesPerView:4,spaceBetween:10},991:{slidesPerView:6,spaceBetween:30}}}),{},{shouldSwiperUpdate:!0,children:e.bestBrands.map((function(e,t){return(0,r.jsx)("div",{className:n.brand_slide,children:(0,r.jsx)(l.default,{href:"brand/".concat(e.value.split(" ").join("-")),children:(0,r.jsx)("a",{children:e.image?(0,r.jsx)("img",{src:e.image.image,alt:e.slug}):(0,r.jsx)("div",{className:"no-img",children:e.value})})})},t)}))})):null})]})})}):null})}))},94565:function(e,n,t){t.d(n,{sZ:function(){return d},e3:function(){return u},Ri:function(){return l}});var r=t(809),a=t.n(r);function s(e,n,t,r,a,s,c){try{var i=e[s](c),o=i.value}catch(u){return void t(u)}i.done?n(o):Promise.resolve(o).then(r,a)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var c=e.apply(n,t);function i(e){s(c,r,a,i,o,"next",e)}function o(e){s(c,r,a,i,o,"throw",e)}i(void 0)}))}}var i=t(96698),o=t(1877),u=function(){var e=c(a().mark((function e(n){var t,r,s,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:"en",e.next=3,fetch("/api/homePageData?locale=".concat(t,"&type=bestselling"));case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,n({type:o.xM,payload:{data:s,lang:t}});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=c(a().mark((function e(n){var t,r,s,c=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:"en",e.next=3,fetch("/api/homePageData?locale=".concat(t,"&type=newarrivals"));case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,n({type:o.fw,payload:{data:s,lang:t}});case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(e){i.Z.get("en/getdata/best_brands").then((function(n){e({type:o.In,payload:n.data})})).catch()}}}]);