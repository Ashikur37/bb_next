import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-number-input";
import { parsePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import OtpInput from "react-otp-input";
import Modal from "react-bootstrap/Modal";
// import "react-phone-number-input/style.css";

import axios from "../../../redux/actions/axios";
function RegisterStepOne({ t,changeStep, phone }) {
  const [value, setValue] = useState(
    phone ? "+" + JSON.parse(phone).country_code + JSON.parse(phone).phone : ""
  );
  const [show, setShow] = useState(false);
  const [otp_id, setOtpId] = useState("");
  const [otp, setOtp] = useState("");

  const otp_modal = React.createRef();
  const valueHandler = (value) => {
    setValue(value);
  };

  //submit number
  const numberInput = () => {
    const phone = parsePhoneNumber(value);

    axios
      .post("en/checkout/verify/check-number-api", {
        cell_no: phone.nationalNumber,
        country_code: phone.countryCallingCode,
      })
      .then((res) => {
        localStorage.setItem(
          "number",
          JSON.stringify({
            phone: phone.nationalNumber,
            country_code: phone.countryCallingCode,
          })
        );
        if (res.data === false) {
          setShow(true);
          axios
            .post("en/checkout/verify/now", {
              cell_no: phone.nationalNumber,
              country_code: phone.countryCallingCode,
            })
            .then((res) => {
              if (res.data === 0) {
                setShow(false);
              } else {
                setOtpId(res.data);
              }
            });
        } else {
          //next step
          changeStep();
        }
      });
    // numberHnadler(phone);
  };

  const proceedVerify = () => {
    if (show) {
      const phone = parsePhoneNumber(value);
      axios
        .post("en/checkout/verify/final", {
          cell_no: phone.nationalNumber,
          country_code: "+" + phone.countryCallingCode,
          otp: otp,
          id: otp_id,
        })
        .then((res) => {
          if (res.data === "success") {
            setShow(false);
            //next step
            changeStep();
          } else {
            numberInput();
          }
        });
    }
  };
  return (
    <div className="register__step__one">
      <h4 className="text-center mt-3 mb-3">
        {t("PLEASE ENTER YOUR MOBILE PHONE NUMBER TO REGISTER")}
      </h4>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mb-5"
              dir="ltr">
            <PhoneInput
              international
              defaultCountry="QA"
              value={value}
              onChange={valueHandler}
              error={
                value
                  ? isValidPhoneNumber(value)
                    ? undefined
                    : "Invalid phone number"
                  : "Phone number required"
              }
            />
            <div className="phone_submit_wrapper text-center mt-3">
              <button
                disabled={isValidPhoneNumber(value) ? false : true}
                type="submit"
                className="btn btn-outline-success"
                onClick={numberInput}
              >
                {t('Proceed')}
              </button>
            </div>
          </div>

          <Modal show={show} size="sm" centered ref={otp_modal}>
            <Modal.Header>
              <h6>{t('Enter the OTP we sent to your given number')}</h6>
            </Modal.Header>
            <Modal.Body>
              <OtpInput
                isInputNum
                value={otp}
                onChange={(e) => {
                  setOtp(e);
                }}
                // inputStyle={{ width: '2rem' }}
                containerStyle="otp"
                numInputs={4}
                // separator={<span>-</span>}
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShow(false)}
              >
                {t('Close')}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={proceedVerify}
              >
                Verify
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default RegisterStepOne;
