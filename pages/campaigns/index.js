import React, { useState, useEffect } from "react";
import Link from "next/link";
import Product from "../../components/atom/Product";
import HeaderComponent from "../../components/atom/HeaderComponent";
import axios from "../../redux/actions/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";
import { withTranslation } from "../../i18n";
import Header from "../../components/layout/partials/Header";
import styles from "../../styles/CampaignPage.module.scss";
function index(props) {
  const { t } = props;
  const [offers, setOffers] = useState();
  const [products, setProducts] = useState();
  const [categoryParams, setCategoryParams] = useState(props.id);
  const [categoryName, setCategoryName] = useState();
  const [mFilter, setMFilter] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [items, setItems] = useState();
  const [hasMore, setHasMore] = useState(true);
  const [nextPage, setNextPage] = useState();
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    const categorySelected = props.offers.find((data) => data.id == props.id);
    if (categorySelected) {
      setCategoryName(categorySelected.name);
    }
    setCategoryParams(props.id);
  }, [props.id, props.lang]);

  useEffect(() => {
    setOffers(props.offers);
  }, [props.offers]);
  useEffect(() => {
    let locale = props.language;
    axios
      .get(`${locale}/getdata/offer?type=category&id=${categoryParams}`)
      .then((res) => {
        // let filteredProducts = res.data.products?.data.filter((product) => {
        //   if (product.hasCampaign == true || product.has_offer == true) {
        //     return product;
        //   }
        // });
        // if (filteredProducts.length === 0) {
        //   setEmpty(true);
        // }
        setHasMore(res.data.products.next_page_url !== null);
        setNextPage(2);
        // setLastPage(res.data.products.last_page);
        setProducts(res.data.products.data);

        setItems(res.data.products.data);
        // setCategoryName(categoryParams?res.data.category.name:null);
        setNotFound(false);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [categoryParams, props.language]);
  const fetchMoreData = () => {
    let locale = props.language;
    axios
      .get(
        `${locale}/getdata/offer?type=category&id=${categoryParams}&page=${nextPage}`
      )
      .then((res) => {
        let newItems = products.concat(res.data.products.data);
        setHasMore(res.data.products.next_page_url !== null);
        setProducts(newItems);
        setItems(newItems);
        setNextPage(nextPage + 1);
      });
  };
  return (
    <div className="container my-2">
      <Head>
        <title>Campaigns | Beautyboothqa</title>
      </Head>
      {!notFound && categoryParams && (
        <div className="text-center">
          <Header text={`${props.t("SALE ON")} ${categoryName}`} />
        </div>
      )}
      {notFound && <HeaderComponent text="No Data Found" />}
      <div className="row">
        <div className="col">
          <div className={styles.mbRefine}>
            <div className={`${styles.mbbuttonWrap} text-right mr-2 mb-3`}>
              <button onClick={() => setMFilter(!mFilter)} className={styles.mbButton}>
                {t("Refine")}
              </button>
            </div>
            <div
              className={
                mFilter ? `${styles.filterItemContainer} ${styles.active}` : `${styles.filterItemContainer}`
              }
            >
              <span onClick={() => setMFilter(false)} className={styles.cancleBtn}>
                <FontAwesomeIcon icon={faWindowClose} size="3x" />
              </span>
              <div className={styles.filterInner}>
                <div className={styles.sidebarHeader}>
                  <span className={styles.headerTitle}>{t("Refine")}</span>
                </div>
                <div className={styles.sidebarContent}>
                  <ul>
                    {offers &&
                      offers.map((offer) => (
                        <li>
                          <Link href={`/campaigns?id=${offer.id}`}>
                            <a
                              onClick={() => setMFilter(false)}
                              className={
                                categoryParams == offer.id ? styles.active : ""
                              }
                            >
                              {offer.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    <li>
                      <Link href="/campaigns/other">
                        <a>{t("Others")}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3">
          <div className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
              <span className={styles.headerTitle}>{t("Refine")}</span>
            </div>
            <div className={styles.sidebarContent}>
              <ul>
                {offers &&
                  offers.map((offer) => (
                    <li>
                      <Link href={`/campaigns?id=${offer.id}`}>
                        <a
                          className={
                            categoryParams == offer.id ? styles.active : ""
                          }
                        >
                          {offer.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                <li>
                  <Link href="/campaigns/other">
                    <a>{t("Others")}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className={styles.saleProducts}>
            {/* {products &&
              products.map((product) => (
                <Product product={product} key={product.id} />
              ))} */}
            {empty && (
              <h5 className="alert alert-info">
                No products for now. Please come back again
              </h5>
            )}

            {items && (
              <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <h2 style={{ textAlign: "center" }}>Loading...</h2>
                      </div>
                    </div>
                  </div>
                }
                endMessage={
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <p style={{ textAlign: "center" }}>
                          <b>Yay! You have seen it all</b>
                        </p>
                      </div>
                    </div>
                  </div>
                }
              >
                <>
                  <div className="row no-gutters">
                    {items.map((product) => (
                      // <h2>{product.name}</h2>
                      <div className=" mb-3 col-6 col-xs-6 col-xs-6 col-md-4  ">
                        <Product product={product} key={product.id} />
                      </div>
                    ))}
                  </div>
                </>
              </InfiniteScroll>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  let language = context.req.language || "en";

  const offers = await axios
    .get(language + "/getdata/campaign_offers")
    .then((res) => {
      return res.data.categories;
    })
    .catch();
  return {
    props: {
      id: context.query?.id ? context.query.id : "",
      offers,
      language,
    },
  };
}
export default withTranslation("common")(index);
