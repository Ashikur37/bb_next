// import { toast } from "react-toastify";
import {
  ADD_TO_CART,
  SET_CART_FROM_LOCAL,
  REMOVE_FROM_CART,
  PLUS_ONE_TO_CART,
  MINUS_ONE_TO_CART,
  INPUT_ITEM_TO_CART,
  EMPTY_CART,
  SET_CART_AFTER_PRICE_CHANGE,
} from "./types";

export const addToCart = (dispatch, item) => {

  if (localStorage.getItem("cart")) {
    dispatch(setCartFromLocal());
  }

  let cartItem = {};
  if (item.option_id) {
    let calculatedprice =
      item.product.has_offer || item.product.hasCampaign
        ? item.opt.option_selling_price
        : item.opt.price;
    // if (typeof item['parcent'] == "number") {
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
      offers:item.offers
    };
  } else {
    let calculatedPrice = {};
    calculatedPrice = item.product.has_offer || item.product.hasCampaign
        ? item.product.selling_price
        : item.product.price;
    // if (typeof item['parcent'] == "number") {
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
      offers:item.offers
      // option_id: item.option_id ? item.option_id : 0,
      // option_value: item.option_value,
    };
  }
  dispatch({
    type: ADD_TO_CART,
    payload: cartItem
  });
  return;
};

export const removeCartItem = (dispatch, id, option_id, bulk_id) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      id,
      option_id,
      bulk_id
    },
  });
  // toast.error("Removed from Bag", {
  //   position: "bottom-right",
  //   autoClose: 2000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });
};

export const setCartFromLocal = (dispatch) => {
  return {
    type: SET_CART_FROM_LOCAL,
  };
};

export const setCartAfterPriceChange = (dispatch, cartItems) => {
  // console.log(cartItems);
  dispatch({
    type: SET_CART_AFTER_PRICE_CHANGE,
    payload: cartItems
  });
};

export const PlusOne = (dispatch, id, option_id) => {
  dispatch({
    type: PLUS_ONE_TO_CART,
    payload: {
      id,
      option_id,
    },
  });
};
export const minusOne = (dispatch, id, option_id) => {
  dispatch({
    type: MINUS_ONE_TO_CART,
    payload: {
      id,
      option_id,
    },
  });
};

export const emptyCart = (dispatch) => {
  dispatch({
    type: EMPTY_CART,
  });
};
export const inputItem = (dispatch, id, option_id, qnt) => {
  dispatch({
    type: INPUT_ITEM_TO_CART,
    payload: {
      id,
      option_id,
      qnt,
    },
  });
};
