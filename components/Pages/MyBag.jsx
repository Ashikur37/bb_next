import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import HeaderComponent from "../atom/HeaderComponent";
import { Link } from "react-router-dom";
import {
  removeCartItem,
  PlusOne,
  minusOne,
  setCartFromLocal,
  inputItem,
} from "../../redux/actions/cartAction";
import axios from "../../redux/actions/axios";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "../../assets/sass/mybag.scss";
import Footer from "../layout/Footer";

function MyBag(props) {
  const [cart, setcart] = useState(props.cartItems);
  const [subTotal, setSubTotal] = useState(
    props.cartItems.reduce(
      (acc, item) => (acc += item.qnt * item.price.amount),
      0
    )
  );
  const [instock, setInstock] = useState([]);
  const [oos, setOos] = useState(false);
  const [shipping, setShipping] = useState(10);

  // useEffect(() => {
  //   setSubTotal(
  //     props.cartItems.reduce(
  //       (acc, item) => (acc += item.qnt * item.price.amount),
  //       0
  //     )
  //   );
  //   if (subTotal < 100) {
  //     setShipping(10);
  //   } else {
  //     setShipping(0);
  //   }
  //   let formData = props.cartItems.map((item) => {
  //     return {
  //       product_id: item.product_id,
  //       price: item.price.amount,
  //       qty: item.qnt,
  //       option: item.option_main_id || null,
  //       option_child: item.option_id || null,
  //     };
  //   });

  //   axios.post("/cartdata/items", formData).then((res) => {
  //     setInstock(res.data);
  //     let r = res.data.filter((d) => d === false).length;
  //     if (r > 0) {
  //       setOos(true);
  //     } else {
  //       setOos(false);
  //     }
  //   });
  // }, [props.cartItems, subTotal]);
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
        setInstock(res.data);
        let r = res.data.filter((d) => d === false).length;
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
  }, [props.cartItems]);

  useEffect(() => {
    setSubTotal(
      props.cartItems.reduce(
        (acc, item) => (acc += item.qnt * item.price.amount),
        0
      ) - discount
    );
    if (subTotal < 100) {
      setShipping(10);
    } else {
      setShipping(0);
    }
  }, [subTotal, props.cartItems]);
  const deleteHandler = (id, option_id) => {
    props.removeCartItem(id, option_id);
  };
  const plusHandler = (product_id, qnt, option_id) => {
    props.plusOne(product_id, option_id);
  };
  const minusHandler = (product_id, qnt, option_id) => {
    if (qnt > 1) {
      props.minusOne(product_id, option_id);
    }
  };
  const qntInputHnadler = (e, product_id, qnt, option_id) => {
    if (parseInt(e.target.value) > 0) {
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

  // coupon handler

  const [flag, setFlag] = useState(localStorage.getItem("coupon_id") ? true : false);
  const [coupon, setCoupon] = useState(localStorage.getItem("coupon") || "");
  const [coupon_id, setCouponId] = useState(localStorage.getItem("coupon_id") || "");
  const [discount, setDiscount] = useState(localStorage.getItem("discount") || 0);
  const [msg, setMsg] = useState(null);
  const couponHandler = () => {
    let cart = props.cartItems.map((item) => {
      return {
        product_id: item.product_id,
        price: item.price.amount,
        qty: item.qnt,
        option: item.option_main_id || null,
        option_child: item.option_id || null,
      };
    });
    axios.post('checkout/coupon', {
      api: true,
      cart,
      coupon
    }).then(res => {
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
      localStorage.setItem("coupon_id", res.data.coupon_id)
      localStorage.setItem("discount", res.data.discount)
      localStorage.setItem("coupon", coupon)
      // alert(res.data.msg);
    }).catch(err => {
      setMsg(err.response.data);
      // clearCoupon();
      setDiscount(0);
    });
  }
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
  }

  return (
    <>
      <div className="my_bag mb-5">
        <HelmetProvider>
          <Helmet>
            <title>My Bag - Beauty Booth</title>
          </Helmet>
        </HelmetProvider>
        <div className="container">
          <HeaderComponent text="IN YOUR BAG" />
          {props.cartItems.length > 0 ? (
            <div className="row">
              <div className="mybag_details">
                <div className="mybag_left">
                  <div className="inbag_products">
                    {cart.map((cartItem, index) => (
                      <div className="bag_product" key={index}>
                        <div className="img_container">
                          <img src={cartItem.thumb} alt="" />
                        </div>
                        <div className="details_container">
                          <Link to={`/product/${cartItem.slug}`}>
                            <span className="product_name">
                              {cartItem.name}
                            </span>
                          </Link>
                          {/* <span className="brand_name">Brand</span> */}
                          <span>{cartItem.option_value}</span>
                          {instock ? (
                            <div>
                              {instock[index] ? (
                                <span className="status">in stock</span>
                              ) : (
                                  <span
                                    className="status"
                                    style={{ color: "red" }}
                                  >
                                    out of stock
                                  </span>
                                )}

                              <span
                                onClick={() =>
                                  deleteHandler(
                                    cartItem.product_id,
                                    cartItem.option_id
                                  )
                                }
                                className="btn btn-warning btn-sm delete_btn m-2"
                              >
                                Delete
                              </span>
                            </div>
                          ) : (
                              ""
                            )}
                        </div>
                        <div className="quantity_container">
                          <button
                            onClick={() =>
                              minusHandler(
                                cartItem.product_id,
                                cartItem.qnt,
                                cartItem.option_id
                              )
                            }
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={cartItem.qnt}
                            name="qnt_input"
                            className="qnt_input"
                            id=""
                            onInput={(e) =>
                              qntInputHnadler(
                                e,
                                cartItem.product_id,
                                cartItem.qnt,
                                cartItem.option_id
                              )
                            }
                          />
                          <button
                            onClick={() =>
                              plusHandler(
                                cartItem.product_id,
                                cartItem.qnt,
                                cartItem.option_id
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                        <div className="price_container">
                          <div className="md_quantity_container">
                            <span
                              onClick={() =>
                                minusHandler(
                                  cartItem.product_id,
                                  cartItem.qnt,
                                  cartItem.option_id
                                )
                              }
                            >
                              -
                            </span>
                            <span>{cartItem.qnt}</span>
                            <span
                              onClick={() =>
                                plusHandler(
                                  cartItem.product_id,
                                  cartItem.qnt,
                                  cartItem.option_id
                                )
                              }
                            >
                              +
                            </span>
                          </div>
                          <span className="md_price">
                            {" "}
                            {cartItem.price.currency}{" "}
                            {cartItem.price.amount * cartItem.qnt}.00
                          </span>
                        </div>
                      </div>
                    ))}

                    <div className="sub_total">
                      <span>ORDER SUB-TOTAL</span>
                      <span>
                        {" "}
                        {props.cartItems[0].price.currency} {subTotal}.00
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mybag_right">

                  <div className="payment_group mt-4">
                    <div className="input-group">
                      <input
                        type="text"
                        name="coupon"
                        className="form-control"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                        placeholder="Enter Special Code"
                        maxLength={12}
                        id="coupon"
                        disabled={flag}
                      />
                      <div className="input-group-append">
                        {!flag ? (<button className="btn btn-flat btn-outline-primary" onClick={couponHandler}
                          disabled={flag}>Apply</button>) : (
                            <button className="btn btn-flat btn-outline-danger" onClick={() => clearCoupon()}
                            >Clear</button>
                          )}
                      </div>
                    </div>
                  </div>
                  {msg && (
                    <div className="text-danger">{msg}</div>
                  )}
                  <div className="summery mb-2">
                    <div className="item_title">ORDER SUMMARY</div>
                    <div className="summery_items">
                      <div className="summery_item">
                        <span className="sub">ORDER SUB-TOTAL</span>
                        <span className="amount">
                          {props.cartItems.reduce(
                            (acc, item) =>
                              (acc += item.qnt * item.price.amount),
                            0
                          )}
                          .00
                        </span>
                      </div>
                      <div className="summery_item">
                        <span className="sub">SHIPPING*</span>
                        <span className="amount">{shipping}.00</span>
                      </div>
                      <div className="summery_item">
                        <span className="sub">DISCOUNT</span>
                        <span className="amount"> &#8722; {discount}.00</span>
                      </div>
                      <div className="summery_item total">
                        <span className="sub">GRAND TOTAL</span>
                        <span className="amount">
                          {props.cartItems.reduce(
                            (acc, item) =>
                              (acc += item.qnt * item.price.amount),
                            0
                          ) + shipping - discount}
                          .00
                        </span>
                      </div>
                      <div className="checkout_btn_container">
                        {oos ? (
                          "Cart items are not in stock"
                        ) : (
                            <Link to="/checkout">PROCEED TO CHECKOUT</Link>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <strong>
                {subTotal < 100
                  ? `Order QAR ${100 - subTotal} more to get free shipping`
                  : ""}
              </strong>
            </div>
          ) : (
              <h4 className="text-center m-5">Your Bag is Empty</h4>
            )}
        </div>
      </div>
      <Footer />{" "}
    </>
  );
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItem,
});
const mapDispatchToProps = (dispatch) => {
  return {
    removeCartItem: (id, option_id) => removeCartItem(dispatch, id, option_id),
    plusOne: (product_id, option_id) =>
      PlusOne(dispatch, product_id, option_id),
    minusOne: (product_id, option_id) =>
      minusOne(dispatch, product_id, option_id),
    inputItem: (product_id, option_id, qnt) =>
      inputItem(dispatch, product_id, option_id, qnt),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MyBag));
