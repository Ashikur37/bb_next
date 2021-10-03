import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
import dynamic from "next/dynamic";
import Script from "next/script";
import Cookies from "universal-cookie";
import Media from "react-media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appWithTranslation, useTranslation } from "../i18n";
import "react-toastify/dist/ReactToastify.css";

// Import the CSS
import nav from "../styles/Navbar.module.scss";
// import footer from "../styles/Footer.module.scss";
import "react-phone-number-input/style.css";
import "../styles/sass/main.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect, useState } from "react";
const Navbar = dynamic(() => import("../components/layout/Navbar"));
const Divider = dynamic(() => import("../components/layout/partials/Divider"));
const Menu = dynamic(() => import("../components/layout/Menu"));
const Footer = dynamic(() => import("../components/layout/Footer"));
const MobileFooterMenu = dynamic(() =>
  import("../components/mobile/MobileFooterMenu")
);
import { setCurrentUser, logoutUser } from "../redux/actions/authActions";
import { setCartFromLocal } from "../redux/actions/cartAction";
const cookies = new Cookies();

if (process.browser) {
  if (localStorage) {
    //check for cart Items
    if (localStorage.cart) {
      store.dispatch(setCartFromLocal());
    }
    if (localStorage.auth_token && localStorage.user) {
      store.dispatch(setCurrentUser(localStorage.user));
    }
    if (localStorage.expire_time < Date.now()) {
      logoutUser(store.dispatch);
    }
  }
}

const Tidio = () => {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        document.addEventListener("DOMContentLoaded", function(event) {
          setTimeout(function() {
            const script = document.createElement('script');
            script.src = "https://code.tidio.co/78qfcpefcnzbgxw8p5mepwdusgyunte4.js";
            script.async = true;
            document.body.appendChild(script);
          }, 4000)
        });
      `,
      }}
    ></script>
  );
};

const MyApp = ({ Component, pageProps }) => {
  const [lang, setLang] = useState(cookies.get("lang"));
  useEffect(() => {
    setLang(cookies.get("lang"));
  }, [cookies.get("lang")]);

  if (lang === undefined) {
    cookies.set("next-i18next", "en", { path: "/" });
    cookies.set("lang", "en", { path: "/" });
    // document.body.dir = "ltr";
  }
  if (lang === "en") {
    cookies.set("next-i18next", "en", { path: "/" });
    if (typeof document != "undefined") {
      document.body.classList.remove("rtl");
      document.body.dir = "ltr";
    }
  }
  if (lang == "ar_QA") {
    cookies.set("next-i18next", "ar_QA", { path: "/" });
    if (document) {
      document.body.classList.add("rtl");
      document.body.dir = "rtl";
    }
  }

  return (
    <Provider store={store}>
      {lang && (
        <>
          <Navbar FontAwesomeIcon={FontAwesomeIcon} lang={lang} styles={nav} />
          <Divider />
          <Menu lang={lang} />
          <Divider />
          <Component
            {...pageProps}
            FontAwesomeIcon={FontAwesomeIcon}
            lang={lang}
            store={store}
          />
          <Footer lang={lang} FontAwesomeIcon={FontAwesomeIcon} />
          <Media
            query="(max-width: 991px)"
            render={() => (
              <MobileFooterMenu lang={lang} FontAwesomeIcon={FontAwesomeIcon} />
            )}
          />
          <Media
            query="(min-width: 992px)"
            render={() => (
              <Script
                src="https://code.tidio.co/78qfcpefcnzbgxw8p5mepwdusgyunte4.js"
                strategy="lazyOnload"
              />
            )}
          />{" "}
        </>
      )}
    </Provider>
  );
};
// MyApp.getInitialProps = (context) => {
//   console.log(context);
//   return {pageProps:{
//     lang:"en"
//   }}
// }
const makestore = () => store;
const wrapper = createWrapper(makestore);
export default appWithTranslation(wrapper.withRedux(MyApp));
