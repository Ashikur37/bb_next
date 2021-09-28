import dynamic from "next/dynamic";
import { withTranslation } from "../i18n";
import LazyLoad from "react-lazyload";
// import { trending, concern } from "../components/utils/static";

// css must the the last normal import
import styles from "../styles/HomePage.module.scss";
//dynamic imports should be in bottom
const Title = dynamic(() => import("../components/layout/partials/Title"));
const Header = dynamic(() => import("../components/layout/partials/Header"));
const Loading = dynamic(() => import("../components/atom/Loading"));
const Slider = dynamic(() => import("../components/homepage/Slider"));
const Trending = dynamic(() => import("../components/homepage/Trending"));
const Concern = dynamic(() => import("../components/homepage/Concern"));
const TopSellers = dynamic(() => import("../components/homepage/TopSellers"));
const NewArrival = dynamic(() => import("../components/homepage/NewArrival"));
const Brands = dynamic(() => import("../components/homepage/Brands"));
const Blogs = dynamic(() => import("../components/homepage/Blogs"));
const MobileMenu = dynamic(() => import("../components/layout/MobileMenu"));

const Home = ({ FontAwesomeIcon, lang, store, t }) => {

  return (
    <>
      <Title title="Home | BeautyboothQA"></Title>
      <MobileMenu style={styles} lang={lang} />

      <Slider
        styles={styles}
        store={store}
        lang={lang}
      ></Slider>

      <LazyLoad
        offset={[-200, 0]}
        placeholder={
          (<Loading text={t("trending_on_site")} />)
        }
        debounce={200}
        once
      >
        <Trending
          FontAwesomeIcon={FontAwesomeIcon}
          lang={lang}
          Header={Header}
          t={t}
        ></Trending>
      </LazyLoad>
      <LazyLoad
        offset={[-200, 0]}
        placeholder={
          (<Loading text={t("shop_by_concern")} />)
        }
        debounce={200}
        once
      >
        <Concern
          FontAwesomeIcon={FontAwesomeIcon}
          lang={lang}
          Header={Header}
          t={t}
        ></Concern>
      </LazyLoad>
      <LazyLoad
        offset={[-240, 0]}
        placeholder={
          <Loading text={t("best_selling")} />
        }
        debounce={200}
        once
      >
        <TopSellers
          FontAwesomeIcon={FontAwesomeIcon}
          Header={Header}
          styles={styles}
          lang={lang}
          t={t}
        />
      </LazyLoad>
      <LazyLoad
        offset={[-240, 0]}
        placeholder={
          <Loading text={t("new_arrival")} />
        }
        debounce={200}
        once
      >
        <NewArrival
          FontAwesomeIcon={FontAwesomeIcon}
          Header={Header}
          styles={styles}
          lang={lang}
          t={t}
        />
      </LazyLoad>
      <LazyLoad
        offset={[-240, 0]}
        placeholder={
          <Loading text={t("best_brands")} />
        }
        debounce={200}
        once
      >
        <Brands
          FontAwesomeIcon={FontAwesomeIcon}
          Header={Header}
          styles={styles}
          lang={lang}
          t={t}
        />
      </LazyLoad>
      <LazyLoad
        offset={[-240, 0]}
        placeholder={<Loading text={t("our_blog")} />}
        debounce={200}
        once
      >
        <Blogs
          FontAwesomeIcon={FontAwesomeIcon}
          Header={Header}
          styles={styles}
          lang={lang}
          t={t}
        />
      </LazyLoad>
    </>
  );
};

export default withTranslation("common")(Home);
