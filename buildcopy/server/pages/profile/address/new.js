"use strict";
(() => {
var exports = {};
exports.id = 1809;
exports.ids = [1809];
exports.modules = {

/***/ 4773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ address_new)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-phone-number-input"
var external_react_phone_number_input_ = __webpack_require__(6293);
var external_react_phone_number_input_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_number_input_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./styles/UserProfilePage.module.scss
var UserProfilePage_module = __webpack_require__(3362);
var UserProfilePage_module_default = /*#__PURE__*/__webpack_require__.n(UserProfilePage_module);
;// CONCATENATED MODULE: ./components/profile/AddAddress.jsx








function AddAddress({
  lang,
  auth
}) {
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    if (!auth.isAuthenticated || !localStorage.getItem("auth_token")) {
      router.push("/login");
    }

    if (auth.isAuthenticated) {
      (external_axios_default()).defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("auth_token") || ""}`;
    }
  }, [auth, lang]);
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = (0,external_react_.useState)();
  const {
    0: fname,
    1: setFname
  } = (0,external_react_.useState)();
  const {
    0: lname,
    1: setLname
  } = (0,external_react_.useState)();
  const {
    0: country,
    1: setCountry
  } = (0,external_react_.useState)("Qatar");
  const {
    0: address,
    1: setAddress
  } = (0,external_react_.useState)();
  const {
    0: city,
    1: setCity
  } = (0,external_react_.useState)();
  const {
    0: postCode,
    1: setPostCode
  } = (0,external_react_.useState)();
  const {
    0: dbilling,
    1: setDBilling
  } = (0,external_react_.useState)(false);
  const {
    0: dshipping,
    1: setDShipping
  } = (0,external_react_.useState)(false);

  const phoneNumberHandler = value => {
    setPhoneNumber(value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (!(0,external_react_phone_number_input_.isValidPhoneNumber)(phoneNumber)) {
      return;
    }

    let billing = {
      fname,
      lname,
      phoneNumber,
      country,
      address,
      city,
      postCode,
      addressType: "billing",
      isDefault: dbilling
    };
    let shipping = {
      fname,
      lname,
      phoneNumber,
      country,
      address,
      city,
      postCode,
      addressType: "shipping",
      isDefault: dshipping
    };
    external_axios_default().post("/api/account/address", {
      billing,
      shipping
    }).then(res => {
      if (res.data.ok == 1) {
        setPhoneNumber();
        setFname();
        setLname();
        setCountry("Qatar");
        setAddress();
        setCity();
        setPostCode();
        setDBilling(false);
        setDShipping(false);
        router.push("/profile/addressbook");
      }
    }).catch(err => {
      console.log(err);
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (UserProfilePage_module_default()).new_address,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(UserProfilePage_module_default()).sectionHeader} mb-3`,
      children: "New Address"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (UserProfilePage_module_default()).newAddress_form,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: submitHandler,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "fname",
                children: "First Name"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                className: "form-control",
                id: "fname",
                required: true,
                name: "fname",
                placeholder: "first name...",
                value: fname,
                onChange: e => setFname(e.target.value)
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "lname",
                children: "Last Name"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                required: true,
                className: "form-control",
                id: "lname",
                name: "lname",
                placeholder: "Last name...",
                value: lname,
                onChange: e => setLname(e.target.value)
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "telephone",
                children: "Telephone"
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_phone_number_input_default()), {
                international: true,
                defaultCountry: "QA",
                value: phoneNumber,
                onChange: phoneNumberHandler,
                autoComplete: "none",
                error: phoneNumber ? (0,external_react_phone_number_input_.isValidPhoneNumber)(phoneNumber) ? undefined : "Invalid phone number" : "Phone number required"
              }), phoneNumber && (0,external_react_phone_number_input_.isValidPhoneNumber)(phoneNumber) ? null : /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "ml-4 text-danger",
                children: "Valid phone number required"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                children: "Country"
              }), /*#__PURE__*/jsx_runtime_.jsx("select", {
                value: country,
                name: "country",
                className: "form-control",
                onChange: e => setCountry(e.target.value),
                children: /*#__PURE__*/jsx_runtime_.jsx("option", {
                  value: "Qatar",
                  children: "Qatar"
                })
              })]
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "address1",
                children: "Address"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                required: true,
                className: "form-control",
                id: "address",
                placeholder: "Address line one...",
                value: address,
                onChange: e => setAddress(e.target.value)
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "city",
                children: "City"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                required: true,
                className: "form-control",
                id: "city",
                placeholder: "city...",
                value: city,
                onChange: e => setCity(e.target.value)
              })]
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "postcode",
                children: "Post Code/Zip"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                required: true,
                type: "text",
                className: "form-control",
                id: "postcode",
                placeholder: "Post Code/Zip",
                value: postCode,
                onChange: e => setPostCode(e.target.value)
              })]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "form-group",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "custom-control custom-checkbox mr-sm-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "checkbox",
                  className: "custom-control-input",
                  id: "dbilling",
                  name: "dbilling",
                  checked: dbilling,
                  onChange: e => setDBilling(!dbilling)
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "custom-control-label",
                  htmlFor: "dbilling",
                  children: "Use as my default billing address"
                })]
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "form-group",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "custom-control custom-checkbox mr-sm-2",
                children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "checkbox",
                  className: "custom-control-input",
                  id: "dshipping",
                  name: "dshipping",
                  checked: dshipping,
                  onChange: e => setDShipping(!dshipping)
                }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: "custom-control-label",
                  htmlFor: "dshipping",
                  children: "Use as my default shipping address"
                })]
              })
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "submit",
              className: (UserProfilePage_module_default()).saveBtn,
              value: "Save New Address"
            })
          })
        })]
      })
    })]
  });
}

/* harmony default export */ const profile_AddAddress = (AddAddress);
// EXTERNAL MODULE: ./components/profile/Layout.jsx
var Layout = __webpack_require__(7094);
;// CONCATENATED MODULE: ./pages/profile/address/new/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function index(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(Layout.default, {
      children: /*#__PURE__*/jsx_runtime_.jsx(profile_AddAddress, _objectSpread({}, props))
    })
  });
}

/* harmony default export */ const address_new = (index);

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

/***/ 6293:
/***/ ((module) => {

module.exports = require("react-phone-number-input");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3164,6808,7094], () => (__webpack_exec__(4773)));
module.exports = __webpack_exports__;

})();