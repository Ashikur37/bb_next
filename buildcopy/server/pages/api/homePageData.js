"use strict";
(() => {
var exports = {};
exports.id = 3219;
exports.ids = [3219];
exports.modules = {

/***/ 3388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _redux_actions_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6698);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {
  const {
    locale,
    type
  } = req.query;
  const data = await _redux_actions_axios__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(locale + "/getdata/products/" + type).then(res => res.data).catch(err => {
    console.log(err);
  });
  res.statusCode = 200;
  res.json(data);
});

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

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3388));
module.exports = __webpack_exports__;

})();