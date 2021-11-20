import React from "react";
import Header from "../layout/partials/Header";
function FreeGiftList({ products, t ,styles}) {
  return (
    <div className={styles.free__gift__list}>
      {products && (
        <>
          <div className="row">
            <div className="col text-center">
              <Header text={t("Free Gift")} />
            </div>
          </div>
          <div className="row">
            {products.map((itm, index) => (
              <div className="col-md-4 col-sm-6 col-xs-6 mb-2" key={index}>
                <div className={`${styles.brand__offer__card} mb-2 px-2`}>
                  <img src={itm.files[0].thumbnail_image} alt={itm.name} />
                  <div className={styles.brand__name}>{itm.name}</div>
                  <div className={styles.rangePrice}>
                    Min. amount: QAR {itm.free_gift.cart_min}.00
                    <br />
                    Max amount: QAR {itm.free_gift.cart_max}.00
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default FreeGiftList;
