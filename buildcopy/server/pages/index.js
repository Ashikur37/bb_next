(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
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

/***/ 6124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6873);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8444);
/* harmony import */ var _styles_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_5__);






 // import { trending, concern } from "../components/utils/static";
// css must the the last normal import

 //dynamic imports should be in bottom

const Title = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 9087).then(__webpack_require__.bind(__webpack_require__, 9087)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9087)],
    modules: ["index.js -> " + "../components/layout/partials/Title"]
  }
});
const Header = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 5773).then(__webpack_require__.bind(__webpack_require__, 5773)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5773)],
    modules: ["index.js -> " + "../components/layout/partials/Header"]
  }
});
const Loading = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 917).then(__webpack_require__.bind(__webpack_require__, 917)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(917)],
    modules: ["index.js -> " + "../components/atom/Loading"]
  }
});
const Slider = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(5857)]).then(__webpack_require__.bind(__webpack_require__, 3978)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3978)],
    modules: ["index.js -> " + "../components/homepage/Slider"]
  }
});
const Trending = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(3842), __webpack_require__.e(6679)]).then(__webpack_require__.bind(__webpack_require__, 9291)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9291)],
    modules: ["index.js -> " + "../components/homepage/Trending"]
  }
});
const Concern = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(3842), __webpack_require__.e(8280)]).then(__webpack_require__.bind(__webpack_require__, 1350)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1350)],
    modules: ["index.js -> " + "../components/homepage/Concern"]
  }
});
const TopSellers = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(434), __webpack_require__.e(3164), __webpack_require__.e(2554), __webpack_require__.e(6439)]).then(__webpack_require__.bind(__webpack_require__, 6439)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6439)],
    modules: ["index.js -> " + "../components/homepage/TopSellers"]
  }
});
const NewArrival = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(434), __webpack_require__.e(3164), __webpack_require__.e(2554), __webpack_require__.e(4114)]).then(__webpack_require__.bind(__webpack_require__, 4114)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4114)],
    modules: ["index.js -> " + "../components/homepage/NewArrival"]
  }
});
const Brands = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(3164), __webpack_require__.e(2554), __webpack_require__.e(4050)]).then(__webpack_require__.bind(__webpack_require__, 4050)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4050)],
    modules: ["index.js -> " + "../components/homepage/Brands"]
  }
});
const Blogs = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 3750).then(__webpack_require__.bind(__webpack_require__, 3750)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3750)],
    modules: ["index.js -> " + "../components/homepage/Blogs"]
  }
});
const MobileMenu = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(1623)]).then(__webpack_require__.bind(__webpack_require__, 4845)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4845)],
    modules: ["index.js -> " + "../components/layout/MobileMenu"]
  }
});

const Home = ({
  FontAwesomeIcon,
  lang,
  store,
  t
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:url",
        content: "https://beautyboothqa.com/"
      }, "ogURL"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:site_name",
        content: "Beauty Booth"
      }, "ogSiteName"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:title",
        content: "K-Beauty & Korean Skin Care and Beauty Shop in Qatar"
      }, "ogTitle"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:image",
        content: "https://beautyboothqa.sgp1.cdn.digitaloceanspaces.com/assets/og_image.png"
      }, "ogImage"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:description",
        content: "Beauty Booth | K-Beauty & Korean Skin Care and Beauty Shop in Qatar | Beauty E-commerce In Qatar"
      }, "ogDesc"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        property: "og:keywords",
        content: "k-beauty, korean, skin care, beauty, beautybooth,beautybooth qatar, e-commerce"
      }, "ogKeys")]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
      title: "Home | BeautyboothQA"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MobileMenu, {
      style: (_styles_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
      lang: lang
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slider, {
      styles: (_styles_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
      store: store,
      lang: lang
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_4___default()), {
      offset: [-200, 0],
      placeholder: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loading, {
        text: t("trending_on_site")
      }),
      debounce: 200,
      once: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Trending, {
        FontAwesomeIcon: FontAwesomeIcon,
        lang: lang,
        Header: Header,
        t: t
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_4___default()), {
      offset: [-200, 0],
      placeholder: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loading, {
        text: t("shop_by_concern")
      }),
      debounce: 200,
      once: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Concern, {
        FontAwesomeIcon: FontAwesomeIcon,
        lang: lang,
        Header: Header,
        t: t
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_4___default()), {
      offset: [-240, 0],
      placeholder: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loading, {
        text: t("best_selling")
      }),
      debounce: 200,
      once: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TopSellers, {
        FontAwesomeIcon: FontAwesomeIcon,
        Header: Header,
        styles: (_styles_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
        lang: lang,
        t: t
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_4___default()), {
      offset: [-240, 0],
      placeholder: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loading, {
        text: t("new_arrival")
      }),
      debounce: 200,
      once: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NewArrival, {
        FontAwesomeIcon: FontAwesomeIcon,
        Header: Header,
        styles: (_styles_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
        lang: lang,
        t: t
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_4___default()), {
      offset: [-240, 0],
      placeholder: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loading, {
        text: t("best_brands")
      }),
      debounce: 200,
      once: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Brands, {
        FontAwesomeIcon: FontAwesomeIcon,
        Header: Header,
        styles: (_styles_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
        lang: lang,
        t: t
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_4___default()), {
      offset: [-240, 0],
      placeholder: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Loading, {
        text: t("our_blog")
      }),
      debounce: 200,
      once: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Blogs, {
        FontAwesomeIcon: FontAwesomeIcon,
        Header: Header,
        styles: (_styles_HomePage_module_scss__WEBPACK_IMPORTED_MODULE_5___default()),
        lang: lang,
        t: t
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_3__.withTranslation)("common")(Home));

/***/ }),

/***/ 8444:
/***/ ((module) => {

// Exports
module.exports = {
	"sliderContainer": "HomePage_sliderContainer__3027r",
	"slider_wrapper": "HomePage_slider_wrapper__1iimw",
	"product": "HomePage_product__1xX3T",
	"product_name": "HomePage_product_name__3P4VK",
	"ribbon_soldout": "HomePage_ribbon_soldout__11Ie4",
	"ribbon": "HomePage_ribbon__ub82o",
	"ribbon_new": "HomePage_ribbon_new__31wVH",
	"ribbon_campaign": "HomePage_ribbon_campaign__3rBcZ",
	"product_img": "HomePage_product_img__Btsyj",
	"lazyload-wrapper": "HomePage_lazyload-wrapper__2l9nI",
	"product_brand": "HomePage_product_brand__1RHwg",
	"product_price": "HomePage_product_price__2pKse",
	"offer_price": "HomePage_offer_price__2x3N-",
	"old": "HomePage_old__2-bU7",
	"brands_container": "HomePage_brands_container__flMht",
	"control_icon": "HomePage_control_icon__MhZXQ",
	"brand_slide": "HomePage_brand_slide__19GS-",
	"no-img": "HomePage_no-img__1RYzm",
	"blog_wrapper": "HomePage_blog_wrapper__3geoO",
	"card_title": "HomePage_card_title__2Smnj",
	"card_img": "HomePage_card_img__3M6KC",
	"card_body": "HomePage_card_body__26lYa",
	"card_text": "HomePage_card_text__1oYjh",
	"card_img_overlay": "HomePage_card_img_overlay__17Is7",
	"r_details": "HomePage_r_details__1hBXO",
	"v_blog": "HomePage_v_blog__2HJa3",
	"mobile_menu_wrapper": "HomePage_mobile_menu_wrapper__1Y4ro",
	"mobile_menu": "HomePage_mobile_menu__3y2Q-",
	"menu_li": "HomePage_menu_li__26dEi"
};


/***/ }),

/***/ 887:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

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

/***/ 9639:
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

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

/***/ 2047:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 443:
/***/ ((module) => {

"use strict";
module.exports = require("react-id-swiper");

/***/ }),

/***/ 6873:
/***/ ((module) => {

"use strict";
module.exports = require("react-lazyload");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6124));
module.exports = __webpack_exports__;

})();