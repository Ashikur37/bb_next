import React, { useEffect, useState } from "react";
import axios from "../redux/actions/axios";
import Product from "../components/atom/Product";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";
import { withTranslation } from "../i18n";
import styles from "../styles/BestSelling.module.scss";
const BestSelling = ({ bestSellingProducts, language }) => {
  const [items, setItems] = useState(bestSellingProducts.data);
  const [hasMore, setHasMore] = useState(true);
  const [nextPage, setNextPage] = useState();
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    axios
      .get(`${language}/getdata/products/best-selling?page=2`)
      .then((res) => {
        setHasMore(res.data.next_page_url !== null);
        setNextPage(3);
        setProducts(res.data.data);
        setItems(res.data.data);
        setNotFound(false);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [language]);
  const fetchMoreData = () => {
    axios
      .get(
        `${language}/getdata/products/best-selling?page=${nextPage}`
      )
      .then((res) => {
        let newItems = items.concat(res.data.data);
        setHasMore(res.data.next_page_url !== null);
        setItems(newItems);
        setNextPage(nextPage + 1);
      });
  };
  return (
    <>
      <div className="container mt-4">
        <Head>
          <title>Best selling | Beautyboothqa</title>
        </Head>
        <div className="row no-gutters">
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
                      <b>You have seen it all</b>
                    </p>
                  </div>
                </div>
              </div>
            }
          >
            <>
              <div className="row no-gutters">
                {items.map((product) => (
                  <div
                    key={product.id}
                    className="mb-3 col-md-3 col-sm-6 col-6"
                  >
                    <Product product={product} key={product.id} styles={styles} />
                  </div>
                ))}
              </div>
            </>
          </InfiniteScroll>
        </div>
      </div>
      )
    </>
  );
};
export async function getServerSideProps(context) {
  let language = context.req.language || "en";
  let bestSellingProducts = await axios
    .get(`${language}/getdata/products/best-selling`)
    .then((res) => {
      return res.data;
    });
  return {
    props: {
      bestSellingProducts,
      language
    },
  };
}

export default withTranslation("common")(BestSelling);
