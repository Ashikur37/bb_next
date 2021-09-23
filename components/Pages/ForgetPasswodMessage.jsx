import React, { useState, useEffect } from "react";
import Footer from "../layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "../../redux/actions/axios";
import Loader from "../atom/Loader";

function ForgetPasswodMessage(props) {
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let random = props.match.params.email;
    axios
      .post("setdata/check-link", { random })
      .then((res) => {
        setLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
        setSuccess(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="forget__password__message">
          <div className="message__card__wrapper">
            <div className="message__card text-center">
              <FontAwesomeIcon
                className={success ? "fa__success" : "fa__failed"}
                icon={success ? faCheckCircle : faWindowClose}
                size="7x"
              />
              {success ? (
                <p className="success__text">
                  Successfully restes password. Go to{" "}
                  <Link to="/login"> Login </Link> to Continue.
                </p>
              ) : (
                <p className="success__text">
                  Password Resets Failed.{" "}
                  <Link to="/forget-password"> Try Again </Link> to Continue.
                </p>
              )}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default ForgetPasswodMessage;
