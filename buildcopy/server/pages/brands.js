(() => {
var exports = {};
exports.id = 6803;
exports.ids = [6803,2431,5660];
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

/***/ 2124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6698);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1000);
/* harmony import */ var _styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6__);









function Brands(props) {
  const {
    t,
    lang
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    window.scrollTo(0, 0); // if (props.allBrands.length === 0) {
    //     props.getAllBrands();
    // }
  }, []);
  let Alphabate = ["0-9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const refs = Alphabate.reduce((acc, value) => {
    acc[value.toLowerCase()] = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createRef)();
    return acc;
  }, {});

  const handleClick = id => {
    let y = refs[id].current.offsetTop - 250;
    window.scrollTo(0, y);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `container ${(_styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6___default().brands_page)}`,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Brands | Beautyboothqa "
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col-12",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
          dir: lang == "en" ? "ltr" : "rtl",
          children: t("Beauty Booth Brands")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6___default().navigation_div),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title_div),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
              children: [t("GOTO"), ":"]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: Object.keys(props.allBrands).map(alp => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: () => handleClick(alp.toLowerCase()),
                children: alp
              })
            }, alp))
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
          className: (_styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6___default().brand_lists),
          dir: lang == "en" ? "ltr" : "rtl",
          children: Object.keys(props.allBrands).map(letter => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
            ref: refs[letter.toLowerCase()],
            className: (_styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6___default().brandlist_group),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: (_styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6___default().letter),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6___default().letter_wrapper),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  children: letter.toUpperCase()
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: (_styles_Brands_module_scss__WEBPACK_IMPORTED_MODULE_6___default().lists),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: props.allBrands[`${letter}`].map((lt, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
                    href: {
                      pathname: "/brand/[brand]",
                      query: {
                        brand: lt.name.split(" ").join("-")
                      }
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                      children: [" ", lt.name]
                    })
                  })
                }, index))
              })
            })]
          }, letter))
        })
      })]
    })]
  });
}

async function getStaticProps() {
  const allBrands = await _redux_actions_axios__WEBPACK_IMPORTED_MODULE_3__/* .default.get */ .Z.get("en/getdata/brands").then(res => {
    return res.data;
  }).catch();
  return {
    props: {
      allBrands
    },
    revalidate: 7200 // In seconds

  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_2__.withTranslation)("common")(Brands));

/***/ }),

/***/ 6698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 1000:
/***/ ((module) => {

// Exports
module.exports = {
	"brands_page": "Brands_brands_page__InKX_",
	"title": "Brands_title__2WQuD",
	"navigation_div": "Brands_navigation_div__1o6sY",
	"title_div": "Brands_title_div__3FEfF",
	"brand_lists": "Brands_brand_lists__3Hirc",
	"brandlist_group": "Brands_brandlist_group__1KOyv",
	"letter": "Brands_letter__3B8U3",
	"letter_wrapper": "Brands_letter_wrapper__3Nnx5",
	"lists": "Brands_lists__1-xw7"
};


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664], () => (__webpack_exec__(2124)));
module.exports = __webpack_exports__;

})();