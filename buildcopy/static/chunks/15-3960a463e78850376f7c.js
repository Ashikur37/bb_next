"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[15],{38240:function(t,e,n){n.d(e,{kZ:function(){return b}});var r=n(50400),o=n(82163),i=n(62057),a=n(62556);var f=n(96333),u=n(4063),c=n(67252),s=n(60611);function p(t,e,n){void 0===n&&(n=!1);var p=(0,a.Re)(e),d=(0,a.Re)(e)&&function(t){var e=t.getBoundingClientRect(),n=e.width/t.offsetWidth||1,r=e.height/t.offsetHeight||1;return 1!==n||1!==r}(e),l=(0,c.Z)(e),h=(0,r.Z)(t,d),v={scrollLeft:0,scrollTop:0},m={x:0,y:0};return(p||!p&&!n)&&(("body"!==(0,f.Z)(e)||(0,s.Z)(l))&&(v=function(t){return t!==(0,i.Z)(t)&&(0,a.Re)(t)?{scrollLeft:(e=t).scrollLeft,scrollTop:e.scrollTop}:(0,o.Z)(t);var e}(e)),(0,a.Re)(e)?((m=(0,r.Z)(e,!0)).x+=e.clientLeft,m.y+=e.clientTop):l&&(m.x=(0,u.Z)(l))),{x:h.left+v.scrollLeft-m.x,y:h.top+v.scrollTop-m.y,width:h.width,height:h.height}}var d=n(40583),l=n(63624),h=n(93779),v=n(87701);function m(t){var e=new Map,n=new Set,r=[];function o(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&o(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),r}function Z(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}var g={placement:"bottom",modifiers:[],strategy:"absolute"};function y(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function b(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,o=e.defaultOptions,i=void 0===o?g:o;return function(t,e,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},g,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},f=[],u=!1,c={state:o,setOptions:function(n){s(),o.options=Object.assign({},i,o.options,n),o.scrollParents={reference:(0,a.kK)(t)?(0,l.Z)(t):t.contextElement?(0,l.Z)(t.contextElement):[],popper:(0,l.Z)(e)};var u=function(t){var e=m(t);return v.xs.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}(function(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=u.filter((function(t){return t.enabled})),o.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,i=t.effect;if("function"===typeof i){var a=i({state:o,name:e,instance:c,options:r}),u=function(){};f.push(a||u)}})),c.update()},forceUpdate:function(){if(!u){var t=o.elements,e=t.reference,n=t.popper;if(y(e,n)){o.rects={reference:p(e,(0,h.Z)(n),"fixed"===o.options.strategy),popper:(0,d.Z)(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(t){return o.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,f=i.options,s=void 0===f?{}:f,l=i.name;"function"===typeof a&&(o=a({state:o,options:s,name:l,instance:c})||o)}else o.reset=!1,r=-1}}},update:Z((function(){return new Promise((function(t){c.forceUpdate(),t(o)}))})),destroy:function(){s(),u=!0}};if(!y(t,e))return c;function s(){f.forEach((function(t){return t()})),f=[]}return c.setOptions(n).then((function(t){!u&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}},94985:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(62556);function o(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&(0,r.Zq)(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},50400:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(62556),o=Math.round;function i(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect(),i=1,a=1;return(0,r.Re)(t)&&e&&(i=n.width/t.offsetWidth||1,a=n.height/t.offsetHeight||1),{width:o(n.width/i),height:o(n.height/a),top:o(n.top/a),right:o(n.right/i),bottom:o(n.bottom/a),left:o(n.left/i),x:o(n.left/i),y:o(n.top/a)}}},43062:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(62057);function o(t){return(0,r.Z)(t).getComputedStyle(t)}},67252:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(62556);function o(t){return(((0,r.kK)(t)?t.ownerDocument:t.document)||window.document).documentElement}},40583:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(50400);function o(t){var e=(0,r.Z)(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}},96333:function(t,e,n){function r(t){return t?(t.nodeName||"").toLowerCase():null}n.d(e,{Z:function(){return r}})},93779:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(62057),o=n(96333),i=n(43062),a=n(62556);function f(t){return["table","td","th"].indexOf((0,o.Z)(t))>=0}var u=n(95923);function c(t){return(0,a.Re)(t)&&"fixed"!==(0,i.Z)(t).position?t.offsetParent:null}function s(t){for(var e=(0,r.Z)(t),n=c(t);n&&f(n)&&"static"===(0,i.Z)(n).position;)n=c(n);return n&&("html"===(0,o.Z)(n)||"body"===(0,o.Z)(n)&&"static"===(0,i.Z)(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&(0,a.Re)(t)&&"fixed"===(0,i.Z)(t).position)return null;for(var n=(0,u.Z)(t);(0,a.Re)(n)&&["html","body"].indexOf((0,o.Z)(n))<0;){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(t)||e}},95923:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(96333),o=n(67252),i=n(62556);function a(t){return"html"===(0,r.Z)(t)?t:t.assignedSlot||t.parentNode||((0,i.Zq)(t)?t.host:null)||(0,o.Z)(t)}},62057:function(t,e,n){function r(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}n.d(e,{Z:function(){return r}})},82163:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(62057);function o(t){var e=(0,r.Z)(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}},4063:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(50400),o=n(67252),i=n(82163);function a(t){return(0,r.Z)((0,o.Z)(t)).left+(0,i.Z)(t).scrollLeft}},62556:function(t,e,n){n.d(e,{kK:function(){return o},Re:function(){return i},Zq:function(){return a}});var r=n(62057);function o(t){return t instanceof(0,r.Z)(t).Element||t instanceof Element}function i(t){return t instanceof(0,r.Z)(t).HTMLElement||t instanceof HTMLElement}function a(t){return"undefined"!==typeof ShadowRoot&&(t instanceof(0,r.Z)(t).ShadowRoot||t instanceof ShadowRoot)}},60611:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(43062);function o(t){var e=(0,r.Z)(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},63624:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(95923),o=n(60611),i=n(96333),a=n(62556);function f(t){return["html","body","#document"].indexOf((0,i.Z)(t))>=0?t.ownerDocument.body:(0,a.Re)(t)&&(0,o.Z)(t)?t:f((0,r.Z)(t))}var u=n(62057);function c(t,e){var n;void 0===e&&(e=[]);var i=f(t),a=i===(null==(n=t.ownerDocument)?void 0:n.body),s=(0,u.Z)(i),p=a?[s].concat(s.visualViewport||[],(0,o.Z)(i)?i:[]):i,d=e.concat(p);return a?d:d.concat(c((0,r.Z)(p)))}},87701:function(t,e,n){n.d(e,{we:function(){return r},I:function(){return o},F2:function(){return i},t$:function(){return a},d7:function(){return f},mv:function(){return u},BL:function(){return c},ut:function(){return s},zV:function(){return p},Pj:function(){return d},k5:function(){return l},YP:function(){return h},bw:function(){return v},Ct:function(){return m},xs:function(){return Z}});var r="top",o="bottom",i="right",a="left",f="auto",u=[r,o,i,a],c="start",s="end",p="clippingParents",d="viewport",l="popper",h="reference",v=u.reduce((function(t,e){return t.concat([e+"-"+c,e+"-"+s])}),[]),m=[].concat(u,[f]).reduce((function(t,e){return t.concat([e,e+"-"+c,e+"-"+s])}),[]),Z=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"]},66896:function(t,e,n){var r=n(6206),o=n(40583),i=n(94985),a=n(93779),f=n(11516),u=n(57516),c=n(63293),s=n(33706),p=n(87701);e.Z={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,i=t.name,d=t.options,l=n.elements.arrow,h=n.modifiersData.popperOffsets,v=(0,r.Z)(n.placement),m=(0,f.Z)(v),Z=[p.t$,p.F2].indexOf(v)>=0?"height":"width";if(l&&h){var g=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,(0,c.Z)("number"!==typeof t?t:(0,s.Z)(t,p.mv))}(d.padding,n),y=(0,o.Z)(l),b="y"===m?p.we:p.t$,w="y"===m?p.I:p.F2,x=n.rects.reference[Z]+n.rects.reference[m]-h[m]-n.rects.popper[Z],O=h[m]-n.rects.reference[m],k=(0,a.Z)(l),E=k?"y"===m?k.clientHeight||0:k.clientWidth||0:0,D=x/2-O/2,j=g[b],R=E-y[Z]-g[w],L=E/2-y[Z]/2+D,M=(0,u.Z)(j,L,R),P=m;n.modifiersData[i]=((e={})[P]=M,e.centerOffset=M-L,e)}},effect:function(t){var e=t.state,n=t.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=e.elements.popper.querySelector(r)))&&(0,i.Z)(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},36531:function(t,e,n){var r=n(87701),o=n(93779),i=n(62057),a=n(67252),f=n(43062),u=n(6206),c=n(138),s={top:"auto",right:"auto",bottom:"auto",left:"auto"};function p(t){var e,n=t.popper,u=t.popperRect,p=t.placement,d=t.offsets,l=t.position,h=t.gpuAcceleration,v=t.adaptive,m=t.roundOffsets,Z=!0===m?function(t){var e=t.x,n=t.y,r=window.devicePixelRatio||1;return{x:(0,c.NM)((0,c.NM)(e*r)/r)||0,y:(0,c.NM)((0,c.NM)(n*r)/r)||0}}(d):"function"===typeof m?m(d):d,g=Z.x,y=void 0===g?0:g,b=Z.y,w=void 0===b?0:b,x=d.hasOwnProperty("x"),O=d.hasOwnProperty("y"),k=r.t$,E=r.we,D=window;if(v){var j=(0,o.Z)(n),R="clientHeight",L="clientWidth";j===(0,i.Z)(n)&&(j=(0,a.Z)(n),"static"!==(0,f.Z)(j).position&&(R="scrollHeight",L="scrollWidth")),j=j,p===r.we&&(E=r.I,w-=j[R]-u.height,w*=h?1:-1),p===r.t$&&(k=r.F2,y-=j[L]-u.width,y*=h?1:-1)}var M,P=Object.assign({position:l},v&&s);return h?Object.assign({},P,((M={})[E]=O?"0":"",M[k]=x?"0":"",M.transform=(D.devicePixelRatio||1)<2?"translate("+y+"px, "+w+"px)":"translate3d("+y+"px, "+w+"px, 0)",M)):Object.assign({},P,((e={})[E]=O?w+"px":"",e[k]=x?y+"px":"",e.transform="",e))}e.Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,f=n.roundOffsets,c=void 0===f||f,s={placement:(0,u.Z)(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,p(Object.assign({},s,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,p(Object.assign({},s,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}}},82372:function(t,e,n){var r=n(62057),o={passive:!0};e.Z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,i=t.options,a=i.scroll,f=void 0===a||a,u=i.resize,c=void 0===u||u,s=(0,r.Z)(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return f&&p.forEach((function(t){t.addEventListener("scroll",n.update,o)})),c&&s.addEventListener("resize",n.update,o),function(){f&&p.forEach((function(t){t.removeEventListener("scroll",n.update,o)})),c&&s.removeEventListener("resize",n.update,o)}},data:{}}},45228:function(t,e,n){n.d(e,{Z:function(){return p}});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(t){return t.replace(/left|right|bottom|top/g,(function(t){return r[t]}))}var i=n(6206),a={start:"end",end:"start"};function f(t){return t.replace(/start|end/g,(function(t){return a[t]}))}var u=n(9966),c=n(14943),s=n(87701);var p={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var a=n.mainAxis,p=void 0===a||a,d=n.altAxis,l=void 0===d||d,h=n.fallbackPlacements,v=n.padding,m=n.boundary,Z=n.rootBoundary,g=n.altBoundary,y=n.flipVariations,b=void 0===y||y,w=n.allowedAutoPlacements,x=e.options.placement,O=(0,i.Z)(x),k=h||(O===x||!b?[o(x)]:function(t){if((0,i.Z)(t)===s.d7)return[];var e=o(t);return[f(t),e,f(e)]}(x)),E=[x].concat(k).reduce((function(t,n){return t.concat((0,i.Z)(n)===s.d7?function(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=n.boundary,a=n.rootBoundary,f=n.padding,p=n.flipVariations,d=n.allowedAutoPlacements,l=void 0===d?s.Ct:d,h=(0,c.Z)(r),v=h?p?s.bw:s.bw.filter((function(t){return(0,c.Z)(t)===h})):s.mv,m=v.filter((function(t){return l.indexOf(t)>=0}));0===m.length&&(m=v);var Z=m.reduce((function(e,n){return e[n]=(0,u.Z)(t,{placement:n,boundary:o,rootBoundary:a,padding:f})[(0,i.Z)(n)],e}),{});return Object.keys(Z).sort((function(t,e){return Z[t]-Z[e]}))}(e,{placement:n,boundary:m,rootBoundary:Z,padding:v,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),D=e.rects.reference,j=e.rects.popper,R=new Map,L=!0,M=E[0],P=0;P<E.length;P++){var B=E[P],F=(0,i.Z)(B),V=(0,c.Z)(B)===s.BL,W=[s.we,s.I].indexOf(F)>=0,C=W?"width":"height",H=(0,u.Z)(e,{placement:B,boundary:m,rootBoundary:Z,altBoundary:g,padding:v}),I=W?V?s.F2:s.t$:V?s.I:s.we;D[C]>j[C]&&(I=o(I));var A=o(I),N=[];if(p&&N.push(H[F]<=0),l&&N.push(H[I]<=0,H[A]<=0),N.every((function(t){return t}))){M=B,L=!1;break}R.set(B,N)}if(L)for(var T=function(t){var e=E.find((function(e){var n=R.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return M=e,"break"},q=b?3:1;q>0;q--){if("break"===T(q))break}e.placement!==M&&(e.modifiersData[r]._skip=!0,e.placement=M,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},19892:function(t,e,n){var r=n(87701),o=n(9966);function i(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function a(t){return[r.we,r.F2,r.I,r.t$].some((function(e){return t[e]>=0}))}e.Z={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,f=e.rects.popper,u=e.modifiersData.preventOverflow,c=(0,o.Z)(e,{elementContext:"reference"}),s=(0,o.Z)(e,{altBoundary:!0}),p=i(c,r),d=i(s,f,u),l=a(p),h=a(d);e.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:d,isReferenceHidden:l,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}}},82122:function(t,e,n){var r=n(6206),o=n(87701);e.Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,i=t.name,a=n.offset,f=void 0===a?[0,0]:a,u=o.Ct.reduce((function(t,n){return t[n]=function(t,e,n){var i=(0,r.Z)(t),a=[o.t$,o.we].indexOf(i)>=0?-1:1,f="function"===typeof n?n(Object.assign({},e,{placement:t})):n,u=f[0],c=f[1];return u=u||0,c=(c||0)*a,[o.t$,o.F2].indexOf(i)>=0?{x:c,y:u}:{x:u,y:c}}(n,e.rects,f),t}),{}),c=u[e.placement],s=c.x,p=c.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=p),e.modifiersData[i]=u}}},77421:function(t,e,n){var r=n(72581);e.Z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=(0,r.Z)({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}}},43920:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(87701),o=n(6206),i=n(11516);var a=n(57516),f=n(40583),u=n(93779),c=n(9966),s=n(14943),p=n(23607),d=n(138);var l={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,l=t.name,h=n.mainAxis,v=void 0===h||h,m=n.altAxis,Z=void 0!==m&&m,g=n.boundary,y=n.rootBoundary,b=n.altBoundary,w=n.padding,x=n.tether,O=void 0===x||x,k=n.tetherOffset,E=void 0===k?0:k,D=(0,c.Z)(e,{boundary:g,rootBoundary:y,padding:w,altBoundary:b}),j=(0,o.Z)(e.placement),R=(0,s.Z)(e.placement),L=!R,M=(0,i.Z)(j),P="x"===M?"y":"x",B=e.modifiersData.popperOffsets,F=e.rects.reference,V=e.rects.popper,W="function"===typeof E?E(Object.assign({},e.rects,{placement:e.placement})):E,C={x:0,y:0};if(B){if(v||Z){var H="y"===M?r.we:r.t$,I="y"===M?r.I:r.F2,A="y"===M?"height":"width",N=B[M],T=B[M]+D[H],q=B[M]-D[I],$=O?-V[A]/2:0,S=R===r.BL?F[A]:V[A],_=R===r.BL?-V[A]:-F[A],K=e.elements.arrow,z=O&&K?(0,f.Z)(K):{width:0,height:0},U=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:(0,p.Z)(),Y=U[H],X=U[I],G=(0,a.Z)(0,F[A],z[A]),J=L?F[A]/2-$-G-Y-W:S-G-Y-W,Q=L?-F[A]/2+$+G+X+W:_+G+X+W,tt=e.elements.arrow&&(0,u.Z)(e.elements.arrow),et=tt?"y"===M?tt.clientTop||0:tt.clientLeft||0:0,nt=e.modifiersData.offset?e.modifiersData.offset[e.placement][M]:0,rt=B[M]+J-nt-et,ot=B[M]+Q-nt;if(v){var it=(0,a.Z)(O?(0,d.VV)(T,rt):T,N,O?(0,d.Fp)(q,ot):q);B[M]=it,C[M]=it-N}if(Z){var at="x"===M?r.we:r.t$,ft="x"===M?r.I:r.F2,ut=B[P],ct=ut+D[at],st=ut-D[ft],pt=(0,a.Z)(O?(0,d.VV)(ct,rt):ct,ut,O?(0,d.Fp)(st,ot):st);B[P]=pt,C[P]=pt-ut}}e.modifiersData[l]=C}},requiresIfExists:["offset"]}},72581:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(6206),o=n(14943),i=n(11516),a=n(87701);function f(t){var e,n=t.reference,f=t.element,u=t.placement,c=u?(0,r.Z)(u):null,s=u?(0,o.Z)(u):null,p=n.x+n.width/2-f.width/2,d=n.y+n.height/2-f.height/2;switch(c){case a.we:e={x:p,y:n.y-f.height};break;case a.I:e={x:p,y:n.y+n.height};break;case a.F2:e={x:n.x+n.width,y:d};break;case a.t$:e={x:n.x-f.width,y:d};break;default:e={x:n.x,y:n.y}}var l=c?(0,i.Z)(c):null;if(null!=l){var h="y"===l?"height":"width";switch(s){case a.BL:e[l]=e[l]-(n[h]/2-f[h]/2);break;case a.ut:e[l]=e[l]+(n[h]/2-f[h]/2)}}return e}},9966:function(t,e,n){n.d(e,{Z:function(){return O}});var r=n(50400),o=n(87701),i=n(62057),a=n(67252),f=n(4063);var u=n(43062),c=n(82163),s=n(138);var p=n(63624),d=n(93779),l=n(62556),h=n(95923),v=n(94985),m=n(96333);function Z(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function g(t,e){return e===o.Pj?Z(function(t){var e=(0,i.Z)(t),n=(0,a.Z)(t),r=e.visualViewport,o=n.clientWidth,u=n.clientHeight,c=0,s=0;return r&&(o=r.width,u=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(c=r.offsetLeft,s=r.offsetTop)),{width:o,height:u,x:c+(0,f.Z)(t),y:s}}(t)):(0,l.Re)(e)?function(t){var e=(0,r.Z)(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Z(function(t){var e,n=(0,a.Z)(t),r=(0,c.Z)(t),o=null==(e=t.ownerDocument)?void 0:e.body,i=(0,s.Fp)(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),p=(0,s.Fp)(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),d=-r.scrollLeft+(0,f.Z)(t),l=-r.scrollTop;return"rtl"===(0,u.Z)(o||n).direction&&(d+=(0,s.Fp)(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:p,x:d,y:l}}((0,a.Z)(t)))}function y(t,e,n){var r="clippingParents"===e?function(t){var e=(0,p.Z)((0,h.Z)(t)),n=["absolute","fixed"].indexOf((0,u.Z)(t).position)>=0&&(0,l.Re)(t)?(0,d.Z)(t):t;return(0,l.kK)(n)?e.filter((function(t){return(0,l.kK)(t)&&(0,v.Z)(t,n)&&"body"!==(0,m.Z)(t)})):[]}(t):[].concat(e),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(e,n){var r=g(t,n);return e.top=(0,s.Fp)(r.top,e.top),e.right=(0,s.VV)(r.right,e.right),e.bottom=(0,s.VV)(r.bottom,e.bottom),e.left=(0,s.Fp)(r.left,e.left),e}),g(t,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}var b=n(72581),w=n(63293),x=n(33706);function O(t,e){void 0===e&&(e={});var n=e,i=n.placement,f=void 0===i?t.placement:i,u=n.boundary,c=void 0===u?o.zV:u,s=n.rootBoundary,p=void 0===s?o.Pj:s,d=n.elementContext,h=void 0===d?o.k5:d,v=n.altBoundary,m=void 0!==v&&v,g=n.padding,O=void 0===g?0:g,k=(0,w.Z)("number"!==typeof O?O:(0,x.Z)(O,o.mv)),E=h===o.k5?o.YP:o.k5,D=t.elements.reference,j=t.rects.popper,R=t.elements[m?E:h],L=y((0,l.kK)(R)?R:R.contextElement||(0,a.Z)(t.elements.popper),c,p),M=(0,r.Z)(D),P=(0,b.Z)({reference:M,element:j,strategy:"absolute",placement:f}),B=Z(Object.assign({},j,P)),F=h===o.k5?B:M,V={top:L.top-F.top+k.top,bottom:F.bottom-L.bottom+k.bottom,left:L.left-F.left+k.left,right:F.right-L.right+k.right},W=t.modifiersData.offset;if(h===o.k5&&W){var C=W[f];Object.keys(V).forEach((function(t){var e=[o.F2,o.I].indexOf(t)>=0?1:-1,n=[o.we,o.I].indexOf(t)>=0?"y":"x";V[t]+=C[n]*e}))}return V}},33706:function(t,e,n){function r(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}n.d(e,{Z:function(){return r}})},6206:function(t,e,n){function r(t){return t.split("-")[0]}n.d(e,{Z:function(){return r}})},23607:function(t,e,n){function r(){return{top:0,right:0,bottom:0,left:0}}n.d(e,{Z:function(){return r}})},11516:function(t,e,n){function r(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}n.d(e,{Z:function(){return r}})},14943:function(t,e,n){function r(t){return t.split("-")[1]}n.d(e,{Z:function(){return r}})},138:function(t,e,n){n.d(e,{Fp:function(){return r},VV:function(){return o},NM:function(){return i}});var r=Math.max,o=Math.min,i=Math.round},63293:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(23607);function o(t){return Object.assign({},(0,r.Z)(),t)}},57516:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(138);function o(t,e,n){return(0,r.Fp)(t,(0,r.VV)(e,n))}},42473:function(t){var e=function(){};t.exports=e}}]);