"use strict";
exports.id = 4050;
exports.ids = [4050];
exports.modules = {

/***/ 4050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(443);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_homePageActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1969);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function Brands(props) {
  const {
    styles,
    lang,
    t,
    Header,
    FontAwesomeIcon
  } = props;
  const swiperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!props.bestBrands) {
      props.getBestBrands();
    }
  }, [props.bestBrands]);
  const {
    0: swiper,
    1: updateSwiper
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const params = {
    // rtl: true,
    loop: false,
    speed: 1500,
    lazy: true,
    autoplay: {
      delay: 1000
    },
    slidesPerView: 6,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 6,
        spaceBetween: 30
      }
    }
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container mt-4",
    children: props.bestBrands ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "col",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
            text: t("best_brands"),
            url: "brands",
            lang: lang,
            Link: next_link__WEBPACK_IMPORTED_MODULE_5__.default,
            h: "h2",
            FontAwesomeIcon: FontAwesomeIcon
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `best_brands ${styles.brands_container}`,
            children: props.bestBrands ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({
              getSwiper: updateSwiper
            }, params), {}, {
              shouldSwiperUpdate: true,
              children: props.bestBrands.map((brand, index) => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: styles.brand_slide,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__.default, {
                    href: `brand/${brand.value.split(" ").join("-")}`,
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                      children: brand.image ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: brand.image.image,
                        alt: brand.slug
                      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "no-img",
                        children: brand.value
                      })
                    })
                  })
                }, index);
              })
            })) : null
          })]
        })
      })
    }) : null
  });
}

const mapStateToProps = state => ({
  bestBrands: state.homePage.bestBrands
});

const mapDispatchToProps = dispatch => {
  return {
    getBestBrands: () => (0,_redux_actions_homePageActions__WEBPACK_IMPORTED_MODULE_4__/* .getBestBrands */ .sZ)(dispatch)
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps, mapDispatchToProps)(Brands));

/***/ })

};
;