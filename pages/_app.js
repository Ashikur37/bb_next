import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
import dynamic from "next/dynamic";
import Cookies from "universal-cookie";
import Media from "react-media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appWithTranslation, useTranslation } from "../i18n";
import Navbar from "../components/layout/Navbar";
// Import the CSS
import "../styles/sass/main.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import MobileFooterMenu from "../components/mobile/MobileFooterMenu";

const Divider = dynamic(() => import("../components/layout/partials/Divider"));
const Menu = dynamic(() => import("../components/layout/Menu"));
const Footer = dynamic(() => import("../components/layout/Footer"));
const cookies = new Cookies();
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
function MyApp({ Component, pageProps }) {
  if (cookies.get("lang") === undefined) {
    cookies.set("next-i18next", "en");
    cookies.set("lang", "en");
    // document.body.dir = "ltr";
  }
  if (cookies.get("lang") === "en") {
    cookies.set("next-i18next", "en");
    if (typeof document != "undefined") {
      document.body.classList.remove("rtl");
      document.body.dir = "ltr";
    }
  }
  if (cookies.get("lang") == "ar_QA") {
    cookies.set("next-i18next", "ar_QA");
    if (document) {
      document.body.classList.add("rtl");
      document.body.dir = "rtl";
    }
  }
  return (
    <Provider store={store}>
      <Navbar FontAwesomeIcon={FontAwesomeIcon} lang={cookies.get("lang")} />
      <Divider />
      <Menu lang={cookies.get("lang")} />
      <Divider />

      <Component
        {...pageProps}
        FontAwesomeIcon={FontAwesomeIcon}
        lang={cookies.get("lang")}
        store={store}
      />
      <Footer lang={cookies.get("lang")} FontAwesomeIcon={FontAwesomeIcon} />
      <Media query="(max-width: 991px)" render={() => <MobileFooterMenu />} />
      <Media query="(min-width: 992px)" render={() => <Tidio />} />
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default appWithTranslation(wrapper.withRedux(MyApp));
