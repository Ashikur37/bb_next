import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Devider from "../components/layout/Devider";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/sass/main.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar FontAwesomeIcon={FontAwesomeIcon} />
      <Devider />

      <Component {...pageProps} FontAwesomeIcon={FontAwesomeIcon} />
      <Footer />
    </>
  );
}

export default MyApp;
