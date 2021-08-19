import dynamic from "next/dynamic";
import { connect } from "react-redux";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { trending, concern } from "../components/utils/static";
import { useEffect } from "react";
import Axios from "axios";
import {
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
// css must the the last normal import
import styles from "../styles/HomePage.module.scss";
//dynamic imports should be in bottom
const Title = dynamic(() => import('../components/layout/partials/Title'));
const Header = dynamic(() => import('../components/layout/partials/Header'));
const Slider = dynamic(() => import('../components/homepage/Slider'));
const Trending = dynamic(() => import('../components/homepage/Trending'));


const Home = ({ FontAwesomeIcon, lang, store, slider }) => {
  useEffect(() => {
    if (!isMobile) {
      let url = "/api/menu?locale=" + lang;
      Axios.get(url).then((res) => {
        store.dispatch({
          type: "GET_LAYOUT_DATA",
          payload: res.data,
        });
        // setCategoryMenu(createMenu(res.data.menu));
      });
    } else {
      Axios.get("https://dashboard.beautybooth.shop/website-settings/get-mobile-banner")
        .then((res) => {
          store.dispatch({
            type: "GET_MOBILE_BANNER",
            payload: res.data,
          });
        }).catch(err => {
          console.log(err);
        });
    }
  }, [lang, store]);
  return (
    <>
      <Title title="Home | BeautyboothQA"></Title>
      <Slider FontAwesomeIcon={FontAwesomeIcon} styles={styles} lang={lang} slides={slider} isMobile={isMobile} Link={Link}></Slider>
      <Trending trendings={trending} FontAwesomeIcon={FontAwesomeIcon} faArrowLeft={faArrowLeft}
        faArrowRight={faArrowRight} lang={lang} isMobile={isMobile} Link={Link} Header={Header}></Trending>
    </>
  );
}

const mapStateToProps = (state) => ({
  slider: state.layout.slider,
});


export default connect(mapStateToProps, null)(Home);