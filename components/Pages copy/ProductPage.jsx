import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Swiper from "react-id-swiper";
import { Wrapper, Button, Menu, MenuItem } from "react-aria-menubutton";

import { ToastContainer } from "react-toastify";
import ReactImageMagnify from "react-image-magnify";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Descriptions from "../Descriptions";
import Recomanded from "../Recomanded";

import axios from "../../redux/actions/axios";

import { addToCart } from "../../redux/actions/cartAction";
import { isMobile } from "react-device-detect";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loader from "../atom/Loader";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Footer from "../layout/Footer";
import "../../assets/sass/product_page.scss";
import "react-toastify/dist/ReactToastify.css";

function ProductPage(props) {
  const [product, setProduct] = useState(null);
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);
  const [active, setActive] = useState("0");
  // const [infos, setInfos] = useState(null);

  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 10,
    centeredSlides: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination-custom",
      type: "bullets",
      clickable: true,
    },
    height: 420,

    // slidesPerView: "auto",
    // zoom:{
    //   maxRatio:2,
    //   toggle: true
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  };
  const thumbnailSwiperParams = {
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

  useEffect(() => {
    window.scrollTo(0, -200);
    setProduct(null);
    axios
      .get(`/getdata/product/${props.match.params.slug}`)
      .then(async (res) => {
        setReview(res.data.avgRating);
        setProduct(res.data);
        // local storage id for recent view
        let recent = JSON.parse(localStorage.getItem("recently_viewed")) || [];
        if (recent && !recent.includes(res.data.id)) {
          recent.length > 9 && recent.pop();
          let newItems = [res.data.id, ...recent];
          localStorage.setItem("recently_viewed", JSON.stringify(newItems));
        }
        // else {
        //   localStorage.setItem(
        //     "recently_viewed",
        //     JSON.stringify([res.data.id])
        //   );
        // }
      })
      .catch((err) => props.history.push("/product-not-found"));
  }, [props.match.params.slug, props.history]);

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
  const Price = () => {
    if (product) {
      if (product.has_offer) {
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
          <Link to={`/brand/${brand.split(" ").join("-")}`}>
            <span className="brand mt-1 mb-1">by {brand}</span>{" "}
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
        return `Stock: ${product.qty}`;
      }
    }
    return null;
  };

  // add to bag click handler
  const addToBagClickHandler = () => {
    props.addToCart({
      product: product,
      qty: qnt,
      option_id: optionValue ? optionValue.id : null,
      option_value: optionValue ? optionValue.label : null,
      opt: optionValue,
    });
    setQnt(1);
    setOptionValue();
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

  const disableStatus = () => {
    if (!product.qty || product.qty === 0 || !product.in_stock) {
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
    const dim = daysInMonth(today.getFullYear(), today.getMonth());
    let from = today.getDate();
    let to = today.getDate() + 3;
    if (today.getHours() >= 5 && today.getHours() <= 23) {
      from += 1;
      to += 1;
    }
    if (to <= dim) {
      from = `${number_suffix(from, dim)}`;
      to = `${number_suffix(to, dim)} ${month}`;
    } else {
      from = `${number_suffix(from, dim)} ${month}`;
      const dim2 = daysInMonth(today.getFullYear(), today.getMonth() + 1);
      to = `${number_suffix(to - dim, dim2)} ${months[today.getMonth() + 1]}`;
    }

    return (
      <span
        className="delivery"
        dangerouslySetInnerHTML={createMarkup(`Delivery from ${from} ~ ${to}`)}
      ></span>
    );
  };

  function number_suffix(i, dim) {
    /**
     * this function will add th, nd, rd, st suffix with dates
     */
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
  return (
    <div>
      {product != null ? (
        <div className="productView mt-2">
          <HelmetProvider>
            <Helmet>
              <title>{`${product.name} - Beauty Booth`}</title>
              <meta property="og:image" content={product.files[0].path} />
              <meta
                property="og:title"
                content={`${product.name} - Beauty Booth`}
              />
              <meta name="description" content={product.description} />
              <meta property="og:description" content={product.description} />
              <meta
                property="og:url"
                content={`https://beautyboothqa.com/product/${props.match.params.slug}`}
              />
            </Helmet>
          </HelmetProvider>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-sm-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="product_slider_container">
                      <div className="thumbnail_images mr-1">
                        <Swiper {...thumbnailSwiperParams} shouldSwiperUpdate>
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
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div id="zoomPortion" className="zoomPortion"></div>
                    <div className="product_details_container">
                      <span className="product_name">{product.name}</span>
                      <div className="mt-2 mb-2">
                        <span className="icon_container">
                          <FontAwesomeIcon
                            icon={review === 0.5 ? faStarHalfAlt : faStar}
                            className={review < 0.5 ? "normal" : "selected"}
                          />
                          <FontAwesomeIcon
                            icon={review === 1.5 ? faStarHalfAlt : faStar}
                            className={review < 1.5 ? "normal" : "selected"}
                          />
                          <FontAwesomeIcon
                            icon={review === 2.5 ? faStarHalfAlt : faStar}
                            className={review < 2.5 ? "normal" : "selected"}
                          />
                          <FontAwesomeIcon
                            icon={review === 3.5 ? faStarHalfAlt : faStar}
                            className={review < 3.5 ? "normal" : "selected"}
                          />
                          <FontAwesomeIcon
                            icon={review === 4.5 ? faStarHalfAlt : faStar}
                            className={review < 4.5 ? "normal" : "selected"}
                          />
                        </span>
                        <span className="rating_count">
                          {product.avgRating} ({product.reviews.length})
                        </span>
                      </div>
                      <BrandName attribute={product.attributes} />
                      {product.options_count !== 0
                        ? product.options.map((option, index) => (
                            <div
                              className="color_container mt-2 mb-2"
                              key={index}
                            >
                              {/* <span className="color_title">{option.name}:</span> */}
                              <Wrapper
                                className="option_wrapper"
                                onSelection={handleSelection}
                              >
                                <Button className="optionopen_button">
                                  <span className="color_title">
                                    We got {option.values.length} different{" "}
                                    <strong>{option.name}</strong>
                                  </span>
                                </Button>
                                <Menu>
                                  <div className="menu">
                                    {option.values.map((value, index) => (
                                      <MenuItem
                                        className="menuitem"
                                        data-name={`options[${value.option_id}][]`}
                                        data-value={value.id}
                                        key={index}
                                        value={value}
                                      >
                                        <img
                                          src={
                                            product.files.findIndex(
                                              (file) =>
                                                file.id == value.option_image
                                            ) !== -1
                                              ? product.files[
                                                  product.files.findIndex(
                                                    (file) =>
                                                      file.id ==
                                                      value.option_image
                                                  )
                                                ].thumbnail_image
                                              : product.files[0].thumbnail_image
                                          }
                                          alt={product.slug}
                                        />
                                        {value.label}{" "}
                                        <span>
                                          {!value.option_qty ||
                                          value.option_qty === 0
                                            ? "Sold out"
                                            : product.has_offer
                                            ? value.option_selling_price
                                                .formatted
                                            : value.price.formatted}
                                        </span>
                                      </MenuItem>
                                    ))}
                                  </div>
                                </Menu>
                              </Wrapper>

                              <span className="selected_shade">
                                {optionValue ? (
                                  <span> {optionValue.label} </span>
                                ) : (
                                  <span>**Please Select One</span>
                                )}
                              </span>
                            </div>
                          ))
                        : ""}

                      <div className="product_message">
                        <DateRange />
                        {!product.qty ||
                        product.qty === 0 ||
                        !product.in_stock ? (
                          <span>Sold out (check again in few days)</span>
                        ) : (
                          ""
                        )}
                        <ForAdministrators />
                      </div>
                      <div className="price_net_weight">
                        <span className="price_sapn">
                          <Price />
                        </span>
                        {product.measurements ? (
                          <span className="net_weight">
                            {product.measurements} {product.uom}
                          </span>
                        ) : null}
                      </div>
                      <div className="qnt_bag_fav">
                        <div className="quantaty_container">
                          <span className="qnt_btn_container">
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
                              className="numberInput"
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
                          className="add_to_bag"
                          disabled={disableStatus()}
                        >
                          Add to Bag
                        </button>
                        <ToastContainer />
                        <div className="fav_container">
                          <span className="fav">Love</span>
                          <FontAwesomeIcon icon={faHeart} />
                        </div>
                      </div>
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
      <Footer />
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductPage));
