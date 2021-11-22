import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router'
// import axios from "../../../redux/actions/axios";
import Axios from "axios";
import axios from "../../../redux/actions/axios";

import { withTranslation } from "react-i18next";
const Header = dynamic(() => import("../../../components/layout/partials/Header"));
const PaymentStatus = dynamic(() => import("../../../components/Pages/Checkout/PaymentStatus"));
import styles from "../../../styles/OrderRecived.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function StepFour({ c_order, t, paymentDetails, sessionDetails, query }) {
  const router = useRouter();
  const { order, paymentId } = query;
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState();
  const [paymentURL, setPaymentURL] = useState(null);
  const [cardError, setCardError] = useState(null);
  // const [paymentDetails, setPaymentDetails] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    setOrderId(order);
    // if (process.browser) {
    //   const script = document.createElement("script");
    //   if (process.env.NODE_ENV == "development") {
    //     script.src = "https://demo.myfatoorah.com/cardview/v1/session.js";
    //   } else {
    //     script.src = "https://portal.myfatoorah.com/cardview/v1/session.js";
    //   }
    //   script.async = false;

    //   document.body.appendChild(script);
    //   if (window.location.hostname != "localhost") {
    //     setHostName('https://' + window.location.host);
    //   }
    // }
    if (c_order.transaction?.payment_id && !router.query.paymentId) {
      router.push(`${router.asPath}?paymentId=${c_order.transaction.payment_id}`);
    }
    if (c_order.transaction?.payment_method) {
      setPaymentURL(c_order.transaction?.payment_method);

      document.getElementById("paymentURL").classList.remove("d-none");
    }
  }, [router]);
  useEffect(() => {
    if (c_order.payment_method == "Card Payment" && !paymentId) {
      if (sessionDetails.IsSuccess) {
        var config = {
          countryCode: sessionDetails.Data.CountryCode, // Here, add your Country Code you receive from InitiateSession Endpoint.
          sessionId: sessionDetails.Data.SessionId, // Here you add the "SessionId" you receive from InitiateSession Endpoint.
          cardViewId: "card-element",
        };
        setTimeout(function () {
          myFatoorah.init(config);
          document.getElementById("paymentView").classList.remove("d-none");
        }, 1000);

      } else {
        window.alert("Payment Initiate Failed")
      }
    }
  }, [order]);
  useEffect(() => {
    if (c_order.payment_method == "Card Payment" && paymentDetails && paymentDetails.Data?.InvoiceTransactions[0]?.TransactionStatus == "Failed") {
      if (sessionDetails.IsSuccess) {
        var config = {
          countryCode: sessionDetails.Data.CountryCode, // Here, add your Country Code you receive from InitiateSession Endpoint.
          sessionId: sessionDetails.Data.SessionId, // Here you add the "SessionId" you receive from InitiateSession Endpoint.
          cardViewId: "card-element",
        };
        setTimeout(function () {
          myFatoorah.init(config);
          document.getElementById("paymentView").classList.remove("d-none");
        }, 1000);

      } else {
        window.alert("Payment Initiate Failed")
      }
    }
  }, [paymentDetails]);

  useEffect(() => {
    if (paymentId) {
      if (paymentDetails.Data?.InvoiceTransactions.length > 0) {
        axios.post('/en/checkout/save_payment_id', {
          order_id: parseInt(paymentDetails.Data.UserDefinedField),
          payment_id: paymentId,
          paid_amount: paymentDetails.Data.InvoiceStatus == "Paid" ? paymentDetails.Data.InvoiceValue : 0
        });
      }
    }
  }, [paymentId]);

  const myFatoorahSubmit = () => {
    document.getElementById("myFatoorahSubmitBtn").classList.add("disabled");
    myFatoorah
      .submit()
      .then(function (response) {
        // On success
        // Here you need to pass session id to you backend here
        var sessionId = response.SessionId;
        var cardBrand = response.CardBrand;

        Axios.post("/v2/ExecutePayment", {
          SessionId: sessionId,
          InvoiceValue: (c_order.total.amount - c_order.discount.amount),
          CustomerName: c_order.customer_first_name,
          DisplayCurrencyIso: "QAR",
          MobileCountryCode: c_order.country_code,
          CustomerMobile: c_order.customer_phone,
          CustomerEmail: c_order.customer_email,
          CallBackUrl: "https://beautyboothqa.com/checkout/order-received/" + query.order,
          ErrorUrl: "https://beautyboothqa.com/checkout/order-received/" + query.order,
          Language: "en",
          CustomerReference: "noshipping-nosupplier",
          CustomerAddress: {
            BillingCity: c_order.billing_city,
            BillingState: c_order.billing_state,
            Additional: c_order.billing_address_2,
            AddressInstructions: c_order.billing_address_1,
          },
          UserDefinedField: c_order.id,
        }).then(({ data }) => {
          if (data.IsSuccess) {
            setPaymentURL(data.Data.PaymentURL);
            axios.post('/en/checkout/save_payment_id', {
              order_id: c_order.id,
              transaction_id: data.Data.InvoiceId,
              payment_method: data.Data.PaymentURL,
              paid_amount: 0
            })
              .catch(() => {
                window.alert("There are some problems with the payment id. please contact support");
              });

            if (data.Data.PaymentURL) {
              document.getElementById("paymentURL").classList.remove("d-none");

              window.open(data.Data.PaymentURL);
            } else {
              document.getElementById("paymentURL").classList.add("d-none");
            }
          } else {
            document.getElementById("paymentURL").classList.add("d-none");
          }
        })
          .catch(() => {
            window.alert("There are some problems with the payment id. please contact support");
          });
      })
      .catch(function (error) {
        // In case of errors
        setCardError(error);
      });
    setTimeout(function(){
      document.getElementById("myFatoorahSubmitBtn").classList.remove("disabled");
    }, 5000);
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
            <div className={styles.circle}>
              <FontAwesomeIcon icon={faCheck} className="fa-2x text-success" />
            </div>
            <p className={styles.greet}>
              {t("Thank you for shopping with us")}
            </p>
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
            paymentId ? <>{paymentDetails.Data && <PaymentStatus {...paymentDetails}></PaymentStatus>}</> :
              <div className="col-lg-7 d-none" id="paymentView">
                <div id="card-element" className="my-2">
                </div>
                <button onClick={() => myFatoorahSubmit()} className="btn btn-info" id="myFatoorahSubmitBtn">Verify &amp; Proceed Next</button>
              </div>
          }

          <div className="d-none mt-3 col-lg-12" id="paymentURL">
            <div className={styles.payment_link_info}>
              Please complete your payment from the url. You&apos;ll be
              redirected, after that payment will complete and we&apos;ll start processing your order.
              The link will be valid for 30 minutes after that provide your card info again.
            </div>
            <a
              className="btn-link"
              target="_blank"
              href={paymentURL}
              rel="noreferrer"
            >
              {paymentURL}
            </a>
            <hr />
          </div>
          <div className='col-lg-4'>
            <h5 className={cardError ? 'mt-4 text-danger' : 'mt-4'}>{cardError}</h5>
          </div>
          {
            (paymentDetails && (paymentDetails.Data || paymentDetails.IsSuccess == false) && paymentDetails.Data?.InvoiceTransactions[0]?.TransactionStatus == "Failed") &&

            <>
              <div className="col-lg-8 d-none" id="paymentView">
                <div id="card-element" className="my-2">
                </div>
                <button onClick={() => myFatoorahSubmit()} className="btn btn-info" id="myFatoorahSubmitBtn">Verify &amp; Proceed Next</button>
              </div>
            </>
          }

        </div>

      </div>
  {
    (process.env.NODE_ENV == "development") ? (<script dangerouslySetInnerHTML={{
      __html:`const script = document.createElement("script");script.src = "https://demo.myfatoorah.com/cardview/v1/session.js";
      script.async = true;document.body.appendChild(script);`
    }}/>):
      (<script dangerouslySetInnerHTML={{
        __html:`const script = document.createElement("script");script.src = "https://portal.myfatoorah.com/cardview/v1/session.js";
        script.async = true;document.body.appendChild(script);`
      }}/>)
  }
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps(ctx) {
  const token = process.env.NODE_ENV == "production" ? process.env.PGW_PROD : process.env.PGW_DEV;
  const fatoorahEndpoint = process.env.NODE_ENV == "production" ? "https://api.myfatoorah.com" : "https://apitest.myfatoorah.com";

  const order = await axios.get("/en/getdata/order_by_id/" + ctx.query.order)
    .then(({ data }) => (data))
    .catch(error => (error.response));

  let paymentDetails = null;
  if (ctx.query.paymentId) {
    const options = {
      method: 'POST',
      url: fatoorahEndpoint + '/v2/GetPaymentStatus',
      data: {
        Key: ctx.query.paymentId,
        KeyType: "paymentId"
      },
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    };
    paymentDetails = await Axios.request(options).then(response => {
      return response.data;
    }).catch(err => {
      return { ...err.response.data };
    });
  }

  let sessionDetails = null;

  if (order.payment_method == "Card Payment" && !ctx.query.paymentId) {
    const options = {
      method: 'POST',
      url: fatoorahEndpoint + '/v2/InitiateSession',
      data: { "countryCode": "QAT" },
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    };
    sessionDetails = await Axios.request(options).then(response => {
      return response.data;
    }).catch(err => {
      return { ...err.response.data };
    });
  } else if (order.payment_method == "Card Payment" && (paymentDetails.Data && paymentDetails.Data.InvoiceTransactions[0].TransactionStatus == "Failed")) {
    const options = {
      method: 'POST',
      url: fatoorahEndpoint + '/v2/InitiateSession',
      data: { "countryCode": "QAT" },
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer ' + token
      }
    };
    sessionDetails = await Axios.request(options).then(response => {
      return response.data;
    }).catch(err => {
      return { ...err.response.data };
    });
  }

  return { props: { paymentDetails, sessionDetails, c_order: order, query: ctx.query } };
}
export default withTranslation("common")(StepFour);
