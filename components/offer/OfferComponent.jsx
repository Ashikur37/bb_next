import React, { useState, useEffect } from "react";
import axios from "../../redux/actions/axios";
import Swiper from "react-id-swiper";
import dynamic from "next/dynamic";
import Link from "next/link";
// css must the the last normal import
import styles from "../../styles/HomePage.module.scss";
import Header from "../layout/partials/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Product = dynamic(() => import("../atom/Product"));
function OfferComponent({ offer, language }) {
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
  const [offerProdcuts, setOfferProducts] = useState();
  useEffect(() => {
    axios
      .get(`${language}/getdata/offer?type=category&id=${offer.id}`)
      .then((res) => {
        console.log(res.data);
        setOfferProducts(res.data.products);
      });
  }, []);

  return (
    <>
      {offerProdcuts && (
        <div className="mb-3">
          <div className="row">
            <div className="col">
              <Header
                Link={Link}
                text={`SALE ON ${offer.name}`}
                // textColor={"red"}
                lang={language}
                url={`/campaigns/${offer.slug}`}
                FontAwesomeIcon={FontAwesomeIcon}
              />
            </div>
          </div>
          <div className="selling_swiper_wrapper">
            {language == "en" ? (
              <Swiper getSwiper={updateSwiper} {...params} shouldSwiperUpdate>
                {offerProdcuts.data.map((product, index) => (
                  <div key={index}>
                    <Product
                      product={product}
                      lazy={true}
                      styles={styles}
                      lang={language}
                    />
                  </div>
                ))}
              </Swiper>
            ) : (
              <Swiper getSwiper={updateSwiper} {...params2} shouldSwiperUpdate>
                {offerProdcuts.data.map((product, index) => (
                  <div key={index}>
                    <Product
                      product={product}
                      lazy={true}
                      styles={styles}
                      lang={language}
                    />
                  </div>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default OfferComponent;
