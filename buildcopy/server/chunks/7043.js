"use strict";
exports.id = 7043;
exports.ids = [7043];
exports.modules = {

/***/ 7043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(434);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_helper__WEBPACK_IMPORTED_MODULE_4__);







function SingleProduct({
  product,
  locale,
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
      if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__.getBrandNameForAlgolia)(product.attributes)) {
        if ((0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__.getBrandNameForAlgolia)(product.attributes).toLowerCase() == "the ordinary") {
          // console.log(false);
          setShow(false);
        } else {
          setShow(true);
        }
      } else {
        setShow(true);
      }
    }
  }, [auth, product]);

  const RibbonNew = () => {
    if (product && product.is_new) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ribbon-new",
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
        className: "ribbon-soldout",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: "Sold out"
        })
      });
    }

    return null;
  };

  const BrandName = attribute => {
    if (attribute.length > 0) {
      let brand = attribute.filter(att => Object.keys(att)[0] === "Brand"); // console.log(attribute);

      if (brand[0]) {
        return brand[0].Brand[0];
      }
    }

    return null;
  };

  const RibbonOffer = () => {
    if (product && (product.has_offer || product.hasCampaign)) {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "ribbon",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          children: "Offer"
        })
      });
    }

    return null;
  };

  const Price = () => {
    if (product) {
      if (product.has_offer || product.hasCampaign) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          className: "product_price offer_price",
          children: [product.selling_price.formatted[locale], " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: "old",
            children: product.price.formatted[locale]
          })]
        });
      } else {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
          className: "product_price",
          children: product.price.formatted[locale]
        });
      }
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
      className: "product_price",
      children: "QAR 00.00"
    });
  };

  return (
    /*#__PURE__*/
    // <Link href={`/product/${product.slug}`} replace>
    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
      href: `/product/${product.slug}`,
      className: show ? `product` : `product hide`,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RibbonNew, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RibbonOffer, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RibbonSoldOut, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "product_img",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: product.image,
          alt: ""
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "product_brand",
        children: BrandName(product.attributes)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "product_name",
        children: product.name[locale] || product.name["en"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Price, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bottom",
        children: innBag > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "btn_group",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: () => setInBag(innBag - 1),
            className: "minus",
            children: "-"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: "in_bag",
            children: [" ", innBag, " In Bag"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            onClick: () => setInBag(innBag + 1),
            className: "plus",
            children: "+"
          })]
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
          onClick: () => setInBag(innBag + 1),
          className: "btn btn-block",
          children: "ADD TO BAG"
        })
      })]
    }) // </Link>

  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_3__.connect)(mapStateToProps)(SingleProduct));

/***/ })

};
;