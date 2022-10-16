"use strict";
exports.id = 5773;
exports.ids = [5773];
exports.modules = {

/***/ 5773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @param {h} preferred header tags h1-h6
 * @param {text} headter text
 * @param {cssClass} additional css class
 * @param {url} see all link
 * @returns component
 */

function Header({
  h: Tag = "h2",
  text,
  cssClass = "",
  lang = "en",
  url = null,
  urlText = {
    en: "see all",
    ar_QA: "اظهار الكل"
  },
  Link,
  FontAwesomeIcon,
  textColor
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "header_component",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Tag, {
      style: textColor ? {
        color: "red"
      } : {},
      className: `${cssClass}`,
      children: text
    }), url && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link, {
      href: url,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        className: "header_see_all",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: urlText[lang]
        }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FontAwesomeIcon, {
          className: "fa-xs",
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faArrowRight
        })]
      })
    })]
  });
}

/***/ })

};
;