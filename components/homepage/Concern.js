import { useState } from "react";
import Link from "next/link";
import Swiper from "react-id-swiper";
import { concern as concerns } from "../utils/static"
// styles
import styles from "../../styles/sass/homepage_sections/Concern.module.scss";

const Concern = ({
  FontAwesomeIcon,
  lang,
  Header,
  t,
}) => {
  const [swiper, updateSwiper] = useState(null);
  const params = {
    lazy: true,
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 1.8,
        spaceBetween: 20,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  };
  const params2 = {
    ...params,
    rtl: "rtl",
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <Header
            h="h2"
            text={t("shop_by_concern")}
            Link={Link}
            FontAwesomeIcon={FontAwesomeIcon}
          ></Header>
          <div className={`concern_global ${styles.concern_swiper}`}>
            {lang == "en" ? (
              <Swiper getSwiper={updateSwiper} {...params} shouldSwiperUpdate>
                {concerns["en"].map((concern, index) => (
                  <div key={index}>
                    <Link
                      href={{
                        pathname: `/concern/${concern.slug}`,
                        state: { name: concern.value },
                      }}
                    >
                      <a className={styles.concern_slide}>
                        {" "}
                        {concern.image ? (
                          <img
                            // className="swiper-lazy"
                            src={concern.image.image}
                            // src="/circular.svg"
                            alt={concern.value}
                          />
                        ) : null}
                        <span>{concern.value}</span>
                      </a>
                    </Link>
                  </div>
                ))}
              </Swiper>
            ) : (
              <Swiper getSwiper={updateSwiper} {...params2} shouldSwiperUpdate>
                {concerns["ar"].map((concern, index) => (
                  <div key={index}>
                    <Link
                      href={{
                        pathname: `/concern/${concern.slug}`,
                        state: { name: concern.value },
                      }}
                    >
                      <a className={styles.concern_slide}>
                        {" "}
                        {concern.image ? (
                          <img src={concern.image.image} alt={concern.value} />
                        ) : null}
                        <span>{concern.value}</span>
                      </a>
                    </Link>
                  </div>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concern;
