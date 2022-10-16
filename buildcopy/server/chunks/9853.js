exports.id = 9853;
exports.ids = [9853];
exports.modules = {

/***/ 9853:
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
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var _redux_actions_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6698);
/* harmony import */ var _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4619);
/* harmony import */ var _styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2953);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__);



/*eslint-disable*/









function Footer({
  lang,
  FontAwesomeIcon,
  t
}) {
  const {
    0: locale,
    1: setLocale
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setLocale(lang == "en" ? "ltr" : "rtl");
  }, [lang]);

  const subscribeHandler = () => {
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_4__/* .default.post */ .Z.post("/en/setdata/subscribe/store", {
      email,
      lang
    }).then(res => {
      setEmail("");
      window.alert(res.data);
    }).catch(err => {
      window.alert(err.response.data.errors.email[0]);
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer_container),
    dir: locale,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: " container mt-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `row ${(_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer_wrap)}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().first),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: "https://admin.beautyboothqa.com/storage/media/l9btfTHlIZ9bgvEH2YbmKvITY5r48WRBeFmSh87B.svg"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().phone),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FontAwesomeIcon, {
              className: "fa_icon fa-rotate-90",
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faPhone
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              href: "tel:+974 7709 6563",
              children: "+974 7709 6563"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().email),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FontAwesomeIcon, {
              className: "fa_icon",
              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faEnvelope
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              className: "ml-2",
              href: "mailto:info@beautyboothqa.com",
              children: "info@beautyboothqa.com"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "mt-3",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              rel: "noreferrer",
              target: "_blank",
              href: "https://theqa.qa/certificates/details/5ea9cfa1-35a2-408b-9fdb-e76369dd5255",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                rel: "preload",
                src: "https://theqa.qa/badge/5ea9cfa1-35a2-408b-9fdb-e76369dd5255.svg",
                alt: "trustmark-badge",
                width: "200"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().payment_link),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__.default, {
                src: "/images/visa.jpg",
                width: "60",
                height: "40"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__.default, {
                src: "/images/card-visa_2.svg",
                width: "60",
                height: "40"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_6__.default, {
                src: "/images/np.png",
                width: "60",
                height: "40"
              })
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().second),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().customer_service),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().heading),
              children: t("cust_serv")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
              className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer_ul),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
                  href: "/faq",
                  children: t("faq")
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
                  href: "/profile",
                  children: t("profile")
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
                  href: "/delivery",
                  children: t("Delivery")
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
                  href: "/terms-and-conditions",
                  children: t("terms")
                })
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().fourth),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().about),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().heading),
              children: t("ab")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
              className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer_ul),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
                  href: "/about-us",
                  children: t("abb")
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
                  href: "/privacy-policy",
                  children: t("privacy")
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  href: "/faq?mark=payment",
                  children: t("Payment")
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                  href: "/faq?mark=delivery",
                  children: t("Shipping")
                })
              })]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().fifth),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().about),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().heading),
              children: t("need_help")
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
              className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().footer_ul),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
                  href: "/contact",
                  children: t("contact_us")
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
              className: "my-2",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().custom_card)} `,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "row justify-content-center align-items-center",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                    className: "text-center text-uppercase mb-3",
                    children: t("sn")
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12 ",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      className: "input-group",
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "email",
                        className: "form-control",
                        placeholder: t("Enter email"),
                        value: email,
                        onChange: e => setEmail(e.currentTarget.value)
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().subs_button),
                        type: "button",
                        onClick: subscribeHandler,
                        children: t("subs")
                      })]
                    })
                  })]
                })
              })
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().social_icons_wrapper),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: t("follow_us")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().social_icons),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              target: "_blank",
              href: "https://www.facebook.com/beautyboothqa",
              rel: "noreferrer",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FontAwesomeIcon, {
                className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().social_icon_logo),
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faFacebookSquare
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              target: "_blank",
              href: "https://www.instagram.com/beautyboothqtr",
              rel: "noreferrer",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FontAwesomeIcon, {
                className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().social_icon_logo),
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faInstagramSquare
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              target: "_blank",
              href: "https://www.youtube.com/c/BeautyBoothQATAR",
              rel: "noreferrer",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FontAwesomeIcon, {
                className: (_styles_Footer_module_scss__WEBPACK_IMPORTED_MODULE_8___default().social_icon_logo),
                icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faYoutubeSquare
              })
            })]
          })]
        })
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_2__.withTranslation)("common")(Footer));

/***/ }),

/***/ 4619:
/***/ ((module) => {

// Exports
module.exports = {
	"footer_container": "Footer_footer_container__2Bb-O",
	"heading": "Footer_heading__3YX87",
	"footer_ul": "Footer_footer_ul__1Fi5s",
	"footer_wrap": "Footer_footer_wrap__2-opz",
	"first": "Footer_first__12Mds",
	"second": "Footer_second__1UvEU",
	"fourth": "Footer_fourth__1pT-Q",
	"fifth": "Footer_fifth__3P-7B",
	"footer_logo": "Footer_footer_logo__1Aiwh",
	"fa_icon": "Footer_fa_icon__tAUtS",
	"phone": "Footer_phone__1Ul70",
	"email": "Footer_email__2sZVn",
	"payment_link": "Footer_payment_link__1-Uix",
	"social_icons_wrapper": "Footer_social_icons_wrapper__Nq-nX",
	"social_icons": "Footer_social_icons__3y1yl",
	"social_icon_logo": "Footer_social_icon_logo__2LnE8",
	"custom_card": "Footer_custom_card__13Yy6",
	"btn-danger": "Footer_btn-danger__1mBkd",
	"btn-sm": "Footer_btn-sm__2QxBd",
	"subs_button": "Footer_subs_button__FQtUb"
};


/***/ })

};
;