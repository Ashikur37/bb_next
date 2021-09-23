import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";

import { loginUser } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import { withTranslation } from "../../i18n";


function LoginPage({ loginUser, auth, t }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    loginUser({email,password})
    return;
  };

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [error]);

  useEffect(() => {
    if (auth.isAuthenticated && localStorage.getItem("auth_token")) {
      // Router.push("/");
      if (window.history.length > 2) {
        // window.history.back();
        Router.back();
        // window.location.href = document.referrer;
      } else {
        Router.push("/");
      }
    }
    if (auth.error) {
      setError(auth.error);
    }
  }, [auth]);

  return (
      <div className=" mt-3 login_page">
        <Head>
          <title>Login | Beautyboothqa</title>
        </Head>
        <div className="container">
          <span className="title">{t("login")}</span>

          <div className=" mt-3 login_container">
            <div className="row">
              <div className="col-md-4">
                {error ? <div className="alert alert-danger">{error}</div> : ""}
              </div>
              <div className="col-md-4">
                <form method="POST" onSubmit={(e) => loginHandler(e)}>
                  <div className="form-group">
                    <label className="input_label">{t("Email address")}</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder={t('Enter email')}
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="input_label">{t('Password')}</label>
                    <input
                      type="password"
                      className="form-control "
                      placeholder={t("Enter password")}
                      value={password}
                      onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    <div className="help_container">
                      <Link href="/forget-password">
                        <a>{t('Forget password')}</a>
                      </Link>
                      <Link href="/register">
                        <a>{t('Register')}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="form_btn_container">
                    <input
                      className={
                        email === "" || password === ""
                          ? "disabled submit_btn "
                          : "submit_btn"
                      }
                      type="submit"
                      value={t("login")}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userInfo) => loginUser(dispatch, userInfo),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation("common")(LoginPage));
