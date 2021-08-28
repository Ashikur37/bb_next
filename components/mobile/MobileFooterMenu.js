import React, { useState, useEffect } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import {
  faChevronRight,
  faArrowUp,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import {
  /*faUser,
  faHome,
  faShoppingBag,
  faBars,
  faCommentDots,*/
  faBackspace,
} from "@fortawesome/free-solid-svg-icons";
import { withTranslation } from "react-i18next";
import styles from "../../styles/MobileFooterMenu.module.scss";

function MobileFooterMenu(props) {
  const { isAuthenticated } = props.auth;
  const { t, FontAwesomeIcon } = props;
  useEffect(() => {
    if (props.menu) {
      setCategoryMenu(props.menu);
      // setCategoryMenu(props.menu.filter((item) => item.isCategory));
    }
  }, [props.menu]);
  const [chat, setChat] = useState(false);
  const [active, setActive] = useState(false);
  const [categoryMenu, setCategoryMenu] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
  const [openChild, setOpenChild] = useState(-1);
  const [indexLevel, setIndexLevel] = useState(-1);
  const [openPopup, setOpenPopup] = useState(false);
  // const checkScrollTop = () => {
  //   if (!showScroll && window.pageYOffset > 200) {
  //     setShowScroll(true);
  //   } else if (showScroll && window.pageYOffset <= 200) {
  //     setShowScroll(false);
  //   }
  // };

  useEffect(() => {
    let mounted = true;
    const onTidioChatApiReady = () => {
      window.tidioChatApi.display(false);
      setChat(true);
    };
    const onChatClosed = () => {
      window.tidioChatApi.display(false);
    };
    if (window.tidioChatApi) {
      window.tidioChatApi.on("ready", onTidioChatApiReady);
      window.tidioChatApi.on("close", onChatClosed);
    } else {
      document.addEventListener("tidioChat-ready", onTidioChatApiReady);
    }
    return () => (mounted = false);
  }, [chat]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const script = document.createElement("script");
  //     script.src = "https://code.tidio.co/78qfcpefcnzbgxw8p5mepwdusgyunte4.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }, 1500);
  // }, []);

  const openChat = () => {
    window.tidioChatApi.display(true);
    window.tidioChatApi.open();
  };

  const activeHandler = () => {
    setActive(!active);
    setOpenChild(-1);
    setIndexLevel(-1);
  };

  useEffect(() => {
    if (openChild === -1) {
      setIndexLevel(-1);
    }
  }, [openChild]);

  const menuActiveHandler = (index, level) => {
    if (`${index}-${level}` === openChild) {
      setOpenChild(-1);
    } else {
      setOpenChild(`${index}-${level}`);
    }
    setIndexLevel(`${index}-${level}`);
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // window.addEventListener("scroll", checkScrollTop);

  const CategoryMenuComponent = (menu) => {
    let level = parseInt(menu.level);
    return menu.menu.map((menu, index) => {
      let generatedURL = menu.isCategory
        ? `/category/${menu.slug}`
        : menu.isParent
        ? "/" + menu.slug.split(" ").join("-")
        : `${menu.slug.split(" ").join("-")}`;

      if (menu.hasItems) {
        menu.open = typeof menu.open !== "undefined" ? menu.open : "closed";
        if (indexLevel === `${index}-${level}`) {
          menu.open = "open";
        } else {
          menu.open = "closed";
        }

        return (
          <li
            key={index}
            onClick={() => {
              menuActiveHandler(index, level);
            }}
          >
            <Link href={generatedURL}>
              <a onClick={() => setActive(false)}>
                {menu.name}{" "}
                {menu.hasItems ? (
                  <FontAwesomeIcon icon={faChevronRight} className="ml-4" />
                ) : null}{" "}
              </a>{" "}
            </Link>
            <ul className={level > 0 ? "open" : menu.open}>
              <CategoryMenuComponent
                menu={menu.items}
                level={parseInt(level + 1)}
                open={menu.open}
              />
            </ul>
          </li>
        );
      } else {
        return (
          <li key={index}>
            <Link href={generatedURL}>
              <a onClick={() => setActive(false)}>
                {" "}
                {menu.name}{" "}
                {menu.hasItems ? (
                  <FontAwesomeIcon icon={faChevronRight} className="ml-4" />
                ) : null}{" "}
              </a>
            </Link>
          </li>
        );
      }
    });
  };
  return (
    <div className={styles.mobileFooterMenu}>
      <div className={styles.mobile_footer_menu}>
        <div
          className="mobile_scroll_top"
          onClick={scrollTop}
          style={{ height: 40, display: showScroll ? "flex" : "none" }}
        >
          <FontAwesomeIcon className="scrollTop" icon={faArrowUp} />
        </div>
        <div className={styles.mobile_footer_wrapper}>
          <ul className={styles.mobile_footer}>
            <li onClick={() => setActive(false)} className={styles.menu_item}>
              <Link href="/">
                <a className={styles.menu_item_wrap}>
                  {/* <FontAwesomeIcon icon={faHome} /> */}
                  <img
                    src="footericon/home.svg"
                    style={{ width: 25, height: 25 }}
                    alt=""
                    srcSet=""
                  />
                  <span>{t("h")}</span>
                </a>
              </Link>
            </li>
            <li className={styles.menu_item}>
              {/* <div onClick={activeHandler} className={styles.menu_item_wrap}>
                <FontAwesomeIcon icon={faBars} />
                <span>Category</span>
              </div> */}
              <Link href="">
                <a
                  className={styles.menu_item_wrap}
                  onClick={() => setOpenPopup(true)}
                >
                  <>
                    {/* <FontAwesomeIcon icon={faBars} /> */}
                    <img
                      src="footericon/menu.svg"
                      style={{ width: 25, height: 25 }}
                      alt=""
                      srcSet=""
                    />
                    <span>{t("Category")}</span>
                  </>
                </a>
              </Link>
            </li>
            <li onClick={() => setActive(false)} className={styles.menu_item}>
              <Link href="/bag">
                <a className={`${styles.menu_item_wrap}`}>
                  <>
                    <div className={`${styles.svgWrap} ${styles.bag_top}`}>
                      <img
                        src="footericon/bag.svg"
                        style={{ width: 30, height: 30 }}
                        alt=""
                        srcSet=""
                      />
                      <span
                        className={`${styles.bag_count} badge badge-primary`}
                      >
                        {props.cartItems.length}
                      </span>
                    </div>
                    {/* <span>{t("bag")}</span> */}
                  </>{" "}
                </a>
              </Link>
            </li>
            <li onClick={() => setActive(false)} className={styles.menu_item}>
              {/* <a href="https://www.tidio.com/talk/78qfcpefcnzbgxw8p5mepwdusgyunte4" target="_blank" className={styles.menu_item_wrap}>
                <FontAwesomeIcon icon={faCommentDots} />
                <span>Chat</span>
              </a> */}
              <div className={styles.menu_item_wrap} onClick={chat && openChat}>
                {/* <FontAwesomeIcon
                  icon={chat ? faCommentDots : faSpinner}
                  pulse={!chat}
                /> */}
                {chat ? (
                  <img
                    src="footericon/chat.svg"
                    style={{ width: 25, height: 25 }}
                    alt=""
                    srcSet=""
                  />
                ) : (
                  <FontAwesomeIcon icon={faSpinner} pulse={!chat} />
                )}
                <span>{t("chat")}</span>
              </div>
            </li>
            <li onClick={() => setActive(false)} className={styles.menu_item}>
              <Link href={isAuthenticated ? "/profile" : "/login"}>
                <a className={styles.menu_item_wrap}>
                  <>
                    <img
                      src="footericon/user.svg"
                      style={{ width: 25, height: 25 }}
                      alt=""
                      srcSet=""
                    />
                    <span>{t("Profile")}</span>
                  </>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div
        className={active ? "category_slide_div active" : "category_slide_div"}
      >
        <span onClick={() => setActive(false)} className="back">
          <FontAwesomeIcon icon={faBackspace} /> Back
        </span>
        {categoryMenu ? (
          <ul>
            <CategoryMenuComponent
              menu={categoryMenu}
              level={0}
              open={"closed"}
            />
          </ul>
        ) : null}
      </div> */}

      <div
        className={
          openPopup
            ? `${styles.category_popup} ${styles.active}`
            : `${styles.category_popup}`
        }
      >
        <div className={styles.category_popup_inner}>
          <div className={styles.popup_top} onClick={() => setOpenPopup(false)}>
            <div className={styles.close}>
              <img
                src="footericon/close.svg"
                style={{ width: 25, height: 25 }}
                alt=""
                srcSet=""
              />
            </div>
          </div>
          <div className={styles.inner_content}>
            <div className={styles.popup_title}>CATEGORIES</div>
            <div>
              <ul className={styles.cat_list}>
                <li>
                  <Link href="/">
                    <a>New</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Skin Care</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Body Care</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Make Up</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Hair Care</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Fragrance</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Accessories</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Campaign</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Best Selling</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItem,
  auth: state.auth,
});
export default connect(mapStateToProps)(
  withTranslation("common")(MobileFooterMenu)
);
