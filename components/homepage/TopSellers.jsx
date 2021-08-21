import React, { useState, useEffect, useRef } from "react";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { getBestSellingProducts } from "../../redux/actions/homePageActions";
import dynamic from "next/dynamic";
import { withTranslation } from "../../i18n";

const Product = dynamic(() => import("../atom/Product"));
const HeaderComponent = dynamic(() => import("../atom/HeaderComponent"));

function TopSellers(props) {
  const { t, Header, Link, FontAwesomeIcon } = props;
  const swiperRef = useRef(null);
  useEffect(() => {
    if (props.bestSelling.length == 0 || props.localLang !== props.lang) {
      props.getBestSellingProducts(props.lang);
    }
  }, [props.lang]);
  const [swiper, updateSwiper] = useState(null);
  const params = {
    loop: false,
    // lazy: {
    //   loadPrevNext: true,
    // },
    // autoplay:true,
    slidesPerView: 4.5,
    // slidesPerColumn: 2,
    spaceBetween: 10,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 1,
      },

      320: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  };
  const params2 = {
    rtl: true,
    loop: false,
    // lazy: {
    //   loadPrevNext: true,
    // },
    // autoplay:true,
    slidesPerView: 4.5,
    // slidesPerColumn: 2,
    spaceBetween: 10,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 1,
      },

      320: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
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
  // const elem = props.bestSelling.map((product, index) => (
  //   <div key={index}>
  //     <Product product={product} />
  //   </div>
  // ));
  return (
    <>
      {props.bestSelling.length !== 0 && props.lang == "en" ? (
        <div className="container">
          {/* <HeaderComponent text={t("best_selling")} url="best-selling" /> */}
          <div className="row">
            <Header
              h="h2"
              text={t("best_selling")}
              Link={Link}
              FontAwesomeIcon={FontAwesomeIcon}
            ></Header>
          </div>

          <div className="selling_swiper_wrapper">
            <Swiper
              ref={swiperRef}
              getSwiper={updateSwiper}
              {...params}
              shouldSwiperUpdate
            >
              {props.bestSelling.map((product, index) => (
                <div key={index}>
                  <Product product={product} lazy={true} />
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
                <img src="/images/svg/left.svg" alt="" />
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
                <img src="/images/svg/right.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      ) : null}
      {props.bestSelling.length !== 0 && props.lang == "ar" ? (
        <div className="container">
          <HeaderComponent text={t("best_selling")} url="best-selling" />

          <div className="selling_swiper_wrapper">
            <Swiper
              ref={swiperRef}
              getSwiper={updateSwiper}
              {...params2}
              shouldSwiperUpdate
            >
              {props.bestSelling.map((product, index) => (
                <div key={index}>
                  <Product product={product} lazy={true} />
                </div>
              ))}
            </Swiper>
            <div className="swiper_button_container">
              <span onClick={goPrev} className="prev">
                <svg
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
                </svg>
              </span>
              <span onClick={goNext} className="next">
                <svg
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
                </svg>
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
const mapStateToProps = (state) => ({
  bestSelling: state.homePage.bestSelling,
  localLang: state.homePage.localLang,
});
const mapDispatchToProps = (dispatch, lang) => {
  let locale = lang.lang == "ar" ? "ar_QA" : "en";
  return {
    getBestSellingProducts: () => getBestSellingProducts(dispatch, locale),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation("common")(TopSellers));
