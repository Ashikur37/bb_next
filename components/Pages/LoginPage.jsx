import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "../layout/Footer";

function LoginPage({ loginUser, auth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();

    let form = new FormData();
    form.append("email", email);
    form.append("password", password);
    loginUser(form);
    return;
  };

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [error]);

  useEffect(() => {
    if (auth.isAuthenticated && localStorage.getItem("auth_token")) {
      window.location.href = "/";
    }
    if (auth.error) {
      setError(auth.error);
    }
  }, [auth]);

  return (
    <>
      <div className=" mt-3 login_page">
        <HelmetProvider>
          <Helmet>
            <title>Login - Beauty Booth</title>
          </Helmet>
        </HelmetProvider>
        <div className="container">
          <span className="title">Log In</span>

          <div className=" mt-3 login_container">
            <div className="row">
              <div className="col-md-4">
                {error ? <div className="alert alert-danger">{error}</div> : ""}
              </div>
              <div className="col-md-4">
                <form method="POST" onSubmit={(e) => loginHandler(e)}>
                  <div className="form-group">
                    <label className="input_label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="input_label">Password</label>
                    <input
                      type="password"
                      className="form-control "
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    <div className="help_container">
                      <Link to="/forget-password">Forget Password?</Link>
                      <Link to="/register">Registration</Link>
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
                      value="LOG IN"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
