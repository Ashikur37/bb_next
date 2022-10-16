"use strict";
(() => {
var exports = {};
exports.id = 3404;
exports.ids = [3404,3921];
exports.modules = {

/***/ 3921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Loader() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "loader_container",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: "/svg/loading.svg",
      alt: "loading"
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ 5895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2047);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7040);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8019);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9533);
/* harmony import */ var react_media__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_media__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(542);
/* harmony import */ var react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_atom_SingleProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7043);
/* harmony import */ var _components_atom_CustomRangeSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9717);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_mobile_static__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4458);
/* harmony import */ var _components_Pages_static__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8138);
/* harmony import */ var _components_atom_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3921);
/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9853);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function ConcernPage(props) {
  const {
    0: isSearchStalled,
    1: setIsSearchStalled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: concernName,
    1: setConcernName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: sortIndexName,
    1: setSortIndexName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("products");
  const {
    0: mFilter,
    1: setMfilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: locale,
    1: setLocale
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("en"); // const searchClient = algoliasearch(
  //   process.env.algolia.appId,
  //   process.env.algolia.appKey
  // );

  const initialState = {
    device: "mobile" // this is a config for SSR, which helps to set the initial device props

  };
  const searchClient = algoliasearch_lite__WEBPACK_IMPORTED_MODULE_4___default()({"appId":"4F2AV10UAX","appKey":"b7e52f6f6ad165b30cfdc3d0e2e3e67d"}.appId, {"appId":"4F2AV10UAX","appKey":"b7e52f6f6ad165b30cfdc3d0e2e3e67d"}.appKey);

  function findTheConcern(concern, slug) {
    concern.forEach(element => {
      if (element.slug == slug) {
        setConcernName(element.value);
        return element.value;
      } else if (element.hasItems) {
        findTheConcern(element.items, slug);
      }
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.scrollTo(0, 0);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (props.name !== "") {
      setConcernName(props.name);
    }
  }, [concernName, props.concern, props.name]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setLocale(props.lang);
  }, [props.lang]);

  const Hit = ({
    hit
  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "product_wrapper",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_SingleProduct__WEBPACK_IMPORTED_MODULE_8__.default, {
      product: hit.product,
      locale: locale
    })
  });

  const SortBy = ({
    items
  }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
    value: sortIndexName,
    className: "ais-SortBy-select",
    onChange: e => {
      setSortIndexName(e.currentTarget.value);
    },
    children: items.map(item => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
      className: "ais-SortBy-option",
      value: item.indexName,
      children: item.label
    }, item.value))
  });

  const CustomSortBy = (0,react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.connectSortBy)(SortBy);

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

  const CustomClearRefinements = (0,react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.connectCurrentRefinements)(ClearRefinements); //

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
        children: [props.name, " | BeautyBooth"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_media__WEBPACK_IMPORTED_MODULE_5___default()), {
      queries: {
        medium: "(max-width: 991px)"
      },
      defaultMatches: {
        medium: initialState.device === "mobile"
      },
      render: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "concern_page",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
              text: concernName
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.InstantSearch, {
              searchClient: searchClient,
              indexName: "products",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "col-12",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "filterContainer",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "sortItem",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomSortBy, {
                        defaultRefinement: sortIndexName,
                        items: [{
                          value: "",
                          label: "Price Low to High",
                          indexName: "products"
                        }, {
                          value: "product.selling_price.amount",
                          label: "Price High to Low",
                          indexName: "instant_search"
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
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_15__.FontAwesomeIcon, {
                          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_16__.faWindowClose,
                          size: "3x"
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: () => setMfilter(false),
                        className: "filter__left"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "filterInner",
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomClearRefinements, {
                          transformItems: items => items.filter(({
                            attribute
                          }) => attribute !== "product.attributes.Concern")
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                          className: "mb_refinment_title",
                          children: "Concern"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.RefinementList, {
                          attribute: "product.attributes.Concern",
                          showMore: true,
                          defaultRefinement: [concernName],
                          transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
                            label: item.label.split("-").join(" ")
                          }))
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                          className: "mb_refinment_title",
                          children: "Brand"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.RefinementList, {
                          attribute: "product.attributes.Brand",
                          showMore: true
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                          className: "mb_refinment_title",
                          children: "Category"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.RefinementList, {
                          attribute: "product.categories.name",
                          showMore: true,
                          transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
                            label: item.label.split("-").join(" ")
                          }))
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
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.HitsPerPage, {
                        defaultRefinement: 16,
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
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.Stats, {})]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.ScrollTo, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.Hits, {
                        hitComponent: Hit
                      }), " "]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.Pagination, {
                      padding: 1,
                      showLast: true
                    })]
                  })
                })]
              })
            })]
          })
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_media__WEBPACK_IMPORTED_MODULE_5___default()), {
      queries: {
        medium: "(min-width: 992px)"
      },
      defaultMatches: {
        medium: initialState.device !== "mobile"
      },
      render: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "category_page",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
              text: concernName
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.InstantSearch, {
              searchClient: searchClient,
              indexName: "products",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "col-md-3",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.NumericMenu, {
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
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "refinment_title",
                    children: "Concern"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.RefinementList, {
                    attribute: "product.attributes.Concern",
                    defaultRefinement: [concernName],
                    transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
                      label: item.label.split("-").join(" ")
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "refinment_title",
                    children: "Trending"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.RefinementList, {
                    attribute: "product.attributes.Trending",
                    transformItems: items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
                      label: item.label.split("-").join(" ")
                    }))
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "refinment_title",
                    children: "Category"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.RefinementList, {
                    attribute: "product.categories.name"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "refinment_title",
                    children: "Brand"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.RefinementList, {
                    attribute: "product.attributes.Brand"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "col-md-9",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "categories",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "hit_result_info",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomSortBy, {
                        defaultRefinement: sortIndexName,
                        items: [{
                          value: "",
                          label: "Price Low to High",
                          indexName: "products"
                        }, {
                          value: "product.selling_price.amount",
                          label: "Price High to Low",
                          indexName: "instant_search"
                        }]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.HitsPerPage, {
                        defaultRefinement: 21,
                        items: [{
                          value: 12,
                          label: "Show 12 Products"
                        }, {
                          value: 15,
                          label: "Show 15 Products"
                        }, {
                          value: 18,
                          label: "Show 18 Products"
                        }, {
                          value: 21,
                          label: "Show 21 Products"
                        }]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.Stats, {})]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.ScrollTo, {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.Hits, {
                        hitComponent: Hit
                      }), " "]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_dom__WEBPACK_IMPORTED_MODULE_7__.Pagination, {
                      showLast: true
                    })]
                  })
                })]
              })
            })]
          })
        })
      })
    })]
  }); //
}

async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  let paths = [];

  if (react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isMobile) {
    _components_mobile_static__WEBPACK_IMPORTED_MODULE_11__/* .concern_mobile.map */ .qF.map(t => {
      paths.push({
        params: {
          concern: t.slug.toString()
        }
      });
    });
  } else {
    _components_Pages_static__WEBPACK_IMPORTED_MODULE_12__/* .concern.en.map */ ._M.en.map(t => {
      paths.push({
        params: {
          concern: t.slug.toString()
        }
      });
    });
  } // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.


  return {
    paths,
    fallback: true
  };
}
async function getStaticProps({
  params
}) {
  let name = _components_Pages_static__WEBPACK_IMPORTED_MODULE_12__/* .concern.en.filter */ ._M.en.filter(c => c.slug === params.concern)[0] || {
    value: ""
  }; // Pass post data to the page via props

  return {
    props: {
      concern: params.concern,
      name: name.value
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConcernPage);

/***/ }),

/***/ 2953:
/***/ ((module) => {

module.exports = require("@fortawesome/free-brands-svg-icons");

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

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 9533:
/***/ ((module) => {

module.exports = require("react-media");

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
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,5675,434,1843,7043,9717,8138,9121,9853], () => (__webpack_exec__(5895)));
module.exports = __webpack_exports__;

})();