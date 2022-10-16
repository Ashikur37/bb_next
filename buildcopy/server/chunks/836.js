exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 836:
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
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6873);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8526);
/* harmony import */ var _styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(434);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_helper__WEBPACK_IMPORTED_MODULE_5__);









function Product({
  product,
  lazy = false,
  lang = "en",
  auth
}) {
  const {
    0: innBag,
    1: setInBag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: show,
    1: setShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log(product.attributes);

    if (auth.isAuthenticated) {
      setShow(true);
    } else {
      if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_5__.getBrandName)(product.attributes).toLowerCase() == "the ordinary") {
        // console.log(false);
        setShow(false);
      } else {
        setShow(true);
      }
    }
  }, [auth, product]);

  const RibbonNew = () => {
    if (product && product.is_new) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ribbon_new)}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: "New"
        })
      });
    }

    return null;
  };

  const RibbonSoldOut = () => {
    if (product && !product.in_stock) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ribbon_soldout)}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: "Sold out"
        })
      });
    }

    return null;
  };

  const RibbonOffer = () => {
    if (product && product.has_offer && !product.hasCampaign) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ribbon)}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: "Offer"
        })
      });
    }

    if (product && !product.has_offer && product.hasCampaign) {
      {
        return product.campaign ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ribbon)}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: product.campaign[0].name
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ribbon)}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            children: "Offer"
          })
        });
      }
    }

    return null;
  };

  const Price = () => {
    if (product) {
      if (product.has_offer || product.hasCampaign) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().product_price)} ${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().offer_price)}`,
          children: [product.selling_price.formatted, " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().old)}`,
            children: product.price.formatted
          })]
        });
      } else {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().product_price)}`,
          children: product.price.formatted
        });
      }
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().product_price)}`,
      children: "QAR 00.00"
    });
  };

  const BrandName = attribute => {
    if (attribute.attribute.length > 0) {
      let brand = attribute.attribute.filter(attr => attr.attribute_id === 4);

      if (brand.length > 0) {
        brand = brand[0].Brand;
        return brand ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().product_brand)}`,
          children: brand
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().product_brand)}`,
          children: " "
        });
      }
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().product_brand)}`,
      children: " "
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
    href: product ? `/product/${product.slug}` : "/products/slug",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
      className: show ? `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().product)}` : `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().product)} hide`,
      dir: lang == "en" ? "ltr" : "rlt",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RibbonNew, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RibbonOffer, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RibbonSoldOut, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().product_img)} card_image`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lazyload__WEBPACK_IMPORTED_MODULE_3___default()), {
          once: true,
          placeholder: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "spinner-border text-danger"
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: product ? product.files[0].thumbnail_image : "/assets/images/product.png",
            alt: product.name
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BrandName, {
        attribute: product.attributes
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: `${(_styles_ProductCard_module_scss__WEBPACK_IMPORTED_MODULE_6___default().product_name)}`,
        children: product ? product.name : "I am a long product name. I will be clamped after two lines"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Price, {})]
    })
  });
}

const mapStateToProps = state => ({
  auth: state.auth
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps)(Product));

/***/ }),

/***/ 8526:
/***/ ((module) => {

// Exports
module.exports = {
	"product": "ProductCard_product__2nwu7",
	"product_name": "ProductCard_product_name__2T9-j",
	"ribbon_soldout": "ProductCard_ribbon_soldout__SNlNo",
	"ribbon": "ProductCard_ribbon__2hz7J",
	"ribbon_new": "ProductCard_ribbon_new__2UT-D",
	"ribbon_campaign": "ProductCard_ribbon_campaign__3a00e",
	"product_img": "ProductCard_product_img__2LjLr",
	"lazyload-wrapper": "ProductCard_lazyload-wrapper__3OtQx",
	"product_brand": "ProductCard_product_brand__Fn7Ff",
	"product_price": "ProductCard_product_price__84928",
	"offer_price": "ProductCard_offer_price__3ZVOX",
	"old": "ProductCard_old__ABpJE"
};


/***/ })

};
;