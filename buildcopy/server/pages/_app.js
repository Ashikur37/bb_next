(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
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

/***/ 3650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
// EXTERNAL MODULE: ./redux/actions/types.js
var types = __webpack_require__(1877);
;// CONCATENATED MODULE: ./redux/reducers/homePageReducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  slider: null,
  trending: null,
  concern: null,
  bestSelling: [],
  bestBrands: null,
  newArrivals: null,
  localLang: null
};
/* harmony default export */ function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case types/* BEST_SELLING_PRODUCTS */.xM:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestSelling: action.payload.data,
        localLang: action.payload.lang == 'ar_QA' ? 'ar' : 'en'
      });

    case types/* GET_HOME_PAGE_DATA */.SX:
      return _objectSpread(_objectSpread({}, state), {}, {
        slider: action.payload.slider,
        trending: action.payload.trending,
        concern: action.payload.concern
      });

    case types/* TRENDING_ATTRIBUTES */.Rl:
      return _objectSpread(_objectSpread({}, state), {}, {
        trending: action.payload
      });

    case types/* GET_BEST_BRANDS */.In:
      return _objectSpread(_objectSpread({}, state), {}, {
        bestBrands: action.payload
      });

    case types/* NEW_ARRIVALS */.fw:
      return _objectSpread(_objectSpread({}, state), {}, {
        newArrivals: action.payload.data,
        localLang: action.payload.lang == 'ar_QA' ? 'ar' : 'en'
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./components/utils/helper.js
var helper = __webpack_require__(434);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
;// CONCATENATED MODULE: ./redux/reducers/cartReducer.js
function cartReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function cartReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cartReducer_ownKeys(Object(source), true).forEach(function (key) { cartReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cartReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cartReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const cartReducer_initialState = {
  message: "",
  cartItem: []
};
/* harmony default export */ function cartReducer(state = cartReducer_initialState, action) {
  switch (action.type) {
    case types/* ADD_TO_CART */.G2:
      let storage_items;

      if (localStorage.getItem("cart")) {
        storage_items = JSON.parse(localStorage.getItem("cart"));
      }

      if (!storage_items) {
        // cart is not inatalized
        let activeOfferId = (0,helper.activeBulkId)(action.payload.offers, action.payload.qnt);
        let product = action.payload;
        product.bulk_id = activeOfferId;
        localStorage.setItem("cart", JSON.stringify([...state.cartItem, product]));
        external_react_toastify_.toast.success("Product Added To Bag", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
          message: action.payload.message,
          cartItem: [...state.cartItem, action.payload]
        });
      } else if (storage_items.filter(it => it.product_id == action.payload.product_id && it.option_id == action.payload.option_id).length == 0) {
        let activeOfferId = (0,helper.activeBulkId)(action.payload.offers, action.payload.qnt);
        let product = action.payload;
        product.bulk_id = activeOfferId;
        localStorage.setItem("cart", JSON.stringify([...state.cartItem, product]));
        external_react_toastify_.toast.success("Product Added To Bag", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
          message: action.payload.message,
          cartItem: [...state.cartItem, action.payload]
        });
      } else {
        let newCartItems = storage_items.map(item => {
          if (item.product_id == action.payload.product_id && item.option_id == action.payload.option_id) {
            let activeOfferId = (0,helper.activeBulkId)(item.offers, item.qnt + action.payload.qnt);
            item.bulk_id = activeOfferId;
            item.qnt += action.payload.qnt;
          }

          return item;
        });
        localStorage.setItem("cart", JSON.stringify([...newCartItems]));
        external_react_toastify_.toast.info("Cart Item Updated", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
          message: action.payload.message,
          cartItem: [...newCartItems]
        });
      }

    case types/* SET_CART_FROM_LOCAL */.vL:
      let items = JSON.parse(localStorage.getItem("cart"));
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cartItem: [...items]
      });

    case types/* REMOVE_FROM_CART */.OZ:
      let newCart = JSON.parse(localStorage.getItem("cart")).filter( //item.option_id != action.payload.option_id
      item => {
        if (item.product_id == action.payload.id && item.option_id == action.payload.option_id) {} else {
          return item;
        }
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cartItem: newCart
      });

    case types/* PLUS_ONE_TO_CART */.m3:
      let {
        id,
        option_id
      } = action.payload;
      let newCartItems = JSON.parse(localStorage.getItem("cart")).map(item => {
        if (item.product_id == id && item.option_id == option_id) {
          let activeOfferId = (0,helper.activeBulkId)(item.offers, item.qnt + 1);
          item.qnt += 1;
          item.bulk_id = activeOfferId;
        }

        return item;
      });
      localStorage.setItem("cart", JSON.stringify(newCartItems));
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cartItem: newCartItems
      });

    case types/* MINUS_ONE_TO_CART */.GI:
      let newCartItem = JSON.parse(localStorage.getItem("cart")).map(item => {
        if (item.product_id == action.payload.id && item.option_id == action.payload.option_id) {
          let activeOfferId = (0,helper.activeBulkId)(item.offers, item.qnt - 1);
          item.qnt -= 1;
          item.bulk_id = activeOfferId;
        }

        return item;
      });
      localStorage.setItem("cart", JSON.stringify(newCartItem));
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cartItem: newCartItem
      });

    case types/* INPUT_ITEM_TO_CART */.bZ:
      let newCarts = JSON.parse(localStorage.getItem("cart")).map(item => {
        if (item.product_id == action.payload.id && item.option_id == action.payload.option_id) {
          let activeOfferId = (0,helper.activeBulkId)(item.offers, action.payload.qnt);
          item.bulk_id = activeOfferId;
          item.qnt = action.payload.qnt;
        }

        return item;
      });
      localStorage.setItem("cart", JSON.stringify(newCarts));
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cartItem: newCarts
      });

    case types/* EMPTY_CART */.yT:
      localStorage.removeItem("cart");
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cartItem: []
      });

    case types/* SET_CART_AFTER_PRICE_CHANGE */._l:
      localStorage.removeItem("cart");
      localStorage.setItem("cart", JSON.stringify([...action.payload]));
      return cartReducer_objectSpread(cartReducer_objectSpread({}, state), {}, {
        cartItem: [...action.payload]
      });

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./redux/validation/is-empty.js
const isEmpty = value => value === undefined || value === null || typeof value === "object" && Object.keys(value).length === 0 || typeof value === "string" && value.trim().length === 0;

/* harmony default export */ const is_empty = (isEmpty);
;// CONCATENATED MODULE: ./redux/reducers/authReducer.js
function authReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function authReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { authReducer_ownKeys(Object(source), true).forEach(function (key) { authReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { authReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function authReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const authReducer_initialState = {
  isAuthenticated: false,
  user: {},
  error: ""
};
/* harmony default export */ function authReducer(state = authReducer_initialState, action) {
  switch (action.type) {
    case types/* SET_CURRENT_USER */.uC:
      return authReducer_objectSpread(authReducer_objectSpread({}, state), {}, {
        isAuthenticated: !is_empty(action.payload),
        user: action.payload
      });

    case "SET_LOGIN_ERROR":
      return authReducer_objectSpread(authReducer_objectSpread({}, state), {}, {
        error: action.payload
      });

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./redux/reducers/layoutReducer.js
function layoutReducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function layoutReducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { layoutReducer_ownKeys(Object(source), true).forEach(function (key) { layoutReducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { layoutReducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function layoutReducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const layoutReducer_initialState = {
  menu: null,
  slider: null,
  categoryLoaded: false
};
/* harmony default export */ function layoutReducer(state = layoutReducer_initialState, action) {
  switch (action.type) {
    case types/* GET_LAYOUT_DATA */.Im:
      return layoutReducer_objectSpread(layoutReducer_objectSpread({}, state), {}, {
        menu: action.payload.menu,
        slider: action.payload.slider
      });

    case types/* GET_MOBILE_BANNER */.tC:
      return layoutReducer_objectSpread(layoutReducer_objectSpread({}, state), {}, {
        slider: action.payload
      });

    case types/* MENU_LOADED */.GO:
      return layoutReducer_objectSpread(layoutReducer_objectSpread({}, state), {}, {
        categoryLoaded: true
      });

    default:
      return state;
  }
}
;// CONCATENATED MODULE: ./redux/reducers/index.js

 // import brandsReducer from "./brandsReducer";




/* harmony default export */ const reducers = ((0,external_redux_namespaceObject.combineReducers)({
  layout: layoutReducer,
  homePage: homePageReducer,
  //   brands: brandsReducer,
  cart: cartReducer,
  auth: authReducer
}));
;// CONCATENATED MODULE: ./redux/store.js




const middlware = [(external_redux_thunk_default())];
const store_initialState = {};
/* harmony default export */ const store = ((0,external_redux_namespaceObject.createStore)(reducers, store_initialState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middlware))));
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(8993);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
// EXTERNAL MODULE: external "react-media"
var external_react_media_ = __webpack_require__(9533);
var external_react_media_default = /*#__PURE__*/__webpack_require__.n(external_react_media_);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./styles/Navbar.module.scss
var Navbar_module = __webpack_require__(4712);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
// EXTERNAL MODULE: ./node_modules/react-phone-number-input/style.css
var style = __webpack_require__(483);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./redux/actions/authActions.js
var authActions = __webpack_require__(6808);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
;// CONCATENATED MODULE: ./components/layout/ScrollTop.jsx





function ScrollTop() {
  const {
    0: showScroll,
    1: setShowScroll
  } = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 250) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 250) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return /*#__PURE__*/_jsx("div", {
    className: "container",
    children: /*#__PURE__*/_jsx("div", {
      className: "scrollTopWrap",
      style: {
        display: showScroll ? "flex" : "none"
      },
      children: /*#__PURE__*/_jsx("div", {
        className: "scroll_top",
        onClick: scrollTop,
        style: {
          height: 40,
          width: 40
        },
        children: /*#__PURE__*/_jsx(FontAwesomeIcon, {
          className: "scrollTop",
          icon: faArrowUp
        })
      })
    })
  });
}

/* harmony default export */ const layout_ScrollTop = ((/* unused pure expression or super */ null && (ScrollTop)));
;// CONCATENATED MODULE: ./pages/_app.js




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 // Import the CSS

 // import footer from "../styles/Footer.module.scss";





const NavbarWrapper = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(571), __webpack_require__.e(9839), __webpack_require__.e(6696)]).then(__webpack_require__.bind(__webpack_require__, 6696)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6696)],
    modules: ["_app.js -> " + "../components/layout/NavbarWrapper"]
  }
});
const Divider = dynamic_default()(() => __webpack_require__.e(/* import() */ 5651).then(__webpack_require__.bind(__webpack_require__, 5651)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5651)],
    modules: ["_app.js -> " + "../components/layout/partials/Divider"]
  }
});
const Menu = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(9839)]).then(__webpack_require__.bind(__webpack_require__, 9566)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9566)],
    modules: ["_app.js -> " + "../components/layout/Menu"]
  }
});
const Footer = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(5675), __webpack_require__.e(9853), __webpack_require__.e(2431)]).then(__webpack_require__.bind(__webpack_require__, 9853)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9853)],
    modules: ["_app.js -> " + "../components/layout/Footer"]
  }
});
const MobileFooterMenu = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(5675), __webpack_require__.e(3506)]).then(__webpack_require__.bind(__webpack_require__, 3634)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3634)],
    modules: ["_app.js -> " + "../components/mobile/MobileFooterMenu"]
  }
});



const cookies = new (external_universal_cookie_default())();

if (false) {}

const Tidio = () => {
  return /*#__PURE__*/_jsx("script", {
    dangerouslySetInnerHTML: {
      __html: `
        document.addEventListener("DOMContentLoaded", function(event) {
          setTimeout(function() {
            const script = document.createElement('script');
            script.src = "https://code.tidio.co/78qfcpefcnzbgxw8p5mepwdusgyunte4.js";
            script.async = true;
            document.body.appendChild(script);
          }, 4000)
        });
      `
    }
  });
};

const MyApp = ({
  Component,
  pageProps
}) => {
  const {
    0: lang,
    1: setLang
  } = (0,external_react_.useState)(cookies.get("lang"));
  (0,external_react_.useEffect)(() => {
    setLang(cookies.get("lang"));
  }, [cookies.get("lang")]);

  if (lang === undefined) {
    cookies.set("next-i18next", "en", {
      path: "/",
      SameSite: "None; Secure",
      maxAge: 15 * 86400
    });
    cookies.set("lang", "en", {
      path: "/"
    }); // document.body.dir = "ltr";
  }

  if (lang === "en") {
    cookies.set("next-i18next", "en", {
      path: "/",
      SameSite: "None; Secure",
      maxAge: 15 * 86400
    });

    if (typeof document != "undefined") {
      document.body.classList.remove("rtl");
      document.body.dir = "ltr";
    }
  }

  if (lang == "ar_QA") {
    cookies.set("next-i18next", "ar_QA", {
      path: "/",
      SameSite: "None; Secure",
      maxAge: 15 * 86400
    });

    if (document) {
      document.body.classList.add("rtl");
      document.body.dir = "rtl";
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_redux_.Provider, {
    store: store,
    children: lang && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(NavbarWrapper, {
        FontAwesomeIcon: react_fontawesome_.FontAwesomeIcon,
        lang: lang,
        styles: (Navbar_module_default())
      }), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread(_app_objectSpread({}, pageProps), {}, {
        FontAwesomeIcon: react_fontawesome_.FontAwesomeIcon,
        lang: lang,
        store: store
      })), /*#__PURE__*/jsx_runtime_.jsx(Footer, {
        lang: lang,
        FontAwesomeIcon: react_fontawesome_.FontAwesomeIcon
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_media_default()), {
        query: "(max-width: 991px)",
        render: () => /*#__PURE__*/jsx_runtime_.jsx(MobileFooterMenu, {
          lang: lang,
          FontAwesomeIcon: react_fontawesome_.FontAwesomeIcon
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_media_default()), {
        query: "(min-width: 992px)",
        render: () => /*#__PURE__*/jsx_runtime_.jsx((script_default()), {
          src: "https://code.tidio.co/78qfcpefcnzbgxw8p5mepwdusgyunte4.js",
          strategy: "lazyOnload"
        })
      }), " ",  false && /*#__PURE__*/0]
    })
  });
}; // MyApp.getInitialProps = (context) => {
//   console.log(context);
//   return {pageProps:{
//     lang:"en"
//   }}
// }


const makestore = () => store;

const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makestore);
/* harmony default export */ const _app = ((0,i18n.appWithTranslation)(wrapper.withRedux(MyApp)));

/***/ }),

/***/ 4712:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar_content": "Navbar_navbar_content__3va_F",
	"logo_content": "Navbar_logo_content__22MhB",
	"search_container": "Navbar_search_container__-W0Pb",
	"search_content": "Navbar_search_content__2GDvH",
	"search_result": "Navbar_search_result__2qict",
	"active": "Navbar_active__1a_Eh",
	"search_result_li": "Navbar_search_result_li__eQin7",
	"search_result_li2": "Navbar_search_result_li2__2T64l",
	"mb_search_content": "Navbar_mb_search_content__2SVAs",
	"mobile_search_icon": "Navbar_mobile_search_icon__1enq2",
	"icon_content": "Navbar_icon_content__2XIzT",
	"main_icon": "Navbar_main_icon__3Jctt",
	"bag_count": "Navbar_bag_count__2fpl_",
	"bag_popup": "Navbar_bag_popup__1tVMf",
	"bag_top": "Navbar_bag_top__1-J-P",
	"top_inner": "Navbar_top_inner__2t6LI",
	"bag_total": "Navbar_bag_total__24juM",
	"bag_middle": "Navbar_bag_middle__3EX01",
	"product__item": "Navbar_product__item__2VwyM",
	"product__quantity": "Navbar_product__quantity__1kMgx",
	"qnt": "Navbar_qnt__1IPbE",
	"product__img": "Navbar_product__img__1xL1I",
	"product__name": "Navbar_product__name__1kErX",
	"option__lavel": "Navbar_option__lavel__U8jzP",
	"product__price": "Navbar_product__price__3vi-7",
	"bag_bottom": "Navbar_bag_bottom__3zNg4",
	"place_order": "Navbar_place_order__2cJUJ",
	"mb_search_input": "Navbar_mb_search_input__3frh2",
	"mb_search_input_wrapper": "Navbar_mb_search_input_wrapper__2dCKG",
	"search_icon": "Navbar_search_icon__316un",
	"closed": "Navbar_closed__2c_SD"
};


/***/ }),

/***/ 483:
/***/ (() => {



/***/ }),

/***/ 8819:
/***/ (() => {



/***/ }),

/***/ 2953:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ 887:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

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

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

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

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

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

/***/ 9226:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ 7789:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 9533:
/***/ ((module) => {

"use strict";
module.exports = require("react-media");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 2034:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

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
var __webpack_exports__ = __webpack_require__.X(0, [434,3164,6808], () => (__webpack_exec__(3650)));
module.exports = __webpack_exports__;

})();