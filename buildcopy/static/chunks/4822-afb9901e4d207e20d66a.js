(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4822],{40836:function(e,t,o){"use strict";o.r(t);var r=o(85893),n=o(67294),s=o(41664),i=o(1216),l=o(11879),a=o.n(l),c=o(14494),p=o(70434);t.default=(0,c.$j)((function(e){return{auth:e.auth}}))((function(e){var t=e.product,o=(e.lazy,e.lang),l=void 0===o?"en":o,c=e.auth,h=(0,n.useState)(0),u=(h[0],h[1],(0,n.useState)(!1)),d=u[0],f=u[1];(0,n.useEffect)((function(){console.log(t.attributes),c.isAuthenticated?f(!0):"the ordinary"==(0,p.getBrandName)(t.attributes).toLowerCase()?f(!1):f(!0)}),[c,t]);var m=function(){return t&&t.is_new?(0,r.jsx)("div",{className:"".concat(a().ribbon_new),children:(0,r.jsx)("span",{children:"New"})}):null},g=function(){return t&&!t.in_stock?(0,r.jsx)("div",{className:"".concat(a().ribbon_soldout),children:(0,r.jsx)("span",{children:"Sold out"})}):null},_=function(){return t&&t.has_offer&&!t.hasCampaign?(0,r.jsx)("div",{className:"".concat(a().ribbon),children:(0,r.jsx)("span",{children:"Offer"})}):t&&!t.has_offer&&t.hasCampaign?t.campaign?(0,r.jsx)("div",{className:"".concat(a().ribbon),children:(0,r.jsx)("span",{children:t.campaign[0].name})}):(0,r.jsx)("div",{className:"".concat(a().ribbon),children:(0,r.jsx)("span",{children:"Offer"})}):null},v=function(){return t?t.has_offer||t.hasCampaign?(0,r.jsxs)("span",{className:"".concat(a().product_price," ").concat(a().offer_price),children:[t.selling_price.formatted," ",(0,r.jsx)("span",{className:"".concat(a().old),children:t.price.formatted})]}):(0,r.jsx)("span",{className:"".concat(a().product_price),children:t.price.formatted}):(0,r.jsx)("span",{className:"".concat(a().product_price),children:"QAR 00.00"})},b=function(e){if(e.attribute.length>0){var t=e.attribute.filter((function(e){return 4===e.attribute_id}));if(t.length>0)return(t=t[0].Brand)?(0,r.jsx)("span",{className:"".concat(a().product_brand),children:t}):(0,r.jsx)("span",{className:"".concat(a().product_brand),children:" "})}return(0,r.jsx)("span",{className:"".concat(a().product_brand),children:" "})};return(0,r.jsx)(s.default,{href:t?"/product/".concat(t.slug):"/products/slug",children:(0,r.jsxs)("a",{className:d?"".concat(a().product):"".concat(a().product," hide"),dir:"en"==l?"ltr":"rlt",children:[(0,r.jsx)(m,{}),(0,r.jsx)(_,{}),(0,r.jsx)(g,{}),(0,r.jsx)("div",{className:"".concat(a().product_img," card_image"),children:(0,r.jsx)(i.ZP,{once:!0,placeholder:(0,r.jsx)("div",{className:"spinner-border text-danger"}),children:(0,r.jsx)("img",{src:t?t.files[0].thumbnail_image:"/assets/images/product.png",alt:t.name})})}),(0,r.jsx)(b,{attribute:t.attributes}),(0,r.jsx)("span",{className:"".concat(a().product_name),children:t?t.name:"I am a long product name. I will be clamped after two lines"}),(0,r.jsx)(v,{})]})})}))},11879:function(e){e.exports={product:"ProductCard_product__2nwu7",product_name:"ProductCard_product_name__2T9-j",ribbon_soldout:"ProductCard_ribbon_soldout__SNlNo",ribbon:"ProductCard_ribbon__2hz7J",ribbon_new:"ProductCard_ribbon_new__2UT-D",ribbon_campaign:"ProductCard_ribbon_campaign__3a00e",product_img:"ProductCard_product_img__2LjLr","lazyload-wrapper":"ProductCard_lazyload-wrapper__3OtQx",product_brand:"ProductCard_product_brand__Fn7Ff",product_price:"ProductCard_product_price__84928",offer_price:"ProductCard_offer_price__3ZVOX",old:"ProductCard_old__ABpJE"}},58533:function(e,t,o){"use strict";var r=o(67294),n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};var s=function(){return(s=Object.assign||function(e){for(var t,o=1,r=arguments.length;o<r;o++)for(var n in t=arguments[o])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};var i="Pixel",l="Percent",a={unit:l,value:.8};function c(e){return"number"===typeof e?{unit:l,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:i,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:l,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),a):(console.warn("scrollThreshold should be string or number"),a)}var p=function(e){function t(t){var o=e.call(this,t)||this;return o.lastScrollTop=0,o.actionTriggered=!1,o.startY=0,o.currentY=0,o.dragging=!1,o.maxPullDownDistance=0,o.getScrollableTarget=function(){return o.props.scrollableTarget instanceof HTMLElement?o.props.scrollableTarget:"string"===typeof o.props.scrollableTarget?document.getElementById(o.props.scrollableTarget):(null===o.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},o.onStart=function(e){o.lastScrollTop||(o.dragging=!0,e instanceof MouseEvent?o.startY=e.pageY:e instanceof TouchEvent&&(o.startY=e.touches[0].pageY),o.currentY=o.startY,o._infScroll&&(o._infScroll.style.willChange="transform",o._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},o.onMove=function(e){o.dragging&&(e instanceof MouseEvent?o.currentY=e.pageY:e instanceof TouchEvent&&(o.currentY=e.touches[0].pageY),o.currentY<o.startY||(o.currentY-o.startY>=Number(o.props.pullDownToRefreshThreshold)&&o.setState({pullToRefreshThresholdBreached:!0}),o.currentY-o.startY>1.5*o.maxPullDownDistance||o._infScroll&&(o._infScroll.style.overflow="visible",o._infScroll.style.transform="translate3d(0px, "+(o.currentY-o.startY)+"px, 0px)")))},o.onEnd=function(){o.startY=0,o.currentY=0,o.dragging=!1,o.state.pullToRefreshThresholdBreached&&(o.props.refreshFunction&&o.props.refreshFunction(),o.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){o._infScroll&&(o._infScroll.style.overflow="auto",o._infScroll.style.transform="none",o._infScroll.style.willChange="unset")}))},o.onScrollListener=function(e){"function"===typeof o.props.onScroll&&setTimeout((function(){return o.props.onScroll&&o.props.onScroll(e)}),0);var t=o.props.height||o._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;o.actionTriggered||((o.props.inverse?o.isElementAtTop(t,o.props.scrollThreshold):o.isElementAtBottom(t,o.props.scrollThreshold))&&o.props.hasMore&&(o.actionTriggered=!0,o.setState({showLoader:!0}),o.props.next&&o.props.next()),o.lastScrollTop=t.scrollTop)},o.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:t.dataLength},o.throttledOnScrollListener=function(e,t,o,r){var n,s=!1,i=0;function l(){n&&clearTimeout(n)}function a(){var a=this,c=Date.now()-i,p=arguments;function h(){i=Date.now(),o.apply(a,p)}function u(){n=void 0}s||(r&&!n&&h(),l(),void 0===r&&c>e?h():!0!==t&&(n=setTimeout(r?u:h,void 0===r?e-c:e)))}return"boolean"!==typeof t&&(r=o,o=t,t=void 0),a.cancel=function(){l(),s=!0},a}(150,o.onScrollListener).bind(o),o.onStart=o.onStart.bind(o),o.onMove=o.onMove.bind(o),o.onEnd=o.onEnd.bind(o),o}return function(e,t){function o(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(t,e),t.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},t.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},t.prototype.componentDidUpdate=function(e){this.props.dataLength!==e.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},t.getDerivedStateFromProps=function(e,t){return e.dataLength!==t.prevDataLength?s(s({},t),{prevDataLength:e.dataLength}):null},t.prototype.isElementAtTop=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=c(t);return r.unit===i?e.scrollTop<=r.value+o-e.scrollHeight+1:e.scrollTop<=r.value/100+o-e.scrollHeight+1},t.prototype.isElementAtBottom=function(e,t){void 0===t&&(t=.8);var o=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,r=c(t);return r.unit===i?e.scrollTop+o>=e.scrollHeight-r.value:e.scrollTop+o>=r.value/100*e.scrollHeight},t.prototype.render=function(){var e=this,t=s({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),o=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.createElement("div",{style:n,className:"infinite-scroll-component__outerdiv"},r.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!o&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},t}(r.Component);t.Z=p}}]);