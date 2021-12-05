import React, { useState, useEffect } from "react";
import axios from "../../redux/actions/axios";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../../styles/BestSelling.module.scss";
import Product from "../../components/atom/Product";
import Header from "../../components/layout/partials/Header";
function CategoryOffer({ offerProducts, language, offer }) {
  const [items, setItems] = useState(offerProducts.data);
  const [hasMore, setHasMore] = useState(true);
  const [nextPage, setNextPage] = useState();
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    axios
      .get(`${language}/getdata/offer?type=category&id=${offer.id}&page=2`)
      .then((res) => {
        setHasMore(res.data.next_page_url !== null);
        setNextPage(2);
        // setProducts(res.data.data);
        // setItems(res.data.products.data);
        setNotFound(false);
      })
      .catch((err) => {
        setNotFound(true);
      });
  }, [language]);
  const fetchMoreData = () => {
    axios
      .get(
        `${language}/getdata/offer?type=category&id=${offer.id}&page=${nextPage}`
      )
      .then((res) => {
        let newItems = items.concat(res.data.products.data);
        setHasMore(res.data.products.next_page_url !== null);
        // setProducts(newItems);
        setItems(newItems);
        setNextPage(nextPage + 1);
      });
  };
  return (
    <>
      <div className="container mt-4">
        <Head>
          <title>Sale | Beautyboothqa</title>
        </Head>
        <div className="text-center">
          <Header text={`SALE ON ${offer.name}`} textColor={"red"} />
        </div>
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
                {items &&
                  items.map((product) => (
                    <div
                      key={product.id}
                      className="mb-3 col-md-3 col-sm-6 col-6"
                    >
                      <Product
                        product={product}
                        key={product.id}
                        styles={styles}
                      />
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
}
export async function getServerSideProps(context) {
  let slug = context.params.slug;
  let language = context.req.language || "en";
  const offers = await axios
    .get(language + "/getdata/campaign_offers")
    .then((res) => {
      return res.data.categories;
    })
    .catch();
  let selected = offers.find((offer) => offer.slug == slug);
  let offerProducts = await axios
    .get(`${language}/getdata/offer?type=category&id=${selected.id}`)
    .then((res) => {
      return res.data.products;
    });
  return {
    props: {
      offerProducts,
      offer: selected,
      language,
    },
  };
}
export default CategoryOffer;
