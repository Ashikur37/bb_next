import React, { useState, useEffect } from "react";
import Link from "next/link";
import LazyLoad from "react-lazyload";
import styles from "../../styles/ProductCard.module.scss";
import { connect } from "react-redux";
import { getBrandName } from "../utils/helper";
function Product({ product, lazy = false, lang = "en", auth }) {
  const [innBag, setInBag] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(product.attributes);
    if (auth.isAuthenticated) {
      setShow(true);
    } else {
      if (getBrandName(product.attributes).toLowerCase() == "the ordinary") {
        // console.log(false);
        setShow(false);
      } else {
        setShow(true);
      }
    }
  }, [auth, product]);

  const RibbonNew = () => {
    if (product && product.is_new) {
      return (
        <div className={`${styles.ribbon_new}`}>
          <span>New</span>
        </div>
      );
    }
    return null;
  };

  const RibbonSoldOut = () => {
    if (product && !product.in_stock) {
      return (
        <div className={`${styles.ribbon_soldout}`}>
          <span>Sold out</span>
        </div>
      );
    }
    return null;
  };
  const RibbonOffer = () => {
    if (product && product.has_offer && !product.hasCampaign) {
      return (
        <div className={`${styles.ribbon}`}>
          <span>Offer</span>
        </div>
      );
    }
    if (product && !product.has_offer && product.hasCampaign) {
      {
        return product.campaign ? (
          <div className={`${styles.ribbon}`}>
            <span>{product.campaign[0].name}</span>
          </div>
        ) : (
          <div className={`${styles.ribbon}`}>
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
          <span className={`${styles.product_price} ${styles.offer_price}`}>
            {product.selling_price.formatted}{" "}
            <span className={`${styles.old}`}>{product.price.formatted}</span>
          </span>
        );
      } else {
        return (
          <span className={`${styles.product_price}`}>
            {product.price.formatted}
          </span>
        );
      }
    }
    return <span className={`${styles.product_price}`}>QAR 00.00</span>;
  };

  const BrandName = (attribute) => {
    if (attribute.attribute.length > 0) {
      let brand = attribute.attribute.filter((attr) => attr.attribute_id === 4);
      if (brand.length > 0) {
        brand = brand[0].Brand;
        return brand ? (
          <span className={`${styles.product_brand}`}>{brand}</span>
        ) : (
          <span className={`${styles.product_brand}`}> </span>
        );
      }
    }
    return <span className={`${styles.product_brand}`}> </span>;
  };

  return (
    <Link href={product ? `/product/${product.slug}` : "/products/slug"}>
      <a className={show ? `${styles.product}`:`${styles.product} hide`} dir={lang == "en" ? "ltr" : "rlt"}>
        <RibbonNew />
        <RibbonOffer />
        <RibbonSoldOut />

        <div className={`${styles.product_img} card_image`}>
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
              alt={product.name}
            />
          </LazyLoad>
        </div>

        <BrandName attribute={product.attributes} />
        <span className={`${styles.product_name}`}>
          {product
            ? product.name
            : "I am a long product name. I will be clamped after two lines"}
        </span>

        <Price />
      </a>
    </Link>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(Product);
