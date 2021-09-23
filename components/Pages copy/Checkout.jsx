import React, { useState, useEffect } from "react";
import StepOne from "./Checkout/StepOne";
import StepTwo from "./Checkout/StepTwo";
import StepThree from "./Checkout/StepThree";
import StepFour from "./Checkout/StepFour";
import StepZero from "./Checkout/StepZero";
import { Helmet } from "react-helmet";
import axios from "../../redux/actions/axios";
import { emptyCart } from "../../redux/actions/cartAction";
import { connect } from "react-redux";

import Footer from "../layout/Footer";
import "../../assets/sass/checkout.scss";

function Checkout(props) {
  const [step, setStep] = useState(0);
  const [msg, setMsg] = useState(null);
  const [shipping, setShipping] = useState(10);
  const [subTotal, setSubTotal] = useState(
    props.cartItems.reduce(
      (acc, item) => (acc += item.qnt * item.price.amount),
      0
    )
  );
  const [newOrder, setNewOrder] = useState(null);
  const [stepOneValue, setStepOneValue] = useState({
    customer_first_name: "",
    customer_email: "",
    // active: false,
    billing_address_1: "",
    billing_state: "",
    billing_address_2: "",
    billing_city: "",
    billing_country: "QA",
    order_schedule: "morning",
    customer_phone: "",
    country_code: "",
    shipping_method: "flat_rate",
    shipping_cost: parseInt(shipping),
    payment_method: "cod",
    terms_and_conditions: "accepted",
    order_note: "",
    coupon: localStorage.getItem("coupon") || "",
    coupon_id: localStorage.getItem("coupon_id") || "",
    discount: localStorage.getItem("discount") || 0,
    //blue plate
    building: "",
    street: "",
    zone: "",
  });
  const numberHnadler = (phone, last = null) => {
    if (
      stepOneValue.coupon_id ||
      stepOneValue.coupon ||
      stepOneValue.discount
    ) {
      couponHandler(stepOneValue.coupon);
    }
    if (last) {
      setStepOneValue({
        ...stepOneValue,
        customer_email: last.customer_email,
        customer_first_name: last.customer_first_name,
        billing_address_1: last.billing_address_1,
        billing_address_2: last.billing_address_2,
        billing_city: last.billing_city,
        billing_state: last.billing_state,
        customer_phone: phone.nationalNumber,
        country_code: "+" + phone.countryCallingCode,
      });
    } else {
      setStepOneValue({
        ...stepOneValue,
        customer_phone: phone.nationalNumber,
        country_code: "+" + phone.countryCallingCode,
      });
    }
    setStep(step + 1);
  };
  const checkBoxHandler = () => {
    setStepOneValue({
      ...stepOneValue,
      active: !stepOneValue.active,
      building: "",
      street: "",
      zone: "",
    });
  };
  const radioHandler = (value) => {
    setStepOneValue({
      ...stepOneValue,
      order_schedule: value,
    });
  };
  const changeStep = (data) => {
    setMsg(null);
    setStepOneValue({
      ...stepOneValue,
      ...data,
    });
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const deliviryHandler = (payment_method) => {
    setStepOneValue({
      ...stepOneValue,
      payment_method,
    });
  };

  // text area handler

  const testAreaHandler = (value) => {
    setStepOneValue({
      ...stepOneValue,
      order_note: value,
    });
  };

  //step zero submit

  const stepZeroSubmit = (order = null) => {
    let user = JSON.parse(window.localStorage.getItem("user"));
    if (
      stepOneValue.coupon_id ||
      stepOneValue.coupon ||
      stepOneValue.discount
    ) {
      couponHandler(stepOneValue.coupon);
    }
    let customer_email =
      window.localStorage.getItem("auth_token") && !user.isCustomer
        ? "noemail@beautybooth.com"
        : user.email;
    let customer_first_name =
      window.localStorage.getItem("auth_token") && !user.isCustomer ? "" : user.first_name;
    if (order && window.localStorage.getItem("auth_token") && user.isCustomer) {
      let values = {
        customer_email: user.email,
        customer_first_name: order.customer_first_name,
        billing_address_1: order.billing_address_1,
        billing_address_2: order.billing_address_2,
        billing_city: order.billing_city,
        billing_state: order.billing_state,
        customer_phone: order.customer_phone,
        country_code: order.country_code
      };
      setStepOneValue({
        ...stepOneValue,
        ...values
      });
    } else {
      setStepOneValue({
        ...stepOneValue,
        customer_email,
        customer_first_name,
      });
    }
    setStep(step + 1);
  };
  // coupon handler
  const couponHandler = (coupon) => {
    let cart = props.cartItems.map((item) => {
      return {
        product_id: item.product_id,
        price: item.price.amount,
        qty: item.qnt,
        option: item.option_main_id || null,
        option_child: item.option_id || null,
      };
    });
    axios
      .post("checkout/coupon", {
        api: true,
        cart,
        coupon,
      })
      .then((res) => {
        setStepOneValue({
          ...stepOneValue,
          coupon,
          coupon_id: res.data.coupon_id,
          discount: res.data.discount,
        });
        setSubTotal(
          props.cartItems.reduce(
            (acc, item) => (acc += item.qnt * item.price.amount),
            0
          ) - res.data.discount
        );
        localStorage.setItem("coupon_id", res.data.coupon_id);
        localStorage.setItem("discount", res.data.discount);
        localStorage.setItem("coupon", coupon);
        setMsg(res.data.msg);
      })
      .catch((err) => {
        setMsg(err.response.data);
        localStorage.removeItem("coupon");
        localStorage.removeItem("coupon_id");
        localStorage.removeItem("discount");
        setStepOneValue({
          ...stepOneValue,
          coupon: "",
          coupon_id: "",
          discount: 0,
        });
      });
    setTimeout(setMsg(null), 3000);
  };
  //order submit
  const orderSubmit = () => {
    let cart = props.cartItems.map((item) => {
      return {
        product_id: item.product_id,
        price: item.price.amount,
        qty: item.qnt,
        option: item.option_main_id || null,
        option_child: item.option_id || null,
      };
    });
    let data = [];
    data.push(stepOneValue);
    data.push(cart);

    axios.post("en/checkout/final", data).then((res) => {
      if (res.data.msg == "success") {
        setNewOrder(res.data.order);
        props.emptyCart();
        localStorage.removeItem("coupon");
        localStorage.removeItem("coupon_id");
        localStorage.removeItem("discount");
        setTimeout(() => {
          //redirect
          setStep(step + 1);
        }, 500);
      }
    });
  };
  useEffect(() => {
    setSubTotal(
      props.cartItems.reduce(
        (acc, item) => (acc += item.qnt * item.price.amount),
        0
      ) - stepOneValue.discount
    );
    if (subTotal < 100) {
      setShipping(10);
    } else {
      setShipping(0);
    }
  }, [subTotal, props.cartItems, stepOneValue.discount]);
  useEffect(() => {
    // setSubTotal(
    //   parseInt(parseInt(props.cartItems.reduce(
    //     (acc, item) => (acc += item.qnt * item.price.amount),
    //     0
    //   ))-parseInt(stepOneValue.discount))
    // );
    // if (parseInt(subTotal) < 100) {
    //   setShipping(10);
    // } else {
    //   setShipping(0);
    // }

    let formData = props.cartItems.map((item) => {
      return {
        product_id: item.product_id,
        price: item.price.amount,
        qty: item.qnt,
        option: item.option_main_id || null,
        option_child: item.option_id || null,
      };
    });

    if (localStorage.getItem("auth_token")) {
      let token = localStorage.getItem("auth_token");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    axios.post("en/cartdata/items", formData).then((res) => {
      res.data.map((value) => {
        if (!value) {
          props.history.push("/bag");
        }
      });
    });
  }, [props.cartItems]);

  return (
    <>
      <div className="checkout_container">
        <Helmet>
          <title>Checkout - Beauty Booth</title>
        </Helmet>
        {step === 0 && (
          <StepZero
            numberHnadler={numberHnadler}
            changeStep={changeStep}
            stepZeroSubmit={stepZeroSubmit}
          />
        )}
        {step === 1 && (
          <StepOne
            changeStep={changeStep}
            checkBoxHandler={checkBoxHandler}
            radioHandler={radioHandler}
            val={stepOneValue}
            subTotal={subTotal}
            shipping={shipping}
            testAreaHandler={testAreaHandler}
          />
        )}
        {step === 2 && (
          <StepTwo
            prevStep={prevStep}
            payment_method={stepOneValue.payment_method}
            changeStep={changeStep}
            deliviryHandler={deliviryHandler}
            couponHandler={couponHandler}
            val={stepOneValue}
            auth={props.auth}
            msg={msg}
          />
        )}
        {step === 3 && (
          <StepThree
            prevStep={prevStep}
            changeStep={changeStep}
            orderSubmit={orderSubmit}
            data={stepOneValue}
          />
        )}
        {step === 4 && <StepFour order={newOrder} />}
      </div>
      <Footer />
    </>
  );
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItem,
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => {
  return {
    emptyCart: () => emptyCart(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
