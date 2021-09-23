import React, { useEffect, Suspense, lazy } from "react";
import { isMobile, isMobileOnly } from "react-device-detect";
import { connect } from "react-redux";
// import { getHomePageData } from "../../redux/actions/homePageActions";
import {
  trending_mobile,
  slider_mobile,
  concern_mobile,
} from "../mobile/static";

import { trending, concern, slider } from "./static";
import Footer from "../layout/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HomeCarosul = lazy(() => import("../HomeCarosul"));
const Message = lazy(() => import("../Message"));
const Trending = lazy(() => import("../Trending"));
const Concern = lazy(() => import("../Concern"));

const TopSellers = lazy(() => import("../TopSellers"));
const Brands = lazy(() => import("../Brands"));
const NewArrival = lazy(() => import("../NewArrival"));
// const Magazine = lazy(() => import("../Magazine"));
// const NewsLetter = lazy(() => import("../NewsLetter"));

function HomePage(props) {
  // useEffect(() => {
  //   // if (isMobile === false) {
  //   //   props.getHomePageData();
  //   // }
  //   if(!isMobile){
  //     const script = document.createElement('script');
  //     script.src = "https://code.tidio.co/78qfcpefcnzbgxw8p5mepwdusgyunte4.js";
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }
  // }, []);
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Beauty Booth</title>
      </Helmet>
      </HelmetProvider>
      <Suspense fallback={null}>
        <HomeCarosul
          slider={isMobile ? slider_mobile : props.slider}
          isMobile={isMobileOnly}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Message />
      </Suspense>
      
      <Suspense fallback={null}>
        <Trending trending={props.trending} isMobile={isMobile} />
      </Suspense>
      <Suspense fallback={null}>
        <Concern concern={props.concern} isMobile={isMobile} />
      </Suspense>
      <Suspense fallback={null}>
        <TopSellers />
      </Suspense>

      <Suspense fallback={null}>
        <NewArrival />
      </Suspense>
      <Suspense fallback={null}>
        <Brands />
      </Suspense>
      {/* <Suspense fallback={null}>
        <NewsLetter />
      </Suspense> */}

      {/* <Suspense fallback={(null)}>
      <Magazine />
    </Suspense> */}
      <Suspense fallback="null">
        <Footer />
      </Suspense>
    </>
  );
}

// export default HomePage;

const mapStateToProps = (state) => ({
  slider: state.homePage.slider,
  trending: state.homePage.trending,
  concern: state.homePage.concern,
});
const mapDispatchToProps = (dispatch) => {
  if (!isMobile) {
    // return {
    //   getHomePageData: () => getHomePageData(dispatch),
    // };
    return dispatch({
      type: "GET_HOME_PAGE_DATA",
      payload: {
        slider: slider,
        trending: trending,
        concern: concern,
      },
    });
  } else {
    return dispatch({
      type: "GET_HOME_PAGE_DATA",
      payload: {
        slider: slider_mobile,
        trending: trending_mobile,
        concern: concern_mobile,
      },
    });
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
