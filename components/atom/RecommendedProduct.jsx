import React from "react";
import Link from "next/link";

function RecommendedProduct({ product }) {
  const Price = () => {
    if (product) {
      if (product.has_offer) {
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
      let brand = attribute.attribute.filter((attr) => attr.attribute_id == 4);
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
    <Link href={`/product/${product.slug}`}>
      <a className="product">
        <BrandName attribute={product.attributes} />
        <div className="product_img">
          <img
            src={
              product
                ? product.files[0].thumbnail_image
                : "../../public/assets/images/product.png"
            }
            alt=""
          />
        </div>

        <span className="product_name">{product.name}</span>
        <Price />
      </a>
    </Link>
  );
}

export default RecommendedProduct;
