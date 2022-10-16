"use strict";
(() => {
var exports = {};
exports.id = 5804;
exports.ids = [5804];
exports.modules = {

/***/ 6586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6698);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4885);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_BestSelling_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5009);
/* harmony import */ var _styles_BestSelling_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_BestSelling_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_atom_Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(836);
/* harmony import */ var _components_layout_partials_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5773);











function CategoryOffer({
  offerProducts,
  language,
  offer
}) {
  const {
    0: items,
    1: setItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(offerProducts.data);
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: nextPage,
    1: setNextPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: notFound,
    1: setNotFound
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_2__/* .default.get */ .Z.get(`${language}/getdata/offer?type=category&id=${offer.id}&page=2`).then(res => {
      setHasMore(res.data.next_page_url !== null);
      setNextPage(2); // setProducts(res.data.data);
      // setItems(res.data.products.data);

      setNotFound(false);
    }).catch(err => {
      setNotFound(true);
    });
  }, [language]);

  const fetchMoreData = () => {
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_2__/* .default.get */ .Z.get(`${language}/getdata/offer?type=category&id=${offer.id}&page=${nextPage}`).then(res => {
      let newItems = items.concat(res.data.products.data);
      setHasMore(res.data.products.next_page_url !== null); // setProducts(newItems);

      setItems(newItems);
      setNextPage(nextPage + 1);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container mt-4",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
          children: "Sale | Beautyboothqa"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_partials_Header__WEBPACK_IMPORTED_MODULE_6__.default, {
          text: `SALE ON ${offer.name}`,
          textColor: "red"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row no-gutters",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_4___default()), {
          dataLength: items.length,
          next: fetchMoreData,
          hasMore: hasMore,
          loader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "row",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                  style: {
                    textAlign: "center"
                  },
                  children: "Loading..."
                })
              })
            })
          }),
          endMessage: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "row",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "col",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  style: {
                    textAlign: "center"
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                    children: "You have seen it all"
                  })
                })
              })
            })
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "row no-gutters",
              children: items && items.map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-3 col-md-3 col-sm-6 col-6",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_Product__WEBPACK_IMPORTED_MODULE_5__.default, {
                  product: product,
                  styles: (_styles_BestSelling_module_scss__WEBPACK_IMPORTED_MODULE_7___default())
                }, product.id)
              }, product.id))
            })
          })
        })
      })]
    }), ")"]
  });
}

async function getServerSideProps(context) {
  let slug = context.params.slug;
  let language = context.req.language || "en";
  const offers = await _redux_actions_axios__WEBPACK_IMPORTED_MODULE_2__/* .default.get */ .Z.get(language + "/getdata/campaign_offers").then(res => {
    return res.data.categories;
  }).catch();
  let selected = offers.find(offer => offer.slug == slug);
  let offerProducts = await _redux_actions_axios__WEBPACK_IMPORTED_MODULE_2__/* .default.get */ .Z.get(`${language}/getdata/offer?type=category&id=${selected.id}`).then(res => {
    return res.data.products;
  });
  return {
    props: {
      offerProducts,
      offer: selected,
      language
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryOffer);

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,434,5773,836,8123], () => (__webpack_exec__(6586)));
module.exports = __webpack_exports__;

})();