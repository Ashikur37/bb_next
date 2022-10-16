exports.id = 9665;
exports.ids = [9665,2431,5660];
exports.modules = {

/***/ 8082:
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
/* harmony import */ var _mobile_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4458);
/* harmony import */ var _redux_actions_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6698);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function RegisterStepTwo({
  phone
}) {
  const {
    0: disabled,
    1: setDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const {
    0: form,
    1: setForm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: phone ? "+" + JSON.parse(phone).country_code + JSON.parse(phone).phone : "",
    apartment: "",
    address: "",
    city: "",
    country: "QA",
    privacy_policy: false,
    password: "",
    password_confirmation: ""
  });

  const formSubmitHandler = event => {
    event.preventDefault();
    const newForm = new FormData();
    newForm.append("first_name", form.first_name);
    newForm.append("last_name", form.first_name);
    newForm.append("email", form.email);
    newForm.append("password", form.password);
    newForm.append("password_confirmation", form.password_confirmation);
    newForm.append("phone_no", form.phone_no);
    newForm.append("address", form.address);
    newForm.append("apartment", form.apartment); // area

    newForm.append("city", form.city);
    newForm.append("privacy_policy", form.privacy_policy);
    newForm.append("country", form.country);
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_4__/* .default.post */ .Z.post("en/auth/register", newForm).then(res => {
      localStorage.removeItem("number");
      window.location.href = "/login";
    }).catch(err => {
      if (err.response.data.errors) {
        const {
          email,
          first_name,
          password,
          password_confirmation,
          privacy_policy
        } = err.response.data.errors;

        if (email) {
          window.alert(email);
        } else if (first_name) {
          window.alert(first_name);
        } else if (password) {
          window.alert(password);
        } else if (password_confirmation) {
          window.alert(password_confirmation);
        } else if (privacy_policy) {
          window.alert(privacy_policy);
        } else {
          window.alert("Something went wrong. Contact support with your email address");
        }
      } else {
        if (err.response.data.message) {
          window.alert(err.response.data.message);
        } else {
          window.alert("Something went wrong. Contact support with your email address");
        }
      }

      setError("Something went wrong. Contact support with your email address");
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (form.privacy_policy && form.first_name !== "" && form.email !== "" && form.password !== "" && form.apartment !== "" && form.password_confirmation !== "" && form.password === form.password_confirmation && form.city !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [form]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "title",
        children: "ACCOUNT"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "title sub_title",
        children: "Fill-up your PERSONAL INFORMATION"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: " mt-3 register_container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
          onSubmit: e => formSubmitHandler(e),
          method: "POST",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: "input_label",
                  children: "Full Name*"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  type: "text",
                  className: "form-control ",
                  value: form.first_name,
                  onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                    first_name: e.currentTarget.value,
                    last_name: e.currentTarget.value
                  }))
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: "input_label",
                  children: "Email address"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  type: "email",
                  className: "form-control ",
                  value: form.email,
                  onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                    email: e.target.value
                  }))
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: "input_label",
                  children: "Password*"
                }), " (password must contain at least 6 characters)", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  type: "password",
                  className: "form-control ",
                  value: form.password,
                  onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                    password: e.target.value
                  }))
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: "input_label",
                  children: "Re-enter Password*"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  type: "password",
                  className: "form-control ",
                  value: form.password_confirmation,
                  onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                    password_confirmation: e.target.value
                  }))
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: "input_label",
                  children: "Phone Number*"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  type: "text",
                  className: "form-control ",
                  value: form.phone_no,
                  disabled: true
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: "input_label",
                  children: "Area*"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  type: "text",
                  className: "form-control ",
                  value: form.apartment,
                  onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                    apartment: e.target.value
                  }))
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "row",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                  className: "input_label",
                  children: "Full Address*"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                  type: "text",
                  className: "form-control ",
                  value: form.address,
                  onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                    address: e.target.value
                  }))
                })]
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "col-md-6",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                      className: "input_label",
                      children: "City*"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                      className: "custom-select inp ut_box",
                      value: form.city,
                      onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                        city: e.target.value
                      })),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "",
                        disabled: true,
                        children: "Pick a city"
                      }), _mobile_static__WEBPACK_IMPORTED_MODULE_3__/* .cityNames.map */ .m0.map((city, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: city,
                        children: city
                      }, index))]
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                      className: "input_label",
                      children: "Country*"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                      value: form.country,
                      className: "custom-select inp ut_box",
                      onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                        country: e.target.value
                      })),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: "QA",
                        children: "Qatar"
                      })
                    })]
                  })
                })]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "form-check",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                className: "form-check-input",
                type: "checkbox",
                id: "gridCheck",
                value: form.privacy_policy,
                onChange: e => setForm(_objectSpread(_objectSpread({}, form), {}, {
                  privacy_policy: e.target.checked
                }))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: "form-check-label",
                htmlFor: "gridCheck",
                children: ["By clicking, I agree to", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                  href: "/terms-and-conditions",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "form_check_label",
                    children: " Terms & Conditions"
                  })
                }), " ", "and", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                  href: "/privacy-policy",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: "form_check_label",
                    children: "Privacy Policy"
                  })
                }), "."]
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "form_btn_container",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              className: disabled ? "disabled submit_btn" : "submit_btn",
              type: "submit",
              value: "CREATE ACCOUNT"
            })
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterStepTwo);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;