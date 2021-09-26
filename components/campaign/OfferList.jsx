import React from "react";
import Swiper from "react-id-swiper";
import HeaderComponent from "../atom/HeaderComponent";
import SingleOffer from "./SingleOffer";

const params = {
  slidesPerView: 4.5,
  observer: true,
  observeParents: true,
  // slidesPerColumn: 2,
  spaceBetween: 20,
  breakpoints: {
    992: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 2,
    },

    320: {
      slidesPerView: 2.1,
      spaceBetween: 5,
    },
  },
};
function OfferList({ campaigns }) {
  return (
    <div className="row">
      <div className="col">
        {campaigns && (
          <>
            {campaigns.length > 0 && <HeaderComponent text="LATEST oFFER" />}

            <Swiper shouldSwiperUpdate {...params}>
              {campaigns.map((c, index) => (
                <div key={index}>
                  <SingleOffer
                    active={
                      new Date(c.special_price_start).getTime() > Date.now()
                        ? false
                        : true
                    }
                    start={c.special_price_start}
                    name={c.name}
                    ends={
                      new Date(c.special_price_start).getTime() > Date.now()
                        ? 0
                        : new Date(c.special_price_end).getTime() - Date.now()
                    }
                    endsDate={c.special_price_end.split(" ")[0]}
                    url={`campaign/${c.slug}`}
                    img={c.banner}
                  />
                </div>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
}

export default OfferList;
