import React, { useState } from "react";
import HeaderComponent from "./atom/HeaderComponent";
import Swiper from "react-id-swiper";
import dynamic from "next/dynamic";

const Product = dynamic(() => import("./atom/Product"));

function MoreThisBrand({ products }) {
  const [swiper, updateSwiper] = useState(null);
  const params = {
    slidesPerView: 3.1,
    // slidesPerColumn: 2,
    spaceBetween: 10,
    breakpoints: {
      992: {
        slidesPerView: 3.3,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3.1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 2,
      },

      320: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
    },
  };
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
  return (
    <div className="">
      {/* <HeaderComponent text="More From THis Brand" /> */}
      <Swiper getSwiper={updateSwiper} {...params}>
        {products.map((product, index) => (
          <div key={index}>
            <Product product={product} />
          </div>
        ))}
      </Swiper>
      <div className="swiper_button_container">
        <span onClick={goPrev} className="prev">
          {/* <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="arrow-alt-circle-left"
            className="svg-inline--fa fa-arrow-alt-circle-left fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"
            ></path>
          </svg> */}
        </span>
        <span onClick={goNext} className="next">
          {/* <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="arrow-alt-circle-right"
            className="svg-inline--fa fa-arrow-alt-circle-right fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"
            ></path>
          </svg> */}
        </span>
      </div>
    </div>
  );
}

export default MoreThisBrand;
