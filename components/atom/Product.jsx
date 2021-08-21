import React, { useState } from "react";
import Link from "next/link";
import LazyLoad from "react-lazyload";

function Product({ product, lazy = false }) {
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
  const RibbonOffer = () => {
    if (product && product.has_offer && !product.hasCampaign) {
      return (
        <div className="ribbon">
          <span>Offer</span>
        </div>
      );
    }
    if (product && !product.has_offer && product.hasCampaign) {
      {
        return product.campaign ? (
          <div className="ribbon">
            <span>{product.campaign[0].name}</span>
          </div>
        ) : (
          <div className="ribbon">
            <span>Offer</span>
          </div>
        );
      }
    }
    return null;
  };
  const Price = () => {
    if (product) {
      if (product.has_offer || product.hasCampaign) {
        return (
          <span className="product_price offer_price">
            {product.selling_price.formatted}{" "}
            <span className="old">{product.price.formatted}</span>
          </span>
        );
      } else {
        return <span className="product_price">{product.price.formatted}</span>;
      }
    }
    return <span className="product_price">QAR 00.00</span>;
  };

  const BrandName = (attribute) => {
    if (attribute.attribute.length > 0) {
      let brand = attribute.attribute.filter((attr) => attr.attribute_id === 4);
      if (brand.length > 0) {
        brand = brand[0].Brand;
        return brand ? (
          <span className="product_brand">{brand}</span>
        ) : (
          <span className="product_brand"> </span>
        );
      }
    }
    return <span className="product_brand"> </span>;
  };

  return (
    <Link href={product ? `/product/${product.slug}` : "/products/slug"}>
      <a className="product">
        <RibbonNew />
        <RibbonOffer />
        <RibbonSoldOut />

        <div className="product_img">
          <LazyLoad
            once
            placeholder={<div className="spinner-border text-danger"></div>}
          >
            <img
              src={
                product
                  ? product.files[0].thumbnail_image
                  : "/assets/images/product.png"
              }
              alt=""
            />
          </LazyLoad>
        </div>

        <BrandName attribute={product.attributes} />
        <span className="product_name">
          {product
            ? product.name
            : "I am a long product name. I will be clamped after two lines"}
        </span>

        <Price />
      </a>
    </Link>
  );
}

export default Product;
