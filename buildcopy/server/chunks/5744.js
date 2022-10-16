"use strict";
exports.id = 5744;
exports.ids = [5744];
exports.modules = {

/***/ 5744:
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
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2512);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4336);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6698);






 // import "react-phone-number-input/style.css";



function RegisterStepOne({
  t,
  changeStep,
  phone
}) {
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(phone ? "+" + JSON.parse(phone).country_code + JSON.parse(phone).phone : "");
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: otp_id,
    1: setOtpId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: otp,
    1: setOtp
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const otp_modal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();

  const valueHandler = value => {
    setValue(value);
  }; //submit number


  const numberInput = () => {
    const phone = (0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.parsePhoneNumber)(value);
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__/* .default.post */ .Z.post("en/checkout/verify/check-number-api", {
      cell_no: phone.nationalNumber,
      country_code: phone.countryCallingCode
    }).then(res => {
      localStorage.setItem("number", JSON.stringify({
        phone: phone.nationalNumber,
        country_code: phone.countryCallingCode
      }));

      if (res.data === false) {
        setShow(true);
        _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__/* .default.post */ .Z.post("en/checkout/verify/now", {
          cell_no: phone.nationalNumber,
          country_code: phone.countryCallingCode
        }).then(res => {
          if (res.data === 0) {
            setShow(false);
          } else {
            setOtpId(res.data);
          }
        });
      } else {
        //next step
        changeStep();
      }
    }); // numberHnadler(phone);
  };

  const proceedVerify = () => {
    if (show) {
      const phone = (0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.parsePhoneNumber)(value);
      _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__/* .default.post */ .Z.post("en/checkout/verify/final", {
        cell_no: phone.nationalNumber,
        country_code: "+" + phone.countryCallingCode,
        otp: otp,
        id: otp_id
      }).then(res => {
        if (res.data === "success") {
          setShow(false); //next step

          changeStep();
        } else {
          numberInput();
        }
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "register__step__one",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
      className: "text-center mt-3 mb-3",
      children: t("PLEASE ENTER YOUR MOBILE PHONE NUMBER TO REGISTER")
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "col-md-4"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "col-md-4 mb-5",
          dir: "ltr",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_phone_number_input__WEBPACK_IMPORTED_MODULE_2___default()), {
            international: true,
            defaultCountry: "QA",
            value: value,
            onChange: valueHandler,
            error: value ? (0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.isValidPhoneNumber)(value) ? undefined : "Invalid phone number" : "Phone number required"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "phone_submit_wrapper text-center mt-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              disabled: (0,react_phone_number_input__WEBPACK_IMPORTED_MODULE_2__.isValidPhoneNumber)(value) ? false : true,
              type: "submit",
              className: "btn btn-outline-success",
              onClick: numberInput,
              children: t('Proceed')
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {
          show: show,
          size: "sm",
          centered: true,
          ref: otp_modal,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Header), {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
              children: t('Enter the OTP we sent to your given number')
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Body), {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_3___default()), {
              isInputNum: true,
              value: otp,
              onChange: e => {
                setOtp(e);
              } // inputStyle={{ width: '2rem' }}
              ,
              containerStyle: "otp",
              numInputs: 4 // separator={<span>-</span>}

            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_4___default().Footer), {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              type: "button",
              className: "btn btn-secondary",
              onClick: () => setShow(false),
              children: t('Close')
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
              type: "button",
              className: "btn btn-primary",
              onClick: proceedVerify,
              children: "Verify"
            })]
          })]
        })]
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterStepOne);

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

/***/ })

};
;