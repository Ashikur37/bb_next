import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import HeaderComponent from "../atom/HeaderComponent";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
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
import SingleProduct from "../atom/SingleProduct";
import CustomRangeSlider from "../atom/CustomRangeSlider";
import Loader from "../atom/Loader";
import { withRouter } from "react-router-dom";
import Footer from "../layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

function TrendingPage(props) {
  const [isSearchStalled, setIsSearchStalled] = useState(true);
  const [trendingName, setTrendingName] = useState("");
  const [sortIndexName, setSortIndexName] = useState("products");
  const [mFilter, setMfilter] = useState(false);
  // const searchClient = algoliasearch(
  //   "4F2AV10UAX",
  //   "b7e52f6f6ad165b30cfdc3d0e2e3e67d"
  // );
  const searchClient = algoliasearch(
    "HPKCKDRHRT",
    "eec40e4466e90ed437e1c7639aa54feb"
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let trending = props.match.params.trending;
    setTrendingName(trending.split("-").join(" "));
    setTimeout(() => {
      setIsSearchStalled(false);
    }, 500);
  }, [props.match.params.trending]);

  const Hit = ({ hit }) => (
    <div className="product_wrapper">
      <SingleProduct product={hit.product} />
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
  if (isMobile) {
    return (
      <>
        <div className="category_page">
          {!isSearchStalled ? (
            <div className="container">
              <HeaderComponent text={trendingName} />
              <InstantSearch searchClient={searchClient} indexName="products">
                <div className="row">
                  <div className="col-12">
                    <div className="filterContainer">
                      <div className="sortItem">
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
                          <CustomRangeSlider attribute="product.price.amount" />
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
                          defaultRefinement={12}
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
          ) : (
              <div className="loader">
                <Loader />
              </div>
            )}
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="category_page">
        <div className="container">
          <HeaderComponent text={trendingName} />
          <InstantSearch searchClient={searchClient} indexName="products">
            <div className="row">
              <div className="col-md-3">
                <span className="refinment_title">Price</span>
                <CustomRangeSlider attribute="product.price.amount" />
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
                <SearchBox />
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
                      defaultRefinement={12}
                      items={[
                        { value: 6, label: "Show 6 Products" },
                        { value: 12, label: "Show 12 Products" },
                        { value: 15, label: "Show 15 Products" },
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
      <Footer />
    </>
  );
}

export default withRouter(TrendingPage);
