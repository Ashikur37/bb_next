exports.id = 6679;
exports.ids = [6679,2431,5660];
exports.modules = {

/***/ 9291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Trending)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(443);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _utils_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3842);
/* harmony import */ var _styles_sass_homepage_sections_Trending_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4429);
/* harmony import */ var _styles_sass_homepage_sections_Trending_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sass_homepage_sections_Trending_module_scss__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import Image from "next/image";
// styles


function Trending({
  FontAwesomeIcon,
  lang,
  Header,
  t
}) {
  const {
    0: trending,
    1: setTrending
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const t = _utils_static__WEBPACK_IMPORTED_MODULE_4__/* .trending */ .qK && _utils_static__WEBPACK_IMPORTED_MODULE_4__/* .trending */ .qK[lang].filter(tr => tr.length === 2).map((trending, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      children: trending.map((trend, indx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: trend.isCategory ? `/category/${trend.url}` : `/trending/${trend.url.split(" ").join("-")}`,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
          className: `${(_styles_sass_homepage_sections_Trending_module_scss__WEBPACK_IMPORTED_MODULE_5___default().slide)} ${(_styles_sass_homepage_sections_Trending_module_scss__WEBPACK_IMPORTED_MODULE_5___default().slide_one)}`,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            "data-src": trend.image ? trend.image.image : "",
            src: "/circular.svg",
            alt: trend ? trend.slug : "",
            className: "swiper-lazy" // width="62"
            // height="62"

          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: `${(_styles_sass_homepage_sections_Trending_module_scss__WEBPACK_IMPORTED_MODULE_5___default().text)}`,
            children: trend ? trend.value : ""
          })]
        })
      }, indx))
    }, index));
    setTrending(t);
  }, [_utils_static__WEBPACK_IMPORTED_MODULE_4__/* .trending */ .qK, lang]);
  const {
    0: swiper,
    1: updateSwiper
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const params = {
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    },
    slidesPerView: 6,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 6,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25
      },
      320: {
        slidesPerView: 3,
        spaceBetween: 5
      }
    }
  };

  const params2 = _objectSpread(_objectSpread({}, params), {}, {
    rtl: "rtl"
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container mt-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
          h: "h2",
          text: t("trending"),
          Link: next_link__WEBPACK_IMPORTED_MODULE_3__.default,
          FontAwesomeIcon: FontAwesomeIcon
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: `trending_global ${(_styles_sass_homepage_sections_Trending_module_scss__WEBPACK_IMPORTED_MODULE_5___default().trending)}`,
          children: [trending && lang == "en" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_sass_homepage_sections_Trending_module_scss__WEBPACK_IMPORTED_MODULE_5___default().trending_swiper)}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
              getSwiper: updateSwiper
            }, params), {}, {
              shouldSwiperUpdate: true,
              children: trending
            }))
          }) : null, trending && lang == "ar_QA" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_styles_sass_homepage_sections_Trending_module_scss__WEBPACK_IMPORTED_MODULE_5___default().trending_swiper)}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
              getSwiper: updateSwiper
            }, params2), {}, {
              shouldSwiperUpdate: true,
              children: trending
            }))
          }) : null]
        })
      })]
    })
  });
}
;

/***/ }),

/***/ 4429:
/***/ ((module) => {

// Exports
module.exports = {
	"trending": "Trending_trending__1QF3p",
	"trending_swiper": "Trending_trending_swiper__2ZtR0",
	"slide": "Trending_slide__3eHja",
	"text": "Trending_text__17i-l",
	"slide_one": "Trending_slide_one__3O8ZT"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;