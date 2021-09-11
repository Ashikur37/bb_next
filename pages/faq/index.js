import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/atom/HeaderComponent";
import { faqs, faqsAr } from "../../components/utils/static";
// import Footer from "../../components/layout/Footer";
import Link from "next/link";
import { withTranslation } from "../../i18n";
import Cookies from "universal-cookie";
import Head from "next/head";
import Styles from "../../styles/Faq.module.scss";
import Header from "../../components/layout/partials/Header";
const cookies = new Cookies();

function index({ t }) {
  const router = useRouter();
  let lang = cookies.get("lang");
  const [mark, setMark] = useState(
    router.query.mark ? router.query.mark : "first time visitors"
  );
  const [markAr, setMarkAr] = useState("الزائرون لأول مرة");
  const refs = faqs.reduce((acc, value) => {
    acc[value.title.toLowerCase()] = React.createRef();
    return acc;
  }, {});
  const refsAr = faqsAr.reduce((acc, value) => {
    acc[value.title.toLowerCase()] = React.createRef();
    return acc;
  }, {});

  const refHnadler = (name) => {
    setMark(name);
    let y = refs[name].current.offsetTop - 250;
    window.scrollTo(0, y);
  };
  const refHnadlerAr = (name) => {
    setMarkAr(name);
    let y = refsAr[name].current.offsetTop - 250;
    window.scrollTo(0, y);
  };
  useEffect(() => {
    if (lang == "ar") {
      refHnadlerAr(markAr);
    } else {
      refHnadler(mark);
    }
  }, [router]);
  const createMarkup = (data) => {
    return {
      __html: data,
    };
  };
  return (
    <>
      <Head>
        <title>Faq | Beautyboothqa</title>
      </Head>
      <div className="container">
        <div className={Styles.faq_page}>
          <div className="text-center mt-3">
            {" "}
            <Header text={t("FREQUENTLY ASKED QUESTIONS")} />
          </div>
          {/* <HeaderComponent text={t("FREQUENTLY ASKED QUESTIONS")} /> */}
          <div className={Styles.faq_container}>
            <div className={Styles.faq_navigations}>
              <ul className={Styles.navgitaion_list}>
                {lang == "en" &&
                  faqs.map((faq, index) => (
                    <li
                      onClick={() => refHnadler(faq.title.toLowerCase())}
                      className={
                        mark == faq.title.toLowerCase()
                          ? `${Styles.navigation_li} ${Styles.select}`
                          : `${Styles.navigation_li}`
                      }
                      key={index}
                    >
                      {/* {faq.title} */}
                      {faq.title}
                    </li>
                  ))}
                {lang == "ar" &&
                  faqsAr.map((faq, index) => (
                    <li
                      onClick={() => refHnadlerAr(faq.title.toLowerCase())}
                      className={
                        markAr == faq.title.toLowerCase()
                          ? `${Styles.navigation_li} ${Styles.select}`
                          : `${Styles.navigation_li}`
                      }
                      key={index}
                    >
                      {/* {faq.title} */}
                      {faq.title}
                    </li>
                  ))}
              </ul>
            </div>
            <div className={Styles.faq_content}>
              <div className={Styles.custom}>
                {lang == "en" &&
                  faqs.map((faq) => (
                    <>
                      <h4
                        ref={refs[faq.title.toLowerCase()]}
                        className={
                          mark == faq.title.toLowerCase()
                            ? `${Styles.section_title} ${Styles.selected}`
                            : `${Styles.section_title}`
                        }
                      >
                        <span> {faq.title} </span>
                      </h4>
                      <div className={Styles.custom__accordion}>
                        {faq.details.map((item) => (
                          <div className={Styles.single__accordion}>
                            <input
                              type="checkbox"
                              name={faq.title}
                              id={item.summery}
                              className={Styles.accordion__input}
                            />
                            <label
                              className={Styles.accordion__label}
                              htmlFor={item.summery}
                            >
                              <span className={Styles.accordion__label__span}>
                                {t(`${item.summery}`)}
                              </span>
                            </label>
                            <div className={Styles.accordion__content}>
                              <div
                                class="p py-3"
                                dangerouslySetInnerHTML={createMarkup(
                                  item.content
                                )}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ))}
                {lang == "ar" &&
                  faqsAr.map((faq) => (
                    <>
                      <h4
                        ref={refsAr[faq.title.toLowerCase()]}
                        className={
                          markAr == faq.title.toLowerCase()
                            ? `${Styles.section_title} ${Styles.selected}`
                            : `${Styles.section_title}`
                        }
                      >
                        <span> {faq.title} </span>
                      </h4>
                      <div className={Styles.custom__accordion}>
                        {faq.details.map((item) => (
                          <div className={Styles.single__accordion}>
                            <input
                              type="checkbox"
                              name={faq.title}
                              id={item.summery}
                              className={Styles.accordion__input}
                            />
                            <label
                              className={Styles.accordion__label}
                              htmlFor={item.summery}
                            >
                              <span className={Styles.accordion__label__span}>
                                {t(`${item.summery}`)}
                              </span>
                            </label>
                            <div className={Styles.accordion__content}>
                              <div
                                class="p my-3"
                                dangerouslySetInnerHTML={createMarkup(
                                  item.content
                                )}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default withTranslation("common")(index);
