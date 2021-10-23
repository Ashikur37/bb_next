import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
// import Footer from "../layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
// import { Link, withRouter } from "react-router-dom";
import Link from "next/link";
import axios from "../../redux/actions/axios";
import Loader from "../../components/atom/Loader";
import Axios from "axios";

function ForgetPasswodMessage(props) {
  const router = useRouter();

  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let random = router.query.email;
    axios
      .post("en/setdata/check-link", { random })
      .then((res) => {
        setLoading(false);
        setSuccess(true);
        Axios.post('https://dashboard.beautybooth.shop/customers/password_reset',{email:res.data})
        .then()
        .catch(err=>{
          console.log(err.response.data);
        })
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
                  Successfully changed your password. Go to{" "}
                  <Link href="/login"> Login </Link> to Continue.
                </p>
              ) : (
                <p className="success__text">
                  Password Reset Failed.{" "}
                  <Link href="/forget-password"> Try Again </Link> to Continue.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgetPasswodMessage;
