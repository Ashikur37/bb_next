exports.id = 8123;
exports.ids = [8123,2431,5660];
exports.modules = {

/***/ 6698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 5009:
/***/ ((module) => {

// Exports
module.exports = {
	"best_selling_page": "BestSelling_best_selling_page__dLGSp",
	"lazyload-wrapper": "BestSelling_lazyload-wrapper__2Ym_J",
	"product": "BestSelling_product__2FTqU",
	"product_name": "BestSelling_product_name__26lV6",
	"ribbon_soldout": "BestSelling_ribbon_soldout__7Xl3v",
	"ribbon": "BestSelling_ribbon__3RI4J",
	"ribbon_new": "BestSelling_ribbon_new__yOSCH",
	"ribbon_campaign": "BestSelling_ribbon_campaign__2XUY4",
	"product_img": "BestSelling_product_img__IwwLY",
	"product_brand": "BestSelling_product_brand__3571-",
	"product_price": "BestSelling_product_price__3M-Ec",
	"offer_price": "BestSelling_offer_price__tjZl9",
	"old": "BestSelling_old__17eSt"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;