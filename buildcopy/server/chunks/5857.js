exports.id = 5857;
exports.ids = [5857,2431,5660];
exports.modules = {

/***/ 3978:
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
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2047);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_device_detect__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function Slider({
  styles,
  lang,
  slides,
  store
}) {
  const {
    0: slider,
    1: setSlider
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: swiper,
    1: updateSwiper
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: params,
    1: setParams
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    // loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setSlider(slides);

    if (lang == "ar_QA") {
      setParams(_objectSpread({
        rtl: 'rtl',
        inverse: true
      }, params));
    }
  }, [lang, slides]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isMobile) {
      let url = "/api/menu?locale=" + lang;
      axios__WEBPACK_IMPORTED_MODULE_6___default().get(url).then(res => {
        store.dispatch({
          type: "GET_LAYOUT_DATA",
          payload: res.data
        });
      });
    } else {
      axios__WEBPACK_IMPORTED_MODULE_6___default().get("https://dashboard.beautybooth.shop/website-settings/get-mobile-banner").then(res => {
        store.dispatch({
          type: "GET_MOBILE_BANNER",
          payload: res.data
        });
      }).catch(err => {
        console.log(err);
      });
    }
  }, [lang, store]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: slider && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: `container-fluid ${styles.sliderContainer} `,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: `row slider_global ${styles.slider_wrapper}`,
          children: react_device_detect__WEBPACK_IMPORTED_MODULE_4__.isMobile ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: slider ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({}, params), {}, {
              getSwiper: updateSwiper,
              shouldSwiperUpdate: true,
              children: slider.map((slide, index) => {
                var _slide$url;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "swiper_banner_container",
                  children: [index == 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "preload",
                    as: "image",
                    href: slide.imagePath
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                    href: (_slide$url = slide.url) !== null && _slide$url !== void 0 ? _slide$url : "/",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: slide.imagePath,
                        alt: "Banner Image"
                      })
                    })
                  })]
                }, index);
              })
            })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "loadingClass"
            })
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: slider ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({}, params), {}, {
              getSwiper: updateSwiper,
              shouldSwiperUpdate: true,
              children: slider.slides.map((slide, index) => {
                var _slide$call_to_action;

                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "swiper_banner_container",
                  children: [index == 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "preload",
                    as: "image",
                    href: slide.file.path
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                    href: (_slide$call_to_action = slide.call_to_action_url) !== null && _slide$call_to_action !== void 0 ? _slide$call_to_action : "/",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: slide.file.path,
                        alt: slide.file.filename
                      })
                    })
                  })]
                }, index);
              })
            })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "loadingClass"
            })
          })
        })
      })
    })
  });
}

;

const mapStateToProps = state => ({
  slides: state.layout.slider
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_5__.connect)(mapStateToProps, null)(Slider));

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;