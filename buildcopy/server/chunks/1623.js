exports.id = 1623;
exports.ids = [1623,2431,5660];
exports.modules = {

/***/ 4845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2047);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_3__);





function MobileMenu({
  lang,
  style
}) {
  const enMenu = [{
    name: "New",
    slug: "new"
  }, {
    name: "Brands",
    slug: "brands"
  }, {
    name: "Skin Care",
    slug: "category/Skin-Care"
  }, {
    name: "Hair Care",
    slug: "category/Hair-Care"
  }, {
    name: "Makeup",
    slug: "category/Makeup"
  }, {
    name: "Fragrance",
    slug: "category/Fragrance"
  }, {
    name: "Campaigns",
    slug: "campaigns"
  }, {
    name: "Best Selling",
    slug: "best-selling"
  }];
  const arMenu = [{
    name: "جديد",
    slug: "new"
  }, {
    name: "ماركات",
    slug: "brands"
  }, {
    name: "العناية بالبشرة",
    slug: "category/Skin-Care"
  }, {
    name: "العناية بالشعر",
    slug: "category/Hair-Care"
  }, {
    name: "مستحضرات  التجميل",
    slug: "category/Makeup"
  }, {
    name: "اكسسوارات",
    slug: "category/Fragrance"
  }, {
    name: "الحملات",
    slug: "campaigns"
  }, {
    name: "افضل المبيعات",
    slug: "best-selling"
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: react_device_detect__WEBPACK_IMPORTED_MODULE_3__.isMobile && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: style.mobile_menu_wrapper,
          children: lang == "en" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: style.mobile_menu,
            children: enMenu.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: style.menu_li,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                href: `/${item.slug}`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "",
                  children: item.name
                })
              })
            }, index))
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: style.mobile_menu,
            children: arMenu.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: style.menu_li,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                href: `/${item.slug}`,
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  className: "",
                  children: item.name
                })
              })
            }, index))
          })
        })
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;