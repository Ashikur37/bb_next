import React, { lazy } from "react";
import HeaderComponent from "../../components/atom/HeaderComponent";
import OfferByBrandsList from "./OfferByBrandsList";

function OfferByBrands({ brands }) {
  return (
    <div className="row">
      <div className="col">
        <HeaderComponent text="Offer By Brands" />
        <OfferByBrandsList brands={brands} />
      </div>
    </div>
  );
}

export default OfferByBrands;
