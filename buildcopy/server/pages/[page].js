"use strict";
(() => {
var exports = {};
exports.id = 2358;
exports.ids = [2358];
exports.modules = {

/***/ 8558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _page_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./redux/actions/axios.js
var axios = __webpack_require__(6698);
;// CONCATENATED MODULE: external "next/error"
const error_namespaceObject = require("next/error");
var error_default = /*#__PURE__*/__webpack_require__.n(error_namespaceObject);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./pages/[page].js







 // dynamic loaded components

const Header = dynamic_default()(() => __webpack_require__.e(/* import() */ 5773).then(__webpack_require__.bind(__webpack_require__, 5773)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5773)],
    modules: ["[page].js -> " + "../components/layout/partials/Header"]
  }
});
const Loader = dynamic_default()(() => __webpack_require__.e(/* import() */ 3921).then(__webpack_require__.bind(__webpack_require__, 3921)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3921)],
    modules: ["[page].js -> " + "../components/atom/Loader"]
  }
}); // page level stylesheet

function Page({
  pageTitle,
  slug,
  lang
}) {
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(null);
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    console.log(lang);
    axios/* default.get */.Z.get(`${lang}/getdata/page/${slug}`).then(res => {
      if (res.data) {
        setData(res.data);
      } else {
        setError(true);
      }
    });
  }, [slug, lang]);
  (0,external_react_.useEffect)(() => {
    window.scrollTo(0, 0);
  }, []);

  const createMarkup = data => {
    return {
      __html: data
    };
  };

  if (error) {
    return /*#__PURE__*/jsx_runtime_.jsx((error_default()), {
      title: "Not Found",
      statusCode: 404
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "page",
      children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
          children: [pageTitle.toUpperCase(), " | Beautyboothqa"]
        })
      }), data ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
          h: "h2",
          text: data.name
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "descriptions",
          dangerouslySetInnerHTML: createMarkup(data.body)
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          marginTop: 200
        },
        className: "loader",
        children: /*#__PURE__*/jsx_runtime_.jsx(Loader, {})
      })]
    })
  });
}

async function getStaticProps(context) {
  let slug = context.params.page;
  let pageTitle = "";

  switch (context.params.page) {
    case 'about-us':
      pageTitle = 'about us';
      break;

    case 'faq':
      pageTitle = 'faq';
      break;

    case 'delivery':
      pageTitle = 'delivery';
      break;

    case 'terms-and-conditions':
      pageTitle = 'terms & conditions';
      break;

    case 'privacy-policy':
      pageTitle = 'privacy policy';
      break;

    case value:
      break;

    default:
      pageTitle = "BeautyBoothqa";
      break;
  }

  return {
    props: {
      slug,
      pageTitle
    } // will be passed to the page component as props

  };
}
async function getStaticPaths() {
  return {
    paths: [{
      params: {
        page: 'about-us'
      }
    }, {
      params: {
        page: 'delivery'
      }
    }, {
      params: {
        page: 'terms-and-conditions'
      }
    }, {
      params: {
        page: 'privacy-policy'
      }
    }],
    fallback: false
  };
}
/* harmony default export */ const _page_ = (Page);

/***/ }),

/***/ 6698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const axios = __webpack_require__(2376);

const url = "https://admin.beautyboothqa.com/"; // const url = "http://localhost:8000/";
// const url = "https://new.beautybooth.shop/";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios.create({
  baseURL: url,
  responseType: "json",
  headers: {
    "Content-Type": "application/json" // Authorization: `Bearer ${localStorage.getItem("auth_token") || ""}`,

  }
}));
/* Please add bearer token first while live for production */

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8558));
module.exports = __webpack_exports__;

})();