"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5197],{40881:function(e,t,n){n.d(t,{Z:function(){return H}});var r=n(67294),a=n(4942),i=n(94334),o=n(45697),u=n.n(o),l=n(8131),c=n.n(l),s=n(71773),m=n(95009),f=function(e){return e.attributes[0]},d="hierarchicalMenu";function h(e,t,n){var r=(0,m.U6)(e,t,n,"".concat(d,".").concat(f(e)),null);return""===r?null:r}function x(e,t,n,r){var a,i=t.id,o=t.attributes,u=t.separator,l=t.rootPath,s=t.showParentLevel,m=h(t,n,r);null===m?a=e:a=new(c().SearchParameters)({hierarchicalFacets:[{name:i,attributes:o,separator:u,rootPath:l,showParentLevel:s}]}).toggleHierarchicalFacetRefinement(i,m).toggleHierarchicalFacetRefinement(i,e).getHierarchicalRefinement(i)[0];return a}function p(e,t,n,r){return e.map((function(e){return{label:e.name,value:x(e.path,t,n,r),count:e.count,isRefined:e.isRefined,items:e.data&&p(e.data,t,n,r)}}))}var v=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return t.slice(0,n).map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(t.items)?(0,i.Z)({},t,{items:e(t.items,n)}):t}))};function b(e,t,n,r){var i=f(e),o=(0,a.Z)({},i,n||"");return(0,m.RD)(t,o,r,!0,d)}var g=["name:asc"],w=(0,s.Z)({displayName:"AlgoliaHierarchicalMenu",propTypes:{attributes:function(e,t,n){if(!Array.isArray(e[t])||e[t].some((function(e){return"string"!==typeof e}))||e[t].length<1)return new Error("Invalid prop ".concat(t," supplied to ").concat(n,". Expected an Array of Strings"))},separator:u().string,rootPath:u().string,showParentLevel:u().bool,defaultRefinement:u().string,showMore:u().bool,limit:u().number,showMoreLimit:u().number,transformItems:u().func,facetOrdering:u().bool},defaultProps:{showMore:!1,limit:10,showMoreLimit:20,separator:" > ",rootPath:null,showParentLevel:!0,facetOrdering:!0},getProvidedProps:function(e,t,n){var r=e.showMore,a=e.limit,i=e.showMoreLimit,o=e.facetOrdering,u=f(e),l=(0,m.O7)(n,{ais:e.contextValue,multiIndexContext:e.indexContextValue});if(!(Boolean(l)&&Boolean(l.getFacetByName(u))))return{items:[],currentRefinement:h(e,t,{ais:e.contextValue,multiIndexContext:e.indexContextValue}),canRefine:!1};var c=r?i:a,s=l.getFacetValues(u,{sortBy:g,facetOrdering:o}),d=s.data?p(s.data,e,t,{ais:e.contextValue,multiIndexContext:e.indexContextValue}):[],x=e.transformItems?e.transformItems(d):d;return{items:v(x,c),currentRefinement:h(e,t,{ais:e.contextValue,multiIndexContext:e.indexContextValue}),canRefine:x.length>0}},refine:function(e,t,n){return b(e,t,n,{ais:e.contextValue,multiIndexContext:e.indexContextValue})},cleanUp:function(e,t){return function(e,t,n){return(0,m.cI)(t,n,"".concat(d,".").concat(f(e)))}(e,t,{ais:e.contextValue,multiIndexContext:e.indexContextValue})},getSearchParameters:function(e,t,n){var r=t.attributes,a=t.separator,i=t.rootPath,o=t.showParentLevel,u=t.showMore,l=t.limit,c=t.showMoreLimit,s=t.contextValue,m=f(t),d=u?c:l;e=e.addHierarchicalFacet({name:m,attributes:r,separator:a,rootPath:i,showParentLevel:o}).setQueryParameters({maxValuesPerFacet:Math.max(e.maxValuesPerFacet||0,d)});var x=h(t,n,{ais:s,multiIndexContext:t.indexContextValue});return null!==x&&(e=e.toggleHierarchicalFacetRefinement(m,x)),e},getMetadata:function(e,t){var n=e.attributes[0],r=f(e),a=h(e,t,{ais:e.contextValue,multiIndexContext:e.indexContextValue}),i=a?[{label:"".concat(n,": ").concat(a),attribute:n,value:function(t){return b(e,t,"",{ais:e.contextValue,multiIndexContext:e.indexContextValue})},currentRefinement:a}]:[];return{id:r,index:(0,m.WN)({ais:e.contextValue,multiIndexContext:e.indexContextValue}),items:i}}}),y=n(97830),C=n(15671),R=n(43144),V=n(82963),I=n(61120),P=n(97326),M=n(60136),Z=n(35003),L=n(6527),N=n(80148),E=n(48747),A=(0,L.JV)("HierarchicalMenu"),F=u().arrayOf(u().shape({label:u().string.isRequired,value:u().string,count:u().number.isRequired,items:function(){return F.apply(void 0,arguments)}})),S=function(e){function t(){var e,n;(0,C.Z)(this,t);for(var i=arguments.length,o=new Array(i),u=0;u<i;u++)o[u]=arguments[u];return n=(0,V.Z)(this,(e=(0,I.Z)(t)).call.apply(e,[this].concat(o))),(0,a.Z)((0,P.Z)(n),"renderItem",(function(e){var t=n.props,a=t.createURL,i=t.refine;return r.createElement(E.Z,{className:A("link"),onClick:function(){return i(e.value)},href:a(e.value)},r.createElement("span",{className:A("label")},e.label)," ",r.createElement("span",{className:A("count")},e.count))})),n}return(0,M.Z)(t,e),(0,R.Z)(t,[{key:"render",value:function(){var e=this.props,t=e.translate,n=e.items,a=e.showMore,i=e.limit,o=e.showMoreLimit,u=e.canRefine,l=e.className;return r.createElement(N.Z,{renderItem:this.renderItem,cx:A,translate:t,items:n,showMore:a,limit:i,showMoreLimit:o,canRefine:u,className:l})}}]),t}(r.Component);(0,a.Z)(S,"propTypes",{translate:u().func.isRequired,refine:u().func.isRequired,createURL:u().func.isRequired,canRefine:u().bool.isRequired,items:F,showMore:u().bool,className:u().string,limit:u().number,showMoreLimit:u().number,transformItems:u().func}),(0,a.Z)(S,"defaultProps",{className:""});var k=(0,Z.Z)({showMore:function(e){return e?"Show less":"Show more"}})(S),H=w((function(e){return r.createElement(y.Z,e,r.createElement(k,e))}))},16520:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(16988);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);