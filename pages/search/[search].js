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
  SortBy,
  ScrollTo,
  connectCurrentRefinements,
} from "react-instantsearch-dom";
import SingleProduct from "../../components/atom/SingleProduct";
import CustomRangeSlider from "../../components/atom/CustomRangeSlider";
// import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

function SearchPage(props) {
  const [query, setQuery] = useState("");
  const [mFilter, setMfilter] = useState(false);
  const [locale,setLocale] = useState("en");
  const [sortIndexName, setSortIndexName] = useState("products");

  const initialState = {
    device: "mobile", // this is a config for SSR, which helps to set the initial device props
  };

  const searchClient = algoliasearch(
    process.env.algolia.appId,
    process.env.algolia.appKey
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let query = props.name;
    setQuery(query);
    setLocale(props.lang);
  }, [props.name,props.lang]);

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
  const Hit = ({ hit }) => (
    <div className="product_wrapper">
      <SingleProduct product={hit.product} locale={locale}/>
    </div>
  );

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
                <HeaderComponent
                  text={`Search Result For : ` + query.split("-").join(" ")}
                />
                <InstantSearch searchClient={searchClient} indexName="products">
                  <div className="row">
                    <div className="col-md-3">
                      <SearchBox defaultRefinement={query} />
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
                            <span className="mb_refinment_title">Price</span>
                            {/* <CustomRangeSlider attribute="product.price.amount" /> */}
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

                            <span className="mb_refinment_title">Trending</span>
                            <RefinementList
                              attribute="product.attributes.Trending"
                              showMore
                              transformItems={(items) =>
                                items.map((item) => ({
                                  ...item,
                                  label: item.label.split("-").join(" "),
                                }))
                              }
                            />
                            <span className="mb_refinment_title">Concern</span>
                            <RefinementList
                              attribute="product.attributes.Concern"
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
                    <div className="col-md-9">
                      <div className="categories">
                        <div className="hit_result_info">
                          <HitsPerPage
                            defaultRefinement={24}
                            items={[
                              { value: 8, label: "Show 8 Products" },
                              { value: 12, label: "Show 12 Products" },
                              { value: 16, label: "Show 16 Products" },
                              { value: 20, label: "Show 20 Products" },
                              { value: 24, label: "Show 24 Products" },
                            ]}
                          />
                          <Stats />
                        </div>
                        <ScrollTo>
                          <Hits hitComponent={Hit} />
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
                <HeaderComponent
                  text={`Search Result For : ` + query.split("-").join(" ")}
                />
                <InstantSearch searchClient={searchClient} indexName="products">
                  <div className="row">
                    <div className="col-md-3">
                      <span className="refinment_title">Price</span>
                      {/* <CustomRangeSlider attribute="product.price.amount" /> */}
                      <span className="refinment_title">Category</span>
                      <RefinementList
                        attribute="product.categories.name"
                        // defaultRefinement={[]}
                        transformItems={(items) =>
                          items.map((item) => ({
                            ...item,
                            label: item.label.split("-").join(" "),
                          }))
                        }
                      />

                      <span className="refinment_title">Brand</span>
                      <RefinementList attribute="product.attributes.Brand" />
                      <span className="refinment_title">Trending</span>
                      <RefinementList attribute="product.attributes.Trending" />
                    </div>
                    <div className="col-md-9">
                      <SearchBox defaultRefinement={query} />
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

// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  let name = context.params.search;

  // Pass data to the page via props
  return { props: { name } };
}

export default SearchPage;
