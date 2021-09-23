import React, { useState } from "react";
import Footer from "../layout/Footer";
import axios from "../../redux/actions/axios";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Confirm Password doesn't match");
      return;
    }
    axios
      .post("setdata/reset", { email, password })
      .then((res) => {
        setSuccess(true);
        setError(false);
      })
      .catch((err) => {
        setSuccess(false);
        setError(true);
      });
  };
  return (
    <div className="forget__passoword">
      <div className="forget__password__wrapper">
        <div className="forget__card">
          <h4 className="text-center mt-3 mb-3">Forget password</h4>
          {error && (
            <span className="text-danger">
              This email address is not valid!{" "}
            </span>
          )}

          {success && (
            <center>
              <span className="text-success">
                <strong className="text-center">
                  Please visit your email to verify!
                </strong>
              </span>
            </center>
          )}

          {!success && (
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirm Password</label>
                <input
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>

              <div className=" text-center">
                <button type="submit" className="btn btn-outline-success">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ForgetPassword;
