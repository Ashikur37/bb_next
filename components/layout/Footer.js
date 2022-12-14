/*eslint-disable*/
import { useState, useEffect } from "react";
import { withTranslation } from "../../i18n";
import Link from "next/link";
import axios from "../../redux/actions/axios";
import styles from "../../styles/Footer.module.scss";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer({ lang, FontAwesomeIcon, t }) {
  const [locale, setLocale] = useState();
  const [email, setEmail] = useState("");
  useEffect(() => {
    setLocale(lang == "en" ? "ltr" : "rtl");
  }, [lang]);
  const subscribeHandler = () => {
    axios
      .post("/en/setdata/subscribe/store", { email, lang })
      .then((res) => {
        setEmail("");
        window.alert(res.data);
      })
      .catch((err) => {
        window.alert(err.response.data.errors.email[0]);
      });
  };
  return (
    <div className={styles.footer_container} dir={locale}>
      <div className=" container mt-4">
        <div className={`row ${styles.footer_wrap}`}>
          <div className={styles.first}>
          <img src="https://admin.beautyboothqa.com/storage/media/l9btfTHlIZ9bgvEH2YbmKvITY5r48WRBeFmSh87B.svg"/>
            <div className={styles.phone}>
              <FontAwesomeIcon
                className="fa_icon fa-rotate-90"
                icon={faPhone}
              />
              {/* <span>+974 7709 6563</span> */}
              <a href="tel:+974 7709 6563">+974 7709 6563</a>
            </div>
            <div className={styles.email}>
              <FontAwesomeIcon className="fa_icon" icon={faEnvelope} />
              {/* <span>info@beautyboothqa.com</span> */}
              <a className="ml-2" href="mailto:info@beautyboothqa.com">info@beautyboothqa.com</a>
            </div>
            <div className="mt-3">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://theqa.qa/certificates/details/5ea9cfa1-35a2-408b-9fdb-e76369dd5255"
              >
                <img
                  rel="preload"
                  src="https://theqa.qa/badge/5ea9cfa1-35a2-408b-9fdb-e76369dd5255.svg"
                  alt="trustmark-badge"
                  width="200"
                />
              </a>
            </div>
            <ul className={styles.payment_link}>
              <li>
                <Image src="/images/visa.jpg" width="60" height="40" />
              </li>
              <li>
                <Image src="/images/card-visa_2.svg" width="60" height="40" />
              </li>
              <li>
                <Image src="/images/np.png" width="60" height="40" />
              </li>
            </ul>
          </div>
          <div className={styles.second}>
            <div className={styles.customer_service}>
              <span className={styles.heading}>{t("cust_serv")}</span>
              <ul className={styles.footer_ul}>
                <li>
                  <Link href="/faq">{t("faq")}</Link>
                </li>
                <li>
                  <Link href="/profile">{t("profile")}</Link>
                </li>
                <li>
                  <Link href="/delivery">{t("Delivery")}</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">{t("terms")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.fourth}>
            <div className={styles.about}>
              <span className={styles.heading}>{t("ab")}</span>
              <ul className={styles.footer_ul}>
                <li>
                  <Link href="/about-us">{t("abb")}</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">{t("privacy")}</Link>
                </li>

                <li>
                  <a href="/faq?mark=payment">{t("Payment")}</a>
                </li>
                <li>
                  <a href="/faq?mark=delivery">{t("Shipping")}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.fifth}>
            <div className={styles.about}>
              <span className={styles.heading}>{t("need_help")}</span>
              <ul className={styles.footer_ul}>
                <li>
                  <Link href="/contact">{t("contact_us")}</Link>
                </li>
              </ul>
              <section className="my-2">
                <div className={`${styles.custom_card} `}>
                  <div className="row justify-content-center align-items-center">
                    <h6 className="text-center text-uppercase mb-3">
                      {t("sn")}
                    </h6>
                    <div className="col-12 ">
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder={t("Enter email")}
                          value={email}
                          onChange={(e) => setEmail(e.currentTarget.value)}
                        />

                        <button
                          className={styles.subs_button}
                          type="button"
                          onClick={subscribeHandler}
                        >
                          {t("subs")}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={styles.social_icons_wrapper}>
            <span>{t("follow_us")}</span>
            <div className={styles.social_icons}>
              <a
                target="_blank"
                href="https://www.facebook.com/beautyboothqa"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.social_icon_logo}
                  icon={faFacebookSquare}
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/beautyboothqtr"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.social_icon_logo}
                  icon={faInstagramSquare}
                />
              </a>
              <a
                target="_blank"
                href="https://www.youtube.com/c/BeautyBoothQATAR"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.social_icon_logo}
                  icon={faYoutubeSquare}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation("common")(Footer);
