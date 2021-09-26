import React from "react";
import HeaderComponent from "../atom/HeaderComponent";
function FreeGiftList({ products,t }) {
  return (
    <div className="free__gift__list">
      {products &&
        (<>
          <div className="row"><div className="col">
            <HeaderComponent text={t("Free Gift")} />
          </div>
          </div>
          <div className="row">
            {products.map((itm, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="brand__offer__card mb-2 px-2">
                  <img
                    src={itm.files[0].thumbnail_image}
                    alt={itm.name}
                  />
                  <div className="brand__name">{itm.name}</div>
                  <div className="rangePrice">
                  Min. amount: QAR {itm.free_gift.cart_min}.00<br/>
                  Max amount: QAR {itm.free_gift.cart_max}.00
                  </div>
                </div>
              </div>
            ))}
          </div></>)
      }
    </div>
  );
}

export default FreeGiftList;
