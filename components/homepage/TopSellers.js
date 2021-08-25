import { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { getBestSellingProducts } from "../../redux/actions/homePageActions";
import dynamic from "next/dynamic";

const Product = dynamic(() => import("../atom/Product"));
function TopSellers(props) {
  const { t, Header, Link, styles, FontAwesomeIcon } = props;

  useEffect(() => {
    if (props.bestSelling.length == 0 || props.localLang !== props.lang) {
      props.getBestSellingProducts(props.lang);
    }
  }, [props.lang]);
  const [swiper, updateSwiper] = useState(null);
  const params = {
    loop: false,
    lazy: {
      loadPrevNext: true,
    },
    slidesPerView: 4,
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
    ...params,
  };
  return (
    <>
      {props.bestSelling.length !== 0 && props.lang == "en" ? (
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <Header
                h="h2"
                text={t("best_selling")}
                url="/best_selling"
                lang="en"
                Link={Link}
                FontAwesomeIcon={FontAwesomeIcon}
              ></Header>
            </div>
          </div>

          <div className="selling_swiper_wrapper">
            <Swiper getSwiper={updateSwiper} {...params} shouldSwiperUpdate>
              {props.bestSelling.map((product, index) => (
                <div key={index}>
                  <Product product={product} lazy={true} styles={styles} />
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      ) : null}
      {props.bestSelling.length !== 0 && props.lang == "ar_QA" ? (
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <Header
                h="h2"
                text={t("best_selling")}
                url="/best_seling"
                lang="en"
                Link={Link}
                FontAwesomeIcon={FontAwesomeIcon}
              ></Header>
            </div>
          </div>

          <div className="selling_swiper_wrapper">
            <Swiper getSwiper={updateSwiper} {...params2} shouldSwiperUpdate>
              {props.bestSelling.map((product, index) => (
                <div key={index}>
                  <Product product={product} lazy={true} styles={styles} />
                </div>
              ))}
            </Swiper>
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
  return {
    getBestSellingProducts: () => getBestSellingProducts(dispatch, lang.lang),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopSellers);