(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7260],{97028:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return u}});var l=n(85893),a=n(67294),s=n(96698),i=n(40836),c=n(9008),r=n(58533),o=n(12625),_=n(27022),d=n.n(_),u=!0;t.default=(0,o.withTranslation)("common")((function(e){var t=e.bestSellingProducts,n=e.language,o=(0,a.useState)(t.data),_=o[0],u=o[1],g=(0,a.useState)(!0),p=g[0],h=g[1],b=(0,a.useState)(),f=b[0],m=b[1],x=(0,a.useState)(!1),S=(x[0],x[1]);(0,a.useEffect)((function(){s.Z.get("".concat(n,"/getdata/products/best-selling?page=2")).then((function(e){h(null!==e.data.next_page_url),m(3),setProducts(e.data.data),u(e.data.data),S(!1)})).catch((function(e){S(!0)}))}),[n]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"container mt-4",children:[(0,l.jsx)(c.default,{children:(0,l.jsx)("title",{children:"Best selling | Beautyboothqa"})}),(0,l.jsx)("div",{className:"row no-gutters",children:(0,l.jsx)(r.Z,{dataLength:_.length,next:function(){s.Z.get("".concat(n,"/getdata/products/best-selling?page=").concat(f)).then((function(e){var t=_.concat(e.data.data);h(null!==e.data.next_page_url),u(t),m(f+1)}))},hasMore:p,loader:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)("h2",{style:{textAlign:"center"},children:"Loading..."})})})}),endMessage:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)("p",{style:{textAlign:"center"},children:(0,l.jsx)("b",{children:"You have seen it all"})})})})}),children:(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"row no-gutters",children:_.map((function(e){return(0,l.jsx)("div",{className:"mb-3 col-md-3 col-sm-6 col-6",children:(0,l.jsx)(i.default,{product:e,styles:d()},e.id)},e.id)}))})})})})]}),")"]})}))},84199:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/best-selling",function(){return n(97028)}])},27022:function(e){e.exports={best_selling_page:"BestSelling_best_selling_page__dLGSp","lazyload-wrapper":"BestSelling_lazyload-wrapper__2Ym_J",product:"BestSelling_product__2FTqU",product_name:"BestSelling_product_name__26lV6",ribbon_soldout:"BestSelling_ribbon_soldout__7Xl3v",ribbon:"BestSelling_ribbon__3RI4J",ribbon_new:"BestSelling_ribbon_new__yOSCH",ribbon_campaign:"BestSelling_ribbon_campaign__2XUY4",product_img:"BestSelling_product_img__IwwLY",product_brand:"BestSelling_product_brand__3571-",product_price:"BestSelling_product_price__3M-Ec",offer_price:"BestSelling_offer_price__tjZl9",old:"BestSelling_old__17eSt"}},9008:function(e,t,n){e.exports=n(70639)}},function(e){e.O(0,[1216,4822,9774,2888,179],(function(){return t=84199,e(e.s=t);var t}));var t=e.O();_N_E=t}]);