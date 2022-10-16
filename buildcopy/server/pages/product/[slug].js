(() => {
var exports = {};
exports.id = 2915;
exports.ids = [2915,3921];
exports.modules = {

/***/ 3921:
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



function Loader() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "loader_container",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
      src: "/svg/loading.svg",
      alt: "loading"
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ 3022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__(2625);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(799);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(887);
// EXTERNAL MODULE: ./components/atom/HeaderComponent.jsx
var HeaderComponent = __webpack_require__(7040);
// EXTERNAL MODULE: external "react-id-swiper"
var external_react_id_swiper_ = __webpack_require__(443);
var external_react_id_swiper_default = /*#__PURE__*/__webpack_require__.n(external_react_id_swiper_);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
;// CONCATENATED MODULE: ./components/MoreThisBrand.jsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Product = dynamic_default()(() => Promise.all(/* import() */[__webpack_require__.e(434), __webpack_require__.e(836)]).then(__webpack_require__.bind(__webpack_require__, 836)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(836)],
    modules: ["../components/MoreThisBrand.jsx -> " + "./atom/Product"]
  }
});

function MoreThisBrand({
  products
}) {
  const {
    0: swiper,
    1: updateSwiper
  } = (0,external_react_.useState)(null);
  const params = {
    slidesPerView: 3.1,
    // slidesPerColumn: 2,
    spaceBetween: 10,
    breakpoints: {
      992: {
        slidesPerView: 3.3,
        spaceBetween: 10
      },
      991: {
        slidesPerView: 3.1,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 2
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 1
      }
    }
  };

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "",
    children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_id_swiper_default()), _objectSpread(_objectSpread({
      getSwiper: updateSwiper
    }, params), {}, {
      children: products.map((product, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Product, {
          product: product
        })
      }, index))
    })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "swiper_button_container",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        onClick: goPrev,
        className: "prev"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        onClick: goNext,
        className: "next"
      })]
    })]
  });
}

/* harmony default export */ const components_MoreThisBrand = (MoreThisBrand);
;// CONCATENATED MODULE: external "react-star-ratings"
const external_react_star_ratings_namespaceObject = require("react-star-ratings");
var external_react_star_ratings_default = /*#__PURE__*/__webpack_require__.n(external_react_star_ratings_namespaceObject);
;// CONCATENATED MODULE: ./components/atom/Reviews.jsx







function Reviews(props) {
  const {
    t
  } = props;
  const total = props.reviews.length;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "previous_review_container",
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderComponent/* default */.Z, {
      text: total + " " + t('CUSTOMER REVIEWS')
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row",
      children: props.reviews.map((elem, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-md-4",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "previous_review",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "customer_name",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: elem.reviewer_name
            })
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_star_ratings_default()), {
            rating: elem.rating,
            starRatedColor: "#ec198e",
            numberOfStars: 5,
            name: "rating"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "date",
            children: elem.created_at.split(" ")[0]
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "details",
            children: elem.comment
          })]
        })
      }, index))
    })]
  });
}

/* harmony default export */ const atom_Reviews = ((0,i18n.withTranslation)('product')(Reviews));
// EXTERNAL MODULE: ./redux/actions/authActions.js
var authActions = __webpack_require__(6808);
// EXTERNAL MODULE: ./redux/actions/axios.js
var axios = __webpack_require__(6698);
// EXTERNAL MODULE: ./styles/Description.module.scss
var Description_module = __webpack_require__(7149);
var Description_module_default = /*#__PURE__*/__webpack_require__.n(Description_module);
;// CONCATENATED MODULE: ./components/Descriptions.jsx




function Descriptions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Descriptions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Descriptions_ownKeys(Object(source), true).forEach(function (key) { Descriptions_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Descriptions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Descriptions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function Descriptions({
  product_id,
  attribute,
  desc,
  similar_brands,
  reviews,
  avgRating,
  auth,
  loginUser,
  t,
  lang
}) {
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(1);
  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)();
  const {
    0: rating,
    1: setRating
  } = (0,external_react_.useState)(0);
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)("");
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)("");
  const {
    0: newReview,
    1: setNewReview
  } = (0,external_react_.useState)({
    product_id,
    reviewer_name: auth.isAuthenticated ? JSON.parse(auth.user).first_name === JSON.parse(auth.user).last_name ? JSON.parse(auth.user).first_name : JSON.parse(auth.user).first_name + " " + JSON.parse(auth.user).last_name : "",
    rating: null,
    comment: null
  }); // const [error, setError] = useState("");

  const loginHandler = e => {
    e.preventDefault();
    let form = new FormData();
    form.append("email", email);
    form.append("password", password);
    loginUser(form);
  }; // useEffect(() => {
  //   setTimeout(() => {
  //     setError(null);
  //   }, 3000);
  // }, [error]);


  const createMarkup = data => {
    return {
      __html: data
    };
  };

  const BrandDesc = () => {
    if (attribute.length > 0) {
      let brand = attribute.filter(attr => attr.attribute_id === 4);

      if (brand.length > 0) {
        brand = brand[0];
        const desc = brand.values[0].attribute_value.translations[0].description;
        const image = brand.values[0].attribute_value.image ? brand.values[0].attribute_value.image.image : null;
        const brandName = brand.values[0].attribute_value.value;
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Description_module_default()).brand_description__wrapper,
          children: [image ? /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: image,
            alt: "brand-image",
            className: (Description_module_default()).brand_image
          }) : null, /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Description_module_default()).main_description,
            dangerouslySetInnerHTML: createMarkup(desc)
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: `/brand/${brandName.split(" ").join("-")}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: (Description_module_default()).brand_link,
              children: "see all"
            })
          })]
        });
      }
    }

    return null;
  }; //change rating


  const changeRating = (newRating, name) => {
    setRating(newRating);
    setNewReview(Descriptions_objectSpread(Descriptions_objectSpread({}, newReview), {}, {
      rating: newRating
    }));
  };

  const submitReviewHandler = e => {
    e.preventDefault();

    if (!newReview.rating) {
      window.alert("Please provide a rating");
    } else if (!newReview.comment) {
      window.alert("Please provide a comment");
    } else {
      if (localStorage.getItem("auth_token")) {
        let token = localStorage.getItem("auth_token");
        axios/* default.defaults.headers.common.Authorization */.Z.defaults.headers.common.Authorization = `Bearer ${token}`;
      }

      axios/* default.post */.Z.post(`setdata/${newReview.product_id}/reviews`, Descriptions_objectSpread({}, newReview)).then(res => {
        setNewReview(Descriptions_objectSpread(Descriptions_objectSpread({}, newReview), {}, {
          comment: null,
          rating: null
        }));
        setRating(0);
        window.alert(res.data);
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Description_module_default()).descriptions_container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Description_module_default()).descrption_title_container,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: (Description_module_default()).tab_menu,
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          onClick: () => setActive(1),
          className: active === 1 ? `${(Description_module_default()).active}` : null,
          children: t("Description")
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          onClick: () => setActive(2),
          className: active === 2 ? `${(Description_module_default()).active}` : null,
          children: t("More About this Brand")
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          onClick: () => setActive(3),
          className: active === 3 ? `${(Description_module_default()).active}` : null,
          children: t("Review")
        })]
      })
    }), active === 1 ? /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: lang == "en" ? `${(Description_module_default()).descriptions}` : `${(Description_module_default()).descriptions} ${(Description_module_default()).rtl}`,
      dangerouslySetInnerHTML: createMarkup(desc)
    }) : null, active === 2 ? similar_brands.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(BrandDesc, {}), /*#__PURE__*/jsx_runtime_.jsx(components_MoreThisBrand, {
        products: similar_brands
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx("h6", {
      className: "text-center",
      children: t("Not Available")
    }) : null, active === 3 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Description_module_default()).descritions,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Description_module_default()).review_rating_container,
        children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderComponent/* default */.Z, {
          text: t("Review and Ratings")
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-6",
            children: auth.isAuthenticated ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "text-center",
                children: "Write A Review"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Description_module_default()).write_review,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).your_rating,
                  children: "Your Rating :"
                }), /*#__PURE__*/jsx_runtime_.jsx((external_react_star_ratings_default()), {
                  rating: rating,
                  starRatedColor: "#ec198e",
                  changeRating: changeRating,
                  numberOfStars: 5,
                  name: "rating"
                }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                  placeholder: "Your opinion about this product....",
                  rows: "5",
                  value: newReview.comment || "",
                  onChange: e => setNewReview(Descriptions_objectSpread(Descriptions_objectSpread({}, newReview), {}, {
                    comment: e.currentTarget.value
                  }))
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: (Description_module_default()).submit_btn,
                  onClick: submitReviewHandler,
                  children: "Submit"
                })]
              })]
            }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                method: "POST",
                onSubmit: e => loginHandler(e),
                children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                  className: "text-center bg-warning p-2",
                  children: t("YOU NEED TO LOGIN BEFORE REVIEW")
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    className: (Description_module_default()).input_label,
                    children: t("Email address")
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "email",
                    className: "form-control",
                    "aria-describedby": "emailHelp",
                    placeholder: t("Enter email"),
                    value: email,
                    onChange: e => setEmail(e.currentTarget.value)
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "form-group",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                    className: (Description_module_default()).input_label,
                    children: t("Password")
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    type: "password",
                    className: "form-control ",
                    placeholder: t("Enter Password"),
                    value: password,
                    onChange: e => setPassword(e.currentTarget.value)
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (Description_module_default()).input_label,
                    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/forget-password",
                      children: t("Forget Password")
                    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/register",
                      children: t("Register")
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: (Description_module_default()).form_btn_container,
                  children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                    className: email === "" || password === "" ? `${(Description_module_default()).disabled} ${(Description_module_default()).submit_btn}` : `${(Description_module_default()).submit_btn}`,
                    type: "submit",
                    value: t("login")
                  })
                })]
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-md-6",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h4", {
              className: "text-center mb-3",
              children: [t("ratings"), " - ", reviews.length]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (Description_module_default()).progress_container,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Description_module_default()).single_progress,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).left,
                  children: "5"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progress-bar",
                    role: "progressbar",
                    style: {
                      width: 100 / (reviews.length / reviews.filter(rb => rb.rating == 5).length) + "%"
                    },
                    "aria-valuenow": "25",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).right,
                  children: reviews.filter(rb => rb.rating == 5).length
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Description_module_default()).single_progress,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).left,
                  children: "4"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progress-bar",
                    role: "progressbar",
                    style: {
                      width: 100 / (reviews.length / reviews.filter(rb => rb.rating == 4).length) + "%"
                    },
                    "aria-valuenow": "25",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).right,
                  children: reviews.filter(rb => rb.rating == 4).length
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Description_module_default()).single_progress,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).left,
                  children: "3"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progress-bar",
                    role: "progressbar",
                    style: {
                      width: 100 / (reviews.length / reviews.filter(rb => rb.rating == 3).length) + "%"
                    },
                    "aria-valuenow": "25",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).right,
                  children: reviews.filter(rb => rb.rating == 3).length
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Description_module_default()).single_progress,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).left,
                  children: "2"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progress-bar",
                    role: "progressbar",
                    style: {
                      width: 100 / (reviews.length / reviews.filter(rb => rb.rating == 2).length) + "%"
                    },
                    "aria-valuenow": "25",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).right,
                  children: reviews.filter(rb => rb.rating == 2).length
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (Description_module_default()).single_progress,
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).left,
                  children: "1"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "progress",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "progress-bar",
                    role: "progressbar",
                    style: {
                      width: 100 / (reviews.length / reviews.filter(rb => rb.rating == 1).length) + "%"
                    },
                    "aria-valuenow": "25",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (Description_module_default()).right,
                  children: reviews.filter(rb => rb.rating == 1).length
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(atom_Reviews, {
          reviews: reviews,
          avgRating: avgRating
        })]
      })
    }) : null]
  });
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    loginUser: userInfo => (0,authActions/* loginUser */.pH)(dispatch, userInfo)
  };
};

/* harmony default export */ const components_Descriptions = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(Descriptions));
;// CONCATENATED MODULE: ./components/atom/RecommendedProduct.jsx





const RecommendedProduct = ({
  product,
  style
}) => {
  const Price = () => {
    if (product) {
      if (product.has_offer) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: `${style.product_price} ${style.offer_price}`,
          children: [product.selling_price.formatted, " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: style.old,
            children: product.price.formatted
          })]
        });
      } else {
        return /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: style.product_price,
          children: product.price.formatted
        });
      }
    }

    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: style.product_price,
      children: "QAR 00.00"
    });
  };

  const BrandName = attribute => {
    if (attribute.attribute.length > 0) {
      let brand = attribute.attribute.filter(attr => attr.attribute_id == 4);

      if (brand.length > 0) {
        brand = brand[0].Brand;
        return brand ? /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: style.product_brand,
          children: brand
        }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: style.product_brand,
          children: " "
        });
      }
    }

    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "product_brand",
      children: " "
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/product/${product.slug}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      className: style.product,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: style.product_img,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: product ? product.files[0].thumbnail_image : "../../public/assets/images/product.png",
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(BrandName, {
        attribute: product.attributes
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: style.product_name,
        children: product.name
      }), /*#__PURE__*/jsx_runtime_.jsx(Price, {})]
    })
  });
};

/* harmony default export */ const atom_RecommendedProduct = (RecommendedProduct);
// EXTERNAL MODULE: ./styles/Recomanded.module.scss
var Recomanded_module = __webpack_require__(1919);
var Recomanded_module_default = /*#__PURE__*/__webpack_require__.n(Recomanded_module);
;// CONCATENATED MODULE: ./components/Recomanded.jsx





function Recomanded({
  products,
  t
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "row no-gutters",
      children: products.map((product, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "col-6 col-xs-6 col-sm-6 col-md-6 col-lg-12 px-2 px-md-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(atom_RecommendedProduct, {
          product: product,
          style: (Recomanded_module_default())
        })
      }, index))
    })
  });
}

/* harmony default export */ const components_Recomanded = ((0,i18n.withTranslation)("product")(Recomanded));
;// CONCATENATED MODULE: external "react-image-magnify"
const external_react_image_magnify_namespaceObject = require("react-image-magnify");
var external_react_image_magnify_default = /*#__PURE__*/__webpack_require__.n(external_react_image_magnify_namespaceObject);
;// CONCATENATED MODULE: ./components/ProductImage.jsx




function ProductImage_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProductImage_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProductImage_ownKeys(Object(source), true).forEach(function (key) { ProductImage_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProductImage_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProductImage_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function ProductImage({
  style,
  images
}) {
  const {
    0: activeImg,
    1: setActiveImg
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: style.product_images,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: style.thumbs_images,
        children: images.map((image, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: index == activeImg ? `${style.thumb_item} ${style.active}` : style.thumb_item,
            onClick: () => setActiveImg(index),
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: image.thumbnail_image,
              alt: ""
            })
          })
        }, index))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: style.main_images,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: style.main_img_container,
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_image_magnify_default()), ProductImage_objectSpread({}, {
            smallImage: {
              alt: images[activeImg].path,
              isFluidWidth: true,
              src: images[activeImg].path
            },
            largeImage: {
              src: images[activeImg].path,
              alt: images[activeImg].filename,
              isFluidWidth: true,
              width: 1100,
              height: 600
            },
            enlargedImagePortalId: "zoomPortion",
            enlargedImageContainerDimensions: {
              width: "200%",
              height: "100%"
            }
          }))
        })
      })]
    })
  });
}

/* harmony default export */ const components_ProductImage = (ProductImage);
// EXTERNAL MODULE: ./components/atom/Loader.jsx
var Loader = __webpack_require__(3921);
// EXTERNAL MODULE: ./redux/actions/cartAction.js
var cartAction = __webpack_require__(571);
;// CONCATENATED MODULE: external "react-countdown"
const external_react_countdown_namespaceObject = require("react-countdown");
var external_react_countdown_default = /*#__PURE__*/__webpack_require__.n(external_react_countdown_namespaceObject);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./components/utils/gtm.js
var gtm = __webpack_require__(7995);
// EXTERNAL MODULE: ./styles/ProductPage.module.scss
var ProductPage_module = __webpack_require__(2057);
var ProductPage_module_default = /*#__PURE__*/__webpack_require__.n(ProductPage_module);
;// CONCATENATED MODULE: ./pages/product/[slug].js



 // import { withRouter } from "react-router-dom";


 // import Swiper from "react-id-swiper";
// import { Wrapper, Button, Menu, MenuItem } from "react-aria-menubutton";

 // import ReactImageMagnify from "react-image-magnify";
// import ReactImageZoom from "react-image-zoom";










 // import { isMobile } from "react-device-detect";
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";




 // import Cookies from "universal-cookie";

function ProductPage(props) {
  var _props$product$meta$m;

  const {
    t
  } = props;
  const thumb = (0,external_react_.useRef)(null);
  const {
    0: product,
    1: setProduct
  } = (0,external_react_.useState)(null);
  const {
    0: variantProduct,
    1: setVariantProduct
  } = (0,external_react_.useState)(null);
  const {
    0: variantSize,
    1: setVariantSize
  } = (0,external_react_.useState)([]);
  const {
    0: gallerySwiper,
    1: getGallerySwiper
  } = (0,external_react_.useState)(null);
  const {
    0: thumbnailSwiper,
    1: getThumbnailSwiper
  } = (0,external_react_.useState)(null);
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)("0");
  const {
    0: waitListEmail,
    1: setWaitListEmail
  } = (0,external_react_.useState)(props.auth.isAuthenticated ? JSON.parse(props.auth.user).email : ""); // const [infos, setInfos] = useState(null);

  const gallerySwiperParams = {
    observer: true,
    observeParents: true,
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    centeredSlides: true,
    effect: "fade",
    // rtl: true,
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination-custom",
      type: "bullets",
      clickable: true
    },
    height: 420,
    zoom: {
      maxRatio: 1.5,
      minRation: 1
    },
    grabCursor: true,
    centeredSlides: true
  };
  const thumbnailSwiperParams = {
    observer: true,
    observeParents: true,
    // rtl: false,
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 0,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    direction: "vertical",
    grabCursor: true,
    mousewheel: true,
    setWrapperSize: true,
    autoHeight: true,
    height: 400
  };
  const {
    0: review,
    1: setReview
  } = (0,external_react_.useState)(0);
  const {
    0: qnt,
    1: setQnt
  } = (0,external_react_.useState)(1);
  const {
    0: optionValue,
    1: setOptionValue
  } = (0,external_react_.useState)();
  const {
    0: maxQnt,
    1: setMaxQnt
  } = (0,external_react_.useState)();
  (0,external_react_.useEffect)(() => {
    (0,gtm/* GTMProductView */.Po)(props.product);
    /**
     * FOR FB CONVERSION API
     */
    // let fbp = document.cookie
    //   .split(";")
    //   .filter((c) => c.includes("_fbp="))
    //   .map((c) => c.split("_fbp=")[1]);
    // let fbc = document.cookie
    //   .split(";")
    //   .filter((c) => c.includes("_fbc="))
    //   .map((c) => c.split("_fbc=")[1]);
    // fbp = (fbp.length && fbp[0]) || null;
    // fbc = (fbc.length && fbc[0]) || null;
    // if (!fbc && window.location.search.includes("fbclid=")) {
    //   fbc =
    //     "fb.1." +
    //     +new Date() +
    //     "." +
    //     window.location.search.split("fbclid=")[1];
    // }
    // let em = props.auth.isAuthenticated
    //   ? JSON.parse(props.auth.user).email
    //   : null;
    // Axios.post("/event/viewProduct", {
    //   em,
    //   product_id: props.product.id,
    //   name: props.product.name,
    //   eventName: "ViewContent",
    //   eventNameSource: `https://beautyboothqa.com/product/${props.product.slug}`,
    //   fbp,
    //   fbc,
    // });
  }, [props.product.slug]);
  (0,external_react_.useEffect)(() => {
    let cartProduct = props.cart.filter(p => p.product_id == props.product.id);

    if ((cartProduct === null || cartProduct === void 0 ? void 0 : cartProduct.length) > 0) {
      let value = props.product.max_cart_qnt - cartProduct[0].qnt;
      props.product.max_cart_qnt ? setMaxQnt(value) : setMaxQnt(1000);
    } else {
      props.product.max_cart_qnt ? setMaxQnt(props.product.max_cart_qnt) : setMaxQnt(1000);
    }

    if (props.product) {
      setProduct(props.product);
      axios/* default.get */.Z.get(`/${props.language}/getdata/variant/${props.product.slug}`).then(res => {
        setVariantProduct(res.data.option);
        setVariantSize(res.data.size);
      });
    }
  }, [props.product, props.cart]);
  (0,external_react_.useEffect)(() => {
    if (gallerySwiper !== null && gallerySwiper.controller && thumbnailSwiper !== null && thumbnailSwiper.controller) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [thumbnailSwiper, gallerySwiper]);

  const Variants = () => {
    if ((variantProduct === null || variantProduct === void 0 ? void 0 : variantProduct.length) > 0) {
      let t = variantProduct.map((product, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (ProductPage_module_default()).variant_product,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/product/${product.slug}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              title: product.name,
              src: product.files[0].thumbnail_image,
              style: {
                height: "50px",
                width: "50px"
              }
            })
          })
        })
      }, index));
      return t;
    }

    return "";
  };

  const Price = () => {
    if (product) {
      if (product.has_offer || product.hasCampaign) {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: `${(ProductPage_module_default()).product_price} ${(ProductPage_module_default()).offer_price}`,
          children: [product.selling_price.formatted, /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (ProductPage_module_default()).old,
            children: product.price.formatted
          })]
        });
      } else {
        return /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "product_price",
          children: product.price.formatted
        });
      }
    }

    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "product_price",
      children: "QAR 00.00"
    });
  };

  const BrandName = attribute => {
    if (attribute.attribute.length > 0) {
      let brand = attribute.attribute.filter(attr => attr.attribute_id == 4);

      if (brand.length > 0 && brand[0].values.length > 0) {
        brand = brand[0].values[0].attribute_value.value;
        return brand ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: `/brand/${brand.split(" ").join("-")}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              className: `${(ProductPage_module_default()).brand} mt-1 mb-1`,
              children: ["by ", brand]
            })
          })
        }) : "";
      } else {
        return null;
      }
    }

    return null;
  };

  const getBrandName = attribute => {
    if (attribute.length > 0) {
      let brand = attribute.filter(attr => attr.attribute_id == 4);

      if (brand.length > 0 && brand[0].values.length > 0) {
        brand = brand[0].values[0].attribute_value.value;
        return brand ? brand : "";
      } else {
        return null;
      }
    }

    return null;
  };

  const ForAdministrators = () => {
    if (props.auth && props.auth.isAuthenticated && JSON.parse(localStorage.getItem("user")).isCustomer === false) {
      if (product.options_count > 0) {
        if (optionValue) {
          return `Stock: ${optionValue.option_qty}`;
        } else {
          return "select on option to see the stock amount";
        }
      } else {
        return `Stock: ${product.single_bundle ? product.bundle_qty : product.qty}`;
      }
    }

    return null;
  };

  const OfferEnd = () => {
    if (product.hasCampaign) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "countdown_wrapper",
        children: ["Campaign Ends:", " ", /*#__PURE__*/jsx_runtime_.jsx((external_react_countdown_default()), {
          renderer: renderer,
          date: product.campaign[0].special_price_end
        })]
      });
    } else if (product.has_offer && product.special_price_end) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "countdown_wrapper",
        children: ["Offer Ends:", " ", /*#__PURE__*/jsx_runtime_.jsx((external_react_countdown_default()), {
          renderer: renderer,
          date: new Date(product.special_price_end.split(" ")[0]).getTime()
        })]
      });
    }

    return null;
  }; // add to bag click handler


  const addToBagClickHandler = () => {
    // let bulk_id = activeBulkId(product.product_offers,qnt);
    // console.log(bulk_id);
    // return;
    (0,gtm/* GTMAddToCart */.vI)(product, qnt);
    props.addToCart({
      product: product,
      qty: qnt,
      max_cart_qnt: product.max_cart_qnt ? product.max_cart_qnt : 1000,
      option_id: optionValue ? optionValue.id : null,
      option_value: optionValue ? optionValue.label : null,
      opt: optionValue,
      offers: product.product_offers
    });
    setQnt(1);
    setOptionValue();
    /**
     * FOR FB CONVERSION API
     */
    // let fbp = document.cookie
    //   .split(";")
    //   .filter((c) => c.includes("_fbp="))
    //   .map((c) => c.split("_fbp=")[1]);
    // let fbc = document.cookie
    //   .split(";")
    //   .filter((c) => c.includes("_fbc="))
    //   .map((c) => c.split("_fbc=")[1]);
    // fbp = (fbp.length && fbp[0]) || null;
    // fbc = (fbc.length && fbc[0]) || null;
    // if (!fbc && window.location.search.includes("fbclid=")) {
    //   fbc =
    //     "fb.1." +
    //     +new Date() +
    //     "." +
    //     window.location.search.split("fbclid=")[1];
    // }
    // let em = props.auth.isAuthenticated
    //   ? JSON.parse(props.auth.user).email
    //   : null;
    // Axios.post("/event/addToBag", {
    //   em,
    //   product_id: product.id,
    //   name: product.name,
    //   eventName: "AddToCart",
    //   eventNameSource: `https://beautyboothqa.com/product/${product.slug}`,
    //   fbp,
    //   fbc,
    // });
    // setTimeout(notify,100);
  };

  function handleSelection(value, event) {
    if (product.options_count !== 0) {
      event.stopPropagation();
      setOptionValue(value);
      let position = product.files.findIndex(file => file.id == value.option_image) === -1 ? 0 : product.files.findIndex(file => file.id == value.option_image);
      setActive(position);
    }
  }

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }) => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      children: [days, "d: ", hours, "h:", minutes, "m:", seconds, "s"]
    });
  };

  const disableStatus = () => {
    if (product.single_bundle) {
      if (!product.bundle_qty || product.bundle_qty === 0 || !product.in_stock || qnt > maxQnt) {
        return true;
      } else return false;
    }

    if (!product.qty || product.qty === 0 || !product.in_stock || qnt > maxQnt) {
      return true;
    }

    if (product.options_count > 0) {
      if (!optionValue) {
        return true;
      } else {
        if (optionValue.option_qty === 0 || !optionValue.option_qty || !product.in_stock) {
          return true;
        }
      }
    }

    return false;
  };

  const DateRange = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const today = new Date();
    const month = months[today.getMonth()];
    const dim = daysInMonth(today.getFullYear(), today.getMonth() + 1);
    let from = today.getDate();
    let to = today.getDate() + 3;

    if (today.getHours() >= 15 && today.getHours() <= 23) {
      from += 1;
      to += 1;
    }

    if (to <= dim && from <= dim) {
      from = `${number_suffix(from, dim)}`;
      to = `${number_suffix(to, dim)} ${month}`;
    } else {
      const dim2 = daysInMonth(today.getFullYear(), today.getMonth() + 2);

      if (from == dim) {
        from = `${number_suffix(from, dim2)} ${month}`;
      } else {
        from = `${number_suffix(from - dim, dim2)} ${months[today.getMonth() + 1]}`;
      }

      to = `${number_suffix(to - dim, dim2)} ${months[today.getMonth() + 1]}`;
      console.log(today.getHours());
    }

    return /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "delivery",
      dangerouslySetInnerHTML: createMarkup(`Delivery from ${from} ~ ${to}`)
    });
  };

  function addToWaitListHandler(e) {
    e.preventDefault();
    external_axios_default().post("/api/waitlist", {
      product,
      email: waitListEmail
    }).then(res => {
      setWaitListEmail("");
      external_react_toastify_.toast.success(res.data.message, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
      });
    }).catch(err => {
      external_react_toastify_.toast.error(err.response.data.message, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
      });
    });
  }

  function addToWaitListHandlerAsUser() {
    external_axios_default().post("/api/waitlist", {
      product,
      email: waitListEmail
    }).then(res => {
      external_react_toastify_.toast.success(res.data.message, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
      });
    }).catch(err => {
      external_react_toastify_.toast.error(err.response.data.message, {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
      });
    });
  }

  function number_suffix(i, dim) {
    /* this function will add th, nd, rd, st suffix with dates */
    let j = i % 10,
        k = i % dim; // if(i <= dim){

    if (j == 1 && k != 11) {
      return i + "<sup>st</sup>";
    }

    if (j == 2 && k != 12) {
      return i + "<sup>nd</sup>";
    }

    if (j == 3 && k != 13) {
      return i + "<sup>rd</sup>";
    }

    return i + "<sup>th</sup>";
  }

  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  const createMarkup = data => {
    return {
      __html: data
    };
  };

  const numberHandler = number => {
    setQnt(number);
  };

  const bulkBuyHandler = (min_qnt, parcent, bulk_id) => {
    props.addToCart({
      product: product,
      qty: min_qnt,
      max_cart_qnt: product.max_cart_qnt ? product.max_cart_qnt : 1000,
      option_id: optionValue ? optionValue.id : null,
      option_value: optionValue ? optionValue.label : null,
      opt: optionValue,
      pck_qnt: min_qnt,
      parcent,
      bulk_id
    });
    setQnt(1);
    setOptionValue();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        children: [getBrandName(props.product.attributes), " ", props.product.name]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: `https://beautyboothqa.com/product/${encodeURI(props.product.slug)}`
      }, "ogURL"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: props.product.name
      }, "ogTitle"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: props.product.files[0].thumbnail_image
      }, "ogImage"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: (_props$product$meta$m = props.product.meta.meta_description) !== null && _props$product$meta$m !== void 0 ? _props$product$meta$m : ""
      }, "ogDesc"), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:keywords",
        content: props.product.meta.meta_keywords ? props.product.meta.meta_keywords.join(", ") + ", in qatar, qatar, beauty, beautybooth" + ", " + getBrandName(props.product.attributes) : ", " + getBrandName(props.product.attributes)
      }, "ogKeys")]
    }), product != null ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "productView mt-4",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-10 col-sm-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-md-6",
                children: [/*#__PURE__*/jsx_runtime_.jsx(components_ProductImage, {
                  style: (ProductPage_module_default()),
                  images: product.files
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "mt-4",
                  children: [(variantProduct === null || variantProduct === void 0 ? void 0 : variantProduct.length) > 0 && /*#__PURE__*/jsx_runtime_.jsx("h4", {
                    children: "Variants:"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: (ProductPage_module_default()).variant_products,
                    children: /*#__PURE__*/jsx_runtime_.jsx(Variants, {})
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "col-md-6",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  id: "zoomPortion",
                  className: "zoomPortion"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (ProductPage_module_default()).product_details_container,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                    className: (ProductPage_module_default()).product_name,
                    children: product.name
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "mt-2 mb-2",
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: (ProductPage_module_default()).icon_container,
                      children: [/*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: review === 0.5 ? free_solid_svg_icons_.faStarHalfAlt : free_solid_svg_icons_.faStar,
                        className: review < 0.5 ? (ProductPage_module_default()).normal : (ProductPage_module_default()).selected
                      }), /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: review === 1.5 ? free_solid_svg_icons_.faStarHalfAlt : free_solid_svg_icons_.faStar,
                        className: review < 1.5 ? (ProductPage_module_default()).normal : (ProductPage_module_default()).selected
                      }), /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: review === 2.5 ? free_solid_svg_icons_.faStarHalfAlt : free_solid_svg_icons_.faStar,
                        className: review < 2.5 ? (ProductPage_module_default()).normal : (ProductPage_module_default()).selected
                      }), /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: review === 3.5 ? free_solid_svg_icons_.faStarHalfAlt : free_solid_svg_icons_.faStar,
                        className: review < 3.5 ? (ProductPage_module_default()).normal : (ProductPage_module_default()).selected
                      }), /*#__PURE__*/jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                        icon: review === 4.5 ? free_solid_svg_icons_.faStarHalfAlt : free_solid_svg_icons_.faStar,
                        className: review < 4.5 ? (ProductPage_module_default()).normal : (ProductPage_module_default()).selected
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: (ProductPage_module_default()).rating_count,
                      children: [product.avgRating, " (", product.reviews.length, ")"]
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx(BrandName, {
                    attribute: product.attributes
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (ProductPage_module_default()).product_message,
                    children: [product.single_bundle ? product.bundle_qty !== 0 && /*#__PURE__*/jsx_runtime_.jsx(DateRange, {}) : product.qty !== 0 && /*#__PURE__*/jsx_runtime_.jsx(DateRange, {}), product.single_bundle ? product.bundle_qty === 0 || !product.in_stock ? /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "Sold out (check again in few days)"
                    }) : "" : !product.qty || product.qty === 0 || !product.in_stock ? /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: "Sold out (check again in few days)"
                    }) : "", /*#__PURE__*/jsx_runtime_.jsx(ForAdministrators, {})]
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (ProductPage_module_default()).price_net_weight,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (ProductPage_module_default()).price_sapn,
                      children: /*#__PURE__*/jsx_runtime_.jsx(Price, {})
                    }), product.measurements ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: (ProductPage_module_default()).net_weight,
                      children: [product.measurements, " ", product.uom]
                    }) : null]
                  }), (product.hasCampaign === true || product.has_offer === true) && /*#__PURE__*/jsx_runtime_.jsx(OfferEnd, {}), variantSize.length > 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      className: (ProductPage_module_default()).s_title,
                      children: [t("sizes"), ":"]
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (ProductPage_module_default()).different_sizes,
                      children: variantSize.map(size => /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        href: `/product/${size.slug}`,
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          className: `${(ProductPage_module_default()).size} text-center`,
                          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                            className: (ProductPage_module_default()).size_title,
                            children: [size.measurements || "", "\xA0", size.uom || ""]
                          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                            className: (ProductPage_module_default()).size_price,
                            children: size.selling_price.formatted
                          })]
                        })
                      }, size.id))
                    })]
                  }), product.single_bundle && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    role: "alert",
                    className: "alert alert-info font-weight-bold",
                    children: ["This is a bundle product. One unit contains", " ", product.single_bundle_qty, " items"]
                  }), product.single_bundle ? product.bundle_qty !== 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (ProductPage_module_default()).qnt_bag_fav,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (ProductPage_module_default()).quantaty_container,
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        className: (ProductPage_module_default()).qnt_btn_container,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                          onClick: () => {
                            if (qnt > 1) {
                              setQnt(qnt - 1);
                            }
                          },
                          children: "-"
                        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                          type: "number",
                          className: (ProductPage_module_default()).numberInput,
                          name: "quantity",
                          min: "1",
                          value: qnt,
                          onChange: e => {
                            if (parseInt(e.target.value) > 0) {
                              numberHandler(parseInt(e.target.value));
                            }
                          }
                        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                          onClick: () => {
                            if (product.options_count === 0 && product.bundle_qty > qnt) {
                              setQnt(qnt + 1);
                            }

                            if (product.options_count === 1 && optionValue && product.options[0].values.filter(op => op.label == optionValue.label)[0].option_qty > qnt) {
                              setQnt(qnt + 1);
                            }
                          },
                          children: "+"
                        })]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                      onClick: addToBagClickHandler,
                      className: (ProductPage_module_default()).add_to_bag,
                      disabled: disableStatus(),
                      children: t("ADD TO BAG")
                    })]
                  }) : product.qty !== 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (ProductPage_module_default()).qnt_bag_fav,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (ProductPage_module_default()).quantaty_container,
                      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                        className: (ProductPage_module_default()).qnt_btn_container,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                          onClick: () => {
                            if (qnt > 1) {
                              setQnt(qnt - 1);
                            }
                          },
                          children: "-"
                        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                          type: "number",
                          className: (ProductPage_module_default()).numberInput,
                          name: "quantity",
                          min: "1",
                          value: qnt,
                          onChange: e => {
                            if (parseInt(e.target.value) > 0) {
                              numberHandler(parseInt(e.target.value));
                            }
                          }
                        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                          onClick: () => {
                            if (product.options_count === 0 && product.qty > qnt) {
                              setQnt(qnt + 1);
                            }

                            if (product.options_count === 1 && optionValue && product.options[0].values.filter(op => op.label == optionValue.label)[0].option_qty > qnt) {
                              setQnt(qnt + 1);
                            }
                          },
                          children: "+"
                        })]
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                      onClick: addToBagClickHandler,
                      className: (ProductPage_module_default()).add_to_bag,
                      disabled: disableStatus(),
                      children: t("ADD TO BAG")
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {}), product.single_bundle ? product.bundle_qty == 0 && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (ProductPage_module_default()).waiting_div,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (ProductPage_module_default()).waiting_div_title,
                      children: "IN STOCK SOON"
                    }), props.auth.isAuthenticated ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn join_button btn-info",
                        onClick: () => addToWaitListHandlerAsUser(),
                        children: "JOIN THE WAITLIST"
                      })
                    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                      className: (ProductPage_module_default()).waiting_input,
                      onSubmit: e => addToWaitListHandler(e),
                      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                        name: "email",
                        type: "email",
                        required: true,
                        placeholder: "Your Email",
                        value: waitListEmail,
                        onChange: e => setWaitListEmail(e.currentTarget.value),
                        className: "form-control"
                      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "btn",
                        type: "submit",
                        children: "Get Notified"
                      })]
                    })]
                  }) : (product.qty === 0 || product.in_stock == false) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: (ProductPage_module_default()).waiting_div,
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: (ProductPage_module_default()).waiting_div_title,
                      children: "IN STOCK SOON"
                    }), props.auth.isAuthenticated ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn join_button btn-info",
                        onClick: () => addToWaitListHandlerAsUser(),
                        children: "JOIN THE WAITLIST"
                      })
                    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
                      className: (ProductPage_module_default()).waiting_input,
                      onSubmit: e => addToWaitListHandler(e),
                      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
                        name: "email",
                        type: "email",
                        required: true,
                        placeholder: "Your Email",
                        value: waitListEmail,
                        onChange: e => setWaitListEmail(e.currentTarget.value),
                        className: "form-control"
                      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                        className: "btn",
                        type: "submit",
                        children: "Get Notified"
                      })]
                    })]
                  }), product.product_offers.length > 0 && /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: (ProductPage_module_default()).bulk_buy_wrapper,
                    children: product.product_offers.map(offer => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                      disabled: product.qty < offer.min_qnt,
                      onClick: () => bulkBuyHandler(offer.min_qnt, offer.parcent, offer.id),
                      className: (ProductPage_module_default()).bulk_buy_button,
                      children: ["Buy ", offer.min_qnt, " to ", offer.max_qnt, " products to get ", offer.parcent, "% off"]
                    }, offer.id))
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-md-12",
                children: /*#__PURE__*/jsx_runtime_.jsx(components_Descriptions, {
                  product_id: product.id,
                  attribute: product.attributes,
                  desc: product.description,
                  similar_brands: product.similar_brands,
                  reviews: product.reviews,
                  avgRating: product.avgRating,
                  t: props.t,
                  lang: props.language
                })
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-2 col-sm-12",
            children: product.related_products.length > 0 ? /*#__PURE__*/jsx_runtime_.jsx(components_Recomanded, {
              products: product.related_products
            }) : null
          })]
        })
      })
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "loader",
      children: /*#__PURE__*/jsx_runtime_.jsx(Loader.default, {})
    })]
  });
}

const _slug_mapStateToProps = state => ({
  cart: state.cart.cartItem,
  message: state.cart.message,
  auth: state.auth
});

const _slug_mapDispatchToProps = dispatch => {
  return {
    addToCart: item => (0,cartAction/* addToCart */.Xq)(dispatch, item)
  };
}; // async function parseCookie(req){
//   let cookie = new Cookies(req.cookies);
//   return cookie.cookies.lang;
// }
// This gets called on every request


async function getServerSideProps(context) {
  // return {
  //   redirect: {
  //     destination: `https://beautyboothqa.com/product/${encodeURI(context.params.slug)}`,
  //     permanent: true,
  //   },
  // }
  let language = context.req.language || "en"; // Fetch data from external API

  let slug = context.params.slug;

  try {
    let product = await axios/* default.get */.Z.get(`${language}/getdata/product/${encodeURI(slug)}`).then(response => {
      return response.data;
    });
    return {
      props: {
        product,
        language
      }
    };
  } catch (err) {
    context.res.statusCode = 404;
    context.res.setHeader("Location", `/not-found`); // Replace <link> with your url link
    // context.res.end();

    return {
      props: {}
    };
  } // Pass data to the page via props

}
/* harmony default export */ const _slug_ = ((0,external_react_redux_.connect)(_slug_mapStateToProps, _slug_mapDispatchToProps)((0,i18n.withTranslation)("product")(ProductPage)));

/***/ }),

/***/ 7149:
/***/ ((module) => {

// Exports
module.exports = {
	"product_info_container": "Description_product_info_container__1WBzK",
	"accordians": "Description_accordians__nthsW",
	"info_accordian": "Description_info_accordian__nIHGW",
	"open": "Description_open__lf6DZ",
	"info_question": "Description_info_question__1Qqi3",
	"info_answer": "Description_info_answer__3g6bZ",
	"review_rating_container": "Description_review_rating_container__3lfxE",
	"star-ratings": "Description_star-ratings__1aNR3",
	"widget-svg": "Description_widget-svg__1nNwq",
	"write_review": "Description_write_review__1nPPv",
	"your_rating": "Description_your_rating__229fM",
	"submit_btn": "Description_submit_btn__2Wv58",
	"progress_container": "Description_progress_container__r_e61",
	"single_progress": "Description_single_progress__AHRIZ",
	"left": "Description_left__2FfOV",
	"progress": "Description_progress__2BdHa",
	"progress-bar": "Description_progress-bar__1ZfZx",
	"right": "Description_right__2nngI",
	"previous_review_container": "Description_previous_review_container__2fkPd",
	"previous_review": "Description_previous_review__2pjdl",
	"customer_name": "Description_customer_name__38XQH",
	"date": "Description_date__BZGn5",
	"details": "Description_details__E-BBy",
	"recomanded_container": "Description_recomanded_container__12quB",
	"recomaded_items": "Description_recomaded_items__3OUTv",
	"rc": "Description_rc__3cHU9",
	"product": "Description_product__2M4To",
	"product_img": "Description_product_img__3mzdk",
	"product_name": "Description_product_name__3I0zQ",
	"product_price": "Description_product_price__1uYUI",
	"old": "Description_old__BHgpw",
	"descriptions_container": "Description_descriptions_container__31Ydl",
	"descrption_title_container": "Description_descrption_title_container__tJ6ll",
	"tab_menu": "Description_tab_menu__8BD32",
	"active": "Description_active__skvOp",
	"descriptions": "Description_descriptions___3Pl5",
	"rtl": "Description_rtl__1gSHz",
	"brand_description__wrapper": "Description_brand_description__wrapper__x8kkb",
	"brand_image": "Description_brand_image__g922I",
	"main_description": "Description_main_description__W9gBw",
	"brand_link": "Description_brand_link__1sCzg"
};


/***/ }),

/***/ 2057:
/***/ ((module) => {

// Exports
module.exports = {
	"variant_products": "ProductPage_variant_products__rXkws",
	"variant_product": "ProductPage_variant_product__2Lz-M",
	"product_details_container": "ProductPage_product_details_container__2oOnk",
	"product_name": "ProductPage_product_name__3YRqY",
	"countdown_wrapper": "ProductPage_countdown_wrapper__Xrxv_",
	"bulk_buy_wrapper": "ProductPage_bulk_buy_wrapper__fEkFM",
	"bulk_buy_button": "ProductPage_bulk_buy_button__1lDH7",
	"product_slider_container": "ProductPage_product_slider_container__tVjIT",
	"swiper-wrapper": "ProductPage_swiper-wrapper__2I1W7",
	"thumbnail_images": "ProductPage_thumbnail_images__311Qy",
	"swiper-container": "ProductPage_swiper-container__3hKG5",
	"swiper-slide": "ProductPage_swiper-slide__2elpR",
	"swiper-slide-active": "ProductPage_swiper-slide-active__2q7Mf",
	"main_images": "ProductPage_main_images__18tUf",
	"swiper-pagination-custom": "ProductPage_swiper-pagination-custom__3uOtQ",
	"swiper-pagination-bullet": "ProductPage_swiper-pagination-bullet__FLAAh",
	"brand": "ProductPage_brand__3XNMA",
	"icon_container": "ProductPage_icon_container__yala4",
	"normal": "ProductPage_normal__5WEoh",
	"selected": "ProductPage_selected__JdXJQ",
	"rating_count": "ProductPage_rating_count__vkWHZ",
	"color_container": "ProductPage_color_container__2nZcb",
	"color_title": "ProductPage_color_title__W2tIu",
	"selected_shade": "ProductPage_selected_shade__m0--D",
	"color_select_box": "ProductPage_color_select_box__2V_N5",
	"price_net_weight": "ProductPage_price_net_weight__1M7Iv",
	"price_sapn": "ProductPage_price_sapn__2q3DK",
	"product_price": "ProductPage_product_price__1DCJM",
	"old": "ProductPage_old__3PuPC",
	"net_weight": "ProductPage_net_weight__1kXzF",
	"product_message": "ProductPage_product_message__2ao1P",
	"delivery": "ProductPage_delivery__2HYmB",
	"option_wrapper": "ProductPage_option_wrapper__1ERJ9",
	"optionopen_button": "ProductPage_optionopen_button__x7Ovv",
	"option_trigger": "ProductPage_option_trigger__3OAHU",
	"menu": "ProductPage_menu__1poVh",
	"menuitem": "ProductPage_menuitem__QndUF",
	"qnt_bag_fav": "ProductPage_qnt_bag_fav__2M6eE",
	"quantaty_container": "ProductPage_quantaty_container__30yXo",
	"numberInput": "ProductPage_numberInput__1yEbd",
	"quantity_title": "ProductPage_quantity_title__3CMnU",
	"qnt_btn_container": "ProductPage_qnt_btn_container__1X1lY",
	"add_to_bag": "ProductPage_add_to_bag__11-lW",
	"fav_container": "ProductPage_fav_container__19I57",
	"fav": "ProductPage_fav__Hu_ee",
	"product_info_container": "ProductPage_product_info_container__2Yqq_",
	"accordians": "ProductPage_accordians__2lTUD",
	"info_accordian": "ProductPage_info_accordian__EkCe3",
	"open": "ProductPage_open__32srk",
	"info_question": "ProductPage_info_question__1OG5T",
	"info_answer": "ProductPage_info_answer__23Hje",
	"review_rating_container": "ProductPage_review_rating_container__1cMwK",
	"star-ratings": "ProductPage_star-ratings__3TLFS",
	"widget-svg": "ProductPage_widget-svg__39qIE",
	"write_review": "ProductPage_write_review__1SXh3",
	"your_rating": "ProductPage_your_rating__2-yJY",
	"submit_btn": "ProductPage_submit_btn__MG3TE",
	"progress_container": "ProductPage_progress_container__3A7oG",
	"single_progress": "ProductPage_single_progress__2wl2g",
	"left": "ProductPage_left__2N3vI",
	"progress": "ProductPage_progress__1IvL1",
	"progress-bar": "ProductPage_progress-bar__26nvy",
	"right": "ProductPage_right__28raA",
	"previous_review_container": "ProductPage_previous_review_container__3gELU",
	"previous_review": "ProductPage_previous_review__1WTzR",
	"customer_name": "ProductPage_customer_name__2iV09",
	"date": "ProductPage_date__1svHW",
	"details": "ProductPage_details__3JaaA",
	"recomanded_container": "ProductPage_recomanded_container__1GYDV",
	"recomaded_items": "ProductPage_recomaded_items__1AfVq",
	"rc": "ProductPage_rc__2634g",
	"product": "ProductPage_product__1UOXp",
	"product_img": "ProductPage_product_img__BoMUp",
	"zoomPortion": "ProductPage_zoomPortion__20mxB",
	"s_title": "ProductPage_s_title__3Mpjh",
	"different_sizes": "ProductPage_different_sizes__1QaOV",
	"size": "ProductPage_size__2IeUE",
	"waiting_div": "ProductPage_waiting_div__1rb5n",
	"waiting_div_title": "ProductPage_waiting_div_title__1f8J7",
	"join_button": "ProductPage_join_button__5fo0k",
	"waiting_input": "ProductPage_waiting_input__2WZL2",
	"product_images": "ProductPage_product_images__vwGm1",
	"thumbs_images": "ProductPage_thumbs_images__yxUx6",
	"thumb_item": "ProductPage_thumb_item__3-9-W",
	"active": "ProductPage_active__3k0cj",
	"test": "ProductPage_test__3IIEL",
	"test_item": "ProductPage_test_item__35x91"
};


/***/ }),

/***/ 1919:
/***/ ((module) => {

// Exports
module.exports = {
	"product": "Recomanded_product__2GccT",
	"product_img": "Recomanded_product_img__13yfh",
	"product_name": "Recomanded_product_name__UF0T_",
	"product_brand": "Recomanded_product_brand__25UNS",
	"product_price": "Recomanded_product_price__1XB4T",
	"offer_price": "Recomanded_offer_price__1ulLe",
	"old": "Recomanded_old__2DBx2"
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

/***/ 443:
/***/ ((module) => {

"use strict";
module.exports = require("react-id-swiper");

/***/ }),

/***/ 6873:
/***/ ((module) => {

"use strict";
module.exports = require("react-lazyload");

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

/***/ 8993:
/***/ ((module) => {

"use strict";
module.exports = require("universal-cookie");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4920,1664,3164,6808,1843,571,7995], () => (__webpack_exec__(3022)));
module.exports = __webpack_exports__;

})();