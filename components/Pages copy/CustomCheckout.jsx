import React, { useState, useEffect } from "react";
import StepOne from "./CustomCheckout/StepOne";
import StepTwo from "./CustomCheckout/StepTwo";
import StepThree from "./CustomCheckout/StepThree";
import StepFour from "./CustomCheckout/StepFour";
import StepZero from "./CustomCheckout/StepZero";
import { Helmet } from "react-helmet";
import axios from "../../redux/actions/axios";
import { emptyCart } from "../../redux/actions/cartAction";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';

import "../../assets/sass/checkout.scss";

function CustomCheckout(props) {
  const history = useHistory();
  const [step, setStep] = useState(0);
  const [shipping, setShipping] = useState(10);
  const [subTotal, setSubTotal] = useState(
    props.cartItems.reduce(
      (acc, item) => (acc += item.qnt * item.price.amount),
      0
    )
  );
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
    //blue plate
    building: "",
    street: "",
    zone: "",
  });
  
  const numberHnadler = (phone) => {
    setStepOneValue({
      ...stepOneValue,
      customer_phone: phone.nationalNumber,
      country_code: "+" + phone.countryCallingCode,
    });
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

  const stepZeroSubmit = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    setStepOneValue({
      ...stepOneValue,
      customer_email: user.email,
      customer_first_name: user.first_name,
    });
    setStep(step + 1);
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

    axios.post("checkout/final", data).then((res) => {
      if (res.data.msg == "success") {
        props.emptyCart();
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
      )
    );
    if (subTotal < 100) {
      setShipping(10);
    } else {
      setShipping(0);
    }

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
      {step === 4 && <StepFour />}
    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomCheckout);
