"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6439],{86439:function(e,t,n){n.r(t);var r=n(85893),a=n(92809),s=n(67294),i=n(41664),l=n(88667),c=n.n(l),o=n(14494),u=n(94565),p=n(5152),f=n(70434);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=(0,p.default)((function(){return n.e(3595).then(n.bind(n,40836))}),{loadableGenerated:{webpack:function(){return[40836]},modules:["../components/homepage/TopSellers.js -> ../atom/Product"]}});t.default=(0,o.$j)((function(e){return{bestSelling:e.homePage.bestSelling,localLang:e.homePage.localLang,auth:e.auth}}),(function(e,t){return{getBestSellingProducts:function(){return(0,u.e3)(e,t.lang)}}}))((function(e){var t=e.t,n=e.Header,a=e.styles,l=e.FontAwesomeIcon,o=e.lang,u=e.auth,p=(0,s.useState)(e.bestSelling),d=p[0],w=p[1];(0,s.useEffect)((function(){if(0==u.isAuthenticated){if(e.bestSelling){var t=e.bestSelling.filter((function(e){if("the ordinary"!==(0,f.getBrandName)(e.attributes).toLowerCase())return e}));w(t)}}else w(e.bestSelling)}),[e.bestSelling,u]),(0,s.useEffect)((function(){0!=e.bestSelling.length&&e.localLang===e.lang||e.getBestSellingProducts(e.lang)}),[o]);var b=(0,s.useState)(null),v=(b[0],b[1]),y={rtl:!1,loop:!1,lazy:{loadPrevNext:!0},slidesPerView:4,spaceBetween:10,breakpoints:{992:{slidesPerView:4,spaceBetween:30},991:{slidesPerView:3,spaceBetween:20},768:{slidesPerView:3,spaceBetween:1},320:{slidesPerView:2,spaceBetween:1}},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}},j=g({rtl:!0},y);return(0,r.jsx)("div",{className:"container mt-4",children:0!==d.length&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(n,{h:"h2",text:t("best_selling"),url:"/best-selling",lang:e.lang,Link:i.default,FontAwesomeIcon:l})})}),(0,r.jsx)("div",{className:"selling_swiper_wrapper",children:"en"==e.lang?(0,r.jsx)(c(),g(g({getSwiper:v},y),{},{shouldSwiperUpdate:!0,children:d.map((function(e,t){return(0,r.jsx)("div",{children:(0,r.jsx)(h,{product:e,lazy:!0,styles:a,lang:o})},t)}))})):(0,r.jsx)(c(),g(g({getSwiper:v},j),{},{shouldSwiperUpdate:!0,children:d.map((function(e,t){return(0,r.jsx)("div",{children:(0,r.jsx)(h,{product:e,lazy:!0,styles:a,lang:o})},t)}))}))})]})})}))},94565:function(e,t,n){n.d(t,{sZ:function(){return p},e3:function(){return o},Ri:function(){return u}});var r=n(809),a=n.n(r);function s(e,t,n,r,a,s,i){try{var l=e[s](i),c=l.value}catch(o){return void n(o)}l.done?t(c):Promise.resolve(c).then(r,a)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function l(e){s(i,r,a,l,c,"next",e)}function c(e){s(i,r,a,l,c,"throw",e)}l(void 0)}))}}var l=n(96698),c=n(1877),o=function(){var e=i(a().mark((function e(t){var n,r,s,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"en",e.next=3,fetch("/api/homePageData?locale=".concat(n,"&type=bestselling"));case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,t({type:c.xM,payload:{data:s,lang:n}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=i(a().mark((function e(t){var n,r,s,i=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:"en",e.next=3,fetch("/api/homePageData?locale=".concat(n,"&type=newarrivals"));case 3:return r=e.sent,e.next=6,r.json();case 6:s=e.sent,t({type:c.fw,payload:{data:s,lang:n}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){l.Z.get("en/getdata/best_brands").then((function(t){e({type:c.In,payload:t.data})})).catch()}}}]);