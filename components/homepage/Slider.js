import { useState, useEffect } from "react";
import Swiper from "react-id-swiper";

const Slider = ({ styles, lang, slides, isMobile, Link }) => {
      const [slider, setSlider] = useState(slides);
      const [params, setParams] = useState({
        rtl: false,
        // loop: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      useEffect(() => {
        setSlider(slides);
        setParams({
          rtl: lang == "ar_QA",
          // loop: true,
          autoplay: {
            delay: 4500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
      }, [lang, slides]);

    return (
        <div className={`container-fluid ${styles.sliderContainer} `}>
            <div className="container">
                <div className={`row slider_global ${styles.slider_wrapper}`}>
                    {isMobile ? (
                        <>
                            {slider ? (
                                <Swiper {...params}>
                                    {slider.map((slide, index) => (
                                        <div className="swiper_banner_container" key={index}>
                                            {index == 0 && (
                                                <link rel="preload" as="image" href={slide.imagePath} />
                                            )}
                                            <Link href={slide.url ?? "/"}>
                                                <a>
                                                    <img src={slide.imagePath} alt="Banner Image" />
                                                </a>
                                            </Link>
                                        </div>
                                    ))}
                                </Swiper>
                            ) : (
                                <div className="loadingClass"></div>
                            )}
                        </>
                    ) : (
                        <>
                            {slider ? (
                                <Swiper {...params}>
                                    {slider.slides.map((slide, index) => (
                                        <div className="swiper_banner_container" key={index}>
                                            {index == 0 && (
                                                <link rel="preload" as="image" href={slide.file.path} />
                                            )}
                                            <Link href={slide.call_to_action_url ?? "/"}>
                                                <a>
                                                    <img
                                                        src={slide.file.path}
                                                        alt={slide.file.filename}
                                                    />
                                                </a>
                                            </Link>
                                        </div>
                                    ))}
                                </Swiper>
                            ) : (
                                <div className="loadingClass"></div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Slider;
