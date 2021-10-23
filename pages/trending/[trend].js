import React, { useState, useEffect } from "react";
import Media from "react-media";
import Head from "next/head";
import HeaderComponent from "../../components/atom/HeaderComponent";
import algoliasearch from "algoliasearch/lite";
import { trending } from "../../components/Pages/static";
import {
  InstantSearch,
  Hits,
  HitsPerPage,
  Stats,
  Pagination,
  RefinementList,
  NumericMenu,
  ScrollTo,
  SortBy,
  connectCurrentRefinements,
} from "react-instantsearch-dom";
import SingleProduct from "../../components/atom/SingleProduct";
import CustomRangeSlider from "../../components/atom/CustomRangeSlider";
// import Loader from "../../components/atom/Loader";
// import Footer from "../../components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

function TrendingPage(props) {
  const [isSearchStalled, setIsSearchStalled] = useState(true);
  const [trendingName, setTrendingName] = useState("");
  const [mFilter, setMfilter] = useState(false);
  const [locale, setLocale] = useState("en");
  const searchClient = algoliasearch(
    process.env.algolia.appId,
    process.env.algolia.appKey
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.trend) {
      let trending = props.trend;
      setTrendingName(trending.split("-").join(" "));
      setTimeout(() => {
        setIsSearchStalled(false);
      }, 500);
    }
  }, [props.trend]);

  useEffect(() => {
    setLocale(props.lang);
  }, [props.lang]);

  const Hit = ({ hit }) => (
    <div className="product_wrapper">
      <SingleProduct product={hit.product} locale={locale} />
    </div>
  );

  const ClearRefinements = ({ items, refine }) => {
    return (
      <button
        onClick={() => refine(items)}
        className={
          !items.length
            ? "ais-ClearRefinements-button ais-ClearRefinements-button--disabled"
            : "ais-ClearRefinements-button"
        }
        disabled={!items.length}
      >
        Clear all filters
      </button>
    );
  };
  const CustomClearRefinements = connectCurrentRefinements(ClearRefinements);
  const initialState = {
    device: "mobile", // this is a config for SSR, which helps to set the initial device props
  };
  //
  return (
    <>
      <Head>
        <title>{props.name} | BeautyBooth</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Media
        queries={{ medium: "(max-width: 991px)" }}
        defaultMatches={{ medium: initialState.device === "mobile" }}
        render={() => (
          <>
            <div className="category_page">
              <div className="container">
                <HeaderComponent text={trendingName} />
                <InstantSearch searchClient={searchClient} indexName="products">
                  <div className="row">
                    <div className="col-12">
                      <div className="filterContainer">
                        <div className="sortItem">
                          {/* <button>Default Sorting</button> */}
                          <SortBy
                            defaultRefinement="products"
                            items={[
                              {
                                value: "products",
                                label: "Price High to Low",
                              },
                              {
                                value: "instant_search",
                                label: "Price Low to High",
                              },
                            ]}
                          />
                        </div>
                        <div className="filterItem">
                          <button onClick={() => setMfilter(!mFilter)}>
                            Filter By
                          </button>
                        </div>
                        <div
                          className={
                            mFilter
                              ? "filterItemContainer active"
                              : "filterItemContainer"
                          }
                        >
                          <span
                            onClick={() => setMfilter(false)}
                            className="cancleBtn"
                          >
                            <FontAwesomeIcon icon={faWindowClose} size="3x" />
                          </span>
                          <div
                            onClick={() => setMfilter(false)}
                            className="filter__left"
                          ></div>
                          <div className="filterInner">
                            <CustomClearRefinements
                              transformItems={(items) =>
                                items.filter(
                                  ({ attribute }) =>
                                    attribute !== "product.attributes.Trending"
                                )
                              }
                            />
                            {/* <span className="mb_refinment_title">Price</span> */}
                            {/* <CustomRangeSlider attribute="product.price.amount" /> */}
                            <span className="mb_refinment_title">Trending</span>
                            <RefinementList
                              attribute="product.attributes.Trending"
                              showMore
                              defaultRefinement={[trendingName]}
                              transformItems={(items) =>
                                items.map((item) => ({
                                  ...item,
                                  label: item.label.split("-").join(" "),
                                }))
                              }
                            />
                            <span className="mb_refinment_title">Brand</span>
                            <RefinementList
                              attribute="product.attributes.Brand"
                              showMore
                            />
                            <span className="mb_refinment_title">Category</span>
                            <RefinementList
                              attribute="product.categories.name"
                              showMore
                              transformItems={(items) =>
                                items.map((item) => ({
                                  ...item,
                                  label: item.label.split("-").join(" "),
                                }))
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="categories">
                        <div className="hit_result_info">
                          <HitsPerPage
                            defaultRefinement={16}
                            items={[
                              { value: 8, label: "Show 8 Products" },
                              { value: 12, label: "Show 12 Products" },
                              { value: 16, label: "Show 16 Products" },
                            ]}
                          />
                          <Stats />
                        </div>
                        <ScrollTo>
                          <Hits hitComponent={Hit} />{" "}
                        </ScrollTo>

                        <Pagination padding={1} showLast />
                      </div>
                    </div>
                  </div>
                </InstantSearch>
              </div>
            </div>
          </>
        )}
      />
      <Media
        queries={{ medium: "(min-width: 992px)" }}
        defaultMatches={{ medium: initialState.device !== "mobile" }}
        render={() => (
          <>
            <div className="category_page">
              <div className="container">
                <HeaderComponent text={trendingName} />
                <InstantSearch searchClient={searchClient} indexName="products">
                  <div className="row">
                    <div className="col-md-3">
                      {/* <span className="refinment_title">Price</span> */}
                      {/* <CustomRangeSlider attribute="product.price.amount" /> */}
                      <NumericMenu
                        attribute="product.price.amount"
                        items={[
                          { label: "0 - 50 QAR", end: 50 },
                          { label: "50 - 100 QAR ", start: 50, end: 100 },
                          { label: "100 - 200 QAR", start: 100, end: 200 },
                          { label: "200 - 400 QAR", start: 200, end: 400 },
                          { label: "400+ QAR", start: 400 },
                        ]}
                      />
                      <span className="refinment_title">Trending</span>
                      <RefinementList
                        attribute="product.attributes.Trending"
                        defaultRefinement={[trendingName]}
                        showMore
                        transformItems={(items) =>
                          items.map((item) => ({
                            ...item,
                            label: item.label.split("-").join(" "),
                          }))
                        }
                      />

                      <span className="refinment_title">Brand</span>
                      <RefinementList
                        attribute="product.attributes.Brand"
                        showMore
                        searchable
                      />
                      {/* <span className="refinment_title">Category</span>
                    <RefinementList attribute="product.categories.name" /> */}
                    </div>
                    <div className="col-md-9">
                      {/* <SearchBox /> */}
                      <div className="categories">
                        <div className="hit_result_info">
                          <SortBy
                            defaultRefinement="products"
                            items={[
                              {
                                value: "products",
                                label: "Price High to Low",
                              },
                              {
                                value: "instant_search",
                                label: "Price Low to High",
                              },
                            ]}
                          />
                          <HitsPerPage
                            defaultRefinement={21}
                            items={[
                              { value: 6, label: "Show 6 Products" },
                              { value: 12, label: "Show 12 Products" },
                              { value: 18, label: "Show 18 Products" },
                              { value: 21, label: "Show 21 Products" },
                            ]}
                          />
                          <Stats />
                        </div>
                        <ScrollTo>
                          <Hits hitComponent={Hit} />{" "}
                        </ScrollTo>

                        <Pagination showLast />
                      </div>
                    </div>
                  </div>
                </InstantSearch>
              </div>
            </div>
          </>
        )}
      />
    </>
  );
  //
}
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  let paths = [];
  trending["en"].map((trnd) => {
    trnd.map((t) => {
      paths.push({
        params: { trend: t.value.toString().split(" ").join("-") },
      });
    });
  });
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  // Pass post data to the page via props
  return { props: { trend: params.trend, name: params.trend } };
}

export default TrendingPage;
