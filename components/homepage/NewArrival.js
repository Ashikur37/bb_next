import { useState, useEffect } from "react";
import Link from "next/link";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { getNewArrivals } from "../../redux/actions/homePageActions";

import dynamic from "next/dynamic";
import { getBrandName } from "../utils/helper";

const Product = dynamic(() => import("../atom/Product"));

function NewArrival(props) {
  const { t, Header, styles, FontAwesomeIcon, newArrivals, auth } = props;
  const [newArrivalsProducts, setNewArrivalProduct] = useState(newArrivals);

  useEffect(() => {
    if (auth.isAuthenticated == false) {
      if (newArrivals) {
        let prods = newArrivals.filter((product) => {
          // console.log(getBrandName(product.attributes).toLowerCase());
          if (getBrandName(product.attributes).toLowerCase() !== "the ordinary") {
            return product;
          }
        });
        setNewArrivalProduct(prods);
      }
    }else{
      setNewArrivalProduct(newArrivals);
    }
  }, [newArrivals, auth]);

  useEffect(() => {
    if (!props.newArrivals || props.localLang !== props.lang) {
      props.getNewArrivals(props.lang);
    }
  }, [props.lang]);
  const [swiper, updateSwiper] = useState(null);
  const params = {
    rtl: false,
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
    <div className="container">
      {newArrivalsProducts ? (
        <>
          <div className="row mt-3">
            <div className="col">
              <Header
                h="h2"
                text={t("new_arrival")}
                url="/new"
                lang={props.lang}
                Link={Link}
                FontAwesomeIcon={FontAwesomeIcon}
              ></Header>
            </div>
          </div>
          <div className="selling_swiper_wrapper">
            {props.lang == "en" ? (
              <Swiper getSwiper={updateSwiper} {...params} shouldSwiperUpdate>
                {newArrivalsProducts.map((product, index) => (
                  <div key={index}>
                    <Product product={product} lazy={true} styles={styles} />
                  </div>
                ))}
              </Swiper>
            ) : (
              <Swiper getSwiper={updateSwiper} {...params2} shouldSwiperUpdate>
                {newArrivalsProducts.map((product, index) => (
                  <div key={index}>
                    <Product product={product} lazy={true} styles={styles} />
                  </div>
                ))}
              </Swiper>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
const mapStateToProps = (state) => ({
  newArrivals: state.homePage.newArrivals,
  auth: state.auth,
});
const mapDispatchToProps = (dispatch, lang) => {
  return {
    getNewArrivals: () => getNewArrivals(dispatch, lang.lang),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewArrival);
