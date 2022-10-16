"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 8857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_profile_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7094);
/* harmony import */ var _styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3362);
/* harmony import */ var _styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);





const Dashboard = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.all(/* import() */[__webpack_require__.e(4920), __webpack_require__.e(1664), __webpack_require__.e(4418)]).then(__webpack_require__.bind(__webpack_require__, 4801)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4801)],
    modules: ["profile/index.jsx -> " + "../../components/profile/Dashboard"]
  }
});



function Index({
  language,
  Auth = null,
  user = null
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!Auth) {
      window.localStorage.removeItem("auth_token");
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("expire_time"); // router.push("/login");
    }
  }, [Auth, language]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_profile_Layout__WEBPACK_IMPORTED_MODULE_4__.default, {
      active: "dashboard",
      styles: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default()),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dashboard, {
        language: language,
        user: user,
        Auth: Auth,
        styles: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default())
      })
    })
  });
}

async function getServerSideProps(context) {
  let language = context.req.language || "en";
  let Auth = null;

  if (false) {} else {
    Auth = context.req.universalCookies.get("auth_token") || null;
  }

  if (!Auth) {
    return {
      props: {
        language
      }
    };
  }

  let host = `http://localhost:${process.env.PORT}`;
  (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = `Bearer ${Auth}`;
  const user = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${host}/api/profile?locale=${language}`).then(res => {
    if (res.data) {
      return res.data.user;
    }
  }).catch(err => {
    console.log(err);
  });
  return {
    props: {
      language,
      Auth,
      user
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 8951:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 8993:
/***/ ((module) => {

module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3164,6808,7094], () => (__webpack_exec__(8857)));
module.exports = __webpack_exports__;

})();