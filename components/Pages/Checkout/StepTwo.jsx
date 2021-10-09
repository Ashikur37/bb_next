import React, { useState, useEffect } from "react";
import ProgressBar from "../../atom/ProgressBar";
import { i18n, withTranslation } from "../../../i18n";
import Header from "../../layout/partials/Header";
import Axios from "axios";
// import Modal from "react-bootstrap/Modal";

function StepTwo(props) {
  const { t, styles } = props;
  const submitHandler = () => {
    props.changeStep();
  };
  // const coupon_modal = React.createRef();

  // const [show, setShow] = useState(false);
  // const [flag,setFlag] = useState(null);
  const [coupon, setCoupon] = useState(props.val.coupon);
  const [adminAccount, setAdminAccount] = useState();
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
    // const script = document.createElement("script");

    // script.src = "https://demo.myfatoorah.com/cardview/v1/session.js";
    // script.async = true;

    // document.body.appendChild(script);

    const options = {
      method: 'POST',
      url: process.env.pgw['development']+'v2/InitiateSession',
      data:{},
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer rLtt6JWvbUHDDhsZnfpAhpYk4dxYDQkbcPTyGaKp2TYqQgG7FGZ5Th_WD53Oq8Ebz6A53njUoo1w3pjU1D4vs_ZMqFiz_j0urb_BH9Oq9VZoKFoJEDAbRZepGcQanImyYrry7Kt6MnMdgfG5jn4HngWoRdKduNNyP4kzcp3mRv7x00ahkm9LAK7ZRieg7k1PDAnBIOG3EyVSJ5kK4WLMvYr7sCwHbHcu4A5WwelxYK0GMJy37bNAarSJDFQsJ2ZvJjvMDmfWwDVFEVe_5tOomfVNt6bOg9mexbGjMrnHBnKnZR1vQbBtQieDlQepzTZMuQrSuKn-t5XZM7V6fCW7oP-uXGX-sMOajeX65JOf6XVpk29DP6ro8WTAflCDANC193yof8-f5_EYY-3hXhJj7RBXmizDpneEQDSaSz5sFk0sV5qPcARJ9zGG73vuGFyenjPPmtDtXtpx35A-BVcOSBYVIWe9kndG3nclfefjKEuZ3m4jL9Gg1h2JBvmXSMYiZtp9MR5I6pvbvylU_PP5xJFSjVTIz7IQSjcVGO41npnwIxRXNRxFOdIUHn0tjQ-7LwvEcTXyPsHXcMD8WtgBh-wxR8aKX7WPSsT1O8d8reb2aR7K3rkV3K82K_0OgawImEpwSvp9MNKynEAJQS6ZHe_J_l77652xwPNxMRTMASk1ZsJL'
      }
    };
    
    Axios.request(options).then(function (response) {
    }).catch(function (error) {
      console.error(error);
    });
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
    if (e.target.value == "op") {
          document.getElementById("card-element").classList.remove('d-none');
          var config = {
            countryCode: "KWT", // Here, add your Country Code you receive from InitiateSession Endpoint.
            // response.data.Data.CountryCode ||
            sessionId: "e4359b89-c328-ec11-bae9-000d3aaca798", // Here you add the "SessionId" you receive from InitiateSession Endpoint.
            // response.data.Data.SessionId ||
            cardViewId: "card-element",
          };
          myFatoorah.init(config);
    } else {
      document.getElementById("card-element").classList.add('d-none');
    }
    props.deliviryHandler(e.target.value);
  };

  // const applyCoupon = (e) => {
  //   e.preventDefault();
  //   if(coupon !== ""){
  //     props.couponHandler(coupon);
  //   }
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
          <div className={`${styles.payment_group} mt-4`}>
            <div className={styles.wrap}>
              <label htmlFor="cod">{t("CASH ON DELIVERY")}</label>
              <input
                defaultChecked={props.payment_method == "cod" ? true : false}
                type="radio"
                name="payment_method"
                onChange={deliveryHandler}
                value="cod"
                id="cod"
              />
            </div>
          </div>
          <div className={`${styles.payment_group} mt-4`}>
            <div className={styles.wrap}>
              <label htmlFor="card_od">{t("CARD ON DELIVERY")}</label>
              <input
                defaultChecked={
                  props.payment_method == "card_od" ? true : false
                }
                type="radio"
                onChange={deliveryHandler}
                name="payment_method"
                value="card_od"
                id="card_od"
              />
            </div>
          </div>
          {/* {adminAccount && ( */}
          <div className={`${styles.payment_group} mt-4`}>
            <div className={styles.wrap}>
              <label htmlFor="op">{t("ONLINE PAYMENT")}</label>
              <input
                defaultChecked={props.payment_method == "op" ? true : false}
                type="radio"
                onChange={deliveryHandler}
                name="payment_method"
                value="op"
                id="op"
              />
            </div>
          </div>
          <div id="card-element" className="d-none py-3">
            <small>Test API supports only Kuwait so do not add any cards</small>
            <button onClick="myFatoorahSubmit">Verify</button>
          </div>
          {/* )} */}
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
