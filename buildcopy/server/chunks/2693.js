"use strict";
exports.id = 2693;
exports.ids = [2693];
exports.modules = {

/***/ 2693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6293);
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);








const EditAddress = ({
  old_address,
  token = null
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!token) {
      router.push("/login");
    } else {
      (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = `Bearer ${token || ""}`;
    }
  }, []);
  const {
    0: fname,
    1: setFname
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(old_address.fname);
  const {
    0: lname,
    1: setLname
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(old_address.lname);
  const {
    0: country,
    1: setCountry
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(old_address.country);
  const {
    0: address,
    1: setAddress
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(old_address.address);
  const {
    0: city,
    1: setCity
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(old_address.city);
  const {
    0: postCode,
    1: setPostCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(old_address.postCode);
  const {
    0: isDefault,
    1: setIsDefault
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(old_address.isDefault);
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(old_address.phoneNumber);

  const phoneNumberHandler = value => {
    setPhoneNumber(value);
  };

  const submitHandler = e => {
    e.preventDefault();

    if (!(0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.isValidPhoneNumber)(phoneNumber)) {
      return;
    }

    axios__WEBPACK_IMPORTED_MODULE_3___default().post(`/api/account/setAddress?id=${old_address._id}`, {
      fname,
      lname,
      country,
      address,
      city,
      postCode,
      isDefault,
      phoneNumber,
      addressType: old_address.addressType
    }).then(res => {
      if (res.data == "success") {
        router.push("/profile/addressbook");
      }
    }).catch(err => {
      console.log(err);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
      children: "Edit Address"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}), old_address && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
      onSubmit: submitHandler,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "fname",
              children: "First Name"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
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
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "lname",
              children: "Last Name"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
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
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "telephone",
              children: "Telephone"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_phone_number_input__WEBPACK_IMPORTED_MODULE_2___default()), {
              international: true,
              defaultCountry: "QA",
              value: phoneNumber,
              onChange: phoneNumberHandler,
              autoComplete: "none",
              error: phoneNumber ? (0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.isValidPhoneNumber)(phoneNumber) ? undefined : "Invalid phone number" : "Phone number required"
            }), (0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.isValidPhoneNumber)(phoneNumber) ? null : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "ml-4 text-danger",
              children: "Valid phone number required"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              children: "Country"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
              value: country,
              name: "country",
              className: "form-control",
              onChange: e => setCountry(e.target.value),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: "Qatar",
                children: "Qatar"
              })
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
              htmlFor: "address1",
              children: "Address"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
              type: "text",
              required: true,
              className: "form-control",
              id: "address",
              placeholder: "Address line one...",
              value: address,
              onChange: e => setAddress(e.target.value)
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "city",
              children: "City"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
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
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "form-group",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
              htmlFor: "postcode",
              children: "Post Code/Zip"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
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
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-6",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "form-group",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "custom-control custom-checkbox mr-sm-2",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "checkbox",
                className: "custom-control-input",
                id: "dbilling",
                name: "dbilling",
                checked: isDefault,
                onChange: e => setIsDefault(e.currentTarget.checked)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                className: "custom-control-label",
                htmlFor: "dbilling",
                children: ["Use as my default ", old_address.addressType, " address"]
              })]
            })
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
            type: "submit",
            className: "saveBtn",
            value: "Save New Address"
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditAddress);

/***/ })

};
;