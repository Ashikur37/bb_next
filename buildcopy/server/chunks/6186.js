exports.id = 6186;
exports.ids = [6186,2431,5660];
exports.modules = {

/***/ 8370:
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3362);
/* harmony import */ var _styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_5__);









function AddressBook({
  Auth,
  language,
  data,
  t
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    0: defaultAddress
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.filter(a => a.isDefault));
  const {
    0: additionalAddress
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.filter(a => a.isDefault == false));
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!Auth) {
      window.location.href = "/login";
    }
  }, [Auth, language]);

  const deleteAddress = id => {
    (axios__WEBPACK_IMPORTED_MODULE_3___default().defaults.headers.common.Authorization) = `Bearer ${localStorage.getItem("auth_token") || ""}`;
    axios__WEBPACK_IMPORTED_MODULE_3___default().get(`/api/deleteAddress?id=${id}`).then(res => {
      if (res.data.error) {
        window.alert(res.data.error);
      } else {
        router.reload();
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().addressbook),
    children: [defaultAddress && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().addressbook_title),
      children: t("Default Addresses")
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row mb-3",
      children: defaultAddress && defaultAddress.map(address => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-md-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().address_info),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().address_title),
            children: address.addressType == "shipping" ? t("Shipping Address") : t("Billing Address")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: `${(_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().address_list)} mb-2`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: `${address.fname} ${address.lname}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: `${address.address}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: `${address.city}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: `${address.postCode}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: `${address.country}`
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              children: ["T: ", `${address.phoneNumber}`]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: `/profile/address/edit/${address._id}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              style: {
                textDecoration: "",
                color: "black"
              },
              className: "btn btn-outline-warning btn-sm",
              children: "Edit"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            onClick: () => deleteAddress(address._id),
            className: "btn btn-outline-danger btn-sm ml-3",
            children: "Delete"
          })]
        })
      }, address.fname + address.phoneNumber))
    }), additionalAddress && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().addressbook_title),
      children: t("Additional Addresses")
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: additionalAddress && additionalAddress.map(address => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-md-6",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().address_info),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().address_title),
            children: address.addressType == "shipping" ? t("Shipping Address") : t("Billing Address")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: (_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().address_list),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: `${address.fname} ${address.lname}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: `${address.address}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: `${address.city}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: `${address.postCode}`
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: `${address.country}`
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              children: ["T: ", `${address.phoneNumber}`]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: `/profile/address/edit/${address._id}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              style: {
                textDecoration: "",
                color: "black"
              },
              className: "btn btn-outline-warning btn-sm",
              children: "Edit"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            onClick: () => deleteAddress(address._id),
            className: "btn btn-outline-danger btn-sm ml-3",
            children: "Delete"
          })]
        })
      }, address.fname + address.phoneNumber))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: `${(_styles_UserProfilePage_module_scss__WEBPACK_IMPORTED_MODULE_6___default().add_new)} mt-3`,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
        href: "/profile/address/new",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "btn btn-lg",
          children: t('ADD NEW')
        })
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_5__.withTranslation)("common")(AddressBook));

/***/ }),

/***/ 2625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const NextI18Next = __webpack_require__(8475).default;

const {
  localeSubpaths
} = __webpack_require__(8951).default().publicRuntimeConfig;

const path = __webpack_require__(5622);

module.exports = new NextI18Next({
  useSuspense: true,
  otherLanguages: ["ar_QA"],
  defaultLanguage: "en",
  defaultLocale: "en",
  locales: ['en', 'ar_QA'],
  localeSubpaths,
  // localePath: typeof window === "undefined" ? path.resolve("./public/static/locales") : "locales",
  localePath: path.resolve("./public/locales")
});

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;