"use strict";
exports.id = 7335;
exports.ids = [7335];
exports.modules = {

/***/ 7335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PaymentStatus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3818);
/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);



function PaymentStatus(props) {
  var _Data$InvoiceTransact, _Data$InvoiceTransact2, _Data$InvoiceTransact3;

  const {
    Data
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "col-lg-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
      className: "mb-3",
      children: ["Invoice ", Data.InvoiceId, " Details"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
      className: "table table-sm table-responsive-sm table-bordered table-striped table-hover",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: "Name: "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: Data.CustomerName
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: "Created: "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_1___default()), {
              format: "YYYY/MMM/DD hh:mm:ss A",
              children: Data.CreatedDate
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: "Cell: "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: Data.CustomerMobile
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: "Email: "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: Data.CustomerEmail
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: "Expiry TimeStamp: "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_moment__WEBPACK_IMPORTED_MODULE_1___default()), {
              format: "MMM DD, YYYY hh:mm:ss A",
              children: new Date(Data.ExpiryDate + " " + Data.ExpiryTime)
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: "Status: "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: Data.InvoiceStatus
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: "Transaction Status: "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            className: `font-weight-bold ${((_Data$InvoiceTransact = Data.InvoiceTransactions[0]) === null || _Data$InvoiceTransact === void 0 ? void 0 : _Data$InvoiceTransact.TransactionStatus) == "Failed" ? "text-danger" : "text-success"}`,
            children: (_Data$InvoiceTransact2 = (_Data$InvoiceTransact3 = Data.InvoiceTransactions[0]) === null || _Data$InvoiceTransact3 === void 0 ? void 0 : _Data$InvoiceTransact3.TransactionStatus) !== null && _Data$InvoiceTransact2 !== void 0 ? _Data$InvoiceTransact2 : "Unknown"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: "Amount: "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
            children: Data.InvoiceDisplayValue
          })]
        })]
      })
    })]
  });
}

/***/ })

};
;