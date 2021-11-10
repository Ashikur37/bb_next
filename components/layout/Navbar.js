import React, { useState, useEffect, useRef } from "react";
import Cookies from "universal-cookie";
import { i18n, withTranslation } from "../../i18n";
import { useRouter } from "next/router";
import Link from "next/link";
import Axios from "../../redux/actions/axios";
import axios from "../../redux/actions/axios";
// import styles from "../../styles/Navbar.module.scss";
import { Dropdown } from "react-bootstrap";
import "flag-icon-css/css/flag-icon.min.css";
import { connect } from "react-redux";
import {
  removeCartItem,
  PlusOne,
  minusOne,
  setCartAfterPriceChange,
} from "../../redux/actions/cartAction";
import { logoutUser } from "../../redux/actions/authActions";
import { getPrice } from "../utils/helper";
import {
  faMinus,
  faPlus,
  faSearch,
  faShoppingBag,
  faTimes,
  faTimesCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const cookies = new Cookies();
var timeout = 0;
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "us",
  },
  {
    code: "ar_QA",
    name: "Arabic",
    country_code: "qa",
  },
];
function Navbar({
  FontAwesomeIcon,
  lang,
  styles,
  Media,
  cartItems,
  auth,
  t,
  plusOne,
  minusOne,
  logout,
  removeCartItem,
  setCartAfterPriceChange,
  i18n,
}) {
  const router = useRouter();
  const [language, setLanguage] = useState();
  const [placeHolderText, setPlaceHolderText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const [instock, setInstock] = useState([]);
  const [oos, setOos] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [shipping, setShipping] = useState(10);
  const [subTotal, setSubTotal] = useState(
    cartItems.reduce((acc, item) => (acc += item.qnt * item.price.amount), 0)
  );
  const [discount, setDiscount] = useState(
    process.browser ? localStorage.getItem("discount") || 0 : 0
  );
  const searchHandler = (event) => {
    if (searchQuery.length > 3) {
      setShowResult(true);
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        Axios.get(`${lang}/products?query=${searchQuery}`)
          .then((res) => {
            setSearchResult(res.data);
          })
          .catch();
      }, 800);
    } else {
      setShowResult(false);
    }
  };
  const keyHandler = (event) => {
    if (searchQuery.length > 0) {
      if (event.key === "Enter") {
        router.push(`/search/${searchQuery}`);
        setShowResult(false);
        setSearchQuery("");
      }
    }
  };
  const searchTermClick = (term = null) => {
    if (term !== null) {
      router.push(`/search/${term}`);
      setSearchQuery("");
      setShowResult(false);
    }
  };
  const resultClick = (slug, brand = false) => {
    if (brand) {
      router.push(slug);
    } else {
      router.push(`/product/${slug}`);
    }
    setSearchQuery("");
    setShowResult(false);
  };
  const LanguageHandler = (value) => {
    i18n.changeLanguage(value);
    if (value == "en") {
      document.body.classList.remove("rtl");
      cookies.set("lang", "en", { path: "/", SameSite: "None; Secure", maxAge: 15 * 86400 });
      setLanguage("en");
      // window.location.pathname == "/" && window.location.reload();
    } else {
      document.body.classList.add("rtl");
      cookies.set("lang", "ar_QA", { path: "/", SameSite: "None; Secure", maxAge: 15 * 86400 });
      setLanguage("ar_QA");
      // window.location.pathname == "/" && window.location.reload();
    }
    window.location.reload();
  };
  const deleteHandler = (id, option_id, bulk_id = null) => {
    let confirm = window.confirm("Are You Sure To Delete ??");
    if (confirm) {
      removeCartItem(id, option_id, bulk_id);
    }
  };

  //logout
  const logoutClick = () => {
    // console.log("logout");
    logout();
    // logoutUser();
  };

  const plusHandler = (product_id, qnt, option_id) => {
    plusOne(product_id, option_id);
  };
  const minusHandler = (product_id, qnt, option_id) => {
    if (qnt > 1) {
      minusOne(product_id, option_id);
    }
  };
  useEffect(() => {
    setLanguage(cookies.get("lang"));
    const searchKeys = {
      en: [
        'Cream',
        'Lotion',
        'Face Wipes',
        'Eye Liner',
        'Lip Care'
      ],
      ar_QA: [
        'كريم',
        'لوشن',
        'مناديل الوجه للعناية',
        'محدد العين/ايلاينر',
        'العناية بالشفاه'
      ]
    };
    const defaultText = {
      en: "Search for",
      ar_QA: "بحث عن"
    }
    /**
     * 
     * @param {Integer} i 
     * @return void
     */
    const pollPlaceholder = (i) => {
      let len = 0, keyLen = searchKeys[language][i].length;
      let x = setInterval(() => {
        let searchKey = searchKeys[language][i].slice(0, len);
        setPlaceHolderText(defaultText[language] + ' ' + searchKey);
        if (keyLen == len) {
          clearInterval(x);
          setTimeout(() => {
            len = -1;
            let index = (i == searchKeys[language].length - 1) ? 0 : i + 1;
            pollPlaceholder(index);
          }, 1000);
        }
        len += 1;
      }, 120);
    }
    if (language) {
      setTimeout(pollPlaceholder(0), 1000);
    }
  }, [language]);
  const mobileSearchHandler = () => {
    setIsOpen(!isOpen);
    setSearchQuery("");
    setSearchResult([]);
  };
  const cartCount = () => {
    // console.log(props.cartItems);
    let t = cartItems.reduce((acc, item) => (acc += item.qnt), 0);
    return t;
  };
  useEffect(() => {
    setSubTotal(
      cartItems.reduce(
        (acc, item) => (acc += item.qnt * item.price.amount),
        0
      ) - discount
    );
    if (subTotal < 100) {
      setShipping(10);
    } else {
      setShipping(0);
    }
  }, [subTotal, cartItems, discount]);
  useEffect(() => {
    if (cartItems.length > 0) {
      let formData = cartItems.map((item) => {
        return {
          product_id: item.product_id,
          price: item.price.amount,
          qty: item.qnt,
          option: item.option_main_id || null,
          option_child: item.option_id || null,
        };
      });
      let locale = i18n.language || "en";
      axios.post("/" + locale + "/cartdata/items", formData).then((res) => {
        let instock = [];
        res.data.map((dt) => {
          instock.push(dt.in_stock);
        });
        let current = res.data;
        let ifUpdate = false;
        let update = cartItems.map((item, index) => {
          if (item.price.amount !== current[index].selling_price.amount) {
            ifUpdate = true;
            item.price = current[index].selling_price;
          }
          return item;
        });
        if (ifUpdate) {
          // console.log(update);
          setCartAfterPriceChange(update);
        }
        setInstock(instock);
        let r = instock.filter((d) => d === false).length;
        if (r > 0) {
          setOos(true);
          if (router.pathname === "/checkout") {
            router.replace("/bag");
          }
        } else {
          setOos(false);
        }
      });
      if (
        localStorage.getItem("coupon_id") ||
        localStorage.getItem("discount") ||
        localStorage.getItem("coupon")
      ) {
        // couponHandler();
      }
    }
  }, [cartItems, i18n.language]);
  const couponHandler = () => {
    let myCoupon = coupon || localStorage.getItem("coupon");
    if (coupon == "" && localStorage.getItem("coupon_id")) {
      setCoupon(localStorage.getItem("coupon"));
    }
    if (cartItems.length > 0) {
      let cart = cartItems.map((item) => {
        return {
          product_id: item.product_id,
          price: item.price.amount,
          qty: item.qnt,
          option: item.option_main_id || null,
          option_child: item.option_id || null,
        };
      });
      axios
        .post("en/checkout/coupon", {
          api: true,
          cart,
          coupon: myCoupon,
        })
        .then((res) => {
          setFlag(true);
          setMsg(null);
          // setCouponId(res.data.coupon_id);
          setDiscount(res.data.discount);
          setSubTotal(
            cartItems.reduce(
              (acc, item) => (acc += item.qnt * item.price.amount),
              0
            ) - res.data.discount
          );
          if (
            localStorage.getItem("coupon_id") &&
            res.data.coupon_id != localStorage.getItem("coupon_id")
          ) {
            localStorage.removeItem("coupon");
            localStorage.removeItem("coupon_id");
            localStorage.removeItem("discount");
            // setCouponId("");
            setCoupon("");
            setDiscount(0);
            setFlag(false);
          } else {
            localStorage.setItem("coupon_id", res.data.coupon_id);
            localStorage.setItem("discount", res.data.discount);
            localStorage.setItem("coupon", myCoupon);
          }
          // alert(res.data.msg);
        })
        .catch((err) => {
          setMsg(err.response.data);
          setDiscount(0);
          // clearCoupon();
        });
    }
  };
  return (
    <div className="container navbar">
      <div className="row">
        <div className="col">
          <div className={styles.navbar_content}>
            <div className={styles.logo_content}>
              <h1>
                <Link href="/">
                  <a>Beauty Booth</a>
                </Link>
              </h1>
            </div>
            <div className={styles.search_container}>
              <div className={styles.search_content}>
                <input
                  type="text"
                  name="search"
                  placeholder={placeHolderText}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={searchHandler}
                  onKeyPress={keyHandler}
                />
                <FontAwesomeIcon icon={faSearch} />
                <div
                  className={
                    showResult
                      ? `${styles.search_result} ${styles.active}`
                      : `${styles.search_result}`
                  }
                >
                  {searchResult.brand && searchResult.brand.length > 0 && (
                    <ul>
                      <li
                        style={{
                          color: "black",
                          marginLeft: "10px",
                          border: "none",
                        }}
                      >
                        Brand
                      </li>
                      {searchResult.brand.map((rs, index) => (
                        <li key={index}>
                          <div
                            className={styles.search_result_li}
                            onClick={() => {
                              resultClick(rs.url, true);
                            }}
                          >
                            {rs.image && <img src={rs.image} alt={rs.slug} />}
                            <span>{rs.name}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {searchResult.searchTerms &&
                    searchResult.searchTerms.length > 0 && (
                      <ul>
                        <li
                          style={{
                            color: "black",
                            marginLeft: "10px",
                            border: "none",
                          }}
                        >
                          Popular searches
                        </li>
                        {searchResult.searchTerms.map((rs, index) => (
                          <li key={index}>
                            <div
                              className={styles.search_result_li}
                              onClick={() =>
                                searchTermClick(encodeURI(rs.term))
                              }
                            >
                              <span>{rs.term}</span>{" "}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  {searchResult.products && (
                    <ul>
                      <li
                        style={{
                          color: "black",
                          marginLeft: "10px",
                          border: "none",
                        }}
                      >
                        Products
                      </li>
                      {searchResult.products.map((rs, index) => (
                        <li key={index}>
                          <div
                            className={styles.search_result_li}
                            onClick={() => {
                              resultClick(rs.slug);
                            }}
                          >
                            <img src={rs.files[0].thumbnail_image} alt="" />
                            <span>{rs.name}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className={styles.mb_search_content}>
                <div className={styles.mobile_search_icon}>
                  <FontAwesomeIcon
                    onClick={mobileSearchHandler}
                    icon={faSearch}
                  />
                </div>
              </div>
            </div>
            <div className={styles.icon_content}>
              <ul>
                <li>
                  <Dropdown id="language_dropdown">
                    <Dropdown.Toggle id="language_dropdown_button">
                      <span
                        className={`select-flag flag-icon flag-icon-${language == "en" ? "us" : "qa"
                          }`}
                      ></span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu alignRight>
                      {languages.map(({ code, name, country_code }) => (
                        <Dropdown.Item
                          key={country_code}
                          onClick={() => {
                            LanguageHandler(code);
                          }}
                        >
                          <span
                            className={`flag-icon flag-icon-${country_code}`}
                          ></span>
                          <span className="flag-text">{name}</span>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                {/* <li>
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`${styles.main_icon}`}
                  />
                </li> */}
                <li>
                  <Dropdown id="profile_dropdown">
                    <Dropdown.Toggle id="profile_dropdown_button">
                      <FontAwesomeIcon
                        icon={faUser}
                        className={`${styles.main_icon}`}
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu alignRight>
                      {auth.isAuthenticated ? (
                        <>
                          <Dropdown.Item>
                            <span>
                              {
                                JSON.parse(localStorage.getItem("user"))
                                  .first_name
                              }
                            </span>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/profile">
                              <a>{t("Profile")}</a>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <button onClick={logoutClick}>
                              {" "}
                              {t("Logout")}
                            </button>
                          </Dropdown.Item>
                        </>
                      ) : (
                        <>
                          <Dropdown.Item>
                            <Link href="/login">
                              <a className="d-block">{t("login")}</a>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <Link href="/register">
                              <a className="d-block">{t("registration")}</a>
                            </Link>
                          </Dropdown.Item>
                        </>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                </li>

                <li>
                  <FontAwesomeIcon
                    icon={faShoppingBag}
                    className={styles.main_icon}
                    onClick={() => {
                      if (
                        localStorage.getItem("coupon_id") ||
                        localStorage.getItem("discount") ||
                        localStorage.getItem("coupon")
                      ) {
                        // couponHandler();
                      }
                      setActive(!active);
                    }}
                  />
                  <span className={`${styles.bag_count}`}>{cartCount()}</span>
                  <div
                    className={
                      active
                        ? `${styles.bag_popup} ${styles.active}`
                        : styles.bag_popup
                    }
                  >
                    <div className={styles.bag_top}>
                      <div className={styles.top_inner}>
                        <span className={styles.bag_total}>
                          {cartItems.length} {t("items")}
                        </span>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => setActive(!active)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                    <div className={styles.bag_middle}>
                      <div className="progress">
                        <div
                          className={
                            subTotal + discount < 100
                              ? "progress-bar bg-danger"
                              : "progress-bar bg-success"
                          }
                          role="progressbar"
                          style={{
                            width: `${subTotal + discount}%`,
                          }}
                          aria-valuenow={`${subTotal + discount}`}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                        <span className="shipping__progress">
                          {subTotal + discount < 100
                            ? `Order QAR${100 - parseInt(subTotal + discount)
                            }.00 more to get free shipping`
                            : t("free_shipping")}
                        </span>
                      </div>
                      {cartItems.length > 0 ? (
                        cartItems.map((cartItem, index) => (
                          <div className={styles.product__item} key={index}>
                            <div className={styles.product__quantity}>
                              <button
                                disabled={cartItem.max_cart_qnt <= cartItem.qnt}
                                onClick={() =>
                                  plusHandler(
                                    cartItem.product_id,
                                    cartItem.qnt,
                                    cartItem.option_id
                                  )
                                }
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                              <span className={styles.qnt}>{cartItem.qnt}</span>
                              <button
                                disabled={cartItem.qnt <= 1}
                                onClick={() =>
                                  minusHandler(
                                    cartItem.product_id,
                                    cartItem.qnt,
                                    cartItem.option_id
                                  )
                                }
                              >
                                {" "}
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                            </div>
                            <div className={styles.product__img}>
                              <img src={cartItem.thumb} alt="" />
                            </div>
                            <div className={styles.product__name}>
                              {cartItem.name}
                              <span className={styles.option__lavel}>
                                {cartItem.option_value}
                              </span>
                              {instock ? (
                                <div>
                                  {instock[index] ? (
                                    <span
                                      className={`${styles.status} text-success`}
                                    >
                                      {t("in stock")}
                                    </span>
                                  ) : (
                                    <span
                                      className={styles.status}
                                      style={{ color: "red" }}
                                    >
                                      {t("out of stock")}
                                    </span>
                                  )}
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                            <div className={styles.product__price}>
                              <span>
                                {cartItem.price.currency}{" "}
                                {/* {cartItem.price.amount * cartItem.qnt}.00 */}
                                {/* {cartItem.price.amount * cartItem.qnt } */}
                                {getPrice(cartItem)}
                                {/* {cartItem.price.formatted} */}
                              </span>
                              <FontAwesomeIcon
                                onClick={() =>
                                  deleteHandler(
                                    cartItem.product_id,
                                    cartItem.option_id,
                                    cartItem.bulk_id
                                  )
                                }
                                icon={faTimes}
                              />
                            </div>
                          </div>
                        ))
                      ) : (
                        <h6 className="text-center mt-5 mb-5">
                          {t("empty_bag")}
                        </h6>
                      )}
                    </div>
                    <div className={styles.bag_bottom}>
                      <Link href="/bag">
                        <a
                          onClick={() => {
                            setActive(false);
                          }}
                          className={styles.place_order}
                        >
                          Place Order
                        </a>
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className={
                isOpen
                  ? `${styles.mb_search_input}`
                  : `${styles.mb_search_input} ${styles.closed}`
              }
            >
              <div className={styles.mb_search_input_wrapper}>
                <input
                  placeholder="search for.."
                  type="text"
                  name=""
                  id="searchBox"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyUp={searchHandler}
                  onKeyPress={keyHandler}
                />
                <FontAwesomeIcon
                  onClick={mobileSearchHandler}
                  className={styles.search_icon}
                  icon={faTimesCircle}
                />
                <div
                  className={
                    showResult
                      ? `${styles.search_result} ${styles.active}`
                      : `${styles.search_result}`
                  }
                >
                  {searchResult.brand && searchResult.brand.length > 0 && (
                    <ul>
                      <li
                        style={{
                          color: "black",
                          marginLeft: "10px",
                          border: "none",
                        }}
                      >
                        Brand
                      </li>
                      {searchResult.brand.map((rs, index) => (
                        <li key={index}>
                          <div
                            className={styles.search_result_li}
                            onClick={() => {
                              resultClick(rs.url, true);
                            }}
                          >
                            {rs.image && <img src={rs.image} alt={rs.slug} />}
                            <span>{rs.name}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {searchResult.searchTerms &&
                    searchResult.searchTerms.length > 0 && (
                      <ul>
                        <li
                          style={{
                            color: "black",
                            marginLeft: "10px",
                            border: "none",
                          }}
                        >
                          Popular searches
                        </li>
                        {searchResult.searchTerms.map((rs, index) => (
                          <li key={index}>
                            <div
                              className={styles.search_result_li}
                              onClick={() =>
                                searchTermClick(encodeURI(rs.term))
                              }
                            >
                              <span>{rs.term}</span>{" "}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  {searchResult.products && (
                    <ul>
                      <li
                        style={{
                          color: "black",
                          marginLeft: "10px",
                          border: "none",
                        }}
                      >
                        Products
                      </li>
                      {searchResult.products.map((rs, index) => (
                        <li key={index}>
                          <div
                            className={styles.search_result_li}
                            onClick={() => {
                              resultClick(rs.slug);
                            }}
                          >
                            <img src={rs.files[0].thumbnail_image} alt="" />
                            <span>{rs.name}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItem,
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => {
  return {
    removeCartItem: (id, option_id, bulk_id) =>
      removeCartItem(dispatch, id, option_id, bulk_id),
    logout: () => logoutUser(dispatch),
    plusOne: (product_id, option_id) =>
      PlusOne(dispatch, product_id, option_id),
    minusOne: (product_id, option_id) =>
      minusOne(dispatch, product_id, option_id),
    setCartAfterPriceChange: (cartItems) =>
      setCartAfterPriceChange(dispatch, cartItems),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation("common")(Navbar));
