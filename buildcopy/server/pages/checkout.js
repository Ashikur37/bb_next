(() => {
var exports = {};
exports.id = 2222;
exports.ids = [2222,3921];
exports.modules = {

/***/ 3921:
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



function Loader() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "loader_container",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: "/svg/loading.svg",
      alt: "loading"
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ 1639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ checkout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./redux/actions/axios.js
var axios = __webpack_require__(6698);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./redux/actions/cartAction.js
var cartAction = __webpack_require__(571);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
;// CONCATENATED MODULE: ./components/atom/ProgressBar.jsx






function ProgressBar({
  active,
  styles,
  online = false
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: styles.pregress_bar,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${styles.wrap} ${active >= 1 ? styles.active : ""}`,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faPaperPlane
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${styles.wrap} ${active >= 2 ? styles.active : ""}`,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faMoneyCheckAlt
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${styles.wrap} ${active >= 3 ? styles.active : ""}`,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: online ? free_solid_svg_icons_.faUserCheck : free_solid_svg_icons_.faCheck
            })
          })
        }), online && /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `${styles.wrap} ${active >= 4 ? styles.active : ""}`,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faCreditCard
            })
          })
        })]
      })
    })
  });
}

/* harmony default export */ const atom_ProgressBar = (ProgressBar);
;// CONCATENATED MODULE: external "react-hook-form"
const external_react_hook_form_namespaceObject = require("react-hook-form");
// EXTERNAL MODULE: ./components/Pages/static.js
var Pages_static = __webpack_require__(8138);
;// CONCATENATED MODULE: external "react-autosuggest"
const external_react_autosuggest_namespaceObject = require("react-autosuggest");
var external_react_autosuggest_default = /*#__PURE__*/__webpack_require__.n(external_react_autosuggest_namespaceObject);
// EXTERNAL MODULE: external "react-phone-number-input"
var external_react_phone_number_input_ = __webpack_require__(6293);
var external_react_phone_number_input_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_number_input_);
// EXTERNAL MODULE: ./node_modules/react-phone-number-input/style.css
var style = __webpack_require__(483);
// EXTERNAL MODULE: ./components/utils/helper.js
var helper = __webpack_require__(434);
;// CONCATENATED MODULE: ./components/Pages/Checkout/StepOne.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Header = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 5773)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5773)],
    modules: ["../components/Pages/Checkout/StepOne.jsx -> " + "../../../components/layout/partials/Header"]
  }
});









function StepOne(props) {
  const {
    t,
    styles
  } = props;
  const {
    register,
    formState: {
      errors
    },
    watch,
    handleSubmit,
    getValues
  } = (0,external_react_hook_form_namespaceObject.useForm)();
  const {
    0: suggestions,
    1: setSuggestions
  } = (0,external_react_.useState)({
    suggestions: []
  });
  const {
    0: suggestionsCity,
    1: setSuggestionsCity
  } = (0,external_react_.useState)({
    suggestions: []
  });
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(props.val.billing_state);
  const {
    0: city,
    1: setCity
  } = (0,external_react_.useState)(props.val.billing_city);
  const {
    0: states,
    1: setStates
  } = (0,external_react_.useState)(null);
  const {
    0: orderSource,
    1: setOrderSource
  } = (0,external_react_.useState)("");
  const {
    0: sourceDetails,
    1: setSourceDetails
  } = (0,external_react_.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)(props.val.customer_email); // const [sourceEmail, setSourceEmail] = useState("noemail@beautybooth.com");

  const {
    0: customOrder,
    1: setCustomOrder
  } = (0,external_react_.useState)(false);
  const {
    0: customOrderCreator,
    1: setCustomOrderCreator
  } = (0,external_react_.useState)(null);
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = (0,external_react_.useState)(props.val.country_code + props.val.customer_phone);

  const phoneNumberHandler = value => {
    setPhoneNumber(value);
  };

  const submitHandler = data => {
    if ((0,external_react_phone_number_input_.isValidPhoneNumber)(phoneNumber) && value && city) {
      let phone = (0,external_react_phone_number_input_.parsePhoneNumber)(phoneNumber);
      data.country_code = "+" + phone.countryCallingCode;
      data.customer_phone = phone.nationalNumber;
      data.billing_state = value;
      data.billing_city = city;
      data.source_name = orderSource;
      data.source_details = sourceDetails;
      data.customer_email = email;
      data.custom_order = customOrder;
      data.custom_order_creator = customOrderCreator;
      props.changeStep(data);
    }
  };

  const radioHandler = e => {
    let value = e.target.value;
    props.radioHandler(value);
  };

  (0,external_react_.useEffect)(() => {
    props.val.state = value;
  });
  (0,external_react_.useEffect)(() => {
    if (Pages_static/* cities.includes */.cA.includes(city)) {
      setStates(Pages_static/* states2 */.sC[city]);
    }
  }, [city]);
  (0,external_react_.useEffect)(() => {
    setStates(Pages_static/* states_all */.mf);
  }, [Pages_static/* states_all */.mf]);
  (0,external_react_.useEffect)(() => {
    setCustomOrder(window.localStorage.getItem("auth_token") && !JSON.parse(window.localStorage.getItem("user")).isCustomer);
    setCustomOrderCreator(window.localStorage.getItem("auth_token") && JSON.parse(window.localStorage.getItem("user")).id);
    window.scrollTo(0, 0);
  }, []); // const getSuggestions = () => {
  //   const inputValue = value.trim().toLowerCase();
  //   const inputLength = inputValue.length;
  //   return inputLength === 0 ? [] : states.filter(item =>{
  //     // lang.toLowerCase().slice(0, inputLength) === inputValue
  //      return item.toLowerCase().indexOf(inputValue) > -1;
  //     }
  //   );
  // };
  // function escapeRegexCharacters(str) {
  //   return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // }

  function getSuggestions(param, text) {
    const inputValue = param.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0 ? [] : text.filter(item => {
      // lang.toLowerCase().slice(0, inputLength) === inputValue
      return item.toLowerCase().indexOf(inputValue) > -1;
    });
  }

  function getSuggestionValue(suggestion) {
    return suggestion;
  }

  function getCitySuggestionValue(suggestion) {
    return suggestion;
  }

  const onSuggestionsFetchRequested = () => {
    setSuggestions({
      suggestions: getSuggestions(value, states)
    });
  };

  const onSuggestionsFetchRequestedCity = () => {
    setSuggestionsCity({
      suggestions: getSuggestions(city, Pages_static/* cities */.cA)
    });
  }; // Autosuggest will call this function every time you need to clear suggestions.


  const onSuggestionsClearRequested = () => {
    setSuggestions({
      suggestions: []
    });
  }; // Autosuggest will call this function every time you need to clear suggestions.


  const onSuggestionsClearRequestedCity = () => {
    setSuggestionsCity({
      suggestions: []
    });
  };

  function renderSuggestion(suggestion) {
    return suggestion;
  }

  function renderSuggestionCity(suggestion) {
    return suggestion;
  }

  function customDiscountHandler() {
    let discountvalue = props.cartItems.reduce((acc, item) => item.bulk_id && !props.val.coupon ? acc += item.qnt * item.price.amount - item.qnt * item.price.amount * item.parcent / 100 : acc += item.qnt * item.price.amount, 0);
    let value = props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0);
    return value - discountvalue;
  }

  function grandTotal() {
    return props.cartItems.reduce((acc, item) => item.bulk_id && !props.val.coupon ? acc += item.qnt * item.price.amount - item.qnt * item.price.amount * item.parcent / 100 : acc += item.qnt * item.price.amount, 0);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: styles.step_one,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-md-8",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "text-center",
            children: /*#__PURE__*/jsx_runtime_.jsx(Header, {
              h: "h2",
              text: t("address"),
              Link: next_link.default
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(atom_ProgressBar, {
            styles: styles,
            active: 1
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: styles.delivery_form,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: styles.form_title,
              children: t("Fill-up your delivery form")
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
              autoComplete: "off",
              onSubmit: handleSubmit(submitHandler),
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                      className: "input_label",
                      children: [t("Full Name"), "*"]
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
                      name: "customer_first_name",
                      type: "text",
                      defaultValue: customOrder ? "" : props.val.customer_first_name,
                      className: errors !== null && errors !== void 0 && errors.customer_first_name ? "form-control  is-invalid" : "form-control "
                    }, register("customer_first_name", {
                      required: true
                    }))), (errors === null || errors === void 0 ? void 0 : errors.customer_first_name) && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: "Full Name Required."
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: window && window.localStorage.getItem("auth_token") ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                      className: "input_label",
                      children: [t("Phone"), "*"]
                    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_phone_number_input_default()), {
                      international: true,
                      defaultCountry: "QA",
                      value: phoneNumber,
                      onChange: phoneNumberHandler,
                      autoComplete: "none" // error={
                      //   phoneNumber
                      //     ? isValidPhoneNumber(phoneNumber)
                      //       ? undefined
                      //       : "Invalid phone number"
                      //     : "Phone number required"
                      // }

                    }), phoneNumber && (0,external_react_phone_number_input_.isValidPhoneNumber)(phoneNumber) ? null : /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "ml-4 text-danger",
                      children: "Valid phone number required"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      hidden: true,
                      name: "customer_email",
                      defaultValue: props.val.customer_email,
                      autoComplete: "nope"
                    })]
                  }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      className: "input_label",
                      children: "Email address*"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                      type: "email",
                      autoComplete: "nope",
                      name: "customer_email",
                      defaultValue: props.val.customer_email,
                      onChange: e => {
                        setEmail(e.currentTarget.value);
                      },
                      className: "form-control",
                      required: true // className={
                      //   errors?.customer_email
                      //     ? "form-control is-invalid"
                      //     : "form-control "
                      // }
                      // {...register("customer_email",{required:true,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}

                    })]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-lg-12",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "form-group",
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                      className: "checkbox_label",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                        onChange: () => props.checkBoxHandler(),
                        checked: props.val.active,
                        type: "checkbox"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {}), t("I know My BluePlates")]
                    })
                  })
                }), props.val.active ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      className: "input_label",
                      children: "Street*"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
                      name: "street",
                      type: "text",
                      defaultValue: props.val.street,
                      className: errors !== null && errors !== void 0 && errors.street ? "form-control  is-invalid" : "form-control "
                    }, register("street", {
                      required: true
                    }))), (errors === null || errors === void 0 ? void 0 : errors.street) && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: "Street Required."
                    })]
                  })
                }) : null, props.val.active ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      className: "input_label",
                      children: "Zone*"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
                      name: "zone",
                      type: "text",
                      defaultValue: props.val.zone,
                      className: errors !== null && errors !== void 0 && errors.street ? "form-control  is-invalid" : "form-control "
                    }, register("zone", {
                      required: true
                    }))), (errors === null || errors === void 0 ? void 0 : errors.zone) && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: "Zone Required."
                    })]
                  })
                }) : null, props.val.active ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-lg-4",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      className: "input_label",
                      children: "Building*"
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
                      name: "building",
                      type: "text",
                      defaultValue: props.val.building,
                      className: errors !== null && errors !== void 0 && errors.building ? "form-control  is-invalid" : "form-control "
                    }, register("building", {
                      required: true
                    }))), (errors === null || errors === void 0 ? void 0 : errors.building) && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: "Building Required."
                    })]
                  })
                }) : null]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                      className: "input_label",
                      children: [t("Full Address"), "*"]
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
                      autoComplete: "nope",
                      defaultValue: props.val.billing_address_1,
                      name: "billing_address_1",
                      type: "text",
                      className: errors !== null && errors !== void 0 && errors.billing_address_1 ? "form-control  is-invalid" : "form-control "
                    }, register("billing_address_1", {
                      required: true
                    }))), (errors === null || errors === void 0 ? void 0 : errors.billing_address_1) && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "invalid-feedback",
                      children: "Full Address Required."
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                      className: "input_label",
                      children: t("Apartment/Suit/Unit (optional)")
                    }), /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
                      name: "billing_address_2",
                      autoComplete: "none",
                      defaultValue: props.val.billing_address_2,
                      type: "text",
                      className: "form-control "
                    }, register("billing_address_2")))]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                      className: "input_label",
                      children: [t("City"), "*"]
                    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_autosuggest_default()), {
                      id: "city",
                      suggestions: suggestionsCity.suggestions,
                      onSuggestionsFetchRequested: onSuggestionsFetchRequestedCity,
                      onSuggestionsClearRequested: onSuggestionsClearRequestedCity,
                      getSuggestionValue: getCitySuggestionValue,
                      renderSuggestion: renderSuggestionCity,
                      inputProps: {
                        className: "form-control",
                        autoComplete: "none",
                        placeholder: "Your City name",
                        value: city,
                        onChange: (e, {
                          newValue
                        }) => setCity(newValue)
                      }
                    }), !city && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-danger",
                      children: "City Required."
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-md-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                      className: "input_label",
                      children: [t("Area"), "*"]
                    }), /*#__PURE__*/jsx_runtime_.jsx((external_react_autosuggest_default()), {
                      id: "states",
                      suggestions: suggestions.suggestions,
                      onSuggestionsFetchRequested: onSuggestionsFetchRequested,
                      onSuggestionsClearRequested: onSuggestionsClearRequested,
                      getSuggestionValue: getSuggestionValue,
                      renderSuggestion: renderSuggestion,
                      inputProps: {
                        autoComplete: "none",
                        placeholder: "Your state name",
                        value,
                        className: "form-control",
                        onChange: (e, {
                          newValue
                        }) => (setValue(newValue), props.val.state = newValue)
                      }
                    }), !value && /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "text-danger",
                      children: "State Required."
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  onChange: radioHandler,
                  className: "col-lg-6 ",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                      className: "input_label",
                      children: [t("Delivery Time"), "*"]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: styles.deleviry_schedule,
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: `form-group ${styles.info_wrap} ${styles.form_group}`,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: styles.info,
                          children: "9AM - 1PM "
                        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: "morning",
                          className: `input_label ${styles.info_wrapper}`,
                          children: t("Morning")
                        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                          defaultChecked: props.val.order_schedule == "morning" ? true : false,
                          id: "morning",
                          type: "radio",
                          name: "order_schedule",
                          defaultValue: "morning",
                          className: "form-control "
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: `${styles.info_wrap} form-group ${styles.form_group}`,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: styles.info,
                          children: "4PM - 7PM "
                        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: "afternoon",
                          className: "input_label",
                          children: t("Afternoon")
                        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                          id: "afternoon",
                          type: "radio",
                          name: "order_schedule",
                          defaultValue: "afternoon",
                          defaultChecked: props.val.order_schedule == "afternoon" ? true : false,
                          className: "form-control "
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: `form-group ${styles.info_wrap} ${styles.form_group}`,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: styles.info,
                          children: "7PM - 10PM "
                        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: "evening",
                          className: "input_label",
                          children: t("Evening")
                        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                          id: "evening",
                          type: "radio",
                          name: "order_schedule",
                          defaultValue: "evening",
                          defaultChecked: props.val.order_schedule == "evening" ? true : false,
                          className: "form-control "
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: `form-group ${styles.info_wrap} ${styles.form_group}`,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: "anytime",
                          className: "input_label",
                          children: t("Any Time")
                        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                          id: "anytime",
                          type: "radio",
                          name: "order_schedule",
                          defaultValue: "anytime",
                          defaultChecked: props.val.order_schedule == "anytime" ? true : false,
                          className: "form-control "
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                        id: "shipping_cost",
                        type: "text",
                        name: "shipping_cost" // ref={register}
                        ,
                        defaultValue: props.shipping // value={props.shipping}
                        ,
                        hidden: true
                      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                        id: "shipping_method",
                        type: "text",
                        name: "shipping_method",
                        defaultValue: props.shipping === 0 ? "free_shipping" : "flat_rate" // ref={register}
                        ,
                        hidden: true
                      })]
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "col-lg-6",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "form-group",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                      className: "input_label",
                      children: [t("Note(optional)"), ":"]
                    }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                      value: props.val.order_note,
                      rows: "2",
                      name: "order_note",
                      className: "form-control ",
                      onChange: e => props.testAreaHandler(e.target.value)
                    })]
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.submit_container,
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  className: styles.proceed,
                  type: "submit",
                  value: t("PROCEED TO PAYMENT")
                })
              })]
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-md-4",
          children: [customOrder ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "order_source",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
              children: "Order Source"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                className: "input_label",
                children: "Email address*"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "email",
                name: "customer_email",
                defaultValue: props.val.customer_email,
                onChange: e => setEmail(e.currentTarget.value),
                required: true,
                className: "form-control" // className={
                //   errors?.customer_email
                //     ? "form-control is-invalid"
                //     : "form-control"
                // }
                // {...register("customer_email",{required:true,pattern:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})}
                // ref={register({
                //   required: true,
                //   pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                // })}

              }), (errors === null || errors === void 0 ? void 0 : errors.customer_email) && (errors === null || errors === void 0 ? void 0 : errors.customer_email.type) === "required" && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "invalid-feedback",
                children: "Email Address Required."
              }), (errors === null || errors === void 0 ? void 0 : errors.customer_email) && (errors === null || errors === void 0 ? void 0 : errors.customer_email.type) === "pattern" && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "invalid-feedback",
                children: "Not a Valid Email."
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
              name: "order_source",
              value: orderSource,
              onChange: e => setOrderSource(e.currentTarget.value),
              className: errors !== null && errors !== void 0 && errors.order_source ? "custom-select is-invalid" : "custom-select" // ref={register({ required: true })}
              ,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "",
                hidden: "",
                children: "Select one"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "facebook",
                children: "Facebook"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "instagram",
                children: "Instagram"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "phone-call",
                children: "Phone Call"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                value: "whatsapp",
                children: "WhatsApp"
              })]
            }), orderSource !== "" ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group ",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                htmlFor: "order_source",
                children: ["Source", /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "*"
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                name: "source_details",
                value: sourceDetails,
                onChange: e => setSourceDetails(e.currentTarget.value),
                type: "text",
                className: errors !== null && errors !== void 0 && errors.source_details ? "form-control is-invalid" : "form-control" // ref={register({ required: true })}
                ,
                placeholder: "Enter Facebook/Instagram/WhatsApp"
              })]
            }) : "", /*#__PURE__*/jsx_runtime_.jsx("hr", {})]
          }) : "", /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: styles.cart_list,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: styles.item_title,
              children: t("Product Check")
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: styles.cart_items,
              children: props.cartItems.map((cartItem, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.cart_item,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: styles.details,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: styles.img_wrap,
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: cartItem.thumb,
                      alt: ""
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: styles.detail,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: styles.name,
                      children: cartItem.name
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: styles.option_value,
                      children: cartItem.option_value
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: styles.qnt,
                      children: [" ", cartItem.qnt, " * ", cartItem.price.formatted]
                    })]
                  })]
                })
              }, index))
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: `${styles.summery} mb-2`,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: styles.item_title,
              children: t("ORDER SUMMARY")
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: styles.summery_items,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: styles.summery_item,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: styles.sub,
                  children: t("ORDER SUB-TOTAL")
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: styles.amount,
                  children: ["QAR ", (0,helper.priceWithoutDiscount)(props.cartItems)]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: styles.summery_item,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: styles.sub,
                  children: t("DISCOUNT")
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: styles.amount,
                  children: [" ", "\u2212 QAR", " ", props.val.coupon ? props.val.discount : (0,helper.priceWithoutDiscount)(props.cartItems) - (0,helper.calculateSubTotal)(props.cartItems)]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: styles.summery_item,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: styles.sub,
                  children: [t("SHIPPING"), "*"]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: styles.amount,
                  children: ["QAR ", props.shipping, ".00"]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `${styles.summery_item} ${styles.total}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: styles.sub,
                  children: t("GRAND TOTAL")
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: styles.amount,
                  children: ["QAR", " ", ((0,helper.calculateSubTotal)(props.cartItems, props.val.coupon) + props.shipping - props.val.discount).toFixed(2)]
                })]
              })]
            })]
          })]
        })]
      })
    })
  });
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItem,
  auth: state.auth
});

/* harmony default export */ const Checkout_StepOne = ((0,external_react_redux_.connect)(mapStateToProps)((0,i18n.withTranslation)("common")(StepOne)));
// EXTERNAL MODULE: ./components/layout/partials/Header.js
var partials_Header = __webpack_require__(5773);
;// CONCATENATED MODULE: ./components/Pages/Checkout/StepTwo.jsx





 // import Axios from "axios";
// import Modal from "react-bootstrap/Modal";

function StepTwo(props) {
  const {
    t,
    styles,
    val
  } = props;

  const submitHandler = () => {
    props.changeStep();
  }; // const coupon_modal = React.createRef();
  // const [show, setShow] = useState(false);
  // const [flag,setFlag] = useState(null);


  const {
    0: coupon,
    1: setCoupon
  } = (0,external_react_.useState)(props.val.coupon);
  const {
    0: adminAccount,
    1: setAdminAccount
  } = (0,external_react_.useState)(); // const [paymentURL, setPaymentURL] = useState(null);
  // const [auth, setAuth] = useState({isAuthenticated:null,user:null});
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  (0,external_react_.useEffect)(() => {
    setAdminAccount(window.localStorage.getItem("auth_token") && !JSON.parse(window.localStorage.getItem("user")).isCustomer);
    window.scrollTo(0, 0); // Axios.get("/v2/InitiateSession").then(({ data }) => {
    //   if (data.IsSuccess) {
    //     var config = {
    //       countryCode: data.Data.CountryCode, // Here, add your Country Code you receive from InitiateSession Endpoint.
    //       sessionId: data.Data.SessionId, // Here you add the "SessionId" you receive from InitiateSession Endpoint.
    //       cardViewId: "card-element",
    //     };
    //     setTimeout(function () {
    //       myFatoorah.init(config);
    //     }, 800);
    //   } else {
    //     window.alert("Payment Initiate Failed")
    //   }
    // }).catch(function (error) {
    //   console.error(error);
    // });
  }, []); // useEffect(() => {
  //   if (props.auth.isAuthenticated) {
  //     setAuth({ isAuthenticated: props.auth.isAuthenticated, user: JSON.parse(localStorage.getItem("user")) });
  //   }
  // }, [props.auth]);
  // useEffect(() =>{
  //   if(props.val.coupon && props.val.coupon !== ""){
  //     setFlag(true);
  //   }
  // },[props.val.coupon]);
  // useEffect(() =>{
  //   if(props.msg){
  //     setShow(true);
  //   }
  // },[props.msg]);

  const deliveryHandler = e => {
    // if (e.target.value == "op") {
    //   document.getElementById("card-element").classList.remove('d-none');
    // } else {
    //   document.getElementById("card-element").classList.add('d-none');
    // }
    props.deliviryHandler(e.target.value);
  }; // const applyCoupon = (e) => {
  //   e.preventDefault();
  //   if(coupon !== ""){
  //     props.couponHandler(coupon);
  //   }
  // }
  // const myFatoorahSubmit = () => {
  //   myFatoorah.submit()
  //     // On success
  //     .then(function (response) {
  //       // Here you need to pass session id to you backend here
  //       var sessionId = response.SessionId;
  //       var cardBrand = response.CardBrand;
  //       Axios.post('/v2/ExecutePayment', {
  //         SessionId: sessionId,
  //         InvoiceValue: 10,
  //         CustomerName: val.customer_first_name,
  //         DisplayCurrencyIso: "KWD",
  //         MobileCountryCode: val.country_code,
  //         CustomerMobile: val.customer_phone,
  //         CustomerEmail: val.customer_email,
  //         CallBackUrl: "https://beautybooth.shop/checkout",
  //         ErrorUrl: "https://beautybooth.shop/checkout",
  //         Language: "en",
  //         CustomerReference: "noshipping-nosupplier",
  //         CustomerAddress: {
  //           Block: "string",
  //           Street: "string",
  //           HouseBuildingNo: "string",
  //           AddressInstructions: "string"
  //         },
  //         InvoiceItems: [
  //           {
  //             ItemName: "item name",
  //             Quantity: 10,
  //             UnitPrice: 1
  //           }
  //         ]
  //       }).then(({ data }) => {
  //         if (data.IsSuccess) {
  //           setPaymentURL(data.Data.PaymentURL);
  //           if (data.Data.PaymentURL) {
  //             document.getElementById("paymentURL").classList.remove("d-none");
  //           } else {
  //             document.getElementById("paymentURL").classList.add("d-none");
  //           }
  //         } else {
  //           document.getElementById("paymentURL").classList.add("d-none");
  //         }
  //       })
  //     })
  //     // In case of errors
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }


  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: styles.step_two,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(partials_Header.default, {
          text: t("PAYMENT METHOD")
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(atom_ProgressBar, {
        styles: styles,
        active: 2
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: styles.details,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: styles.question,
          children: t("How do you want to pay your order?")
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-4 col-md-12",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: `${styles.payment_group} mt-4`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.wrap,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                  htmlFor: "cod",
                  children: [t("CASH ON DELIVERY"), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    defaultChecked: props.payment_method == "cod" ? true : false,
                    type: "radio",
                    name: "payment_method",
                    onChange: deliveryHandler,
                    value: "cod",
                    id: "cod"
                  })]
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: `${styles.payment_group} mt-4`,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.wrap,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("label", {
                  htmlFor: "op",
                  children: [t("ONLINE PAYMENT"), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    defaultChecked: props.payment_method == "op" ? true : false,
                    type: "radio",
                    onChange: deliveryHandler,
                    name: "payment_method",
                    value: "op",
                    id: "op"
                  })]
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: ` ${styles.next_btn_wrap} mt-5 mb-5`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: () => props.prevStep(),
            className: "next_btn",
            children: t("Previous")
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: submitHandler,
            className: "next_btn",
            children: t("Next")
          })]
        })]
      })]
    })
  });
}

/* harmony default export */ const Checkout_StepTwo = ((0,i18n.withTranslation)("common")(StepTwo));
// EXTERNAL MODULE: ./components/atom/Loader.jsx
var Loader = __webpack_require__(3921);
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(2047);
// EXTERNAL MODULE: external "react-id-swiper"
var external_react_id_swiper_ = __webpack_require__(443);
;// CONCATENATED MODULE: ./components/Pages/Checkout/GiftCard.jsx





function GiftCard_GiftCard({
  img,
  name,
  id,
  price,
  giftHandler
}) {
  const tapHandler = () => {
    giftHandler(id, name, price, img);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "gift__card",
    style: {
      cursor: "pointer",
      display: "flex",
      boxShadow: "0px 2px 5px 1px rgba(0,0,0,0.15)",
      padding: "5px 8px",
      borderRadius: 4,
      margin: 5,
      alignItems: "center"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
      style: {
        width: 60,
        height: 60,
        marginRight: 8
      },
      src: img,
      alt: ""
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "name__price",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "name",
        children: name
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "price",
        children: [/*#__PURE__*/jsx_runtime_.jsx("del", {
          children: price
        }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            marginLeft: 10
          },
          children: "QAR 0.00"
        })]
      })]
    })]
  });
}

/* harmony default export */ const Checkout_GiftCard = (GiftCard_GiftCard);
;// CONCATENATED MODULE: ./components/Pages/Checkout/FreeGift.jsx




function FreeGift_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function FreeGift_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { FreeGift_ownKeys(Object(source), true).forEach(function (key) { FreeGift_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { FreeGift_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FreeGift_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function FreeGift({
  Header,
  headerText,
  gifts,
  cartTotal,
  giftHandler
}) {
  const {
    0: filterGifts,
    1: setFilterGifts
  } = useState();
  useEffect(() => {
    setFilterGifts(gifts.filter(gift => cartTotal >= gift.free_gift.cart_min && cartTotal <= gift.free_gift.cart_max));
  }, [cartTotal]);
  const {
    0: swiper,
    1: updateSwiper
  } = useState(null);
  const params = {
    // loop: true,
    // lazy: true,
    observer: true,
    observeParents: true,
    // preventClicks: false,
    // preventClicksPropagation: false,
    slidesPerView: 3.5,
    spaceBetween: 20,
    breakpoints: {
      992: {
        slidesPerView: 3.5,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 2.5,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 2
      },
      320: {
        slidesPerView: 1.3,
        spaceBetween: 1
      }
    }
  };
  return /*#__PURE__*/_jsx("div", {
    className: "free__gift",
    children: filterGifts && /*#__PURE__*/_jsxs(_Fragment, {
      children: [/*#__PURE__*/_jsx(Header, {
        text: headerText
      }), /*#__PURE__*/_jsx(Swiper, FreeGift_objectSpread(FreeGift_objectSpread({
        getSwiper: updateSwiper
      }, params), {}, {
        shouldSwiperUpdate: true,
        children: filterGifts.map(gift => /*#__PURE__*/_jsx("div", {
          children: /*#__PURE__*/_jsx(GiftCard, {
            img: gift.files[0].thumbnail_image,
            name: gift.name,
            id: gift.id,
            price: gift.selling_price.formatted,
            giftHandler: giftHandler
          })
        }, gift.id))
      }))]
    })
  });
}

/* harmony default export */ const Checkout_FreeGift = ((/* unused pure expression or super */ null && (FreeGift)));
;// CONCATENATED MODULE: ./components/Pages/Checkout/StepThree.jsx
















function StepThree(props) {
  const {
    t,
    styles
  } = props;
  const {
    0: gifts,
    1: setGifts
  } = (0,external_react_.useState)();
  const {
    0: giftProduct,
    1: setGiftProduct
  } = (0,external_react_.useState)();
  const {
    0: express,
    1: setExpress
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    customer_first_name,
    customer_email,
    order_schedule,
    billing_address_1,
    shipping_cost,
    discount,
    store_pickup
  } = props.data;
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);

  const submitHandler = () => {
    window.scrollTo(0, 0);
    setLoading(true); // if (giftProduct) {
    //   props.orderSubmit(giftProduct.id);
    // } else {
    //   props.orderSubmit();
    // }

    props.orderSubmit();
  };

  const handleExpressDelivery = e => {
    setExpress(e.target.checked);
  };

  const DateRange = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const month = months[today.getMonth()];
    const dim = daysInMonth(today.getFullYear(), today.getMonth());
    let from = today.getDate();
    let to = today.getDate() + 3;

    if (to <= dim) {
      from = `${number_suffix(from, dim)}`;
      to = `${number_suffix(to, dim)} ${month}`;
    } else {
      from = `${number_suffix(from, dim)} ${month}`;
      const dim2 = daysInMonth(today.getFullYear(), today.getMonth() + 1);
      to = `${number_suffix(to - dim, dim2)} ${months[today.getMonth() + 1]}`;
    }

    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      dangerouslySetInnerHTML: createMarkup( // `Delivery Within ${from} ~ ${to}`
      `Regular Flexible Delivery within ${from} ~ ${to}`)
    });
  };

  function number_suffix(i, dim) {
    /**
     * this function will add th, nd, rd, st suffix with dates
     */
    let j = i % 10,
        k = i % dim; // if(i <= dim){

    if (j == 1 && k != 11) {
      return i + "<sup>st</sup>";
    }

    if (j == 2 && k != 12) {
      return i + "<sup>nd</sup>";
    }

    if (j == 3 && k != 13) {
      return i + "<sup>rd</sup>";
    }

    return i + "<sup>th</sup>";
  }

  const createMarkup = data => {
    return {
      __html: data
    };
  };

  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  (0,external_react_.useEffect)(() => {
    let locale = props.lang === "en" ? "en" : "ar_QA" || 0;
    axios/* default.get */.Z.get(`${locale}/getdata/free_gift`).then(res => {
      if (res.data.length > 0) {
        // need price range check here
        setGifts(res.data);
      }
    });
  }, []);

  const giftHandler = (id, name, price, img) => {
    setGiftProduct({
      id,
      name,
      price,
      img
    });
  };

  const resetHandler = () => {
    setGiftProduct();
  };

  const priceCalculate = item => {
    if (item.bulk_id && !props.data.coupon) {
      return item.qnt * item.price.amount - item.qnt * item.price.amount * item.parcent / 100;
    } else {
      return item.qnt * item.price.amount;
    }
  };

  const customSubTotal = () => {
    let value = props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0);
    return value;
  };

  function floorAmount(amount, parcent, qnt) {
    let total = 0;
    let i = 0;

    for (i; i < qnt; i++) {
      total += Math.floor(amount - amount * parcent / 100);
    }

    return total;
  }

  function grandTotal() {
    return props.cartItems.reduce((acc, item) => item.bulk_id && !props.data.coupon ? acc += floorAmount(item.price.amount, item.parcent, item.qnt) : acc += item.qnt * item.price.amount, 0);
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: loading ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        marginTop: 200
      },
      className: "loader",
      children: /*#__PURE__*/jsx_runtime_.jsx(Loader.default, {})
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: styles.step_three,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "text-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(partials_Header.default, {
            text: t("INVOICE")
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(atom_ProgressBar, {
          styles: styles,
          active: 3,
          online: props.data.payment_method == "op"
        }), props.giftProduct && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            maxWidth: 350,
            margin: "30px auto"
          },
          children: [" ", /*#__PURE__*/jsx_runtime_.jsx(Checkout_GiftCard, {
            name: props.giftProduct.name,
            img: props.giftProduct.image
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              textAlign: "center",
              display: "block"
            },
            children: "We will add this product as a gift to your cart!"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              textAlign: "center"
            }
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: styles.invoice,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: styles.invoice_title,
            children: t("Check your orders before you place order")
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: styles.customer_info,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: styles.label,
                  children: [t("Customer Name"), ":"]
                }), " ", customer_first_name]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: styles.label,
                  children: [t("Delivery Address"), ":"]
                }), " ", billing_address_1]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: styles.label,
                  children: [t("Delivery Schedule"), ":"]
                }), " ", order_schedule]
              })]
            })
          }), external_react_device_detect_.isMobile ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
            className: "table table-bordered table-striped",
            children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "#"
                }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "Product Name"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
              children: props.cartItems.map((cartItem, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: index + 1
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                  children: [cartItem.name, cartItem.option_value ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      style: {
                        color: "#f37"
                      },
                      children: cartItem.option_value
                    })]
                  }) : "", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    style: {
                      color: "grey"
                    },
                    children: ["Qty: ", cartItem.qnt, " | Price:", " ", cartItem.price.formatted, " | Sum:", cartItem.price.currency + " " + parseInt(cartItem.qnt * cartItem.price.amount), ".00"]
                  })]
                })]
              }, index))
            })]
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
            className: "table table-bordered table-striped",
            children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: "#"
                }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: t("Product Name")
                }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: t("Quantity")
                }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: t("Price")
                }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                  children: t("Total")
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
              children: props.cartItems.map((cartItem, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: index + 1
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                  children: [cartItem.name, /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", cartItem.option_value]
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: cartItem.qnt
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: cartItem.price.formatted
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                  children: [cartItem.price.currency + " " + (0,helper.test)(cartItem, props.data.coupon), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
                })]
              }, index))
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: styles.table_footer,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: styles.left,
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/jsx_runtime_.jsx(DateRange, {})
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: styles.right,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `${styles.charge} ${styles.common}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: t("Delivery Charge")
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  children: [" ", store_pickup ? "00" : express ? 20 : props.shipping, ".00"]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `${styles.grand_total} ${styles.common}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: t("Sub Total")
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  children: [(0,helper.priceWithoutDiscount)(props.cartItems), ".00"]
                })]
              }), discount > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `${styles.charge} ${styles.common}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  style: {
                    textTransform: "capitalize"
                  },
                  children: t("DISCOUNT")
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  children: ["-", discount, ".00"]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `${styles.grand_total} ${styles.common}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: t("Grand Total")
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: parseInt((0,helper.calculateSubTotal)(props.cartItems, props.data.coupon) + (store_pickup ? 0 : express ? 20 : parseInt(props.shipping)) - parseInt(discount)).toFixed(2)
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `${styles.payment_status} ${styles.common}`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: t("Payment Status")
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: t("unpaid")
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: styles.place_order_container,
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "mr-2",
              onClick: () => props.prevStep(),
              children: t("Back")
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: submitHandler,
              children: t("PLACE ORDER")
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
            className: "text-center",
            children: ["BY HITTING THE PLACE ORDER BUTTON YOU ALSO ACCEPT OUR", " ", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/terms-and-conditions",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "TERMS AND CONDITION"
              })
            })]
          })]
        })]
      })
    })
  });
}

const StepThree_mapStateToProps = state => ({
  cartItems: state.cart.cartItem
});

/* harmony default export */ const Checkout_StepThree = ((0,external_react_redux_.connect)(StepThree_mapStateToProps)((0,i18n.withTranslation)("common")(StepThree)));
// EXTERNAL MODULE: ./components/atom/HeaderComponent.jsx
var HeaderComponent = __webpack_require__(7040);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(7789);
;// CONCATENATED MODULE: ./components/Pages/Checkout/StepFour.jsx










function StepFour({
  order,
  t,
  styles
}) {
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)();
  const {
    0: confirmPassword,
    1: setConfirmPassword
  } = (0,external_react_.useState)();
  const {
    0: success,
    1: setSuccess
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitHandler = e => {
    e.preventDefault();

    if (confirmPassword == password) {
      let data = {
        password,
        confirm_password: confirmPassword,
        order
      };
      axios/* default.post */.Z.post("en/auth/post-order-register", data).then(res => {
        setSuccess(true);
        alert("Your account has been created");
      }).catch(err => {
        if (err.response) {
          alert(err.response.data.message);
        } else {
          alert("We're sorry but this operation cannot be completed now");
        }
      });
    } else {
      alert("password doesn't match");
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: styles.step_four,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-2"
        }), localStorage.getItem("user") && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-lg-1"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-5",
          children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderComponent/* default */.Z, {
            text: t("CONFIRMATION")
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: styles.circle,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faCheck
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: styles.greet,
            children: t("Thank you for shopping with us")
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: styles.greet,
            children: [t("Your ORDER ID is "), order, " "]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: styles.greet,
            children: t("Order will be processed with 24-72 hours after confirmation")
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "continue_container",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: t("Back To Shopping")
              })
            })
          })]
        }), !localStorage.getItem("user") && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderComponent/* default */.Z, {
            text: "Set password "
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            onSubmit: submitHandler,
            children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
              children: "Set password for future login with the email you have ordered now!"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group my-4",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "exampleInputPassword1",
                children: "Password"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                required: true,
                type: "password",
                className: "form-control",
                id: "exampleInputPassword1",
                placeholder: "Password",
                name: "password",
                value: password,
                onChange: e => setPassword(e.target.value)
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "form-group my-4",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "exampleInputPassword1",
                children: "Confirm Password"
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                required: true,
                type: "password",
                className: "form-control",
                id: "exampleInputPassword1",
                placeholder: "Confirm  Password",
                name: "confirmPassword",
                value: confirmPassword,
                onChange: e => setConfirmPassword(e.target.value)
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              type: "submit",
              className: "btn btn-block btn-outline-success my-3",
              disabled: success,
              children: "Submit"
            })]
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const Checkout_StepFour = ((0,external_react_i18next_.withTranslation)("common")(StepFour));
// EXTERNAL MODULE: ./redux/actions/authActions.js
var authActions = __webpack_require__(6808);
// EXTERNAL MODULE: external "react-bootstrap/Modal"
var Modal_ = __webpack_require__(4336);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "react-otp-input"
var external_react_otp_input_ = __webpack_require__(2512);
var external_react_otp_input_default = /*#__PURE__*/__webpack_require__.n(external_react_otp_input_);
// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(8993);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
;// CONCATENATED MODULE: ./components/Pages/Checkout/StepZero.jsx
















const cookies = new (external_universal_cookie_default())();

function StepZero({
  loginUser,
  auth,
  setLoginError,
  history,
  numberHnadler,
  changeStep,
  stepZeroSubmit,
  logout,
  cartItems,
  t,
  styles
}) {
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)("");
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)("");
  const {
    0: otp_id,
    1: setOtpId
  } = (0,external_react_.useState)("");
  const {
    0: otp,
    1: setOtp
  } = (0,external_react_.useState)("");
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  const otp_modal = /*#__PURE__*/external_react_default().createRef();
  const {
    0: showLogin,
    1: setShowLogin
  } = (0,external_react_.useState)(false);
  const {
    0: resendCounter,
    1: setResendCounter
  } = (0,external_react_.useState)(false);
  const {
    0: counter,
    1: setCounter
  } = (0,external_react_.useState)(59);
  (0,external_react_.useEffect)(() => {
    if (auth.isAuthenticated) {
      setShowLogin(true);
      external_axios_default().get("/api/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth_token") || ""}`
        }
      }).then(res => {
        setShowLogin(false);
        setLoginError("");
        const len = res.data.order ? res.data.order.length - 1 : null;
        stepZeroSubmit(res.data.order ? res.data.order[len] : null);
      }).catch(err => {
        if (err.response.status === 500) {
          logout();
        }
      });
    } else if (!auth.isAuthenticated && auth.error !== "") {
      window.alert(auth.error);
    }
  }, [auth]);
  (0,external_react_.useEffect)(() => {
    const timer = counter > 0 && setInterval(() => {
      setCounter(counter - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [counter, resendCounter]);
  (0,external_react_.useEffect)(() => {
    if ((cartItems === null || cartItems === void 0 ? void 0 : cartItems.length) <= 0) {
      try {
        history.push("/");
      } catch (error) {
        window.location.href = "/";
      }
    }
  }, [cartItems]);

  const Loginsubmit = e => {
    e.preventDefault(); // let form = new FormData();
    // form.append("email", email);
    // form.append("password", password);

    loginUser({
      email,
      password
    });
  };

  const valueHandler = value => {
    setValue(value);
  };

  const numberInput = () => {
    let locale = cookies.get("lang") === "en" ? "en" : "ar_QA" || 0;
    const phone = (0,external_react_phone_number_input_.parsePhoneNumber)(value);
    axios/* default.post */.Z.post(`${locale}/checkout/verify/check-number-api`, {
      cell_no: phone.nationalNumber,
      country_code: phone.countryCallingCode
    }).then(res => {
      if (res.data === false) {
        setShow(true);
        setResendCounter(true);
        setCounter(59);
        axios/* default.post */.Z.post(`${locale}/checkout/verify/now`, {
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
        if (!auth.isAuthenticated) {
          axios/* default.post */.Z.post(`${locale}/checkout/last-order`, {
            country_code: "+" + phone.countryCallingCode,
            customer_phone: phone.nationalNumber
          }).then(res => {
            numberHnadler(phone, res.data.data);
          }).catch(() => {
            numberHnadler(phone);
          });
        }
      }
    }).catch(err => console.log(err)); // numberHnadler(phone);
  };

  const proceedVerify = () => {
    let locale = cookies.get("lang") === "en" ? "en" : "ar_QA" || 0;

    if (show) {
      const phone = (0,external_react_phone_number_input_.parsePhoneNumber)(value);
      axios/* default.post */.Z.post(`${locale}/checkout/verify/final`, {
        cell_no: phone.nationalNumber,
        country_code: "+" + phone.countryCallingCode,
        otp: otp,
        id: otp_id
      }).then(res => {
        if (res.data === "success") {
          setShow(false);
          numberHnadler(phone);
        } else {
          numberInput();
        }
      });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: styles.step_zero,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: styles.step_zero_title,
        children: t("Please Choose a Checkout Method")
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: styles.methods,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: styles.method_one,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: t("REGISTERED USERS")
              }), !showLogin ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                onSubmit: Loginsubmit,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "email",
                    children: t("Email address")
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "email",
                    className: "form-control",
                    id: "email",
                    name: "email",
                    value: email,
                    onChange: e => {
                      setEmail(e.target.value);
                    },
                    placeholder: t("Enter email")
                  }), /*#__PURE__*/jsx_runtime_.jsx("small", {
                    id: "emailHelp",
                    className: "form-text text-muted",
                    children: t("We'll never share your email with anyone else")
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    htmlFor: "exampleInputPassword1",
                    children: t("Password")
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "password",
                    className: "form-control",
                    id: "password",
                    value: password,
                    onChange: e => {
                      setPassword(e.target.value);
                    },
                    placeholder: t("Password")
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: styles.submit_wrapper,
                  children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                    type: "submit",
                    className: styles.login_submit,
                    children: t("login")
                  })
                })]
              }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "spinner-border text-danger",
                  role: "status"
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
                  children: t("Validating your login once again")
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: styles.method_two,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: t("GUEST CHECKOUT")
              }), /*#__PURE__*/jsx_runtime_.jsx((external_react_phone_number_input_default()), {
                international: true,
                defaultCountry: "QA",
                value: value,
                onChange: valueHandler // error={
                //   value
                //     ? isValidPhoneNumber(value)
                //       ? undefined
                //       : "Invalid phone number"
                //     : "Phone number required"
                // }

              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.phone_submit_wrapper,
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  disabled: value && (0,external_react_phone_number_input_.isValidPhoneNumber)(value) ? false : true,
                  type: "submit",
                  className: styles.phone_proceed,
                  onClick: numberInput,
                  children: t("Proceed")
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Modal_default()), {
        show: show,
        size: "sm",
        centered: true,
        ref: otp_modal,
        children: [/*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Header, {
          children: /*#__PURE__*/jsx_runtime_.jsx("h6", {
            children: "Enter the OTP we sent to your given number"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Modal_default()).Body, {
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_otp_input_default()), {
            isInputNum: true,
            value: otp,
            onChange: e => {
              setOtp(e);
            } // inputStyle={{ width: '2rem' }}
            ,
            containerStyle: "otp",
            numInputs: 4 // separator={<span>-</span>}

          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Modal_default()).Footer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "btn btn-secondary",
            onClick: () => setShow(false),
            children: "Close"
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "button",
            className: "btn btn-primary",
            onClick: proceedVerify,
            children: "Verify"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            type: "button",
            className: "btn btn-info",
            onClick: numberInput,
            disabled: counter < 1 ? false : true,
            children: ["Resend ", resendCounter && counter > 1 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: ["(", counter, ")"]
            })]
          })]
        })]
      })]
    })
  });
}

const StepZero_mapStateToProps = state => ({
  auth: state.auth,
  cartItems: state.cart.cartItem
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser: userInfo => (0,authActions/* loginUser */.pH)(dispatch, userInfo),
    logout: () => (0,authActions/* logoutUser */.TX)(dispatch),
    setLoginError: () => (0,authActions/* setLoginError */.Zw)(dispatch)
  };
};

/* harmony default export */ const Checkout_StepZero = ((0,external_react_redux_.connect)(StepZero_mapStateToProps, mapDispatchToProps)((0,i18n.withTranslation)("common")(StepZero)));
// EXTERNAL MODULE: ./styles/CheckoutPage.module.scss
var CheckoutPage_module = __webpack_require__(963);
var CheckoutPage_module_default = /*#__PURE__*/__webpack_require__.n(CheckoutPage_module);
// EXTERNAL MODULE: ./components/utils/gtm.js
var gtm = __webpack_require__(7995);
;// CONCATENATED MODULE: ./pages/checkout/index.jsx




function checkout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function checkout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkout_ownKeys(Object(source), true).forEach(function (key) { checkout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















 // import "../../assets/sass/checkout.scss";

function Checkout(props) {
  const router = (0,router_.useRouter)();
  const {
    0: giftProduct,
    1: setGiftProduct
  } = (0,external_react_.useState)( false ? 0 : null);
  const {
    0: method,
    1: setMethod
  } = (0,external_react_.useState)();
  const {
    0: step,
    1: setStep
  } = (0,external_react_.useState)(0);
  const {
    0: msg,
    1: setMsg
  } = (0,external_react_.useState)(null);
  const {
    0: shipping,
    1: setShipping
  } = (0,external_react_.useState)(10);
  const {
    0: subTotal,
    1: setSubTotal
  } = (0,external_react_.useState)(props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0));
  const {
    0: newOrder,
    1: setNewOrder
  } = (0,external_react_.useState)(null);
  const {
    0: stepOneValue,
    1: setStepOneValue
  } = (0,external_react_.useState)({
    customer_first_name: "",
    customer_email: "",
    // active: false,
    billing_address_1: "",
    billing_state: "",
    billing_address_2: "",
    billing_city: "",
    billing_country: "QA",
    order_schedule: "morning",
    customer_phone: "",
    country_code: "",
    shipping_method: "flat_rate",
    shipping_cost: parseInt(shipping),
    payment_method: "cod",
    terms_and_conditions: "accepted",
    order_note: "",
    store_pickup: false,
    coupon:  false ? 0 : "",
    coupon_id:  false ? 0 : "",
    discount:  false ? 0 : 0,
    //blue plate
    building: "",
    street: "",
    zone: ""
  });

  const numberHnadler = (phone, last = null) => {
    if (stepOneValue.coupon_id || stepOneValue.coupon || stepOneValue.discount) {
      couponHandler(stepOneValue.coupon);
    }

    if (last) {
      setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
        customer_email: last.customer_email,
        customer_first_name: last.customer_first_name,
        billing_address_1: last.billing_address_1,
        billing_address_2: last.billing_address_2,
        billing_city: last.billing_city,
        billing_state: last.billing_state,
        customer_phone: phone.nationalNumber,
        country_code: "+" + phone.countryCallingCode
      }));
    } else {
      setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
        customer_phone: phone.nationalNumber,
        country_code: "+" + phone.countryCallingCode
      }));
    }

    setStep(step + 1);
  };

  const checkBoxHandler = () => {
    setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
      active: !stepOneValue.active,
      building: "",
      street: "",
      zone: ""
    }));
  };

  const storePicupHandler = () => {
    setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
      store_pickup: !stepOneValue.store_pickup
    }));
  };

  const radioHandler = value => {
    setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
      order_schedule: value
    }));
  };

  const changeStep = data => {
    setMsg(null);
    setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), data));
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const deliviryHandler = payment_method => {
    setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
      payment_method
    }));
  }; // text area handler


  const testAreaHandler = value => {
    setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
      order_note: value
    }));
  }; //step zero submit


  const stepZeroSubmit = (order = null) => {
    let user = JSON.parse(window.localStorage.getItem("user"));

    if (stepOneValue.coupon_id || stepOneValue.coupon || stepOneValue.discount) {
      couponHandler(stepOneValue.coupon);
    }

    let customer_email = window.localStorage.getItem("auth_token") && !user.isCustomer ? "noemail@beautybooth.com" : user.email;
    let customer_first_name = window.localStorage.getItem("auth_token") && !user.isCustomer ? "" : user.first_name;

    if (order && window.localStorage.getItem("auth_token") && user.isCustomer) {
      let values = {
        customer_email: user.email,
        customer_first_name: order.customer_first_name,
        billing_address_1: order.billing_address_1,
        billing_address_2: order.billing_address_2,
        billing_city: order.billing_city,
        billing_state: order.billing_state,
        customer_phone: order.customer_phone,
        country_code: order.country_code
      };
      setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), values));
    } else {
      setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
        customer_email,
        customer_first_name
      }));
    }

    setStep(step + 1);
  }; // coupon handler


  const couponHandler = coupon => {
    const pattern = /((\bINF)-(\d[0-9]*)-(\bBB$))/;

    if (pattern.test(coupon.toString())) {
      if (props.auth.isAuthenticated && localStorage.getItem("coupon_id") != "influencer") {
        axios/* default.defaults.headers.common.Authorization */.Z.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("auth_token") || ""}`;
        axios/* default.post */.Z.post("en/auth/rewards/calculate", {
          subTotal,
          coupon
        }).then(res => {
          let userId = coupon.split("-")[1];
          setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
            coupon,
            coupon_id: userId * 100,
            discount: res.data.discount
          }));
          setSubTotal(props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0) - res.data.discount); // localStorage.setItem("coupon_id", "influencer");

          localStorage.setItem("discount", res.data.discount);
          localStorage.setItem("coupon", coupon);
        }).catch(err => {});
      }
    } else {
      let cart = props.cartItems.map(item => {
        return {
          product_id: item.product_id,
          price: item.price.amount,
          qty: item.qnt,
          option: item.option_main_id || null,
          option_child: item.option_id || null
        };
      });
      let email = props.auth.isAuthenticated ? JSON.parse(props.auth.user).email : null;
      axios/* default.post */.Z.post("en/checkout/coupon", {
        api: true,
        cart,
        coupon,
        email
      }).then(res => {
        setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
          coupon,
          coupon_id: res.data.coupon_id,
          discount: res.data.discount
        }));
        setSubTotal(props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0) - res.data.discount);
        localStorage.setItem("coupon_id", res.data.coupon_id);
        localStorage.setItem("discount", res.data.discount);
        localStorage.setItem("coupon", coupon);
        setMsg(res.data.msg);
      }).catch(err => {
        setMsg(err.response.data);
        localStorage.removeItem("coupon");
        localStorage.removeItem("coupon_id");
        localStorage.removeItem("discount");
        setStepOneValue(checkout_objectSpread(checkout_objectSpread({}, stepOneValue), {}, {
          coupon: "",
          coupon_id: "",
          discount: 0
        }));
      });
    }

    setTimeout(setMsg(null), 3000);
  }; //order submit


  const orderSubmit = () => {
    let cart = props.cartItems.map(item => {
      return {
        product_id: item.product_id,
        price: item.price.amount,
        qty: item.qnt,
        bulk_id: item["bulk_id"],
        option: item.option_main_id || null,
        option_child: item.option_id || null
      };
    });
    let data = [];

    if (method == "store_pickup") {
      let tmp = stepOneValue;
      tmp.shipping_method = "local_pickup";
      tmp.shipping_cost = 0;
      setStepOneValue(tmp);
    }

    if (method == "express") {
      let tmp = stepOneValue;
      tmp.shipping_method = "express_delivery";
      tmp.shipping_cost = 20;
      setStepOneValue(tmp);
    }

    if (method == "regular") {
      let tmp = stepOneValue;
      tmp.shipping_method = subTotal > 99 ? "free_shipping" : "flat_rate";
      tmp.shipping_cost = shipping;
      setStepOneValue(tmp);
    }

    data.push(stepOneValue);
    data.push(cart); // data.push({express_delivery: express});

    data.push({
      freeGift: giftProduct ? giftProduct.id : null
    });
    axios/* default.post */.Z.post("en/checkout/final", data).then(res => {
      if (res.data.msg == "success") {
        setNewOrder(res.data.order);
        /**
         * Fire the Purchase Event Start
         */

        let fbp = document.cookie.split(";").filter(c => c.includes("_fbp=")).map(c => c.split("_fbp=")[1]);
        let fbc = document.cookie.split(";").filter(c => c.includes("_fbc=")).map(c => c.split("_fbc=")[1]);
        fbp = fbp.length && fbp[0] || null;
        fbc = fbc.length && fbc[0] || null;

        if (!fbc && window.location.search.includes("fbclid=")) {
          fbc = "fb.1." + +new Date() + "." + window.location.search.split("fbclid=")[1];
        }

        external_axios_default().post("/event/checkout-success", {
          em: stepOneValue.customer_email,
          ph: stepOneValue.customer_phone,
          product: props.cartItems.map(c => {
            return {
              product_id: c.product_id,
              name: c.name,
              qty: c.qnt,
              price: c.price.amount
            };
          }),
          total: subTotal,
          eventName: "Purchase",
          eventNameSource: "https://beautyboothqa.com/",
          order_id: res.data.order,
          fbp,
          fbc
        });
        /**
         * Fire the Purchase Event End
         */
        // checkout dataLayer

        (0,gtm/* GTMCheckout */.FX)(props.cartItems);
        props.emptyCart();
        /**
         * fire for special coupons
         */

        if (stepOneValue.coupon_id != "" && stepOneValue.coupon_id !== parseInt(stepOneValue.coupon_id, 10) && localStorage.getItem("coupon_id") != "influencer") {
          (external_axios_default()).defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("auth_token") || ""}`;
          external_axios_default().post("/api/coupon/mark_used", {
            id: stepOneValue.coupon_id,
            email: stepOneValue.customer_email
          });
        }

        localStorage.removeItem("coupon");
        localStorage.removeItem("coupon_id");
        localStorage.removeItem("discount");
        localStorage.removeItem("gift");
        localStorage.removeItem("method");
        setTimeout(() => {
          //redirect
          window.location.href = `/checkout/order-received/${res.data.order}`; // setStep(step + 1);
        }, 500);
      }
    }).catch(err => {
      external_react_toastify_.toast.error(err.response.data.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: function () {
          router.push("/bag");
        }
      });
    });
  };

  (0,external_react_.useEffect)(() => {
    setSubTotal(props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0) - stepOneValue.discount);

    if (method == "store_pickup") {
      setShipping(0);
    } else if (method == "express") {
      setShipping(20);
    } else {
      if (subTotal < 100) {
        setShipping(10);
      } else {
        setShipping(0);
      }
    }
  }, [subTotal, props.cartItems, stepOneValue.discount]);
  (0,external_react_.useEffect)(() => {
    // setSubTotal(
    //   parseInt(parseInt(props.cartItems.reduce(
    //     (acc, item) => (acc += item.qnt * item.price.amount),
    //     0
    //   ))-parseInt(stepOneValue.discount))
    // );
    // if (parseInt(subTotal) < 100) {
    //   setShipping(10);
    // } else {
    //   setShipping(0);
    // }
    let formData = props.cartItems.map(item => {
      return {
        product_id: item.product_id,
        price: item.price.amount,
        qty: item.qnt,
        option: item.option_main_id || null,
        option_child: item.option_id || null
      };
    });

    if (localStorage.getItem("auth_token")) {
      let token = localStorage.getItem("auth_token");
      axios/* default.defaults.headers.common.Authorization */.Z.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    axios/* default.post */.Z.post("en/cartdata/items", formData).then(res => {
      res.data.map(value => {
        if (!value) {
          props.history.push("/bag");
        }
      });
    });
  }, [props.cartItems]);
  (0,external_react_.useState)(() => {
    setMethod( false ? 0 : "regular");

    if (false) {}
  }, []); // check giftproduct

  (0,external_react_.useEffect)(() => {
    let free = localStorage.getItem("gift");

    if (free) {
      let freeValue = JSON.parse(free);

      if (subTotal < freeValue.cart_min) {
        // not applicable
        setGiftProduct();
        localStorage.removeItem("gift");
      }
    }
  }, [subTotal]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Checkout | Beautyboothqa "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (CheckoutPage_module_default()).checkout_container,
      children: [step === 0 && /*#__PURE__*/jsx_runtime_.jsx(Checkout_StepZero, {
        numberHnadler: numberHnadler,
        changeStep: changeStep,
        stepZeroSubmit: stepZeroSubmit,
        styles: (CheckoutPage_module_default())
      }), step === 1 && /*#__PURE__*/jsx_runtime_.jsx(Checkout_StepOne, {
        changeStep: changeStep,
        checkBoxHandler: checkBoxHandler,
        radioHandler: radioHandler,
        val: stepOneValue,
        subTotal: subTotal,
        shipping: shipping,
        storePicupHandler: storePicupHandler,
        testAreaHandler: testAreaHandler,
        styles: (CheckoutPage_module_default())
      }), step === 2 && /*#__PURE__*/jsx_runtime_.jsx(Checkout_StepTwo, {
        prevStep: prevStep,
        payment_method: stepOneValue.payment_method,
        changeStep: changeStep,
        deliviryHandler: deliviryHandler,
        couponHandler: couponHandler,
        val: stepOneValue,
        auth: props.auth,
        msg: msg,
        styles: (CheckoutPage_module_default())
      }), step === 3 && /*#__PURE__*/jsx_runtime_.jsx(Checkout_StepThree, {
        prevStep: prevStep,
        changeStep: changeStep,
        orderSubmit: orderSubmit,
        data: stepOneValue,
        shipping: shipping,
        lang: props.lang,
        giftProduct: giftProduct,
        styles: (CheckoutPage_module_default())
      }), step === 4 && /*#__PURE__*/jsx_runtime_.jsx(Checkout_StepFour, {
        order: newOrder,
        styles: (CheckoutPage_module_default())
      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {})]
    })]
  });
}

const checkout_mapStateToProps = state => ({
  cartItems: state.cart.cartItem,
  auth: state.auth
});

const checkout_mapDispatchToProps = dispatch => {
  return {
    emptyCart: () => (0,cartAction/* emptyCart */.UY)(dispatch)
  };
};

/* harmony default export */ const checkout = ((0,external_react_redux_.connect)(checkout_mapStateToProps, checkout_mapDispatchToProps)(Checkout));

/***/ }),

/***/ 963:
/***/ ((module) => {

// Exports
module.exports = {
	"checkout_container": "CheckoutPage_checkout_container__3iYn2",
	"step_zero": "CheckoutPage_step_zero__2KC0G",
	"step_zero_title": "CheckoutPage_step_zero_title__2wkny",
	"method_one": "CheckoutPage_method_one__FnSJX",
	"login_submit": "CheckoutPage_login_submit__ijmL1",
	"method_two": "CheckoutPage_method_two__3x2aT",
	"phone_submit_wrapper": "CheckoutPage_phone_submit_wrapper__3g6L3",
	"submit_wrapper": "CheckoutPage_submit_wrapper__3LPBS",
	"step_one": "CheckoutPage_step_one__2K17F",
	"delivery_form": "CheckoutPage_delivery_form__Hbuot",
	"checkbox_label": "CheckoutPage_checkbox_label__2a8da",
	"form_title": "CheckoutPage_form_title__2G1b2",
	"deleviry_schedule": "CheckoutPage_deleviry_schedule__2_EFP",
	"form_group": "CheckoutPage_form_group__33prK",
	"info_wrap": "CheckoutPage_info_wrap__3MOW9",
	"info": "CheckoutPage_info__217DL",
	"submit_container": "CheckoutPage_submit_container__3Xgso",
	"proceed": "CheckoutPage_proceed__1Twow",
	"cart_list": "CheckoutPage_cart_list__2cfRb",
	"item_title": "CheckoutPage_item_title__2CmG5",
	"cart_item": "CheckoutPage_cart_item__OE4Ur",
	"details": "CheckoutPage_details__2_mUh",
	"img_wrap": "CheckoutPage_img_wrap__2hWh_",
	"detail": "CheckoutPage_detail__2iHby",
	"name": "CheckoutPage_name__385d8",
	"brand": "CheckoutPage_brand__10pue",
	"status": "CheckoutPage_status__1JNzz",
	"price_tag": "CheckoutPage_price_tag__3i_Q0",
	"delete_btn": "CheckoutPage_delete_btn__D4waV",
	"quantity": "CheckoutPage_quantity__1aczE",
	"button_group": "CheckoutPage_button_group__1zse9",
	"summery": "CheckoutPage_summery__1_rie",
	"summery_item": "CheckoutPage_summery_item__3D8__",
	"total": "CheckoutPage_total__1dP6m",
	"store_pickup": "CheckoutPage_store_pickup__2KeCg",
	"form-check": "CheckoutPage_form-check__2QvEg",
	"form-check-input": "CheckoutPage_form-check-input__KaBok",
	"form-check-label": "CheckoutPage_form-check-label__C4eC_",
	"shop__address": "CheckoutPage_shop__address__253Zw",
	"free": "CheckoutPage_free__2o0Df",
	"step_two": "CheckoutPage_step_two__3qXNw",
	"question": "CheckoutPage_question__IGVK1",
	"payment_group": "CheckoutPage_payment_group__6yUos",
	"wrap": "CheckoutPage_wrap__1nhfq",
	"next_btn_wrap": "CheckoutPage_next_btn_wrap__2Mjii",
	"step_three": "CheckoutPage_step_three__2Y5xz",
	"invoice": "CheckoutPage_invoice__2sucZ",
	"invoice_title": "CheckoutPage_invoice_title__1h1VF",
	"customer_info": "CheckoutPage_customer_info__1IXUg",
	"label": "CheckoutPage_label__3qV7t",
	"table_footer": "CheckoutPage_table_footer__3R7mk",
	"left": "CheckoutPage_left__3ZG4J",
	"right": "CheckoutPage_right__2czDs",
	"common": "CheckoutPage_common__Glh3G",
	"place_order_container": "CheckoutPage_place_order_container__15E-3",
	"step_four": "CheckoutPage_step_four__3AK93",
	"circle": "CheckoutPage_circle__1Mcis",
	"greet": "CheckoutPage_greet__16dW1",
	"continue_container": "CheckoutPage_continue_container__1G52p",
	"react-autowhatever-states": "CheckoutPage_react-autowhatever-states__2KJP6",
	"react-autowhatever-city": "CheckoutPage_react-autowhatever-city__2Jos5",
	"react-autosuggest__input": "CheckoutPage_react-autosuggest__input__lRt2B",
	"react-autosuggest__suggestions-list": "CheckoutPage_react-autosuggest__suggestions-list__2KKi_",
	"pregress_bar": "CheckoutPage_pregress_bar__1aj1G",
	"active": "CheckoutPage_active__3Hgs1"
};


/***/ }),

/***/ 483:
/***/ (() => {



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

/***/ 4336:
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap/Modal");

/***/ }),

/***/ 2047:
/***/ ((module) => {

"use strict";
module.exports = require("react-device-detect");

/***/ }),

/***/ 7789:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 443:
/***/ ((module) => {

"use strict";
module.exports = require("react-id-swiper");

/***/ }),

/***/ 2512:
/***/ ((module) => {

"use strict";
module.exports = require("react-otp-input");

/***/ }),

/***/ 6293:
/***/ ((module) => {

"use strict";
module.exports = require("react-phone-number-input");

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
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,434,3164,6808,5773,1843,571,8138,7995], () => (__webpack_exec__(1639)));
module.exports = __webpack_exports__;

})();