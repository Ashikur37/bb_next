import React, { useState } from "react";
import Link from "next/link";

function SingleProduct({ product, locale }) {
  const [innBag, setInBag] = useState(0);
  const RibbonNew = () => {
    if (product && product.is_new) {
      return (
        <div className="ribbon-new">
          <span>New</span>
        </div>
      );
    }
    return null;
  };
  const RibbonSoldOut = () => {
    if (product && !product.in_stock) {
      return (
        <div className="ribbon-soldout">
          <span>Sold out</span>
        </div>
      );
    }
    return null;
  };
  const BrandName = (attribute) => {
    if (attribute.length > 0) {
      let brand = attribute.filter((att) => Object.keys(att)[0] === "Brand");
      // console.log(attribute);
      if (brand[0]) {
        return brand[0].Brand[0];
      }
    }
    return null;
  };
  const RibbonOffer = () => {
    if (product && (product.has_offer || product.hasCampaign)) {
      return (
        <div className="ribbon">
          <span>Offer</span>
        </div>
      );
    }
    return null;
  };
  const Price = () => {
    if (product) {
      if (product.has_offer || product.hasCampaign) {
        return (
          <span className="product_price offer_price">
            {product.selling_price.formatted[locale]}{" "}
            <span className="old">{product.price.formatted[locale]}</span>
          </span>
        );
      } else {
        return (
          <span className="product_price">
            {product.price.formatted[locale]}
          </span>
        );
      }
    }
    return <span className="product_price">QAR 00.00</span>;
  };

  return (
    // <Link href={`/product/${product.slug}`} replace>
    <a href={`/product/${product.slug}`} className="product">
      <RibbonNew />
      <RibbonOffer />
      <RibbonSoldOut />
      <div className="product_img">
        <img src={product.image} alt="" />
      </div>

      <span className="product_brand">
        {BrandName(product.attributes)}
        {/* {product.attributes[0]
          ? Object.keys(product.attributes[0]) == "Brand"
          ? `${product.attributes[0].Brand}`
          : ""
          : ""}
          {product.attributes[1]
            ? Object.keys(product.attributes[1]) == "Brand"
            ? `${product.attributes[1].Brand}`
            : ""
          : ""} */}
      </span>
      <span className="product_name">
        {product.name[locale] || product.name["en"]}
      </span>
      {/* <span className="product_price">Price: {product.price.formatted}</span> */}
      <Price />
      <div className="bottom">
        {innBag > 0 ? (
          <div className="btn_group">
            <button onClick={() => setInBag(innBag - 1)} className="minus">
              -
            </button>
            <button className="in_bag"> {innBag} In Bag</button>
            <button onClick={() => setInBag(innBag + 1)} className="plus">
              +
            </button>
          </div>
        ) : (
          <button
            onClick={() => setInBag(innBag + 1)}
            className="btn btn-block"
          >
            ADD TO BAG
          </button>
        )}
      </div>
    </a>
    // </Link>
  );
}

export default SingleProduct;
