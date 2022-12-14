import React, { useEffect, useState } from "react";
import { EmbedWrapper, CardNumber, ExpiryDate, CardCvc } from "dibsy-react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
// import axios from "../../../redux/actions/axios";
import axios from "../../../redux/actions/axios";

import { withTranslation } from "react-i18next";
const Header = dynamic(() =>
  import("../../../components/layout/partials/Header")
);
const PaymentStatus = dynamic(() =>
  import("../../../components/Pages/Checkout/PaymentStatus")
);
import styles from "../../../styles/OrderRecived.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "dibsy-react/dist/index.css";
function StepFour({ orderInfo, query, t, success }) {
  console.log(orderInfo);
  const [canSubmit, setCanSubmit] = useState(false);
  const [complete, setComplete] = useState(false);
  const [method, setMethod] = useState("creditcard");
  const [paymentFailed, setPaymentFailed] = useState(false);
  const router = useRouter();
  const { order } = query;

  useEffect(() => {
    if (success == "true") {
      axios
        .post("/en/checkout/save_payment_id", {
          order_id: orderInfo.id,
        })
        .then((res) => {
          if (orderInfo.status == "canceled") {
            setComplete(false);
            setPaymentFailed(true);
          } else {
            setComplete(true);
          }
        })
        .catch(() => {
          window.alert(
            "There are some problems with the payment id. please contact support"
          );
        });
    }
  }, []);

  function onSubmit(e, submitPayment) {
    e.preventDefault();
    // Initialize the payment and submit the payment token.
    axios
      .post(`/en/checkout/payment/${order}`, { method: method })
      .then((res) => {
        console.log(res.data.data);
        if (method == "debitcard") {
          window.open(res.data.data._links.checkout.href);
        } else {
          if (res?.data?.data?.paymentToken) {
            // Submit the Payment
            submitPayment(res.data.data.paymentToken);
          } else {
            console.log("Error while initiating payment");
          }
        }
      })
      .catch((error) => console.log(error));
  }
  function onPaymentComplete(success, payment) {
    console.log("on payment success");
    if (success) {
      axios
        .post("/en/checkout/save_payment_id", {
          order_id: orderInfo.id,
        })
        .then((res) => {
          console.log("success");
          setComplete(true);
        })
        .catch(() => {
          window.alert(
            "There are some problems with the payment id. please contact support"
          );
        });
    } else {
      window.alert(
        "There are some problems with the payment id. please contact support"
      );
    }

    // console.log(success, payment);
    // console.log(success);
  }

  const buttonHandler = (value) => {
    setMethod(value);
  };
  const radioHandler = (value) => {
    setMethod(value);
  };

  const checkStatus = () => {
    if (orderInfo.status == "pending_payment") {
      return true;
    } else if (orderInfo.status == "canceled") {
      return true;
    } else {
      return false;
    }
  };
  // useEffect(() => {
  //   if (paymentId /*&& (c_order.status == "Pending" || c_order.status == "Pending Payment")*/) {
  //     if (paymentDetails.Data?.InvoiceTransactions.length > 0) {
  //       axios.post('/en/checkout/save_payment_id', {
  //         order_id: parseInt(paymentDetails.Data.UserDefinedField),
  //         payment_id: paymentId,
  //         paid_amount: paymentDetails.Data.InvoiceStatus == "Paid" ? paymentDetails.Data.InvoiceValue : 0
  //       });
  //     }
  //   }
  // }, [paymentId]);

  return (
    <div className={styles.step_four}>
      <Head>
        <title>Order Received | Beautyboothqa </title>
      </Head>
      <div className="container">
        <div className="text-center mt-3">
          <Header text={t("CONFIRMATION")} />

          {paymentFailed && (
            <h5 className="font-weight-bold text-center mb-3" >
              <p>
                <span className="text-danger">Your Payment is Failed!</span>{" "}
                <span className="text-success">
                  But your order is confirmed.
                </span>
                <br />
                Please check your email from the Beauty booth and click Pay now
                it will be redirected to the payment link. For further
                assistance please contact our customer support team by social
                media channels / WhatsApp 77096563.
                <br />{" "}
                <span className="text-danger">
                  N.B- Please do not place the same order again with cash on
                  delivery. Even we do not receive any payment we will consider
                  this cash on delivery and send it to you.
                </span>
              </p>
            </h5>
          )}
        </div>
        <div className="row justify-content-center">
          {/* {orderInfo.transaction &&
          orderInfo.transaction.invoice_status == "Paid" ? (
            ""
          ) : (
            <>
              {success !== "true" ? (
                <>
                  {!complete ? (
                    <div className="col-lg-8 mt-4 order-md-last">
                      <button
                        onClick={() => buttonHandler("creditcard")}
                        className={
                          method == "creditcard"
                            ? `${styles.payment_method_button} ${styles.active}`
                            : `${styles.payment_method_button}`
                        }
                      >
                        Credit Card
                      </button>
                      <button
                        onClick={() => buttonHandler("debitcard")}
                        className={
                          method == "debitcard"
                            ? `${styles.payment_method_button} ${styles.active}`
                            : `${styles.payment_method_button}`
                        }
                      >
                        Debit Card
                      </button>
                      <div className="mb-3">
                        <span className="text-success">
                          Selected Payment Method: <b>{method}</b>
                        </span>
                      </div>
                      <EmbedWrapper
                        publicKey={
                          "pk_test_fPdtJaOKDGramz4bOZUKPfJ9H8RqFfhVjx1R"
                        }
                        onCanSubmitChange={(value) => {
                          setCanSubmit(value);
                        }}
                        onPaymentComplete={onPaymentComplete}
                      >
                        {({ submitPayment, isCheckoutSubmitted }) => (
                          <div className={"card-container"}>
                            <CardNumber />
                            <div className="row">
                              <div className="col">
                                <ExpiryDate />
                              </div>
                              <div className="col">
                                <CardCvc />
                              </div>
                            </div>
                            <button
                              className={"submit-button"}
                              onClick={(e) => onSubmit(e, submitPayment)}
                              disabled={!canSubmit || isCheckoutSubmitted}
                              type="submit"
                            >
                              {!isCheckoutSubmitted
                                ? "Submit Payment"
                                : "Submitting ..."}
                            </button>
                          </div>
                        )}
                      </EmbedWrapper>
                    </div>
                  ) : (
                    <div className="col-lg-8 mt-4 order-md-last">
                      {" "}
                      <h2 className="text-center text-success">
                        Payment Completed !{" "}
                      </h2>
                    </div>
                  )}
                </>
              ) : (
                <div className="col-lg-8 mt-4 order-md-last">
                  {" "}
                  <h2 className="text-center text-success">
                    Payment Completed !{" "}
                  </h2>
                </div>
              )}
            </>
          )} */}

          {/* new design */}
          {orderInfo.payment_method != "Cash On Delivery" &&
            orderInfo.payment_method != "Card On Delivery" && (
              <>
                {checkStatus() && complete == false ? (
                  <div className="col-lg-8 mt-4 order-md-last">
                    <div className={styles.payment_input}>
                      <EmbedWrapper
                        publicKey={
                          "pk_live_sE77rz2BN1OQXWiInhILN3uglZogsRM44npB"
                        }
                        onCanSubmitChange={(value) => {
                          setCanSubmit(value);
                        }}
                        onPaymentComplete={onPaymentComplete}
                      >
                        {({ submitPayment, isCheckoutSubmitted }) => (
                          <>
                            {" "}
                            <div className={styles.payment_row}>
                              <div className={styles.heading}>
                                <div className={styles.left}>
                                  <input
                                    type="radio"
                                    value="creditcard"
                                    name="option"
                                    id="cr"
                                    onChange={() => radioHandler("creditcard")}
                                    checked={
                                      method == "creditcard" ? true : false
                                    }
                                  />
                                  <label htmlFor="cr">Credit Card</label>
                                </div>
                                <div className={styles.right}>
                                  <img src="/payment/amex.svg" />
                                  <img src="/payment/mc.svg" />
                                  <img src="/payment/visa.svg" />
                                </div>
                              </div>
                              <div className={styles.payment_body}>
                                {method == "creditcard" && (
                                  <div className={"card-container"}>
                                    <CardNumber />
                                    <div className="row">
                                      <div className="col">
                                        <ExpiryDate />
                                      </div>
                                      <div className="col">
                                        <CardCvc />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div
                              className={`${styles.payment_row} ${styles.no_border}`}
                            >
                              <div className={styles.heading}>
                                <div className={styles.left}>
                                  <input
                                    type="radio"
                                    value="debitcard"
                                    name="option"
                                    id="db"
                                    onChange={() => radioHandler("debitcard")}
                                    checked={
                                      method == "debitcard" ? true : false
                                    }
                                  />
                                  <label htmlFor="db">Debit Card</label>
                                </div>
                                <div className={styles.right}>
                                  {" "}
                                  <img src="/payment/naps.svg" />{" "}
                                </div>
                              </div>
                            </div>
                            {/* submit button */}
                            {method == "creditcard" ? (
                              <button
                                className={"submit-button"}
                                onClick={(e) => onSubmit(e, submitPayment)}
                                disabled={!canSubmit || isCheckoutSubmitted}
                                type="submit"
                              >
                                {!isCheckoutSubmitted
                                  ? "Submit Payment"
                                  : "Submitting ..."}
                              </button>
                            ) : (
                              <button
                                onClick={(e) => onSubmit(e, submitPayment)}
                                className={"submit-button"}
                              >
                                Submit Payment
                              </button>
                            )}
                          </>
                        )}
                      </EmbedWrapper>
                    </div>
                  </div>
                ) :<> 
                {
                  orderInfo.is_paid == "Paid" &&  (
                    <div className="col-lg-8 mt-4 order-md-last">
                      <div className="col-lg-8 mt-4 order-md-last">
                        <h2 className="text-center text-success">
                          Payment Completed!
                        </h2>
                      </div>
                    </div>
                  )}
                {
                  orderInfo.is_paid == "failed" &&  (
                    <div className="col-lg-8 mt-4 order-md-last">
                      <div className="col-lg-8 mt-4 order-md-last">
                        <h2 className="text-center text-warning">
                          Payment Failed!
                        </h2>
                      </div>
                    </div>
                  )}
                  </>}
              </>
            )}
          {/* end new design */}

          <div className="col-lg-4">
            <div className={styles.circle}>
              <FontAwesomeIcon icon={faCheck} className="fa-2x text-success" />
            </div>
            <p className={styles.greet}>
              {t("Thank you for shopping with us")}
            </p>
            <p className={styles.greet}>
              {t("Your ORDER ID is ")}
              {order}{" "}
            </p>
            <p className={styles.greet}>
              {t("Order will be processed with 24-72 hours after confirmation")}
            </p>
            <div className={styles.continue_container}>
              <Link href="/">
                <a className={styles.back_shopping}>{t("Back To Shopping")}</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(ctx) {
  const { success } = ctx.query;

  const orderInfo = await axios
    .get("/en/getdata/order_by_id/" + ctx.query.order)
    .then(({ data }) => data)
    .catch((error) => console.log(error));

  return {
    props: {
      query: ctx.query,
      orderInfo,
      success: success ? success : "false",
    },
  };
}
export default withTranslation("common")(StepFour);
