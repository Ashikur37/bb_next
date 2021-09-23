import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import GiftCard from "./GiftCard";

function FreeGift({ Header, headerText, gifts, cartTotal, giftHandler }) {
  const [filterGifts, setFilterGifts] = useState();

  useEffect(() => {
    setFilterGifts(
      gifts.filter(
        (gift) =>
          cartTotal >= gift.free_gift.cart_min &&
          cartTotal <= gift.free_gift.cart_max
      )
    );
  }, [cartTotal]);

  const [swiper, updateSwiper] = useState(null);
  const params = {
    // loop: true,
    // lazy: true,
    observer: true,
    observeParents: true,
    // preventClicks: false,
    // preventClicksPropagation: false,
    slidesPerView: 3.5,
    spaceBetween: 20,
    breakpoints: {
      992: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 2,
      },

      320: {
        slidesPerView: 1.3,
        spaceBetween: 1,
      },
    },
  };
  return (
    <div className="free__gift">
      {filterGifts && (<>
      <Header text={headerText} />
        <Swiper getSwiper={updateSwiper} {...params} shouldSwiperUpdate>
          {filterGifts.map((gift) => (
            <div>
              <GiftCard
                img={gift.files[0].thumbnail_image}
                name={gift.name}
                id={gift.id}
                price={gift.selling_price.formatted}
                giftHandler={giftHandler}
              />
            </div>
          ))}
        </Swiper>
      </>)}
    </div>
  );
}

export default FreeGift;
