exports.id = 3856;
exports.ids = [3856];
exports.modules = {

/***/ 3856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Orders)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-accessible-accordion"
var external_react_accessible_accordion_ = __webpack_require__(4446);
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(2047);
;// CONCATENATED MODULE: ./components/OrderHistory.jsx



 // Demo styles, see 'Styles' section below for some notes on use.




function OrderHistory(props) {
  const {
    styles
  } = props;
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)();
  const {
    0: orders,
    1: setOrders
  } = (0,external_react_.useState)(props.orders);
  (0,external_react_.useEffect)(() => {
    setOrders(props.orders);
  }, [props.lang]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `${styles.order_history} order_history_page`,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: styles.history_title_container,
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: styles.history_title,
        children: props.t("Order History")
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_accessible_accordion_.Accordion, {
      allowZeroExpanded: true,
      onChange: itemUuids => {
        // console.log(itemUuids[0]);
        if (itemUuids[0]) setActive(itemUuids[0]);else setActive(null);
      },
      children: orders.map(order => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_accessible_accordion_.AccordionItem, {
        uuid: order.id,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_accessible_accordion_.AccordionItemHeading, {
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_accessible_accordion_.AccordionItemButton, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: styles.order_heading,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [" ", order.id]
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: order.created_at
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: order.status
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: order.total.formatted
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: styles.sts
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_accessible_accordion_.AccordionItemPanel, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
            className: external_react_device_detect_.isMobile ? "table table-responsive" : "table",
            children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("th", {
                  children: [" ", props.t("product id")]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("th", {
                  children: [" ", props.t("name")]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("th", {
                  children: [" ", props.t("Price")]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("th", {
                  children: [" ", props.t("Quantity")]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("th", {
                  children: [" ", props.t("Amount")]
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
              children: order.only_products.map((details, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: details.product_id
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: details.product.name
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: details.unit_price.formatted
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: details.qty
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: details.line_total.formatted
                })]
              }, index))
            })]
          })
        })]
      }, order.id))
    })]
  });
}

/* harmony default export */ const components_OrderHistory = (OrderHistory);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./styles/UserProfilePage.module.scss
var UserProfilePage_module = __webpack_require__(3362);
var UserProfilePage_module_default = /*#__PURE__*/__webpack_require__.n(UserProfilePage_module);
;// CONCATENATED MODULE: ./components/profile/Orders.jsx




 // import axios from "../../redux/actions/axios";








function OrdersPage({
  auth,
  t,
  lang,
  language,
  data,
  Auth
}) {
  const router = (0,router_.useRouter)();
  const {
    0: orders,
    1: setOrders
  } = (0,external_react_.useState)(null);
  const {
    0: rewards,
    1: setRewards
  } = (0,external_react_.useState)(null);
  const {
    0: points,
    1: setPoints
  } = (0,external_react_.useState)(0);
  const {
    0: newPoints,
    1: setNewPoints
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    if (!Auth) {
      router.push("/login");
    }

    if (data) {
      setOrders(data === null || data === void 0 ? void 0 : data.orders);
      setRewards(data === null || data === void 0 ? void 0 : data.rewards);
      setPoints(totalPurchasePoints(data === null || data === void 0 ? void 0 : data.rewards, data === null || data === void 0 ? void 0 : data.redeems));
    }
  }, [Auth, language]);

  const refreshNow = () => {
    (external_axios_default()).defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("auth_token") || ""}`;
    external_axios_default().get(`/api/profile?locale=${language}&query=order_only&refresh=now`).then(res => {
      var _res$data, _res$data2, _res$data3, _res$data4;

      setOrders((_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.orders);
      setRewards((_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.rewards);
      setPoints(totalPurchasePoints((_res$data3 = res.data) === null || _res$data3 === void 0 ? void 0 : _res$data3.rewards, (_res$data4 = res.data) === null || _res$data4 === void 0 ? void 0 : _res$data4.redeems));
      window.location.reload();
    });
  };

  const totalPurchasePoints = (data, redeems = null) => {
    if (data) {
      let total = redeems ? -redeems.point_redeemed : 0;
      data.map(r => {
        total += r.reward_value.reduce((acc, item) => acc += item.reward_point, 0);
      });
      setNewPoints(total);
      return total;
    }

    return 0;
  };

  const pointsToWallet = e => {
    e.preventDefault();
    const locale = lang == "ar_QA" ? "ar_QA" : "en";
    (external_axios_default()).defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("auth_token") || ""}`;
    external_axios_default().post(`/api/profiles/point-to-wallet`, {
      locale,
      point_amount: newPoints
    }).then(res => {
      if (res) {
        if (auth.isAuthenticated) {
          external_axios_default().get(`/api/profile?locale=${locale}&query=order_only&refresh=now`).then(res => {
            setPoints(totalPurchasePoints(res.data.rewards, res.data.redeems));
          }).catch(err => {});
        }
      }
    }).catch(err => {
      var _err$response;

      alert((_err$response = err.response) === null || _err$response === void 0 ? void 0 : _err$response.data);
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "History | Beautyboothqa"
      })
    }), orders && rewards ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("marquee", {
        behavior: "alternate",
        children: "Rewards calculates once every 24hours, so estimated reward points can vary"
      }), rewards.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `${(UserProfilePage_module_default()).order_history} row`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (UserProfilePage_module_default()).history_title_container,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (UserProfilePage_module_default()).history_title,
            children: t("REWARDS HISTORY")
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
          className: "table table-bordered",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("thead", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                width: "100px",
                rowSpan: "2",
                style: {
                  verticalAlign: "middle"
                },
                children: t("Type")
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                colSpan: "4",
                children: t("Info")
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("th", {
                children: [t("Order No"), "."]
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: t("Subtotal")
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: t("point")
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: t("date")
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
            children: rewards.map((reward, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("tr", {
                children: /*#__PURE__*/jsx_runtime_.jsx("th", {
                  rowSpan: reward.reward_value.length == 0 ? 2 : reward.reward_value.length + 1,
                  style: {
                    verticalAlign: "middle"
                  },
                  children: reward.slug
                })
              }), reward.reward_value.length > 0 ? reward.reward_value.map(value => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: value.order_id
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: value.orders.sub_total.formatted
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: value.reward_point
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  children: value.created_at.split(" ")[0]
                })]
              }, value.id)) : /*#__PURE__*/jsx_runtime_.jsx("tr", {
                children: /*#__PURE__*/jsx_runtime_.jsx("td", {
                  colSpan: "4",
                  children: " No records found"
                })
              })]
            }))
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h5", {
          className: (UserProfilePage_module_default()).history_title,
          children: [t("Convert Points"), ": "]
        }), "\xA0\xA0\xA0\xA0\xA0\xA0\xA0", /*#__PURE__*/jsx_runtime_.jsx("form", {
          method: "POST",
          onSubmit: pointsToWallet,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "form-row",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col",
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "number",
                className: "form-control form-control",
                value: newPoints,
                min: "0",
                max: points,
                onChange: e => setNewPoints(e.currentTarget.value)
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col",
              children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "submit",
                className: "btn btn-sm btn-success",
                value: t("submit")
              })
            })]
          })
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-center",
        children: " No Orders Yet"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "btn btn-sm btn-secondary",
        onClick: refreshNow,
        children: t("refresh now")
      }), orders.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "row",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_.Suspense, {
          fallback: null,
          children: /*#__PURE__*/jsx_runtime_.jsx(components_OrderHistory, {
            orders: orders,
            t: t,
            lang: lang,
            styles: (UserProfilePage_module_default())
          })
        })
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
        className: "text-center",
        children: [" ", t("No Orders Yet")]
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "loader"
    })]
  });
}

const mapStateToProps = state => ({
  auth: state.auth
});

/* harmony default export */ const Orders = ((0,external_react_redux_.connect)(mapStateToProps)((0,i18n.withTranslation)("common")(OrdersPage)));

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

/***/ })

};
;