"use strict";
(() => {
var exports = {};
exports.id = 9214;
exports.ids = [9214];
exports.modules = {

/***/ 1152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_atom_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(836);
/* harmony import */ var _components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7040);
/* harmony import */ var _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6698);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4885);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_9__);













function Index(props) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const {
    0: offers,
    1: setOffers
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: products,
    1: setProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: categoryParams,
    1: setCategoryParams
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.id);
  const {
    0: categoryName,
    1: setCategoryName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: mFilter,
    1: setMFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: empty,
    1: setEmpty
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: items,
    1: setItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const {
    0: nextPage,
    1: setNextPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
  const {
    0: notFound,
    1: setNotFound
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setCategoryParams(props.id);
  }, [props.id]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__/* .default.get */ .Z.get("en/getdata/campaign_offers").then(res => {
      setOffers(res.data.categories);
    }).catch();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    let locale = (props === null || props === void 0 ? void 0 : props.lang) === "en" ? "en" : "ar_QA" || 0;
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__/* .default.get */ .Z.get(`${locale}/getdata/offer?type=category&id=${categoryParams}`).then(res => {
      // let filteredProducts = res.data.products?.data.filter((product) => {
      //   if (product.hasCampaign == true || product.has_offer == true) {
      //     return product;
      //   }
      // });
      // if (filteredProducts.length === 0) {
      //   setEmpty(true);
      // }
      setHasMore(res.data.products.next_page_url !== null);
      setNextPage(2); // setLastPage(res.data.products.last_page);

      setProducts(res.data.products.data);
      setItems(res.data.products.data);
      setCategoryName(categoryParams ? res.data.category.name : null);
      setNotFound(false);
    }).catch(err => {
      setNotFound(true);
    });
  }, [categoryParams]);

  const fetchMoreData = () => {
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__/* .default.get */ .Z.get(`en/getdata/offer?type=category&id=${categoryParams}&page=${nextPage}`).then(res => {
      let newItems = products.concat(res.data.products.data);
      setHasMore(res.data.products.next_page_url !== null);
      setProducts(newItems);
      setItems(newItems);
      setNextPage(nextPage + 1);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "container my-2",
    children: [!notFound && categoryParams && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      text: `Sale On ${categoryName}`
    }), notFound && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      text: "No Data Found"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "mbRefine",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mbbuttonWrap text-right mr-2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              onClick: () => setMFilter(!mFilter),
              className: "mbButton",
              children: "Refine"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: mFilter ? "filterItemContainer active" : "filterItemContainer",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              onClick: () => setMFilter(false),
              className: "cancleBtn",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faWindowClose,
                size: "3x"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "filterInner",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sidebarHeader",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  className: "headerTitle",
                  children: "Refine"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sidebarContent",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                  children: offers && offers.map(offer => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                      href: `/campaigns/sale?id=${offer.id}`,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        onClick: () => setMFilter(false),
                        className: categoryParams == offer.id ? "active" : "",
                        children: offer.name
                      })
                    })
                  }, offer.id))
                })
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-lg-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "sidebar",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "sidebarHeader",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: "headerTitle",
              children: "Refine"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "sidebarContent",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
              children: offers && offers.map(offer => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
                  href: `/campaigns/sale?id=${offer.id}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: categoryParams == offer.id ? "active" : "",
                    children: offer.name
                  })
                })
              }, offer.id))
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-lg-9",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "saleProducts",
          children: [empty && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
            className: "alert alert-info",
            children: "No products for now. Please come back again"
          }), items && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_9___default()), {
            dataLength: items.length,
            next: fetchMoreData,
            hasMore: hasMore,
            loader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
              style: {
                textAlign: "center"
              },
              children: "Loading..."
            }),
            endMessage: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              style: {
                textAlign: "center"
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                children: "Yay! You have seen it all"
              })
            }),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "best_selling_page",
                children: items.map(product =>
                /*#__PURE__*/
                // <h2>{product.name}</h2>
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_Product__WEBPACK_IMPORTED_MODULE_3__.default, {
                  product: product
                }, product.id))
              })
            })
          })]
        })
      })]
    })]
  });
}

async function getServerSideProps(context) {
  // console.log(context.query.id)
  return {
    props: {
      id: context.query.id ? context.query.id : ''
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ 6698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const axios = __webpack_require__(2376);

const url = "https://admin.beautyboothqa.com/"; // const url = "http://localhost:8000/";
// const url = "https://new.beautybooth.shop/";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios.create({
  baseURL: url,
  responseType: "json",
  headers: {
    "Content-Type": "application/json" // Authorization: `Bearer ${localStorage.getItem("auth_token") || ""}`,

  }
}));
/* Please add bearer token first while live for production */

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4885:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 6873:
/***/ ((module) => {

module.exports = require("react-lazyload");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,434,1843,836], () => (__webpack_exec__(1152)));
module.exports = __webpack_exports__;

})();