import React, { useState } from "react";
import HeaderComponent from "../atom/HeaderComponent";
import { faQq } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";
import { faqs } from "./static";
import Footer from "../layout/Footer";
import "../../assets/sass/faq.scss";
function FaqPage() {
  const [mark, setMark] = useState("shopping");

  const refs = faqs.reduce((acc, value) => {
    acc[value.title.toLowerCase()] = React.createRef();
    return acc;
  }, {});

  const refHnadler = (name) => {
    setMark(name);
    let y = refs[name].current.offsetTop - 250;
    window.scrollTo(0, y);
  };
  const createMarkup = (data) => {
    return {
      __html: data,
    };
  };
  return (
    <>
      <div className="container">
        <Helmet>
          <title>FAQ - Beauty Booth </title>
        </Helmet>
        <div className="faq_page">
          <HeaderComponent text="Frequently Asked Questions" />
          <div className="faq_container">
            <div className="faq_navigations">
              <ul className="navgitaion_list">
                {faqs.map((faq, index) => (
                  <li
                    onClick={() => refHnadler(faq.title.toLowerCase())}
                    className={
                      mark == faq.title.toLowerCase()
                        ? "navigation_li select"
                        : "navigation_li"
                    }
                    key={index}
                  >
                    {faq.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="faq_content">
              <div className="custom">
                {faqs.map((faq) => (
                  <>
                    <h4
                      ref={refs[faq.title.toLowerCase()]}
                      className={
                        mark == faq.title.toLowerCase()
                          ? " section_title selected"
                          : "section_title"
                      }
                    >
                      <span> {faq.title} </span>
                    </h4>
                    <div className="custom__accordion">
                      {faq.details.map((item) => (
                        <div className="single__accordion">
                          <input
                            type="checkbox"
                            name={faq.title}
                            id={item.summery}
                            className="accordion__input"
                          />
                          <label
                            className="accordion__label"
                            htmlFor={item.summery}
                          >
                            <span className="accordion__label__span">
                              {item.summery}
                            </span>
                          </label>
                          <div className="accordion__content">
                            <p
                              dangerouslySetInnerHTML={createMarkup(
                                item.content
                              )}
                            ></p>
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
      <Footer />
    </>
  );
}

export default FaqPage;
