import React, { useState, useEffect } from "react";
import ProgressBar from "../../atom/ProgressBar";
import { withTranslation } from "../../../i18n";
import Header from "../../layout/partials/Header";
// import Axios from "axios";
// import Modal from "react-bootstrap/Modal";

function StepTwo(props) {
  const { t, styles, val } = props;
  const submitHandler = () => {
    props.changeStep();
  };
  // const coupon_modal = React.createRef();

  // const [show, setShow] = useState(false);
  // const [flag,setFlag] = useState(null);
  const [coupon, setCoupon] = useState(props.val.coupon);
  const [adminAccount, setAdminAccount] = useState();
  // const [paymentURL, setPaymentURL] = useState(null);
  // const [auth, setAuth] = useState({isAuthenticated:null,user:null});

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  useEffect(() => {
    setAdminAccount(
      window.localStorage.getItem("auth_token") &&
      !JSON.parse(window.localStorage.getItem("user")).isCustomer
    );

    window.scrollTo(0, 0);
    // Axios.get("/v2/InitiateSession").then(({ data }) => {
    //   if (data.IsSuccess) {
    //     var config = {
    //       countryCode: data.Data.CountryCode, // Here, add your Country Code you receive from InitiateSession Endpoint.
    //       sessionId: data.Data.SessionId, // Here you add the "SessionId" you receive from InitiateSession Endpoint.
    //       cardViewId: "card-element",
    //     };
    //     setTimeout(function () {
    //       myFatoorah.init(config);
    //     }, 800);

    //   } else {
    //     window.alert("Payment Initiate Failed")
    //   }
    // }).catch(function (error) {
    //   console.error(error);
    // });


  }, []);

  // useEffect(() => {
  //   if (props.auth.isAuthenticated) {
  //     setAuth({ isAuthenticated: props.auth.isAuthenticated, user: JSON.parse(localStorage.getItem("user")) });
  //   }
  // }, [props.auth]);

  // useEffect(() =>{
  //   if(props.val.coupon && props.val.coupon !== ""){
  //     setFlag(true);
  //   }
  // },[props.val.coupon]);

  // useEffect(() =>{
  //   if(props.msg){
  //     setShow(true);
  //   }
  // },[props.msg]);

  const deliveryHandler = (e) => {
    // if (e.target.value == "op") {
    //   document.getElementById("card-element").classList.remove('d-none');
    // } else {
    //   document.getElementById("card-element").classList.add('d-none');
    // }
    props.deliviryHandler(e.target.value);
  };

  // const applyCoupon = (e) => {
  //   e.preventDefault();
  //   if(coupon !== ""){
  //     props.couponHandler(coupon);
  //   }
  // }
  // const myFatoorahSubmit = () => {
  //   myFatoorah.submit()
  //     // On success
  //     .then(function (response) {
  //       // Here you need to pass session id to you backend here
  //       var sessionId = response.SessionId;
  //       var cardBrand = response.CardBrand;
  //       Axios.post('/v2/ExecutePayment', {
  //         SessionId: sessionId,
  //         InvoiceValue: 10,
  //         CustomerName: val.customer_first_name,
  //         DisplayCurrencyIso: "KWD",
  //         MobileCountryCode: val.country_code,
  //         CustomerMobile: val.customer_phone,
  //         CustomerEmail: val.customer_email,
  //         CallBackUrl: "https://beautybooth.shop/checkout",
  //         ErrorUrl: "https://beautybooth.shop/checkout",
  //         Language: "en",
  //         CustomerReference: "noshipping-nosupplier",
  //         CustomerAddress: {
  //           Block: "string",
  //           Street: "string",
  //           HouseBuildingNo: "string",
  //           AddressInstructions: "string"
  //         },
  //         InvoiceItems: [
  //           {
  //             ItemName: "item name",
  //             Quantity: 10,
  //             UnitPrice: 1
  //           }
  //         ]
  //       }).then(({ data }) => {
  //         if (data.IsSuccess) {
  //           setPaymentURL(data.Data.PaymentURL);
  //           if (data.Data.PaymentURL) {
  //             document.getElementById("paymentURL").classList.remove("d-none");
  //           } else {
  //             document.getElementById("paymentURL").classList.add("d-none");
  //           }
  //         } else {
  //           document.getElementById("paymentURL").classList.add("d-none");
  //         }
  //       })
  //     })
  //     // In case of errors
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  return (
    <div className={styles.step_two}>
      <div className="container">
        {/* <HeaderComponent text={t("PAYMENT METHOD")} /> */}
        <div className="text-center">
          <Header text={t("PAYMENT METHOD")} />
        </div>
        <ProgressBar styles={styles} active={2} />
        <div className={styles.details}>
          <span className={styles.question}>
            {t("How do you want to pay your order?")}
          </span>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-12">
              <div className={`${styles.payment_group} mt-4`}>
                <div className={styles.wrap}>
                  <label htmlFor="cod">{t("CASH ON DELIVERY")}
                    <input
                      defaultChecked={props.payment_method == "cod" ? true : false}
                      type="radio"
                      name="payment_method"
                      onChange={deliveryHandler}
                      value="cod"
                      id="cod"
                    /></label>
                </div>
              </div>
              {/* <div className={`${styles.payment_group} mt-4`}>
                <div className={styles.wrap}>
                  <label htmlFor="card_od">{t("CARD ON DELIVERY")}
                    <input
                      defaultChecked={
                        props.payment_method == "card_od" ? true : false
                      }
                      type="radio"
                      onChange={deliveryHandler}
                      name="payment_method"
                      value="card_od"
                      id="card_od"
                    /></label>
                </div>
              </div> */}
              <div className={`${styles.payment_group} mt-4`}>
                <div className={styles.wrap}>
                  <label htmlFor="op">{t("ONLINE PAYMENT")}
                    <input
                      defaultChecked={props.payment_method == "op" ? true : false}
                      type="radio"
                      onChange={deliveryHandler}
                      name="payment_method"
                      value="op"
                      id="op"
                    /></label>
                </div>
              </div>
            </div>
            {/* <div className="mt-4 col-lg-8 col-md-12">
              <div id="card-element" className="d-none">
                <i>Test API supports only Kuwait so do not add any cards</i>
                <button onClick={myFatoorahSubmit}>Verify</button>
              </div>
              <div className="d-none mt-4" id="paymentURL">
                <i>Please complete your payment from the url. You&apos;ll be redirected and after that nothing developed yet</i><hr />
                <a className="btn-link" target="_blank" href={paymentURL} rel="noreferrer">
                  {paymentURL}
                </a>
              </div>
              </div> */}
          </div>
          {/* {auth.isAuthenticated && auth.user.isCustomer ? ( */}
          {/* <div className="payment_group mt-4">
              <div className="input-group">
              <input
              type="text"
                  name="coupon"
                  className="form-control"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value.toUpperCase())}
                  placeholder="Enter Coupon Code Here"
                  maxLength={12}
                  id="coupon"
                  disabled={flag}
                />
                <div className="input-group-append">
                  <button className="btn btn-flat btn-outline-primary" onClick={applyCoupon} 
                  disabled={flag}>Apply</button>
                </div>
              </div>
            </div> */}
          {/* ) : ""} */}

          <div className={` ${styles.next_btn_wrap} mt-5 mb-5`}>
            <button onClick={() => props.prevStep()} className="next_btn">
              {t("Previous")}
            </button>
            <button onClick={submitHandler} className="next_btn">
              {t("Next")}
            </button>
          </div>
        </div>
      </div>
      {/* <Modal show={show} size="sm" centered ref={coupon_modal}>
          <Modal.Header>
            <h6>Message</h6>
          </Modal.Header>
          <Modal.Body>
            {props.msg}<br/>
            {props.val.discount  > 0 && `You've recieved QAR ${props.val.discount} discount`}
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShow(false)}
            >
              Close
            </button>
          </Modal.Footer>
        </Modal> */}
    </div>
  );
}

export default withTranslation("common")(StepTwo);
