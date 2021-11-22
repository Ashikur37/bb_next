import React, { useState, useEffect, useRef } from "react";
// import { withRouter } from "react-router-dom";
import Head from "next/head";
import Link from "next/link";
// import Swiper from "react-id-swiper";
// import { Wrapper, Button, Menu, MenuItem } from "react-aria-menubutton";

import { toast, ToastContainer } from "react-toastify";
// import ReactImageMagnify from "react-image-magnify";
// import ReactImageZoom from "react-image-zoom";
import { withTranslation } from "../../i18n";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Descriptions from "../../components/Descriptions";
import Recomanded from "../../components/Recomanded";
import ProductImage from "../../components/ProductImage";
import Loader from "../../components/atom/Loader";

import axios from "../../redux/actions/axios";

import { addToCart } from "../../redux/actions/cartAction";
// import { isMobile } from "react-device-detect";
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Countdown from "react-countdown";
import Axios from "axios";
import { GTMAddToCart, GTMProductView } from "../../components/utils/gtm";
import styles from "../../styles/ProductPage.module.scss";
// import Cookies from "universal-cookie";
function ProductPage(props) {
  const { t } = props;
  const thumb = useRef(null);

  const [product, setProduct] = useState(null);
  const [variantProduct, setVariantProduct] = useState(null);
  const [variantSize, setVariantSize] = useState([]);
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const [active, setActive] = useState("0");
  const [waitListEmail, setWaitListEmail] = useState(
    props.auth.isAuthenticated ? JSON.parse(props.auth.user).email : ""
  );
  // const [infos, setInfos] = useState(null);

  const gallerySwiperParams = {
    observer: true,
    observeParents: true,
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    centeredSlides: true,
    effect: "fade",
    // rtl: true,
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination-custom",
      type: "bullets",
      clickable: true,
    },
    height: 420,
    zoom: {
      maxRatio: 1.5,
      minRation: 1,
    },
    grabCursor: true,
    centeredSlides: true,
  };
  const thumbnailSwiperParams = {
    observer: true,
    observeParents: true,
    // rtl: false,
    getSwiper: getThumbnailSwiper,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 0,
    slidesPerView: "auto",
    slideToClickedSlide: true,
    direction: "vertical",
    grabCursor: true,
    mousewheel: true,
    setWrapperSize: true,
    autoHeight: true,
    height: 400,
  };
  const [review, setReview] = useState(0);
  const [qnt, setQnt] = useState(1);
  const [optionValue, setOptionValue] = useState();
  const [maxQnt, setMaxQnt] = useState();

  useEffect(() => {
    GTMProductView(props.product);
    /**
     * FOR FB CONVERSION API
     */
    // let fbp = document.cookie
    //   .split(";")
    //   .filter((c) => c.includes("_fbp="))
    //   .map((c) => c.split("_fbp=")[1]);
    // let fbc = document.cookie
    //   .split(";")
    //   .filter((c) => c.includes("_fbc="))
    //   .map((c) => c.split("_fbc=")[1]);
    // fbp = (fbp.length && fbp[0]) || null;
    // fbc = (fbc.length && fbc[0]) || null;

    // if (!fbc && window.location.search.includes("fbclid=")) {
    //   fbc =
    //     "fb.1." +
    //     +new Date() +
    //     "." +
    //     window.location.search.split("fbclid=")[1];
    // }
    // let em = props.auth.isAuthenticated
    //   ? JSON.parse(props.auth.user).email
    //   : null;

    // Axios.post("/event/viewProduct", {
    //   em,
    //   product_id: props.product.id,
    //   name: props.product.name,
    //   eventName: "ViewContent",
    //   eventNameSource: `https://beautyboothqa.com/product/${props.product.slug}`,
    //   fbp,
    //   fbc,
    // });
  }, [props.product.slug]);
  useEffect(() => {
    let cartProduct = props.cart.filter(
      (p) => p.product_id == props.product.id
    );
    if (cartProduct?.length > 0) {
      let value = props.product.max_cart_qnt - cartProduct[0].qnt;
      props.product.max_cart_qnt ? setMaxQnt(value) : setMaxQnt(1000);
    } else {
      props.product.max_cart_qnt
        ? setMaxQnt(props.product.max_cart_qnt)
        : setMaxQnt(1000);
    }
    if (props.product) {
      setProduct(props.product);
      axios
        .get(`/${props.language}/getdata/variant/${props.product.slug}`)
        .then((res) => {
          setVariantProduct(res.data.option);
          setVariantSize(res.data.size);
        });
    }
  }, [props.product, props.cart]);

  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [thumbnailSwiper, gallerySwiper]);

  const Variants = () => {
    if (variantProduct?.length > 0) {
      let t = variantProduct.map((product, index) => (
        <div key={index} className={styles.variant_product}>
          <Link href={`/product/${product.slug}`}>
            <a>
              <img
                title={product.name}
                src={product.files[0].thumbnail_image}
                style={{ height: "50px", width: "50px" }}
              />
            </a>
          </Link>
        </div>
      ));
      return t;
    }
    return "";
  };

  const Price = () => {
    if (product) {
      if (product.has_offer || product.hasCampaign) {
        return (
          <span className="product_price offer_price">
            {product.selling_price.formatted}
            <span className="old">{product.price.formatted}</span>
          </span>
        );
      } else {
        return <span className="product_price">{product.price.formatted}</span>;
      }
    }
    return <span className="product_price">QAR 00.00</span>;
  };
  const BrandName = (attribute) => {
    if (attribute.attribute.length > 0) {
      let brand = attribute.attribute.filter((attr) => attr.attribute_id == 4);
      if (brand.length > 0) {
        brand = brand[0].values[0].attribute_value.value;
        return brand ? (
          <Link href={`/brand/${brand.split(" ").join("-")}`}>
            <a>
              <span className={`${styles.brand} mt-1 mb-1`}>by {brand}</span>
            </a>
          </Link>
        ) : (
          ""
        );
      } else {
        return null;
      }
    }
    return null;
  };

  const getBrandName = (attribute) => {
    if (attribute.length > 0) {
      let brand = attribute.filter((attr) => attr.attribute_id == 4);
      if (brand.length > 0) {
        brand = brand[0].values[0].attribute_value.value;
        return brand ? brand : "";
      } else {
        return null;
      }
    }
    return null;
  };

  const ForAdministrators = () => {
    if (
      props.auth &&
      props.auth.isAuthenticated &&
      JSON.parse(localStorage.getItem("user")).isCustomer === false
    ) {
      if (product.options_count > 0) {
        if (optionValue) {
          return `Stock: ${optionValue.option_qty}`;
        } else {
          return "select on option to see the stock amount";
        }
      } else {
        return `Stock: ${
          product.single_bundle ? product.bundle_qty : product.qty
        }`;
      }
    }
    return null;
  };
  const OfferEnd = () => {
    if (product.hasCampaign) {
      return (
        <div className="countdown_wrapper">
          Campaign Ends:{" "}
          <Countdown
            renderer={renderer}
            date={product.campaign[0].special_price_end}
          />
        </div>
      );
    } else if (product.has_offer && product.special_price_end) {
      return (
        <div className="countdown_wrapper">
          Offer Ends:{" "}
          <Countdown
            renderer={renderer}
            date={new Date(product.special_price_end.split(" ")[0]).getTime()}
          />
        </div>
      );
    }
    return null;
  };
  // add to bag click handler
  const addToBagClickHandler = () => {
    // let bulk_id = activeBulkId(product.product_offers,qnt);
    // console.log(bulk_id);
    // return;

    GTMAddToCart(product, qnt);

    props.addToCart({
      product: product,
      qty: qnt,
      max_cart_qnt: product.max_cart_qnt ? product.max_cart_qnt : 1000,
      option_id: optionValue ? optionValue.id : null,
      option_value: optionValue ? optionValue.label : null,
      opt: optionValue,
      offers: product.product_offers,
    });
    setQnt(1);
    setOptionValue();
    /**
     * FOR FB CONVERSION API
     */
    // let fbp = document.cookie
    //   .split(";")
    //   .filter((c) => c.includes("_fbp="))
    //   .map((c) => c.split("_fbp=")[1]);
    // let fbc = document.cookie
    //   .split(";")
    //   .filter((c) => c.includes("_fbc="))
    //   .map((c) => c.split("_fbc=")[1]);
    // fbp = (fbp.length && fbp[0]) || null;
    // fbc = (fbc.length && fbc[0]) || null;

    // if (!fbc && window.location.search.includes("fbclid=")) {
    //   fbc =
    //     "fb.1." +
    //     +new Date() +
    //     "." +
    //     window.location.search.split("fbclid=")[1];
    // }
    // let em = props.auth.isAuthenticated
    //   ? JSON.parse(props.auth.user).email
    //   : null;
    // Axios.post("/event/addToBag", {
    //   em,
    //   product_id: product.id,
    //   name: product.name,
    //   eventName: "AddToCart",
    //   eventNameSource: `https://beautyboothqa.com/product/${product.slug}`,
    //   fbp,
    //   fbc,
    // });
    // setTimeout(notify,100);
  };
  function handleSelection(value, event) {
    if (product.options_count !== 0) {
      event.stopPropagation();
      setOptionValue(value);
      let position =
        product.files.findIndex((file) => file.id == value.option_image) === -1
          ? 0
          : product.files.findIndex((file) => file.id == value.option_image);
      setActive(position);
    }
  }
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return (
      <span>
        {days}d: {hours}h:{minutes}m:{seconds}s
      </span>
    );
  };

  const disableStatus = () => {
    if (product.single_bundle) {
      if (
        !product.bundle_qty ||
        product.bundle_qty === 0 ||
        !product.in_stock ||
        qnt > maxQnt
      ) {
        return true;
      } else return false;
    }

    if (
      !product.qty ||
      product.qty === 0 ||
      !product.in_stock ||
      qnt > maxQnt
    ) {
      return true;
    }
    if (product.options_count > 0) {
      if (!optionValue) {
        return true;
      } else {
        if (
          optionValue.option_qty === 0 ||
          !optionValue.option_qty ||
          !product.in_stock
        ) {
          return true;
        }
      }
    }

    return false;
  };

  const DateRange = () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const today = new Date();
    const month = months[today.getMonth()];
    const dim = daysInMonth(today.getFullYear(), today.getMonth() + 1);
    let from = today.getDate();
    let to = today.getDate() + 3;
    if (today.getHours() >= 15 && today.getHours() <= 23) {
      from += 1;
      to += 1;
    }
    if (to <= dim && from <= dim) {
      from = `${number_suffix(from, dim)}`;
      to = `${number_suffix(to, dim)} ${month}`;
    } else {
      const dim2 = daysInMonth(today.getFullYear(), today.getMonth() + 2);
      if (from == dim) {
        from = `${number_suffix(from, dim2)} ${month}`;
      } else {
        from = `${number_suffix(from - dim, dim2)} ${
          months[today.getMonth() + 1]
        }`;
      }
      to = `${number_suffix(to - dim, dim2)} ${months[today.getMonth() + 1]}`;
      console.log(today.getHours());
    }

    return (
      <span
        className="delivery"
        dangerouslySetInnerHTML={createMarkup(`Delivery from ${from} ~ ${to}`)}
      ></span>
    );
  };
  function addToWaitListHandler(e) {
    e.preventDefault();
    Axios.post("/api/waitlist", {
      product,
      email: waitListEmail,
    })
      .then((res) => {
        setWaitListEmail("");
        toast.success(res.data.message, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      });
  }
  function addToWaitListHandlerAsUser() {
    Axios.post("/api/waitlist", {
      product,
      email: waitListEmail,
    })
      .then((res) => {
        toast.success(res.data.message, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      });
  }
  function number_suffix(i, dim) {
    /* this function will add th, nd, rd, st suffix with dates */
    let j = i % 10,
      k = i % dim;
    // if(i <= dim){
    if (j == 1 && k != 11) {
      return i + "<sup>st</sup>";
    }
    if (j == 2 && k != 12) {
      return i + "<sup>nd</sup>";
    }
    if (j == 3 && k != 13) {
      return i + "<sup>rd</sup>";
    }
    return i + "<sup>th</sup>";
  }
  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }
  const createMarkup = (data) => {
    return {
      __html: data,
    };
  };
  const numberHandler = (number) => {
    setQnt(number);
  };

  const bulkBuyHandler = (min_qnt, parcent, bulk_id) => {
    props.addToCart({
      product: product,
      qty: min_qnt,
      max_cart_qnt: product.max_cart_qnt ? product.max_cart_qnt : 1000,
      option_id: optionValue ? optionValue.id : null,
      option_value: optionValue ? optionValue.label : null,
      opt: optionValue,
      pck_qnt: min_qnt,
      parcent,
      bulk_id,
    });
    setQnt(1);
    setOptionValue();
  };

  return (
    <div>
      <Head>
        <title>
          {getBrandName(props.product.attributes)} {props.product.name}
        </title>

        <meta
          property="og:url"
          content={`https://beautyboothqa.com/product/${encodeURI(
            props.product.slug
          )}`}
          key="ogURL"
        ></meta>
        <meta property="og:title" key="ogTitle" content={props.product.name} />
        <meta
          property="og:image"
          key="ogImage"
          content={props.product.files[0].thumbnail_image}
        />
        <meta
          property="og:description"
          key="ogDesc"
          content={props.product.meta.meta_description ?? ""}
        />
        <meta
          property="og:keywords"
          key="ogKeys"
          content={
            props.product.meta.meta_keywords
              ? props.product.meta.meta_keywords.join(", ") +
                ", in qatar, qatar, beauty, beautybooth" +
                ", " +
                getBrandName(props.product.attributes)
              : ", " + getBrandName(props.product.attributes)
          }
        />
      </Head>
      {product != null ? (
        <div className="productView mt-4">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-sm-12">
                <div className="row">
                  <div className="col-md-6">
                    <ProductImage style={styles} images={product.files} />
                    {/* <div className="product_slider_container">
                      <div className="thumbnail_images mr-3">
                        <Swiper
                          ref={thumb}
                          {...thumbnailSwiperParams}
                          shouldSwiperUpdate
                        >
                          {product.files.map((file, index) => (
                            <div key={index}>
                              <img src={file.thumbnail_image} />
                            </div>
                          ))}
                        </Swiper>
                      </div>

                      <div className="main_images">
                        {isMobile ? (
                          <SimpleReactLightbox>
                            <SRLWrapper
                              options={{
                                buttons: {
                                  showAutoplayButton: false,
                                  showDownloadButton: false,
                                },
                                thumbnails: { showThumbnails: false },
                              }}
                            >
                              <Swiper
                                {...gallerySwiperParams}
                                shouldSwiperUpdate
                                activeSlideKey={active.toString()}
                              >
                                {product.files.map((file, index) => (
                                  <div key={index}>
                                    <img src={file.path} />
                                  </div>
                                ))}
                              </Swiper>
                            </SRLWrapper>
                          </SimpleReactLightbox>
                        ) : (
                          <Swiper
                            {...gallerySwiperParams}
                            shouldSwiperUpdate
                            activeSlideKey={active.toString()}
                          >
                            {product.files.map((file, index) => (
                              <div key={index}>
                                <ReactImageMagnify
                                  {...{
                                    smallImage: {
                                      alt: file.filename,
                                      isFluidWidth: true,
                                      src: file.path,
                                    },
                                    largeImage: {
                                      src: file.path,
                                      alt: file.filename,
                                      isFluidWidth: true,
                                      width: 1100,
                                      height: 600,
                                    },
                                    enlargedImagePortalId: "zoomPortion",
                                    enlargedImageContainerDimensions: {
                                      width: "200%",
                                      height: "100%",
                                    },
                                  }}
                                />
                                
                              </div>
                            ))}
                          </Swiper>
                        )}
                      </div>
                    </div> */}
                    <div className="mt-4">
                      {variantProduct?.length > 0 && <h4>Variants:</h4>}
                      <div className={styles.variant_products}>
                        <Variants></Variants>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div id="zoomPortion" className="zoomPortion"></div>
                    <div className={styles.product_details_container}>
                      <span className={styles.product_name}>
                        {product.name}
                      </span>
                      <div className="mt-2 mb-2">
                        <span className={styles.icon_container}>
                          <FontAwesomeIcon
                            icon={review === 0.5 ? faStarHalfAlt : faStar}
                            className={
                              review < 0.5 ? styles.normal : styles.selected
                            }
                          />
                          <FontAwesomeIcon
                            icon={review === 1.5 ? faStarHalfAlt : faStar}
                            className={
                              review < 1.5 ? styles.normal : styles.selected
                            }
                          />
                          <FontAwesomeIcon
                            icon={review === 2.5 ? faStarHalfAlt : faStar}
                            className={
                              review < 2.5 ? styles.normal : styles.selected
                            }
                          />
                          <FontAwesomeIcon
                            icon={review === 3.5 ? faStarHalfAlt : faStar}
                            className={
                              review < 3.5 ? styles.normal : styles.selected
                            }
                          />
                          <FontAwesomeIcon
                            icon={review === 4.5 ? faStarHalfAlt : faStar}
                            className={
                              review < 4.5 ? styles.normal : styles.selected
                            }
                          />
                        </span>
                        <span className={styles.rating_count}>
                          {product.avgRating} ({product.reviews.length})
                        </span>
                      </div>
                      <BrandName attribute={product.attributes} />

                      <div className={styles.product_message}>
                        {product.single_bundle
                          ? product.bundle_qty !== 0 && <DateRange />
                          : product.qty !== 0 && <DateRange />}
                        {/* {product.qty !== 0 && <DateRange />} */}
                        {product.single_bundle ? (
                          product.bundle_qty === 0 || !product.in_stock ? (
                            <span>Sold out (check again in few days)</span>
                          ) : (
                            ""
                          )
                        ) : !product.qty ||
                          product.qty === 0 ||
                          !product.in_stock ? (
                          <span>Sold out (check again in few days)</span>
                        ) : (
                          ""
                        )}
                        {/* {!product.qty ||
                          product.qty === 0 ||
                          !product.in_stock ? (
                          <span>Sold out (check again in few days)</span>
                        ) : (
                          ""
                        )} */}
                        <ForAdministrators />
                      </div>

                      <div className={styles.price_net_weight}>
                        <span className={styles.price_sapn}>
                          <Price />
                        </span>
                        {product.measurements ? (
                          <span className={styles.net_weight}>
                            {product.measurements} {product.uom}
                          </span>
                        ) : null}
                      </div>

                      {(product.hasCampaign === true ||
                        product.has_offer === true) && <OfferEnd />}

                      {variantSize.length > 0 && (
                        <>
                          <span className={styles.s_title}>{t("sizes")}:</span>
                          <div className={styles.different_sizes}>
                            {variantSize.map((size) => (
                              <Link
                                href={`/product/${size.slug}`}
                                key={size.id}
                              >
                                <a className="size text-center">
                                  <span className="size_title">
                                    {size.measurements || ""}&nbsp;
                                    {size.uom || ""}
                                  </span>
                                  <span className={styles.size_price}>
                                    {size.selling_price.formatted}
                                  </span>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                      {product.single_bundle && (
                        <div
                          role="alert"
                          className="alert alert-info font-weight-bold"
                        >
                          This is a bundle product. One unit contains{" "}
                          {product.single_bundle_qty} items
                        </div>
                      )}
                      {product.single_bundle
                        ? product.bundle_qty !== 0 && (
                            <div className={styles.qnt_bag_fav}>
                              <div className={styles.quantaty_container}>
                                <span className={styles.qnt_btn_container}>
                                  <button
                                    onClick={() => {
                                      if (qnt > 1) {
                                        setQnt(qnt - 1);
                                      }
                                    }}
                                  >
                                    -
                                  </button>
                                  {/* <span>{qnt}</span> */}
                                  <input
                                    type="number"
                                    className={styles.numberInput}
                                    name="quantity"
                                    min="1"
                                    value={qnt}
                                    onChange={(e) => {
                                      if (parseInt(e.target.value) > 0) {
                                        numberHandler(parseInt(e.target.value));
                                      }
                                    }}
                                  ></input>
                                  <button
                                    onClick={() => {
                                      if (
                                        product.options_count === 0 &&
                                        product.bundle_qty > qnt
                                      ) {
                                        setQnt(qnt + 1);
                                      }
                                      if (
                                        product.options_count === 1 &&
                                        optionValue &&
                                        product.options[0].values.filter(
                                          (op) => op.label == optionValue.label
                                        )[0].option_qty > qnt
                                      ) {
                                        setQnt(qnt + 1);
                                      }
                                    }}
                                  >
                                    +
                                  </button>
                                </span>
                              </div>
                              <button
                                onClick={addToBagClickHandler}
                                className={styles.add_to_bag}
                                disabled={disableStatus()}
                              >
                                {t("ADD TO BAG")}
                              </button>
                            </div>
                          )
                        : product.qty !== 0 && (
                            <div className={styles.qnt_bag_fav}>
                              <div className={styles.quantaty_container}>
                                <span className={styles.qnt_btn_container}>
                                  <button
                                    onClick={() => {
                                      if (qnt > 1) {
                                        setQnt(qnt - 1);
                                      }
                                    }}
                                  >
                                    -
                                  </button>
                                  {/* <span>{qnt}</span> */}
                                  <input
                                    type="number"
                                    className={styles.numberInput}
                                    name="quantity"
                                    min="1"
                                    value={qnt}
                                    onChange={(e) => {
                                      if (parseInt(e.target.value) > 0) {
                                        numberHandler(parseInt(e.target.value));
                                      }
                                    }}
                                  ></input>
                                  <button
                                    onClick={() => {
                                      if (
                                        product.options_count === 0 &&
                                        product.qty > qnt
                                      ) {
                                        setQnt(qnt + 1);
                                      }
                                      if (
                                        product.options_count === 1 &&
                                        optionValue &&
                                        product.options[0].values.filter(
                                          (op) => op.label == optionValue.label
                                        )[0].option_qty > qnt
                                      ) {
                                        setQnt(qnt + 1);
                                      }
                                    }}
                                  >
                                    +
                                  </button>
                                </span>
                              </div>
                              <button
                                onClick={addToBagClickHandler}
                                className={styles.add_to_bag}
                                disabled={disableStatus()}
                              >
                                {t("ADD TO BAG")}
                              </button>

                              {/* <div className={styles.fav_container}>
                                <span className={styles.fav}>{t("Love")}</span>
                                <FontAwesomeIcon icon={faHeart} />
                              </div> */}
                            </div>
                          )}
                      <ToastContainer />
                      {/* <WaitList /> */}
                      {product.single_bundle
                        ? product.bundle_qty == 0 && (
                            <div className={styles.waiting_div}>
                              <div className={styles.waiting_div_title}>
                                IN STOCK SOON
                              </div>
                              {props.auth.isAuthenticated ? (
                                <div>
                                  <button
                                    type="button"
                                    className="btn join_button btn-info"
                                    onClick={() => addToWaitListHandlerAsUser()}
                                  >
                                    JOIN THE WAITLIST
                                  </button>
                                </div>
                              ) : (
                                <form
                                  className={styles.waiting_input}
                                  onSubmit={(e) => addToWaitListHandler(e)}
                                >
                                  <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Your Email"
                                    value={waitListEmail}
                                    onChange={(e) =>
                                      setWaitListEmail(e.currentTarget.value)
                                    }
                                    className="form-control"
                                  />
                                  <button className="btn" type="submit">
                                    Get Notified
                                  </button>
                                </form>
                              )}
                            </div>
                          )
                        : (product.qty === 0 || product.in_stock == false) && (
                            <div className={styles.waiting_div}>
                              <div className={styles.waiting_div_title}>
                                IN STOCK SOON
                              </div>
                              {props.auth.isAuthenticated ? (
                                <div>
                                  <button
                                    type="button"
                                    className="btn join_button btn-info"
                                    onClick={() => addToWaitListHandlerAsUser()}
                                  >
                                    JOIN THE WAITLIST
                                  </button>
                                </div>
                              ) : (
                                <form
                                  className={styles.waiting_input}
                                  onSubmit={(e) => addToWaitListHandler(e)}
                                >
                                  <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Your Email"
                                    value={waitListEmail}
                                    onChange={(e) =>
                                      setWaitListEmail(e.currentTarget.value)
                                    }
                                    className="form-control"
                                  />
                                  <button className="btn" type="submit">
                                    Get Notified
                                  </button>
                                </form>
                              )}
                            </div>
                          )}
                      {product.product_offers.length > 0 && (
                        <div className={styles.bulk_buy_wrapper}>
                          {product.product_offers.map((offer) => (
                            <div
                              key={offer.id}
                              disabled={product.qty < offer.min_qnt}
                              onClick={() =>
                                bulkBuyHandler(
                                  offer.min_qnt,
                                  offer.parcent,
                                  offer.id
                                )
                              }
                              className={styles.bulk_buy_button}
                            >
                              Buy {offer.min_qnt} to {offer.max_qnt} products to
                              get {offer.parcent}% off
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* {infos ? (
                  <div className="product_info_container">
                    <div className="accordians">
                      {infos.map((info, index) => (
                        <div
                          className={`info_accordian ${
                            info.open ? "open" : ""
                          }`}
                          key={index}
                        >
                          <div
                            onClick={() => toggleInfo(index)}
                            className="info_question"
                          >
                            {info.question}
                          </div>
                          <div
                            className="info_answer"
                            dangerouslySetInnerHTML={createMarkup(info.answer)}
                          ></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  ""
                )} */}
                  </div>
                  <div className="col-md-12">
                    <Descriptions
                      product_id={product.id}
                      attribute={product.attributes}
                      desc={product.description}
                      similar_brands={product.similar_brands}
                      reviews={product.reviews}
                      avgRating={product.avgRating}
                      t={props.t}
                      lang={props.language}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-12">
                {product.related_products.length > 0 ? (
                  <Recomanded products={product.related_products} />
                ) : null}
              </div>
            </div>

            {/* {product.related_products.length > 0 ? (
              <Recomanded products={product.related_products} />
            ) : null} */}
            {/* {product.similar_brands.length > 0 ? (
              <MoreThisBrand products={product.similar_brands} />
            ) : null} */}
          </div>
        </div>
      ) : (
        <div className="loader">
          <Loader />
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart.cartItem,
  message: state.cart.message,
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => addToCart(dispatch, item),
  };
};
// async function parseCookie(req){
//   let cookie = new Cookies(req.cookies);
//   return cookie.cookies.lang;
// }
// This gets called on every request
export async function getServerSideProps(context) {
  // return {
  //   redirect: {
  //     destination: `https://beautyboothqa.com/product/${encodeURI(context.params.slug)}`,
  //     permanent: true,
  //   },
  // }
  let language = context.req.language || "en";
  // Fetch data from external API
  let slug = context.params.slug;

  try {
    let product = await axios
      .get(`${language}/getdata/product/${encodeURI(slug)}`)
      .then((response) => {
        return response.data;
      });
    return { props: { product, language } };
  } catch (err) {
    context.res.statusCode = 404;
    context.res.setHeader("Location", `/not-found`); // Replace <link> with your url link
    // context.res.end();
    return { props: {} };
  }
  // Pass data to the page via props
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation("product")(ProductPage));
