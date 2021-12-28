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
function StepFour({ orderInfo, query, t }) {
  console.log(orderInfo);
  const [canSubmit, setCanSubmit] = useState(false);
  const [complete, setComplete] = useState(false);
  const router = useRouter();
  const { order } = query;

  function onSubmit(e, submitPayment) {
    e.preventDefault();
    // Initialize the payment and submit the payment token.
    axios
      .post(`/en/checkout/payment/${order}`)
      .then((res) => {
        console.log(res.data);
        if (res?.data?.data?.paymentToken) {
          // Submit the Payment
          submitPayment(res.data.data.paymentToken);
        } else {
          console.log("Error while initiating payment");
        }
      })
      .catch((error) => console.log(error));
  }
  function onPaymentComplete(success, payment) {
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
        </div>
        <div className="row justify-content-center">
          {orderInfo.transaction &&
          orderInfo.transaction.invoice_status == "Paid" ? (
            ""
          ) : (
            <>
              {" "}
              {!complete ? (
                <div className="col-lg-8 mt-4 order-md-last">
                  <EmbedWrapper
                    publicKey={"pk_live_sE77rz2BN1OQXWiInhILN3uglZogsRM44npB"}
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
              )}{" "}
            </>
          )}
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
  const orderInfo = await axios
    .get("/en/getdata/order_by_id/" + ctx.query.order)
    .then(({ data }) => data)
    .catch((error) => error.response);

  return { props: { query: ctx.query, orderInfo } };
}
export default withTranslation("common")(StepFour);
