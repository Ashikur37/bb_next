(() => {
var exports = {};
exports.id = 4482;
exports.ids = [4482,2431,5660];
exports.modules = {

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

/***/ 8101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ bag)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: ./redux/actions/cartAction.js
var cartAction = __webpack_require__(571);
// EXTERNAL MODULE: ./redux/actions/axios.js
var axios = __webpack_require__(6698);
// EXTERNAL MODULE: ./components/utils/helper.js
var helper = __webpack_require__(434);
;// CONCATENATED MODULE: ./components/bag/CartItem.js






function CartItem({
  bag,
  maxValue,
  cartItem,
  plusOne,
  minusOne,
  removeCartItem,
  stock,
  t,
  flag,
  inputItem
}) {
  const deleteHandler = (id, option_id, bulk_id = null) => {
    removeCartItem(id, option_id, bulk_id);
  };

  const plusHandler = (product_id, qnt, option_id) => {
    plusOne(product_id, option_id);
  };

  const minusHandler = (product_id, qnt, option_id) => {
    if (qnt > 1) {
      minusOne(product_id, option_id);
    }
  };

  const qntInputHnadler = (e, product_id, qnt, option_id, max) => {
    if (parseInt(e.target.value) > 0 && qnt < max && parseInt(e.target.value) < max) {
      inputItem(product_id, option_id, parseInt(e.target.value));
    }
  };

  const PriceCalculate = () => {
    let bulk_id = cartItem.bulk_id;
    let discount;
    let total = cartItem.price.amount * cartItem.qnt;

    if (bulk_id && !flag) {
      discount = Math.ceil(cartItem.price.amount * cartItem.parcent / 100) * cartItem.qnt;
      total = total - discount;
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: [cartItem.price.currency, total.toFixed(2)]
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), bulk_id && !flag && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        style: {
          fontSize: 13,
          color: "green"
        },
        children: ["Save ", cartItem.parcent, "% = ", discount, " "]
      })]
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: bag.img_container,
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: cartItem.thumb,
        alt: ""
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: bag.details_container,
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/product/${cartItem.slug}`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          children: [" ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: bag.product_name,
            children: [cartItem.name, " "]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: cartItem.option_value
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: stock ? /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: bag.status,
          children: t("in stock")
        }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: bag.status,
          style: {
            color: "red",
            fontSize: 14
          },
          children: t("out of stock")
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: !stock && /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: e => {
            inputItem(cartItem.product_id, cartItem.option_id, maxValue);
          },
          style: {
            fontSize: 13,
            padding: 5
          },
          className: "btn btm-sm font-weight-bold my-2 btn-outline-success",
          children: "Adjust to available stock"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            display: "inline-block",
            color: "black",
            borderRadius: "4px",
            padding: "3px 10px",
            cursor: "pointer",
            marginTop: 5,
            textTransform: "uppercase"
          },
          onClick: () => deleteHandler(cartItem.product_id, cartItem.option_id, cartItem.bulk_id),
          className: "bg-warning",
          children: "delete"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: bag.quantity_container,
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        disabled: cartItem.qnt === 1,
        onClick: () => minusHandler(cartItem.product_id, cartItem.qnt, cartItem.option_id),
        children: "-"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "number",
        value: cartItem.qnt,
        name: "qnt_input",
        className: bag.qnt_input,
        id: "",
        readOnly: cartItem.max_cart_qnt <= cartItem.qnt,
        onInput: e => qntInputHnadler(e, cartItem.product_id, cartItem.qnt, cartItem.option_id, cartItem.max_cart_qnt)
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        disabled: cartItem.max_cart_qnt <= cartItem.qnt // disabled={cartItem.max_cart_qnt <= cartItem.qnt ? true : false}
        ,
        onClick: () => plusHandler(cartItem.product_id, cartItem.qnt, cartItem.option_id),
        children: "+"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: bag.price_container,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: bag.md_quantity_container,
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => minusHandler(cartItem.product_id, cartItem.qnt, cartItem.option_id),
          children: "-"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: cartItem.qnt
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          disabled: cartItem.max_cart_qnt <= cartItem.qnt ? true : false,
          onClick: () => plusHandler(cartItem.product_id, cartItem.qnt, cartItem.option_id),
          children: "+"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: bag.md_price,
        children: [" ", cartItem.price.currency, " ", (0,helper.test)(cartItem, flag).toFixed(2), !flag && (0,helper.activeParcent)(cartItem.offers, cartItem.qnt) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          style: {
            fontSize: 13,
            color: "green",
            display: "block"
          },
          children: ["Save ", (0,helper.activeParcent)(cartItem.offers, cartItem.qnt), "%", " "]
        })]
      })]
    })]
  });
}

/* harmony default export */ const bag_CartItem = (CartItem);
// EXTERNAL MODULE: ./styles/Bag.module.scss
var Bag_module = __webpack_require__(1508);
var Bag_module_default = /*#__PURE__*/__webpack_require__.n(Bag_module);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: ./components/utils/gtm.js
var gtm = __webpack_require__(7995);
;// CONCATENATED MODULE: ./pages/bag.js


















const Header = dynamic_default()(() => __webpack_require__.e(/* import() */ 5773).then(__webpack_require__.bind(__webpack_require__, 5773)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5773)],
    modules: ["bag.js -> " + "../components/layout/partials/Header"]
  }
});

function MyBag(props) {
  const {
    t
  } = props;
  const {
    0: cart,
    1: setcart
  } = (0,external_react_.useState)(props.cartItems);
  const {
    0: subTotal,
    1: setSubTotal
  } = (0,external_react_.useState)(props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0));
  const {
    0: instock,
    1: setInstock
  } = (0,external_react_.useState)([]);
  const {
    0: maxQty,
    1: setMaxQty
  } = (0,external_react_.useState)([]);
  const {
    0: oos,
    1: setOos
  } = (0,external_react_.useState)(false);
  const {
    0: shipping,
    1: setShipping
  } = (0,external_react_.useState)(10); // coupon handler

  const {
    0: flag,
    1: setFlag
  } = (0,external_react_.useState)(false);
  const {
    0: coupon,
    1: setCoupon
  } = (0,external_react_.useState)("");
  const {
    0: coupon_id,
    1: setCouponId
  } = (0,external_react_.useState)("");
  const {
    0: discount,
    1: setDiscount
  } = (0,external_react_.useState)(0); // delivery method

  const {
    0: method,
    1: setMethod
  } = (0,external_react_.useState)(); // Frre Gift

  const {
    0: gifts,
    1: setGifts
  } = (0,external_react_.useState)();
  const {
    0: giftProduct,
    1: setGiftProduct
  } = (0,external_react_.useState)( false ? 0 : null);
  (0,external_react_.useEffect)(() => {
    setFlag(localStorage.getItem("coupon_id") ? true : false);
    setCoupon(localStorage.getItem("coupon") || ""), setCouponId(localStorage.getItem("coupon_id") || "");
    setDiscount(localStorage.getItem("discount") || 0);
    setMethod(localStorage.getItem("method") || "regular");
  }, []);

  function floorAmount(amount, parcent, qnt) {
    let total = 0;
    let i = 0;

    for (i; i < qnt; i++) {
      total += Math.floor(amount - amount * parcent / 100);
    }

    return total;
  }

  const customSubTotalWithDiscount = () => {
    let value = props.cartItems.reduce((acc, item) => item.bulk_id && !flag ? acc += floorAmount(item.price.amount, item.parcent, item.qnt) : acc += item.qnt * item.price.amount, 0);
    return value;
  };

  const customSubTotal = () => {
    return props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0);
  }; // get Free Gift


  (0,external_react_.useEffect)(() => {
    let locale = props.lang === "en" ? "en" : "ar_QA" || 0;
    axios/* default.get */.Z.get(`${locale}/getdata/free_gift`).then(res => {
      if (res.data.length > 0) {
        // need price range check here
        setGifts(res.data);
      }
    });
  }, [props.lang]); // const giftHandler = (id, name, price, img) => {
  //   setGiftProduct({
  //     id,
  //     name,
  //     price,
  //     img,
  //   });
  //   localStorage.setItem("gift", JSON.stringify({ id, name, price, img }));
  // };

  const resetHandler = () => {
    setGiftProduct();
    localStorage.removeItem("gift");
  };

  (0,external_react_.useEffect)(() => {
    if (props.cartItems.length > 0) {
      let formData = props.cartItems.map(item => {
        return {
          product_id: item.product_id,
          price: item.price.amount,
          qty: item.qnt,
          option: item.option_main_id || null,
          option_child: item.option_id || null
        };
      });
      axios/* default.post */.Z.post("en/cartdata/items", formData).then(res => {
        let instock = [];
        let qt = [];
        res.data.map(dt => {
          instock.push(dt.in_stock);
          qt.push(dt.qty);
        });
        setMaxQty(qt);
        let current = res.data;
        let ifUpdate = false;
        let update = props.cartItems.map((item, index) => {
          if (item.price.amount !== current[index].selling_price.amount) {
            ifUpdate = true;
            item.price = current[index].selling_price;
          }

          return item;
        });

        if (ifUpdate) {
          props.setCartAfterPriceChange(update);
        }

        setInstock(instock);
        let r = instock.filter(d => d === false).length;

        if (r > 0) {
          setOos(true);
        } else {
          setOos(false);
        }
      });

      if (localStorage.getItem("coupon_id")) {
        couponHandler();
      }
    }
  }, [props.cartItems, coupon]);
  (0,external_react_.useEffect)(() => {
    setSubTotal(props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0) - discount);

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
  }, [method, subTotal, props.cartItems]);

  const deleteHandler = (id, option_id, bulk_id = null) => {
    props.removeCartItem(id, option_id, bulk_id);
  };

  const plusHandler = (product_id, qnt, option_id) => {
    props.plusOne(product_id, option_id);
  };

  const minusHandler = (product_id, qnt, option_id) => {
    if (qnt > 1) {
      props.minusOne(product_id, option_id);
    }
  };

  const qntInputHnadler = (e, product_id, qnt, option_id, max) => {
    if (parseInt(e.target.value) > 0 && qnt < max && parseInt(e.target.value) < max) {
      cart.map(item => {
        if (item.product_id == product_id && item.option_id == option_id) {
          item.qnt = parseInt(e.target.value);
        }

        return item;
      });
      props.inputItem(product_id, option_id, parseInt(e.target.value));
    }
  };

  (0,external_react_.useEffect)(() => {
    setcart(props.cartItems);
  }, [props.cartItems]);
  const {
    0: msg,
    1: setMsg
  } = (0,external_react_.useState)(null);

  const couponHandler = () => {
    const pattern = /((\bINF)-(\d[0-9]*)-(\bBB$))/;

    if (pattern.test(coupon.toString())) {} else {
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
        setFlag(true);
        setMsg(null);
        setCouponId(res.data.coupon_id);
        setDiscount(res.data.discount);
        setSubTotal(props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0) - res.data.discount);
        localStorage.setItem("coupon_id", res.data.coupon_id);
        localStorage.setItem("discount", res.data.discount);
        localStorage.setItem("coupon", coupon); // alert(res.data.msg);
      }).catch(err => {
        // setMsg(err.response.data);
        // clearCoupon();
        setDiscount(0);
      });
    }
  };

  const clearCoupon = () => {
    localStorage.removeItem("coupon");
    localStorage.removeItem("coupon_id");
    localStorage.removeItem("discount");
    setCouponId("");
    setCoupon("");
    setDiscount(0);
    setFlag(false);
    setSubTotal(props.cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0) - 0);
  };

  const deliveryHandler = method => {
    localStorage.setItem("method", method);
    setMethod(method);
  }; // add freegift


  const addFreeGift = item => {
    if (subTotal < item.free_gift.cart_min) {
      // alert("You Are Not Eligible for this Free Gift");
      external_react_toastify_.toast.error("You are not eligible for this Free Gift", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
      });
    } else {
      setGiftProduct({
        id: item.id,
        name: item.name,
        image: item.files[0].thumbnail_image,
        cart_min: item.free_gift.cart_min
      });
      localStorage.setItem("gift", JSON.stringify({
        id: item.id,
        name: item.name,
        image: item.files[0].thumbnail_image,
        cart_min: item.free_gift.cart_min
      }));
    }
  };

  (0,external_react_.useEffect)(() => {
    let free = localStorage.getItem("gift");

    if (free && gifts) {
      let freeValue = JSON.parse(free);
      let fitlerdValue = gifts.find(item => item.id == freeValue.id);

      if (subTotal < fitlerdValue.free_gift.cart_min) {
        // not applicable
        setGiftProduct();
        localStorage.removeItem("gift");
      }
    }
  }, [subTotal, gifts]); // gtmClick

  const gtmClick = () => {
    (0,gtm/* GTMBeginCheckout */.vM)(props.cartItems); // console.log("gtmClick");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Bag | Beautyboothqa "
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(Bag_module_default()).my_bag} mb-5`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row mt-3 text-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(Header, {
            h: "h2",
            text: t("IN YOUR BAG")
          })
        }), props.cartItems.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (Bag_module_default()).mybag_details,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (Bag_module_default()).mybag_left,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Bag_module_default()).inbag_products,
                children: [props.cartItems.map((cartItem, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (Bag_module_default()).bag_product,
                  children: /*#__PURE__*/jsx_runtime_.jsx(bag_CartItem, {
                    maxValue: maxQty[index],
                    inputItem: props.inputItem,
                    flag: flag,
                    t: t,
                    stock: instock[index],
                    removeCartItem: props.removeCartItem,
                    plusOne: props.plusOne,
                    minusOne: props.minusOne,
                    cartItem: cartItem,
                    bag: (Bag_module_default())
                  })
                }, index)), giftProduct && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (Bag_module_default()).gitProduct_row,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: giftProduct.image
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (Bag_module_default()).details_container,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (Bag_module_default()).name,
                      children: giftProduct.name
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "Free Gift"
                    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                      style: {
                        background: "#ff5ba2",
                        color: "white"
                      },
                      className: "btn btn-sm ",
                      onClick: resetHandler,
                      children: "Reset"
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: (Bag_module_default()).price,
                    children: "QAR 00.00"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (Bag_module_default()).sub_total,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: t("ORDER SUB-TOTAL")
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    children: [" ", props.cartItems[0].price.currency, " ", (0,helper.calculateSubTotal)(props.cartItems, flag).toFixed(2)]
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `${(Bag_module_default()).deliviry_method_row} col  mt-3`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: method == "store_pickup" ? (Bag_module_default()).active : "",
                    onClick: () => deliveryHandler("store_pickup"),
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (Bag_module_default()).method_checked,
                      children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: free_solid_svg_icons_.faCheck
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (Bag_module_default()).method_title,
                      children: t("Store pickup")
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: (Bag_module_default()).method_details,
                      children: t("shop_address")
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: method == "express" ? (Bag_module_default()).active : "",
                    onClick: () => deliveryHandler("express"),
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (Bag_module_default()).method_checked,
                      children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: free_solid_svg_icons_.faCheck
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (Bag_module_default()).method_title,
                      children: t("Express Delivery")
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: (Bag_module_default()).method_details,
                      children: t("express note")
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    className: method == "regular" ? (Bag_module_default()).active : "",
                    onClick: () => deliveryHandler("regular"),
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (Bag_module_default()).method_checked,
                      children: /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: free_solid_svg_icons_.faCheck
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (Bag_module_default()).method_title,
                      children: t("Regular Delivery")
                    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                      className: (Bag_module_default()).method_details,
                      children: t("d_info")
                    })]
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/faq?mark=delivery",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  style: {
                    fontSize: 12
                  },
                  className: "btn btn-sm btn-outline-info text-uppercase m-3",
                  children: t("Read More About our Delivery System")
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (Bag_module_default()).mybag_right,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: `${(Bag_module_default()).payment_group} mt-4`,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "input-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "text",
                    name: "coupon",
                    className: "form-control",
                    value: coupon,
                    onChange: e => setCoupon(e.target.value.toUpperCase()),
                    placeholder: t("Enter Special Code"),
                    maxLength: 12,
                    id: "coupon",
                    disabled: flag
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "input-group-append",
                    children: !flag ? /*#__PURE__*/jsx_runtime_.jsx("button", {
                      className: "btn btn-flat btn-outline-primary",
                      onClick: couponHandler,
                      disabled: flag,
                      children: t("Apply")
                    }) : /*#__PURE__*/jsx_runtime_.jsx("button", {
                      className: "btn btn-flat btn-outline-danger",
                      onClick: () => clearCoupon(),
                      children: "Clear"
                    })
                  })]
                })
              }), msg && /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "text-danger",
                children: msg
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: `${(Bag_module_default()).summery} mb-2`,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (Bag_module_default()).item_title,
                  children: t("ORDER SUMMARY")
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (Bag_module_default()).summery_items,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (Bag_module_default()).summery_item,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (Bag_module_default()).sub,
                      children: t("ORDER SUB-TOTAL")
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (Bag_module_default()).amount,
                      children: (0,helper.priceWithoutDiscount)(props.cartItems).toFixed(2)
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (Bag_module_default()).summery_item,
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: (Bag_module_default()).sub,
                      children: [t("SHIPPING"), "*"]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: (Bag_module_default()).amount,
                      children: [shipping, ".00"]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (Bag_module_default()).summery_item,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (Bag_module_default()).sub,
                      children: t("DISCOUNT")
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: (Bag_module_default()).amount,
                      children: [" ", "\u2212", " ", flag ? discount : (0,helper.priceWithoutDiscount)(props.cartItems) - (0,helper.calculateSubTotal)(props.cartItems), ".00"]
                    })]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: `${(Bag_module_default()).summery_item} ${(Bag_module_default()).total}`,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (Bag_module_default()).sub,
                      children: t("GRAND TOTAL")
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (Bag_module_default()).amount,
                      children: ((0,helper.calculateSubTotal)(props.cartItems, flag) + shipping - discount).toFixed(2)
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: (Bag_module_default()).checkout_btn_container,
                    children: oos ? /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: t("cart_warning")
                    }) : /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/checkout",
                      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                        onClick: gtmClick,
                        children: t("PROCEED TO CHECKOUT")
                      })
                    })
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
                children: subTotal < 100 ? `Order QAR ${100 - subTotal} more to get free shipping` : ""
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-12",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {}), gifts && !giftProduct && /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-center my-2",
              children: t("Free Gift")
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "row",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-12",
                children: gifts && !giftProduct && gifts.map((itm, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                  onClick: () => addFreeGift(itm),
                  className: `${(Bag_module_default()).brand__offer__card} mb-2 px-2`,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: itm.files[0].thumbnail_image,
                    alt: itm.name
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: (Bag_module_default()).brand__name,
                    children: itm.name
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (Bag_module_default()).rangePrice,
                    children: ["Min. amount: QAR ", itm.free_gift.cart_min, ".00", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Max amount: QAR ", itm.free_gift.cart_max, ".00"]
                  })]
                }, index))
              })
            })]
          })]
        }) : /*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: "text-center m-5",
          children: t("Your Bag is Empty")
        })]
      })
    })]
  });
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItem,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    removeCartItem: (id, option_id, bulk_id) => (0,cartAction/* removeCartItem */.B8)(dispatch, id, option_id, bulk_id),
    plusOne: (product_id, option_id) => (0,cartAction/* PlusOne */.AP)(dispatch, product_id, option_id),
    minusOne: (product_id, option_id) => (0,cartAction/* minusOne */.eO)(dispatch, product_id, option_id),
    inputItem: (product_id, option_id, qnt) => (0,cartAction/* inputItem */.WP)(dispatch, product_id, option_id, qnt),
    setCartAfterPriceChange: cartItems => (0,cartAction/* setCartAfterPriceChange */.tl)(dispatch, cartItems)
  };
};

/* harmony default export */ const bag = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)((0,i18n.withTranslation)("common")(MyBag)));

/***/ }),

/***/ 1508:
/***/ ((module) => {

// Exports
module.exports = {
	"mybag_details": "Bag_mybag_details__3GmQM",
	"mybag_left": "Bag_mybag_left__11yzy",
	"deliviry_method_row": "Bag_deliviry_method_row__iH71L",
	"method_checked": "Bag_method_checked__2ioby",
	"active": "Bag_active__324-3",
	"method_title": "Bag_method_title__FY36w",
	"mybag_right": "Bag_mybag_right__2rRYN",
	"inbag_products": "Bag_inbag_products__2c0hw",
	"bag_product": "Bag_bag_product__2d6MW",
	"img_container": "Bag_img_container__tFlZJ",
	"details_container": "Bag_details_container__Sqio7",
	"product_name": "Bag_product_name__2qLpz",
	"brand_name": "Bag_brand_name__1hJFS",
	"status": "Bag_status__3vzS2",
	"delete_btn": "Bag_delete_btn__2zb_M",
	"md_quantity_container": "Bag_md_quantity_container__36C5I",
	"quantity_container": "Bag_quantity_container__k0Xk5",
	"qnt_input": "Bag_qnt_input__puXZA",
	"price_container": "Bag_price_container__279qs",
	"md_price": "Bag_md_price__3DU5-",
	"sub_total": "Bag_sub_total__irocw",
	"gitProduct_row": "Bag_gitProduct_row__q7LFB",
	"name": "Bag_name__Fll7t",
	"price": "Bag_price__20Nuq",
	"summery": "Bag_summery__1d-6j",
	"item_title": "Bag_item_title__3gP0e",
	"summery_item": "Bag_summery_item__YgqTM",
	"total": "Bag_total__3Azzo",
	"checkout_btn_container": "Bag_checkout_btn_container__17RWS",
	"my_bag": "Bag_my_bag__3hgb0",
	"brand__offer__card": "Bag_brand__offer__card__2e7Vt",
	"brand__name": "Bag_brand__name__i21cm",
	"rangePrice": "Bag_rangePrice__2mHuk"
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

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,434,3164,571,7995], () => (__webpack_exec__(8101)));
module.exports = __webpack_exports__;

})();