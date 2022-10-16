"use strict";
exports.id = 3164;
exports.ids = [3164];
exports.modules = {

/***/ 6698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const axios = __webpack_require__(2376);

const url = "https://admin.beautyboothqa.com/"; // const url = "http://localhost:8000/";
// const url = "https://new.beautybooth.shop/";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axios.create({
  baseURL: url,
  responseType: "json",
  headers: {
    "Content-Type": "application/json" // Authorization: `Bearer ${localStorage.getItem("auth_token") || ""}`,

  }
}));
/* Please add bearer token first while live for production */

/***/ }),

/***/ 1877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Im": () => (/* binding */ GET_LAYOUT_DATA),
/* harmony export */   "tC": () => (/* binding */ GET_MOBILE_BANNER),
/* harmony export */   "GO": () => (/* binding */ MENU_LOADED),
/* harmony export */   "SX": () => (/* binding */ GET_HOME_PAGE_DATA),
/* harmony export */   "xM": () => (/* binding */ BEST_SELLING_PRODUCTS),
/* harmony export */   "Rl": () => (/* binding */ TRENDING_ATTRIBUTES),
/* harmony export */   "fw": () => (/* binding */ NEW_ARRIVALS),
/* harmony export */   "In": () => (/* binding */ GET_BEST_BRANDS),
/* harmony export */   "G2": () => (/* binding */ ADD_TO_CART),
/* harmony export */   "vL": () => (/* binding */ SET_CART_FROM_LOCAL),
/* harmony export */   "OZ": () => (/* binding */ REMOVE_FROM_CART),
/* harmony export */   "m3": () => (/* binding */ PLUS_ONE_TO_CART),
/* harmony export */   "GI": () => (/* binding */ MINUS_ONE_TO_CART),
/* harmony export */   "bZ": () => (/* binding */ INPUT_ITEM_TO_CART),
/* harmony export */   "yT": () => (/* binding */ EMPTY_CART),
/* harmony export */   "_l": () => (/* binding */ SET_CART_AFTER_PRICE_CHANGE),
/* harmony export */   "uC": () => (/* binding */ SET_CURRENT_USER)
/* harmony export */ });
/* unused harmony exports GET_ALL_BRANDS, GET_CART_ITEMS, GET_ATTRIBUTE_DETAILS, LOGIN_USER */
const GET_LAYOUT_DATA = "GET_LAYOUT_DATA";
const GET_MOBILE_BANNER = "GET_MOBILE_BANNER";
const MENU_LOADED = "MENU_LOADED";
const GET_HOME_PAGE_DATA = "GET_HOME_PAGE_DATA";
const BEST_SELLING_PRODUCTS = "BEST_SELLING_PRODUCTS";
const TRENDING_ATTRIBUTES = "TRENDING_ATTRIBUTES";
const NEW_ARRIVALS = "NEW_ARRIVALS";
const GET_ALL_BRANDS = "GET_ALL_BRANDS";
const GET_BEST_BRANDS = "GET_BEST_BRANDS";
const ADD_TO_CART = "ADD_TO_CART";
const GET_CART_ITEMS = "GET_CART_ITEMS";
const SET_CART_FROM_LOCAL = "SET_CART_FROM_LOCAL";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const PLUS_ONE_TO_CART = "PLUS_ONE_TO_CART";
const MINUS_ONE_TO_CART = "MINUS_ONE_TO_CART";
const INPUT_ITEM_TO_CART = "INPUT_ITEM_TO_CART";
const EMPTY_CART = "EMPTY_CART";
const GET_ATTRIBUTE_DETAILS = "GET_ATTRIBUTE_DETAILS";
const SET_CART_AFTER_PRICE_CHANGE = "SET_CART_AFTER_PRICE_CHANGE"; // //auth actions

const LOGIN_USER = "LOGIN_USER";
const SET_CURRENT_USER = "SET_CURRENT_USER";

/***/ })

};
;