import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import HeaderComponent from "../../components/atom/HeaderComponent";
import algoliasearch from "algoliasearch/lite";
import Media from "react-media";
import Head from "next/head";

import {
  InstantSearch,
  SearchBox,
  Hits,
  HitsPerPage,
  Stats,
  Pagination,
  RefinementList,
  connectSortBy,
  ScrollTo,
  NumericMenu,
  connectCurrentRefinements,
} from "react-instantsearch-dom";
import SingleProduct from "../../components/atom/SingleProduct";
import CustomRangeSlider from "../../components/atom/CustomRangeSlider";
import { connect } from "react-redux";

import { concern_mobile } from "../../components/mobile/static";
import { concern } from "../../components/Pages/static";
import Loader from "../../components/atom/Loader";
import Footer from "../../components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

function ConcernPage(props) {
  const [isSearchStalled, setIsSearchStalled] = useState(true);
  const [concernName, setConcernName] = useState(null);
  const [sortIndexName, setSortIndexName] = useState("products");
  const [mFilter, setMfilter] = useState(false);
  const [locale, setLocale] = useState("en");
  // const searchClient = algoliasearch(
  //   process.env.algolia.appId,
  //   process.env.algolia.appKey
  // );
  const initialState = {
    device: "mobile", // this is a config for SSR, which helps to set the initial device props
  };
  const searchClient = algoliasearch(
    process.env.algolia.appId,
    process.env.algolia.appKey
  );

  function findTheConcern(concern, slug) {
    concern.forEach((element) => {
      if (element.slug == slug) {
        setConcernName(element.value);
        return element.value;
      } else if (element.hasItems) {
        findTheConcern(element.items, slug);
      }
    });
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.name !== "") {
      setConcernName(props.name);
    }
  }, [concernName, props.concern, props.name]);

  useEffect(() => {
    setLocale(props.lang );
  }, [props.lang]);

  const Hit = ({ hit }) => (
    <div className="product_wrapper">
      <SingleProduct product={hit.product} locale={locale} />
    </div>
  );

  const SortBy = ({ items }) => (
    <select
      value={sortIndexName}
      className="ais-SortBy-select"
      onChange={(e) => {
        setSortIndexName(e.currentTarget.value);
      }}
    >
      {items.map((item) => (
        <option
          className="ais-SortBy-option"
          value={item.indexName}
          key={item.value}
        >
          {item.label}
        </option>
      ))}
    </select>
  );

  const CustomSortBy = connectSortBy(SortBy);
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
            <div className="concern_page">
              <div className="container">
                <HeaderComponent text={concernName} />
                <InstantSearch searchClient={searchClient} indexName="products">
                  <div className="row">
                    <div className="col-12">
                      <div className="filterContainer">
                        <div className="sortItem">
                          {/* <button>Default Sorting</button> */}
                          <CustomSortBy
                            defaultRefinement={sortIndexName}
                            items={[
                              {
                                value: "",
                                label: "Price Low to High",
                                indexName: "products",
                              },
                              {
                                value: "product.selling_price.amount",
                                label: "Price High to Low",
                                indexName: "instant_search",
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
                                    attribute !== "product.attributes.Concern"
                                )
                              }
                            />
                            <span className="mb_refinment_title">Price</span>
                            {/* <CustomRangeSlider attribute="product.price.amount" /> */}
                            <span className="mb_refinment_title">Concern</span>
                            <RefinementList
                              attribute="product.attributes.Concern"
                              showMore
                              defaultRefinement={[concernName]}
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
                      {/* <SearchBox /> */}
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
                <HeaderComponent text={concernName} />
                <InstantSearch searchClient={searchClient} indexName="products">
                  <div className="row">
                    <div className="col-md-3">
                      <span className="refinment_title">Price</span>
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
                      <span className="refinment_title">Concern</span>
                      <RefinementList
                        attribute="product.attributes.Concern"
                        defaultRefinement={[concernName]}
                        transformItems={(items) =>
                          items.map((item) => ({
                            ...item,
                            label: item.label.split("-").join(" "),
                          }))
                        }
                      />
                      <span className="refinment_title">Trending</span>
                      <RefinementList
                        attribute="product.attributes.Trending"
                        transformItems={(items) =>
                          items.map((item) => ({
                            ...item,
                            label: item.label.split("-").join(" "),
                          }))
                        }
                      />
                      <span className="refinment_title">Category</span>
                      <RefinementList attribute="product.categories.name" />
                      <span className="refinment_title">Brand</span>
                      <RefinementList attribute="product.attributes.Brand" />
                    </div>
                    <div className="col-md-9">
                      {/* <SearchBox /> */}
                      <div className="categories">
                        <div className="hit_result_info">
                          <CustomSortBy
                            defaultRefinement={sortIndexName}
                            items={[
                              {
                                value: "",
                                label: "Price Low to High",
                                indexName: "products",
                              },
                              {
                                value: "product.selling_price.amount",
                                label: "Price High to Low",
                                indexName: "instant_search",
                              },
                            ]}
                          />
                          <HitsPerPage
                            defaultRefinement={21}
                            items={[
                              { value: 12, label: "Show 12 Products" },
                              { value: 15, label: "Show 15 Products" },
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
  if (isMobile) {
    concern_mobile.map((t) => {
      paths.push({ params: { concern: t.slug.toString() } });
    });
  } else {
    concern["en"].map((t) => {
      paths.push({ params: { concern: t.slug.toString() } });
    });
  }
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  let name = concern["en"].filter((c) => c.slug === params.concern)[0] || {
    value: "",
  };

  // Pass post data to the page via props
  return { props: { concern: params.concern, name: name.value } };
}

export default ConcernPage;
