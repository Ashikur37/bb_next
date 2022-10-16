exports.id = 1843;
exports.ids = [1843,2431,5660];
exports.modules = {

/***/ 7040:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);






function HeaderComponent({
  url,
  text,
  t
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: url ? "header_component" : "header_component center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "header_title",
      children: text
    }), url ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: url,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: "header_see_all",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: t("disc_more")
        })
      })
    }) : null]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_3__.withTranslation)("common")(HeaderComponent));

/***/ }),

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

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;