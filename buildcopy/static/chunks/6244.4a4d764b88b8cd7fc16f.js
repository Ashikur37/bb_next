(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6244],{32092:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67294);function o(){return(0,r.useState)(null)}},96895:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(67294);var o=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e}),[e]),t};function i(e){var t=o(e);return(0,r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},6454:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67294);function o(){var e=(0,r.useRef)(!0),t=(0,r.useRef)((function(){return e.current}));return(0,r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},88833:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){var t=(0,r.useRef)(null);return(0,r.useEffect)((function(){t.current=e})),t.current}},9351:function(e,t,n){"use strict";var r=n(23004),o=!1,i=!1;try{var a={get passive(){return o=!0},get once(){return i=o=!0}};r.Z&&(window.addEventListener("test",a,a),window.removeEventListener("test",a,!0))}catch(u){}t.ZP=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!i){var a=r.once,u=r.capture,s=n;!i&&a&&(s=n.__once||function e(r){this.removeEventListener(t,e,u),n.call(this,r)},n.__once=s),e.addEventListener(t,s,o?r:u)}e.addEventListener(t,n,r)}},23004:function(e,t){"use strict";t.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},90424:function(e,t,n){"use strict";function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,{Z:function(){return r}})},11132:function(e,t,n){"use strict";function r(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}n.d(t,{Z:function(){return r}})},72950:function(e,t,n){"use strict";var r=n(9351),o=n(30099);t.Z=function(e,t,n,i){return(0,r.ZP)(e,t,n,i),function(){(0,o.Z)(e,t,n,i)}}},67216:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return r}})},60930:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function o(e,t){return r(e.querySelectorAll(t))}},30099:function(e,t){"use strict";t.Z=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)}},51899:function(){},55638:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,o,i){var a=r||"<<anonymous>>",u=i||n;if(null==t[n])return new Error("The "+o+" `"+u+"` is required to make `"+a+"` accessible for users of assistive technologies such as screen readers.");for(var s=arguments.length,c=Array(s>5?s-5:0),l=5;l<s;l++)c[l-5]=arguments[l];return e.apply(void 0,[t,n,r,o,i].concat(c))}},e.exports=t.default},4860:function(e,t,n){"use strict";n.d(t,{Z:function(){return $e}});var r,o=n(87462),i=n(63366),a=n(44036),u=n.n(a),s=n(67294);var c=n(60930),l=n(9351),f=n(45697),d=n.n(f);n(41143);function p(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function v(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function m(e,t,n){var r=(0,s.useRef)(void 0!==e),o=(0,s.useState)(t),i=o[0],a=o[1],u=void 0!==e,c=r.current;return r.current=u,!u&&c&&i!==t&&a(t),[u?e:i,(0,s.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];n&&n.apply(void 0,[e].concat(r)),a(e)}),[n])]}function g(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function h(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function b(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}g.__suppressDeprecationWarning=!0,h.__suppressDeprecationWarning=!0,b.__suppressDeprecationWarning=!0;var y=n(88833);var w=n(96895);function Z(e,t,n){return void 0===n&&(n=!1),function(e,t,n,r){void 0===r&&(r=!1);var o=(0,w.Z)(n);(0,s.useEffect)((function(){var n="function"===typeof e?e():e;return n.addEventListener(t,o,r),function(){return n.removeEventListener(t,o,r)}}),[e])}((0,s.useCallback)((function(){return document}),[]),e,t,n)}var E=s.createContext(null),C=n(32092),x=n(6454);var k=function(e){var t=(0,x.Z)();return[e[0],(0,s.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]},P=n(66896),S=n(36531),N=n(82372),R=n(45228),O=n(19892),D=n(82122),T=n(77421),A=n(43920),M=(0,n(38240).kZ)({defaultModifiers:[O.Z,T.Z,S.Z,N.Z,D.Z,R.Z,A.Z,P.Z]}),_=function(e){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},F={name:"applyStyles",enabled:!1},L={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",a?a+","+r.id:r.id)}}},j=[];var I=function(e,t,n){var r=void 0===n?{}:n,a=r.enabled,u=void 0===a||a,c=r.placement,l=void 0===c?"bottom":c,f=r.strategy,d=void 0===f?"absolute":f,p=r.modifiers,v=void 0===p?j:p,m=(0,i.Z)(r,["enabled","placement","strategy","modifiers"]),g=(0,s.useRef)(),h=(0,s.useCallback)((function(){var e;null==(e=g.current)||e.update()}),[]),b=(0,s.useCallback)((function(){var e;null==(e=g.current)||e.forceUpdate()}),[]),y=k((0,s.useState)({placement:l,update:h,forceUpdate:b,attributes:{},styles:{popper:_(d),arrow:{}}})),w=y[0],Z=y[1],E=(0,s.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),Z({state:t,styles:n,attributes:r,update:h,forceUpdate:b,placement:t.placement})}}}),[h,b,Z]);return(0,s.useEffect)((function(){g.current&&u&&g.current.setOptions({placement:l,strategy:d,modifiers:[].concat(v,[E,F])})}),[d,l,E,u]),(0,s.useEffect)((function(){if(u&&null!=e&&null!=t)return g.current=M(e,t,(0,o.Z)({},m,{placement:l,strategy:d,modifiers:[].concat(v,[L,E])})),function(){null!=g.current&&(g.current.destroy(),g.current=void 0,Z((function(e){return(0,o.Z)({},e,{attributes:{},styles:{popper:_(d)}})})))}}),[u,e,t]),w},K=n(90424),U=n(72950),q=n(42473),B=n.n(q),W=n(67216),z=n(73935);var H=function(e){return(0,W.Z)(function(e){return e&&"setState"in e?z.findDOMNode(e):null!=e?e:null}(e))},V=function(){};var $=function(e){return e&&("current"in e?e.current:e)};var G=function(e,t,n){var r=void 0===n?{}:n,o=r.disabled,i=r.clickTrigger,a=void 0===i?"click":i,u=(0,s.useRef)(!1),c=t||V,l=(0,s.useCallback)((function(t){var n,r=$(e);B()(!!r,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),u.current=!r||!!((n=t).metaKey||n.altKey||n.ctrlKey||n.shiftKey)||!function(e){return 0===e.button}(t)||!!(0,K.Z)(r,t.target)}),[e]),f=(0,w.Z)((function(e){u.current||c(e)})),d=(0,w.Z)((function(e){27===e.keyCode&&c(e)}));(0,s.useEffect)((function(){if(!o&&null!=e){var t=window.event,n=H($(e)),r=(0,U.Z)(n,a,l,!0),i=(0,U.Z)(n,a,(function(e){e!==t?f(e):t=void 0})),u=(0,U.Z)(n,"keyup",(function(e){e!==t?d(e):t=void 0})),s=[];return"ontouchstart"in n.documentElement&&(s=[].slice.call(n.body.children).map((function(e){return(0,U.Z)(e,"mousemove",V)}))),function(){r(),i(),u(),s.forEach((function(e){return e()}))}}}),[e,o,a,l,f,d])};function J(e){var t,n,r,i,a,u=e.enabled,s=e.enableEvents,c=e.placement,l=e.flip,f=e.offset,d=e.fixed,p=e.containerPadding,v=e.arrowElement,m=e.popperConfig,g=void 0===m?{}:m,h=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(g.modifiers);return(0,o.Z)({},g,{placement:c,enabled:u,strategy:d?"fixed":g.strategy,modifiers:(a=(0,o.Z)({},h,{eventListeners:{enabled:s},preventOverflow:(0,o.Z)({},h.preventOverflow,{options:p?(0,o.Z)({padding:p},null==(t=h.preventOverflow)?void 0:t.options):null==(n=h.preventOverflow)?void 0:n.options}),offset:{options:(0,o.Z)({offset:f},null==(r=h.offset)?void 0:r.options)},arrow:(0,o.Z)({},h.arrow,{enabled:!!v,options:(0,o.Z)({},null==(i=h.arrow)?void 0:i.options,{element:v})}),flip:(0,o.Z)({enabled:!!l},h.flip)}),void 0===a&&(a={}),Array.isArray(a)?a:Object.keys(a).map((function(e){return a[e].name=e,a[e]})))})}var Q=function(){};function X(e){void 0===e&&(e={});var t=(0,s.useContext)(E),n=(0,C.Z)(),r=n[0],i=n[1],a=(0,s.useRef)(!1),u=e,c=u.flip,l=u.offset,f=u.rootCloseEvent,d=u.fixed,p=void 0!==d&&d,v=u.popperConfig,m=void 0===v?{}:v,g=u.usePopper,h=void 0===g?!!t:g,b=null==(null==t?void 0:t.show)?!!e.show:t.show,y=null==(null==t?void 0:t.alignEnd)?e.alignEnd:t.alignEnd;b&&!a.current&&(a.current=!0);var w=t||{},Z=w.drop,x=w.setMenu,k=w.menuElement,P=w.toggleElement,S=y?"bottom-end":"bottom-start";"up"===Z?S=y?"top-end":"top-start":"right"===Z?S=y?"right-end":"right-start":"left"===Z&&(S=y?"left-end":"left-start");var N=I(P,k,J({placement:S,enabled:!(!h||!b),enableEvents:b,offset:l,flip:c,fixed:p,arrowElement:r,popperConfig:m})),R=(0,o.Z)({ref:x||Q,"aria-labelledby":null==P?void 0:P.id},N.attributes.popper,{style:N.styles.popper}),O={show:b,alignEnd:y,hasShown:a.current,toggle:null==t?void 0:t.toggle,popper:h?N:null,arrowProps:h?(0,o.Z)({ref:i},N.attributes.arrow,{style:N.styles.arrow}):{}};return G(k,(function(e){null==t||t.toggle(!1,e)}),{clickTrigger:f,disabled:!b}),[R,O]}var Y={children:d().func.isRequired,show:d().bool,alignEnd:d().bool,flip:d().bool,usePopper:d().oneOf([!0,!1]),popperConfig:d().object,rootCloseEvent:d().string};function ee(e){var t=e.children,n=X((0,i.Z)(e,["children"])),r=n[0],o=n[1];return s.createElement(s.Fragment,null,o.hasShown?t(r,o):null)}ee.displayName="ReactOverlaysDropdownMenu",ee.propTypes=Y,ee.defaultProps={usePopper:!0};var te=ee,ne=function(){};function re(){var e=(0,s.useContext)(E)||{},t=e.show,n=void 0!==t&&t,r=e.toggle,o=void 0===r?ne:r,i=e.setToggle,a=(0,s.useCallback)((function(e){o(!n,e)}),[n,o]);return[{ref:i||ne,onClick:a,"aria-haspopup":!0,"aria-expanded":!!n},{show:n,toggle:o}]}var oe={children:d().func.isRequired};function ie(e){var t=e.children,n=re(),r=n[0],o=n[1];return s.createElement(s.Fragment,null,t(r,o))}ie.displayName="ReactOverlaysDropdownToggle",ie.propTypes=oe;var ae=ie,ue={children:d().node,drop:d().oneOf(["up","left","right","down"]),focusFirstItemOnShow:d().oneOf([!1,!0,"keyboard"]),itemSelector:d().string,alignEnd:d().bool,show:d().bool,defaultShow:d().bool,onToggle:d().func};function se(){var e=(0,s.useReducer)((function(e){return!e}),!1)[1],t=(0,s.useRef)(null),n=(0,s.useCallback)((function(n){t.current=n,e()}),[e]);return[t,n]}function ce(e){var t=e.drop,n=e.alignEnd,o=e.defaultShow,i=e.show,a=e.onToggle,u=e.itemSelector,f=void 0===u?"* > *":u,d=e.focusFirstItemOnShow,p=e.children,v=m(i,o,a),g=v[0],h=v[1],b=se(),C=b[0],x=b[1],k=C.current,P=se(),S=P[0],N=P[1],R=S.current,O=(0,y.Z)(g),D=(0,s.useRef)(null),T=(0,s.useRef)(!1),A=(0,s.useCallback)((function(e,t){h(e,t)}),[h]),M=(0,s.useMemo)((function(){return{toggle:A,drop:t,show:g,alignEnd:n,menuElement:k,toggleElement:R,setMenu:x,setToggle:N}}),[A,t,g,n,k,R,x,N]);k&&O&&!g&&(T.current=k.contains(document.activeElement));var _=(0,w.Z)((function(){R&&R.focus&&R.focus()})),F=(0,w.Z)((function(){var e=D.current,t=d;if(null==t&&(t=!(!C.current||!function(e,t){if(!r){var n=document.body,o=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;r=function(e,t){return o.call(e,t)}}return r(e,t)}(C.current,"[role=menu]"))&&"keyboard"),!1!==t&&("keyboard"!==t||/^key.+$/.test(e))){var n=(0,c.Z)(C.current,f)[0];n&&n.focus&&n.focus()}}));(0,s.useEffect)((function(){g?F():T.current&&(T.current=!1,_())}),[g,T,_,F]),(0,s.useEffect)((function(){D.current=null}));var L=function(e,t){if(!C.current)return null;var n=(0,c.Z)(C.current,f),r=n.indexOf(e)+t;return n[r=Math.max(0,Math.min(r,n.length))]};return Z("keydown",(function(e){var t,n,r=e.key,o=e.target,i=null==(t=C.current)?void 0:t.contains(o),a=null==(n=S.current)?void 0:n.contains(o);if((!/input|textarea/i.test(o.tagName)||!(" "===r||"Escape"!==r&&i))&&(i||a)&&(C.current||"Tab"!==r))switch(D.current=e.type,r){case"ArrowUp":var u=L(o,-1);return u&&u.focus&&u.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),g){var s=L(o,1);s&&s.focus&&s.focus()}else h(!0,e);return;case"Tab":(0,l.ZP)(document,"keyup",(function(t){var n;("Tab"!==t.key||t.target)&&null!=(n=C.current)&&n.contains(t.target)||h(!1,e)}),{once:!0});break;case"Escape":e.preventDefault(),e.stopPropagation(),h(!1,e)}})),s.createElement(E.Provider,{value:M},p)}ce.displayName="ReactOverlaysDropdown",ce.propTypes=ue,ce.Menu=te,ce.Toggle=ae;var le=ce,fe=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},de=s.createContext(null),pe=n(76792),ve=s.createContext(null);ve.displayName="NavContext";var me=ve;var ge=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e.apply(this,r),t.apply(this,r)}}),null)},he=["as","disabled","onKeyDown"];function be(e){return!e||"#"===e.trim()}var ye=s.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,a=e.disabled,u=e.onKeyDown,c=(0,i.Z)(e,he),l=function(e){var t=c.href,n=c.onClick;(a||be(t))&&e.preventDefault(),a?e.stopPropagation():n&&n(e)};return be(c.href)&&(c.role=c.role||"button",c.href=c.href||"#"),a&&(c.tabIndex=-1,c["aria-disabled"]=!0),s.createElement(r,(0,o.Z)({ref:t},c,{onClick:l,onKeyDown:ge((function(e){" "===e.key&&(e.preventDefault(),l(e))}),u)}))}));ye.displayName="SafeAnchor";var we=ye,Ze=["bsPrefix","className","children","eventKey","disabled","href","onClick","onSelect","active","as"],Ee={as:we,disabled:!1},Ce=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,c=e.eventKey,l=e.disabled,f=e.href,d=e.onClick,p=e.onSelect,v=e.active,m=e.as,g=(0,i.Z)(e,Ze),h=(0,pe.vE)(n,"dropdown-item"),b=(0,s.useContext)(de),y=((0,s.useContext)(me)||{}).activeKey,Z=fe(c,f),E=null==v&&null!=Z?fe(y)===Z:v,C=(0,w.Z)((function(e){l||(d&&d(e),b&&b(Z,e),p&&p(Z,e))}));return s.createElement(m,(0,o.Z)({},g,{ref:t,href:f,disabled:l,className:u()(r,h,E&&"active",l&&"disabled"),onClick:C}),a)}));Ce.displayName="DropdownItem",Ce.defaultProps=Ee;var xe=Ce,ke=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var Pe=function(e,t){return(0,s.useMemo)((function(){return function(e,t){var n=ke(e),r=ke(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},Se=s.createContext(null);Se.displayName="NavbarContext";var Ne=Se;function Re(e,t){return e}var Oe=n(11132);function De(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}var Te=["bsPrefix","className","align","alignRight","rootCloseEvent","flip","show","renderOnMount","as","popperConfig"],Ae=d().oneOf(["left","right"]),Me=(d().oneOfType([Ae,d().shape({sm:Ae}),d().shape({md:Ae}),d().shape({lg:Ae}),d().shape({xl:Ae})]),s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.align,c=e.alignRight,l=e.rootCloseEvent,f=e.flip,d=e.show,p=e.renderOnMount,v=e.as,m=void 0===v?"div":v,g=e.popperConfig,h=(0,i.Z)(e,Te),b=(0,s.useContext)(Ne),y=(0,pe.vE)(n,"dropdown-menu"),w=function(){var e=(0,s.useRef)(null),t=(0,s.useRef)(null),n=(0,s.useRef)(null),r=(0,pe.vE)(void 0,"popover"),o=(0,pe.vE)(void 0,"dropdown-menu");return[(0,s.useCallback)((function(n){n&&((0,Oe.Z)(n,r)||(0,Oe.Z)(n,o))&&(t.current=De(n),n.style.margin="0",e.current=n)}),[r,o]),[(0,s.useMemo)((function(){return{name:"offset",options:{offset:function(e){var n=e.placement;if(!t.current)return[0,0];var r=t.current,o=r.top,i=r.left,a=r.bottom,u=r.right;switch(n.split("-")[0]){case"top":return[0,a];case"left":return[0,u];case"bottom":return[0,o];case"right":return[0,i];default:return[0,0]}}}}}),[t]),(0,s.useMemo)((function(){return{name:"arrow",options:{padding:function(){if(!n.current)return 0;var e=n.current,t=e.top,r=e.right,o=t||r;return{top:o,left:o,right:o,bottom:o}}}}}),[n]),(0,s.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",requiresIfExists:["arrow"],effect:function(t){var o=t.state;if(e.current&&o.elements.arrow&&(0,Oe.Z)(e.current,r)){if(o.modifiersData["arrow#persistent"]){var i=De(o.elements.arrow),a=i.top,u=i.right,s=a||u;o.modifiersData["arrow#persistent"].padding={top:s,left:s,right:s,bottom:s}}else n.current=De(o.elements.arrow);return o.elements.arrow.style.margin="0",function(){o.elements.arrow&&(o.elements.arrow.style.margin="")}}}}}),[r])]]}(),Z=w[0],E=w[1],C=[];if(a)if("object"===typeof a){var x=Object.keys(a);if(x.length){var k=x[0],P=a[k];c="left"===P,C.push(y+"-"+k+"-"+P)}}else"right"===a&&(c=!0);var S=X({flip:f,rootCloseEvent:l,show:d,alignEnd:c,usePopper:!b&&0===C.length,popperConfig:(0,o.Z)({},g,{modifiers:E.concat((null==g?void 0:g.modifiers)||[])})}),N=S[0],R=S[1],O=R.hasShown,D=R.popper,T=R.show,A=R.alignEnd,M=R.toggle;if(N.ref=Pe(Z,Pe(Re(t),N.ref)),!O&&!p)return null;"string"!==typeof m&&(N.show=T,N.close=function(){return null==M?void 0:M(!1)},N.alignRight=A);var _=h.style;return null!=D&&D.placement&&(_=(0,o.Z)({},h.style,N.style),h["x-placement"]=D.placement),s.createElement(m,(0,o.Z)({},h,N,{style:_,className:u().apply(void 0,[r,y,T&&"show",A&&y+"-right"].concat(C))}))})));Me.displayName="DropdownMenu",Me.defaultProps={align:"left",alignRight:!1,flip:!0};var _e=Me,Fe=(n(55638),["bsPrefix","variant","size","active","className","block","type","as"]),Le=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.variant,a=e.size,c=e.active,l=e.className,f=e.block,d=e.type,p=e.as,v=(0,i.Z)(e,Fe),m=(0,pe.vE)(n,"btn"),g=u()(l,m,c&&"active",r&&m+"-"+r,f&&m+"-block",a&&m+"-"+a);if(v.href)return s.createElement(we,(0,o.Z)({},v,{as:p,ref:t,className:u()(g,v.disabled&&"disabled")}));t&&(v.ref=t),d?v.type=d:p||(v.type="button");var h=p||"button";return s.createElement(h,(0,o.Z)({},v,{className:g}))}));Le.displayName="Button",Le.defaultProps={variant:"primary",active:!1,disabled:!1};var je=Le,Ie=["bsPrefix","split","className","childBsPrefix","as"],Ke=s.forwardRef((function(e,t){var n=e.bsPrefix,r=e.split,a=e.className,c=e.childBsPrefix,l=e.as,f=void 0===l?je:l,d=(0,i.Z)(e,Ie),p=(0,pe.vE)(n,"dropdown-toggle");void 0!==c&&(d.bsPrefix=c);var v=re()[0];return v.ref=Pe(v.ref,Re(t)),s.createElement(f,(0,o.Z)({className:u()(a,p,r&&p+"-split")},v,d))}));Ke.displayName="DropdownToggle";var Ue=Ke,qe=n(44680),Be=["bsPrefix","drop","show","className","alignRight","onSelect","onToggle","focusFirstItemOnShow","as","navbar"],We=(0,qe.Z)("dropdown-header",{defaultProps:{role:"heading"}}),ze=(0,qe.Z)("dropdown-divider",{defaultProps:{role:"separator"}}),He=(0,qe.Z)("dropdown-item-text",{Component:"span"}),Ve=s.forwardRef((function(e,t){var n=function(e,t){return Object.keys(t).reduce((function(n,r){var a,u=n,s=u[p(r)],c=u[r],l=(0,i.Z)(u,[p(r),r].map(v)),f=t[r],d=m(c,s,e[f]),g=d[0],h=d[1];return(0,o.Z)({},l,((a={})[r]=g,a[f]=h,a))}),e)}(e,{show:"onToggle"}),r=n.bsPrefix,a=n.drop,c=n.show,l=n.className,f=n.alignRight,d=n.onSelect,g=n.onToggle,h=n.focusFirstItemOnShow,b=n.as,y=void 0===b?"div":b,Z=(n.navbar,(0,i.Z)(n,Be)),E=(0,s.useContext)(de),C=(0,pe.vE)(r,"dropdown"),x=(0,w.Z)((function(e,t,n){void 0===n&&(n=t.type),t.currentTarget!==document||"keydown"===n&&"Escape"!==t.key||(n="rootClose"),g&&g(e,t,{source:n})})),k=(0,w.Z)((function(e,t){E&&E(e,t),d&&d(e,t),x(!1,t,"select")}));return s.createElement(de.Provider,{value:k},s.createElement(le,{drop:a,show:c,alignEnd:f,onToggle:x,focusFirstItemOnShow:h,itemSelector:"."+C+"-item:not(.disabled):not(:disabled)"},s.createElement(y,(0,o.Z)({},Z,{ref:t,className:u()(l,c&&"show",(!a||"down"===a)&&C,"up"===a&&"dropup","right"===a&&"dropright","left"===a&&"dropleft")}))))}));Ve.displayName="Dropdown",Ve.defaultProps={navbar:!1},Ve.Divider=ze,Ve.Header=We,Ve.Item=xe,Ve.ItemText=He,Ve.Menu=_e,Ve.Toggle=Ue;var $e=Ve},76792:function(e,t,n){"use strict";n.d(t,{vE:function(){return i}});var r=n(67294),o=r.createContext({});o.Consumer,o.Provider;function i(e,t){var n=(0,r.useContext)(o);return e||n[t]||t}},44680:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(87462),o=n(63366),i=n(44036),a=n.n(i),u=/-(.)/g;var s=n(67294),c=n(76792),l=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(t=e,t.replace(u,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,i=n.displayName,u=void 0===i?f(e):i,d=n.Component,p=n.defaultProps,v=s.forwardRef((function(t,n){var i=t.className,u=t.bsPrefix,f=t.as,p=void 0===f?d||"div":f,v=(0,o.Z)(t,l),m=(0,c.vE)(u,e);return s.createElement(p,(0,r.Z)({ref:n,className:a()(i,m)},v))}));return v.defaultProps=p,v.displayName=u,v}},44036:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var u in n)r.call(n,u)&&n[u]&&e.push(u);else e.push(n.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()}}]);