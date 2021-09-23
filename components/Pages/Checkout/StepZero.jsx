import React, { useState, useEffect } from "react";
import { i18n, withTranslation } from "../../../i18n";
import PhoneInput from "react-phone-number-input";
import { loginUser, logoutUser } from "../../../redux/actions/authActions";
import Modal from "react-bootstrap/Modal";
import axios from "../../../redux/actions/axios";
import Axios from "axios";
import OtpInput from "react-otp-input";
import { parsePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { connect } from "react-redux";
import { setLoginError } from "../../../redux/actions/authActions";
import Cookies from "universal-cookie";
const cookies = new Cookies();
function StepZero({
  loginUser,
  auth,
  setLoginError,
  history,
  numberHnadler,
  changeStep,
  stepZeroSubmit,
  logout,
  cartItems,
  t,
  styles,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const [otp_id, setOtpId] = useState("");
  const [otp, setOtp] = useState("");
  const [show, setShow] = useState(false);
  const otp_modal = React.createRef();
  const [showLogin, setShowLogin] = useState(false);
  useEffect(() => {
    if (auth.isAuthenticated) {
      setShowLogin(true);
      Axios.get("/api/profile", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("auth_token") || ""}`,
        },
      })
        .then((res) => {
          setShowLogin(false);
          setLoginError("");
          const len = res.data.order ? res.data.order.length - 1 : null;
          stepZeroSubmit(res.data.order ? res.data.order[len] : null);
        })
        .catch((err) => {
          if (err.response.status === 500) {
            logout();
          }
        });
    } else if (!auth.isAuthenticated && auth.error !== "") {
      window.alert(auth.error);
    }
  }, [auth]);

  useEffect(() => {
    if (cartItems?.length <= 0) {
      try {
        history.push("/");
      } catch (error) {
        window.location.href = "/";
      }
    }
  }, [cartItems]);

  const Loginsubmit = (e) => {
    e.preventDefault();
    // let form = new FormData();
    // form.append("email", email);
    // form.append("password", password);
    loginUser({email,password});
  };
  const valueHandler = (value) => {
    setValue(value);
  };
  const numberInput = () => {
    let locale = cookies.get("lang") === "en" ? "en" : "ar_QA" || "en";
    const phone = parsePhoneNumber(value);
    axios
      .post(`${locale}/checkout/verify/check-number-api`, {
        cell_no: phone.nationalNumber,
        country_code: phone.countryCallingCode,
      })
      .then((res) => {
        if (res.data === false) {
          setShow(true);
          axios
            .post(`${locale}/checkout/verify/now`, {
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
          if (!auth.isAuthenticated) {
            axios
              .post(`${locale}/checkout/last-order`, {
                country_code: "+" + phone.countryCallingCode,
                customer_phone: phone.nationalNumber,
              })
              .then((res) => {
                numberHnadler(phone, res.data.data);
              })
              .catch(() => {
                numberHnadler(phone);
              });
          }
        }
      })
      .catch((err) => console.log(err));
    // numberHnadler(phone);
  };
  const proceedVerify = () => {
    let locale = cookies.get("lang") === "en" ? "en" : "ar_QA" || "en";
    if (show) {
      const phone = parsePhoneNumber(value);
      axios
        .post(`${locale}/checkout/verify/final`, {
          cell_no: phone.nationalNumber,
          country_code: "+" + phone.countryCallingCode,
          otp: otp,
          id: otp_id,
        })
        .then((res) => {
          if (res.data === "success") {
            setShow(false);
            numberHnadler(phone);
          } else {
            numberInput();
          }
        });
    }
  };
  return (
    <div className="container">
      <div className={styles.step_zero}>
        <div className={styles.step_zero_title}>
          {t("Please Choose a Checkout Method")}
        </div>
        <div className={styles.methods}>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.method_one}>
                <h6>{t("REGISTERED USERS")}</h6>
                {!showLogin ? (
                  <form onSubmit={Loginsubmit}>
                    <div className="form-group">
                      <label htmlFor="email">{t("Email address")}</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        placeholder={t("Enter email")}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        {t("We'll never share your email with anyone else")}
                      </small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">
                        {t("Password")}
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        placeholder={t("Password")}
                      />
                    </div>

                    <div className={styles.submit_wrapper}>
                      <button type="submit" className={styles.login_submit}>
                        {t("login")}
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div
                      className="spinner-border text-danger"
                      role="status"
                    ></div>
                    <br />
                    <strong>{t("Validating your login once again")}</strong>
                  </>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.method_two}>
                <h6>{t("GUEST CHECKOUT")}</h6>
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
                <div className={styles.phone_submit_wrapper}>
                  <button
                    disabled={isValidPhoneNumber(value) ? false : true}
                    type="submit"
                    className={styles.phone_proceed}
                    onClick={numberInput}
                  >
                    {t("Proceed")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} size="sm" centered ref={otp_modal}>
          <Modal.Header>
            <h6>Enter the OTP we sent to your given number</h6>
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
              Close
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
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  cartItems: state.cart.cartItem,
});
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userInfo) => loginUser(dispatch, userInfo),
    logout: () => logoutUser(dispatch),
    setLoginError: () => setLoginError(dispatch),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation("common")(StepZero));
