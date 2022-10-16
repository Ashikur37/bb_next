"use strict";
(() => {
var exports = {};
exports.id = 6164;
exports.ids = [6164];
exports.modules = {

/***/ 3557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _components_atom_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(836);
/* harmony import */ var _components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7040);
/* harmony import */ var _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6698);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(799);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(887);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4885);
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2625);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout_partials_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5773);
/* harmony import */ var _styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7248);
/* harmony import */ var _styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12__);
















function Index(props) {
  const {
    t
  } = props;
  const {
    0: offers,
    1: setOffers
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: products,
    1: setProducts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: categoryParams,
    1: setCategoryParams
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.id);
  const {
    0: categoryName,
    1: setCategoryName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: mFilter,
    1: setMFilter
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: empty,
    1: setEmpty
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: items,
    1: setItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: hasMore,
    1: setHasMore
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const {
    0: nextPage,
    1: setNextPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
  const {
    0: notFound,
    1: setNotFound
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const categorySelected = props.offers.find(data => data.id == props.id);

    if (categorySelected) {
      setCategoryName(categorySelected.name);
    }

    setCategoryParams(props.id);
  }, [props.id, props.lang]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setOffers(props.offers);
  }, [props.offers]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let locale = props.language;
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__/* .default.get */ .Z.get(`${locale}/getdata/offer?type=category&id=${categoryParams}`).then(res => {
      // let filteredProducts = res.data.products?.data.filter((product) => {
      //   if (product.hasCampaign == true || product.has_offer == true) {
      //     return product;
      //   }
      // });
      // if (filteredProducts.length === 0) {
      //   setEmpty(true);
      // }
      setHasMore(res.data.products.next_page_url !== null);
      setNextPage(2); // setLastPage(res.data.products.last_page);

      setProducts(res.data.products.data);
      setItems(res.data.products.data); // setCategoryName(categoryParams?res.data.category.name:null);

      setNotFound(false);
    }).catch(err => {
      setNotFound(true);
    });
  }, [categoryParams, props.language]);

  const fetchMoreData = () => {
    let locale = props.language;
    _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__/* .default.get */ .Z.get(`${locale}/getdata/offer?type=category&id=${categoryParams}&page=${nextPage}`).then(res => {
      let newItems = products.concat(res.data.products.data);
      setHasMore(res.data.products.next_page_url !== null);
      setProducts(newItems);
      setItems(newItems);
      setNextPage(nextPage + 1);
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "container my-2",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "Campaigns | Beautyboothqa"
      })
    }), !notFound && categoryParams && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "text-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_partials_Header__WEBPACK_IMPORTED_MODULE_11__.default, {
        text: `${props.t("SALE ON")} ${categoryName}`,
        textColor: "red"
      })
    }), notFound && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_HeaderComponent__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      text: "No Data Found"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().mobile_menu_wrapper),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().mobile_menu),
        children: [offers && offers.map((offer, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().menu_li),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: `/campaigns?id=${offer.id}`,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              className: categoryParams == offer.id ? (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().active) : "",
              children: offer.name
            })
          })
        }, index)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().menu_li),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
            href: "/campaigns/other",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
              children: t("Others")
            })
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "row",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-lg-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().sidebar),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().sidebarHeader),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().headerTitle),
              children: t("Refine")
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().sidebarContent),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
              children: [offers && offers.map((offer, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                  href: `/campaigns?id=${offer.id}`,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    className: categoryParams == offer.id ? (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().active) : "",
                    children: offer.name
                  })
                })
              }, index)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
                  href: "/campaigns/other",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    children: t("Others")
                  })
                })
              })]
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col-lg-9",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: (_styles_CampaignPage_module_scss__WEBPACK_IMPORTED_MODULE_12___default().saleProducts),
          children: [empty && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
            className: "alert alert-info",
            children: "No products for now. Please come back again"
          }), items && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_8___default()), {
            dataLength: items.length,
            next: fetchMoreData,
            hasMore: hasMore,
            loader: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "container",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "col",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    style: {
                      textAlign: "center"
                    },
                    children: "Loading..."
                  })
                })
              })
            }),
            endMessage: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "container",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "col",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    style: {
                      textAlign: "center"
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                      children: "You have seen it all"
                    })
                  })
                })
              })
            }),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row no-gutters",
                children: items.map(product =>
                /*#__PURE__*/
                // <h2>{product.name}</h2>
                react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: " mb-3 col-6 col-xs-6 col-xs-6 col-md-4  ",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_atom_Product__WEBPACK_IMPORTED_MODULE_3__.default, {
                    product: product
                  }, product.id)
                }, product.id))
              })
            })
          })]
        })
      })]
    })]
  });
}

async function getServerSideProps(context) {
  var _context$query;

  let language = context.req.language || "en";
  const offers = await _redux_actions_axios__WEBPACK_IMPORTED_MODULE_5__/* .default.get */ .Z.get(language + "/getdata/campaign_offers").then(res => {
    return res.data.categories;
  }).catch();
  return {
    props: {
      id: (_context$query = context.query) !== null && _context$query !== void 0 && _context$query.id ? context.query.id : "",
      offers,
      language
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_i18n__WEBPACK_IMPORTED_MODULE_10__.withTranslation)("common")(Index));

/***/ }),

/***/ 887:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 799:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 8951:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4885:
/***/ ((module) => {

module.exports = require("react-infinite-scroll-component");

/***/ }),

/***/ 6873:
/***/ ((module) => {

module.exports = require("react-lazyload");

/***/ }),

/***/ 79:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,434,5773,1843,836,7186], () => (__webpack_exec__(3557)));
module.exports = __webpack_exports__;

})();