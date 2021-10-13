import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
// import axios from "../../../redux/actions/axios";
import Axios from "axios";
import axios from "../../../redux/actions/axios";

import { withTranslation } from "react-i18next";
const Header = dynamic(() => import("../../../components/layout/partials/Header"));
const PaymentStatus = dynamic(() => import("../../../components/Pages/Checkout/PaymentStatus"));
import styles from "../../../styles/OrderRecived.module.scss";
function StepFour({ order, t }) {
  const router = useRouter();
  const [myOrder, setMyOrder] = useState(null);
  const [hostName, setHostName] = useState("http://localhost:3000");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState();
  const [paymentURL, setPaymentURL] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    setOrderId(router.query.order);
    if (process.browser) {
      const script = document.createElement("script");
      if (process.env.NODE_ENV == "development") {
        script.src = "https://demo.myfatoorah.com/cardview/v1/session.js";
      } else {
        script.src = "https://portal.myfatoorah.com/cardview/v1/session.js";
      }
      script.async = true;

      document.body.appendChild(script);
      if (window.location.hostname != "localhost") {
        setHostName('https://' + window.location.host);
      }
    }
  }, []);
  useEffect(() => {
    if (!myOrder) {
      axios.get("/en/getdata/order_by_id/" + router.query.order)
        .then(({ data }) => {
          setMyOrder(data);
          if (data.payment_method == "Card Payment") {
            // document.getElementById("paymentView").classList.remove("d-none");
          }

          if (data.payment_method == "Card Payment" && !router.query.paymentId) {
            Axios.get("/v2/InitiateSession").then(({ data }) => {
              if (data.IsSuccess) {
                var config = {
                  countryCode: data.Data.CountryCode, // Here, add your Country Code you receive from InitiateSession Endpoint.
                  sessionId: data.Data.SessionId, // Here you add the "SessionId" you receive from InitiateSession Endpoint.
                  cardViewId: "card-element",
                };
                setTimeout(function () {
                  myFatoorah.init(config);
                  document.getElementById("paymentView").classList.remove("d-none");
                }, 1000);

              } else {
                window.alert("Payment Initiate Failed")
              }
            }).catch(function (error) {
              console.error(error);
            });
          }
          if (router.query.paymentId) {
            Axios.post("/v2/GetPaymentStatus", {
              Key: router.query.paymentId,
              KeyType: "paymentId"
            }).then(({ data }) => {
              if (data.Data.InvoiceTransactions.length > 0) {
                setPaymentDetails(data);
                // TODO: api call to change payment status
                axios.post('/en/checkout/save_payment_id', {
                  order_id: parseInt(data.Data.UserDefinedField),
                  payment_id: router.query.paymentId,
                });
              }
            })
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [router.query.order]);


  const myFatoorahSubmit = () => {
    myFatoorah
      .submit()
      .then(function (response) {
        // On success
        // Here you need to pass session id to you backend here
        var sessionId = response.SessionId;
        var cardBrand = response.CardBrand;
        console.log(response);
        Axios.post("/v2/ExecutePayment", {
          SessionId: sessionId,
          InvoiceValue: myOrder.total.amount,
          CustomerName: myOrder.customer_first_name,
          DisplayCurrencyIso: "QAT",
          MobileCountryCode: myOrder.country_code,
          CustomerMobile: myOrder.customer_phone,
          CustomerEmail: myOrder.customer_email,
          CallBackUrl: "https://beautybooth.shop" + "/checkout/order-recived/" + router.query.order,
          ErrorUrl: "https://beautybooth.shop" + "/checkout/order-recived/" + router.query.order,
          Language: "en",
          CustomerReference: "noshipping-nosupplier",
          CustomerAddress: {
            BillingCity: myOrder.billing_city,
            BillingState: myOrder.billing_state,
            Additional: myOrder.billing_address_2,
            AddressInstructions: myOrder.billing_address_1,
          },
          UserDefinedField:  myOrder.id, 
        }).then(({ data }) => {
          if (data.IsSuccess) {
            setPaymentURL(data.Data.PaymentURL);
            axios.post('/en/checkout/save_payment_id', {
              order_id: myOrder.id,
              transaction_id: data.Data.InvoiceId,
              payment_method: data.Data.PaymentURL,
            });
            if (data.Data.PaymentURL) {
              document.getElementById("paymentURL").classList.remove("d-none");
            } else {
              document.getElementById("paymentURL").classList.add("d-none");
            }
          } else {
            document.getElementById("paymentURL").classList.add("d-none");
          }
        });
      })
      .catch(function (error) {
        // In case of errors
        console.log(error);
      });
  };

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
          <div className="col-lg-4">
            {/* <div className="circle">
              <FontAwesomeIcon icon={faCheck} />
            </div> */}
            <p className={styles.greet}>
              {t("Thank you for shopping with us")}
            </p>
            {/* <p className="greet">Your ORDER ID is {order}</p> */}
            <p className={styles.greet}>
              {t("Your ORDER ID is ")}
              {orderId}{" "}
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
          {
            router.query.paymentId ? <>{paymentDetails && <PaymentStatus {...paymentDetails}></PaymentStatus>}</> :
              <div className="col-lg-7 d-none" id="paymentView">
                <div id="card-element" className="my-2">
                  <i>Test API supports only Kuwait so do not add any cards</i>
                </div>
                <button onClick={()=>myFatoorahSubmit()} className="btn btn-info">Verify &amp; Proceed Next</button>
                <div className="d-none mt-4" id="paymentURL">
                  <i>
                    Please complete your payment from the url. You&apos;ll be
                    redirected and after that nothing developed yet
                  </i>
                  <hr />
                  <a
                    className="btn-link"
                    target="_blank"
                    href={paymentURL}
                    rel="noreferrer"
                  >
                    {paymentURL}
                  </a>
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  );
}

export default withTranslation("common")(StepFour);
