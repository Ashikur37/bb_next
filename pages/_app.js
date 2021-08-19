
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../redux/store";
import dynamic from 'next/dynamic';
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { appWithTranslation } from "../i18n";
import Navbar from "../components/layout/Navbar";
// Import the CSS
import "../styles/sass/main.scss";
import '../node_modules/swiper/swiper.scss';
import "@fortawesome/fontawesome-svg-core/styles.css";

const Divider = dynamic(()=>import("../components/layout/partials/Divider"));
const Footer = dynamic(()=>import("../components/layout/Footer"));
const cookies = new Cookies();

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
  if (cookies.get("lang") == "ar") {
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

      <Component {...pageProps} FontAwesomeIcon={FontAwesomeIcon} lang={cookies.get("lang")} store={store}/>
      <Footer lang={cookies.get("lang")}  />
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);
export default appWithTranslation(wrapper.withRedux(MyApp));