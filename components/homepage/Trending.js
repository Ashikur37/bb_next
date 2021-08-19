import React, { useState, useEffect, useRef } from "react";
import Swiper from "react-id-swiper";
import { withTranslation } from "../../i18n";
// styles
import styles from "../../styles/sass/homepage_sections/Trending.module.scss";

const Trending = ({ trendings, FontAwesomeIcon, faArrowLeft, faArrowRight, lang, isMobile, Link, Header }) => {

    const swiperRef = useRef(null);
    const [trending, setTrending] = useState(null);
    useEffect(() => {
        const t = trendings
            ? trendings[lang]
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
                                    />
                                    <span className={`${styles.text}`}>
                                        {trend ? trend.value : ""}
                                    </span>
                                </a>
                            </Link>
                        ))}
                    </div>
                ))
            : null;
        setTrending(t);
    }, [trendings, lang]);

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
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
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
                slidesPerView: 2,
                spaceBetween: 5,
            },
        },
    };
    const params2 = {
        ...params,
        rtl: true,
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <Header h="h2" text="Trending" Link={Link} FontAwesomeIcon={FontAwesomeIcon}></Header>
            </div>
            {/* <div className="row"> */}
                <div className={`${styles.trending}`}>
                    {trending && lang == "en" ? (
                        <div className={`${styles.trending_swiper}`}>
                            <Swiper
                                ref={swiperRef}
                                getSwiper={updateSwiper}
                                {...params}
                                shouldSwiperUpdate
                            >
                                {trending}
                            </Swiper>
                        </div>
                    ) : null}
                    {trending && lang == "ar_QA" ? (
                        <div className={`${styles.trending_swiper}`}>
                            <Swiper
                                ref={swiperRef}
                                getSwiper={updateSwiper}
                                {...params2}
                                shouldSwiperUpdate
                            >
                                {trending}
                            </Swiper>
                        </div>
                    ) : null}
                </div>
            {/* </div> */}
        </div>
    );
}

export default withTranslation("common")(Trending);