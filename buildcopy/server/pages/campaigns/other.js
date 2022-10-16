(() => {
var exports = {};
exports.id = 439;
exports.ids = [439,2431,5660];
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

/***/ 9766:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_actions_axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6698);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7248);
/* harmony import */ var _styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9__);











const FreeGiftList = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.all(/* import() */[__webpack_require__.e(5773), __webpack_require__.e(1398)]).then(__webpack_require__.bind(__webpack_require__, 1398)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1398)],
    modules: ["campaigns/other.js -> " + "../../components/campaign/FreeGiftList"]
  }
});
const DumpStockItems = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.all(/* import() */[__webpack_require__.e(434), __webpack_require__.e(5773), __webpack_require__.e(836), __webpack_require__.e(2673)]).then(__webpack_require__.bind(__webpack_require__, 2673)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2673)],
    modules: ["campaigns/other.js -> " + "../../components/campaign/DumpStockList"]
  }
});

const Others = props => {
  const t = props.t;
  const {
    0: mFilter,
    1: setMFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "container my-2",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Other Campaigns | Beautyboothqa"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mbRefine),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mbbuttonWrap)} text-right mr-2 mb-3`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              onClick: () => setMFilter(!mFilter),
              className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mbButton),
              children: "Refine"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: mFilter ? `${(_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().filterItemContainer)} ${(_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active)}` : `${(_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().filterItemContainer)}`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              onClick: () => setMFilter(false),
              className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cancleBtn),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faWindowClose,
                size: "3x"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().filterInner),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sidebarHeader),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headerTitle),
                  children: "Refine"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sidebarContent),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                  children: [props.offers && props.offers.map((offer, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: `/campaigns?id=${offer.id}`,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        onClick: () => setMFilter(false),
                        children: offer.name
                      })
                    })
                  }, index)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                      href: "/campaigns/other",
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        className: "active",
                        children: "Others"
                      })
                    })
                  })]
                })
              })]
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-md-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sidebar),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sidebarHeader),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().headerTitle),
              children: "Refine"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sidebarContent),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
              children: [props.offers && props.offers.map((offer, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                  href: `/campaigns?id=${offer.id}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: offer.name
                  })
                })
              }, index)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                  href: "/campaigns/other",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "active",
                    children: "Others"
                  })
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-md-9",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FreeGiftList, {
          styles: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_9___default()),
          products: props.freeGift,
          t: t
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DumpStockItems, {
          axios: _redux_actions_axios__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z,
          lang: props.lang,
          t: t
        })]
      })]
    })]
  });
};

async function getServerSideProps(context) {
  let language = context.req.language || "en";
  const data = await _redux_actions_axios__WEBPACK_IMPORTED_MODULE_6__/* .default.get */ .Z.get(language + "/getdata/campaign_offers").then(res => {
    return res.data;
  }).catch();
  const offers = data && data.categories;
  const freeGift = data && data.freeGift;
  return {
    props: {
      offers,
      freeGift,
      language
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_5__.withTranslation)("common")(Others));

/***/ }),

/***/ 887:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

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

/***/ 9639:
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

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

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,7186], () => (__webpack_exec__(9766)));
module.exports = __webpack_exports__;

})();