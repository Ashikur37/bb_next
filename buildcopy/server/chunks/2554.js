exports.id = 2554;
exports.ids = [2554,2431,5660];
exports.modules = {

/***/ 1969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e3": () => (/* binding */ getBestSellingProducts),
/* harmony export */   "Ri": () => (/* binding */ getNewArrivals),
/* harmony export */   "sZ": () => (/* binding */ getBestBrands)
/* harmony export */ });
/* unused harmony exports getHomePageData, getTrendingAttributes */
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6698);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1877);


const getBestSellingProducts = async (dispatch, lang = 'en') => {
  // axios
  //   .get(lang+"/getdata/products/bestselling")
  //   .then((res) => {
  //     dispatch({
  //       type: BEST_SELLING_PRODUCTS,
  //       payload: {data:res.data,lang},
  //     });
  //   })
  //   .catch();
  const res = await fetch(`/api/homePageData?locale=${lang}&type=bestselling`);
  const data = await res.json();
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__/* .BEST_SELLING_PRODUCTS */ .xM,
    payload: {
      data,
      lang
    }
  });
};
const getHomePageData = dispatch => {
  axios.get("getdata/attributes").then(res => {
    dispatch({
      type: GET_HOME_PAGE_DATA,
      payload: res.data
    });
  }).catch();
};
const getTrendingAttributes = dispatch => {
  axios.get("getdata/trending").then(res => {
    dispatch({
      type: TRENDING_ATTRIBUTES,
      payload: res.data
    });
  }).catch();
};
const getNewArrivals = async (dispatch, lang = "en") => {
  // axios
  //   .get(lang+"/getdata/products/newarrivals")
  //   .then((res) => {
  //     dispatch({
  //       type: NEW_ARRIVALS,
  //       payload: {data:res.data,lang},
  //     });
  //   })
  //   .catch();
  const res = await fetch(`/api/homePageData?locale=${lang}&type=newarrivals`);
  const data = await res.json();
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_1__/* .NEW_ARRIVALS */ .fw,
    payload: {
      data,
      lang
    }
  });
};
const getBestBrands = dispatch => {
  _axios__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get("en/getdata/best_brands").then(res => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_1__/* .GET_BEST_BRANDS */ .In,
      payload: res.data
    });
  }).catch();
};

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;