import React, { useState, useEffect } from "react";
import Link from "next/link";
import { i18n, withTranslation } from "../../../i18n";

import HeaderComponent from "../../atom/HeaderComponent";
import ProgressBar from "../../atom/ProgressBar";
import { connect } from "react-redux";
import Loader from "../../atom/Loader";
import { isMobile } from "react-device-detect";
import FreeGift from "./FreeGift";
import axios from "../../../redux/actions/axios";
import GiftCard from "./GiftCard";
import {
  calculateSubTotal,
  priceWithoutDiscount,
  test,
} from "../../utils/helper";
function StepThree(props) {
  const { t } = props;
  const [gifts, setGifts] = useState();
  const [giftProduct, setGiftProduct] = useState();
  const [express, setExpress] = useState();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    customer_first_name,
    customer_email,
    order_schedule,
    billing_address_1,
    shipping_cost,
    discount,
    store_pickup,
  } = props.data;
  const [loading, setLoading] = useState(false);
  const submitHandler = () => {
    window.scrollTo(0, 0);
    setLoading(true);
    // if (giftProduct) {
    //   props.orderSubmit(giftProduct.id);
    // } else {
    //   props.orderSubmit();
    // }
    props.orderSubmit();
  };
  const handleExpressDelivery = (e) => {
    setExpress(e.target.checked);
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
        dangerouslySetInnerHTML={createMarkup(
          // `Delivery Within ${from} ~ ${to}`
          `Regular Flexible Delivery within ${from} ~ ${to}`
        )}
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
  const createMarkup = (data) => {
    return {
      __html: data,
    };
  };
  function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  useEffect(() => {
    let locale = props.lang === "en" ? "en" : "ar_QA" || "en";
    axios.get(`${locale}/getdata/free_gift`).then((res) => {
      if (res.data.length > 0) {
        // need price range check here

        setGifts(res.data);
      }
    });
  }, []);
  const giftHandler = (id, name, price, img) => {
    setGiftProduct({
      id,
      name,
      price,
      img,
    });
  };
  const resetHandler = () => {
    setGiftProduct();
  };
  const priceCalculate = (item) => {
    if (item.bulk_id && !props.data.coupon) {
      return (
        item.qnt * item.price.amount -
        (item.qnt * item.price.amount * item.parcent) / 100
      );
    } else {
      return item.qnt * item.price.amount;
    }
  };
  const customSubTotal = () => {
    let value = props.cartItems.reduce(
      (acc, item) => (acc += item.qnt * item.price.amount),
      0
    );
    return value;
  };
  function floorAmount(amount, parcent, qnt) {
    let total = 0;
    let i = 0;

    for (i; i < qnt; i++) {
      total += Math.floor(amount - (amount * parcent) / 100);
    }
    return total;
  }
  function grandTotal() {
    return props.cartItems.reduce(
      (acc, item) =>
        item.bulk_id && !props.data.coupon
          ? (acc += floorAmount(item.price.amount, item.parcent, item.qnt))
          : (acc += item.qnt * item.price.amount),
      0
    );
  }
  return (
    <>
      {loading ? (
        <div style={{ marginTop: 200 }} className="loader">
          <Loader />
        </div>
      ) : (
        <div className="container">
          <div className="step_three">
            <HeaderComponent text={t("INVOICE")} />
            <ProgressBar active={3} />

            {/* {gifts &&
              props.cartItems.reduce(
                (acc, item) => (acc += item.qnt * item.price.amount),
                0
              ) > 99 &&
              !giftProduct && (
                <FreeGift
                  Header={HeaderComponent}
                  headerText={t("FREE GIFT, JUST TAP TO ADD!")}
                  gifts={gifts}
                  cartTotal={props.cartItems.reduce(
                    (acc, item) => (acc += item.qnt * item.price.amount),
                    0
                  )}
                  giftHandler={giftHandler}
                />
              )} */}
            {props.giftProduct && (
              <div style={{ maxWidth: 350, margin: "30px auto" }}>
                {" "}
                <GiftCard name={props.giftProduct.name} img={props.giftProduct.image} />
                <span style={{ textAlign: "center", display: "block" }}>
                  We will add this product as a gift to your cart!
                </span>
                <div style={{ textAlign: "center" }}>
                  {/* <button
                    style={{ background: "#ff5ba2", color: "white" }}
                    className="btn btn-sm "
                    onClick={resetHandler}
                  >
                    Reset
                  </button> */}
                </div>
              </div>
            )}

            <div className="invoice">
              <div className="invoice_title">
                {t("Check your orders before you place order")}
              </div>
              <div className="customer_info">
                <ul>
                  <li>
                    <span className="label">{t("Customer Name")}:</span>{" "}
                    {customer_first_name}
                  </li>
                  {/* <li>
              <span className="label">Contact number:</span> 880 01971430000
            </li> */}
                  <li>
                    <span className="label">{t("Delivery Address")}:</span>{" "}
                    {billing_address_1}
                  </li>
                  <li>
                    <span className="label">{t("Delivery Schedule")}:</span>{" "}
                    {order_schedule}
                  </li>
                </ul>
              </div>
              {isMobile ? (
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.cartItems.map((cartItem, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {cartItem.name}
                          {cartItem.option_value ? (
                            <>
                              <br />{" "}
                              <span style={{ color: "#f37" }}>
                                {cartItem.option_value}
                              </span>
                            </>
                          ) : (
                            ""
                          )}
                          <br />
                          <span style={{ color: "grey" }}>
                            Qty: {cartItem.qnt} | Price:{" "}
                            {cartItem.price.formatted} | Sum:
                            {cartItem.price.currency +
                              " " +
                              parseInt(cartItem.qnt * cartItem.price.amount)}
                            .00
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>{t("Product Name")}</th>
                      <th>{t("Quantity")}</th>
                      <th>{t("Price")}</th>
                      <th>{t("Total")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.cartItems.map((cartItem, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                          {cartItem.name}
                          <br /> {cartItem.option_value}
                        </td>
                        <td>{cartItem.qnt}</td>
                        <td>{cartItem.price.formatted}</td>
                        <td>
                          {cartItem.price.currency +
                            " " +
                            test(cartItem, props.data.coupon)}
                          <br />
                          {/* {cartItem.bulk_id && !props.data.coupon && <span className="text-success" >save {cartItem.parcent}%</span>} */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
              <div className="table_footer">
                <div className="left">
                  <span>
                    <DateRange />
                  </span>
                  
                </div>
                <div className="right">
                  <div className="charge common">
                    <span>{t("Delivery Charge")}</span>
                    <span> {store_pickup? '00': express ? 20 : props.shipping}.00</span>
                  </div>

                  <div className="grand_total common">
                    <span>{t("Sub Total")}</span>
                    <span>
                      {priceWithoutDiscount(props.cartItems)}
                      .00
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="charge common">
                      <span style={{ textTransform: "capitalize" }}>
                        {t("DISCOUNT")}
                      </span>
                      <span>-{discount}.00</span>
                    </div>
                  )}
                  <div className="grand_total common">
                    <span>{t("Grand Total")}</span>
                    <span>
                      {parseInt(
                        calculateSubTotal(props.cartItems, props.data.coupon) +
                          (store_pickup? 0 : express ? 20 : parseInt(props.shipping)) -
                          parseInt(discount)
                      ).toFixed(2)}
                    </span>
                  </div>
                  <div className="pament_status common">
                    <span>{t("Payment Status")}</span>
                    <span>{t("unpaid")}</span>
                  </div>
                  {/* <div className="pament_method common">
              <span>Payment Method</span>
              <span>{props.data.payment_method}</span>
            </div> */}
                </div>
              </div>
              <div className="place_order_container">
                <button className="mr-2" onClick={() => props.prevStep()}>
                  {t("Back")}
                </button>
                <button onClick={submitHandler}>{t("PLACE ORDER")}</button>
              </div>
              <h5 className="text-center">
                BY HITTING THE PLACE ORDER BUTTON YOU ALSO ACCEPT OUR{" "}
                <Link href="/terms-and-conditions">
                  <a>TERMS AND CONDITION</a>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItem,
});
export default connect(mapStateToProps)(withTranslation("common")(StepThree));
