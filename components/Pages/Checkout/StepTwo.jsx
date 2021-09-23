import React, { useState, useEffect } from "react";
import HeaderComponent from "../../atom/HeaderComponent";
import ProgressBar from "../../atom/ProgressBar";
import { i18n, withTranslation } from "../../../i18n";
import Header from "../../layout/partials/Header";
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
          {adminAccount && (
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
          )}
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
