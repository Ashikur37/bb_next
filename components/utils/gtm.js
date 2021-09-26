export const GTMPageView = (url) => {
  const pageEvent = {
    event: "pageview",
    page: url,
  };
  //@ts-ignore
  // window && window.dataLayer && window.dataLayer.push(pageEvent);
  //   window && window.dataLayer && console.log(window.dataLayer);
  return pageEvent;
};

export const GTMProductView = (product) => {
  //   console.log(product);

  if (window && window.dataLayer) {
    dataLayer.push({ ecommerce: null });
    dataLayer.push({
      event: "productClick",
      ecommerce: {
        click: {
          product: [
            {
              name: product.name,
              id: product.id,
              price: product.price.formatted,
            },
          ],
        },
      },
    });
  }
};

export const GTMAddToCart = (product, qnt) => {
  // console.log(product);
  if (window && window.dataLayer) {
    dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
      event: "addToCart",
      ecommerce: {
        currencyCode: "QAR",
        add: {
          // 'add' actionFieldObject measures.
          products: [
            {
              //  adding a product to a shopping cart.
              name: product.name,
              id: product.id,
              price: product.price.formatted,
              quantity: qnt,
            },
          ],
        },
      },
    });
  }
};

// checkout
export const GTMCheckout = (cartItems) => {
  let data = cartItems.map((cartItem) => {
    return {
      id: cartItem.product_id,
      name: cartItem.name,
      qty: cartItem.qnt,
      price: cartItem.price.amount,
    };
  });
  // console.log(product);
  if (window && window.dataLayer) {
    dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
    dataLayer.push({
      event: "transection",
      ecommerce: {
        checkout: {
          actionField: { step: 4, option: "Visa" },
          products: data,
        },
      },
    });
  }
};
