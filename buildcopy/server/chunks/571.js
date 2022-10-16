"use strict";
exports.id = 571;
exports.ids = [571];
exports.modules = {

/***/ 571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xq": () => (/* binding */ addToCart),
/* harmony export */   "B8": () => (/* binding */ removeCartItem),
/* harmony export */   "tl": () => (/* binding */ setCartAfterPriceChange),
/* harmony export */   "AP": () => (/* binding */ PlusOne),
/* harmony export */   "eO": () => (/* binding */ minusOne),
/* harmony export */   "UY": () => (/* binding */ emptyCart),
/* harmony export */   "WP": () => (/* binding */ inputItem)
/* harmony export */ });
/* unused harmony export setCartFromLocal */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1877);
// import { toast } from "react-toastify";

const addToCart = (dispatch, item) => {
  if (localStorage.getItem("cart")) {
    dispatch(setCartFromLocal());
  }

  let cartItem = {};

  if (item.option_id) {
    let calculatedprice = item.product.has_offer || item.product.hasCampaign ? item.opt.option_selling_price : item.opt.price; // if (typeof item['parcent'] == "number") {
    //   calculatedprice.currency = calculatedprice.currency;
    //   calculatedprice.amount = parseFloat(calculatedprice.amount) - Math.floor((parseFloat(calculatedprice.amount) * item['parcent']) / 100);
    //   calculatedprice.formatted = calculatedprice.currency + "" + calculatedprice.amount.toFixed(2);
    //   calculatedprice.amount = calculatedprice.amount + ".0000"
    // }

    cartItem = {
      product_id: item.product.id,
      thumb: item.product.files[0].thumbnail_image,
      price: calculatedprice,
      name: item.product.name,
      slug: item.product.slug,
      qnt: item.qty,
      option_id: item.option_id,
      option_value: item.option_value,
      option_main_id: item.opt.option_id,
      max_cart_qnt: item.max_cart_qnt,
      bulk_id: item.bulk_id,
      parcent: item.parcent,
      pck_qnt: item.pck_qnt,
      offers: item.offers
    };
  } else {
    let calculatedPrice = {};
    calculatedPrice = item.product.has_offer || item.product.hasCampaign ? item.product.selling_price : item.product.price; // if (typeof item['parcent'] == "number") {
    //   calculatedPrice.currency = calculatedPrice.currency;
    //   calculatedPrice.amount = parseFloat(calculatedPrice.amount) - Math.floor((parseFloat(calculatedPrice.amount) * item['parcent']) / 100);
    //   calculatedPrice.formatted = calculatedPrice.currency + "" + calculatedPrice.amount.toFixed(2);
    //   calculatedPrice.amount = calculatedPrice.amount + ".0000"
    // }

    cartItem = {
      product_id: item.product.id,
      thumb: item.product.files[0].thumbnail_image,
      price: calculatedPrice,
      name: item.product.name,
      slug: item.product.slug,
      qnt: item.qty,
      max_cart_qnt: item.max_cart_qnt,
      bulk_id: item.bulk_id,
      parcent: item.parcent,
      pck_qnt: item.pck_qnt,
      offers: item.offers // option_id: item.option_id ? item.option_id : 0,
      // option_value: item.option_value,

    };
  }

  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TO_CART */ .G2,
    payload: cartItem
  });
  return;
};
const removeCartItem = (dispatch, id, option_id, bulk_id) => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .REMOVE_FROM_CART */ .OZ,
    payload: {
      id,
      option_id,
      bulk_id
    }
  }); // toast.error("Removed from Bag", {
  //   position: "bottom-right",
  //   autoClose: 2000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });
};
const setCartFromLocal = dispatch => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SET_CART_FROM_LOCAL */ .vL
  };
};
const setCartAfterPriceChange = (dispatch, cartItems) => {
  // console.log(cartItems);
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .SET_CART_AFTER_PRICE_CHANGE */ ._l,
    payload: cartItems
  });
};
const PlusOne = (dispatch, id, option_id) => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .PLUS_ONE_TO_CART */ .m3,
    payload: {
      id,
      option_id
    }
  });
};
const minusOne = (dispatch, id, option_id) => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .MINUS_ONE_TO_CART */ .GI,
    payload: {
      id,
      option_id
    }
  });
};
const emptyCart = dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .EMPTY_CART */ .yT
  });
};
const inputItem = (dispatch, id, option_id, qnt) => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__/* .INPUT_ITEM_TO_CART */ .bZ,
    payload: {
      id,
      option_id,
      qnt
    }
  });
};

/***/ })

};
;