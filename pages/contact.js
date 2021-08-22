import React, { useEffect } from "react";
import Head from "next/head";
import { withTranslation } from "../i18n";
import dynamic from "next/dynamic";

const Header = dynamic(()=>import("../components/layout/partials/Header"));
function ContactPage({ t }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="contact_page">
        <Head>
          <title>Contact | Beautyboothqa</title>
        </Head>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="svg_container">
                <img
                  className="mt-5 mb-5"
                  src="/svg/contact.svg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <Header cssClass="mt-2" h="h3" text={t("contact us")} />
              <div className="contact_form">
                <form>
                  <div className="form-group">
                    <label className="input_label">
                      {t("What is your full name")}
                    </label>
                    <input
                      type="text"
                      className="form-control input_box"
                      aria-describedby="emailHelp"
                      placeholder={t("Full Name")}
                    />
                  </div>
                  <div className="form-group">
                    <label className="input_label">{t("Your Phone Number")}</label>
                    <input
                      type="text"
                      className="form-control input_box"
                      aria-describedby="emailHelp"
                      placeholder={t('Phone')}
                    />
                  </div>
                  <div className="form-group">
                    <label className="input_label">
                      {t("Your email address (optional)")}
                    </label>
                    <input
                      type="email"
                      className="form-control input_box"
                      aria-describedby="emailHelp"
                      placeholder={t("Email address")}
                    />
                  </div>
                  <div className="form-group">
                    <label className="input_label">{t("Describe your issue")}</label>
                    <textarea rows="4" cols="50"></textarea>
                  </div>
                  <div className="contact-form-submit mb-4 text-center">
                    <input type="submit" value={t("submit")} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withTranslation("common")(ContactPage);
