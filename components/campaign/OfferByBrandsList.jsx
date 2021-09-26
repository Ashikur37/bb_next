import React from "react";

import SingleBrandOffer from "./SingleBrandOffer";

function OfferByBrandsList({ brands }) {
  return (
    <div className="row">
      {brands.map((brand, index) => (
        <SingleBrandOffer
          key={index}
          url={`/offer?type=brand&id=${brand.id}`}
          img={brand.image.featured_image}
          ends={56520}
          name={brand.value}
          parcent={20}
          total={258}
        />
      ))}
      {/* {brands.map((brand, index) => (
        <SingleBrandOffer
          key={index}
          url={`/offer?type=brand&id=${brand.id}`}
          img={brand.image.image}
          ends={56520}
          name={brand.value}
          parcent={20}
          total={258}
        />
      ))} */}
    </div>
  );
}

export default OfferByBrandsList;
