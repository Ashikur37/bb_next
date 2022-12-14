import React, { useEffect, useState } from "react";
import HeaderComponent from "../../atom/HeaderComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from "../../../redux/actions/axios";
import { withTranslation } from "react-i18next";
function StepFour({ order, t, styles }) {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    if (confirmPassword == password) {
      let data = {
        password,
        confirm_password: confirmPassword,
        order,
      };
      axios
        .post("en/auth/post-order-register", data)
        .then((res) => {
          setSuccess(true);
          alert("Your account has been created");
        })
        .catch((err) => {
          if (err.response) {
            alert(err.response.data.message);
          } else {
            alert("We're sorry but this operation cannot be completed now");
          }
        });
    } else {
      alert("password doesn't match");
    }
  };
  return (
    <div className={styles.step_four}>
      <div className="container">
        <div className="row">
          <div className="col-lg-2"></div>
          {localStorage.getItem("user") && <div className="col-lg-1"></div>}

          <div className="col-lg-5">
            <HeaderComponent text={t("CONFIRMATION")} />
            <div className={styles.circle}>
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <p className={styles.greet}>
              {t("Thank you for shopping with us")}
            </p>
            {/* <p className="greet">Your ORDER ID is {order}</p> */}
            <p className={styles.greet}>
              {t("Your ORDER ID is ")}
              {order}{" "}
            </p>
            <p className={styles.greet}>
              {t("Order will be processed with 24-72 hours after confirmation")}
            </p>
            <div className="continue_container">
              <Link href="/">
                <a>{t("Back To Shopping")}</a>
              </Link>
            </div>
          </div>
          {!localStorage.getItem("user") && (
            <div className="col-lg-4">
              <HeaderComponent text="Set password " />
              <form onSubmit={submitHandler}>
                <strong>
                  Set password for future login with the email you have ordered
                  now!
                </strong>
                <div className="form-group my-4">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group my-4">
                  <label htmlFor="exampleInputPassword1">
                    Confirm Password
                  </label>
                  <input
                    required
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Confirm  Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-block btn-outline-success my-3"
                  disabled={success}
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withTranslation("common")(StepFour);
