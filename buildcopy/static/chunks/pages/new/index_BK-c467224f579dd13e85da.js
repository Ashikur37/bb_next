(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3768,7043,9717,9278],{99717:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(16520),a=n(68216),i=n(25997),c=n(14695),l=n(11126),o=n(65165),u=n(92953),d=n(92809),m=n(67294),h=n(89459),f=n(31675);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.Z)(e);if(t){var s=(0,u.Z)(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return(0,o.Z)(this,n)}}var x=function(e){(0,l.Z)(n,e);var t=j(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return e=t.call.apply(t,[this].concat(i)),(0,d.Z)((0,c.Z)(e),"state",{min:e.props.min,max:e.props.max}),(0,d.Z)((0,c.Z)(e),"onChange",(function(t){var n=(0,s.Z)(t.values,2),r=n[0],a=n[1],i=e.props,c=i.currentRefinement,l=i.refine;c.min===r&&c.max===a||l({min:r,max:a})})),(0,d.Z)((0,c.Z)(e),"onValuesUpdated",(function(t){var n=(0,s.Z)(t.values,2),r=n[0],a=n[1];e.setState({min:r,max:a})})),e}return(0,i.Z)(n,[{key:"componentDidUpdate",value:function(e){var t=e.currentRefinement;!this.props.canRefine||t.min===this.props.currentRefinement.min&&t.max===this.props.currentRefinement.max||this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,d.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))}},{key:"render",value:function(){var e=this.props,t=e.min,n=e.max,s=e.currentRefinement;return t===n?null:(0,r.jsxs)(h.Z,{className:"ais-RangeSlider",min:t,max:n,values:[s.min,s.max],onChange:this.onChange,onValuesUpdated:this.onValuesUpdated,children:[(0,r.jsx)("div",{className:"rheostat-marker",children:(0,r.jsx)("div",{className:"rheostat-value rheostat-marker--min",children:this.state.min})}),(0,r.jsx)("div",{className:"rheostat-marker",children:(0,r.jsx)("div",{className:"rheostat-value rheostat-marker--max",children:this.state.max})})]})}}]),n}(m.Component);t.default=(0,f.Z)(x)},37040:function(e,t,n){"use strict";var r=n(85893),s=(n(67294),n(41664)),a=n(12625);t.Z=(0,a.withTranslation)("common")((function(e){var t=e.url,n=e.text,a=e.t;return(0,r.jsxs)("div",{className:t?"header_component":"header_component center",children:[(0,r.jsx)("span",{className:"header_title",children:n}),t?(0,r.jsx)(s.default,{href:t,children:(0,r.jsx)("a",{className:"header_see_all",children:(0,r.jsx)("span",{children:a("disc_more")})})}):null]})}))},47043:function(e,t,n){"use strict";n.r(t);var r=n(85893),s=n(67294),a=(n(41664),n(14494)),i=n(70434);t.default=(0,a.$j)((function(e){return{auth:e.auth}}))((function(e){var t=e.product,n=e.locale,a=e.auth,c=(0,s.useState)(0),l=c[0],o=c[1],u=(0,s.useState)(!1),d=u[0],m=u[1];(0,s.useEffect)((function(){console.log(t.attributes),a.isAuthenticated?m(!0):(0,i.getBrandNameForAlgolia)(t.attributes)&&"the ordinary"==(0,i.getBrandNameForAlgolia)(t.attributes).toLowerCase()?m(!1):m(!0)}),[a,t]);var h=function(){return t&&t.is_new?(0,r.jsx)("div",{className:"ribbon-new",children:(0,r.jsx)("span",{children:"New"})}):null},f=function(){return t&&!t.in_stock?(0,r.jsx)("div",{className:"ribbon-soldout",children:(0,r.jsx)("span",{children:"Sold out"})}):null},p=function(){return t&&(t.has_offer||t.hasCampaign)?(0,r.jsx)("div",{className:"ribbon",children:(0,r.jsx)("span",{children:"Offer"})}):null},j=function(){return t?t.has_offer||t.hasCampaign?(0,r.jsxs)("span",{className:"product_price offer_price",children:[t.selling_price.formatted[n]," ",(0,r.jsx)("span",{className:"old",children:t.price.formatted[n]})]}):(0,r.jsx)("span",{className:"product_price",children:t.price.formatted[n]}):(0,r.jsx)("span",{className:"product_price",children:"QAR 00.00"})};return(0,r.jsxs)("a",{href:"/product/".concat(t.slug),className:d?"product":"product hide",children:[(0,r.jsx)(h,{}),(0,r.jsx)(p,{}),(0,r.jsx)(f,{}),(0,r.jsx)("div",{className:"product_img",children:(0,r.jsx)("img",{src:t.image,alt:""})}),(0,r.jsx)("span",{className:"product_brand",children:function(e){if(e.length>0){var t=e.filter((function(e){return"Brand"===Object.keys(e)[0]}));if(t[0])return t[0].Brand[0]}return null}(t.attributes)}),(0,r.jsx)("span",{className:"product_name",children:t.name[n]||t.name.en}),(0,r.jsx)(j,{}),(0,r.jsx)("div",{className:"bottom",children:l>0?(0,r.jsxs)("div",{className:"btn_group",children:[(0,r.jsx)("button",{onClick:function(){return o(l-1)},className:"minus",children:"-"}),(0,r.jsxs)("button",{className:"in_bag",children:[" ",l," In Bag"]}),(0,r.jsx)("button",{onClick:function(){return o(l+1)},className:"plus",children:"+"})]}):(0,r.jsx)("button",{onClick:function(){return o(l+1)},className:"btn btn-block",children:"ADD TO BAG"})})]})}))},59423:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return R}});var r=n(85893),s=n(92809),a=n(67294),i=(n(5152),n(37040)),c=n(70290),l=n.n(c),o=n(59359),u=n(87955),d=n(69898),m=n(59372),h=n(40572),f=n(49953),p=n(2264),j=n(20647),x=n(55473),b=n(56134),v=n(54446),_=n(59632),N=n(47043),g=n(99717),w=n(17625),y=n(51436),Z=n(9008);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=l()("HPKCKDRHRT","eec40e4466e90ed437e1c7639aa54feb"),R=!0;t.default=function(e){var t=(0,a.useState)(!1),n=t[0],s=t[1];(0,a.useEffect)((function(){console.log(e),window.scrollTo(0,0)}),[]);var c=function(e){var t=e.hit;return(0,r.jsx)("div",{className:"product_wrapper",children:(0,r.jsx)(N.default,{product:t.product})})},l=(0,u.Z)((function(e){var t=e.items,n=e.refine;return(0,r.jsx)("button",{onClick:function(){return n(t)},className:t.length?"ais-ClearRefinements-button":"ais-ClearRefinements-button ais-ClearRefinements-button--disabled",disabled:!t.length,children:"Clear all filters"})}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(Z.default,{children:[(0,r.jsx)("title",{children:"New Product | BeautyBooth"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),o.tq?(0,r.jsx)("div",{className:"category_page",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(i.Z,{text:"New Products"}),(0,r.jsx)(d.Z,{searchClient:C,indexName:"products",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"filterContainer",children:[(0,r.jsx)("span",{style:{display:"none"},children:(0,r.jsx)(m.Z,{attribute:"product.is_new",defaultRefinement:[!0]})}),(0,r.jsx)("div",{className:"sortItem",children:(0,r.jsx)(h.Z,{defaultRefinement:"products",items:[{value:"products",label:"Price High to Low"},{value:"instant_search",label:"Price Low to High"}]})}),(0,r.jsx)("div",{className:"filterItem",children:(0,r.jsx)("button",{onClick:function(){return s(!n)},children:"Filter By"})}),(0,r.jsxs)("div",{className:n?"filterItemContainer active":"filterItemContainer",children:[(0,r.jsx)("span",{onClick:function(){return s(!1)},className:"cancleBtn",children:(0,r.jsx)(w.G,{icon:y._Ob,size:"3x"})}),(0,r.jsxs)("div",{className:"filterInner",children:[(0,r.jsx)(l,{transformItems:function(e){return e.filter((function(e){return"product.attributes.Trending"!==e.attribute}))}}),(0,r.jsx)("span",{className:"mb_refinment_title",children:"Price"}),(0,r.jsx)(g.default,{attribute:"product.price.amount"}),(0,r.jsx)("span",{className:"mb_refinment_title",children:"Category"}),(0,r.jsx)(m.Z,{attribute:"product.categories.name",showMore:!0,transformItems:function(e){return e.map((function(e){return P(P({},e),{},{label:e.label.split("-").join(" ")})}))}}),(0,r.jsx)("span",{className:"mb_refinment_title",children:"Brand"}),(0,r.jsx)(m.Z,{attribute:"product.attributes.Brand",showMore:!0})]})]})]})}),(0,r.jsx)("div",{className:"col-12",children:(0,r.jsxs)("div",{className:"categories",children:[(0,r.jsxs)("div",{className:"hit_result_info",children:[(0,r.jsx)(f.Z,{defaultRefinement:12,items:[{value:8,label:"Show 8 Products"},{value:12,label:"Show 12 Products"},{value:16,label:"Show 16 Products"}]}),(0,r.jsx)(p.Z,{})]}),(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(x.Z,{hitComponent:c})," "]}),(0,r.jsx)(b.Z,{padding:1,showLast:!0})]})})]})})]})}):(0,r.jsx)("div",{className:"category_page",children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(i.Z,{text:"New Products"}),(0,r.jsx)(d.Z,{searchClient:C,indexName:"products",searchState:e.searchState,onSearchStateChange:e.onSearchStateChange,createURL:e.createURL,children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-3",children:[(0,r.jsx)("span",{style:{display:"none"},children:(0,r.jsx)(m.Z,{attribute:"product.is_new",defaultRefinement:["true"]})}),(0,r.jsx)("span",{className:"refinment_title",children:"Price"}),(0,r.jsx)(g.default,{attribute:"product.price.amount"}),(0,r.jsx)(v.Z,{attribute:"product.price.amount",items:[{label:"0 - 50 QAR",end:50},{label:"50 - 100 QAR ",start:50,end:100},{label:"100 - 200 QAR",start:100,end:200},{label:"200 - 400 QAR",start:200,end:400},{label:"400+ QAR",start:400}]}),(0,r.jsx)("div",{className:"new",children:(0,r.jsxs)("div",{className:"custom__accordion",children:[(0,r.jsxs)("div",{className:"single__accordion",children:[(0,r.jsx)("input",{type:"checkbox",name:"new_acc",id:"cat",className:"accordion__input"}),(0,r.jsx)("label",{className:"accordion__label",htmlFor:"cat",children:(0,r.jsx)("span",{className:"refinment_title",children:"Category"})}),(0,r.jsx)("div",{className:"accordion__content",children:(0,r.jsx)(m.Z,{attribute:"product.categories.name",limit:15,transformItems:function(e){return e.map((function(e){return P(P({},e),{},{label:e.label.split("-").join(" ")})}))}})})]}),(0,r.jsxs)("div",{className:"single__accordion",children:[(0,r.jsx)("input",{type:"checkbox",name:"new_acc",id:"brand",className:"accordion__input"}),(0,r.jsx)("label",{className:"accordion__label",htmlFor:"brand",children:(0,r.jsx)("span",{className:"refinment_title",children:"Brand"})}),(0,r.jsx)("div",{className:"accordion__content",children:(0,r.jsx)(m.Z,{attribute:"product.attributes.Brand",limit:15,transformItems:function(e){return e.map((function(e){return P(P({},e),{},{label:e.label.split("-").join(" ")})}))}})})]}),(0,r.jsxs)("div",{className:"single__accordion",children:[(0,r.jsx)("input",{type:"checkbox",name:"new_acc",id:"trending",className:"accordion__input"}),(0,r.jsx)("label",{className:"accordion__label",htmlFor:"trending",children:(0,r.jsx)("span",{className:"refinment_title",children:"Trending"})}),(0,r.jsx)("div",{className:"accordion__content",children:(0,r.jsx)(m.Z,{attribute:"product.attributes.Trending",limit:15,transformItems:function(e){return e.map((function(e){return P(P({},e),{},{label:e.label.split("-").join(" ")})}))}})})]})]})})]}),(0,r.jsxs)("div",{className:"col-md-9",children:[(0,r.jsx)(_.Z,{}),(0,r.jsxs)("div",{className:"categories",children:[(0,r.jsxs)("div",{className:"hit_result_info",children:[(0,r.jsx)(h.Z,{defaultRefinement:"products",items:[{value:"products",label:"Price High to Low"},{value:"instant_search",label:"Price Low to High"}]}),(0,r.jsx)(f.Z,{defaultRefinement:12,items:[{value:6,label:"Show 6 Products"},{value:12,label:"Show 12 Products"},{value:15,label:"Show 15 Products"}]}),(0,r.jsx)(p.Z,{})]}),(0,r.jsxs)(j.Z,{children:[(0,r.jsx)(x.Z,{hitComponent:c})," "]}),(0,r.jsx)(b.Z,{showLast:!0,padding:3})]})]})]})})]})})]})}},50363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/index_BK",function(){return n(59423)}])}},function(e){e.O(0,[4812,2770,8825,9359,874,9774,2888,179],(function(){return t=50363,e(e.s=t);var t}));var t=e.O();_N_E=t}]);