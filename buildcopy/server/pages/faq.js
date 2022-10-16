(() => {
var exports = {};
exports.id = 7746;
exports.ids = [7746];
exports.modules = {

/***/ 3885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7040);
/* harmony import */ var _components_utils_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3842);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8993);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3469);
/* harmony import */ var _styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout_partials_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5773);






 // import Footer from "../../components/layout/Footer";







const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_7___default())();

function Index({
  t
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  let lang = cookies.get("lang");
  const {
    0: mark,
    1: setMark
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(router.query.mark ? router.query.mark : "first time visitors");
  const {
    0: markAr,
    1: setMarkAr
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("الزائرون لأول مرة");
  const refs = _components_utils_static__WEBPACK_IMPORTED_MODULE_4__/* .faqs.reduce */ ._f.reduce((acc, value) => {
    acc[value.title.toLowerCase()] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
    return acc;
  }, {});
  const refsAr = _components_utils_static__WEBPACK_IMPORTED_MODULE_4__/* .faqsAr.reduce */ .cQ.reduce((acc, value) => {
    acc[value.title.toLowerCase()] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createRef();
    return acc;
  }, {});

  const refHnadler = name => {
    setMark(name);
    let y = refs[name].current.offsetTop - 250;
    window.scrollTo(0, y);
  };

  const refHnadlerAr = name => {
    setMarkAr(name);
    let y = refsAr[name].current.offsetTop - 250;
    window.scrollTo(0, y);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (lang == "ar_QA") {
      refHnadlerAr(markAr);
    } else {
      refHnadler(mark);
    }
  }, [router]);

  const createMarkup = data => {
    return {
      __html: data
    };
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Faq | Beautyboothqa"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().faq_page),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "text-center mt-3",
          children: [" ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_partials_Header__WEBPACK_IMPORTED_MODULE_9__.default, {
            text: t("FREQUENTLY ASKED QUESTIONS")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().faq_container),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().faq_navigations),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
              className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().navgitaion_list),
              children: [lang == "en" && _components_utils_static__WEBPACK_IMPORTED_MODULE_4__/* .faqs.map */ ._f.map((faq, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                onClick: () => refHnadler(faq.title.toLowerCase()),
                className: mark == faq.title.toLowerCase() ? `${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().navigation_li)} ${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().select)}` : `${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().navigation_li)}`,
                children: faq.title
              }, index)), lang == "ar_QA" && _components_utils_static__WEBPACK_IMPORTED_MODULE_4__/* .faqsAr.map */ .cQ.map((faq, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                onClick: () => refHnadlerAr(faq.title.toLowerCase()),
                className: markAr == faq.title.toLowerCase() ? `${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().navigation_li)} ${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().select)}` : `${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().navigation_li)}`,
                children: faq.title
              }, index))]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().faq_content),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().custom),
              children: [lang == "en" && _components_utils_static__WEBPACK_IMPORTED_MODULE_4__/* .faqs.map */ ._f.map((faq, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                  ref: refs[faq.title.toLowerCase()],
                  className: mark == faq.title.toLowerCase() ? `${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().section_title)} ${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().selected)}` : `${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().section_title)}`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [" ", faq.title, " "]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().custom__accordion),
                  children: faq.details.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().single__accordion),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                      type: "checkbox",
                      name: faq.title,
                      id: item.summery,
                      className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().accordion__input)
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                      className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().accordion__label),
                      htmlFor: item.summery,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().accordion__label__span),
                        children: t(`${item.summery}`)
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().accordion__content),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p py-3",
                        dangerouslySetInnerHTML: createMarkup(item.content)
                      })
                    })]
                  }, index))
                })]
              }, index)), lang == "ar_QA" && _components_utils_static__WEBPACK_IMPORTED_MODULE_4__/* .faqsAr.map */ .cQ.map((faq, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                  ref: refsAr[faq.title.toLowerCase()],
                  className: markAr == faq.title.toLowerCase() ? `${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().section_title)} ${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().selected)}` : `${(_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().section_title)}`,
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [" ", faq.title, " "]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().custom__accordion),
                  children: faq.details.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().single__accordion),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                      type: "checkbox",
                      name: faq.title,
                      id: item.summery,
                      className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().accordion__input)
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                      className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().accordion__label),
                      htmlFor: item.summery,
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().accordion__label__span),
                        children: t(`${item.summery}`)
                      })
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: (_styles_Faq_module_scss__WEBPACK_IMPORTED_MODULE_10___default().accordion__content),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "p my-3",
                        dangerouslySetInnerHTML: createMarkup(item.content)
                      })
                    })]
                  }, index))
                })]
              }, index))]
            })
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_6__.withTranslation)("common")(Index));

/***/ }),

/***/ 3469:
/***/ ((module) => {

// Exports
module.exports = {
	"faq_page": "Faq_faq_page__XIX2H",
	"faq_container": "Faq_faq_container__25pE2",
	"faq_navigations": "Faq_faq_navigations__2wfA-",
	"navgitaion_list": "Faq_navgitaion_list__2J5Rq",
	"navigation_li": "Faq_navigation_li__8eptO",
	"select": "Faq_select__2lo1m",
	"faq_content": "Faq_faq_content__srtFN",
	"section_title": "Faq_section_title__10eee",
	"selected": "Faq_selected__1SN9l",
	"faq-body": "Faq_faq-body__2LYO5",
	"faq-list": "Faq_faq-list__1qC6s",
	"custom__accordion": "Faq_custom__accordion__1i-xN",
	"accordion__label": "Faq_accordion__label___vdFL",
	"accordion__label__span": "Faq_accordion__label__span__1YLAX",
	"accordion__content": "Faq_accordion__content__zoRKF",
	"p": "Faq_p__1pFtK",
	"list": "Faq_list__1gGn0",
	"accordion__input": "Faq_accordion__input__ZuLUY"
};


/***/ }),

/***/ 887:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

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

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ 8993:
/***/ ((module) => {

"use strict";
module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,5773,1843,3842], () => (__webpack_exec__(3885)));
module.exports = __webpack_exports__;

})();