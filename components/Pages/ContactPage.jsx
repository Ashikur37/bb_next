import React, { useEffect } from "react";
import HeaderComponent from "../atom/HeaderComponent";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../layout/Footer";

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contact_page">
        <Helmet>
          <title>Contuct Us - Beauty Booth</title>
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="svg_container">
                <img
                  className="mt-5 mb-5"
                  src={require("../../assets/images/svg/contact.svg")}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <HeaderComponent className="mt-2" text="Contact Us" />
              <div className="contact_form">
                <form>
                  <div className="form-group">
                    <label className="input_label">
                      What is your full name:
                    </label>
                    <input
                      type="text"
                      className="form-control input_box"
                      aria-describedby="emailHelp"
                      placeholder="Full Name..."
                    />
                  </div>
                  <div className="form-group">
                    <label className="input_label">Your Phone Number:</label>
                    <input
                      type="text"
                      className="form-control input_box"
                      aria-describedby="emailHelp"
                      placeholder="Full Name..."
                    />
                  </div>
                  <div className="form-group">
                    <label className="input_label">
                      Your email address (optional):
                    </label>
                    <input
                      type="email"
                      className="form-control input_box"
                      aria-describedby="emailHelp"
                      placeholder="Email Address..."
                    />
                  </div>
                  <div className="form-group">
                    <label className="input_label">Describe your issue:</label>
                    <textarea rows="4" cols="50"></textarea>
                  </div>
                  <div className="contact-form-submit mb-4 text-center">
                    <input type="submit" value="Submit" />
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

export default withRouter(ContactPage);
