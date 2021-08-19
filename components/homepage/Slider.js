import { useState, useEffect, useMemo } from "react";
import Swiper from "react-id-swiper";

const Slider = ({ FontAwesomeIcon, styles, lang, slides, isMobile, Link }) => {
    const slider = useMemo(() => ({
            id: 1,
            autoplay: 1,
            autoplay_speed: 3000,
            arrows: 1,
            dots: null,
            created_at: "2019-08-06 06:34:37",
            updated_at: "2021-08-08 14:59:36",
            name: "Home Page Top Slider",
            translations: [
              {
                id: 1,
                slider_id: 1,
                locale: "en",
                name: "Home Page Top Slider",
              },
            ],
            slides: [
              {
                id: 21,
                slider_id: 1,
                options: {
                  caption_1: {
                    delay: null,
                    effect: "fadeInUp",
                  },
                  caption_2: {
                    delay: null,
                    effect: "fadeInUp",
                  },
                  caption_3: {
                    delay: null,
                    effect: "fadeInUp",
                  },
                  call_to_action: {
                    delay: null,
                    effect: "fadeInUp",
                  },
                },
                call_to_action_url: "brand/Cerave",
                open_in_new_window: null,
                position: 0,
                created_at: "2021-07-16 18:59:08",
                updated_at: "2021-07-24 11:37:43",
                file_id: 5166,
                caption_1: null,
                caption_2: null,
                caption_3: null,
                call_to_action_text: null,
                translations: [
                  {
                    id: 21,
                    slider_slide_id: 21,
                    locale: "en",
                    file_id: 5166,
                    caption_1: null,
                    caption_2: null,
                    caption_3: null,
                    call_to_action_text: null,
                  },
                ],
                file: {
                  id: 5166,
                  user_id: 2,
                  filename: "cerave cover.jpg",
                  disk: "public_storage",
                  path: "https://admin.beautyboothqa.com/storage/media/PcKe7LT5dInKosuoFjpCnw5bXuPhk141SYIRiSiD.jpeg",
                  extension: "jpeg",
                  mime: "image/jpeg",
                  size: "157697",
                  created_at: "2021-07-24 11:37:18",
                  updated_at: "2021-07-24 11:37:18",
                  thumbnail_image:
                    "https://admin.beautyboothqa.com/storage/media/thumbnails/PcKe7LT5dInKosuoFjpCnw5bXuPhk141SYIRiSiD.jpeg",
                },
              },
              {
                id: 21,
                slider_id: 1,
                options: {
                  caption_1: {
                    delay: null,
                    effect: "fadeInUp",
                  },
                  caption_2: {
                    delay: null,
                    effect: "fadeInUp",
                  },
                  caption_3: {
                    delay: null,
                    effect: "fadeInUp",
                  },
                  call_to_action: {
                    delay: null,
                    effect: "fadeInUp",
                  },
                },
                call_to_action_url: "brand/Cerave",
                open_in_new_window: null,
                position: 0,
                created_at: "2021-07-16 18:59:08",
                updated_at: "2021-07-24 11:37:43",
                file_id: 5166,
                caption_1: null,
                caption_2: null,
                caption_3: null,
                call_to_action_text: null,
                translations: [
                  {
                    id: 21,
                    slider_slide_id: 21,
                    locale: "en",
                    file_id: 5166,
                    caption_1: null,
                    caption_2: null,
                    caption_3: null,
                    call_to_action_text: null,
                  },
                ],
                file: {
                  id: 5166,
                  user_id: 2,
                  filename: "cerave cover.jpg",
                  disk: "public_storage",
                  path: "https://www.nicepng.com/png/full/843-8434850_illustration.png",
                  extension: "jpeg",
                  mime: "image/jpeg",
                  size: "157697",
                  created_at: "2021-07-24 11:37:18",
                  updated_at: "2021-07-24 11:37:18",
                  thumbnail_image:
                    "https://admin.beautyboothqa.com/storage/media/thumbnails/PcKe7LT5dInKosuoFjpCnw5bXuPhk141SYIRiSiD.jpeg",
                },
              },
            ],
          }), [lang]);
    const params = useMemo(() => ({
        rtl: lang == "en" ? false : true || false,
        // loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    }), [lang]);
    //   const [slider, setSlider] = useState({
    //     id: 1,
    //     autoplay: 1,
    //     autoplay_speed: 3000,
    //     arrows: 1,
    //     dots: null,
    //     created_at: "2019-08-06 06:34:37",
    //     updated_at: "2021-08-08 14:59:36",
    //     name: "Home Page Top Slider",
    //     translations: [
    //       {
    //         id: 1,
    //         slider_id: 1,
    //         locale: "en",
    //         name: "Home Page Top Slider",
    //       },
    //     ],
    //     slides: [
    //       {
    //         id: 21,
    //         slider_id: 1,
    //         options: {
    //           caption_1: {
    //             delay: null,
    //             effect: "fadeInUp",
    //           },
    //           caption_2: {
    //             delay: null,
    //             effect: "fadeInUp",
    //           },
    //           caption_3: {
    //             delay: null,
    //             effect: "fadeInUp",
    //           },
    //           call_to_action: {
    //             delay: null,
    //             effect: "fadeInUp",
    //           },
    //         },
    //         call_to_action_url: "brand/Cerave",
    //         open_in_new_window: null,
    //         position: 0,
    //         created_at: "2021-07-16 18:59:08",
    //         updated_at: "2021-07-24 11:37:43",
    //         file_id: 5166,
    //         caption_1: null,
    //         caption_2: null,
    //         caption_3: null,
    //         call_to_action_text: null,
    //         translations: [
    //           {
    //             id: 21,
    //             slider_slide_id: 21,
    //             locale: "en",
    //             file_id: 5166,
    //             caption_1: null,
    //             caption_2: null,
    //             caption_3: null,
    //             call_to_action_text: null,
    //           },
    //         ],
    //         file: {
    //           id: 5166,
    //           user_id: 2,
    //           filename: "cerave cover.jpg",
    //           disk: "public_storage",
    //           path: "https://admin.beautyboothqa.com/storage/media/PcKe7LT5dInKosuoFjpCnw5bXuPhk141SYIRiSiD.jpeg",
    //           extension: "jpeg",
    //           mime: "image/jpeg",
    //           size: "157697",
    //           created_at: "2021-07-24 11:37:18",
    //           updated_at: "2021-07-24 11:37:18",
    //           thumbnail_image:
    //             "https://admin.beautyboothqa.com/storage/media/thumbnails/PcKe7LT5dInKosuoFjpCnw5bXuPhk141SYIRiSiD.jpeg",
    //         },
    //       },
    //       {
    //         id: 21,
    //         slider_id: 1,
    //         options: {
    //           caption_1: {
    //             delay: null,
    //             effect: "fadeInUp",
    //           },
    //           caption_2: {
    //             delay: null,
    //             effect: "fadeInUp",
    //           },
    //           caption_3: {
    //             delay: null,
    //             effect: "fadeInUp",
    //           },
    //           call_to_action: {
    //             delay: null,
    //             effect: "fadeInUp",
    //           },
    //         },
    //         call_to_action_url: "brand/Cerave",
    //         open_in_new_window: null,
    //         position: 0,
    //         created_at: "2021-07-16 18:59:08",
    //         updated_at: "2021-07-24 11:37:43",
    //         file_id: 5166,
    //         caption_1: null,
    //         caption_2: null,
    //         caption_3: null,
    //         call_to_action_text: null,
    //         translations: [
    //           {
    //             id: 21,
    //             slider_slide_id: 21,
    //             locale: "en",
    //             file_id: 5166,
    //             caption_1: null,
    //             caption_2: null,
    //             caption_3: null,
    //             call_to_action_text: null,
    //           },
    //         ],
    //         file: {
    //           id: 5166,
    //           user_id: 2,
    //           filename: "cerave cover.jpg",
    //           disk: "public_storage",
    //           path: "https://admin.beautyboothqa.com/storage/media/PcKe7LT5dInKosuoFjpCnw5bXuPhk141SYIRiSiD.jpeg",
    //           extension: "jpeg",
    //           mime: "image/jpeg",
    //           size: "157697",
    //           created_at: "2021-07-24 11:37:18",
    //           updated_at: "2021-07-24 11:37:18",
    //           thumbnail_image:
    //             "https://admin.beautyboothqa.com/storage/media/thumbnails/PcKe7LT5dInKosuoFjpCnw5bXuPhk141SYIRiSiD.jpeg",
    //         },
    //       },
    //     ],
    //   });
    //   const [params, setParams] = useState({
    //     rtl: false,
    //     // loop: true,
    //     autoplay: {
    //       delay: 4500,
    //       disableOnInteraction: false,
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
    //       clickable: true,
    //     },
    //   });
    //   useEffect(() => {
    //     // setSlider(slides);
    //     setParams({
    //       rtl: lang == "ar_QA",
    //       // loop: true,
    //       autoplay: {
    //         delay: 4500,
    //         disableOnInteraction: false,
    //       },
    //       pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //       },
    //     });
    //   }, [lang, slides]);

    return (
        <div className={`container-fluid ${styles.sliderContainer} `}>
            <div className="container">
                <div className={`row ${styles.slider_wrapper}`}>
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
