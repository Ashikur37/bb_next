import React, { useState } from "react";
import Swiper from "react-id-swiper";
function MobileMenu({ lang, Link, style, isMobile }) {
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
        slidesPerView: 4,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },

      320: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  };
  const params2 = {
    ...params,
    rtl: "rtl",
  };
  const enMenu = [
    {
      name: "New",
      slug: "/new",
    },
    {
      name: "Brands",
      slug: "/new",
    },
    {
      name: "Skin Care",
      slug: "/new",
    },
    {
      name: "Hair Care",
      slug: "/new",
    },
  ];
  const arMenu = [
    {
      name: "New",
      slug: "/new",
    },
    {
      name: "Skin Care",
      slug: "/new",
    },
    {
      name: "Hair Care",
      slug: "/new",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {isMobile && (
            <div className={style.mobile_menu_wrapper}>
              {lang == "en" ? (
                <Swiper getSwiper={updateSwiper} {...params} shouldSwiperUpdate>
                  {enMenu.map((concern, index) => (
                    <div key={index}>
                      <Link
                        href={{
                          pathname: `/concern/${concern.slug}`,
                          state: { name: concern.name },
                        }}
                      >
                        <a className="">
                          <span>{concern.name}</span>
                        </a>
                      </Link>
                    </div>
                  ))}
                </Swiper>
              ) : (
                <Swiper
                  getSwiper={updateSwiper}
                  {...params2}
                  shouldSwiperUpdate
                >
                  {arMenu.map((concern, index) => (
                    <div key={index}>
                      <Link
                        href={{
                          pathname: `/concern/${concern.slug}`,
                          state: { name: concern.name },
                        }}
                      >
                        <a className="">
                          <span>{concern.name}</span>
                        </a>
                      </Link>
                    </div>
                  ))}
                </Swiper>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
