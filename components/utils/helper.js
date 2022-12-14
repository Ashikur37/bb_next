const test = (item, flag) => {
  // console.log(item.offers);

  let activeParcent;
  if (item.offers.length > 0 && !flag) {
    item.offers.map((offer) => {
      if (item.qnt >= offer.min_qnt && item.qnt <= offer.max_qnt) {
        activeParcent = offer.parcent;
      }
    });
    if (activeParcent) {
      return (
        item.price.amount * item.qnt -
        Math.ceil((item.price.amount * activeParcent) / 100) * item.qnt
      );
    } else {
      return item.price.amount * item.qnt;
    }
  } else {
    return item.price.amount * item.qnt;
  }
};

const calculateSubTotal = (items, flag) => {
  let value = items.reduce((acc, item) => (acc += test(item, flag)), 0);
  return value;
};

const activeBulkId = (offers, qnt) => {
  let bulk_id = null;
  if (offers.length > 0) {
    offers.map((offer) => {
      if (qnt >= offer.min_qnt && qnt <= offer.max_qnt) {
        bulk_id = offer.id;
      }
    });
  }
  return bulk_id;
};

const getPrice = (item) => {
  if (item.offers.length) {
    let activeOffer = item.offers.find((offer) => offer.id == item.bulk_id);
    if (activeOffer) {
      return (
        item.price.amount * item.qnt -
        Math.ceil((item.price.amount * activeOffer.parcent) / 100) * item.qnt
      );
    }
  }
  return item.price.amount * item.qnt;
};

const priceWithoutDiscount = (items) => {
  let value = items.reduce(
    (acc, item) => (acc += item.price.amount * item.qnt),
    0
  );
  return value;
};
const activeParcent = (offers, qnt) => {
  let activeParcent = null;
  if (offers.length > 0) {
    offers.map((offer) => {
      if (qnt >= offer.min_qnt && qnt <= offer.max_qnt) {
        activeParcent = offer.parcent;
      }
    });
  }
  return activeParcent;
};
const getBrandName = (attribute) => {
  if (attribute.length > 0) {
    let brand = attribute.filter((attr) => attr.attribute_id === 4);
    if (brand.length > 0) {
      brand = brand[0].Brand;
      return brand ? brand : "";
    }
  };
  return "";
};

const getBrandNameForAlgolia = (attribute) => {
  if (attribute.length > 0) {
    let brand = attribute.filter((att) => Object.keys(att)[0] === "Brand");
    // console.log(attribute);
    if (brand[0]) {
      return brand[0].Brand[0];
    }
  }
  return "";
};

module.exports = {
  test,
  calculateSubTotal,
  activeBulkId,
  getPrice,
  priceWithoutDiscount,
  activeParcent,
  getBrandName,
  getBrandNameForAlgolia
};
