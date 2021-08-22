import React, { useState, useEffect, useRef } from "react";
import Cookies from "universal-cookie";
import { i18n, withTranslation } from "../../i18n";
import { useRouter } from "next/router";
import Link from "next/link";
import Axios from "../../redux/actions/axios";
import styles from "../../styles/Navbar.module.scss";
import { Dropdown } from "react-bootstrap";
import "flag-icon-css/css/flag-icon.min.css";
import {
  faSearch,
  faShoppingBag,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const cookies = new Cookies();
var timeout = 0;
const languages = [
  {
    code: "en",
    name: "English",
    country_code: "us",
  },
  {
    code: "ar_QA",
    name: "Arabic",
    country_code: "qa",
  },
];
function Navbar({ FontAwesomeIcon, lang }) {
  const router = useRouter();
  const [language, setLanguage] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [searchResult, setSeearchResult] = useState([]);
  const searchHandler = (event) => {
    if (searchQuery.length > 3) {
      setShowResult(true);
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        /*
          `http://localhost:8000/en/products?query=${searchQuery}`
          `https://admin.beautyboothqa.com/en/products?query=${searchQuery}`
        
        */
       
        Axios.get(`${lang}/products?query=${searchQuery}`)
          .then((res) => {
            setSeearchResult(res.data);
          })
          .catch();
      }, 800);
    } else {
      setShowResult(false);
    }
  };
  const keyHandler = (event) => {
    if (searchQuery.length > 0) {
      if (event.key === "Enter") {
        router.push(`/search/${searchQuery}`);
        setShowResult(false);
        setSearchQuery("");
      }
    }
  };
  const searchTermClick = (term = null) => {
    if (term !== null) {
      router.push(`/search/${term}`);
      setSearchQuery("");
      setShowResult(false);
    }
  };
  const resultClick = (slug, brand = false) => {
    if (brand) {
      router.push(slug);
    } else {
      router.push(`/product/${slug}`);
    }
    setSearchQuery("");
    setShowResult(false);
  };
  const LanguageHandler = (value) => {
    i18n.changeLanguage(value);
    if (value == "en") {
      document.body.classList.remove("rtl");
      cookies.set("lang", "en");
      setLanguage("en");
    } else {
      document.body.classList.add("rtl");
      cookies.set("lang", "ar_QA");
      setLanguage("ar_QA");
    }
  };
  useEffect(() => {
    setLanguage(cookies.get("lang"));
  }, [language]);
  return (
    <div className="container">
      <div className="row">
        <div className={styles.navbar_content}>
          <div className={styles.logo_content}>
            <h1>
              <Link href="/">
                <a>Beauty Booth.</a>
              </Link>
            </h1>
          </div>
          <div className={styles.search_content}>
            <input
              type="text"
              name="search"
              placeholder="Search For.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchHandler}
              onKeyPress={keyHandler}
            />
            <FontAwesomeIcon icon={faSearch} />
            <div
              className={
                showResult
                  ? `${styles.search_result} ${styles.active}`
                  : `${styles.search_result}`
              }
            >
              {searchResult.brand && searchResult.brand.length > 0 && (
                <ul>
                  <li
                    style={{
                      color: "black",
                      marginLeft: "10px",
                      border: "none",
                    }}
                  >
                    Brand
                  </li>
                  {searchResult.brand.map((rs, index) => (
                    <li key={index}>
                      <div
                        className={styles.search_result_li}
                        onClick={() => {
                          resultClick(rs.url, true);
                        }}
                      >
                        {rs.image && <img src={rs.image} alt={rs.slug} />}
                        <span>{rs.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {searchResult.searchTerms && searchResult.searchTerms.length > 0 && (
                <ul>
                  <li
                    style={{
                      color: "black",
                      marginLeft: "10px",
                      border: "none",
                    }}
                  >
                    Popular searches
                  </li>
                  {searchResult.searchTerms.map((rs, index) => (
                    <li key={index}>
                      <div
                        className={styles.search_result_li}
                        onClick={() => searchTermClick(encodeURI(rs.term))}
                      >
                        <span>{rs.term}</span>{" "}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {searchResult.products && (
                <ul>
                  <li
                    style={{
                      color: "black",
                      marginLeft: "10px",
                      border: "none",
                    }}
                  >
                    Products
                  </li>
                  {searchResult.products.map((rs, index) => (
                    <li key={index}>
                      <div
                        className={styles.search_result_li}
                        onClick={() => {
                          resultClick(rs.slug);
                        }}
                      >
                        <img src={rs.files[0].thumbnail_image} alt="" />
                        <span>{rs.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className={styles.icon_content}>
            <ul>
              <li>
                <Dropdown id="language_dropdown">
                  <Dropdown.Toggle id="language_dropdown_button">
                    <span
                      className={`select-flag flag-icon flag-icon-${language == 'en' ? 'us' : 'qa'}`}
                    ></span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu alignRight>
                    {languages.map(({ code, name, country_code }) => (
                      <Dropdown.Item
                      key={country_code}
                        onClick={() => {
                          LanguageHandler(code);
                        }}
                      >
                        <span
                          className={` mr-2 flag-icon flag-icon-${country_code}`}
                        ></span>
                        {name}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faUser}
                  className={`${styles.main_icon}`}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  className={styles.main_icon}
                />
                <span className={`${styles.bag_count}`}>2</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
