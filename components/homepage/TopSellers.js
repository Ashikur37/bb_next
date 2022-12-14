import { useState, useEffect } from "react";
import Link from "next/link";
import Swiper from "react-id-swiper";
import { connect } from "react-redux";
import { getBestSellingProducts } from "../../redux/actions/homePageActions";
import dynamic from "next/dynamic";
import { getBrandName } from "../utils/helper";

const Product = dynamic(() => import("../atom/Product"));
function TopSellers(props) {
  const { t, Header, styles, FontAwesomeIcon, lang,auth } = props;
  const [bestSellingProducts,setBestSellingProducts] = useState(props.bestSelling);

  useEffect(() => {
    if (auth.isAuthenticated == false) {
      if (props.bestSelling) {
        let prods = props.bestSelling.filter((product) => {
          // console.log(getBrandName(product.attributes).toLowerCase());
          if (getBrandName(product.attributes).toLowerCase() !== "the ordinary") {
            return product;
          }
        });
        setBestSellingProducts(prods);
      }
    }else{
      setBestSellingProducts(props.bestSelling);
    }
  }, [props.bestSelling, auth]);

  useEffect(() => {
    if (props.bestSelling.length == 0 || props.localLang !== props.lang) {
      props.getBestSellingProducts(props.lang);
    }
  }, [lang]);
  const [swiper, updateSwiper] = useState(null);
  const params = {
    rtl:false,
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
    <div className="container mt-4">
      {
        bestSellingProducts.length !== 0 && (
          <>
            <div className="row">
              <div className="col">
                <Header
                  h="h2"
                  text={t("best_selling")}
                  url="/best-selling"
                  lang={props.lang}
                  Link={Link}
                  FontAwesomeIcon={FontAwesomeIcon}
                ></Header>
              </div>
            </div>

            <div className="selling_swiper_wrapper">
              {props.lang == "en" ? (
                <Swiper getSwiper={updateSwiper} {...params} shouldSwiperUpdate>
                  {bestSellingProducts.map((product, index) => (
                    <div key={index}>
                      <Product product={product} lazy={true} styles={styles} lang={lang} />
                    </div>
                  ))}
                </Swiper>
              ) : (
                <Swiper getSwiper={updateSwiper} {...params2} shouldSwiperUpdate>
                  {bestSellingProducts.map((product, index) => (
                    <div key={index}>
                      <Product product={product} lazy={true} styles={styles} lang={lang} />
                    </div>
                  ))}
                </Swiper>
              )
              }
            </div>
          </>
        )
      }
    </div>
  );
}
const mapStateToProps = (state) => ({
  bestSelling: state.homePage.bestSelling,
  localLang: state.homePage.localLang,
  auth:state.auth,
});
const mapDispatchToProps = (dispatch, lang) => {
  return {
    getBestSellingProducts: () => getBestSellingProducts(dispatch, lang.lang),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TopSellers);
