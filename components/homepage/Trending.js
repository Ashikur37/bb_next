import React, { useState, useEffect } from "react";
import Swiper from "react-id-swiper";
import Link from "next/link";
import { trending as trendings } from "../utils/static"
// import Image from "next/image";
// styles
import styles from "../../styles/sass/homepage_sections/Trending.module.scss";

export default function Trending({ FontAwesomeIcon, lang, Header, t }) {
  const [trending, setTrending] = useState(null);
  useEffect(() => {
    const t =
      trendings &&
      trendings[lang]
        .filter((tr) => tr.length === 2)
        .map((trending, index) => (
          <div key={index}>
            {trending.map((trend, indx) => (
              <Link
                href={
                  trend.isCategory
                    ? `/category/${trend.url}`
                    : `/trending/${trend.url.split(" ").join("-")}`
                }
                key={indx}
              >
                <a className={`${styles.slide} ${styles.slide_one}`}>
                  <img
                    data-src={trend.image ? trend.image.image : ""}
                    src="/circular.svg"
                    alt={trend ? trend.slug : ""}
                    className="swiper-lazy"
                  // width="62"
                  // height="62"
                  />
                  <span className={`${styles.text}`}>
                    {trend ? trend.value : ""}
                  </span>
                </a>
              </Link>
            ))}
          </div>
        ));
    setTrending(t);
  }, [trendings, lang]);

  const [swiper, updateSwiper] = useState(null);
  const params = {
    lazy: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    slidesPerView: 6,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },

      320: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    },
  };
  const params2 = {
    ...params,
    rtl: "rtl",
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <Header
            h="h2"
            text={t("trending")}
            Link={Link}
            FontAwesomeIcon={FontAwesomeIcon}
          ></Header>
        </div>
        <div className="col-12">
          <div className={`trending_global ${styles.trending}`}>
            {trending && lang == "en" ? (
              <div className={`${styles.trending_swiper}`}>
                <Swiper getSwiper={updateSwiper} {...params} shouldSwiperUpdate>
                  {trending}
                </Swiper>
              </div>
            ) : null}
            {trending && lang == "ar_QA" ? (
              <div className={`${styles.trending_swiper}`}>
                <Swiper
                  getSwiper={updateSwiper}
                  {...params2}
                  shouldSwiperUpdate
                >
                  {trending}
                </Swiper>
              </div>
            ) : null}
          </div>
        </div>

      </div>
    </div>
  );
};
