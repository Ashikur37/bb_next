"use strict";
(() => {
var exports = {};
exports.id = 3768;
exports.ids = [3768];
exports.modules = {

/***/ 9423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7040);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8019);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2047);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(542);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_atom_SingleProduct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7043);
/* harmony import */ var _components_atom_CustomRangeSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9717);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // const isMobile = dynamic(() =>
//   import("react-device-detect").then((mod) => mod.isMobile)
// );



 // import Footer from "../components/layout/Footer";




const searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default()("HPKCKDRHRT", "eec40e4466e90ed437e1c7639aa54feb"); // const searchClient = algoliasearch(
//   process.env.algolia.appId,
//   process.env.algolia.appKey
// );

const NewProductPage = props => {
  const {
    0: mFilter,
    1: setMfilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log(props);
    window.scrollTo(0, 0);
  }, []);

  const Hit = ({
    hit
  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "product_wrapper",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_SingleProduct__WEBPACK_IMPORTED_MODULE_7__.default, {
      product: hit.product
    })
  });

  const ClearRefinements = ({
    items,
    refine
  }) => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
      onClick: () => refine(items),
      className: !items.length ? "ais-ClearRefinements-button ais-ClearRefinements-button--disabled" : "ais-ClearRefinements-button",
      disabled: !items.length,
      children: "Clear all filters"
    });
  };

  const CustomClearRefinements = (0,react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.connectCurrentRefinements)(ClearRefinements);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "New Product | BeautyBooth"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      })]
    }), react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "category_page",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          text: "New Products"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.InstantSearch, {
          searchClient: searchClient,
          indexName: "products",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-12",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "filterContainer",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  style: {
                    display: "none"
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.RefinementList, {
                    attribute: "product.is_new",
                    defaultRefinement: [true]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "sortItem",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.SortBy, {
                    defaultRefinement: "products",
                    items: [{
                      value: "products",
                      label: "Price High to Low"
                    }, {
                      value: "instant_search",
                      label: "Price Low to High"
                    }]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "filterItem",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: () => setMfilter(!mFilter),
                    children: "Filter By"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: mFilter ? "filterItemContainer active" : "filterItemContainer",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    onClick: () => setMfilter(false),
                    className: "cancleBtn",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {
                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faWindowClose,
                      size: "3x"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "filterInner",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomClearRefinements, {
                      transformItems: items => items.filter(({
                        attribute
                      }) => attribute !== "product.attributes.Trending")
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                      className: "mb_refinment_title",
                      children: "Price"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_CustomRangeSlider__WEBPACK_IMPORTED_MODULE_8__.default, {
                      attribute: "product.price.amount"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                      className: "mb_refinment_title",
                      children: "Category"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.RefinementList, {
                      attribute: "product.categories.name",
                      showMore: true,
                      transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
                        label: item.label.split("-").join(" ")
                      }))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                      className: "mb_refinment_title",
                      children: "Brand"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.RefinementList, {
                      attribute: "product.attributes.Brand",
                      showMore: true
                    })]
                  })]
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-12",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "categories",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "hit_result_info",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.HitsPerPage, {
                    defaultRefinement: 12,
                    items: [{
                      value: 8,
                      label: "Show 8 Products"
                    }, {
                      value: 12,
                      label: "Show 12 Products"
                    }, {
                      value: 16,
                      label: "Show 16 Products"
                    }]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.Stats, {})]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.ScrollTo, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.Hits, {
                    hitComponent: Hit
                  }), " "]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.Pagination, {
                  padding: 1,
                  showLast: true
                })]
              })
            })]
          })
        })]
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "category_page",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
          text: "New Products"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.InstantSearch, {
          searchClient: searchClient,
          indexName: "products",
          searchState: props.searchState,
          onSearchStateChange: props.onSearchStateChange,
          createURL: props.createURL,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "col-md-3",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                style: {
                  display: "none"
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.RefinementList, {
                  attribute: "product.is_new",
                  defaultRefinement: ["true"]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "refinment_title",
                children: "Price"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_CustomRangeSlider__WEBPACK_IMPORTED_MODULE_8__.default, {
                attribute: "product.price.amount"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.NumericMenu, {
                attribute: "product.price.amount",
                items: [{
                  label: "0 - 50 QAR",
                  end: 50
                }, {
                  label: "50 - 100 QAR ",
                  start: 50,
                  end: 100
                }, {
                  label: "100 - 200 QAR",
                  start: 100,
                  end: 200
                }, {
                  label: "200 - 400 QAR",
                  start: 200,
                  end: 400
                }, {
                  label: "400+ QAR",
                  start: 400
                }]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "new",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "custom__accordion",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "single__accordion",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                      type: "checkbox",
                      name: "new_acc",
                      id: "cat",
                      className: "accordion__input"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                      className: "accordion__label",
                      htmlFor: "cat",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "refinment_title",
                        children: "Category"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "accordion__content",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.RefinementList, {
                        attribute: "product.categories.name",
                        limit: 15,
                        transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
                          label: item.label.split("-").join(" ")
                        }))
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "single__accordion",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                      type: "checkbox",
                      name: "new_acc",
                      id: "brand",
                      className: "accordion__input"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                      className: "accordion__label",
                      htmlFor: "brand",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "refinment_title",
                        children: "Brand"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "accordion__content",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.RefinementList, {
                        attribute: "product.attributes.Brand",
                        limit: 15,
                        transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
                          label: item.label.split("-").join(" ")
                        }))
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "single__accordion",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                      type: "checkbox",
                      name: "new_acc",
                      id: "trending",
                      className: "accordion__input"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                      className: "accordion__label",
                      htmlFor: "trending",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "refinment_title",
                        children: "Trending"
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "accordion__content",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.RefinementList, {
                        attribute: "product.attributes.Trending",
                        limit: 15,
                        transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
                          label: item.label.split("-").join(" ")
                        }))
                      })
                    })]
                  })]
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "col-md-9",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.SearchBox, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "categories",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "hit_result_info",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.SortBy, {
                    defaultRefinement: "products",
                    items: [{
                      value: "products",
                      label: "Price High to Low"
                    }, {
                      value: "instant_search",
                      label: "Price Low to High"
                    }]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.HitsPerPage, {
                    defaultRefinement: 12,
                    items: [{
                      value: 6,
                      label: "Show 6 Products"
                    }, {
                      value: 12,
                      label: "Show 12 Products"
                    }, {
                      value: 15,
                      label: "Show 15 Products"
                    }]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.Stats, {})]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.ScrollTo, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.Hits, {
                    hitComponent: Hit
                  }), " "]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_6__.Pagination, {
                  showLast: true,
                  padding: 3
                })]
              })]
            })]
          })
        })]
      })
    })]
  });
};

async function getStaticProps() {
  return {
    props: {}
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewProductPage);

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 8019:
/***/ ((module) => {

module.exports = require("algoliasearch/lite");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 8951:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2047:
/***/ ((module) => {

module.exports = require("react-device-detect");

/***/ }),

/***/ 542:
/***/ ((module) => {

module.exports = require("react-instantsearch-dom");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3768:
/***/ ((module) => {

module.exports = require("rheostat");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,434,1843,7043,9717], () => (__webpack_exec__(9423)));
module.exports = __webpack_exports__;

})();