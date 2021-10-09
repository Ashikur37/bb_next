import React, { useState, useEffect } from "react";
import Head from "next/head";
// import Script from 'next/script';
import StepOne from "../../components/Pages/Checkout/StepOne";
import StepTwo from "../../components/Pages/Checkout/StepTwo";
import StepThree from "../../components/Pages/Checkout/StepThree";
import StepFour from "../../components/Pages/Checkout/StepFour";
import StepZero from "../../components/Pages/Checkout/StepZero";

import axios from "../../redux/actions/axios";
import Axios from "axios";
import { emptyCart } from "../../redux/actions/cartAction";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";

import styles from "../../styles/CheckoutPage.module.scss";
import { GTMCheckout } from "../../components/utils/gtm";
// import "../../assets/sass/checkout.scss";

function Checkout(props) {
  const router = useRouter();
  const [giftProduct, setGiftProduct] = useState(
    process.browser
      ? localStorage.getItem("gift")
        ? JSON.parse(localStorage.getItem("gift"))
        : null
      : null
  );
  const [method, setMethod] = useState();
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
    store_pickup: false,
    coupon: process.browser ? localStorage.getItem("coupon") || "" : "",
    coupon_id: process.browser
      ? localStorage.getItem("coupon_id") == "influencer"
        ? localStorage.getItem("coupon").split("-")[1] * 100
        : localStorage.getItem("coupon_id") || ""
      : "",
    discount: process.browser ? localStorage.getItem("discount") || 0 : 0,
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
  const storePicupHandler = () => {
    setStepOneValue({
      ...stepOneValue,
      store_pickup: !stepOneValue.store_pickup,
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
      window.localStorage.getItem("auth_token") && !user.isCustomer
        ? ""
        : user.first_name;
    if (order && window.localStorage.getItem("auth_token") && user.isCustomer) {
      let values = {
        customer_email: user.email,
        customer_first_name: order.customer_first_name,
        billing_address_1: order.billing_address_1,
        billing_address_2: order.billing_address_2,
        billing_city: order.billing_city,
        billing_state: order.billing_state,
        customer_phone: order.customer_phone,
        country_code: order.country_code,
      };
      setStepOneValue({
        ...stepOneValue,
        ...values,
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
    const pattern = /((\bINF)-(\d[0-9]*)-(\bBB$))/;
    if (pattern.test(coupon.toString())) {
      if (
        props.auth.isAuthenticated &&
        localStorage.getItem("coupon_id") != "influencer"
      ) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${
          localStorage.getItem("auth_token") || ""
        }`;
        axios
          .post("en/auth/rewards/calculate", {
            subTotal,
            coupon,
          })
          .then((res) => {
            let userId = coupon.split("-")[1];
            setStepOneValue({
              ...stepOneValue,
              coupon,
              coupon_id: userId * 100,
              discount: res.data.discount,
            });
            setSubTotal(
              props.cartItems.reduce(
                (acc, item) => (acc += item.qnt * item.price.amount),
                0
              ) - res.data.discount
            );
            // localStorage.setItem("coupon_id", "influencer");
            localStorage.setItem("discount", res.data.discount);
            localStorage.setItem("coupon", coupon);
          })
          .catch((err) => {});
      }
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
    }
    setTimeout(setMsg(null), 3000);
  };
  //order submit
  const orderSubmit = () => {
    let cart = props.cartItems.map((item) => {
      return {
        product_id: item.product_id,
        price: item.price.amount,
        qty: item.qnt,
        bulk_id: item["bulk_id"],
        option: item.option_main_id || null,
        option_child: item.option_id || null,
      };
    });
    let data = [];
    if (method == "store_pickup") {
      let tmp = stepOneValue;
      tmp.shipping_method = "local_pickup";
      tmp.shipping_cost = 0;
      setStepOneValue(tmp);
    }
    if (method == "express") {
      let tmp = stepOneValue;
      tmp.shipping_method = "express_delivery";
      tmp.shipping_cost = 20;
      setStepOneValue(tmp);
    }
    if (method == "regular") {
      let tmp = stepOneValue;
      tmp.shipping_method = subTotal > 99 ? "free_shipping" : "flat_rate";
      tmp.shipping_cost = shipping;
      setStepOneValue(tmp);
    }
    data.push(stepOneValue);

    data.push(cart);
    // data.push({express_delivery: express});
    data.push({ freeGift: giftProduct ? giftProduct.id : null });
    axios
      .post("en/checkout/final", data)
      .then((res) => {
        if (res.data.msg == "success") {
          setNewOrder(res.data.order);
          /**
           * Fire the Purchase Event Start
           */
          let fbp = document.cookie
            .split(";")
            .filter((c) => c.includes("_fbp="))
            .map((c) => c.split("_fbp=")[1]);
          let fbc = document.cookie
            .split(";")
            .filter((c) => c.includes("_fbc="))
            .map((c) => c.split("_fbc=")[1]);
          fbp = (fbp.length && fbp[0]) || null;
          fbc = (fbc.length && fbc[0]) || null;

          if (!fbc && window.location.search.includes("fbclid=")) {
            fbc =
              "fb.1." +
              +new Date() +
              "." +
              window.location.search.split("fbclid=")[1];
          }
          Axios.post("/event/checkout-success", {
            em: stepOneValue.customer_email,
            ph: stepOneValue.customer_phone,
            product: props.cartItems.map((c) => {
              return {
                product_id: c.product_id,
                name: c.name,
                qty: c.qnt,
                price: c.price.amount,
              };
            }),
            total: subTotal,
            eventName: "Purchase",
            eventNameSource: "https://beautyboothqa.com/",
            order_id: res.data.order,
            fbp,
            fbc,
          });
          /**
           * Fire the Purchase Event End
           */
          // checkout dataLayer
          GTMCheckout(props.cartItems);
          props.emptyCart();
          /**
           * fire for special coupons
           */
          if (
            stepOneValue.coupon_id != "" &&
            stepOneValue.coupon_id !== parseInt(stepOneValue.coupon_id, 10) &&
            localStorage.getItem("coupon_id") != "influencer"
          ) {
            Axios.defaults.headers.common["Authorization"] = `Bearer ${
              localStorage.getItem("auth_token") || ""
            }`;
            Axios.post("/api/coupon/mark_used", {
              id: stepOneValue.coupon_id,
              email: stepOneValue.customer_email,
            });
          }
          localStorage.removeItem("coupon");
          localStorage.removeItem("coupon_id");
          localStorage.removeItem("discount");
          localStorage.removeItem("gift");
          localStorage.removeItem("method");
          setTimeout(() => {
            //redirect
            router.push(`/checkout/order-recived/${res.data.order}`);
            // setStep(step + 1);
          }, 500);
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          onClose: function () {
            router.push("/bag");
          },
        });
      });
  };
  useEffect(() => {
    setSubTotal(
      props.cartItems.reduce(
        (acc, item) => (acc += item.qnt * item.price.amount),
        0
      ) - stepOneValue.discount
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

  useState(() => {
    setMethod(
      process.browser ? localStorage.getItem("method") || "regular" : "regular"
    );

    const script = document.createElement("script");

    script.src = "https://demo.myfatoorah.com/cardview/v1/session.js";
    script.async = true;

    document.body.appendChild(script);
  }, []);

  // check giftproduct
  useEffect(() => {
    let free = localStorage.getItem("gift");
    if (free) {
      let freeValue = JSON.parse(free);

      if (subTotal < freeValue.cart_min) {
        // not applicable
        setGiftProduct();
        localStorage.removeItem("gift");
      }
    }
  }, [subTotal]);
  return (
    <>
      <Head>
        <title>Checkout | Beautyboothqa </title>
        {/* <Script src="https://demo.myfatoorah.com/cardview/v1/session.js"></Script> */}

      </Head>
      <div className={styles.checkout_container}>
        {step === 0 && (
          <StepZero
            numberHnadler={numberHnadler}
            changeStep={changeStep}
            stepZeroSubmit={stepZeroSubmit}
            styles={styles}
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
            storePicupHandler={storePicupHandler}
            testAreaHandler={testAreaHandler}
            styles={styles}
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
            styles={styles}
          />
        )}
        {step === 3 && (
          <StepThree
            prevStep={prevStep}
            changeStep={changeStep}
            orderSubmit={orderSubmit}
            data={stepOneValue}
            shipping={shipping}
            lang={props.lang}
            giftProduct={giftProduct}
            styles={styles}
          />
        )}
        {step === 4 && <StepFour order={newOrder} styles={styles} />}

        <ToastContainer />
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
    emptyCart: () => emptyCart(dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
