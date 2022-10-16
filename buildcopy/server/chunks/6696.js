"use strict";
exports.id = 6696;
exports.ids = [6696,5651];
exports.modules = {

/***/ 6696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout_NavbarWrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/layout/Menu.js
var Menu = __webpack_require__(9566);
// EXTERNAL MODULE: external "universal-cookie"
var external_universal_cookie_ = __webpack_require__(8993);
var external_universal_cookie_default = /*#__PURE__*/__webpack_require__.n(external_universal_cookie_);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./redux/actions/axios.js
var axios = __webpack_require__(6698);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/actions/cartAction.js
var cartAction = __webpack_require__(571);
// EXTERNAL MODULE: ./redux/actions/authActions.js
var authActions = __webpack_require__(6808);
// EXTERNAL MODULE: ./components/utils/helper.js
var helper = __webpack_require__(434);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
;// CONCATENATED MODULE: ./components/layout/Navbar.js









 // import styles from "../../styles/Navbar.module.scss";








const cookies = new (external_universal_cookie_default())();
var timeout = 0;
const languages = [{
  code: "en",
  name: "English",
  country_code: "us"
}, {
  code: "ar_QA",
  name: "Arabic",
  country_code: "qa"
}];

function Navbar({
  FontAwesomeIcon,
  lang,
  styles,
  Media,
  cartItems,
  auth,
  t,
  plusOne,
  minusOne,
  logout,
  removeCartItem,
  setCartAfterPriceChange,
  i18n
}) {
  const router = (0,router_.useRouter)();
  const {
    0: language,
    1: setLanguage
  } = (0,external_react_.useState)();
  const {
    0: placeHolderText,
    1: setPlaceHolderText
  } = (0,external_react_.useState)("");
  const {
    0: searchQuery,
    1: setSearchQuery
  } = (0,external_react_.useState)("");
  const {
    0: showResult,
    1: setShowResult
  } = (0,external_react_.useState)(false);
  const {
    0: searchResult,
    1: setSearchResult
  } = (0,external_react_.useState)([]);
  const {
    0: instock,
    1: setInstock
  } = (0,external_react_.useState)([]);
  const {
    0: oos,
    1: setOos
  } = (0,external_react_.useState)(false);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(false);
  const {
    0: shipping,
    1: setShipping
  } = (0,external_react_.useState)(10);
  const {
    0: subTotal,
    1: setSubTotal
  } = (0,external_react_.useState)(cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0));
  const {
    0: discount,
    1: setDiscount
  } = (0,external_react_.useState)( false ? 0 : 0);

  const searchHandler = event => {
    if (searchQuery.length > 3) {
      setShowResult(true);
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        axios/* default.get */.Z.get(`${lang}/products?query=${searchQuery}`).then(res => {
          setSearchResult(res.data);
        }).catch();
      }, 800);
    } else {
      setShowResult(false);
    }
  };

  const keyHandler = event => {
    if (searchQuery.length > 0) {
      if (event.key === "Enter") {
        router.push(`/search/${searchQuery}`);
        setShowResult(false);
        setSearchQuery("");
      }
    }
  };

  const searchTermClick = (term = null) => {
    if (term !== null) {
      router.push(`/search/${term}`);
      setSearchQuery("");
      setShowResult(false);
    }
  };

  const resultClick = (slug, brand = false) => {
    if (brand) {
      router.push(slug);
    } else {
      router.push(`/product/${slug}`);
    }

    setSearchQuery("");
    setShowResult(false);
  };

  const LanguageHandler = value => {
    // i18n.changeLanguage(value);
    if (value == "en") {
      i18n.changeLanguage("en");
      document.body.classList.remove("rtl");
      cookies.set("lang", "en", {
        path: "/",
        SameSite: "None; Secure",
        maxAge: 15 * 86400
      });
      setLanguage("en"); // window.location.pathname == "/" && window.location.reload();
    } else {
      i18n.changeLanguage("ar_QA");
      document.body.classList.add("rtl");
      cookies.set("lang", "ar_QA", {
        path: "/",
        SameSite: "None; Secure",
        maxAge: 15 * 86400
      });
      setLanguage("ar_QA"); // window.location.pathname == "/" && window.location.reload();
    }

    window.location.reload();
  };

  const deleteHandler = (id, option_id, bulk_id = null) => {
    let confirm = window.confirm("Are You Sure To Delete ??");

    if (confirm) {
      removeCartItem(id, option_id, bulk_id);
    }
  }; //logout


  const logoutClick = () => {
    // console.log("logout");
    logout(); // logoutUser();
  };

  const plusHandler = (product_id, qnt, option_id) => {
    plusOne(product_id, option_id);
  };

  const minusHandler = (product_id, qnt, option_id) => {
    if (qnt > 1) {
      minusOne(product_id, option_id);
    }
  };

  (0,external_react_.useEffect)(() => {
    setLanguage(cookies.get("lang"));
    const searchKeys = {
      en: ['Cream', 'Lotion', 'Face Wipes', 'Eye Liner', 'Lip Care'],
      ar_QA: ['كريم', 'لوشن', 'مناديل الوجه للعناية', 'محدد العين/ايلاينر', 'العناية بالشفاه']
    };
    const defaultText = {
      en: "Search for",
      ar_QA: "بحث عن"
    };
    /**
     * 
     * @param {Integer} i 
     * @return void
     */

    const pollPlaceholder = i => {
      let len = 0,
          keyLen = searchKeys[language][i].length;
      let x = setInterval(() => {
        let searchKey = searchKeys[language][i].slice(0, len);
        setPlaceHolderText(defaultText[language] + ' ' + searchKey);

        if (keyLen == len) {
          clearInterval(x);
          setTimeout(() => {
            len = -1;
            let index = i == searchKeys[language].length - 1 ? 0 : i + 1;
            pollPlaceholder(index);
          }, 1000);
        }

        len += 1;
      }, 120);
    };

    if (language) {
      setTimeout(pollPlaceholder(0), 1000);
    }
  }, [language]);

  const mobileSearchHandler = () => {
    setIsOpen(!isOpen);
    setSearchQuery("");
    setSearchResult([]);
  };

  const cartCount = () => {
    // console.log(props.cartItems);
    let t = cartItems.reduce((acc, item) => acc += item.qnt, 0);
    return t;
  };

  (0,external_react_.useEffect)(() => {
    setSubTotal(cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0) - discount);

    if (subTotal < 100) {
      setShipping(10);
    } else {
      setShipping(0);
    }
  }, [subTotal, cartItems, discount]);
  (0,external_react_.useEffect)(() => {
    if (cartItems.length > 0) {
      let formData = cartItems.map(item => {
        return {
          product_id: item.product_id,
          price: item.price.amount,
          qty: item.qnt,
          option: item.option_main_id || null,
          option_child: item.option_id || null
        };
      });
      let locale = i18n.language || "en";
      axios/* default.post */.Z.post("/" + locale + "/cartdata/items", formData).then(res => {
        let instock = [];
        res.data.map(dt => {
          instock.push(dt.in_stock);
        });
        let current = res.data;
        let ifUpdate = false;
        let update = cartItems.map((item, index) => {
          if (item.price.amount !== current[index].selling_price.amount) {
            ifUpdate = true;
            item.price = current[index].selling_price;
          }

          return item;
        });

        if (ifUpdate) {
          // console.log(update);
          setCartAfterPriceChange(update);
        }

        setInstock(instock);
        let r = instock.filter(d => d === false).length;

        if (r > 0) {
          setOos(true);

          if (router.pathname === "/checkout") {
            router.replace("/bag");
          }
        } else {
          setOos(false);
        }
      });

      if (localStorage.getItem("coupon_id") || localStorage.getItem("discount") || localStorage.getItem("coupon")) {// couponHandler();
      }
    }
  }, [cartItems, i18n.language]);

  const couponHandler = () => {
    let myCoupon = coupon || localStorage.getItem("coupon");

    if (coupon == "" && localStorage.getItem("coupon_id")) {
      setCoupon(localStorage.getItem("coupon"));
    }

    if (cartItems.length > 0) {
      let cart = cartItems.map(item => {
        return {
          product_id: item.product_id,
          price: item.price.amount,
          qty: item.qnt,
          option: item.option_main_id || null,
          option_child: item.option_id || null
        };
      });
      axios/* default.post */.Z.post("en/checkout/coupon", {
        api: true,
        cart,
        coupon: myCoupon
      }).then(res => {
        setFlag(true);
        setMsg(null); // setCouponId(res.data.coupon_id);

        setDiscount(res.data.discount);
        setSubTotal(cartItems.reduce((acc, item) => acc += item.qnt * item.price.amount, 0) - res.data.discount);

        if (localStorage.getItem("coupon_id") && res.data.coupon_id != localStorage.getItem("coupon_id")) {
          localStorage.removeItem("coupon");
          localStorage.removeItem("coupon_id");
          localStorage.removeItem("discount"); // setCouponId("");

          setCoupon("");
          setDiscount(0);
          setFlag(false);
        } else {
          localStorage.setItem("coupon_id", res.data.coupon_id);
          localStorage.setItem("discount", res.data.discount);
          localStorage.setItem("coupon", myCoupon);
        } // alert(res.data.msg);

      }).catch(err => {
        setMsg(err.response.data);
        setDiscount(0); // clearCoupon();
      });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container navbar",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: styles.navbar_content,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: styles.logo_content,
            children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "https://admin.beautyboothqa.com/storage/media/l9btfTHlIZ9bgvEH2YbmKvITY5r48WRBeFmSh87B.svg"
                  })
                })
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: styles.search_container,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: styles.search_content,
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                name: "search",
                placeholder: placeHolderText,
                value: searchQuery,
                onChange: e => setSearchQuery(e.target.value),
                onKeyUp: searchHandler,
                onKeyPress: keyHandler
              }), /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                icon: free_solid_svg_icons_.faSearch
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: showResult ? `${styles.search_result} ${styles.active}` : `${styles.search_result}`,
                children: [searchResult.brand && searchResult.brand.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    style: {
                      color: "black",
                      marginLeft: "10px",
                      border: "none"
                    },
                    children: "Brand"
                  }), searchResult.brand.map((rs, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: styles.search_result_li,
                      onClick: () => {
                        resultClick(rs.url, true);
                      },
                      children: [rs.image && /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: rs.image,
                        alt: rs.slug
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: rs.name
                      })]
                    })
                  }, index))]
                }), searchResult.searchTerms && searchResult.searchTerms.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    style: {
                      color: "black",
                      marginLeft: "10px",
                      border: "none"
                    },
                    children: "Popular searches"
                  }), searchResult.searchTerms.map((rs, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: styles.search_result_li,
                      onClick: () => searchTermClick(encodeURI(rs.term)),
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: rs.term
                      }), " "]
                    })
                  }, index))]
                }), searchResult.products && auth && auth.isAuthenticated && /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    style: {
                      color: "black",
                      marginLeft: "10px",
                      border: "none"
                    },
                    children: "Products"
                  }), searchResult.products.map((rs, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: styles.search_result_li,
                      onClick: () => {
                        resultClick(rs.slug);
                      },
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: rs.files[0].thumbnail_image,
                        alt: ""
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: rs.name
                      })]
                    })
                  }, index))]
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: styles.mb_search_content,
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: styles.mobile_search_icon,
                children: /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                  onClick: mobileSearchHandler,
                  icon: free_solid_svg_icons_.faSearch
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: styles.icon_content,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown, {
                  id: "language_dropdown",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Toggle, {
                    id: "language_dropdown_button",
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: `select-flag flag-icon flag-icon-${language == "en" ? "us" : "qa"}`
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Menu, {
                    alignRight: true,
                    children: languages.map(({
                      code,
                      name,
                      country_code
                    }) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown.Item, {
                      onClick: () => {
                        LanguageHandler(code);
                      },
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: `flag-icon flag-icon-${country_code}`
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "flag-text",
                        children: name
                      })]
                    }, country_code))
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Dropdown, {
                  id: "profile_dropdown",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Toggle, {
                    id: "profile_dropdown_button",
                    children: /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                      icon: free_solid_svg_icons_.faUser,
                      className: `${styles.main_icon}`
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Menu, {
                    alignRight: true,
                    children: auth.isAuthenticated ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                          children: JSON.parse(localStorage.getItem("user")).first_name
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                          href: "/profile",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            children: t("Profile")
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                          onClick: logoutClick,
                          children: [" ", t("Logout")]
                        })
                      })]
                    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                          href: "/login",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "d-block",
                            children: t("login")
                          })
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Dropdown.Item, {
                        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                          href: "/register",
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            className: "d-block",
                            children: t("registration")
                          })
                        })
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                children: [/*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                  icon: free_solid_svg_icons_.faShoppingBag,
                  className: styles.main_icon,
                  onClick: () => {
                    if (localStorage.getItem("coupon_id") || localStorage.getItem("discount") || localStorage.getItem("coupon")) {// couponHandler();
                    }

                    setActive(!active);
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: `${styles.bag_count}`,
                  children: cartCount()
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: active ? `${styles.bag_popup} ${styles.active}` : styles.bag_popup,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: styles.bag_top,
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: styles.top_inner,
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        className: styles.bag_total,
                        children: [cartItems.length, " ", t("items")]
                      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "btn btn-sm btn-outline-danger",
                        onClick: () => setActive(!active),
                        children: "Close"
                      })]
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: styles.bag_middle,
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: "progress",
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: subTotal + discount < 100 ? "progress-bar bg-danger" : "progress-bar bg-success",
                        role: "progressbar",
                        style: {
                          width: `${subTotal + discount}%`
                        },
                        "aria-valuenow": `${subTotal + discount}`,
                        "aria-valuemin": "0",
                        "aria-valuemax": "100"
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        className: "shipping__progress",
                        children: subTotal + discount < 100 ? `Order QAR${100 - parseInt(subTotal + discount)}.00 more to get free shipping` : t("free_shipping")
                      })]
                    }), cartItems.length > 0 ? cartItems.map((cartItem, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: styles.product__item,
                      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: styles.product__quantity,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                          disabled: cartItem.max_cart_qnt <= cartItem.qnt,
                          onClick: () => plusHandler(cartItem.product_id, cartItem.qnt, cartItem.option_id),
                          children: /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                            icon: free_solid_svg_icons_.faPlus
                          })
                        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: styles.qnt,
                          children: cartItem.qnt
                        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                          disabled: cartItem.qnt <= 1,
                          onClick: () => minusHandler(cartItem.product_id, cartItem.qnt, cartItem.option_id),
                          children: [" ", /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                            icon: free_solid_svg_icons_.faMinus
                          })]
                        })]
                      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                        className: styles.product__img,
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: cartItem.thumb,
                          alt: ""
                        })
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: styles.product__name,
                        children: [cartItem.name, /*#__PURE__*/jsx_runtime_.jsx("span", {
                          className: styles.option__lavel,
                          children: cartItem.option_value
                        }), instock ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                          children: instock[index] ? /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: `${styles.status} text-success`,
                            children: t("in stock")
                          }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: styles.status,
                            style: {
                              color: "red"
                            },
                            children: t("out of stock")
                          })
                        }) : ""]
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: styles.product__price,
                        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                          children: [cartItem.price.currency, " ", (0,helper.getPrice)(cartItem)]
                        }), /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                          onClick: () => deleteHandler(cartItem.product_id, cartItem.option_id, cartItem.bulk_id),
                          icon: free_solid_svg_icons_.faTimes
                        })]
                      })]
                    }, index)) : /*#__PURE__*/jsx_runtime_.jsx("h6", {
                      className: "text-center mt-5 mb-5",
                      children: t("empty_bag")
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: styles.bag_bottom,
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/bag",
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        onClick: () => {
                          setActive(false);
                        },
                        className: styles.place_order,
                        children: "Place Order"
                      })
                    })
                  })]
                })]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: isOpen ? `${styles.mb_search_input}` : `${styles.mb_search_input} ${styles.closed}`,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: styles.mb_search_input_wrapper,
              children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                placeholder: "search for..",
                type: "text",
                name: "",
                id: "searchBox",
                value: searchQuery,
                onChange: e => setSearchQuery(e.target.value),
                onKeyUp: searchHandler,
                onKeyPress: keyHandler
              }), /*#__PURE__*/jsx_runtime_.jsx(FontAwesomeIcon, {
                onClick: mobileSearchHandler,
                className: styles.search_icon,
                icon: free_solid_svg_icons_.faTimesCircle
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: showResult ? `${styles.search_result} ${styles.active}` : `${styles.search_result}`,
                children: [searchResult.brand && searchResult.brand.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    style: {
                      color: "black",
                      marginLeft: "10px",
                      border: "none"
                    },
                    children: "Brand"
                  }), searchResult.brand.map((rs, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: styles.search_result_li,
                      onClick: () => {
                        resultClick(rs.url, true);
                      },
                      children: [rs.image && /*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: rs.image,
                        alt: rs.slug
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: rs.name
                      })]
                    })
                  }, index))]
                }), searchResult.searchTerms && searchResult.searchTerms.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    style: {
                      color: "black",
                      marginLeft: "10px",
                      border: "none"
                    },
                    children: "Popular searches"
                  }), searchResult.searchTerms.map((rs, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: styles.search_result_li,
                      onClick: () => searchTermClick(encodeURI(rs.term)),
                      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: rs.term
                      }), " "]
                    })
                  }, index))]
                }), searchResult.products && auth && auth.isAuthenticated && /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    style: {
                      color: "black",
                      marginLeft: "10px",
                      border: "none"
                    },
                    children: "Products"
                  }), searchResult.products.map((rs, index) => /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      className: styles.search_result_li,
                      onClick: () => {
                        resultClick(rs.slug);
                      },
                      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                        src: rs.files[0].thumbnail_image,
                        alt: ""
                      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: rs.name
                      })]
                    })
                  }, index))]
                })]
              })]
            })
          })]
        })
      })
    })
  });
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItem,
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    removeCartItem: (id, option_id, bulk_id) => (0,cartAction/* removeCartItem */.B8)(dispatch, id, option_id, bulk_id),
    logout: () => (0,authActions/* logoutUser */.TX)(dispatch),
    plusOne: (product_id, option_id) => (0,cartAction/* PlusOne */.AP)(dispatch, product_id, option_id),
    minusOne: (product_id, option_id) => (0,cartAction/* minusOne */.eO)(dispatch, product_id, option_id),
    setCartAfterPriceChange: cartItems => (0,cartAction/* setCartAfterPriceChange */.tl)(dispatch, cartItems)
  };
};

/* harmony default export */ const layout_Navbar = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)((0,i18n.withTranslation)("common")(Navbar)));
// EXTERNAL MODULE: ./components/layout/partials/Divider.js
var Divider = __webpack_require__(5651);
;// CONCATENATED MODULE: ./components/layout/NavbarWrapper.js




 // import Notice from "./Notice";



function NavbarWrapper({
  FontAwesomeIcon,
  lang,
  styles
}) {
  const {
    0: isScroll,
    1: setIsScroll
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
    return () => window.removeEventListener("scroll", () => {});
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: `navbar_wrap ${isScroll ? "sticky fade_in_down" : ""}`,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Divider.default, {}), /*#__PURE__*/jsx_runtime_.jsx(layout_Navbar, {
      FontAwesomeIcon: FontAwesomeIcon,
      lang: lang,
      styles: styles
    }), /*#__PURE__*/jsx_runtime_.jsx(Divider.default, {}), /*#__PURE__*/jsx_runtime_.jsx(Menu.default, {
      lang: lang
    }), /*#__PURE__*/jsx_runtime_.jsx(Divider.default, {})]
  });
}

/* harmony default export */ const layout_NavbarWrapper = (NavbarWrapper);

/***/ }),

/***/ 5651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


// import React from "react";
function Divider() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "container-fluid devider",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "row",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "col"
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Divider);

/***/ })

};
;