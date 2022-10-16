(() => {
var exports = {};
exports.id = 7260;
exports.ids = [7260];
exports.modules = {

/***/ 2625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const NextI18Next = __webpack_require__(8475).default;

const {
  localeSubpaths
} = __webpack_require__(8951).default().publicRuntimeConfig;

const path = __webpack_require__(5622);

module.exports = new NextI18Next({
  useSuspense: true,
  otherLanguages: ["ar_QA"],
  defaultLanguage: "en",
  defaultLocale: "en",
  locales: ['en', 'ar_QA'],
  localeSubpaths,
  // localePath: typeof window === "undefined" ? path.resolve("./public/static/locales") : "locales",
  localePath: path.resolve("./public/locales")
});

/***/ }),

/***/ 7028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _components_atom_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(836);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4885);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_BestSelling_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5009);
/* harmony import */ var _styles_BestSelling_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_BestSelling_module_scss__WEBPACK_IMPORTED_MODULE_7__);











const BestSelling = ({
  bestSellingProducts,
  language
}) => {
  const {
    0: items,
    1: setItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(bestSellingProducts.data);
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
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_2__/* .default.get */ .Z.get(`${language}/getdata/products/best-selling?page=2`).then(res => {
      setHasMore(res.data.next_page_url !== null);
      setNextPage(3);
      setProducts(res.data.data);
      setItems(res.data.data);
      setNotFound(false);
    }).catch(err => {
      setNotFound(true);
    });
  }, [language]);

  const fetchMoreData = () => {
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_2__/* .default.get */ .Z.get(`${language}/getdata/products/best-selling?page=${nextPage}`).then(res => {
      let newItems = items.concat(res.data.data);
      setHasMore(res.data.next_page_url !== null);
      setItems(newItems);
      setNextPage(nextPage + 1);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container mt-4",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
          children: "Best selling | Beautyboothqa"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row no-gutters",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_5___default()), {
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
              children: items.map(product => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-3 col-md-3 col-sm-6 col-6",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_Product__WEBPACK_IMPORTED_MODULE_3__.default, {
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
};

async function getServerSideProps(context) {
  let language = context.req.language || "en";
  let bestSellingProducts = await _redux_actions_axios__WEBPACK_IMPORTED_MODULE_2__/* .default.get */ .Z.get(`${language}/getdata/products/best-selling`).then(res => {
    return res.data;
  });
  return {
    props: {
      bestSellingProducts,
      language
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_6__.withTranslation)("common")(BestSelling));

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 8475:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 8951:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4885:
/***/ ((module) => {

"use strict";
module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 6873:
/***/ ((module) => {

"use strict";
module.exports = require("react-lazyload");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,434,836,8123], () => (__webpack_exec__(7028)));
module.exports = __webpack_exports__;

})();