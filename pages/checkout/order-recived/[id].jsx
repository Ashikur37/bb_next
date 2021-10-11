import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
// import axios from "../../../redux/actions/axios";
import Axios from "axios";

import { withTranslation } from "react-i18next";
import HeaderComponent from "../../../components/atom/HeaderComponent";
import Header from "../../../components/layout/partials/Header";
import styles from "../../../styles/OrderRecived.module.scss";
function StepFour({ order, t }) {
  const router = useRouter();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState();
  const [paymentURL, setPaymentURL] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    setOrderId(router.query.id);
    if (process.browser) {

      const script = document.createElement("script");

      script.src = "https://demo.myfatoorah.com/cardview/v1/session.js";
      script.async = true;

      document.body.appendChild(script);
    }
  }, []);
  useEffect(() => {
    
    Axios.get("/v2/InitiateSession").then(({ data }) => {
      if (data.IsSuccess) {
        var config = {
          countryCode: data.Data.CountryCode, // Here, add your Country Code you receive from InitiateSession Endpoint.
          sessionId: data.Data.SessionId, // Here you add the "SessionId" you receive from InitiateSession Endpoint.
          cardViewId: "card-element",
        };
        setTimeout(function () {
          myFatoorah.init(config);
        }, 800);

      } else {
        window.alert("Payment Initiate Failed")
      }
    }).catch(function (error) {
      console.error(error);
    });


  }, []);
  const myFatoorahSubmit = () => {
    myFatoorah
      .submit()
      // On success
      .then(function (response) {
        // Here you need to pass session id to you backend here
        var sessionId = response.SessionId;
        var cardBrand = response.CardBrand;
        Axios.post("/v2/ExecutePayment", {
          SessionId: sessionId,
          InvoiceValue: 10,
          CustomerName: val.customer_first_name,
          DisplayCurrencyIso: "KWD",
          MobileCountryCode: val.country_code,
          CustomerMobile: val.customer_phone,
          CustomerEmail: val.customer_email,
          CallBackUrl: "https://beautybooth.shop/checkout",
          ErrorUrl: "https://beautybooth.shop/checkout",
          Language: "en",
          CustomerReference: "noshipping-nosupplier",
          CustomerAddress: {
            Block: "string",
            Street: "string",
            HouseBuildingNo: "string",
            AddressInstructions: "string",
          },
          InvoiceItems: [
            {
              ItemName: "item name",
              Quantity: 10,
              UnitPrice: 1,
            },
          ],
        }).then(({ data }) => {
          if (data.IsSuccess) {
            setPaymentURL(data.Data.PaymentURL);
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
      // In case of errors
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={styles.step_four}>
      <div className="container">
        <div className="text-center mt-3">
          <Header text={t("CONFIRMATION")} />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-5">
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
          <div className="col-lg-7">
            <div id="card-element" className="">
              <i>Test API supports only Kuwait so do not add any cards</i>
              <button onClick={myFatoorahSubmit}>Verify</button>
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default withTranslation("common")(StepFour);
