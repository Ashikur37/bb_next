(() => {
var exports = {};
exports.id = 6837;
exports.ids = [6837];
exports.modules = {

/***/ 2770:
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
/* harmony import */ var _redux_actions_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6698);
/* harmony import */ var _styles_ForgetPassword_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5847);
/* harmony import */ var _styles_ForgetPassword_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_ForgetPassword_module_scss__WEBPACK_IMPORTED_MODULE_3__);


 // import Footer from "../layout/Footer";




function ForgetPassword() {
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: confirmPassword,
    1: setConfirmPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: success,
    1: setSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const submitHandler = e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Confirm Password doesn't match");
      return;
    }

    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_2__/* .default.post */ .Z.post("en/setdata/reset", {
      email,
      password
    }).then(res => {
      setSuccess(true);
      setError(false);
    }).catch(err => {
      setSuccess(false);
      setError(true);
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_ForgetPassword_module_scss__WEBPACK_IMPORTED_MODULE_3___default().forget__passoword),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_ForgetPassword_module_scss__WEBPACK_IMPORTED_MODULE_3___default().forget__password__wrapper),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_ForgetPassword_module_scss__WEBPACK_IMPORTED_MODULE_3___default().forget__card),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
          className: "text-center mt-3 mb-3",
          children: "Forget password"
        }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          className: "text-danger",
          children: ["This email address is not valid!", " "]
        }), success && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("center", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "text-success",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
              className: "text-center",
              children: "Please visit your email to verify!"
            })
          })
        }), !success && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
          onSubmit: submitHandler,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "exampleInputEmail1",
              children: "Email address"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              name: "email",
              value: email,
              onChange: e => setEmail(e.target.value),
              type: "email",
              required: true,
              className: "form-control",
              placeholder: "Enter email"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "exampleInputPassword1",
              children: "Password"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              value: password,
              required: true,
              onChange: e => setPassword(e.target.value),
              type: "password",
              className: "form-control",
              placeholder: "Password"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "exampleInputPassword1",
              children: "Confirm Password"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              required: true,
              value: confirmPassword,
              onChange: e => setConfirmPassword(e.target.value),
              type: "password",
              className: "form-control",
              placeholder: "Confirm Password"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: " text-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              type: "submit",
              className: "btn btn-outline-success",
              children: "Submit"
            })
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgetPassword);

/***/ }),

/***/ 6698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 5847:
/***/ ((module) => {

// Exports
module.exports = {
	"forget__password__wrapper": "ForgetPassword_forget__password__wrapper__2041S",
	"forget__card": "ForgetPassword_forget__card__1N9s7",
	"message__card__wrapper": "ForgetPassword_message__card__wrapper__2_Duc",
	"message__card": "ForgetPassword_message__card__2BZAQ",
	"fa__success": "ForgetPassword_fa__success__4-Nf1",
	"fa__failed": "ForgetPassword_fa__failed__2euC2",
	"success__text": "ForgetPassword_success__text__zecZ4"
};


/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__(2770));
module.exports = __webpack_exports__;

})();