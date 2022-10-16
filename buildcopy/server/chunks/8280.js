exports.id = 8280;
exports.ids = [8280,2431,5660];
exports.modules = {

/***/ 1350:
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
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(443);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3842);
/* harmony import */ var _styles_sass_homepage_sections_Concern_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2289);
/* harmony import */ var _styles_sass_homepage_sections_Concern_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_homepage_sections_Concern_module_scss__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // styles



const Concern = ({
  FontAwesomeIcon,
  lang,
  Header,
  t
}) => {
  const {
    0: swiper,
    1: updateSwiper
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const params = {
    lazy: true,
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30
      },
      320: {
        slidesPerView: 1.8,
        spaceBetween: 20
      }
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };

  const params2 = _objectSpread(_objectSpread({}, params), {}, {
    rtl: "rtl"
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container mt-4",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "col",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
          h: "h2",
          text: t("shop_by_concern"),
          Link: next_link__WEBPACK_IMPORTED_MODULE_2__.default,
          FontAwesomeIcon: FontAwesomeIcon
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: `concern_global ${(_styles_sass_homepage_sections_Concern_module_scss__WEBPACK_IMPORTED_MODULE_5___default().concern_swiper)}`,
          children: lang == "en" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({
            getSwiper: updateSwiper
          }, params), {}, {
            shouldSwiperUpdate: true,
            children: _utils_static__WEBPACK_IMPORTED_MODULE_4__/* .concern.en.map */ ._M.en.map((concern, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                href: {
                  pathname: `/concern/${concern.slug}`,
                  state: {
                    name: concern.value
                  }
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                  className: (_styles_sass_homepage_sections_Concern_module_scss__WEBPACK_IMPORTED_MODULE_5___default().concern_slide),
                  children: [" ", concern.image ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    // className="swiper-lazy"
                    src: concern.image.image // src="/circular.svg"
                    ,
                    alt: concern.value
                  }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: concern.value
                  })]
                })
              })
            }, index))
          })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({
            getSwiper: updateSwiper
          }, params2), {}, {
            shouldSwiperUpdate: true,
            children: _utils_static__WEBPACK_IMPORTED_MODULE_4__/* .concern.ar.map */ ._M.ar.map((concern, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                href: {
                  pathname: `/concern/${concern.slug}`,
                  state: {
                    name: concern.value
                  }
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                  className: (_styles_sass_homepage_sections_Concern_module_scss__WEBPACK_IMPORTED_MODULE_5___default().concern_slide),
                  children: [" ", concern.image ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: concern.image.image,
                    alt: concern.value
                  }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: concern.value
                  })]
                })
              })
            }, index))
          }))
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Concern);

/***/ }),

/***/ 2289:
/***/ ((module) => {

// Exports
module.exports = {
	"concern_swiper": "Concern_concern_swiper__mnWk-",
	"concern_slide": "Concern_concern_slide__1ADET"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;