import React, { useState, useEffect, useRef } from "react";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { getBestBrands } from "../../redux/actions/homePageActions";
import Link from "next/link";

import dynamic from "next/dynamic";

function Brands(props) {
  const { styles, lang, t, Header, Link, FontAwesomeIcon } = props;
  const swiperRef = useRef(null);
  useEffect(() => {
    if (!props.bestBrands) {
      props.getBestBrands();
    }
  }, [props.bestBrands]);
  const [swiper, updateSwiper] = useState(null);
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
  const params = {
    // rtl: true,
    loop: false,
    speed: 1500,
    lazy: true,
    autoplay: {
      delay: 1000,
    },
    slidesPerView: 6,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  };

  return (
    <div className="container mt-4">
      {props.bestBrands ? (
        <>
          <div className="row">
            <div className="col">
              <Header
                text={t("best_brands")}
                url="brands"
                lang={lang}
                Link={Link}
                h="h2"
                FontAwesomeIcon={FontAwesomeIcon}
              />
              <div className={`best_brands ${styles.brands_container}`}>
                {props.bestBrands ? (
                  <Swiper
                    getSwiper={updateSwiper}
                    {...params}
                    shouldSwiperUpdate
                  >
                    {props.bestBrands.map((brand, index) => {
                      return (
                        <div className={styles.brand_slide} key={index}>
                          <Link
                            href={`brand/${brand.value.split(" ").join("-")}`}
                          >
                            <a>
                              {brand.image ? (
                                <img src={brand.image.image} alt={brand.slug} />
                              ) : (
                                <div className="no-img">{brand.value}</div>
                              )}
                            </a>
                          </Link>
                        </div>
                      );
                    })}
                  </Swiper>
                ) : null}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => ({
  bestBrands: state.homePage.bestBrands,
});
const mapDispatchToProps = (dispatch) => {
  return {
    getBestBrands: () => getBestBrands(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Brands);
