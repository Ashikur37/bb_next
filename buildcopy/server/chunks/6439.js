"use strict";
exports.id = 6439;
exports.ids = [6439];
exports.modules = {

/***/ 6439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_homePageActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1969);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(434);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_utils_helper__WEBPACK_IMPORTED_MODULE_7__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Product = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(() => __webpack_require__.e(/* import() */ 836).then(__webpack_require__.bind(__webpack_require__, 836)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(836)],
    modules: ["../components/homepage/TopSellers.js -> " + "../atom/Product"]
  }
});

function TopSellers(props) {
  const {
    t,
    Header,
    styles,
    FontAwesomeIcon,
    lang,
    auth
  } = props;
  const {
    0: bestSellingProducts,
    1: setBestSellingProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.bestSelling);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (auth.isAuthenticated == false) {
      if (props.bestSelling) {
        let prods = props.bestSelling.filter(product => {
          // console.log(getBrandName(product.attributes).toLowerCase());
          if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_7__.getBrandName)(product.attributes).toLowerCase() !== "the ordinary") {
            return product;
          }
        });
        setBestSellingProducts(prods);
      }
    } else {
      setBestSellingProducts(props.bestSelling);
    }
  }, [props.bestSelling, auth]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (props.bestSelling.length == 0 || props.localLang !== props.lang) {
      props.getBestSellingProducts(props.lang);
    }
  }, [lang]);
  const {
    0: swiper,
    1: updateSwiper
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const params = {
    rtl: false,
    loop: false,
    lazy: {
      loadPrevNext: true
    },
    slidesPerView: 4,
    spaceBetween: 10,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 30
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 1
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 1
      }
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true
    }
  };

  const params2 = _objectSpread({
    rtl: true
  }, params);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container mt-4",
    children: bestSellingProducts.length !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
            h: "h2",
            text: t("best_selling"),
            url: "/best-selling",
            lang: props.lang,
            Link: next_link__WEBPACK_IMPORTED_MODULE_2__.default,
            FontAwesomeIcon: FontAwesomeIcon
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "selling_swiper_wrapper",
        children: props.lang == "en" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({
          getSwiper: updateSwiper
        }, params), {}, {
          shouldSwiperUpdate: true,
          children: bestSellingProducts.map((product, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Product, {
              product: product,
              lazy: true,
              styles: styles,
              lang: lang
            })
          }, index))
        })) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default()), _objectSpread(_objectSpread({
          getSwiper: updateSwiper
        }, params2), {}, {
          shouldSwiperUpdate: true,
          children: bestSellingProducts.map((product, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Product, {
              product: product,
              lazy: true,
              styles: styles,
              lang: lang
            })
          }, index))
        }))
      })]
    })
  });
}

const mapStateToProps = state => ({
  bestSelling: state.homePage.bestSelling,
  localLang: state.homePage.localLang,
  auth: state.auth
});

const mapDispatchToProps = (dispatch, lang) => {
  return {
    getBestSellingProducts: () => (0,_redux_actions_homePageActions__WEBPACK_IMPORTED_MODULE_5__/* .getBestSellingProducts */ .e3)(dispatch, lang.lang)
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps, mapDispatchToProps)(TopSellers));

/***/ })

};
;