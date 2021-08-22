import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import { withTranslation } from "../i18n";

import {
    removeCartItem,
    PlusOne,
    minusOne,
    inputItem,
    setCartAfterPriceChange,
} from "../redux/actions/cartAction";
import axios from "../redux/actions/axios";
import CartItem from "../components/bag/CartItem";
import {
    calculateSubTotal,
    priceWithoutDiscount,
} from "../components/utils/helper";
import bag from "../styles/Bag.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Header = dynamic(() => import("../components/layout/partials/Header"));
function MyBag(props) {
    const { t } = props;
    const [cart, setcart] = useState(props.cartItems);
    const [subTotal, setSubTotal] = useState(
        props.cartItems.reduce(
            (acc, item) => (acc += item.qnt * item.price.amount),
            0
        )
    );
    const [instock, setInstock] = useState([]);
    const [maxQty, setMaxQty] = useState([]);
    const [oos, setOos] = useState(false);
    const [shipping, setShipping] = useState(10);

    // coupon handler

    const [flag, setFlag] = useState(false);
    const [coupon, setCoupon] = useState("");
    const [coupon_id, setCouponId] = useState("");
    const [discount, setDiscount] = useState(0);
    // delivery method
    const [method, setMethod] = useState();
    // Frre Gift
    const [gifts, setGifts] = useState();
    const [giftProduct, setGiftProduct] = useState(
        process.browser
            ? localStorage.getItem("gift")
                ? JSON.parse(localStorage.getItem("gift"))
                : null
            : null
    );
    useEffect(() => {
        setFlag(localStorage.getItem("coupon_id") ? true : false);
        setCoupon(localStorage.getItem("coupon") || ""),
            setCouponId(localStorage.getItem("coupon_id") || "");
        setDiscount(localStorage.getItem("discount") || 0);
        setMethod(localStorage.getItem("method") || "regular");
    }, []);

    function floorAmount(amount, parcent, qnt) {
        let total = 0;
        let i = 0;

        for (i; i < qnt; i++) {
            total += Math.floor(amount - (amount * parcent) / 100);
        }
        return total;
    }

    const customSubTotalWithDiscount = () => {
        let value = props.cartItems.reduce(
            (acc, item) =>
                item.bulk_id && !flag
                    ? (acc += floorAmount(item.price.amount, item.parcent, item.qnt))
                    : (acc += item.qnt * item.price.amount),
            0
        );
        return value;
    };
    const customSubTotal = () => {
        return props.cartItems.reduce(
            (acc, item) => (acc += item.qnt * item.price.amount),
            0
        );
    };
    // get Free Gift
    useEffect(() => {
        let locale = props.lang === "en" ? "en" : "ar_QA" || "en";
        axios.get(`${locale}/getdata/free_gift`).then((res) => {
            if (res.data.length > 0) {
                // need price range check here

                setGifts(res.data);
            }
        });
    }, [props.lang]);
    // const giftHandler = (id, name, price, img) => {
    //   setGiftProduct({
    //     id,
    //     name,
    //     price,
    //     img,
    //   });
    //   localStorage.setItem("gift", JSON.stringify({ id, name, price, img }));
    // };
    const resetHandler = () => {
        setGiftProduct();
        localStorage.removeItem("gift");
    };
    useEffect(() => {
        if (props.cartItems.length > 0) {
            let formData = props.cartItems.map((item) => {
                return {
                    product_id: item.product_id,
                    price: item.price.amount,
                    qty: item.qnt,
                    option: item.option_main_id || null,
                    option_child: item.option_id || null,
                };
            });

            axios.post("en/cartdata/items", formData).then((res) => {
                let instock = [];
                let qt = [];
                res.data.map((dt) => {
                    instock.push(dt.in_stock);
                    qt.push(dt.qty);
                });
                setMaxQty(qt);
                let current = res.data;
                let ifUpdate = false;
                let update = props.cartItems.map((item, index) => {
                    if (item.price.amount !== current[index].selling_price.amount) {
                        ifUpdate = true;
                        item.price = current[index].selling_price;
                    }
                    return item;
                });
                if (ifUpdate) {
                    props.setCartAfterPriceChange(update);
                }

                setInstock(instock);
                let r = instock.filter((d) => d === false).length;
                if (r > 0) {
                    setOos(true);
                } else {
                    setOos(false);
                }
            });
            if (localStorage.getItem("coupon_id")) {
                couponHandler();
            }
        }
    }, [props.cartItems, coupon]);

    useEffect(() => {
        setSubTotal(
            props.cartItems.reduce(
                (acc, item) => (acc += item.qnt * item.price.amount),
                0
            ) - discount
        );

        if (method == "store_pickup") {
            setShipping(0);
        } else if (method == "express") {
            setShipping(20);
        } else {
            if (subTotal < 100) {
                setShipping(10);
            } else {
                setShipping(0);
            }
        }
    }, [method, subTotal, props.cartItems]);
    const deleteHandler = (id, option_id, bulk_id = null) => {
        props.removeCartItem(id, option_id, bulk_id);
    };
    const plusHandler = (product_id, qnt, option_id) => {
        props.plusOne(product_id, option_id);
    };
    const minusHandler = (product_id, qnt, option_id) => {
        if (qnt > 1) {
            props.minusOne(product_id, option_id);
        }
    };
    const qntInputHnadler = (e, product_id, qnt, option_id, max) => {
        if (
            parseInt(e.target.value) > 0 &&
            qnt < max &&
            parseInt(e.target.value) < max
        ) {
            cart.map((item) => {
                if (item.product_id == product_id && item.option_id == option_id) {
                    item.qnt = parseInt(e.target.value);
                }
                return item;
            });
            props.inputItem(product_id, option_id, parseInt(e.target.value));
        }
    };
    useEffect(() => {
        setcart(props.cartItems);
    }, [props.cartItems]);

    const [msg, setMsg] = useState(null);
    const couponHandler = () => {
        const pattern = /((\bINF)-(\d[0-9]*)-(\bBB$))/;
        if (pattern.test(coupon.toString())) {
        } else {
            let cart = props.cartItems.map((item) => {
                return {
                    product_id: item.product_id,
                    price: item.price.amount,
                    qty: item.qnt,
                    option: item.option_main_id || null,
                    option_child: item.option_id || null,
                };
            });
            let email = props.auth.isAuthenticated
                ? JSON.parse(props.auth.user).email
                : null;

            axios
                .post("en/checkout/coupon", {
                    api: true,
                    cart,
                    coupon,
                    email,
                })
                .then((res) => {
                    setFlag(true);
                    setMsg(null);
                    setCouponId(res.data.coupon_id);
                    setDiscount(res.data.discount);
                    setSubTotal(
                        props.cartItems.reduce(
                            (acc, item) => (acc += item.qnt * item.price.amount),
                            0
                        ) - res.data.discount
                    );
                    localStorage.setItem("coupon_id", res.data.coupon_id);
                    localStorage.setItem("discount", res.data.discount);
                    localStorage.setItem("coupon", coupon);
                    // alert(res.data.msg);
                })
                .catch((err) => {
                    setMsg(err.response.data);
                    // clearCoupon();
                    setDiscount(0);
                });
        }
    };
    const clearCoupon = () => {
        localStorage.removeItem("coupon");
        localStorage.removeItem("coupon_id");
        localStorage.removeItem("discount");
        setCouponId("");
        setCoupon("");
        setDiscount(0);
        setFlag(false);
        setSubTotal(
            props.cartItems.reduce(
                (acc, item) => (acc += item.qnt * item.price.amount),
                0
            ) - 0
        );
    };
    const deliveryHandler = (method) => {
        localStorage.setItem("method", method);
        setMethod(method);
    };

    // add freegift
    const addFreeGift = (item) => {
        if (subTotal < item.free_gift.cart_min) {
            // alert("You Are Not Eligible for this Free Gift");

            toast.error("You are not eligible for this Free Gift", {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        } else {
            setGiftProduct({
                id: item.id,
                name: item.name,
                image: item.files[0].thumbnail_image,
                cart_min: item.free_gift.cart_min,
            });
            localStorage.setItem(
                "gift",
                JSON.stringify({
                    id: item.id,
                    name: item.name,
                    image: item.files[0].thumbnail_image,
                    cart_min: item.free_gift.cart_min,
                })
            );
        }
    };

    useEffect(() => {
        let free = localStorage.getItem("gift");
        if (free && gifts) {
            let freeValue = JSON.parse(free);
            let fitlerdValue = gifts.find((item) => item.id == freeValue.id);
            if (subTotal < fitlerdValue.free_gift.cart_min) {
                // not applicable
                setGiftProduct();
                localStorage.removeItem("gift");
            }
        }
    }, [subTotal, gifts]);

    return (
        <>
            <Head>
                <title>Bag | Beautyboothqa </title>
            </Head>
            <div className={`${bag.my_bag} mb-5`}>
                <div className="container">
                    <div className="row">
                        <Header h="h2" text={t("IN YOUR BAG")} />
                    </div>

                    {props.cartItems.length > 0 ? (
                        <div className="row">
                            <div className="mybag_details">
                                <div className="mybag_left">
                                    <div className="inbag_products">
                                        {props.cartItems.map((cartItem, index) => (
                                            <div className="bag_product" key={index}>
                                                <CartItem
                                                    maxValue={maxQty[index]}
                                                    inputItem={props.inputItem}
                                                    flag={flag}
                                                    t={t}
                                                    stock={instock[index]}
                                                    removeCartItem={props.removeCartItem}
                                                    plusOne={props.plusOne}
                                                    minusOne={props.minusOne}
                                                    cartItem={cartItem}
                                                />
                                            </div>
                                        ))}
                                        {giftProduct && (
                                            <div className="gitProduct_row">
                                                <img src={giftProduct.image} />
                                                <div className="details_container">
                                                    <div className="name">{giftProduct.name}</div>
                                                    <span>Free Gift</span>
                                                    <button
                                                        style={{ background: "#ff5ba2", color: "white" }}
                                                        className="btn btn-sm "
                                                        onClick={resetHandler}
                                                    >
                                                        Reset
                                                    </button>
                                                </div>
                                                <div className="price">QAR 00.00</div>
                                            </div>
                                        )}

                                        <div className="sub_total">
                                            <span>{t("ORDER SUB-TOTAL")}</span>
                                            <span>
                                                {" "}
                                                {/* {props.cartItems[0].price.currency} {customSubTotalWithDiscount().toFixed(2)} */}
                                                {props.cartItems[0].price.currency}{" "}
                                                {calculateSubTotal(props.cartItems, flag).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className=" col deliviry_method_row mt-3">
                                        <ul>
                                            <li
                                                className={method == "store_pickup" ? "active" : ""}
                                                onClick={() => deliveryHandler("store_pickup")}
                                            >
                                                <div className="method_checked">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </div>
                                                <span className="method_title">{t("Store pickup")}</span>
                                                <p className="method_details">{t("shop_address")}</p>
                                            </li>
                                            <li
                                                className={method == "express" ? "active" : ""}
                                                onClick={() => deliveryHandler("express")}
                                            >
                                                <div className="method_checked">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </div>
                                                <span className="method_title">{t("Express Delivery")}</span>
                                                <p className="method_details">{t("express note")}</p>
                                            </li>
                                            <li
                                                className={method == "regular" ? "active" : ""}
                                                onClick={() => deliveryHandler("regular")}
                                            >
                                                <div className="method_checked">
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </div>
                                                <span className="method_title">{t("Regular Delivery")}</span>
                                                <p className="method_details">
                                                    {t("d_info")}
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href="/faq?mark=delivery">
                                        <a
                                            style={{ fontSize: 12 }}
                                            className="btn btn-sm btn-outline-info text-uppercase m-3"
                                        >
                                            {t("Read More About our Delivery System")}
                                        </a>
                                    </Link>
                                </div>

                                <div className="mybag_right">
                                    <div className="payment_group mt-4">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                name="coupon"
                                                className="form-control"
                                                value={coupon}
                                                onChange={(e) =>
                                                    setCoupon(e.target.value.toUpperCase())
                                                }
                                                placeholder={t("Enter Special Code")}
                                                maxLength={12}
                                                id="coupon"
                                                disabled={flag}
                                            />
                                            <div className="input-group-append">
                                                {!flag ? (
                                                    <button
                                                        className="btn btn-flat btn-outline-primary"
                                                        onClick={couponHandler}
                                                        disabled={flag}
                                                    >
                                                        {t("Apply")}
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btn btn-flat btn-outline-danger"
                                                        onClick={() => clearCoupon()}
                                                    >
                                                        Clear
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    {msg && <div className="text-danger">{msg}</div>}
                                    <div className="summery mb-2">
                                        <div className="item_title">{t("ORDER SUMMARY")}</div>
                                        <div className="summery_items">
                                            <div className="summery_item">
                                                <span className="sub">{t("ORDER SUB-TOTAL")}</span>
                                                <span className="amount">
                                                    {/* {customSubTotal()}
                          .00 */}
                                                    {priceWithoutDiscount(props.cartItems).toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="summery_item">
                                                <span className="sub">{t("SHIPPING")}*</span>
                                                <span className="amount">{shipping}.00</span>
                                            </div>
                                            <div className="summery_item">
                                                <span className="sub">{t("DISCOUNT")}</span>
                                                <span className="amount">
                                                    {" "}
                                                    &#8722;{" "}
                                                    {flag
                                                        ? discount
                                                        : priceWithoutDiscount(props.cartItems) -
                                                        calculateSubTotal(props.cartItems)}
                                                    .00
                                                </span>
                                            </div>
                                            <div className="summery_item total">
                                                <span className="sub">{t("GRAND TOTAL")}</span>
                                                <span className="amount">
                                                    {(
                                                        calculateSubTotal(props.cartItems, flag) +
                                                        shipping -
                                                        discount
                                                    ).toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="checkout_btn_container">
                                                {oos ? (
                                                    <span>{t("cart_warning")}</span>
                                                ) : (
                                                    <Link href="/checkout">
                                                        {t("PROCEED TO CHECKOUT")}
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <strong>
                                        {subTotal < 100
                                            ? `Order QAR ${100 - subTotal} more to get free shipping`
                                            : ""}
                                    </strong>
                                </div>
                            </div>
                            <div className="col-12">
                                <ToastContainer />
                                {gifts && !giftProduct && <h4>{t("Free Gift")}</h4>}
                                <div className="row">
                                    <div className="col-12">
                                        {gifts &&
                                            !giftProduct &&
                                            gifts.map((itm, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => addFreeGift(itm)}
                                                    className="brand__offer__card mb-2 px-2"
                                                >
                                                    <img
                                                        src={itm.files[0].thumbnail_image}
                                                        alt={itm.name}
                                                    />
                                                    <div className="brand__name">{itm.name}</div>
                                                    <div className="rangePrice">
                                                        Min. amount: QAR {itm.free_gift.cart_min}.00
                                                        <br />
                                                        Max amount: QAR {itm.free_gift.cart_max}.00
                                                    </div>
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h4 className="text-center m-5">{t("Your Bag is Empty")}</h4>
                    )}
                    {/* {giftProduct && (
            <div style={{ maxWidth: 350, margin: "30px auto" }}>
              {" "}
              <GiftCard name={giftProduct.name} img={giftProduct.image} />
              <span style={{ textAlign: "center", display: "block" }}>
                We will add this product as a gift to your cart!
              </span>
              <div style={{ textAlign: "center" }}>
                <button
                  style={{ background: "#ff5ba2", color: "white" }}
                  className="btn btn-sm "
                  onClick={resetHandler}
                >
                  Reset
                </button>
              </div>
            </div>
          )} */}
                </div>
            </div>
        </>
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
        plusOne: (product_id, option_id) =>
            PlusOne(dispatch, product_id, option_id),
        minusOne: (product_id, option_id) =>
            minusOne(dispatch, product_id, option_id),
        inputItem: (product_id, option_id, qnt) =>
            inputItem(dispatch, product_id, option_id, qnt),

        setCartAfterPriceChange: (cartItems) =>
            setCartAfterPriceChange(dispatch, cartItems),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation("common")(MyBag));
