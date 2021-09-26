import React from "react";
import Link from "next/link";
import HeaderComponent from "../../components/atom/HeaderComponent";

function OfferByCategories({ categories }) {
  return (
    <div className="row">
      <div className="col">
        <HeaderComponent text="Offer By Categories" />
        <div className="row">
          {categories.map((category, index) => (
            <div className="col-lg-3" key={index}>
              <div className="brand__offer__card mb-5 px-2">
                <img src={category.img} alt="" />
                <div className="brand__name">{category.name}</div>
                <Link href={`/offer?type=category&id=${category.id}`}>
                  <a className="btn claims__button btn-block">
                    {" "}
                    Claim this offer
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferByCategories;
