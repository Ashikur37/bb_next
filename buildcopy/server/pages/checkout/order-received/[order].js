(() => {
var exports = {};
exports.id = 9480;
exports.ids = [9480,2431,5660];
exports.modules = {

/***/ 9383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _order_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "dibsy-react"
const external_dibsy_react_namespaceObject = require("dibsy-react");
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./redux/actions/axios.js
var axios = __webpack_require__(6698);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(7789);
// EXTERNAL MODULE: ./styles/OrderRecived.module.scss
var OrderRecived_module = __webpack_require__(2319);
var OrderRecived_module_default = /*#__PURE__*/__webpack_require__.n(OrderRecived_module);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
;// CONCATENATED MODULE: ./pages/checkout/order-received/[order].jsx








 // import axios from "../../../redux/actions/axios";



const Header = dynamic_default()(() => __webpack_require__.e(/* import() */ 5773).then(__webpack_require__.bind(__webpack_require__, 5773)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5773)],
    modules: ["checkout/order-received/[order].jsx -> " + "../../../components/layout/partials/Header"]
  }
});
const PaymentStatus = dynamic_default()(() => __webpack_require__.e(/* import() */ 7335).then(__webpack_require__.bind(__webpack_require__, 7335)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7335)],
    modules: ["checkout/order-received/[order].jsx -> " + "../../../components/Pages/Checkout/PaymentStatus"]
  }
});





function StepFour({
  orderInfo,
  query,
  t,
  success
}) {
  console.log(orderInfo);
  const {
    0: canSubmit,
    1: setCanSubmit
  } = (0,external_react_.useState)(false);
  const {
    0: complete,
    1: setComplete
  } = (0,external_react_.useState)(false);
  const {
    0: method,
    1: setMethod
  } = (0,external_react_.useState)("creditcard");
  const {
    0: paymentFailed,
    1: setPaymentFailed
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();
  const {
    order
  } = query;
  (0,external_react_.useEffect)(() => {
    if (success == "true") {
      axios/* default.post */.Z.post("/en/checkout/save_payment_id", {
        order_id: orderInfo.id
      }).then(res => {
        if (orderInfo.status == "canceled") {
          setComplete(false);
          setPaymentFailed(true);
        } else {
          setComplete(true);
        }
      }).catch(() => {
        window.alert("There are some problems with the payment id. please contact support");
      });
    }
  }, []);

  function onSubmit(e, submitPayment) {
    e.preventDefault(); // Initialize the payment and submit the payment token.

    axios/* default.post */.Z.post(`/en/checkout/payment/${order}`, {
      method: method
    }).then(res => {
      console.log(res.data.data);

      if (method == "debitcard") {
        window.open(res.data.data._links.checkout.href);
      } else {
        var _res$data, _res$data$data;

        if (res !== null && res !== void 0 && (_res$data = res.data) !== null && _res$data !== void 0 && (_res$data$data = _res$data.data) !== null && _res$data$data !== void 0 && _res$data$data.paymentToken) {
          // Submit the Payment
          submitPayment(res.data.data.paymentToken);
        } else {
          console.log("Error while initiating payment");
        }
      }
    }).catch(error => console.log(error));
  }

  function onPaymentComplete(success, payment) {
    console.log("on payment success");

    if (success) {
      axios/* default.post */.Z.post("/en/checkout/save_payment_id", {
        order_id: orderInfo.id
      }).then(res => {
        console.log("success");
        setComplete(true);
      }).catch(() => {
        window.alert("There are some problems with the payment id. please contact support");
      });
    } else {
      window.alert("There are some problems with the payment id. please contact support");
    } // console.log(success, payment);
    // console.log(success);

  }

  const buttonHandler = value => {
    setMethod(value);
  };

  const radioHandler = value => {
    setMethod(value);
  };

  const checkStatus = () => {
    if (orderInfo.status == "pending_payment") {
      return true;
    } else if (orderInfo.status == "canceled") {
      return true;
    } else {
      return false;
    }
  }; // useEffect(() => {
  //   if (paymentId /*&& (c_order.status == "Pending" || c_order.status == "Pending Payment")*/) {
  //     if (paymentDetails.Data?.InvoiceTransactions.length > 0) {
  //       axios.post('/en/checkout/save_payment_id', {
  //         order_id: parseInt(paymentDetails.Data.UserDefinedField),
  //         payment_id: paymentId,
  //         paid_amount: paymentDetails.Data.InvoiceStatus == "Paid" ? paymentDetails.Data.InvoiceValue : 0
  //       });
  //     }
  //   }
  // }, [paymentId]);


  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (OrderRecived_module_default()).step_four,
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Order Received | Beautyboothqa "
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-center mt-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
          text: t("CONFIRMATION")
        }), paymentFailed && /*#__PURE__*/jsx_runtime_.jsx("h5", {
          className: "font-weight-bold text-center mb-3",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-danger",
              children: "Your Payment is Failed!"
            }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-success",
              children: "But your order is confirmed."
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Please check your email from the Beauty booth and click Pay now it will be redirected to the payment link. For further assistance please contact our customer support team by social media channels / WhatsApp 77096563.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-danger",
              children: "N.B- Please do not place the same order again with cash on delivery. Even we do not receive any payment we will consider this cash on delivery and send it to you."
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "row justify-content-center",
        children: [orderInfo.payment_method != "Cash On Delivery" && orderInfo.payment_method != "Card On Delivery" && /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: checkStatus() && complete == false ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-8 mt-4 order-md-last",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (OrderRecived_module_default()).payment_input,
              children: /*#__PURE__*/jsx_runtime_.jsx(external_dibsy_react_namespaceObject.EmbedWrapper, {
                publicKey: "pk_live_sE77rz2BN1OQXWiInhILN3uglZogsRM44npB",
                onCanSubmitChange: value => {
                  setCanSubmit(value);
                },
                onPaymentComplete: onPaymentComplete,
                children: ({
                  submitPayment,
                  isCheckoutSubmitted
                }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: [" ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (OrderRecived_module_default()).payment_row,
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: (OrderRecived_module_default()).heading,
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: (OrderRecived_module_default()).left,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                          type: "radio",
                          value: "creditcard",
                          name: "option",
                          id: "cr",
                          onChange: () => radioHandler("creditcard"),
                          checked: method == "creditcard" ? true : false
                        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: "cr",
                          children: "Credit Card"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: (OrderRecived_module_default()).right,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/payment/amex.svg"
                        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/payment/mc.svg"
                        }), /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/payment/visa.svg"
                        })]
                      })]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (OrderRecived_module_default()).payment_body,
                      children: method == "creditcard" && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: "card-container",
                        children: [/*#__PURE__*/jsx_runtime_.jsx(external_dibsy_react_namespaceObject.CardNumber, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                          className: "row",
                          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                            className: "col",
                            children: /*#__PURE__*/jsx_runtime_.jsx(external_dibsy_react_namespaceObject.ExpiryDate, {})
                          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                            className: "col",
                            children: /*#__PURE__*/jsx_runtime_.jsx(external_dibsy_react_namespaceObject.CardCvc, {})
                          })]
                        })]
                      })
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: `${(OrderRecived_module_default()).payment_row} ${(OrderRecived_module_default()).no_border}`,
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: (OrderRecived_module_default()).heading,
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: (OrderRecived_module_default()).left,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                          type: "radio",
                          value: "debitcard",
                          name: "option",
                          id: "db",
                          onChange: () => radioHandler("debitcard"),
                          checked: method == "debitcard" ? true : false
                        }), /*#__PURE__*/jsx_runtime_.jsx("label", {
                          htmlFor: "db",
                          children: "Debit Card"
                        })]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: (OrderRecived_module_default()).right,
                        children: [" ", /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: "/payment/naps.svg"
                        }), " "]
                      })]
                    })
                  }), method == "creditcard" ? /*#__PURE__*/jsx_runtime_.jsx("button", {
                    className: "submit-button",
                    onClick: e => onSubmit(e, submitPayment),
                    disabled: !canSubmit || isCheckoutSubmitted,
                    type: "submit",
                    children: !isCheckoutSubmitted ? "Submit Payment" : "Submitting ..."
                  }) : /*#__PURE__*/jsx_runtime_.jsx("button", {
                    onClick: e => onSubmit(e, submitPayment),
                    className: "submit-button",
                    children: "Submit Payment"
                  })]
                })
              })
            })
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [orderInfo.is_paid == "Paid" && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-8 mt-4 order-md-last",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-8 mt-4 order-md-last",
                children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "text-center text-success",
                  children: "Payment Completed!"
                })
              })
            }), orderInfo.is_paid == "failed" && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-8 mt-4 order-md-last",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-8 mt-4 order-md-last",
                children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "text-center text-warning",
                  children: "Payment Failed!"
                })
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (OrderRecived_module_default()).circle,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
              icon: free_solid_svg_icons_.faCheck,
              className: "fa-2x text-success"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (OrderRecived_module_default()).greet,
            children: t("Thank you for shopping with us")
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: (OrderRecived_module_default()).greet,
            children: [t("Your ORDER ID is "), order, " "]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (OrderRecived_module_default()).greet,
            children: t("Order will be processed with 24-72 hours after confirmation")
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (OrderRecived_module_default()).continue_container,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: (OrderRecived_module_default()).back_shopping,
                children: t("Back To Shopping")
              })
            })
          })]
        })]
      })]
    })]
  });
} // This gets called on every request


async function getServerSideProps(ctx) {
  const {
    success
  } = ctx.query;
  const orderInfo = await axios/* default.get */.Z.get("/en/getdata/order_by_id/" + ctx.query.order).then(({
    data
  }) => data).catch(error => console.log(error));
  return {
    props: {
      query: ctx.query,
      orderInfo,
      success: success ? success : "false"
    }
  };
}
/* harmony default export */ const _order_ = ((0,external_react_i18next_.withTranslation)("common")(StepFour));

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

/***/ 2319:
/***/ ((module) => {

// Exports
module.exports = {
	"step_four": "OrderRecived_step_four__2Sp8r",
	"greet": "OrderRecived_greet__kMZjy",
	"continue_container": "OrderRecived_continue_container__3zPok",
	"back_shopping": "OrderRecived_back_shopping__3I1rK",
	"circle": "OrderRecived_circle__C-ojH",
	"payment_link_info": "OrderRecived_payment_link_info__1FY_D",
	"payment_method_button": "OrderRecived_payment_method_button__2gS2c",
	"active": "OrderRecived_active__2fWWm",
	"payment_input": "OrderRecived_payment_input__3fBAX",
	"payment_row": "OrderRecived_payment_row__H_GNA",
	"heading": "OrderRecived_heading__115Zk",
	"left": "OrderRecived_left__1ybwI",
	"right": "OrderRecived_right__1PQL4",
	"no_border": "OrderRecived_no_border__2QiAU"
};


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

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7789:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 3818:
/***/ ((module) => {

"use strict";
module.exports = require("react-moment");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664], () => (__webpack_exec__(9383)));
module.exports = __webpack_exports__;

})();