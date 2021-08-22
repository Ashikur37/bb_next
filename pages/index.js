import dynamic from "next/dynamic";
import { connect } from "react-redux";
import Link from "next/link";
import { withTranslation } from "../i18n";
import { isMobile } from "react-device-detect";
import { trending, concern } from "../components/utils/static";
import { useEffect } from "react";
import Axios from "axios";
import LazyLoad from "react-lazyload";

// css must the the last normal import
import styles from "../styles/HomePage.module.scss";
//dynamic imports should be in bottom
const Title = dynamic(() => import("../components/layout/partials/Title"));
const Header = dynamic(() => import("../components/layout/partials/Header"));
const Slider = dynamic(() => import("../components/homepage/Slider"));
const Trending = dynamic(() => import("../components/homepage/Trending"));
const Concern = dynamic(() => import("../components/homepage/Concern"));
const TopSellers = dynamic(() => import("../components/homepage/TopSellers"));
const NewArrival = dynamic(() => import("../components/homepage/NewArrival"));
const Brands = dynamic(() => import("../components/homepage/Brands"));

const Home = ({ FontAwesomeIcon, lang, store, slider, t }) => {
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
      Axios.get(
        "https://dashboard.beautybooth.shop/website-settings/get-mobile-banner"
      )
        .then((res) => {
          store.dispatch({
            type: "GET_MOBILE_BANNER",
            payload: res.data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [lang, store]);
  return (
    <>
      <Title title="Home | BeautyboothQA"></Title>
      <Slider
        styles={styles}
        lang={lang}
        slides={slider}
        isMobile={isMobile}
        Link={Link}
      ></Slider>
      <Trending
        trendings={trending}
        FontAwesomeIcon={FontAwesomeIcon}
        lang={lang}
        isMobile={isMobile}
        Link={Link}
        Header={Header}
        t={t}
      ></Trending>
      <LazyLoad
        offset={[-200, 0]}
        placeholder={<Header text="SHOP BY CONCERN" h="h2"></Header>}
        debounce={200}
        once
      >
        <Concern
          concerns={concern}
          FontAwesomeIcon={FontAwesomeIcon}
          lang={lang}
          isMobile={isMobile}
          Link={Link}
          Header={Header}

          t={t}
        ></Concern>
      </LazyLoad>
      <LazyLoad
        offset={[-200, 0]}
        placeholder={<Header text="Best Selling" h="h2"></Header>}
        debounce={200}
        once
      >
        <TopSellers
          FontAwesomeIcon={FontAwesomeIcon}
          Link={Link}
          Header={Header}
          styles={styles}
          lang={lang}
          t={t}
        />
      </LazyLoad>
      <LazyLoad
        offset={[-200, 0]}
        placeholder={<Header text="Best Selling" h="h2"></Header>}
        debounce={200}
        once
      >
        <NewArrival
          FontAwesomeIcon={FontAwesomeIcon}
          Link={Link}
          Header={Header}
          styles={styles}
          lang={lang}
          t={t}
        />
      </LazyLoad>
      <LazyLoad
        offset={[-200, 0]}
        placeholder={<Header text="Brands.." h="h2"></Header>}
        debounce={200}
        once
      >
        <Brands
          FontAwesomeIcon={FontAwesomeIcon}
          Link={Link}
          Header={Header}
          styles={styles}
          lang={lang}
          t={t}
        />
      </LazyLoad>
      
    </>
  );
};

const mapStateToProps = (state) => ({
  slider: state.layout.slider,
});

export default withTranslation("common")(connect(mapStateToProps, null)(Home));
