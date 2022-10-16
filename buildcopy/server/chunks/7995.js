"use strict";
exports.id = 7995;
exports.ids = [7995];
exports.modules = {

/***/ 7995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Po": () => (/* binding */ GTMProductView),
/* harmony export */   "vI": () => (/* binding */ GTMAddToCart),
/* harmony export */   "vM": () => (/* binding */ GTMBeginCheckout),
/* harmony export */   "FX": () => (/* binding */ GTMCheckout)
/* harmony export */ });
/* unused harmony export GTMPageView */
const GTMPageView = url => {
  const pageEvent = {
    event: "pageview",
    page: url
  }; //@ts-ignore
  // window && window.dataLayer && window.dataLayer.push(pageEvent);
  //   window && window.dataLayer && console.log(window.dataLayer);

  return pageEvent;
};
const GTMProductView = product => {
  //   console.log(product);
  if (window && window.dataLayer) {
    dataLayer.push({
      ecommerce: null
    });
    dataLayer.push({
      event: "productClick",
      ecommerce: {
        click: {
          product: [{
            name: product.name,
            id: product.id,
            price: product.price.formatted
          }]
        }
      }
    });
  }
};
const GTMAddToCart = (product, qnt) => {
  // console.log(product);
  if (window && window.dataLayer) {
    dataLayer.push({
      ecommerce: null
    }); // Clear the previous ecommerce object.

    dataLayer.push({
      event: "addToCart",
      ecommerce: {
        currencyCode: "QAR",
        add: {
          // 'add' actionFieldObject measures.
          products: [{
            //  adding a product to a shopping cart.
            name: product.name,
            id: product.id,
            price: product.price.formatted,
            quantity: qnt
          }]
        }
      }
    });
  }
}; // begin checkout

const GTMBeginCheckout = cartItems => {
  let data = cartItems.map(cartItem => {
    return {
      id: cartItem.product_id,
      name: cartItem.name,
      qty: cartItem.qnt,
      price: cartItem.price.amount
    };
  }); // console.log(product);

  if (window && window.dataLayer) {
    dataLayer.push({
      ecommerce: null
    }); // Clear the previous ecommerce object.

    dataLayer.push({
      event: "begin_checkout",
      ecommerce: {
        items: [...data]
      }
    });
  }
}; // checkout

const GTMCheckout = cartItems => {
  let data = cartItems.map(cartItem => {
    return {
      id: cartItem.product_id,
      name: cartItem.name,
      qty: cartItem.qnt,
      price: cartItem.price.amount
    };
  }); // console.log(product);

  if (window && window.dataLayer) {
    dataLayer.push({
      ecommerce: null
    }); // Clear the previous ecommerce object.

    dataLayer.push({
      event: "transection",
      ecommerce: {
        items: {
          actionField: {
            step: 4,
            option: "Visa"
          },
          products: data
        }
      }
    });
  }
};

/***/ })

};
;